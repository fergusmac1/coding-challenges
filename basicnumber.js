// In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

// Numbers can use operators such as + - * / %

// Task
// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

let v1 = 50,
2
    v2 = 100,
3
    v3 = 150,
4
    v4 = 200,
5
    v5 = 2,
6
    v6 = 250;
7
​
8
function equal1(){
9
  let a = v1,   
10
      b = v1;   
11
  return a + b;
12
}
13
​
14
//Please refer to the example above to complete the following functions
15
function equal2(){
16
  let a = v3, //set number value to a
17
      b = v1; //set number value to b
18
  return a - b;
19
}
20
​
21
function equal3(){
22
  let a = v5 , //set number value to a
23
      b =  v1; //set number value to b
24
  return a * b;
25
}
26
​
27
function equal4(){
28
  let a = v4 , //set number value to a
29
      b =  v5; //set number value to b
30
  return a / b;
31
}
32
​
33
function equal5(){
34
  let a = v2 , //set number value to a
35
      b =  v4 ; //set number value to b
36
  return a % b;
37
}