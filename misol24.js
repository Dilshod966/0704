let W1, a, b, c, x;
a = 1;
b = 1;
c = 1; 
x = 0.33;
W1 = 0.75 + (8.2*x*x+Math.sqrt(Math.abs(x*x*x+3*x) + Math.cos(x-2)) ) /(a/4 + b/3 + c/2 +1)
console.log(W1.toFixed(2))