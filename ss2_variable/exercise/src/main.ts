function fibonacci(n: number): number[] {
    let fib: number[] = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function sumFibonacci(n: number): number {
    let fib: number[] = fibonacci(n);
    let sum:number = 0;

    for (let i = 0; i <=n ; i++) {
        sum += fib[i];
    }

    return sum;
}
let n:number = 10;
console.log(`Fibonacci sequence up to ${n}: ${fibonacci(n)}`);
console.log(`Sum of Fibonacci sequence up to ${n}: ${sumFibonacci(n)}`);
