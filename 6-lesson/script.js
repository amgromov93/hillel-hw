factorial(3);
factorial(4);

function factorial(n) {
    return n <= 1 ? n : n * factorial(n-1);
}