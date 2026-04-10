let x1, x2, c, d, F;
x1 = 4.01;
x2 =  0.33;
c = 0
d = 1
F = Math.abs(Math.sin(Math.abs(c*x2*x2*x2 + d*x1*x1*x1 - c*d))*Math.sin(Math.abs(c*x2*x2*x2 + d*x1*x1*x1 - c*d)) / Math.sqrt((c*x1*x1 + d*x2*x2 +5) + 2)) + Math.tan(x1 * x2* x2 + d*d*d)
console.log(F.toFixed(2))
