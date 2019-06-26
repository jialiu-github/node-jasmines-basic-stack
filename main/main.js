// Write your cade below:
function caclRemaindar(a, b) { return a % b};

function caclSum(collection) { return collection.reduce((acc, current) => acc + current)};

function caclSumInConditon(collection, indicated) { return collection.filter(a => a < indicated).reduce((acc, current) => acc + current)};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}