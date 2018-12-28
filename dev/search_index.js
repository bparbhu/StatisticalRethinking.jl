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
    "text": "This package will contain Julia versions of selected code snippets contained in the R package \"rethinking\" associated with the book Statistical Rethinking by Richard McElreath.In the book and associated R package rethinking, statistical models are defined as illustrated below:m4.3 <- map(\n    alist(\n        height ~ dnorm( mu , sigma ) ,\n        mu <- a + b*weight ,\n        a ~ dnorm( 156 , 100 ) ,\n        b ~ dnorm( 0 , 10 ) ,\n        sigma ~ dunif( 0 , 50 )\n    ) ,\n    data=d2\n)The author of the book states: \"If that (the statistical model) doesn\'t make much sense, good. ... you\'re holding the right textbook, since this book teaches you how to read and write these mathematical descriptions\"  (page 77).This package is intended to allow experimenting with this learning process using 3 available mcmc options in Julia."
},

{
    "location": "#Layout-of-the-package-1",
    "page": "Home",
    "title": "Layout of the package",
    "category": "section",
    "text": "Instead of having all snippets in a single file, the snippets are organized by chapter and grouped in clips by related snippets. E.g. chapter 0 of the R package has snippets 0.1 to 0.5. Those have been combined into 2 clips:clip_01_03.jl - contains snippets 0.1 through 0.3\nclip_04_05.jl - contains snippets 0.4 and 0.5.These 2 files are in chapters/00. These files are later on processed by Literate.jl to create 2 derived versions, e.g. from clip_01_03.jl in chapters/00:clip_01_03.md - included in the documentation\nclip_01_03.ipynb - stored in the notebooks directory for use in JupyterOccasionally a clip will contain just a single snippet and will be referred to as 03/clip_02.jl. Clips with names such as 02/clip_08t.jl, clip_08s.jl and clip_08m.jl contain mcmc implementations using Turing.jl, CmdStan.jl and Mamba.jl respectively. Examples have been added to chapter 2.From chapter 8 onwards, the Turing versions of the mcmc models are available as e.g. chapters/08/m8.1t.jl. Equivalent CmdStan versions and, in a few cases Mamba models, are provided as well.Almost identical clips are named e.g. 04/clip_07.0s.jl and 04/clip_07.1s.jl. In that specific example just the priors differ."
},

{
    "location": "#Acknowledgements-1",
    "page": "Home",
    "title": "Acknowledgements",
    "category": "section",
    "text": "Richard Torkar has taken the lead in developing the Turing versions of the models in chapter 8.The TuringLang team and #turing contributors on Slack have been extremely helpful!The mcmc components are based on:TuringLang\nStanJulia\nMambaAt least 2 other mcmc options are available for mcmc in Julia:DynamicHMC\nKlaraTime constraints prevents inclusion of those right now, although e.g. the example chapters/04/clip_38.1m.jl almost begs for a clip_38d.jl. For now the linear regression example in  DynamicHMCExamples is a good starting point.The Mamba examples should really use @everywhere using Mamba in stead of using Mamba. This was done to get around a limitation in Literate.jl to test the notebooks when running in distributed mode.The  documentation has been generated using Literate.jl based on several ideas demonstrated by Tamas Papp in above mentioned  DynamicHMCExamples.jl."
},

{
    "location": "#References-1",
    "page": "Home",
    "title": "References",
    "category": "section",
    "text": "There is no shortage of good books on Bayesian statistics. A few of my favorites are:Bolstad: Introduction to Bayesian statistics\nBolstad: Understanding Computational Bayesian Statistics\nGelman, Hill: Data Analysis using regression and multileve,/hierachical models\nMcElreath: Statistical Rethinking\nGelman, Carlin, and others: Bayesian Data Analysis\nLee, Wagenmakers: Bayesian Cognitive Modeling\nKruschke:Doing Bayesian Data Analysisand a great read (and implementation in DynamicHMC.jl):Betancourt: A Conceptual Introduction to Hamiltonian Monte Carlo"
},

{
    "location": "#Functions:-1",
    "page": "Home",
    "title": "Functions:",
    "category": "section",
    "text": "CurrentModule = StatisticalRethinking"
},

{
    "location": "#StatisticalRethinking.maximum_a_posteriori-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "StatisticalRethinking.maximum_a_posteriori",
    "category": "method",
    "text": "maximumaposterior\n\nCompute the maximumaposteriori of a model. \n\nMethod\n\nmaximum_a_posteriori(model, lower_bound, upper_bound)\n\nRequired arguments\n\n* `model::Turing model`\n* `lower_bound::Float64`\n* `upper_bound::Float64`\n\nReturn values\n\n* `result`                       : Maximum_a_posterior vector\n\nExamples\n\nSee 02/clip_08t.jl\n\n\n\n\n\n"
},

{
    "location": "#maximum_a_posteriori-1",
    "page": "Home",
    "title": "maximum_a_posteriori",
    "category": "section",
    "text": "maximum_a_posteriori(model, lower_bound, upper_bound)"
},

{
    "location": "#StatisticalRethinking.rel_path-Tuple",
    "page": "Home",
    "title": "StatisticalRethinking.rel_path",
    "category": "method",
    "text": "rel_path\n\nRelative path using the StatisticalRethinking src/ directory. Copied from DynamicHMCExamples.jl\n\nExample to get access to the data subdirectory\n\nrel_path(\"..\", \"data\")\n\n\n\n\n\n"
},

{
    "location": "#rel_path-1",
    "page": "Home",
    "title": "rel_path",
    "category": "section",
    "text": "rel_path(parts...)"
},

{
    "location": "00/clip_01_03/#",
    "page": "clip_01_03",
    "title": "clip_01_03",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/00/clip_01_03.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking"
},

{
    "location": "00/clip_01_03/#snippet-0.1-1",
    "page": "clip_01_03",
    "title": "snippet 0.1",
    "category": "section",
    "text": "println( \"All models are wrong, but some are useful.\" );"
},

{
    "location": "00/clip_01_03/#snippet-0.2-1",
    "page": "clip_01_03",
    "title": "snippet 0.2",
    "category": "section",
    "text": "This is a StepRange, not a vectorx = 1:3Below still preserves the StepRangex = x*10Broadcast log to steprange elements in x, this returms a vector! Notice the log.(x) notation.x = log.(x)We can sum the vector xx = sum(x)Etc.x = exp(x)\nx = x*10\nx = log(x)\nx = sum(x)\nx = exp(x)"
},

{
    "location": "00/clip_01_03/#snippet-0.3-1",
    "page": "clip_01_03",
    "title": "snippet 0.3",
    "category": "section",
    "text": "[log(0.01^200) 200 * log(0.01)]This page was generated using Literate.jl."
},

{
    "location": "00/clip_04_05/#",
    "page": "clip_04_04",
    "title": "clip_04_04",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/00/clip_04_05.jl\"Load Julia packages (libraries) needed"
},

{
    "location": "00/clip_04_05/#snippet-0.5-is-replaced-by-below-using-StatisticalRethinking.-1",
    "page": "clip_04_04",
    "title": "snippet 0.5 is replaced by below using StatisticalRethinking.",
    "category": "section",
    "text": "using StatisticalRethinking, GLM\ngr(size=(500, 500));"
},

{
    "location": "00/clip_04_05/#snippet-0.4-1",
    "page": "clip_04_04",
    "title": "snippet 0.4",
    "category": "section",
    "text": "Below dataset(...) provides access to often used R datasets.cars = dataset(\"datasets\", \"cars\")If this is not a common R dataset, use e.g.: howell1 = CSV.read(joinpath(ProjDir, \"..\", \"..\",  \"data\", \"Howell1.csv\"), delim=\';\') df = convert(DataFrame, howell1)This reads the Howell1.csv dataset in the data subdirectory of this package,  StatisticalRethinking.jl. See also the chapter 4 snippets.Fit a linear regression of distance on speedm = lm(@formula(Dist ~ Speed), cars)estimated coefficients from the modelcoef(m)Plot residuals against speedscatter( cars[:Speed], residuals(m),\n  xlab=\"Speed\", ylab=\"Model residual values\", lab=\"Model residuals\")End of clip_04_05.jlThis page was generated using Literate.jl."
},

{
    "location": "02/clip_01_02/#",
    "page": "clip_01_02",
    "title": "clip_01_02",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/02/clip_01_02.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking"
},

{
    "location": "02/clip_01_02/#snippet-2.1-1",
    "page": "clip_01_02",
    "title": "snippet 2.1",
    "category": "section",
    "text": "ways  = [0, 3, 8, 9, 0]ways/sum(ways)"
},

{
    "location": "02/clip_01_02/#snippet-2.2-1",
    "page": "clip_01_02",
    "title": "snippet 2.2",
    "category": "section",
    "text": "Create a distribution with n = 9 (e.g. tosses) and p = 0.5.d = Binomial(9, 0.5)Probability density for 6 waters holding n = 9 and p = 0.5.pdf(d, 6)End of clip_01_02.jlThis page was generated using Literate.jl."
},

{
    "location": "02/clip_03_05/#",
    "page": "clip_03_05",
    "title": "clip_03_05",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/02/clip_03_05.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking\ngr(size=(600,300));"
},

{
    "location": "02/clip_03_05/#snippet-2.3-1",
    "page": "clip_03_05",
    "title": "snippet 2.3",
    "category": "section",
    "text": "Define a gridN = 20\np_grid = range( 0 , stop=1 , length=N )Define the (uniform) priorprior = ones( 20 );Compute likelihood at each value in gridlikelihood = [pdf(Binomial(9, p), 6) for p in p_grid]Compute product of likelihood and priorunstd_posterior = likelihood .* prior;Standardize the posterior, so it sums to 1posterior = unstd_posterior  ./ sum(unstd_posterior);"
},

{
    "location": "02/clip_03_05/#snippet-2.4-1",
    "page": "clip_03_05",
    "title": "snippet 2.4",
    "category": "section",
    "text": "p1 = plot( p_grid , posterior ,\n    xlab=\"probability of water\" , ylab=\"posterior probability\",\n    lab = \"interpolated\", title=\"20 points\" )\np2 = scatter!( p1, p_grid , posterior, lab=\"computed\" )"
},

{
    "location": "02/clip_03_05/#snippet-2.5-1",
    "page": "clip_03_05",
    "title": "snippet 2.5",
    "category": "section",
    "text": "prior1 = [p < 0.5 ? 0 : 1 for p in p_grid]\nprior2 = [exp( -5*abs( p - 0.5 ) ) for p in p_grid]\n\np3 = plot(p_grid, prior1,\n  xlab=\"probability of water\" , ylab=\"posterior probability\",\n  lab = \"semi_uniform\", title=\"Other priors\" )\nscatter!(p3, p_grid, prior1, lab = \"semi_uniform grid point\")\nplot!(p3, p_grid, prior2,  lab = \"double_exponential\" )\nscatter!(p3, p_grid, prior2,  lab = \"double_exponential grid point\" )End of clip_03_05.jlThis page was generated using Literate.jl."
},

{
    "location": "02/clip_06_07/#",
    "page": "clip_06_07",
    "title": "clip_06_07",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/02/clip_06_07.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking\ngr(size=(600,300));"
},

{
    "location": "02/clip_06_07/#snippet-2.6-(see-snippet-3_2-for-explanations)-1",
    "page": "clip_06_07",
    "title": "snippet 2.6 (see snippet 3_2 for explanations)",
    "category": "section",
    "text": "p_grid = range(0, step=0.001, stop=1)\nprior = ones(length(p_grid))\nlikelihood = [pdf(Binomial(9, p), 6) for p in p_grid]\nposterior = likelihood .* prior\nposterior = posterior / sum(posterior)\nsamples = sample(p_grid, Weights(posterior), length(p_grid))\n\np = Vector{Plots.Plot{Plots.GRBackend}}(undef, 2)\np[1] = scatter(1:length(p_grid), samples, markersize = 2, ylim=(0.0, 1.3), lab=\"Draws\")analytical calculationw = 6\nn = 9\nx = 0:0.01:1\np[2] = density(samples, ylim=(0.0, 5.0), lab=\"Sample density\")\np[2] = plot!( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")quadratic approximationplot!( p[2], x, pdf.(Normal( 0.67 , 0.16 ) , x ), lab=\"Normal approximation\")\nplot(p..., layout=(1, 2))"
},

{
    "location": "02/clip_06_07/#snippet-2.7-1",
    "page": "clip_06_07",
    "title": "snippet 2.7",
    "category": "section",
    "text": "analytical calculationw = 6; n = 9; x = 0:0.01:1\nscatter( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")quadratic approximationscatter!( x, pdf.(Normal( 0.67 , 0.16 ) , x ), lab=\"Normal approximation\")End of clip_06_07.jlThis page was generated using Literate.jl."
},

{
    "location": "02/clip_08t/#",
    "page": "clip_08t",
    "title": "clip_08t",
    "category": "page",
    "text": "Load Julia packages (libraries) neededusing StatisticalRethinking\nusing StatsFuns, Optim, Turing, Flux.Tracker\ngr(size=(600,300));\n\nTuring.setadbackend(:reverse_diff)loaded\n\n\n┌ Warning: Package Turing does not have CmdStan in its dependencies:\n│ - If you have Turing checked out for development and have\n│   added CmdStan as a dependency but haven\'t updated your primary\n│   environment\'s manifest file, try `Pkg.resolve()`.\n│ - Otherwise you may need to report an issue with Turing\n│ Loading CmdStan into Turing from project dependency, future warnings for Turing are suppressed.\n└ @ nothing nothing:840\nWARNING: using CmdStan.Sample in module Turing conflicts with an existing identifier.\n\n\n\n\n\n:reverse_diff"
},

{
    "location": "02/clip_08t/#snippet-2.8t-1",
    "page": "clip_08t",
    "title": "snippet 2.8t",
    "category": "section",
    "text": "Define the datak = 6; n = 9;Define the model@model globe_toss(n, k) = begin\n  theta ~ Beta(1, 1) # prior\n  k ~ Binomial(n, theta) # model\n  return k, theta\nend;Compute the \"maximumaposteriori\" valueSet search boundslb = [0.0]; ub = [1.0];Create (compile) the modelmodel = globe_toss(n, k);Compute the maximumaposterioriresult = maximum_a_posteriori(model, lb, ub)Results of Optimization Algorithm\n * Algorithm: Fminbox with L-BFGS\n * Starting Point: [0.43601313152405363]\n * Minimizer: [0.6666666665712192]\n * Minimum: 1.297811e+00\n * Iterations: 3\n * Convergence: true\n   * |x - x\'| ≤ 0.0e+00: false \n     |x - x\'| = 7.68e-08 \n   * |f(x) - f(x\')| ≤ 0.0e+00 |f(x)|: false\n     |f(x) - f(x\')| = 9.22e-14 |f(x)|\n   * |g(x)| ≤ 1.0e-08: true \n     |g(x)| = 3.11e-09 \n   * Stopped by an increasing objective: false\n   * Reached Maximum Number of Iterations: false\n * Objective Calls: 49\n * Gradient Calls: 49Use Turing mcmcTuring.turnprogress(false)\nchn = sample(model, NUTS(2000, 1000, 0.65));┌ Info: [Turing]: global PROGRESS is set as false\n└ @ Turing /Users/rob/.julia/packages/Turing/pRhjG/src/Turing.jl:81\n┌ Info: [Turing] looking for good initial eps...\n└ @ Turing /Users/rob/.julia/packages/Turing/pRhjG/src/samplers/support/hmc_core.jl:246\n[NUTS{Union{}}] found initial ϵ: 0.8\n└ @ Turing /Users/rob/.julia/packages/Turing/pRhjG/src/samplers/support/hmc_core.jl:291\n┌ Warning: Numerical error has been found in gradients.\n└ @ Turing /Users/rob/.julia/packages/Turing/pRhjG/src/core/ad.jl:114\n┌ Warning: grad = [NaN]\n└ @ Turing /Users/rob/.julia/packages/Turing/pRhjG/src/core/ad.jl:115\n┌ Info:  Adapted ϵ = 0.9595407256254531, std = [1.0]; 1000 iterations is used for adaption.\n└ @ Turing /Users/rob/.julia/packages/Turing/pRhjG/src/samplers/adapt/adapt.jl:91\n\n\n[NUTS] Finished with\n  Running time        = 5.366160218000005;\n  #lf / sample        = 0.0025;\n  #evals / sample     = 6.8585;\n  pre-cond. metric    = [1.0].Look at the generated draws (in chn)describe(chn)Iterations = 1:2000\nThinning interval = 1\nChains = 1\nSamples per chain = 2000\n\nEmpirical Posterior Estimates:\n             Mean         SD       Naive SE       MCSE         ESS   \n  lf_num  0.00250000 0.111803399 0.0025000000 0.0025000000 2000.00000\n elapsed  0.00268308 0.083443804 0.0018658602 0.0024022260 1206.59200\n epsilon  1.11832340 0.967841538 0.0216415947 0.0449674509  463.24632\n   theta  0.64178990 0.133473620 0.0029845609 0.0032139864 1724.65731\n      lp -3.26836903 0.699385284 0.0156387304 0.0257294314  738.87777\neval_num  6.85850000 3.987910413 0.0891723877 0.1334487384  893.02135\n  lf_eps  1.11832340 0.967841538 0.0216415947 0.0449674509  463.24632\n\nQuantiles:\n              2.5%          25.0%        50.0%         75.0%          97.5%    \n  lf_num  0.0000000000  0.00000000000  0.00000000  0.00000000000  0.00000000000\n elapsed  0.0001327437  0.00013531425  0.00014373  0.00034360475  0.00074923602\n epsilon  0.3871856393  0.95954072563  0.95954073  1.03236201414  2.72709112614\n   theta  0.3712161929  0.54695523760  0.64940621  0.73885701268  0.87566668020\n      lp -5.2978624719 -3.42597439130 -3.01414974 -2.82723625426 -2.77970959395\neval_num  4.0000000000  4.00000000000  4.00000000 10.00000000000 10.00000000000\n  lf_eps  0.3871856393  0.95954072563  0.95954073  1.03236201414  2.72709112614Look at the mean and sdprintln(\"\\ntheta = $(mean_and_std(chn[:theta][1001:2000]))\\n\")theta = (0.6416312990141793, 0.1311782682540063)Compute at hpd regionbnds = MCMCChain.hpd(chn[:theta], alpha=0.06);analytical calculationw = 6; n = 9; x = 0:0.01:1\nplot( x, pdf.(Beta( w+1 , n-w+1 ) , x ), fill=(0, .5,:orange), lab=\"Conjugate solution\")(Image: svg)quadratic approximationplot!( x, pdf.(Normal( 0.67 , 0.16 ) , x ), lab=\"Normal approximation\")(Image: svg)Turing Chain &  89%hpd region boundariesdensity!(chn[:theta], lab=\"Turing chain\")\nvline!([bnds[1]], line=:dash, lab=\"hpd lower bound\")\nvline!([bnds[2]], line=:dash, lab=\"hpd upper bound\")(Image: svg)Show hpd regionprintln(\"hpd bounds = $bnds\\n\")hpd bounds = [0.390912, 0.87325]End of clip_08t.jlThis notebook was generated using Literate.jl."
},

{
    "location": "02/clip_08m/#",
    "page": "clip_08m",
    "title": "clip_08m",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/02/clip_08m.jl\"using Distributed, Gadfly\nusing MambaDataglobe_toss = Dict{Symbol, Any}(\n  :w => [6, 7, 5, 6, 6],\n  :n => [9, 9, 9, 9, 9]\n)\nglobe_toss[:N] = length(globe_toss[:w]);Model Specificationmodel = Model(\n  w = Stochastic(1,\n    (n, p, N) ->\n      UnivariateDistribution[Binomial(n[i], p) for i in 1:N],\n    false\n  ),\n  p = Stochastic(() -> Beta(1, 1))\n);Initial Valuesinits = [\n  Dict(:w => globe_toss[:w], :n => globe_toss[:n], :p => 0.5),\n  Dict(:w => globe_toss[:w], :n => globe_toss[:n], :p => rand(Beta(1, 1)))\n];Sampling Schemescheme = [NUTS(:p)]\nsetsamplers!(model, scheme);MCMC Simulationssim = mcmc(model, globe_toss, inits, 10000, burnin=2500, thin=1, chains=2)Describe drawsdescribe(sim)End of clip_08m.jlThis page was generated using Literate.jl."
},

{
    "location": "02/clip_08s/#",
    "page": "clip_08s",
    "title": "clip_08s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/02/clip_08s.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking\ngr(size=(500,800));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"chapters\", \"02\")\ncd(ProjDir)Define the Stan language modelbinomialstanmodel = \"\n// Inferring a Rate\ndata {\n  int N;\n  int<lower=0> k[N];\n  int<lower=1> n[N];\n}\nparameters {\n  real<lower=0,upper=1> theta;\n  real<lower=0,upper=1> thetaprior;\n}\nmodel {\n  // Prior Distribution for Rate Theta\n  theta ~ beta(1, 1);\n  thetaprior ~ beta(1, 1);\n\n  // Observed Counts\n  k ~ binomial(n, theta);\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"binomial\", monitors = [\"theta\"], model=binomialstanmodel,\n  output_format=:mcmcchain);Use 16 observationsN2 = 4^2\nd = Binomial(9, 0.66)\nn2 = Int.(9 * ones(Int, N2));Show (generated) observationsk2 = rand(d, N2)Input data for cmdstanbinomialdata = [\n  Dict(\"N\" => length(n2), \"n\" => n2, \"k\" => k2)\n];Sample using cmdstanrc, chn, cnames = stan(stanmodel, binomialdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Allocate array of Normal fitsfits = Vector{Normal{Float64}}(undef, 4)\nfor i in 1:4\n  fits[i] = fit_mle(Normal, convert.(Float64, chn.value[:, 1, i]))\n  println(fits[i])\nendPlot the 4 chainsif rc == 0\n  p = Vector{Plots.Plot{Plots.GRBackend}}(undef, 4)\n  x = 0:0.001:1\n  for i in 1:4\n    vals = convert.(Float64, chn.value[:, 1, i])\n    μ = round(fits[i].μ, digits=2)\n    σ = round(fits[i].σ, digits=2)\n    p[i] = density(vals, lab=\"Chain $i density\",\n       xlim=(0.45, 1.0), title=\"$(N2) data points\")\n    plot!(p[i], x, pdf.(Normal(fits[i].μ, fits[i].σ), x), lab=\"Fitted Normal($μ, $σ)\")\n  end\n  plot(p..., layout=(4, 1))\nendEnd of clip_08s.jlThis page was generated using Literate.jl."
},

{
    "location": "03/clip_01/#",
    "page": "clip_01",
    "title": "clip_01",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/03/clip_01.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\ngr(size=(600,300))"
},

{
    "location": "03/clip_01/#snippet-3.1-1",
    "page": "clip_01",
    "title": "snippet 3.1",
    "category": "section",
    "text": "PrPV = 0.95\nPrPM = 0.01\nPrV = 0.001\nPrP = PrPV*PrV + PrPM*(1-PrV)\nPrVP = PrPV*PrV / PrPEnd of clip_01.jlThis page was generated using Literate.jl."
},

{
    "location": "03/clip_02_05/#",
    "page": "clip_02_05",
    "title": "clip_02_05",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/03/clip_02_05.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\ngr(size=(600,300))"
},

{
    "location": "03/clip_02_05/#snippet-3.2-1",
    "page": "clip_02_05",
    "title": "snippet 3.2",
    "category": "section",
    "text": "Grid of 1001 stepsp_grid = range(0, step=0.001, stop=1)all priors = 1.0prior = ones(length(p_grid));Binomial pdflikelihood = [pdf(Binomial(9, p), 6) for p in p_grid];As Uniform priar has been used, unstandardized posterior is equal to likelihoodposterior = likelihood .* prior;Scale posterior such that they become probabilitiesposterior = posterior / sum(posterior)"
},

{
    "location": "03/clip_02_05/#snippet-3.3-1",
    "page": "clip_02_05",
    "title": "snippet 3.3",
    "category": "section",
    "text": "Sample using the computed posterior values as weightsIn this example we keep the number of samples equal to the length of p_grid, but that is not required.N = 10000\nsamples = sample(p_grid, Weights(posterior), N)\nfitnormal= fit_mle(Normal, samples)"
},

{
    "location": "03/clip_02_05/#snippet-3.4-1",
    "page": "clip_02_05",
    "title": "snippet 3.4",
    "category": "section",
    "text": "Create a vector to hold the plots so we can later combine themp = Vector{Plots.Plot{Plots.GRBackend}}(undef, 2)\np[1] = scatter(1:N, samples, markersize = 2, ylim=(0.0, 1.3), lab=\"Draws\")"
},

{
    "location": "03/clip_02_05/#snippet-3.5-1",
    "page": "clip_02_05",
    "title": "snippet 3.5",
    "category": "section",
    "text": "Analytical calculationw = 6\nn = 9\nx = 0:0.01:1\np[2] = density(samples, ylim=(0.0, 5.0), lab=\"Sample density\")\np[2] = plot!( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")Add quadratic approximationplot!( p[2], x, pdf.(Normal( fitnormal.μ, fitnormal.σ ) , x ), lab=\"Normal approximation\")\nplot(p..., layout=(1, 2))End of clip_02_05.jlThis page was generated using Literate.jl."
},

{
    "location": "03/clip_05s/#",
    "page": "clip_05s",
    "title": "clip_05s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/03/clip_05s.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking\ngr(size=(500,800));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"chapters\", \"03\")\ncd(ProjDir)Define the Stan language modelbinomialstanmodel = \"\n// Inferring a Rate\ndata {\n  int N;\n  int<lower=0> k[N];\n  int<lower=1> n[N];\n}\nparameters {\n  real<lower=0,upper=1> theta;\n  real<lower=0,upper=1> thetaprior;\n}\nmodel {\n  // Prior Distribution for Rate Theta\n  theta ~ beta(1, 1);\n  thetaprior ~ beta(1, 1);\n\n  // Observed Counts\n  k ~ binomial(n, theta);\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"binomial\", monitors = [\"theta\"], model=binomialstanmodel,\n  output_format=:mcmcchain);Use 16 observationsN2 = 4^2\nd = Binomial(9, 0.66)\nn2 = Int.(9 * ones(Int, N2))\nk2 = rand(d, N2);Input data for cmdstanbinomialdata = [\n  Dict(\"N\" => length(n2), \"n\" => n2, \"k\" => k2)\n];Sample using cmdstanrc, chn, cnames = stan(stanmodel, binomialdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Plot the 4 chainsif rc == 0\n  plot(chn)\nendEnd of clip_05s.jlThis page was generated using Literate.jl."
},

{
    "location": "03/clip_06_16s/#",
    "page": "clip_06_16s",
    "title": "clip_06_16s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/03/clip_06_16s.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"chapters\", \"03\")\ncd(ProjDir)Define the Stan language modelbinomialstanmodel = \"\n// Inferring a Rate\ndata {\n  int N;\n  int<lower=0> k[N];\n  int<lower=1> n[N];\n}\nparameters {\n  real<lower=0,upper=1> theta;\n  real<lower=0,upper=1> thetaprior;\n}\nmodel {\n  // Prior Distribution for Rate Theta\n  theta ~ beta(1, 1);\n  thetaprior ~ beta(1, 1);\n\n  // Observed Counts\n  k ~ binomial(n, theta);\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"binomial\", monitors = [\"theta\"], model=binomialstanmodel,\n  output_format=:mcmcchain);Use 16 observationsN2 = 4\nn2 = Int.(9 * ones(Int, N2))\nk2 = [6, 5, 7, 6]Input data for cmdstanbinomialdata = [\n  Dict(\"N\" => length(n2), \"n\" => n2, \"k\" => k2)\n];Sample using cmdstanrc, chn, cnames = stan(stanmodel, binomialdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Look at area of hpdMCMCChain.hpd(chn)Plot the 4 chainsif rc == 0\n  mixeddensity(chn, xlab=\"height [cm]\", ylab=\"density\")\n  bnds = MCMCChain.hpd(convert(Vector{Float64}, chn.value[:,1,1]))\n  vline!([bnds[1]], line=:dash)\n  vline!([bnds[2]], line=:dash)\nendEnd of clip_06_16s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip_01_06/#",
    "page": "clip_01_06",
    "title": "clip_01_06",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/04/clip_01_06.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\ngr(size=(600,300));"
},

{
    "location": "04/clip_01_06/#snippet-4.1-1",
    "page": "clip_01_06",
    "title": "snippet 4.1",
    "category": "section",
    "text": "No attempt has been made to condense this too fewer lines of codenoofsteps = 20;\nnoofwalks = 15;\npos = Array{Float64, 2}(rand(Uniform(-1, 1), noofsteps, noofwalks));\npos[1, :] = zeros(noofwalks);\ncsum = cumsum(pos, dims=1);\n\nf = Plots.font(\"DejaVu Sans\", 6)\nmx = minimum(csum) * 0.9Plot and annotate the random walksp1 = plot(csum, leg=false, title=\"Random walks ($(noofwalks))\")\nplot!(p1, csum[:, Int(floor(noofwalks/2))], leg=false, title=\"Random walks ($(noofwalks))\", color=:black)\nplot!(p1, [5], seriestype=\"vline\")\nannotate!(5, mx, text(\"step 4\", f, :left))\nplot!(p1, [9], seriestype=\"vline\")\nannotate!(9, mx, text(\"step 8\", f, :left))\nplot!(p1, [17], seriestype=\"vline\")\nannotate!(17, mx, text(\"step 16\", f, :left))Generate 3 plots of densities at 3 different step numbers (4, 8 and 16)p2 = Vector{Plots.Plot{Plots.GRBackend}}(undef, 3);\nplt = 1\nfor step in [4, 8, 16]\n  indx = step + 1 # We aadded the first line of zeros\n  global plt\n  fit = fit_mle(Normal, csum[indx, :])\n  x = (fit.μ-4*fit.σ):0.01:(fit.μ+4*fit.σ)\n  p2[plt] = density(csum[indx, :], legend=false, title=\"$(step) steps\")\n  plot!( p2[plt], x, pdf.(Normal( fit.μ , fit.σ ) , x ), fill=(0, .5,:orange))\n  plt += 1\nend\np3 = plot(p2..., layout=(1, 3))\n\nplot(p1, p3, layout=(2,1))"
},

{
    "location": "04/clip_01_06/#snippet-4.2-1",
    "page": "clip_01_06",
    "title": "snippet 4.2",
    "category": "section",
    "text": "prod(1 .+ rand(Uniform(0, 0.1), 10))"
},

{
    "location": "04/clip_01_06/#snippet-4.3-1",
    "page": "clip_01_06",
    "title": "snippet 4.3",
    "category": "section",
    "text": "growth = [prod(1 .+ rand(Uniform(0, 0.1), 10)) for i in 1:10000];\nfit = fit_mle(Normal, growth)\nplot(Normal(fit.μ , fit.σ ), fill=(0, .5,:orange), lab=\"Normal distribution\")\ndensity!(growth, lab=\"\'sample\' distribution\")"
},

{
    "location": "04/clip_01_06/#snippet-4.4-1",
    "page": "clip_01_06",
    "title": "snippet 4.4",
    "category": "section",
    "text": "big = [prod(1 .+ rand(Uniform(0, 0.5), 12)) for i in 1:10000];\nsmall = [prod(1 .+ rand(Uniform(0, 0.01), 12)) for i in 1:10000];\nfitb = fit_mle(Normal, big)\nfits = fit_mle(Normal, small)\np1 = plot(Normal(fitb.μ , fitb.σ ), lab=\"Big normal distribution\", fill=(0, .5,:orange))\np2 = plot(Normal(fits.μ , fits.σ ), lab=\"Small normal distribution\", fill=(0, .5,:orange))\ndensity!(p1, big, lab=\"\'big\' distribution\")\ndensity!(p2, small, lab=\"\'small\' distribution\")\nplot(p1, p2, layout=(1, 2))"
},

{
    "location": "04/clip_01_06/#snippet-4.5-1",
    "page": "clip_01_06",
    "title": "snippet 4.5",
    "category": "section",
    "text": "log_big = [log(prod(1 .+ rand(Uniform(0, 0.5), 12))) for i in 1:10000];\nfit = fit_mle(Normal, log_big)\nplot(Normal(fit.μ , fit.σ ), fill=(0, .5,:orange), lab=\"Normal distribution\")\ndensity!(log_big, lab=\"\'sample\' distribution\")"
},

{
    "location": "04/clip_01_06/#snippet-4.6-1",
    "page": "clip_01_06",
    "title": "snippet 4.6",
    "category": "section",
    "text": "Grid of 1001 stepsp_grid = range(0, step=0.001, stop=1);all priors = 1.0prior = ones(length(p_grid));Binomial pdflikelihood = [pdf(Binomial(9, p), 6) for p in p_grid];As Uniform priar has been used, unstandardized posterior is equal to likelihoodposterior = likelihood .* prior;Scale posterior such that they become probabilitiesposterior = posterior / sum(posterior);Sample using the computed posterior values as weights In this example we keep the number of samples equal to the length of p_grid, but that is not required.samples = sample(p_grid, Weights(posterior), length(p_grid));\np = Vector{Plots.Plot{Plots.GRBackend}}(undef, 2)\np[1] = scatter(1:length(p_grid), samples, markersize = 2, ylim=(0.0, 1.3), lab=\"Draws\")analytical calculationw = 6\nn = 9\nx = 0:0.01:1\np[2] = density(samples, ylim=(0.0, 5.0), lab=\"Sample density\")\np[2] = plot!( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")quadratic approximationplot!( p[2], x, pdf.(Normal( 0.67 , 0.16 ) , x ), lab=\"Normal approximation\", fill=(0, .5,:orange))\nplot(p..., layout=(1, 2))End of clip_01_06.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip_07.0s/#",
    "page": "clip_07.0s",
    "title": "clip_07.0s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/04/clip_07.0s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking, CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"chapters\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip_07.0s/#snippet-4.7-1",
    "page": "clip_07.0s",
    "title": "snippet 4.7",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df)\nfemale_df = filter(row -> row[:male] == 0, df2)\nmale_df = filter(row -> row[:male] == 1, df2)Plot the densities.density(df2[:height], lab=\"All heights\", xlab=\"height [cm]\", ylab=\"density\")Is it bi-modal?density!(female_df[:height], lab=\"Female heights\")\ndensity!(male_df[:height], lab=\"Male heights\")Define the Stan language modelheightsmodel = \"\n// Inferring a Rate\ndata {\n  int N;\n  real<lower=0> h[N];\n}\nparameters {\n  real<lower=0> sigma;\n  real<lower=0,upper=250> mu;\n}\nmodel {\n  // Priors for mu and sigma\n  mu ~ normal(178, 20);\n  sigma ~ uniform( 0 , 50 );\n\n  // Observed heights\n  h ~ normal(mu, sigma);\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"heights\", monitors = [\"mu\", \"sigma\"],model=heightsmodel,\n  output_format=:mcmcchain);Input data for cmdstanheightsdata = [\n  Dict(\"N\" => length(df2[:height]), \"h\" => df2[:height])\n];Sample using cmdstanrc, chn, cnames = stan(stanmodel, heightsdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Plot the density of posterior drawsdensity(chn, lab=\"All heights\", xlab=\"height [cm]\", ylab=\"density\")End of clip_07.0s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip_07.1s/#",
    "page": "clip_07.1s",
    "title": "clip_07.1s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/04/clip_07.1s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking, CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"chapters\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip_07.1s/#snippet-4.7-1",
    "page": "clip_07.1s",
    "title": "snippet 4.7",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df)Define the Stan language modelheightsmodel = \"\n// Inferring a Rate\ndata {\n  int N;\n  real<lower=0> h[N];\n}\nparameters {\n  real<lower=0> sigma;\n  real<lower=0,upper=250> mu;\n}\nmodel {\n  // Priors for mu and sigma\n  mu ~ uniform(100, 250);\n  sigma ~ cauchy( 0 , 1 );\n\n  // Observed heights\n  h ~ normal(mu, sigma);\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"heights\", monitors = [\"mu\", \"sigma\"],model=heightsmodel,\n  output_format=:mcmcchain);Input data for cmdstanheightsdata = [\n  Dict(\"N\" => length(df2[:height]), \"h\" => df2[:height])\n];Sample using cmdstanrc, chn, cnames = stan(stanmodel, heightsdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Compare with previous resultclip_07s_example_output = \"\n\nSamples were drawn using hmc with nuts.\nFor each parameter, N_Eff is a crude measure of effective sample size,\nand R_hat is the potential scale reduction factor on split chains (at\nconvergence, R_hat=1).\n\nIterations = 1:1000\nThinning interval = 1\nChains = 1,2,3,4\nSamples per chain = 1000\n\nEmpirical Posterior Estimates:\n          Mean        SD      Naive SE      MCSE      ESS\nsigma   7.7641718 0.3055115 0.004830561 0.0047596714 1000\n   mu 154.6042417 0.4158242 0.006574758 0.0068304868 1000\n\nQuantiles:\n         2.5%       25.0%       50.0%      75.0%      97.5%\nsigma   7.198721   7.5573575   7.749435   7.960795   8.393317\n   mu 153.795975 154.3307500 154.610000 154.884000 155.391050\n\n\";Plot the density of posterior drawsdensity(chn, xlab=\"height [cm]\", ylab=\"density\")End of clip_07.1s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip_38.0s/#",
    "page": "clip_38.0s",
    "title": "clip_38.0s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/04/clip_38.0s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\nusing CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"chapters\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip_38.0s/#snippet-4.38-1",
    "page": "clip_38.0s",
    "title": "snippet 4.38",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df)Define the Stan language modelweightsmodel = \"\ndata {\n int < lower = 1 > N; // Sample size\n vector[N] height; // Predictor\n vector[N] weight; // Outcome\n}\n\nparameters {\n real alpha; // Intercept\n real beta; // Slope (regression coefficients)\n real < lower = 0 > sigma; // Error SD\n}\n\nmodel {\n height ~ normal(alpha + weight * beta , sigma);\n}\n\ngenerated quantities {\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"weights\", monitors = [\"alpha\", \"beta\", \"sigma\"],model=weightsmodel,\n  output_format=:mcmcchain);Input data for cmdstanheightsdata = [\n  Dict(\"N\" => length(df2[:height]), \"height\" => df2[:height], \"weight\" => df2[:weight])\n];Sample using cmdstanrc, chn, cnames = stan(stanmodel, heightsdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Compare with a previous resultclip_38s_example_output = \"\n\nSamples were drawn using hmc with nuts.\nFor each parameter, N_Eff is a crude measure of effective sample size,\nand R_hat is the potential scale reduction factor on split chains (at\nconvergence, R_hat=1).\n\nIterations = 1:1000\nThinning interval = 1\nChains = 1,2,3,4\nSamples per chain = 1000\n\nEmpirical Posterior Estimates:\n          Mean         SD       Naive SE       MCSE     ESS\nalpha 113.82267275 1.89871177 0.0300212691 0.053895503 1000\n beta   0.90629952 0.04155225 0.0006569987 0.001184630 1000\nsigma   5.10334279 0.19755211 0.0031235731 0.004830464 1000\n\nQuantiles:\n          2.5%       25.0%       50.0%       75.0%       97.5%\nalpha 110.1927000 112.4910000 113.7905000 115.1322500 117.5689750\n beta   0.8257932   0.8775302   0.9069425   0.9357115   0.9862574\nsigma   4.7308260   4.9644050   5.0958800   5.2331875   5.5133417\n\n\";Plot the density of posterior drawsplot(chn)Plot regression line using means and observationsxi = 30.0:0.1:65.0\nrws, vars, chns = size(chn[:, 1, :])\nalpha_vals = convert(Vector{Float64}, reshape(chn.value[:, 1, :], (rws*chns)))\nbeta_vals = convert(Vector{Float64}, reshape(chn.value[:, 2, :], (rws*chns)))\nyi = mean(alpha_vals) .+ mean(beta_vals)*xi\n\nscatter(df2[:weight], df2[:height], lab=\"Observations\",\n  xlab=\"weight [kg]\", ylab=\"height [cm]\")\nplot!(xi, yi, lab=\"Regression line\")End of clip_38.0s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip_38.1s/#",
    "page": "clip_38.1s",
    "title": "clip_38.1s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/04/clip_38.1s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\nusing CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"chapters\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip_38.1s/#snippet-4.38-1",
    "page": "clip_38.1s",
    "title": "snippet 4.38",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df)Define the Stan language modelweightsmodel = \"\ndata {\n int < lower = 1 > N; // Sample size\n vector[N] height; // Predictor\n vector[N] weight; // Outcome\n}\n\nparameters {\n real alpha; // Intercept\n real beta; // Slope (regression coefficients)\n real < lower = 0 > sigma; // Error SD\n}\n\ntransformed parameters {\n  vector[N] mu; // Intermediate mu\n  for (i in 1:N)\n    mu[i] = alpha + beta*weight[i];\n}\n\nmodel {\n height ~ normal(mu , sigma);\n}\n\ngenerated quantities {\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"weights\", monitors = [\"alpha\", \"beta\", \"sigma\"],model=weightsmodel,\n  output_format=:mcmcchain);Input data for cmdstanweightsdata = [\n  Dict(\"N\" => length(df2[:height]), \"height\" => df2[:height], \"weight\" => df2[:weight])\n];Sample using cmdstanrc, chn, cnames = stan(stanmodel, weightsdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Compare with a previous resultclip_38s_example_output = \"\n\nSamples were drawn using hmc with nuts.\nFor each parameter, N_Eff is a crude measure of effective sample size,\nand R_hat is the potential scale reduction factor on split chains (at\nconvergence, R_hat=1).\n\nIterations = 1:1000\nThinning interval = 1\nChains = 1,2,3,4\nSamples per chain = 1000\n\nEmpirical Posterior Estimates:\n          Mean         SD       Naive SE       MCSE     ESS\nalpha 113.82267275 1.89871177 0.0300212691 0.053895503 1000\n beta   0.90629952 0.04155225 0.0006569987 0.001184630 1000\nsigma   5.10334279 0.19755211 0.0031235731 0.004830464 1000\n\nQuantiles:\n          2.5%       25.0%       50.0%       75.0%       97.5%\nalpha 110.1927000 112.4910000 113.7905000 115.1322500 117.5689750\n beta   0.8257932   0.8775302   0.9069425   0.9357115   0.9862574\nsigma   4.7308260   4.9644050   5.0958800   5.2331875   5.5133417\nsigma   3.9447100   4.1530675   4.254755   4.36483000   4.5871028\n\";Plot the density of posterior drawsplot(chn)Plot regression line using means and observationsxi = 30.0:0.1:65.0\nrws, vars, chns = size(chn[:, 1, :])\nalpha_vals = convert(Vector{Float64}, reshape(chn.value[:, 1, :], (rws*chns)))\nbeta_vals = convert(Vector{Float64}, reshape(chn.value[:, 2, :], (rws*chns)))\nyi = mean(alpha_vals) .+ mean(beta_vals)*xi\n\nscatter(df2[:weight], df2[:height], lab=\"Observations\",\n  xlab=\"weight [kg]\", ylab=\"heigth [cm]\")\nplot!(xi, yi, lab=\"Regression line\")End of clip_38.1s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip_38.2s/#",
    "page": "clip_38.2s",
    "title": "clip_38.2s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/04/clip_38.2s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\nusing CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"chapters\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip_38.2s/#snippet-4.38-1",
    "page": "clip_38.2s",
    "title": "snippet 4.38",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df)Define the Stan language modelweightsmodel = \"\ndata {\n int < lower = 1 > N;\n vector[N] height;\n vector[N] weight;\n}\n\nparameters {\n real alpha;\n real beta;\n real < lower = 0, upper = 50 > sigma;\n}\n\nmodel {priors  alpha ~ normal(178, 100);\n  beta ~ normal(0, 10);\n  sigma ~ uniform(0, 50);model  height ~ normal(alpha + beta*weight , sigma);\n}\n\ngenerated quantities {\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"weights\", monitors = [\"alpha\", \"beta\", \"sigma\"],\n  model=weightsmodel, output_format=:mcmcchain);Input data for cmdstanweightsdata = [\n  Dict(\"N\" => length(df2[:height]), \"height\" => df2[:height], \"weight\" => df2[:weight])\n];Sample using cmdstanrc, chn, cnames = stan(stanmodel, weightsdata, ProjDir, diagnostics=false,\n  summary=false, CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Compare with a previous resultclip_38s_example_output = \"\n\nSamples were drawn using hmc with nuts.\nFor each parameter, N_Eff is a crude measure of effective sample size,\nand R_hat is the potential scale reduction factor on split chains (at\nconvergence, R_hat=1).\n\nIterations = 1:1000\nThinning interval = 1\nChains = 1,2,3,4\nSamples per chain = 1000\n\nEmpirical Posterior Estimates:\n          Mean         SD       Naive SE       MCSE     ESS\nalpha 113.82267275 1.89871177 0.0300212691 0.053895503 1000\n beta   0.90629952 0.04155225 0.0006569987 0.001184630 1000\nsigma   5.10334279 0.19755211 0.0031235731 0.004830464 1000\n\nQuantiles:\n          2.5%       25.0%       50.0%       75.0%       97.5%\nalpha 110.1927000 112.4910000 113.7905000 115.1322500 117.5689750\n beta   0.8257932   0.8775302   0.9069425   0.9357115   0.9862574\nsigma   4.7308260   4.9644050   5.0958800   5.2331875   5.5133417\nsigma   3.9447100   4.1530675   4.254755   4.36483000   4.5871028\n\";Plot the density of posterior drawsplot(chn)Plot regression line using means and observationsxi = 30.0:0.1:65.0\nrws, vars, chns = size(chn[:, 1, :])\nalpha_vals = convert(Vector{Float64}, reshape(chn.value[:, 1, :], (rws*chns)))\nbeta_vals = convert(Vector{Float64}, reshape(chn.value[:, 2, :], (rws*chns)))\nyi = mean(alpha_vals) .+ mean(beta_vals)*xi\n\nscatter(df2[:weight], df2[:height], lab=\"Observations\",\n  xlab=\"weight [kg]\", ylab=\"heigth [cm]\")\nplot!(xi, yi, lab=\"Regression line\")End of clip_38.1s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip_38.3s/#",
    "page": "clip_38.3s",
    "title": "clip_38.3s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/04/clip_38.3s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\nusing CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"chapters\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip_38.3s/#snippet-4.38-1",
    "page": "clip_38.3s",
    "title": "snippet 4.38",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df)Define the Stan language modelweightsmodel = \"\ndata {\n  int<lower=1> N;\n  vector[N] height;\n  vector[N] weight;\n}\nparameters {\n  real alpha;\n  real beta;\n  real<lower=0,upper=50> sigma;\n}\nmodel {\n  vector[N] mu = alpha + beta * weight;\n  target += normal_lpdf(height | mu, sigma);\n  target += normal_lpdf(alpha | 178, 20);\n  target += normal_lpdf(beta | 0, 10);\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"weights\", monitors = [\"alpha\", \"beta\", \"sigma\"],\n  model=weightsmodel, output_format=:mcmcchain);Input data for cmdstanweightsdata = [\n  Dict(\"N\" => length(df2[:height]), \"height\" => df2[:height], \"weight\" => df2[:weight])\n];Sample using cmdstanrc, chn, cnames = stan(stanmodel, weightsdata, ProjDir, diagnostics=false,\n  summary=false, CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Compare with a previous resultclip_38s_example_output = \"\n\nSamples were drawn using hmc with nuts.\nFor each parameter, N_Eff is a crude measure of effective sample size,\nand R_hat is the potential scale reduction factor on split chains (at\nconvergence, R_hat=1).\n\nIterations = 1:1000\nThinning interval = 1\nChains = 1,2,3,4\nSamples per chain = 1000\n\nEmpirical Posterior Estimates:\n          Mean         SD       Naive SE       MCSE     ESS\nalpha 113.82267275 1.89871177 0.0300212691 0.053895503 1000\n beta   0.90629952 0.04155225 0.0006569987 0.001184630 1000\nsigma   5.10334279 0.19755211 0.0031235731 0.004830464 1000\n\nQuantiles:\n          2.5%       25.0%       50.0%       75.0%       97.5%\nalpha 110.1927000 112.4910000 113.7905000 115.1322500 117.5689750\n beta   0.8257932   0.8775302   0.9069425   0.9357115   0.9862574\nsigma   4.7308260   4.9644050   5.0958800   5.2331875   5.5133417\nsigma   3.9447100   4.1530675   4.254755   4.36483000   4.5871028\n\";Plot the density of posterior drawsplot(chn)Plot regression line using means and observationsxi = 30.0:0.1:65.0\nrws, vars, chns = size(chn[:, 1, :])\nalpha_vals = convert(Vector{Float64}, reshape(chn.value[:, 1, :], (rws*chns)))\nbeta_vals = convert(Vector{Float64}, reshape(chn.value[:, 2, :], (rws*chns)))\nyi = mean(alpha_vals) .+ mean(beta_vals)*xi\n\nscatter(df2[:weight], df2[:height], lab=\"Observations\",\n  xlab=\"weight [kg]\", ylab=\"heigth [cm]\")\nplot!(xi, yi, lab=\"Regression line\")End of clip_38.1s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip_38.0m/#",
    "page": "clip_38.0m",
    "title": "clip_38.0m",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/04/clip_38.0m.jl\"using StatisticalRethinking, Distributed, JLD\nusing Mamba\n\n# Data\nline = Dict{Symbol, Any}()\n\nhowell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df);\nline[:x] = convert(Array{Float64,1}, df2[:weight]);\nline[:y] = convert(Array{Float64,1}, df2[:height]);\nline[:xmat] = convert(Array{Float64,2}, [ones(length(line[:x])) line[:x]])\n\n# Model Specification\nmodel = Model(\n  y = Stochastic(1,\n    (xmat, beta, s2) -> MvNormal(xmat * beta, sqrt(s2)),\n    false\n  ),\n  beta = Stochastic(1, () -> MvNormal([178, 0], [sqrt(10000), sqrt(100)])),\n  s2 = Stochastic(() -> Uniform(0, 50))\n)\n\n# Initial Values\ninits = [\n  Dict{Symbol, Any}(\n    :y => line[:y],\n    :beta => [rand(Normal(178, 100)), rand(Normal(0, 10))],\n    :s2 => rand(Uniform(0, 50))\n  )\n  for i in 1:3\n]\n\n# Tuning Parameters\nscale1 = [0.5, 0.25]\nsummary1 = identity\neps1 = 0.5\n\nscale2 = 0.5\nsummary2 = x -> [mean(x); sqrt(var(x))]\neps2 = 0.1\n\n# Define sampling scheme\n\nscheme = [\n  Mamba.NUTS([:beta]),\n  Mamba.Slice([:s2], 10)\n]\n\nsetsamplers!(model, scheme)\n\n# MCMC Simulation\n\nsim = mcmc(model, line, inits, 10000, burnin=1000, chains=3)Show draws summarydescribe(sim)End of clip_38.0m.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip_38.1m/#",
    "page": "clip_38.1m",
    "title": "clip_38.1m",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/04/clip_38.1m.jl\"using StatisticalRethinking, Distributed, JLD, LinearAlgebra\nusing MambaDatahowell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df);Input data for Mambadata = Dict(\n  :x => convert(Array{Float64,1}, df2[:weight]),\n  :y => convert(Array{Float64,1}, df2[:height])\n);Log-transformed Posterior(b0, b1, log(s2)) + Constant and Gradient Vectorlogfgrad = function(x::DenseVector)\n  b0 = x[1]\n  b1 = x[2]\n  logs2 = x[3]\n  r = data[:y] .- b0 .- b1 .* data[:x]\n  logf = (-0.5 * length(data[:y]) - 0.001) * logs2 -\n           (0.5 * dot(r, r) + 0.001) / exp(logs2) -\n           0.5 * b0^2 / 1000 - 0.5 * b1^2 / 1000\n  grad = [\n    sum(r) / exp(logs2) - b0 / 1000,\n    sum(data[:x] .* r) / exp(logs2) - b1 / 1000,\n    -0.5 * length(data[:y]) - 0.001 + (0.5 * dot(r, r) + 0.001) / exp(logs2)\n  ]\n  logf, grad\nend\n\n# MCMC Simulation with No-U-Turn Sampling\n\nn = 5000\nburnin = 1000\nsim = Mamba.Chains(n, 3, start = (burnin + 1), names = [\"b0\", \"b1\", \"s2\"])\ntheta = NUTSVariate([0.0, 0.0, 0.0], logfgrad)\nfor i in 1:n\n  sample!(theta, adapt = (i <= burnin))\n  if i > burnin\n    sim[i, :, 1] = [theta[1:2]; exp(theta[3])]\n  end\nendSummarize drawsdescribe(sim)#-This page was generated using Literate.jl."
},

{
    "location": "04/clip_43s/#",
    "page": "clip_43s",
    "title": "clip_43s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/04/clip_43s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\nusing CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"chapters\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip_43s/#snippet-4.7-1",
    "page": "clip_43s",
    "title": "snippet 4.7",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df)\nmean_weight = mean(df2[:weight])\ndf2[:weight] = convert(Vector{Float64}, df2[:weight]) .- mean_weight ;Define the Stan language modelweightsmodel = \"\ndata {\n int < lower = 1 > N; // Sample size\n vector[N] height; // Predictor\n vector[N] weight; // Outcome\n}\n\nparameters {\n real alpha; // Intercept\n real beta; // Slope (regression coefficients)\n real < lower = 0 > sigma; // Error SD\n}\n\nmodel {\n height ~ normal(alpha + weight * beta , sigma);\n}\n\ngenerated quantities {\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"weights\", monitors = [\"alpha\", \"beta\", \"sigma\"],model=weightsmodel,\n  output_format=:mcmcchain);Input data for cmdstanheightsdata = [\n  Dict(\"N\" => length(df2[:height]), \"height\" => df2[:height], \"weight\" => df2[:weight])\n];Sample using cmdstanrc, chn, cnames = stan(stanmodel, heightsdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME)Describe the drawsdescribe(chn)Compare with a previous resultclip_38s_example_output = \"\n\nSamples were drawn using hmc with nuts.\nFor each parameter, N_Eff is a crude measure of effective sample size,\nand R_hat is the potential scale reduction factor on split chains (at\nconvergence, R_hat=1).\n\nIterations = 1:1000\nThinning interval = 1\nChains = 1,2,3,4\nSamples per chain = 1000\n\nEmpirical Posterior Estimates:\n          Mean         SD       Naive SE       MCSE     ESS\nalpha 113.82267275 1.89871177 0.0300212691 0.053895503 1000\n beta   0.90629952 0.04155225 0.0006569987 0.001184630 1000\nsigma   5.10334279 0.19755211 0.0031235731 0.004830464 1000\n\nQuantiles:\n          2.5%       25.0%       50.0%       75.0%       97.5%\nalpha 110.1927000 112.4910000 113.7905000 115.1322500 117.5689750\n beta   0.8257932   0.8775302   0.9069425   0.9357115   0.9862574\nsigma   4.7308260   4.9644050   5.0958800   5.2331875   5.5133417\n\n\";Plot the density of posterior drawsplot(chn)Plot regression line using means and observationsxi = -16.0:0.1:18.0\nrws, vars, chns = size(chn[:, 1, :])\nalpha_vals = convert(Vector{Float64}, reshape(chn.value[:, 1, :], (rws*chns)))\nbeta_vals = convert(Vector{Float64}, reshape(chn.value[:, 2, :], (rws*chns)))\nyi = mean(alpha_vals) .+ mean(beta_vals)*xi\n\nscatter(df2[:weight], df2[:height], lab=\"Observations\",\n  ylab=\"height [cm]\", xlab=\"weight[kg]\")\nplot!(xi, yi, lab=\"Regression line\")End of clip_43s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip_43t/#",
    "page": "clip_43t",
    "title": "clip_43t",
    "category": "page",
    "text": "using StatisticalRethinking\ngr(size=(500,500));\n\nTuring.setadbackend(:reverse_diff)\n\nProjDir = rel_path(\"..\", \"chapters\", \"04\")\ncd(ProjDir)loaded\n\n\n┌ Warning: Package Turing does not have CmdStan in its dependencies:\n│ - If you have Turing checked out for development and have\n│   added CmdStan as a dependency but haven\'t updated your primary\n│   environment\'s manifest file, try `Pkg.resolve()`.\n│ - Otherwise you may need to report an issue with Turing\n│ Loading CmdStan into Turing from project dependency, future warnings for Turing are suppressed.\n└ @ nothing nothing:840\nWARNING: using CmdStan.Sample in module Turing conflicts with an existing identifier."
},

{
    "location": "04/clip_43t/#snippet-4.43-1",
    "page": "clip_43t",
    "title": "snippet 4.43",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df);Center the weight observations and add a column to df2mean_weight = mean(df2[:weight])\ndf2 = hcat(df2, df2[:weight] .- mean_weight)\nrename!(df2, :x1 => :weight_c); # Rename our col :x1 => :weight_cExtract variables for Turing modely = convert(Vector{Float64}, df2[:height]);\nx = convert(Vector{Float64}, df2[:weight_c]);Define the regression model@model line(y, x) = begin\n    #priors\n    alpha ~ Normal(178.0, 100.0)\n    beta ~ Normal(0.0, 10.0)\n    s ~ Uniform(0, 50)\n\n    #model\n    mu = alpha .+ beta*x\n    for i in 1:length(y)\n      y[i] ~ Normal(mu[i], s)\n    end\nend;Disable updating progress of sampling processTuring.turnprogress(false);┌ Info: [Turing]: global PROGRESS is set as false\n└ @ Turing /Users/rob/.julia/packages/Turing/pRhjG/src/Turing.jl:81Draw the sampleschn = sample(line(y, x), Turing.NUTS(2000, 1000, 0.65));┌ Info: [Turing] looking for good initial eps...\n└ @ Turing /Users/rob/.julia/packages/Turing/pRhjG/src/samplers/support/hmc_core.jl:246\n[NUTS{Union{}}] found initial ϵ: 0.0015625\n└ @ Turing /Users/rob/.julia/packages/Turing/pRhjG/src/samplers/support/hmc_core.jl:291\n┌ Warning: Numerical error has been found in gradients.\n└ @ Turing /Users/rob/.julia/packages/Turing/pRhjG/src/core/ad.jl:114\n┌ Warning: grad = [9.77018, -246.999, NaN]\n└ @ Turing /Users/rob/.julia/packages/Turing/pRhjG/src/core/ad.jl:115\n┌ Info:  Adapted ϵ = 0.044462752933641304, std = [1.0, 1.0, 1.0]; 1000 iterations is used for adaption.\n└ @ Turing /Users/rob/.julia/packages/Turing/pRhjG/src/samplers/adapt/adapt.jl:91\n\n\n[NUTS] Finished with\n  Running time        = 189.38645733500005;\n  #lf / sample        = 0.004;\n  #evals / sample     = 20.942;\n  pre-cond. metric    = [1.0, 1.0, 1.0].Describe the chain result#describe(chn)\nfor var in [:alpha, :beta, :s]\n  println(\"$var = \",  mean_and_std(chn[Symbol(var)][1001:2000]))\nendalpha = (154.61078700045508, 0.2724353848980195)\nbeta = (0.9066138974896988, 0.04095449280236761)\ns = (5.098763886954905, 0.19522522291317368)Compare with a previous resultclip_43s_example_output = \"\n\nIterations = 1:1000\nThinning interval = 1\nChains = 1,2,3,4\nSamples per chain = 1000\n\nEmpirical Posterior Estimates:\n         Mean        SD       Naive SE       MCSE      ESS\nalpha 154.597086 0.27326431 0.0043206882 0.0036304132 1000\n beta   0.906380 0.04143488 0.0006551430 0.0006994720 1000\nsigma   5.106643 0.19345409 0.0030587777 0.0032035103 1000\n\nQuantiles:\n          2.5%       25.0%       50.0%       75.0%       97.5%\nalpha 154.0610000 154.4150000 154.5980000 154.7812500 155.1260000\n beta   0.8255494   0.8790695   0.9057435   0.9336445   0.9882981\nsigma   4.7524368   4.9683400   5.0994450   5.2353100   5.5090128\n\";Example result for Turing with centered weights (appears biased)clip_43t_example_output = \"\n\n[NUTS] Finished with\n  Running time        = 163.20725027799972;\n  #lf / sample        = 0.006;\n  #evals / sample     = 19.824;\n  pre-cond. metric    = [1.0, 1.0, 1.0].\n\n               Mean                SD\nalpha = (154.6020248402468, 0.24090814737592972)\nbeta = (0.9040183717679473, 0.0422796486734481)\ns = (5.095714121087817, 0.18455074897377258)\n\n\";Plot the regerssion line and observationsxi = -15.0:0.1:15.0\nyi = mean(chn[:alpha]) .+ mean(chn[:beta])*xi\n\nscatter(x, y, lab=\"Observations\", xlab=\"weight\", ylab=\"height\")\nplot!(xi, yi, lab=\"Regression line\")(Image: svg)End of clip_43t.jlThis notebook was generated using Literate.jl."
},

{
    "location": "04/clip_45_47s/#",
    "page": "clip_45_47s",
    "title": "clip_45_47s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/04/clip_45_47s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\nusing CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"chapters\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip_45_47s/#snippet-4.7-1",
    "page": "clip_45_47s",
    "title": "snippet 4.7",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df)Define the Stan language modelweightsmodel = \"\ndata {\n int < lower = 1 > N; // Sample size\n vector[N] height; // Predictor\n vector[N] weight; // Outcome\n}\n\nparameters {\n real alpha; // Intercept\n real beta; // Slope (regression coefficients)\n real < lower = 0 > sigma; // Error SD\n}\n\nmodel {\n height ~ normal(alpha + weight * beta , sigma);\n}\n\ngenerated quantities {\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"weights\", monitors = [\"alpha\", \"beta\", \"sigma\"],model=weightsmodel,\n  output_format=:mcmcchain);Input data for cmdstanheightsdata = [\n  Dict(\"N\" => length(df2[:height]), \"height\" => df2[:height], \"weight\" => df2[:weight])\n];Sample using cmdstanrc, chn, cnames = stan(stanmodel, heightsdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME)Show first 5 individual draws of correlated parameter values in chain 1chn.value[1:5,:,1]Plot estimates using the N = [10, 50, 150, 352] observationsp = Vector{Plots.Plot{Plots.GRBackend}}(undef, 4)\nnvals = [10, 50, 150, 352]\n\nfor i in 1:length(nvals)\n  N = nvals[i]\n  heightsdataN = [\n    Dict(\"N\" => N, \"height\" => df2[1:N, :height], \"weight\" => df2[1:N, :weight])\n  ]\n  rc, chnN, cnames = stan(stanmodel, heightsdataN, ProjDir, diagnostics=false,\n    summary=false, CmdStanDir=CMDSTAN_HOME)\n\n  xi = 30.0:0.1:65.0\n  rws, vars, chns = size(chnN[:, 1, :])\n  alpha_vals = convert(Vector{Float64}, reshape(chnN.value[:, 1, :], (rws*chns)))\n  beta_vals = convert(Vector{Float64}, reshape(chnN.value[:, 2, :], (rws*chns)))\n\n  p[i] = scatter(df2[1:N, :weight], df2[1:N, :height], leg=false, xlab=\"weight\")\n  for j in 1:N\n    yi = alpha_vals[j] .+ beta_vals[j]*xi\n    plot!(p[i], xi, yi, title=\"N = $N\")\n  end\nend\nplot(p..., layout=(2, 2))End of clip_45_47s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip_48_54s/#",
    "page": "clip_48_54s",
    "title": "clip_48_54s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/04/clip_48_54s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\nusing CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"chapters\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip_48_54s/#snippet-4.48-1",
    "page": "clip_48_54s",
    "title": "snippet 4.48",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df)Center weight and store as weight_cmean_weight = mean(df2[:weight])\ndf2 = hcat(df2, df2[:weight] .- mean_weight)\nrename!(df2, :x1 => :weight_c); # Rename our col :x1 => :weight_cDefine the Stan language modelweightsmodel = \"\ndata {\n int < lower = 1 > N; // Sample size\n vector[N] height; // Predictor\n vector[N] weight; // Outcome\n}\n\nparameters {\n real alpha; // Intercept\n real beta; // Slope (regression coefficients)\n real < lower = 0 > sigma; // Error SD\n}\n\nmodel {\n height ~ normal(alpha + weight * beta , sigma);\n}\n\ngenerated quantities {\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"weights\", monitors = [\"alpha\", \"beta\", \"sigma\"],model=weightsmodel,\n  output_format=:mcmcchain);Input data for cmdstanheightsdata = [\n  Dict(\"N\" => length(df2[:height]), \"height\" => df2[:height], \"weight\" => df2[:weight_c])\n];Sample using cmdstanrc, chn, cnames = stan(stanmodel, heightsdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME)"
},

{
    "location": "04/clip_48_54s/#Snippet-4.47-1",
    "page": "clip_48_54s",
    "title": "Snippet 4.47",
    "category": "section",
    "text": "Show first 5 individual draws of correlated parameter values in chain 1chn.value[1:5,:,1]"
},

{
    "location": "04/clip_48_54s/#Snippets-4.48-and-4.49-1",
    "page": "clip_48_54s",
    "title": "Snippets 4.48 & 4.49",
    "category": "section",
    "text": "Plot estimates using the N = [10, 50, 150, 352] observationsp = Vector{Plots.Plot{Plots.GRBackend}}(undef, 4)\nnvals = [10, 50, 150, 352]Create plotsfor i in 1:length(nvals)\n  N = nvals[i]\n  heightsdataN = [\n    Dict(\"N\" => N, \"height\" => df2[1:N, :height], \"weight\" => df2[1:N, :weight_c])\n  ]\n  rc, chnN, cnames = stan(stanmodel, heightsdataN, ProjDir, diagnostics=false,\n    summary=false, CmdStanDir=CMDSTAN_HOME)\n\n  rws, vars, chns = size(chnN[:, 1, :])\n  xi = -15.0:0.1:15.0\n  alpha_vals = convert(Vector{Float64}, reshape(chnN.value[:, 1, :], (rws*chns)))\n  beta_vals = convert(Vector{Float64}, reshape(chnN.value[:, 2, :], (rws*chns)))\n\n  p[i] = scatter(df2[1:N, :weight_c], df2[1:N, :height], leg=false, xlab=\"weight_c\")\n  for j in 1:N\n    yi = alpha_vals[j] .+ beta_vals[j]*xi\n    plot!(p[i], xi, yi, title=\"N = $N\")\n  end\nend\nplot(p..., layout=(2, 2))"
},

{
    "location": "04/clip_48_54s/#Snippet-4.50-1",
    "page": "clip_48_54s",
    "title": "Snippet 4.50",
    "category": "section",
    "text": "Get dimensions of chainsrws, vars, chns = size(chn[:, 1, :])\nmu_at_50 = link(50:10:50, chn, [1, 2], mean_weight);\ndensity(mu_at_50)"
},

{
    "location": "04/clip_48_54s/#Snippet-4.54-1",
    "page": "clip_48_54s",
    "title": "Snippet 4.54",
    "category": "section",
    "text": "Show posterior density for 6 mu_bar valuesmu = link(25:10:75, chn, [1, 2], mean_weight);\n\nq = Vector{Plots.Plot{Plots.GRBackend}}(undef, size(mu, 1))\nfor i in 1:size(mu, 1)\n  q[i] = density(mu[i], ylim=(0.0, 1.5),\n    leg=false, title=\"mu_bar = $(round(mean(mu[i]), digits=1))\")\nend\n\nplot(q..., layout=(2, 3), ticks=(3))End of clip_48_54s.jlThis page was generated using Literate.jl."
},

{
    "location": "05/clip_01s/#",
    "page": "clip_01s",
    "title": "clip_01s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/05/clip_01s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\nusing CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"chapters\", \"05\")\ncd(ProjDir)"
},

{
    "location": "05/clip_01s/#snippet-5.1-1",
    "page": "clip_01s",
    "title": "snippet 5.1",
    "category": "section",
    "text": "wd = CSV.read(joinpath(dirname(Base.pathof(StatisticalRethinking)), \"..\",\n  \"data\", \"WaffleDivorce.csv\"), delim=\';\')\ndf = convert(DataFrame, wd);\nmean_ma = mean(df[:MedianAgeMarriage])\ndf[:MedianAgeMarriage] = convert(Vector{Float64},\n  df[:MedianAgeMarriage]) .- mean_ma;Define the Stan language modelad_model = \"\ndata {\n int < lower = 1 > N; // Sample size\n vector[N] divorce; // Predictor\n vector[N] median_age; // Outcome\n}\n\nparameters {\n real a; // Intercept\n real bA; // Slope (regression coefficients)\n real < lower = 0 > sigma; // Error SD\n}\n\ntransformed parameters {\n  vector[N] mu; // Intermediate mu\n  for (i in 1:N)\n    mu[i] = a + bA*median_age[i];\n}\n\nmodel {priors  a ~ normal(10, 10);\n  bA ~ normal(0, 1);\n  sigma ~ uniform(0, 10);model  divorce ~ normal(mu , sigma);\n}\n\ngenerated quantities {\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"MedianAgeDivorce\", monitors = [\"a\", \"bA\", \"sigma\"],\n  model=ad_model, output_format=:mcmcchain);Input data for cmdstanmaddata = [\n  Dict(\"N\" => length(df[:Divorce]), \"divorce\" => df[:Divorce],\n    \"median_age\" => df[:MedianAgeMarriage])\n];Sample using cmdstanrc, chn, cnames = stan(stanmodel, maddata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Plot the density of posterior drawsplot(chn)Plot regression line using means and observationsxi = -3.0:0.1:3.0\nrws, vars, chns = size(chn[:, 1, :])\nalpha_vals = convert(Vector{Float64}, reshape(chn.value[:, 1, :], (rws*chns)))\nbeta_vals = convert(Vector{Float64}, reshape(chn.value[:, 2, :], (rws*chns)))\nyi = mean(alpha_vals) .+ mean(beta_vals)*xi\n\nscatter(df[:MedianAgeMarriage], df[:Divorce], lab=\"Observations\",\n  xlab=\"Median age of marriage\", ylab=\"divorce\")\nplot!(xi, yi, lab=\"Regression line\")Plot estimates using the N = [10, 50, 150, 352] observationsp = Vector{Plots.Plot{Plots.GRBackend}}(undef, 4)\nnvals = [10, 20, 35, 50]\n\nfor i in 1:length(nvals)\n  N = nvals[i]\n  maddataN = [\n    Dict(\"N\" => N, \"divorce\" => df[1:N, :Divorce],\n      \"median_age\" => df[1:N, :MedianAgeMarriage])\n  ]\n  rc, chnN, cnames = stan(stanmodel, maddataN, ProjDir, diagnostics=false,\n    summary=false, CmdStanDir=CMDSTAN_HOME)\n\n  xi = -3.0:0.1:3.0\n  rws, vars, chns = size(chnN[:, 1, :])\n  alpha_vals = convert(Vector{Float64}, reshape(chnN.value[:, 1, :], (rws*chns)))\n  beta_vals = convert(Vector{Float64}, reshape(chnN.value[:, 2, :], (rws*chns)))\n\n  p[i] = scatter(df[1:N, :MedianAgeMarriage], df[1:N, :Divorce],\n    leg=false, xlab=\"Median age of marriage\")\n  for j in 1:N\n    yi = alpha_vals[j] .+ beta_vals[j]*xi\n    plot!(p[i], xi, yi, title=\"N = $N\")\n  end\nend\nplot(p..., layout=(2, 2))End of 05/clip_01s.jlThis page was generated using Literate.jl."
},

{
    "location": "08/m8.1/#",
    "page": "m8.1.jl",
    "title": "m8.1.jl",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/08/m8.1.jl\"m8.1stanm8.1stan is the first model in the Statistical Rethinking book (pp. 249) using Stan. Here we will use Turing\'s NUTS support, which is currently (2018) the original NUTS by Hoffman & Gelman, http://www.stat.columbia.edu/~gelman/research/published/nuts.pdf and not the one that\'s in Stan 2.18.2, i.e., Appendix A.5 in: https://arxiv.org/abs/1701.02434The StatisticalRethinking pkg uses, e.g., Turing, CSV, DataFramesusing StatisticalRethinking\n\nd = CSV.read(joinpath(dirname(Base.pathof(StatisticalRethinking)), \"..\", \"data\",\n    \"rugged.csv\"), delim=\';\')\nsize(d) # Should be 234x51Apply log() to each element in rgdppc_2000 column and add it as a new columnd = hcat(d, map(log, d[Symbol(\"rgdppc_2000\")]))\nrename!(d, :x1 => :log_gdp) # Rename our col x1 => log_gdpNow we need to drop every row where rgdppc2000 == missing When this (https://github.com/JuliaData/DataFrames.jl/pull/1546) hits DataFrame it\'ll be conceptually easier: i.e., completecases!(d, :rgdppc2000)notisnan(e) = !ismissing(e)\ndd = d[map(notisnan, d[:rgdppc_2000]), :]\nsize(dd) # should equal 170 x 52\n\n@model m8_1stan(y, x₁, x₂) = begin\n    σ ~ Truncated(Cauchy(0, 2), 0, Inf)\n    βR ~ Normal(0, 10)\n    βA ~ Normal(0, 10)\n    βAR ~ Normal(0, 10)\n    α ~ Normal(0, 100)\n\n    for i ∈ 1:length(y)\n        y[i] ~ Normal(α + βR * x₁[i] + βA * x₂[i] + βAR * x₁[i] * x₂[i], σ)\n    end\nendTest to see that the model is sane. Use 2000 for now, as in the book. Need to set the same stepsize and adapt_delta as in Stan...posterior = sample(m8_1stan(dd[:,:log_gdp], dd[:,:rugged], dd[:,:cont_africa]),\n    Turing.NUTS(2000, 1000, 0.95))\ndescribe(posterior)Output reg. params of interest:        Mean           SD        Naive SE        MCSE         ESS α    9.2140454953  0.416410339 0.00931121825 0.0303436655  188.324543 βA  -1.9414588557  0.373885658 0.00836033746 0.0583949856   40.994586 βR  -0.1987645549  0.158902372 0.00355316505 0.0128657961  152.541295 σ    0.9722532977  0.440031013 0.00983939257 0.0203736871  466.473854 βAR  0.3951414223  0.187780491 0.00419889943 0.0276680621   46.062071Here\'s the map2stan output:        Mean StdDev lower 0.89 upper 0.89 n_eff Rhat a      9.24   0.14       9.03       9.47   291    1 bR    -0.21   0.08      -0.32      -0.07   306    1 bA    -1.97   0.23      -2.31      -1.58   351    1 bAR    0.40   0.13       0.20       0.63   350    1 sigma  0.95   0.05       0.86       1.03   566    1This page was generated using Literate.jl."
},

{
    "location": "08/m8.1t/#",
    "page": "m8.1t.jl",
    "title": "m8.1t.jl",
    "category": "page",
    "text": ""
},

{
    "location": "08/m8.1t/#m8.1stan-1",
    "page": "m8.1t.jl",
    "title": "m8.1stan",
    "category": "section",
    "text": "m8.1stan is the first model in the Statistical Rethinking book (pp. 249) using Stan.Here we will use Turing\'s NUTS support, which is currently (2018) the originalNUTS by Hoffman & Gelman and not the one that\'s in Stan 2.18.2, i.e., Appendix A.5.The StatisticalRethinking pkg uses, e.g., Turing, CSV, DataFramesusing StatisticalRethinkingloaded\n\n\n┌ Warning: Package Turing does not have CmdStan in its dependencies:\n│ - If you have Turing checked out for development and have\n│   added CmdStan as a dependency but haven\'t updated your primary\n│   environment\'s manifest file, try `Pkg.resolve()`.\n│ - Otherwise you may need to report an issue with Turing\n│ Loading CmdStan into Turing from project dependency, future warnings for Turing are suppressed.\n└ @ nothing nothing:840\nWARNING: using CmdStan.Sample in module Turing conflicts with an existing identifier.Read in rugged data as a DataFramed = CSV.read(joinpath(dirname(Base.pathof(StatisticalRethinking)), \"..\", \"data\",\n    \"rugged.csv\"), delim=\';\');\n# Show size of the DataFrame (should be 234x51)\nsize(d)(234, 51)Apply log() to each element in rgdppc_2000 column and add it as a new columnd = hcat(d, map(log, d[Symbol(\"rgdppc_2000\")]));Rename our col x1 => log_gdprename!(d, :x1 => :log_gdp);Now we need to drop every row where rgdppc_2000 == missingWhen this (https://github.com/JuliaData/DataFrames.jl/pull/1546) hits DataFrame it\'ll be conceptually easier: i.e., completecases!(d, :rgdppc_2000)notisnan(e) = !ismissing(e)\ndd = d[map(notisnan, d[:rgdppc_2000]), :];Updated DataFrame dd size (should equal 170 x 52)size(dd)(170, 52)Define the Turing model@model m8_1stan(y, x₁, x₂) = begin\n    σ ~ Truncated(Cauchy(0, 2), 0, Inf)\n    βR ~ Normal(0, 10)\n    βA ~ Normal(0, 10)\n    βAR ~ Normal(0, 10)\n    α ~ Normal(0, 100)\n\n    for i ∈ 1:length(y)\n        y[i] ~ Normal(α + βR * x₁[i] + βA * x₂[i] + βAR * x₁[i] * x₂[i], σ)\n    end\nend;Test to see that the model is sane. Use 2000 for now, as in the book. Need to set the same stepsize and adapt_delta as in Stan...posterior = sample(m8_1stan(dd[:,:log_gdp], dd[:,:rugged], dd[:,:cont_africa]),\n    Turing.NUTS(2000, 1000, 0.95));\n# Describe the posterior samples\ndescribe(posterior)┌ Warning: Indexing with colon as row will create a copy in the future. Use `df[col_inds]` to get the columns without copying\n│   caller = top-level scope at In[8]:1\n└ @ Core In[8]:1\n┌ Warning: Indexing with colon as row will create a copy in the future. Use `df[col_inds]` to get the columns without copying\n│   caller = top-level scope at In[8]:1\n└ @ Core In[8]:1\n┌ Warning: Indexing with colon as row will create a copy in the future. Use `df[col_inds]` to get the columns without copying\n│   caller = top-level scope at In[8]:1\n└ @ Core In[8]:1\n┌ Info: [Turing] looking for good initial eps...\n└ @ Turing /Users/rob/.julia/packages/Turing/orJH9/src/samplers/support/hmc_core.jl:246\n[NUTS{Union{}}] found initial ϵ: 0.05\n└ @ Turing /Users/rob/.julia/packages/Turing/orJH9/src/samplers/support/hmc_core.jl:291\n[32m[NUTS] Sampling...  1%  ETA: 0:06:54[39m\n[34m  ϵ:         0.021702349971125082[39m\n[34m  α:         0.9890516933991319[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling...  2%  ETA: 0:05:49[39m\n[34m  ϵ:         0.025964213600878867[39m\n[34m  α:         0.8596042698404098[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling...  3%  ETA: 0:04:25[39m\n[34m  ϵ:         0.014815766991558857[39m\n[34m  α:         0.9934963906380034[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling...  4%  ETA: 0:03:49[39m\n[34m  ϵ:         0.032734674808041646[39m\n[34m  α:         0.8267264305201034[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling...  5%  ETA: 0:03:11[39m\n[34m  ϵ:         0.03183906486749323[39m\n[34m  α:         0.9980435182012655[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling...  6%  ETA: 0:02:52[39m\n[34m  ϵ:         0.02332219042746582[39m\n[34m  α:         0.9938986598752901[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling...  7%  ETA: 0:02:42[39m\n[34m  ϵ:         0.022765193972566565[39m\n[34m  α:         0.9963929753051147[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling...  8%  ETA: 0:02:32[39m\n[34m  ϵ:         0.018115226291014586[39m\n[34m  α:         0.9831564890831901[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling...  9%  ETA: 0:02:24[39m\n[34m  ϵ:         0.0264916665322655[39m\n[34m  α:         0.9887844525209211[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 10%  ETA: 0:02:16[39m\n[34m  ϵ:         0.021575607716437604[39m\n[34m  α:         0.9749267632446936[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 11%  ETA: 0:02:10[39m\n[34m  ϵ:         0.03141462283517077[39m\n[34m  α:         0.8714611472530431[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 12%  ETA: 0:02:04[39m\n[34m  ϵ:         0.02939689779238441[39m\n[34m  α:         0.9984025534187178[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 13%  ETA: 0:02:03[39m\n[34m  ϵ:         0.01909107851666875[39m\n[34m  α:         0.9992739975281155[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 14%  ETA: 0:02:02[39m\n[34m  ϵ:         0.021149241662058213[39m\n[34m  α:         1.0[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 15%  ETA: 0:01:58[39m\n[34m  ϵ:         0.023888285400989993[39m\n[34m  α:         1.0[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 16%  ETA: 0:01:57[39m\n[34m  ϵ:         0.01889749833742631[39m\n[34m  α:         0.9178221360475471[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 16%  ETA: 0:01:54[39m\n[34m  ϵ:         0.03289091879046056[39m\n[34m  α:         0.9983176872334326[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 18%  ETA: 0:01:51[39m\n[34m  ϵ:         0.03143636930148497[39m\n[34m  α:         0.973450644644926[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 19%  ETA: 0:01:48[39m\n[34m  ϵ:         0.03333568334968122[39m\n[34m  α:         0.8802416912910938[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 19%  ETA: 0:01:47[39m\n[34m  ϵ:         0.024860129757923958[39m\n[34m  α:         0.9465574509975048[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 20%  ETA: 0:01:45[39m\n[34m  ϵ:         0.024147271950740724[39m\n[34m  α:         0.9963454219465105[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 21%  ETA: 0:01:42[39m\n[34m  ϵ:         0.02841750041302116[39m\n[34m  α:         0.9915183507724583[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 23%  ETA: 0:01:38[39m\n[34m  ϵ:         0.03477889821030197[39m\n[34m  α:         0.9620996967069368[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 24%  ETA: 0:01:35[39m\n[34m  ϵ:         0.02292329764909516[39m\n[34m  α:         0.9531273994262867[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 25%  ETA: 0:01:34[39m\n[34m  ϵ:         0.03465171740982106[39m\n[34m  α:         0.9696570042137486[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 26%  ETA: 0:01:32[39m\n[34m  ϵ:         0.03154099794490125[39m\n[34m  α:         0.9666588241056846[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 27%  ETA: 0:01:30[39m\n[34m  ϵ:         0.025445032131723687[39m\n[34m  α:         0.9987618606606394[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 28%  ETA: 0:01:29[39m\n[34m  ϵ:         0.02700948014435288[39m\n[34m  α:         1.0[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 29%  ETA: 0:01:26[39m\n[34m  ϵ:         0.04045178285341591[39m\n[34m  α:         0.9962842848999183[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 30%  ETA: 0:01:24[39m\n[34m  ϵ:         0.015560536869733648[39m\n[34m  α:         0.9822753019048962[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 31%  ETA: 0:01:23[39m\n[34m  ϵ:         0.022521210797718835[39m\n[34m  α:         0.9747560489912214[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 32%  ETA: 0:01:21[39m\n[34m  ϵ:         0.036886036835501936[39m\n[34m  α:         0.9641170285183496[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 33%  ETA: 0:01:18[39m\n[34m  ϵ:         0.03218803022030199[39m\n[34m  α:         0.8559107831132022[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 34%  ETA: 0:01:17[39m\n[34m  ϵ:         0.03217185677378528[39m\n[34m  α:         1.0[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 36%  ETA: 0:01:14[39m\n[34m  ϵ:         0.029934090465140267[39m\n[34m  α:         0.9637935308868608[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 37%  ETA: 0:01:13[39m\n[34m  ϵ:         0.03766209842729723[39m\n[34m  α:         1.0[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 38%  ETA: 0:01:11[39m\n[34m  ϵ:         0.022525648837685045[39m\n[34m  α:         0.979910303228714[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 39%  ETA: 0:01:10[39m\n[34m  ϵ:         0.01786061046273[39m\n[34m  α:         0.9771913428474581[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 40%  ETA: 0:01:09[39m\n[34m  ϵ:         0.028067342663153656[39m\n[34m  α:         0.9753760022954534[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 40%  ETA: 0:01:08[39m\n[34m  ϵ:         0.028986812476833282[39m\n[34m  α:         0.9375335119964464[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 41%  ETA: 0:01:07[39m\n[34m  ϵ:         0.032117279642967206[39m\n[34m  α:         0.9940669026916351[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 42%  ETA: 0:01:06[39m\n[34m  ϵ:         0.030737127864859708[39m\n[34m  α:         0.9821912777159816[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 43%  ETA: 0:01:05[39m\n[34m  ϵ:         0.026438391658241963[39m\n[34m  α:         0.9980480594684609[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 44%  ETA: 0:01:03[39m\n[34m  ϵ:         0.02780498401755003[39m\n[34m  α:         0.9379581388525683[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 45%  ETA: 0:01:02[39m\n[34m  ϵ:         0.021497580222665725[39m\n[34m  α:         0.997838993180469[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 46%  ETA: 0:01:01[39m\n[34m  ϵ:         0.030820042201476643[39m\n[34m  α:         0.9780183694318911[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 47%  ETA: 0:00:59[39m\n[34m  ϵ:         0.02581329680132846[39m\n[34m  α:         0.9602252978375723[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 48%  ETA: 0:00:58[39m\n[34m  ϵ:         0.04447510506264669[39m\n[34m  α:         0.9603561420806969[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 50%  ETA: 0:00:57[39m\n[34m  ϵ:         0.028028277925480596[39m\n[34m  α:         0.936555913265008[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m┌ Info:  Adapted ϵ = 0.028862387932864265, std = [1.0, 1.0, 1.0, 1.0, 1.0]; 1000 iterations is used for adaption.\n└ @ Turing /Users/rob/.julia/packages/Turing/orJH9/src/samplers/adapt/adapt.jl:91\n\n\n\n[32m[NUTS] Sampling... 51%  ETA: 0:00:55[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9731170875091677[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 52%  ETA: 0:00:54[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9323017998991567[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 53%  ETA: 0:00:53[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9903549704526096[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 54%  ETA: 0:00:51[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9978152996666327[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 55%  ETA: 0:00:50[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         1.0[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 56%  ETA: 0:00:49[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9745595306250021[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 57%  ETA: 0:00:48[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9364723452724012[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 58%  ETA: 0:00:47[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9882822029392492[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 59%  ETA: 0:00:46[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9764526530232573[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 60%  ETA: 0:00:44[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9945875964420767[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 61%  ETA: 0:00:42[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         1.0[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 62%  ETA: 0:00:41[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9962157248944833[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 63%  ETA: 0:00:40[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9890323655917073[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 65%  ETA: 0:00:38[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.8324021795495518[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 66%  ETA: 0:00:37[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9657150103723464[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 67%  ETA: 0:00:36[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9234381416818382[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 68%  ETA: 0:00:35[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9494730649956734[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 69%  ETA: 0:00:34[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.8784878588473566[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 69%  ETA: 0:00:33[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9935813628621196[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 70%  ETA: 0:00:32[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9727677401574897[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 71%  ETA: 0:00:31[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9942663653403332[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 73%  ETA: 0:00:29[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9439622157894664[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 74%  ETA: 0:00:28[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.999478295756282[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 75%  ETA: 0:00:27[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9729044361179782[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 75%  ETA: 0:00:26[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         1.0[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 76%  ETA: 0:00:26[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9894849332618576[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 77%  ETA: 0:00:25[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9978627128794907[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 78%  ETA: 0:00:24[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9929515657222006[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 79%  ETA: 0:00:23[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9993663615086615[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 80%  ETA: 0:00:22[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.99958917121676[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 81%  ETA: 0:00:21[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9948412904815331[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 82%  ETA: 0:00:20[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         1.0[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 82%  ETA: 0:00:19[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9846293914634091[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 83%  ETA: 0:00:18[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         1.0[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 84%  ETA: 0:00:17[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         1.0[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 85%  ETA: 0:00:16[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9867209387222736[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 86%  ETA: 0:00:15[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9757542419609502[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 88%  ETA: 0:00:13[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9098487923015703[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 89%  ETA: 0:00:12[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9116645340587638[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 90%  ETA: 0:00:11[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.8741954363453688[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 90%  ETA: 0:00:10[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.98152618446337[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 92%  ETA: 0:00:09[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         1.0[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 93%  ETA: 0:00:08[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.997082288585899[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 94%  ETA: 0:00:07[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9913409566691967[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 95%  ETA: 0:00:06[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9636173199279039[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 96%  ETA: 0:00:05[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.8274183984970295[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 97%  ETA: 0:00:04[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9899779190278849[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 98%  ETA: 0:00:03[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.906318260459193[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling... 98%  ETA: 0:00:02[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.9917617167298529[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n[32m[NUTS] Sampling...100%  ETA: 0:00:00[39m\n[34m  ϵ:         0.028862387932864265[39m\n[34m  α:         0.8337995406437935[39m\n[A4m  pre_cond:  [1.0, 1.0, 1.0, 1.0, 1.0][39m\n\n\n\n\n[NUTS] Finished with\n  Running time        = 107.10928417000004;\n  #lf / sample        = 0.0015;\n  #evals / sample     = 44.931;\n  pre-cond. metric    = [1.0, 1.0, 1.0, 1.0, 1.0].\n\n\n[32m[NUTS] Sampling...100% Time: 0:01:48[39m\n\n\nIterations = 1:2000\nThinning interval = 1\nChains = 1\nSamples per chain = 2000\n\nEmpirical Posterior Estimates:\n              Mean           SD         Naive SE        MCSE         ESS   \n       α    9.192198853  0.471485288 0.01054273155 0.03488051527  182.71345\n  lf_num    0.001500000  0.067082039 0.00150000000 0.00150000000 2000.00000\n      βA   -1.916864926  0.377451668 0.00844007588 0.02969740713  161.54207\n      βR   -0.195354050  0.142021349 0.00317569391 0.01008324641  198.38394\n       σ    0.968861418  0.295329191 0.00660376148 0.01871696223  248.96714\n elapsed    0.053554642  0.076105161 0.00170176314 0.00239230124 1012.03724\n epsilon    0.029681037  0.018393691 0.00041129543 0.00041492961 1965.11923\neval_num   44.931000000 25.521538227 0.57067894365 0.67314732101 1437.45232\n     βAR    0.386290432  0.160630677 0.00359181114 0.00838013229  367.41360\n      lp -249.858010884 17.850220615 0.39914306709 1.35731471511  172.95219\n  lf_eps    0.029681037  0.018393691 0.00041129543 0.00041492961 1965.11923\n\nQuantiles:\n              2.5%           25.0%          50.0%          75.0%          97.5%    \n       α    8.948743652    9.126714263    9.221557657    9.318783435    9.501543505\n  lf_num    0.000000000    0.000000000    0.000000000    0.000000000    0.000000000\n      βA   -2.368320692   -2.097968685   -1.938597291   -1.779472367   -1.451814577\n      βR   -0.361073257   -0.254798277   -0.204489451   -0.149987743   -0.042763334\n       σ    0.857642577    0.915085102    0.947928480    0.984199708    1.060340022\n elapsed    0.009562707    0.026420479    0.050147139    0.061298654    0.116432655\n epsilon    0.018468817    0.028417477    0.028862388    0.028862388    0.039981894\neval_num   10.000000000   22.000000000   46.000000000   46.000000000   94.000000000\n     βAR    0.118640406    0.298877960    0.395536816    0.480566011    0.656950733\n      lp -252.744273688 -249.297284956 -248.219714562 -247.399261183 -246.384239328\n  lf_eps    0.018468817    0.028417477    0.028862388    0.028862388    0.039981894Example of a Turing run simulation outputm_08_1t_turing_result = \"\n        Mean           SD        Naive SE        MCSE         ESS\nα    9.2140454953  0.416410339 0.00931121825 0.0303436655  188.324543\nβA  -1.9414588557  0.373885658 0.00836033746 0.0583949856   40.994586\nβR  -0.1987645549  0.158902372 0.00355316505 0.0128657961  152.541295\nσ    0.9722532977  0.440031013 0.00983939257 0.0203736871  466.473854\nβAR  0.3951414223  0.187780491 0.00419889943 0.0276680621   46.062071\n\";Here\'s the map2stan output from rethinkingm_08_1_map2stan_result = \"\n       Mean StdDev lower 0.89 upper 0.89 n_eff Rhat\n a      9.24   0.14       9.03       9.47   291    1\n bR    -0.21   0.08      -0.32      -0.07   306    1\n bA    -1.97   0.23      -2.31      -1.58   351    1\n bAR    0.40   0.13       0.20       0.63   350    1\n sigma  0.95   0.05       0.86       1.03   566    1\n\";\n\n#-This notebook was generated using Literate.jl."
},

{
    "location": "08/m8.2/#",
    "page": "m8.2.jl",
    "title": "m8.2.jl",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/08/m8.2.jl\"using StatisticalRethinkingIn Rethinking the model actually has priors that are U[-Inf, Inf], or as the Stan manual (2.17.0, pp. 127) tells us:\"A parameter declared without constraints is thus given a uniform prior on (−∞, ∞) ...\"But setting -Inf and Inf in Turing doesn\'t work. So the below works of course better since we\'ve restrained it to [-1,1]@model m8_2(y) = begin\n    σ ~ Uniform(-1, 1)\n    α ~ Uniform(-1, 1)\n\n    for i ∈ 1:length(y)\n        y[i] ~ Normal(α, σ)\n    end\nend\n\ny = [-1,1]\n\nposterior = sample(m8_2(y), Turing.NUTS(4000, 1000, 0.95))\ndescribe(posterior)This page was generated using Literate.jl."
},

{
    "location": "08/m8.3/#",
    "page": "m8.3.jl",
    "title": "m8.3.jl",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/08/m8.3.jl\"using StatisticalRethinking\n\n@model m8_3(y) = begin\n    α ~ Normal(1, 10)\n    σ ~ Truncated(Cauchy(0, 1), 0, Inf)\n\n    for i ∈ 1:length(y)\n        y[i] ~ Normal(α, σ)\n    end\nend\n\ny = [-1,1]\n\nposterior = sample(m8_3(y), Turing.NUTS(4000, 1000, 0.95))\ndescribe(posterior)        Mean          SD         Naive SE        MCSE         ESSα       -1.075811343  1.334041836 0.02109305348 0.19866042331   45.093733 σ        2.137823169  1.466095174 0.02318100009 0.18324552293   64.011438According to Rethinking        Mean StdDev lower 0.89 upper 0.89 n_eff Rhat alpha -0.01   1.60      -1.98       2.37  1121    1 sigma  1.98   1.91       0.47       3.45  1077    1This page was generated using Literate.jl."
},

{
    "location": "08/m8.4/#",
    "page": "m8.4.jl",
    "title": "m8.4.jl",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/08/m8.4.jl\"using StatisticalRethinkingCan\'t really set a U[-Inf,Inf] on \\sigma AFAICT so this will not be 1:1 w/ Rethinking@model m8_4(y) = begin\n    α₁ ~ Uniform(-Inf, Inf)\n    α₂ ~ Uniform(-Inf, Inf)\n    σ ~ Truncated(Cauchy(0,1), 0, Inf)\n\n    for i ∈ 1:length(y)\n        y[i] ~ Normal(α₁ + α₂, σ)\n    end\nend\n\ny = rand(Normal(0,1), 100)\n\nposterior = sample(m8_4(y), Turing.NUTS(4000, 1000, 0.95))\ndescribe(posterior)Rethinking         mean      sd     5.5%   94.5% n_eff Rhat a1    -861.15 558.17 -1841.89  -31.04     7 1.43 a2     861.26 558.17    31.31 1842.00     7 1.43 sigma    0.97   0.07     0.89    1.09     9 1.17This page was generated using Literate.jl."
},

{
    "location": "10/m10.3/#",
    "page": "m10.3.jl",
    "title": "m10.3.jl",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/10/m10.3.jl\"using StatisticalRethinking\nusing StatsFuns #logistic() function\n\nd = CSV.read(joinpath(dirname(Base.pathof(StatisticalRethinking)), \"..\", \"data\",\n    \"chimpanzees.csv\"), delim=\';\')\nsize(d) # Should be 504x8pulledleft, condition, prosocleft@model m10_3(y, x₁, x₂) = begin\n    α ~ Normal(0, 10)\n    βp ~ Normal(0, 10)\n    βpC ~ Normal(0, 10)\n\n    for i ∈ 1:length(y)\n        p = logistic(α + (βp + βpC * x₁[i]) * x₂[i])\n        y[i] ~ Binomial(1, p)\n    end\nend\n\nposterior = sample(m10_3(d[:,:pulled_left], d[:,:condition], d[:,:prosoc_left]),\n    Turing.NUTS(10000, 1000, 0.95))\ndescribe(posterior)Empirical Posterior Estimates:\n         Mean           SD        Naive SE       MCSE         ESSα           0.053228176  0.148432403 0.0033190494 0.0072162528  423.091170 βp          0.604297351  0.241527734 0.0054007243 0.0212696753  128.947312 βpC        -0.074156932  0.278219321 0.0062211731 0.0279932431   98.779800#StatisticalRethinking Mean StdDev lower 0.89 upper 0.89 n_eff Rhata    0.05   0.13      -0.15       0.25  3284    1 bp   0.62   0.22       0.28       0.98  3032    1 bpC -0.11   0.26      -0.53       0.29  3184    1This page was generated using Literate.jl."
},

{
    "location": "10/m10.4/#",
    "page": "m10.4.jl",
    "title": "m10.4.jl",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/10/m10.4.jl\"using StatisticalRethinking\nusing StatsFuns #logistic() function\nusing Turing\n\nTuring.setadbackend(:reverse_diff)\n\nd = CSV.read(joinpath(dirname(Base.pathof(StatisticalRethinking)), \"..\", \"data\",\n    \"chimpanzees.csv\"), delim=\';\')\nsize(d) # Should be 504x8pulledleft, actors, condition, prosocleft@model m10_4(y, actors, x₁, x₂) = beginNumber of unique actors in the data set    N_actor = length(unique(actors))Set an TArray for the priors/param    α = TArray{Any}(undef, N_actor)For each actor [1,..,7] set a prior    for i ∈ 1:length(α)\n        α[i] ~ Normal(0,10)\n    end\n\n    βp ~ Normal(0, 10)\n    βpC ~ Normal(0, 10)\n\n    for i ∈ 1:length(y)\n        p = logistic(α[actors[i]] + (βp + βpC * x₁[i]) * x₂[i])\n        y[i] ~ Binomial(1, p)\n    end\nend\n\nposterior = sample(m10_4(d[:,:pulled_left], d[:,:actor],d[:,:condition],\n    d[:,:prosoc_left]),\n    Turing.NUTS(2500, 500, 0.95))\ndescribe(posterior)         Mean           SD       Naive SE       MCSE         ESSβpC   -0.181394034  0.28946513 0.0057893027 0.0266018473  118.404696 α[1]   -0.750003835  0.29794860 0.0059589721 0.0278564821  114.401093 α[2]    9.372324757  4.49534602 0.0899069204 0.8306772626   29.286104 α[3]   -1.067303557  0.32767901 0.0065535802 0.0329610836   98.831248 α[4]   -1.060339791  0.27627393 0.0055254786 0.0298318788   85.766681 α[5]   -0.707040908  0.28169208 0.0056338417 0.0226231747  155.039440 α[6]    0.218884973  0.27572737 0.0055145474 0.0312307275   77.946310 α[7]    1.803365110  0.38459001 0.0076918002 0.0392945213   95.792607   βp    0.870271237  0.27987766 0.0055975532 0.0324186869   74.532489Rethinking       mean   sd  5.5% 94.5% n_eff Rhat a[1] -0.74 0.27 -1.17 -0.31  3838    1 a[2] 11.02 5.53  4.46 21.27  1759    1 a[3] -1.05 0.28 -1.50 -0.61  3784    1 a[4] -1.05 0.27 -1.48 -0.62  3761    1 a[5] -0.74 0.27 -1.18 -0.32  4347    1 a[6]  0.21 0.27 -0.23  0.66  3932    1 a[7]  1.81 0.39  1.19  2.46  4791    1 bp    0.84 0.26  0.42  1.26  2586    1 bpC  -0.13 0.30 -0.63  0.34  3508    1This page was generated using Literate.jl."
},

{
    "location": "11/m11_5/#",
    "page": "m11.5.jl",
    "title": "m11.5.jl",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/11/m11_5.jl\"using StatisticalRethinking\nusing Turing\n\nTuring.setadbackend(:reverse_diff)\n\nd = CSV.read(joinpath(dirname(Base.pathof(StatisticalRethinking)), \"..\", \"data\",\n    \"UCBadmit.csv\"), delim=\';\')\nsize(d) # Should be 12x5\n\n@model m11_5(admit, applications) = begin\n    N=length(applications)\n    θ ~ Truncated(Exponential(1), 0, Inf)\n    α ~ Normal(0,2)\n\n    for i ∈ 1:N\n        prob = logistic(α)alpha and beta for the BetaBinomial must be provided. The two parameterizations are related by alpha = prob * theta, and beta = (1-prob) * theta. See https://github.com/rmcelreath/rethinking/blob/master/man/dbetabinom.Rd        alpha = prob * θ\n        beta = (1 - prob) * θ\n\n        admit[i] ~ BetaBinomial(applications[i], alpha, beta)\n    end\nend\n\nposterior = sample(m11_5(d[:admit],d[:applications]), Turing.NUTS(4000, 1000, 0.9))\ndescribe(posterior)        Mean          SD         Naive SE         MCSE        ESS\n   α  -0.372382104 0.3119992723 0.004933141643 0.00613870681 2583.1723\n   θ   2.767996106 0.9897869845 0.015649906347 0.02305742759 1842.7303Rethinking        mean   sd  5.5% 94.5% n_eff Rhat theta  2.74 0.96  1.43  4.37  3583    1 a     -0.37 0.31 -0.87  0.12  3210    1This page was generated using Literate.jl."
},

{
    "location": "12/m12_1/#",
    "page": "m12.1.jl",
    "title": "m12.1.jl",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/12/m12_1.jl\"using StatisticalRethinking\nusing Turing\n\nTuring.setadbackend(:reverse_diff)\n\nd = CSV.read(joinpath(dirname(Base.pathof(StatisticalRethinking)), \"..\", \"data\",\n    \"reedfrogs.csv\"), delim=\';\')\nsize(d) # Should be 48x5Set number of tanksd[:tank] = 1:size(d,1)\n\n@model m12_1(density, tank, surv) = beginNumber of unique tanks in the data set    N_tank = length(tank)Set an TArray for the priors/param    a_tank = Vector{Real}(undef, N_tank)For each tank [1,..,48] set prior N(0,5)    a_tank ~ [Normal(0,5)]\n\n    logitp = [a_tank[tank[i]] for i = 1:N_tank]\n    surv ~ VecBinomialLogit(density, logitp)\nend\n\nposterior = sample(m12_1(Vector{Int64}(d[:density]), Vector{Int64}(d[:tank]),\n    Vector{Int64}(d[:surv])), Turing.NUTS(4000, 1000, 0.8))\ndescribe(posterior)            Mean           SD         Naive SE       MCSE         ESSatank[33]    3.7925121923  1.069473492 0.01690986065 0.0181583984 3468.84559  atank[2]    5.6619233751  2.661975386 0.04208952648 0.0984382340  731.27452 atank[44]   -0.4076755205  0.349650208 0.00552845521 0.0051973560 4000.00000 atank[40]    2.4882548674  0.642093720 0.01015239313 0.0087774011 4000.00000 atank[41]   -2.1368737936  0.588205639 0.00930034776 0.0091150511 4000.00000 atank[42]   -0.6773019465  0.370413780 0.00585675610 0.0052435688 4000.00000 atank[11]    0.9259845291  0.729448255 0.01153358961 0.0077243130 4000.00000 atank[16]    2.5669573506  1.256913239 0.01987354329 0.0240073491 2741.08301 atank[46]   -0.6654705830  0.370650246 0.00586049496 0.0058669658 3991.18148  atank[8]    2.5385573941  1.151976429 0.01821434663 0.0232427286 2456.47849 atank[14]    0.0006786356  0.680697609 0.01076277421 0.0069893413 4000.00000 atank[47]    2.1388988496  0.532096615 0.00841318620 0.0078518462 4000.00000 atank[43]   -0.5364419223  0.354074917 0.00559841600 0.0058512095 3661.83713 atank[24]    1.7486397297  0.597014797 0.00943963278 0.0071524317 4000.00000 atank[34]    2.9828401383  0.793129631 0.01254048056 0.0113862941 4000.00000  atank[9]   -0.4362986938  0.655848632 0.01036987739 0.0065852640 4000.00000 atank[28]   -0.5903300678  0.430889431 0.00681296010 0.0061191595 4000.00000 atank[31]   -0.7790724381  0.438852449 0.00693886648 0.0062867441 4000.00000 atank[29]    0.0892476063  0.403319027 0.00637703374 0.0065342700 3809.80961 atank[18]    2.5984354254  0.789739347 0.01248687547 0.0116099713 4000.00000  atank[1]    2.5169564861  1.202252233 0.01900927690 0.0261521039 2113.38159 atank[38]    6.5730591701  2.577397287 0.04075222931 0.0960321899  720.32596 atank[37]    2.1321270081  0.542445637 0.00857681860 0.0067553411 4000.00000 atank[30]    1.4436385748  0.510944886 0.00807874799 0.0061875938 4000.00000 atank[35]    2.9837870684  0.798955606 0.01263259732 0.0111689405 4000.00000 atank[20]    6.4209696786  2.614898794 0.04134518019 0.0934495614  782.98823 atank[15]    2.4852422308  1.182168671 0.01869172789 0.0235303705 2524.06980 atank[45]    0.5431043960  0.369638488 0.00584449767 0.0046883639 4000.00000 atank[26]    0.0840349555  0.395331366 0.00625073774 0.0067906853 3389.18550 atank[21]    2.6516314895  0.851902518 0.01346976151 0.0118211120 4000.00000 atank[48]   -0.0571820248  0.337815684 0.00534133495 0.0051459323 4000.00000 atank[10]    2.5310386381  1.157968533 0.01830909012 0.0251590089 2118.39263  atank[3]    0.9295620334  0.735176403 0.01162415958 0.0127307257 3334.85377  atank[7]    5.7185532309  2.796270760 0.04421292278 0.1047192286  713.02634  atank[6]    2.5050631208  1.183397045 0.01871115019 0.0243016893 2371.30836 atank[25]   -1.2007745016  0.470201538 0.00743453910 0.0071826339 4000.00000 atank[32]   -0.4234910116  0.414945560 0.00656086537 0.0060452516 4000.00000  atank[5]    2.5286171889  1.207469316 0.01909176622 0.0250131147 2330.32587 atank[13]    0.9170279823  0.723356937 0.01143727741 0.0091140235 4000.00000 atank[19]    2.1126922998  0.642028977 0.01015136946 0.0086040212 4000.00000 atank[12]    0.4476884510  0.682975434 0.01079878979 0.0070550762 4000.00000  atank[4]    5.5617118510  2.607791677 0.04123280681 0.1041546582  626.88574 atank[17]    3.4763818329  1.091795631 0.01726280467 0.0199830235 2985.10977 atank[27]   -1.7411510659  0.578372766 0.00914487638 0.0085613085 4000.00000 atank[22]    2.6038964868  0.779764455 0.01232915859 0.0107305461 4000.00000 atank[23]    2.6217848846  0.808680221 0.01278635699 0.0105079615 4000.00000 atank[36]    2.1205525264  0.557014163 0.00880716721 0.0077309477 4000.00000 atank[39]    2.9653158635  0.795061058 0.01257101910 0.0110571371 4000.00000Rethinking             mean   sd  5.5% 94.5% neff Rhat atank[1]   2.49 1.16  0.85  4.53  1079    1 atank[2]   5.69 2.75  2.22 10.89  1055    1 atank[3]   0.89 0.75 -0.23  2.16  1891    1 atank[4]   5.71 2.70  2.21 10.85   684    1 atank[5]   2.52 1.14  0.92  4.42  1640    1 atank[6]   2.49 1.13  0.94  4.52  1164    1 atank[7]   5.74 2.71  2.25 10.86   777    1 atank[8]   2.52 1.19  0.95  4.42  1000    1 atank[9]  -0.46 0.69 -1.62  0.55  2673    1 atank[10]  2.53 1.19  0.93  4.59  1430    1 atank[11]  0.93 0.72 -0.17  2.11  1387    1 atank[12]  0.47 0.74 -0.63  1.70  1346    1 atank[13]  0.91 0.76 -0.25  2.30  1559    1 atank[14]  0.00 0.66 -1.04  1.06  2085    1 atank[15]  2.50 1.19  0.95  4.40  1317    1 atank[16]  2.50 1.14  0.98  4.31  1412    1 atank[17]  3.49 1.12  1.94  5.49   945    1 atank[18]  2.59 0.75  1.50  3.81  1561    1 atank[19]  2.11 0.64  1.15  3.15  1712    1 atank[20]  6.40 2.57  3.11 11.04   996    1 atank[21]  2.59 0.74  1.54  3.93  1233    1 atank[22]  2.63 0.79  1.49  4.01  1184    1 atank[23]  2.64 0.83  1.45  4.13  1379    1 atank[24]  1.74 0.59  0.85  2.72  1736    1 atank[25] -1.19 0.45 -1.90 -0.50  2145    1 atank[26]  0.09 0.41 -0.53  0.78  2167    1 atank[27] -1.75 0.56 -2.65 -0.88  1666    1 atank[28] -0.58 0.43 -1.25  0.08  1567    1 atank[29]  0.08 0.39 -0.54  0.71  3053    1 atank[30]  1.43 0.49  0.66  2.24  2754    1 atank[31] -0.79 0.44 -1.50 -0.12  1299    1 atank[32] -0.42 0.41 -1.12  0.23  1661    1 atank[33]  3.84 1.08  2.31  5.70   808    1 atank[34]  3.00 0.85  1.83  4.36  1038    1 atank[35]  2.96 0.82  1.82  4.25  1578    1 atank[36]  2.14 0.55  1.31  3.08  1734    1 atank[37]  2.12 0.56  1.31  3.04  1131    1 atank[38]  6.72 2.62  3.45 11.44   706    1 atank[39]  2.95 0.73  1.85  4.08  1509    1 atank[40]  2.48 0.65  1.53  3.61  1731    1 atank[41] -2.15 0.57 -3.11 -1.29  1231    1 atank[42] -0.67 0.35 -1.22 -0.14  1444    1 atank[43] -0.54 0.35 -1.12  0.03  1776    1 atank[44] -0.43 0.34 -1.00  0.10  1735    1 atank[45]  0.54 0.36 -0.04  1.14  1376    1 atank[46] -0.67 0.34 -1.25 -0.15  1619    1 atank[47]  2.14 0.55  1.31  3.04  1916    1 a_tank[48] -0.06 0.35 -0.61  0.50  1932    1This page was generated using Literate.jl."
},

{
    "location": "12/m12_2/#",
    "page": "m12.2.jl",
    "title": "m12.2.jl",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/12/m12_2.jl\"using StatisticalRethinking\nusing Turing\n\nTuring.setadbackend(:reverse_diff)\n\nd = CSV.read(joinpath(dirname(Base.pathof(StatisticalRethinking)), \"..\", \"data\",\n    \"reedfrogs.csv\"), delim=\';\')\nsize(d) # Should be 48x5Set number of tanksd[:tank] = 1:size(d,1)Thanks to Kai Xu!@model m12_2(density, tank, surv) = beginSeparate priors on α and σ for each tank    σ ~ Truncated(Cauchy(0, 1), 0, Inf)\n    α ~ Normal(0, 1)Number of unique tanks in the data set    N_tank = length(tank)vector for the priors for each tank    a_tank = Vector{Real}(undef, N_tank)For each tank [1,..,48] set a prior. Note the [] around Normal().    a_tank ~ [Normal(α, σ)]Observation    logitp = [a_tank[tank[i]] for i = 1:N_tank]\n    surv ~ VecBinomialLogit(density, logitp)\n\nend\n\nposterior = sample(m12_2(Vector{Int64}(d[:density]), Vector{Int64}(d[:tank]),\n    Vector{Int64}(d[:surv])), Turing.NUTS(4000, 1000, 0.8))\ndescribe(posterior)            Mean           SD        Naive SE       MCSE         ESS\n σ       1.6165979235  0.254350155 0.0040216291 0.0056943516 1995.14955\n α       1.2953176604  0.246773278 0.0039018281 0.0042788414 3326.16566atank[33]   3.1850173180  0.768681132 0.0121539159 0.0130009524 3495.76401 atank[2]    3.0295132611  1.097786749 0.0173575326 0.0255811814 1841.59774 atank[41]   -1.8040414452  0.488303695 0.0077207593 0.0051973681 4000.00000 atank[44]   -0.3348510394  0.346054656 0.0054716045 0.0046467452 4000.00000 atank[40]    2.3463288839  0.573923956 0.0090745345 0.0101900002 3172.19822 atank[42]   -0.5694094170  0.358234605 0.0056641864 0.0046935532 4000.00000 atank[11]    1.0007489783  0.663737508 0.0104946115 0.0117422973 3195.11562 atank[16]    2.1088413933  0.872132839 0.0137896310 0.0168742768 2671.25251 atank[46]   -0.5794564306  0.362646534 0.0057339452 0.0050212654 4000.00000 atank[8]    2.0875919106  0.883745348 0.0139732409 0.0162842279 2945.23491 atank[14]    0.1964596710  0.617296433 0.0097603136 0.0075173911 4000.00000 atank[47]    2.0547681207  0.509187915 0.0080509678 0.0071101438 4000.00000 atank[43]   -0.4487646777  0.339582585 0.0053692721 0.0049577724 4000.00000 atank[24]    1.6974144465  0.541970319 0.0085693032 0.0061834892 4000.00000 atank[34]    2.6936725440  0.628597382 0.0099389973 0.0087708320 4000.00000 atank[9]   -0.1874117115  0.633287204 0.0100131499 0.0079473202 4000.00000 atank[28]   -0.4681636985  0.416090181 0.0065789634 0.0057151179 4000.00000 atank[31]   -0.6356923902  0.433795689 0.0068589121 0.0041842682 4000.00000 atank[29]    0.1624613393  0.401316555 0.0063453719 0.0046974312 4000.00000 atank[18]    2.3913830070  0.671420136 0.0106160845 0.0111601737 3619.48527 atank[1]    2.1144841871  0.873765594 0.0138154471 0.0134103108 4000.00000 atank[38]    3.8893717797  0.978631940 0.0154735296 0.0231402831 1788.55144 atank[37]    2.0558293650  0.514694473 0.0081380342 0.0071845468 4000.00000 atank[30]    1.4416152688  0.479794721 0.0075862206 0.0059017454 4000.00000 atank[35]    2.6925880675  0.651873334 0.0103070224 0.0085287006 4000.00000 atank[20]    3.6134226610  0.970193501 0.0153401062 0.0238161118 1659.49138 atank[15]    2.1272566988  0.876804950 0.0138635035 0.0199621939 1929.25417 atank[26]    0.1630585993  0.405131249 0.0064056875 0.0045865339 4000.00000 atank[45]    0.5823296893  0.349822119 0.0055311734 0.0046059843 4000.00000 atank[21]    2.3968425342  0.661596555 0.0104607600 0.0104431077 4000.00000 atank[48]    0.0030622025  0.331573461 0.0052426367 0.0038034443 4000.00000 atank[10]    2.1097053742  0.872430009 0.0137943296 0.0190694321 2093.07926 atank[3]    0.9966593638  0.662195640 0.0104702324 0.0082308854 4000.00000 atank[7]    3.0314959227  1.071425974 0.0169407321 0.0228591199 2196.87491 atank[6]    2.1263090050  0.875040776 0.0138356095 0.0138610403 3985.33589 atank[25]   -1.0097610188  0.451706567 0.0071421079 0.0056360736 4000.00000 atank[32]   -0.3105658507  0.393426518 0.0062206195 0.0047667754 4000.00000 atank[5]    2.1067240289  0.847313335 0.0133972002 0.0174789494 2349.94357 atank[13]    0.9934721312  0.673907169 0.0106554079 0.0087754899 4000.00000 atank[19]    2.0027362510  0.581472256 0.0091938836 0.0085476353 4000.00000 atank[12]    0.5757662524  0.635809034 0.0100530235 0.0078502186 4000.00000 atank[4]    3.0344422538  1.075560077 0.0170060980 0.0278349168 1493.10205 atank[17]    2.8901636458  0.786143265 0.0124300164 0.0154722829 2581.63357 atank[27]   -1.4285276117  0.504504387 0.0079769148 0.0047850541 4000.00000 atank[22]    2.3972696703  0.660728612 0.0104470366 0.0092144017 4000.00000 atank[23]    2.3939166498  0.653360543 0.0103305372 0.0085971078 4000.00000 atank[36]    2.0544595646  0.536312030 0.0084798378 0.0062225461 4000.00000 atank[39]    2.6940908508  0.641144454 0.0101373839 0.0089230656 4000.00000#Rethinking       mean   sd  5.5% 94.5% n_eff Rhata           1.30 0.25  0.90  1.70 11662    1 sigma       1.62 0.22  1.30  1.99  6556    1 atank[1]   2.12 0.88  0.84  3.60 16091    1 atank[2]   3.05 1.10  1.52  4.92 10962    1 atank[3]   1.00 0.66 -0.02  2.10 18175    1 atank[4]   3.05 1.11  1.47  4.96 10181    1 atank[5]   2.13 0.87  0.85  3.62 13720    1 atank[6]   2.12 0.86  0.86  3.59 11628    1 atank[7]   3.07 1.13  1.47  5.03 10315    1 atank[8]   2.13 0.87  0.86  3.60 13754    1 atank[9]  -0.18 0.60 -1.14  0.76 18218    1 atank[10]  2.11 0.86  0.83  3.58 15121    1 atank[11]  1.00 0.67 -0.04  2.09 17390    1 atank[12]  0.58 0.62 -0.41  1.60 17209    1 atank[13]  0.99 0.66 -0.04  2.09 15225    1 atank[14]  0.19 0.62 -0.79  1.20 18293    1 atank[15]  2.13 0.89  0.83  3.63 12445    1 atank[16]  2.11 0.87  0.87  3.61 12385    1 atank[17]  2.89 0.80  1.76  4.29 12583    1 atank[18]  2.38 0.66  1.43  3.49 14437    1 atank[19]  2.00 0.58  1.12  2.99 13959    1 atank[20]  3.67 1.03  2.20  5.44 10629    1 atank[21]  2.38 0.65  1.42  3.47 15309    1 atank[22]  2.39 0.66  1.42  3.49 13614    1 atank[23]  2.40 0.67  1.41  3.53 11868    1 atank[24]  1.69 0.52  0.90  2.55 18468    1 atank[25] -1.00 0.45 -1.74 -0.30 18153    1 atank[26]  0.16 0.40 -0.47  0.81 21895    1 atank[27] -1.44 0.50 -2.28 -0.69 16718    1 atank[28] -0.47 0.41 -1.15  0.17 20160    1 atank[29]  0.15 0.40 -0.48  0.80 19401    1 atank[30]  1.44 0.49  0.70  2.24 15407    1 atank[31] -0.64 0.42 -1.33 -0.01 15356    1 atank[32] -0.31 0.40 -0.95  0.32 19130    1 atank[33]  3.18 0.78  2.06  4.55 10894    1 atank[34]  2.70 0.66  1.75  3.84 13573    1 atank[35]  2.69 0.64  1.74  3.78 13876    1 atank[36]  2.06 0.53  1.26  2.92 16329    1 atank[37]  2.06 0.51  1.29  2.91 14672    1 atank[38]  3.88 0.97  2.52  5.57  9349    1 atank[39]  2.70 0.64  1.77  3.78 13444    1 atank[40]  2.34 0.56  1.49  3.31 14966    1 atank[41] -1.82 0.48 -2.61 -1.10 14214    1 atank[42] -0.58 0.36 -1.16 -0.02 17203    1 atank[43] -0.46 0.35 -1.02  0.08 17762    1 atank[44] -0.34 0.34 -0.90  0.20 16740    1 atank[45]  0.58 0.35  0.02  1.14 18946    1 atank[46] -0.57 0.34 -1.13 -0.03 19761    1 atank[47]  2.05 0.51  1.30  2.90 15122    1 atank[48]  0.00 0.33 -0.53  0.53 18236    1This page was generated using Literate.jl."
},

{
    "location": "12/m12_3/#",
    "page": "m12.3.jl",
    "title": "m12.3.jl",
    "category": "page",
    "text": "EditURL = \"https://github.com/StanJulia/StatisticalRethinking.jl/blob/master/chapters/12/m12_3.jl\"using StatisticalRethinking\nusing Turing\n\nTuring.setadbackend(:reverse_diff)\n\nμ = 1.4\nσ = 1.5\nnponds = 60\nni = repeat([5,10,25,35], inner=15)\n\na_pond = rand(Normal(μ, σ), nponds)\n\ndsim = DataFrame(pond = 1:nponds, ni = ni, true_a = a_pond)\n\nprob = logistic.(Vector{Real}(dsim[:true_a]))\n\ndsim[:si] = [rand(Binomial(ni[i], prob[i])) for i = 1:nponds]Used only in the continuation of this exampledsim[:p_nopool] = dsim[:si] ./ dsim[:ni]\n\n@model m12_3(pond, si, ni) = beginSeparate priors on μ and σ for each pond    σ ~ Truncated(Cauchy(0, 1), 0, Inf)\n    μ ~ Normal(0, 1)Number of ponds in the data set    N_ponds = length(pond)vector for the priors for each pond    a_pond = Vector{Real}(undef, N_ponds)For each pond set a prior. Note the [] around Normal(), i.e.,    a_pond ~ [Normal(μ, σ)]Observation    logitp = [a_pond[pond[i]] for i = 1:N_ponds]\n    si ~ VecBinomialLogit(ni, logitp)\n\nend\n\nposterior = sample(m12_3(Vector{Int64}(dsim[:pond]), Vector{Int64}(dsim[:si]),\n    Vector{Int64}(dsim[:ni])), Turing.NUTS(10000, 1000, 0.8))\ndescribe(posterior)            Mean           SD        Naive SE        MCSE         ESSapond[13]    0.0177228141  0.841956449 0.0084195645 0.00771496194 10000.0000 apond[39]    0.0066110725  0.403509812 0.0040350981 0.00300378764 10000.0000 apond[12]   -0.6879306819  0.887142394 0.0088714239 0.00983038264  8144.1511 apond[33]    1.0230070658  0.440802431 0.0044080243 0.00340565683 10000.0000 apond[40]   -0.4710107332  0.397151811 0.0039715181 0.00287378746 10000.0000          μ    1.4171959646  0.247164994 0.0024716499 0.00279659983  7811.1193 apond[52]   -0.1075137501  0.334424028 0.0033442403 0.00304380214 10000.0000 apond[48]    0.2270466468  0.340522575 0.0034052258 0.00288072684 10000.0000 apond[31]   -0.3116943388  0.406497387 0.0040649739 0.00327039672 10000.0000 apond[21]   -0.5664379565  0.649981939 0.0064998194 0.00531522292 10000.0000 apond[14]   -0.6980794242  0.863848603 0.0086384860 0.00834117683 10000.0000 apond[26]    1.5157188342  0.746372296 0.0074637230 0.00689302178 10000.0000 apond[35]   -0.3104176671  0.400246807 0.0040024681 0.00351529487 10000.0000 apond[53]    2.3656224490  0.570317605 0.0057031760 0.00514104769 10000.0000 apond[45]    3.7602403329  1.040583568 0.0104058357 0.01371112136  5759.8076 apond[27]    3.1787683092  1.143238040 0.0114323804 0.01676903058  4647.9069 apond[10]    2.7440414813  1.264526612 0.0126452661 0.01600961219  6238.7032 apond[19]    3.1606479454  1.166461112 0.0116646111 0.01482980989  6186.8468 apond[58]    3.2339626006  0.791995574 0.0079199557 0.00801476020  9764.8245  apond[5]    0.7262878590  0.875745952 0.0087574595 0.00740596596 10000.0000 apond[36]    0.8278459525  0.433666591 0.0043366659 0.00340041538 10000.0000 apond[22]   -0.9954707978  0.698527821 0.0069852782 0.00639152189 10000.0000  apond[2]    1.5514073486  0.973915502 0.0097391550 0.01111824521  7673.0859 apond[59]    3.9781779304  1.018961505 0.0101896150 0.01278245028  6354.5870 apond[46]    2.0703897434  0.515233417 0.0051523342 0.00470261856 10000.0000          σ    1.6843877698  0.243610374 0.0024361037 0.00421903982  3333.9901 apond[47]    3.9862598194  1.020488268 0.0102048827 0.01240672087  6765.5329 apond[57]    2.0741920322  0.509608416 0.0050960842 0.00391260407 10000.0000 apond[23]   -0.9989820391  0.681962640 0.0068196264 0.00642167767 10000.0000 apond[51]    2.7344759539  0.649587763 0.0064958776 0.00648076189 10000.0000 apond[20]    0.5764910930  0.625086947 0.0062508695 0.00506310281 10000.0000  apond[8]    2.7496005216  1.272989569 0.0127298957 0.01733946864  5389.8679 apond[18]    3.1900259466  1.171811970 0.0117181197 0.01440863531  6614.0909 apond[54]    3.2291234955  0.784255555 0.0078425556 0.00820057334  9145.9069 apond[11]    2.7535202736  1.237297764 0.0123729776 0.01757842164  4954.3730 apond[16]    2.2007440950  0.916943320 0.0091694332 0.00992638854  8533.0137         lp -214.2598610993  7.211089559 0.0721108956 0.13728259285  2759.1215 apond[44]    1.4579671233  0.494609207 0.0049460921 0.00415623790 10000.0000  apond[7]    1.5544027763  0.979190641 0.0097919064 0.01106135909  7836.4168     lfeps    0.0806304543  0.025824042 0.0002582404 0.00087843406   864.2315 apond[50]    1.2646118079  0.396937728 0.0039693773 0.00301671654 10000.0000 apond[1]    2.7358650934  1.256841000 0.0125684100 0.01628364652  5957.4080   epsilon    0.0806304543  0.025824042 0.0002582404 0.00087843406   864.2315 apond[55]    1.6194868499  0.449848512 0.0044984851 0.00337126412 10000.0000 apond[56]    0.4636724052  0.333661394 0.0033366139 0.00317090692 10000.0000 apond[9]   -1.5582336653  1.054033998 0.0105403400 0.01325783842  6320.6799  evalnum  140.7574000000 49.461823586 0.4946182359 1.04675890947  2232.7851 apond[38]    2.4213667923  0.669981340 0.0066998134 0.00670341721  9989.2507 apond[41]    2.9441756245  0.805063431 0.0080506343 0.00777409335 10000.0000    lfnum    0.0002000000  0.020000000 0.0002000000 0.00020000000 10000.0000 apond[42]    1.0189318364  0.450896154 0.0045089615 0.00353871779 10000.0000 apond[6]    0.7172274132  0.875913940 0.0087591394 0.00921226138  9040.4568 apond[37]    1.2311086658  0.467581916 0.0046758192 0.00370489273 10000.0000 apond[17]    2.1840208942  0.885232595 0.0088523259 0.01005752459  7746.9827 apond[34]    3.7647116451  1.070577317 0.0107057732 0.01454992135  5413.9568 apond[25]    0.1983088389  0.595635693 0.0059563569 0.00423421680 10000.0000 apond[49]    3.2308198064  0.783408432 0.0078340843 0.00741996001 10000.0000 apond[29]    0.5869977398  0.641031578 0.0064103158 0.00596687017 10000.0000   elapsed    0.2124224895  0.091334338 0.0009133434 0.00277238819  1085.3257 apond[3]    2.7351595176  1.252877992 0.0125287799 0.01650408216  5762.8167 apond[43]    1.4589068954  0.502713246 0.0050271325 0.00419773751 10000.0000 apond[4]   -0.6955128978  0.886643420 0.0088664342 0.00892026440  9879.6722 apond[28]    3.1799658392  1.190210605 0.0119021061 0.01598221933  5545.9182 apond[15]    1.5668531946  1.015083021 0.0101508302 0.01066654407  9056.4014 apond[24]    1.0178669471  0.671538554 0.0067153855 0.00534254055 10000.0000 apond[32]    0.4829825423  0.408095990 0.0040809599 0.00290615908 10000.0000 apond[30]    2.1782787743  0.892245915 0.0089224591 0.00878540719 10000.0000 apond[60]    2.7321739924  0.664559051 0.0066455905 0.00632100816 10000.0000 Rethinking             mean   sd  5.5% 94.5% neff Rhat a           1.30 0.23  0.94  1.67  8064    1 sigma       1.55 0.21  1.24  1.92  3839    1 apond[1]   2.57 1.17  0.85  4.57  9688    1 apond[2]   2.58 1.19  0.83  4.56  9902    1 apond[3]   2.56 1.16  0.84  4.57 12841    1 apond[4]   1.49 0.92  0.12  3.03 15532    1 apond[5]   1.51 0.95  0.07  3.09 14539    1 apond[6]   0.72 0.84 -0.59  2.08 13607    1 apond[7]   2.56 1.16  0.86  4.51 12204    1 apond[8]   1.50 0.93  0.07  3.05 19903    1 apond[9]   2.56 1.15  0.86  4.51 11054    1 apond[10]  1.49 0.95  0.05  3.09 14134    1 apond[11] -0.64 0.86 -2.06  0.70 15408    1 apond[12]  2.56 1.16  0.86  4.53 11512    1 apond[13]  1.49 0.95  0.05  3.10 16270    1 apond[14]  0.71 0.84 -0.59  2.07 17077    1 apond[15]  1.50 0.93  0.10  3.05 16996    1 apond[16]  2.98 1.07  1.45  4.84  9033    1 apond[17]  2.09 0.84  0.85  3.54 14636    1 apond[18]  1.01 0.66  0.00  2.10 12971    1 apond[19]  1.01 0.68 -0.03  2.13 12598    1 apond[20]  1.48 0.72  0.38  2.67 15500    1 apond[21]  2.96 1.09  1.42  4.87 11204    1 apond[22] -2.04 0.87 -3.53 -0.75  9065    1 apond[23]  0.99 0.67 -0.04  2.11 15365    1 apond[24]  1.48 0.72  0.41  2.67 14879    1 apond[25]  2.10 0.85  0.85  3.53 13298    1 apond[26]  1.00 0.65  0.01  2.06 18583    1 apond[27]  3.00 1.08  1.44  4.86  9312    1 apond[28]  0.98 0.66 -0.03  2.09 14703    1 apond[29]  0.21 0.61 -0.76  1.19 15554    1 apond[30]  2.95 1.05  1.45  4.73  9816    1 apond[31]  1.70 0.53  0.89  2.59 19148    1 apond[32]  0.82 0.42  0.17  1.51 13556    1 apond[33]  0.32 0.40 -0.33  0.96 19388    1 apond[34] -0.15 0.40 -0.79  0.48 18684    1 apond[35]  3.57 0.98  2.19  5.26  8769    1 apond[36]  0.16 0.40 -0.46  0.80 17595    1 apond[37]  2.00 0.58  1.13  2.99 14669    1 apond[38] -1.41 0.49 -2.22 -0.65 12957    1 apond[39]  1.21 0.46  0.49  1.97 14185    1 apond[40] -1.18 0.46 -1.95 -0.48 16142    1 apond[41]  2.86 0.78  1.73  4.18 10508    1 apond[42]  0.00 0.39 -0.61  0.63 16138    1 apond[43]  1.43 0.48  0.70  2.24 17100    1 apond[44]  2.86 0.77  1.75  4.15 12002    1 apond[45] -1.40 0.49 -2.21 -0.66 14292    1 apond[46]  0.12 0.33 -0.40  0.66 20425    1 apond[47] -0.56 0.36 -1.14  0.00 18981    1 apond[48]  1.11 0.38  0.52  1.73 14176    1 apond[49]  3.81 0.95  2.47  5.45  8841    1 apond[50]  2.05 0.50  1.31  2.88 15898    1 apond[51] -1.40 0.41 -2.08 -0.76 17188    1 apond[52] -0.11 0.34 -0.65  0.43 17158    1 apond[53]  1.61 0.44  0.94  2.36 15132    1 apond[54]  2.05 0.50  1.30  2.89 15799    1 apond[55]  3.14 0.75  2.08  4.40 12702    1 apond[56]  3.13 0.74  2.07  4.41 11143    1 apond[57]  1.26 0.40  0.65  1.92 14587    1 apond[58]  1.11 0.38  0.51  1.74 21740    1 apond[59]  2.33 0.56  1.50  3.25 13116    1 apond[60]  1.27 0.40  0.66  1.91 15611    1           Mean          SD        Naive SE        MCSE         ESS\n     α   -1.43756402  0.167281208 0.0016728121 0.00210877863  6292.63192\n     σ    0.94572510  0.159509660 0.0015950966 0.00292977115  2964.19373apond[13]   -0.96409032  0.695682000 0.0069568200 0.00712009032  9546.63960 apond[39]   -2.16432055  0.560230451 0.0056023045 0.00401929327 10000.00000 apond[12]   -0.98211221  0.700132015 0.0070013202 0.00719599345  9466.25839 apond[33]   -1.89716948  0.507094638 0.0050709464 0.00393759633 10000.00000 apond[40]   -2.15927404  0.553498230 0.0055349823 0.00525989968 10000.00000 apond[52]   -1.95778572  0.468392293 0.0046839229 0.00295136724 10000.00000 apond[48]   -2.17567314  0.487971067 0.0048797107 0.00325138185 10000.00000 apond[31]   -1.65553570  0.479752516 0.0047975252 0.00309756598 10000.00000 apond[21]   -1.46693217  0.634848584 0.0063484858 0.00548329380 10000.00000 apond[14]   -0.51655733  0.697560885 0.0069756089 0.00693184327 10000.00000 apond[26]   -1.11415242  0.579221588 0.0057922159 0.00497058099 10000.00000 apond[35]   -2.16959658  0.546408662 0.0054640866 0.00487151680 10000.00000 apond[53]   -2.17290466  0.499898730 0.0049989873 0.00381882101 10000.00000 apond[45]   -1.65831075  0.475684574 0.0047568457 0.00282288126 10000.00000 apond[27]   -1.47390856  0.625904201 0.0062590420 0.00597555549 10000.00000 apond[10]   -0.06470584  0.709512539 0.0070951254 0.00810899930  7655.71265 apond[19]   -1.47611448  0.619367365 0.0061936736 0.00573498517 10000.00000 apond[58]   -1.96067155  0.471148496 0.0047114850 0.00310756256 10000.00000  apond[5]   -0.51301911  0.693083568 0.0069308357 0.00766059211  8185.52478 apond[36]   -2.16398901  0.552362190 0.0055236219 0.00423015168 10000.00000 apond[22]   -0.79183001  0.562682452 0.0056268245 0.00395177756 10000.00000  apond[2]   -0.07065260  0.723388535 0.0072338853 0.00837009596  7469.34241 apond[59]   -3.04846657  0.659338141 0.0065933814 0.00767658576  7377.00686 apond[46]   -2.41950226  0.530010130 0.0053001013 0.00447275751 10000.00000 apond[47]   -2.41940262  0.529600266 0.0052960027 0.00495650076 10000.00000 apond[57]   -2.42196906  0.545199651 0.0054519965 0.00421172829 10000.00000 apond[23]   -1.47836307  0.626164879 0.0062616488 0.00546703424 10000.00000 apond[51]   -1.95865755  0.453931725 0.0045393173 0.00323782050 10000.00000 apond[20]   -1.87882953  0.685389064 0.0068538906 0.00691600262  9821.18842  apond[8]   -0.51278872  0.698168747 0.0069816875 0.00674015806 10000.00000 apond[18]   -0.79464713  0.570683666 0.0057068367 0.00517526089 10000.00000 apond[54]   -2.17663143  0.486692179 0.0048669218 0.00357970522 10000.00000 apond[11]   -0.52002272  0.700422488 0.0070042249 0.00758407273  8529.33523 apond[16]   -2.35154693  0.748462872 0.0074846287 0.01009234165  5499.92332 apond[44]   -2.16190756  0.555077841 0.0055507784 0.00464353670 10000.00000  apond[7]   -0.07294353  0.722895184 0.0072289518 0.00933609743  5995.42414 apond[50]   -1.76719334  0.433238573 0.0043323857 0.00301606024 10000.00000  apond[1]   -0.07479566  0.715498813 0.0071549881 0.00821909124  7578.27275 apond[55]   -1.95861084  0.462566383 0.0046256638 0.00326122131 10000.00000 apond[56]   -1.95767294  0.451852167 0.0045185217 0.00336244216 10000.00000  apond[9]   -0.97174862  0.706466469 0.0070646647 0.00685957974 10000.00000 apond[38]   -1.65719327  0.477253975 0.0047725397 0.00357994187 10000.00000 apond[41]   -2.47295206  0.610429423 0.0061042942 0.00555558551 10000.00000 apond[42]   -1.65879054  0.487850118 0.0048785012 0.00420032610 10000.00000  apond[6]   -0.51322197  0.699819483 0.0069981948 0.00837828549  6976.88795 apond[37]   -1.89163219  0.514164120 0.0051416412 0.00396572368 10000.00000 apond[17]   -0.48373615  0.562778997 0.0056277900 0.00445855972 10000.00000 apond[34]   -1.89391017  0.517579732 0.0051757973 0.00449881473 10000.00000 apond[25]   -0.48483903  0.564804766 0.0056480477 0.00432604358 10000.00000 apond[49]   -1.95877851  0.456040949 0.0045604095 0.00251026103 10000.00000 apond[29]   -1.47041681  0.615401982 0.0061540198 0.00516784541 10000.00000  apond[3]   -0.52147126  0.688164420 0.0068816442 0.00702386169  9599.14444 apond[43]   -1.65667827  0.476433792 0.0047643379 0.00374622975 10000.00000  apond[4]   -0.97038449  0.704920197 0.0070492020 0.00798856637  7786.49863 apond[28]   -1.11670032  0.594046332 0.0059404633 0.00481138686 10000.00000 apond[15]   -0.97643818  0.702064283 0.0070206428 0.00627008271 10000.00000 apond[24]   -0.78700355  0.580971213 0.0058097121 0.00463692344 10000.00000 apond[32]   -1.66143918  0.481944799 0.0048194480 0.00375554807 10000.00000 apond[30]   -0.79075103  0.573147275 0.0057314727 0.00550557273 10000.00000 apond[60]   -2.17672820  0.503739378 0.0050373938 0.00376315154 10000.00000This page was generated using Literate.jl."
},

]}
