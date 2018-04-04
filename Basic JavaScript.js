//1-Print 1 - 135

var number =1 
for(var i = 1; i <= 135; i++)
{
    console.log(i);
}


//2-Print Odd Numbers 1 - 135

for(var i = 0; i <= 135; i++)
{
    if((i%2)!=0) // just one '('
    {
        console.log(i);
    }
    
}


//3-Sum of Printed Numbers

var total = 0;
for(var i = 0; i <= 135; i++)
{
    total += i;
  
    console.log("Number is:" + i + ' sum: ' + total)
    
}


//4-Print the elements of an array

var x = [1, 4, 2, 12]
    console.log(x);




//5-Find Max ####

var x = [10, -1, -5, 9, -4] 
var max = -Infinity
      
for (i = 0; i < x.length; i++)
{
      
if(max < x[i])
{
    max = x[i];
}

}

console.log(max);



//6-Get Average

var x = [1, 2, 3];

var total = 0;
var aver;
    
for (i = 0; i < x.length; i++)
{
       
total += x[i]; 
aver = (total/x.length); 
  
}
console.log(aver);



//7-Eliminate the Negatives

var x = [-10, -1, 88, -9, -4]

for (i = 0; i < x.length; i++)
{
    
  if(x[i] < 0 )
  {
    
    x[i] = 0;
    
  }
  
}
  console.log(x);


//8-Number to String

  var x = [-10, -1, 88, -9, -4]

for (i = 0; i < x.length; i++){

  if(x[i] <= 0 ){
    
    x[i] = "ugh";
    
  }
  
}
  console.log(x);






    

 











