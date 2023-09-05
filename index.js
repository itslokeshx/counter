var count = 0;
var  increase = document.querySelector(".incre");
var decrease =  document.querySelector(".dec");
var reset =  document.querySelector(".reset");

increase.addEventListener("click",function(){
   count += 1;
   document.querySelector("p").innerHTML = count;
   if(count >0 ){
    document.querySelector("p").style.color = "rgb(6, 211, 23)";
}
else if(count < 0){
    document.querySelector("p").style.color = "rgb(216, 23, 23)";  
}
else if(count === 0){
    document.querySelector("p").style.color = "hsl(205, 79%, 22%)";
}      
})

reset.addEventListener("click",function(){
    count = 0;
 document.querySelector("p").innerHTML = count;
 if(count >0 ){
    document.querySelector("p").style.color = "rgb(6, 211, 23)";
}
else if(count < 0){
    document.querySelector("p").style.color = "rgb(216, 23, 23)";  
}
else if(count === 0){
    document.querySelector("p").style.color = "hsl(205, 79%, 22%)";
}      
})
decrease.addEventListener("click",function(){
    count -= 1;
  document.querySelector("p").innerHTML = count;        
   if(count >0 ){
    document.querySelector("p").style.color = "rgb(6, 211, 23)";
}
else if(count < 0){
    document.querySelector("p").style.color = "rgb(216, 23, 23)";  
}
else if(count === 0){
    document.querySelector("p").style.color = "hsl(205, 79%, 22%)";
} 
})
