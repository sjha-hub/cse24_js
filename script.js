console.log("hello world");
document.write("hello world"); 

var num =10;
console.log(num);
console.log(typeof(num));
num =false;
console.log(num);
console.log(typeof(num));
num ="samikshsa"; //double or single quotes
console.log(num);
console.log(typeof(num));
num=true;

// symbol 
const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym1);
if(sym1==sym2){
    console.log("true")
}
else{
    console.log("false")

}

// FOR 
var i;
for (i=0;i < 3; i=i+1){
    console.log(i);
}


// count 
var count;
for (count=0;count < 10; count++){
    document.write("starting loop");
    
}

