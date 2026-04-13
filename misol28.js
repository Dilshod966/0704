let BB1, x, a;


a = 5;
x = 2.01;

BB1 = x*Math.sin(x/2 + x/3 + x/4) + (Math.log10(x * x - 2) + Math.pow(3,a)) / (Math.cos(x + 3) * Math.sin(x + 3) + 8);
console.log(BB1.toFixed(2))