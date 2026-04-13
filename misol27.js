let a, b, AA, x;


x = 8.38;


AA = (1 <= x <= 30)

AA = Math.sqrt((2 * Math.tan(x + 2) - Math.cos(x + Math.pow(2, x))) / (1 + Math.pow(Math.cos(x + 2), 2))) + (Math.sin(x*x)) / (x*x + 3);
console.log(AA.toFixed(2));