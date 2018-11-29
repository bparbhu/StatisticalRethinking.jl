var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#StatisticalRethinking-1",
    "page": "Home",
    "title": "StatisticalRethinking",
    "category": "section",
    "text": "StatisticalRethinking is a Julia implementation of the code accompanying the book StatisticalRethinking.CurrentModule = StatisticalRethinking"
},

{
    "location": "#StatisticalRethinking.maximum_a_posteriori-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "StatisticalRethinking.maximum_a_posteriori",
    "category": "method",
    "text": "maximumaposterior\n\nCompute the maximumaposteriori of a model. \n\nMethod\n\nmaximum_a_posteriori(model, lower_bound, upper_bound)\n\nRequired arguments\n\n* `model::Turing model`\n* `lower_bound::Float64`\n\nReturn values\n\n* `result`                       : Maximum_a_posterior vector\n\nExamples\n\nSee ...\n\n\n\n\n\n"
},

{
    "location": "#maximum_a_posteriori-1",
    "page": "Home",
    "title": "maximum_a_posteriori",
    "category": "section",
    "text": "maximum_a_posteriori(model, lower_bound, upper_bound)"
},

{
    "location": "snippets_00_01_03/#",
    "page": "Snippets_00_01_03",
    "title": "Snippets_00_01_03",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/00/clip_00_01_03.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\ngr(size=(300, 300))"
},

{
    "location": "snippets_00_01_03/#snippet-0.1-1",
    "page": "Snippets_00_01_03",
    "title": "snippet 0.1",
    "category": "section",
    "text": "println( \"All models are wrong, but some are useful.\" )"
},

{
    "location": "snippets_00_01_03/#snippet-0.2-1",
    "page": "Snippets_00_01_03",
    "title": "snippet 0.2",
    "category": "section",
    "text": "This is a StepRange, not a vectorx = 1:3Below still preserves the StepRangex = x*10Broadcast log to steprange elements in x, this returms a vector! Notice the log.(x) notation.x = log.(x)We can sum the vector xx = sum(x)Etc.x = exp(x)\nx = x*10\nx = log(x)\nx = sum(x)\nx = exp(x)"
},

{
    "location": "snippets_00_01_03/#snippet-0.3-1",
    "page": "Snippets_00_01_03",
    "title": "snippet 0.3",
    "category": "section",
    "text": "[log(0.01^200) 200 * log(0.01)]This page was generated using Literate.jl."
},

{
    "location": "snippets_00_04_05/#",
    "page": "Snippets_00_04_04",
    "title": "Snippets_00_04_04",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/00/clip_00_04_05.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking\ngr(size=(300, 300))"
},

{
    "location": "snippets_00_04_05/#snippet-0.4-1",
    "page": "Snippets_00_04_04",
    "title": "snippet 0.4",
    "category": "section",
    "text": "Below dataset(...) provides access to often used R datasets.cars = dataset(\"datasets\", \"cars\")If this is not a common R dataset, use e.g.: howell1 = CSV.read(joinpath(ProjDir, \"..\", \"..\",  \"data\", \"Howell1.csv\"), delim=\';\') df = convert(DataFrame, howell1)This reads the Howell1.csv dataset in the data subdirectory of this package,  StatisticalRethinking.jl. See also the chapter 4 snippets.Fit a linear regression of distance on speedm = lm(@formula(Dist ~ Speed), cars)estimated coefficients from the modelcoef(m)Plot residuals against speedscatter( cars[:Speed], residuals(m),\n  xlab=\"Speed\", ylab=\"Model residual values\", lab=\"Model residuals\")"
},

{
    "location": "snippets_00_04_05/#snippet-0.5-is-replaced-by-above-using-StatisticalRethinking.-1",
    "page": "Snippets_00_04_04",
    "title": "snippet 0.5 is replaced by above using StatisticalRethinking.",
    "category": "section",
    "text": "This page was generated using Literate.jl."
},

{
    "location": "snippets_02_01_02/#",
    "page": "Snippets_02_01_02",
    "title": "Snippets_02_01_02",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/02/clip_02_01_02.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking\ngr(size=(600,300))"
},

{
    "location": "snippets_02_01_02/#snippet-2.1-1",
    "page": "Snippets_02_01_02",
    "title": "snippet 2.1",
    "category": "section",
    "text": "ways  = [0, 3, 8, 9, 0]ways/sum(ways)"
},

{
    "location": "snippets_02_01_02/#snippet-2.2-1",
    "page": "Snippets_02_01_02",
    "title": "snippet 2.2",
    "category": "section",
    "text": "Create a distribution with n = 9 (e.g. tosses) and p = 0.5.d = Binomial(9, 0.5)Probability density for 6 waters holding n = 9 and p = 0.5.pdf(d, 6)This page was generated using Literate.jl."
},

{
    "location": "snippets_02_03_05/#",
    "page": "Snippets_02_03_05",
    "title": "Snippets_02_03_05",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/02/clip_02_03_05.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking\ngr(size=(600,300))"
},

{
    "location": "snippets_02_03_05/#snippet-2.3-1",
    "page": "Snippets_02_03_05",
    "title": "snippet 2.3",
    "category": "section",
    "text": "Define a gridp_grid = range( 0 , stop=1 , length=20 )Define the (uniform) npriorprior = ones( 20 )Compute likelihood at each value in gridlikelihood = [pdf(Binomial(9, p), 6) for p in p_grid]Compute product of likelihood and priorunstd_posterior = likelihood .* priorStandardize the posterior, so it sums to 1posterior = unstd_posterior  ./ sum(unstd_posterior)"
},

{
    "location": "snippets_02_03_05/#snippet-2.4-1",
    "page": "Snippets_02_03_05",
    "title": "snippet 2.4",
    "category": "section",
    "text": "p1 = plot( p_grid , posterior ,\n    xlab=\"probability of water\" , ylab=\"posterior probability\",\n    lab = \"interpolated\", title=\"20 points\" )\np2 = scatter!( p1, p_grid , posterior, lab=\"computed\" )"
},

{
    "location": "snippets_02_03_05/#snippet-2.5-1",
    "page": "Snippets_02_03_05",
    "title": "snippet 2.5",
    "category": "section",
    "text": "prior1 = [p < 0.5 ? 0 : 1 for p in p_grid]\nprior2 = [exp( -5*abs( p - 0.5 ) ) for p in p_grid]\n\np3 = plot(p_grid, prior1,\n  xlab=\"probability of water\" , ylab=\"posterior probability\",\n  lab = \"semi_uniform\", title=\"Other priors\" )\np4 = plot!(p3, p_grid, prior2,  lab = \"double_exponential\" )This page was generated using Literate.jl."
},

{
    "location": "snippets_02_06_07/#",
    "page": "Snippets_02_06_07",
    "title": "Snippets_02_06_07",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/02/clip_02_06_07.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking\ngr(size=(600,300))"
},

{
    "location": "snippets_02_06_07/#snippet-2.6-(see-snippet-3_2-for-explanations)-1",
    "page": "Snippets_02_06_07",
    "title": "snippet 2.6 (see snippet 3_2 for explanations)",
    "category": "section",
    "text": "p_grid = range(0, step=0.001, stop=1)\nprior = ones(length(p_grid))\nlikelihood = [pdf(Binomial(9, p), 6) for p in p_grid]\nposterior = likelihood .* prior\nposterior = posterior / sum(posterior)\nsamples = sample(p_grid, Weights(posterior), length(p_grid))\n\np = Vector{Plots.Plot{Plots.GRBackend}}(undef, 2)\np[1] = scatter(1:length(p_grid), samples, markersize = 2, ylim=(0.0, 1.3), lab=\"Draws\")analytical calculationw = 6\nn = 9\nx = 0:0.01:1\np[2] = density(samples, ylim=(0.0, 5.0), lab=\"Sample density\")\np[2] = plot!( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")quadratic approximationplot!( p[2], x, pdf.(Normal( 0.67 , 0.16 ) , x ), lab=\"Normal approximation\")\nplot(p..., layout=(1, 2))"
},

{
    "location": "snippets_02_06_07/#snippet-2.7-1",
    "page": "Snippets_02_06_07",
    "title": "snippet 2.7",
    "category": "section",
    "text": "analytical calculationw = 6\nn = 9\nx = 0:0.01:1\nscatter( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")quadratic approximationscatter!( x, pdf.(Normal( 0.67 , 0.16 ) , x ), lab=\"Normal approximation\")"
},

{
    "location": "snippets_02_06_07/#snippet-2.8-1",
    "page": "Snippets_02_06_07",
    "title": "snippet 2.8",
    "category": "section",
    "text": "The example is in stan_globe_toss.jl. It will be in clips_02_08_08s.jl.This page was generated using Literate.jl."
},

{
    "location": "snippets_03_01_01/#",
    "page": "Snippets_03_01_01",
    "title": "Snippets_03_01_01",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/03/clip_03_01_01.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\ngr(size=(600,300))"
},

{
    "location": "snippets_03_01_01/#snippet-3.1-1",
    "page": "Snippets_03_01_01",
    "title": "snippet 3.1",
    "category": "section",
    "text": "PrPV = 0.95\nPrPM = 0.01\nPrV = 0.001\nPrP = PrPV*PrV + PrPM*(1-PrV)\nPrVP = PrPV*PrV / PrPThis page was generated using Literate.jl."
},

{
    "location": "snippets_03_02_02/#",
    "page": "Snippets_03_02_02",
    "title": "Snippets_03_02_02",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/03/clip_03_02_02.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\ngr(size=(600,300))"
},

{
    "location": "snippets_03_02_02/#snippet-3.2-1",
    "page": "Snippets_03_02_02",
    "title": "snippet 3.2",
    "category": "section",
    "text": "Grid of 1001 stepsp_grid = range(0, step=0.001, stop=1)all priors = 1.0prior = ones(length(p_grid))Binomial pdflikelihood = [pdf(Binomial(9, p), 6) for p in p_grid]As Uniform priar has been used, unstandardized posterior is equal to likelihoodposterior = likelihood .* priorScale posterior such that they become probabilitiesposterior = posterior / sum(posterior)Sample using the computed posterior values as weightsIn this example we keep the number of samples equal to the length of p_grid, but that is not required.N = 10000\nsamples = sample(p_grid, Weights(posterior), N)\nfitnormal= fit_mle(Normal, samples)Create a vector to hold the plots so we can later combine themp = Vector{Plots.Plot{Plots.GRBackend}}(undef, 2)\np[1] = scatter(1:N, samples, markersize = 2, ylim=(0.0, 1.3), lab=\"Draws\")Analytical calculationw = 6\nn = 9\nx = 0:0.01:1\np[2] = density(samples, ylim=(0.0, 5.0), lab=\"Sample density\")\np[2] = plot!( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")Add quadratic approximationplot!( p[2], x, pdf.(Normal( fitnormal.μ, fitnormal.σ ) , x ), lab=\"Normal approximation\")\nplot(p..., layout=(1, 2))This page was generated using Literate.jl."
},

{
    "location": "snippets_04_01_07/#",
    "page": "Snippets_04_01_07",
    "title": "Snippets_04_01_07",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/04/clip_04_01_07.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\ngr(size=(600,300))"
},

{
    "location": "snippets_04_01_07/#snippet-4.1-1",
    "page": "Snippets_04_01_07",
    "title": "snippet 4.1",
    "category": "section",
    "text": "No attempt has been made to condense this too fewer lines of codenoofsteps = 20;\nnoofwalks = 15;\npos = Array{Float64, 2}(rand(Uniform(-1, 1), noofsteps, noofwalks));\npos[1, :] = zeros(noofwalks);\ncsum = cumsum(pos, dims=1);\n\nf = Plots.font(\"DejaVu Sans\", 6)\nmx = minimum(csum) * 0.9Plot and annotate the random walksp1 = plot(csum, leg=false, title=\"Random walks ($(noofwalks))\")\nplot!(p1, csum[:, Int(floor(noofwalks/2))], leg=false, title=\"Random walks ($(noofwalks))\", color=:black)\nplot!(p1, [5], seriestype=\"vline\")\nannotate!(5, mx, text(\"step 4\", f, :left))\nplot!(p1, [9], seriestype=\"vline\")\nannotate!(9, mx, text(\"step 8\", f, :left))\nplot!(p1, [17], seriestype=\"vline\")\nannotate!(17, mx, text(\"step 16\", f, :left))Generate 3 plots of densities at 3 different step numbers (4, 8 and 16)p2 = Vector{Plots.Plot{Plots.GRBackend}}(undef, 3);\nplt = 1\nfor step in [4, 8, 16]\n  indx = step + 1 # We aadded the first line of zeros\n  global plt\n  fit = fit_mle(Normal, csum[indx, :])\n  x = (fit.μ-4*fit.σ):0.01:(fit.μ+4*fit.σ)\n  p2[plt] = density(csum[indx, :], legend=false, title=\"$(step) steps\")\n  plot!( p2[plt], x, pdf.(Normal( fit.μ , fit.σ ) , x ), fill=(0, .5,:orange))\n  plt += 1\nend\np3 = plot(p2..., layout=(1, 3))\n\nplot(p1, p3, layout=(2,1))"
},

{
    "location": "snippets_04_01_07/#snippet-4.2-1",
    "page": "Snippets_04_01_07",
    "title": "snippet 4.2",
    "category": "section",
    "text": "prod(1 .+ rand(Uniform(0, 0.1), 10))"
},

{
    "location": "snippets_04_01_07/#snippet-4.3-1",
    "page": "Snippets_04_01_07",
    "title": "snippet 4.3",
    "category": "section",
    "text": "growth = [prod(1 .+ rand(Uniform(0, 0.1), 10)) for i in 1:10000];\nfit = fit_mle(Normal, growth)\nplot(Normal(fit.μ , fit.σ ), fill=(0, .5,:orange), lab=\"Normal distribution\")\ndensity!(growth, lab=\"\'sample\' distribution\")"
},

{
    "location": "snippets_04_01_07/#snippet-4.4-1",
    "page": "Snippets_04_01_07",
    "title": "snippet 4.4",
    "category": "section",
    "text": "big = [prod(1 .+ rand(Uniform(0, 0.5), 12)) for i in 1:10000];\nsmall = [prod(1 .+ rand(Uniform(0, 0.01), 12)) for i in 1:10000];\nfitb = fit_mle(Normal, big)\nfits = fit_mle(Normal, small)\np1 = plot(Normal(fitb.μ , fitb.σ ), lab=\"Big normal distribution\", fill=(0, .5,:orange))\np2 = plot(Normal(fits.μ , fits.σ ), lab=\"Small normal distribution\", fill=(0, .5,:orange))\ndensity!(p1, big, lab=\"\'big\' distribution\")\ndensity!(p2, small, lab=\"\'small\' distribution\")\nplot(p1, p2, layout=(1, 2))"
},

{
    "location": "snippets_04_01_07/#snippet-4.5-1",
    "page": "Snippets_04_01_07",
    "title": "snippet 4.5",
    "category": "section",
    "text": "log_big = [log(prod(1 .+ rand(Uniform(0, 0.5), 12))) for i in 1:10000];\nfit = fit_mle(Normal, log_big)\nplot(Normal(fit.μ , fit.σ ), fill=(0, .5,:orange), lab=\"Normal distribution\")\ndensity!(log_big, lab=\"\'sample\' distribution\")"
},

{
    "location": "snippets_04_01_07/#snippet-4.6-1",
    "page": "Snippets_04_01_07",
    "title": "snippet 4.6",
    "category": "section",
    "text": "Grid of 1001 stepsp_grid = range(0, step=0.001, stop=1);all priors = 1.0prior = ones(length(p_grid));Binomial pdflikelihood = [pdf(Binomial(9, p), 6) for p in p_grid];As Uniform priar has been used, unstandardized posterior is equal to likelihoodposterior = likelihood .* prior;Scale posterior such that they become probabilitiesposterior = posterior / sum(posterior);Sample using the computed posterior values as weights In this example we keep the number of samples equal to the length of p_grid, but that is not required.samples = sample(p_grid, Weights(posterior), length(p_grid));\np = Vector{Plots.Plot{Plots.GRBackend}}(undef, 2)\np[1] = scatter(1:length(p_grid), samples, markersize = 2, ylim=(0.0, 1.3), lab=\"Draws\")analytical calculationw = 6\nn = 9\nx = 0:0.01:1\np[2] = density(samples, ylim=(0.0, 5.0), lab=\"Sample density\")\np[2] = plot!( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")quadratic approximationplot!( p[2], x, pdf.(Normal( 0.67 , 0.16 ) , x ), lab=\"Normal approximation\", fill=(0, .5,:orange))\nplot(p..., layout=(1, 2))"
},

{
    "location": "snippets_04_01_07/#snippet-4.7-1",
    "page": "Snippets_04_01_07",
    "title": "snippet 4.7",
    "category": "section",
    "text": "howell1 = CSV.read(joinpath(dirname(Base.pathof(StatisticalRethinking)), \"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1)This page was generated using Literate.jl."
},

]}