let y2, a, b, c, d, x;

a = 3;
b = 1;
c = 3;
d = 2;
x = 0.88;


y2 = (a*x*x+b*x+c) / (x*a*a*a+a*a+Math.pow(a, b-c)) + Math.cos(Math.abs((a*x+b)/(c*x+d+Math.pow(2,c))))


console.log(y2.toFixed(2))