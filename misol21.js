let T, a, b
a=0.36
b=1.02
T=Math.pow(a,1/5)+Math.pow(b*(a+b)/(2*b+a*b),1/4)*(a*a+b*b+2)


console.log(T.toFixed(2))