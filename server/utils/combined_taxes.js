const fedtax = require('./fedtax');
const statetax = require('./statetax');
const fico = require('./fico_taxes');

const combined_taxes = function(m, a, g) { // Returns Combined Income Tax amount (Married, Allowances, Gross Income)
    return (fedtax.fedtax(m, a, g) + statetax.statetax(g) + fico.fico(g, 'social') + fico.fico(g, 'medicare'));
}

module.exports = { combined_taxes }


