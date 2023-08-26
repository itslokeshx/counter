var  increase = document.querySelector(".incre");
var decrease =  document.querySelector(".dec");
var reset =  document.querySelector(".reset");

increase.addEventListener("click",function(){
    document.querySelector("p").style.color = "rgb(6, 211, 23)";
    var one = 1;
   var count=  document.querySelector("p").innerHTML -= (one)*(-1);
   count1 =eval(count);
   return document.querySelector("p").innerHTML = count1;
})


reset.addEventListener("click",function(){
    document.querySelector("p").style.color = "hsl(205, 79%, 22%)";
   return document.querySelector("p").innerHTML = 0;

})

decrease.addEventListener("click",function(){
    document.querySelector("p").style.color = "rgb(216, 23, 23)";  
    var one = 1;
   var count=  document.querySelector("p").innerHTML -= one;
   count1 =eval(count);
   return document.querySelector("p").innerHTML = count1;                      
})
