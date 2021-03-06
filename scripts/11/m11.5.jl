using StatisticalRethinking
using Turing

Turing.setadbackend(:reverse_diff)

d = CSV.read(joinpath(dirname(Base.pathof(StatisticalRethinking)), "..", "data",
    "UCBadmit.csv"), delim=';')
size(d) # Should be 12x5

@model m11_5(admit, applications) = begin
    N=length(applications)
    θ ~ Truncated(Exponential(1), 0, Inf)
    α ~ Normal(0,2)

    for i ∈ 1:N
        prob = logistic(α)

        # alpha and beta for the BetaBinomial must be provided.
        # The two parameterizations are related by
        # alpha = prob * theta, and beta = (1-prob) * theta.
        # See https://github.com/rmcelreath/rethinking/blob/master/man/dbetabinom.Rd
        alpha = prob * θ
        beta = (1 - prob) * θ

        admit[i] ~ BetaBinomial(applications[i], alpha, beta)
    end
end

posterior = sample(m11_5(d[:admit],d[:applications]), Turing.NUTS(4000, 1000, 0.9))
describe(posterior)
#             Mean          SD         Naive SE         MCSE        ESS
#        α  -0.372382104 0.3119992723 0.004933141643 0.00613870681 2583.1723
#        θ   2.767996106 0.9897869845 0.015649906347 0.02305742759 1842.7303

# Rethinking
#        mean   sd  5.5% 94.5% n_eff Rhat
# theta  2.74 0.96  1.43  4.37  3583    1
# a     -0.37 0.31 -0.87  0.12  3210    1
