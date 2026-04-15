let W2, a, x, y;

a = 0;
x = 3.66; y = 0.75;
W2=Math.sqrt(Math.pow(Math.E,x*y)-x*Math.sin(a*x)-(x*x+2)/(Math.abs(x)+5))+Math.sqrt(Math.log(x*x+2)+5);
  

console.log(W2.toFixed(2));