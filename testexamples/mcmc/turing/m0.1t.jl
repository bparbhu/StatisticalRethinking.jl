# ## Linear Regression

# ### Added snippet used as a reference for all models

# This model is based on the TuringTutorial example [LinearRegression](https://github.com/TuringLang/TuringTutorials/blob/csp/linear/LinearRegression.ipynb) by Cameron Pfiffer. 

# Turing is powerful when applied to complex hierarchical models, but it can also be put to task at common statistical procedures, like linear regression. This tutorial covers how to implement a linear regression model in Turing.

# We begin by importing all the necessary libraries.

# Import StratisticalRethinking.

using StatisticalRethinking

# Hide the progress prompt while sampling.

Turing.turnprogress(false);

# We will use the mtcars dataset from the RDatasets package. mtcars contains a variety of statistics on different car models, including their miles per gallon, number of cylinders, and horsepower, among others.

# We want to know if we can construct a Bayesian linear regression model to predict the miles per gallon of a car, given the other statistics it has. Lets take a look at the data we have.

# Import the dataset.

data = RDatasets.dataset("datasets", "mtcars");

# Show the first six rows of the dataset.

first(data, 6)

# The next step is to get our data ready for testing. We'll split the mtcars dataset into two subsets, one for training our model and one for evaluating our model. Then, we separate the labels we want to learn (MPG, in this case) and standardize the datasets by subtracting each column's means and dividing by the standard deviation of that column.

# The resulting data is not very familiar looking, but this standardization process helps the sampler converge far easier. We also create a function called unstandardize, which returns the standardized values to their original form. We will use this function later on when we make predictions.

# Split our dataset 70%/30% into training/test sets.

train, test = MLDataUtils.splitobs(data, at = 0.7);

# Save dataframe versions of our dataset.

train_cut = DataFrame(train)
test_cut = DataFrame(test)

# Create our labels. These are the values we are trying to predict.

train_label = train[:, :MPG]
test_label = test[:, :MPG]

# Get the list of columns to keep.

remove_names = filter(x->!in(x, [:MPG, :Model]), names(data))

# Filter the test and train sets.

train = Matrix(train[:,remove_names]);
test = Matrix(test[:,remove_names]);

# A handy helper function to rescale our dataset.

function standardize(x)
    return (x .- mean(x, dims=1)) ./ std(x, dims=1), x
end

# Another helper function to unstandardize our datasets.

function unstandardize(x, orig)
    return x .* std(orig, dims=1) .+ mean(orig, dims=1)
end

# Standardize our dataset.

(train, train_orig) = standardize(train)
(test, test_orig) = standardize(test)
(train_label, train_l_orig) = standardize(train_label)
(test_label, test_l_orig) = standardize(test_label);

# Bayesian linear regression.

@model linear_regression(x, y, n_obs, n_vars) = begin
    # Set variance prior.
    σ₂ ~ TruncatedNormal(0,100, 0, Inf)
    
    # Set intercept prior.
    intercept ~ Normal(0, 3)
    
    # Set the priors on our coefficients.
    coefficients = Array{Real}(undef, n_vars)
    coefficients ~ [Normal(0, 10)]
    
    # Calculate all the mu terms.
    mu = intercept .+ x * coefficients
    for i = 1:n_obs
        y[i] ~ Normal(mu[i], σ₂)
    end
end;

# With our model specified, we can call the sampler. We will use the No U-Turn Sampler (NUTS) here.

n_obs, n_vars = size(train)
model = linear_regression(train, train_label, n_obs, n_vars)
chain = sample(model, NUTS(1500, 200, 0.65));

# Plot the chains.

plot(chain)

# Describe the chains.

describe(chain)

for var in [:σ₂]
  println("$var = ",  mean_and_std(chain[Symbol(var)][200:1500]))
end


# Perform multivariate OLS.

ols = lm(@formula(MPG ~ Cyl + Disp + HP + DRat + WT + QSec + VS + AM + Gear + Carb), train_cut)

# Store our predictions in the original dataframe.
train_cut.OLSPrediction = predict(ols);
test_cut.OLSPrediction = predict(ols, test_cut);

# Make a prediction given an input vector.

function prediction(chain, x)
    α = chain[:intercept][200:end]
    β = chain[:coefficients][200:end]
    return  mean(α) .+ x * mean(β)
end

# Calculate the predictions for the training and testing sets.

train_cut.BayesPredictions = unstandardize(prediction(chain, train), train_l_orig);
test_cut.BayesPredictions = unstandardize(prediction(chain, test), test_l_orig);

# Show the first side rows of the modified dataframe.

first(test_cut, 6)

bayes_loss1 = sum((train_cut.BayesPredictions - train_cut.MPG).^2)
ols_loss1 = sum((train_cut.OLSPrediction - train_cut.MPG).^2)

bayes_loss2 = sum((test_cut.BayesPredictions - test_cut.MPG).^2)
ols_loss2 = sum((test_cut.OLSPrediction - test_cut.MPG).^2)

println("Training set:")
println("  Bayes loss: $bayes_loss1")
println("  OLS loss: $ols_loss1")

println("Test set:")
println("  Bayes loss: $bayes_loss2")
println("  OLS loss: $ols_loss2")
