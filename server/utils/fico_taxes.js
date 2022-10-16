var  social = {
    "social": 6.2,
}

var medicare = {
    "medicare": 1.45,
}

const fico = function(gross, per) { // Returns State Income Tax amount (Gross Income, taxPer)
    return ((gross/100)*social && medicare[per])
}

module.exports = { fico }