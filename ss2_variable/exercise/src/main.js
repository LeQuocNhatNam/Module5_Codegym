function fibonacci(n) {
    var fib = [0, 1];
    for (var i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
function sumFibonacci(n) {
    var fib = fibonacci(n);
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += fib[i];
    }
    return sum;
}
var n = 10;
console.log("Fibonacci sequence up to ".concat(n, ": ").concat(fibonacci(n)));
console.log("Sum of Fibonacci sequence up to ".concat(n, ": ").concat(sumFibonacci(n)));
