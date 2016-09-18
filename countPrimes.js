//Count the number of prime numbers less than a non-negative number, n.
function countPrimes(n) {
    function isPrime(number) {

    if (typeof number !== 'number' || !Number.isInteger(number)) {
        return false;
    }
    if (number < 2) {
        return false
    }
    if (number === 2) {
        return true
    } else if (number % 2 === 0) {
        return false;
    };
    var squareRoot = Math.sqrt(number);
    for (var i = 3; i <= squareRoot; i += 2) {
        if (number % i === 0) {
            return false;
        };
    }
    return true;
}
    var count = 0;
    for (var j = 2; j < n; j++) {
        if (isPrime(j)) {
            count++;
        }
    }
    return count;
}
