//1.Addition

var total = 0;

for(var i = 200; i <= 2700; i++){
  
  if((i%3 ===0 || i%5 ===0) & (i%15 !==0)){
    
    (total += i);
  }
}
    console.log(total);
    
  
//2. Shift the Values
    
var x= [1, 2, 3, 4, 5];
var reverse = x.slice().reverse()
    
console.log(reverse)    


//3. FizzBuzz

var arr =[];
for(var i = 1; i <= 135; i++)
{  
if(i %  15 ===0)
{
arr.push('FizzBuzz');
} 
else if(i % 3 ===0)
{ 
arr.push('Fizz');
}  
else if(i % 5 ===0)
{
arr.push('Buzz');
}
else(arr.push(i));
}
console.log(arr);


//4. Fibonacci

function Fibo(N){
    var a=0
    var x = []
    for(i=0; i<=N; i++){
        if((i==0)||(i==1)){
            x.push(i);
        } 
        else 
        {
        a= x[i-2] + x[i-1];
        x.push(a);     
        } 
     }
    return x;  
}
console.log(Fibo(12))





//5. Remove the Negative

var number = [1, 2, -3, 4, 5, 6, -7, 8, 9, -10];
var filtered = number.filter(function evenNumbers (number) {  
return number >-1;  
});
console.log(filtered);

//6. Communist Censorship

var x = ["Man", "I", "Love", "The", "Turing","Bootcamp"];
var c = 5;
var elem = x[c];
x[c] = " ";         
for(i = 0; i < elem.length; i++){
x[c] = x[c] + "*";
}
console.log(x);
 
          
             
        
         
    
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   