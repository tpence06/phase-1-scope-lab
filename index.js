// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'could be bob';
function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = changeLeastFavoriteCustomer;
}