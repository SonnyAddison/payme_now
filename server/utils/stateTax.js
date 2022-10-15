// Per the "Percentage Method"
var  stateTax = {
    0.0: 0,
    0.8: 0.8,
    1.3: 1.3,
    1.8: 1.8,
    2.7: 2.7,
    3.6: 3.6,
    4.2: 4.2,
    5: 5
}

const taxRate = function(gross, per) { // Returns State Income Tax amount (Gross Income, taxPer)
    return ((gross/100)*stateTax[per])
}

module.exports = { taxRate }