//2A
var isArmstrong = function(num) {
"use strict";
var result=0, digit;
num = String(num);
//traverse string and process digits
for(var i = 0; i < num.length; ++i) {
//process the current digit
 digit = Number(num[i]);
 result = result + Math.pow(digit, num.length);
}
if (result == num) 
 return true;
else 
 return false; 
};

//2B
 function allArmstrongs(){
  var result = '',digit;
  
  for (var number=1; number<100000;number++)
  {
  var answer = isArmstrong(number);
  if (answer==true){
  result= result + ' ' + number + ',';     
   }
  }
  return result;
 }

 //2C
var allSubstrings1 = function(s){
var result = "";
for (var i=0;i<s.length;++i){
     for (var j= i+1; j<= s.length; ++j){
         var x= s.substring(i,j);
         result += x + ",";   
      }
  }
return result;    
}

//2D

var allSubstrings2 = function(s){
var array = [];
for (var i=0;i<s.length;++i){
     for (var j= i+1; j<= s.length; ++j){
         var x= s.substring(i,j);
         array.push(x);    
     }
 }
return array;    
}

//2E 

 function maxWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length ; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
