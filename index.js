"use strict";

var $ =(id)=> document.getElementById(id);


function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
 }  

 
async function slidingImages(){
    const cars = ["zoom2.jpeg", "zoom3.jpeg", "zoom.png"];
    var img= $("images")
    for(let i=0; i<cars.length; i++){   
        await sleep(1000);
        img.src = cars[i];
        
    }
    slidingImages();
}

function highlight(element ){
    
    
    if (element.id!="first" || element.id!="second"){
        console.log(element);
        element.classList.toggle("highlight");
    }

    var x = document.querySelectorAll(".tablecolumnborder");  
    var count=0;
    for (var i = 0; i < x.length; i++) {
        if(x[i].className.indexOf("highlight")!=-1){
            count=count+1;
            
        }
    }
    console.log(count);
    var y= $("absents");

    if(count==0){
        y.style.color= "green";
        y.innerHTML= "The number of students absent = "+count;
    }
    else{
        y.style.color= "red";
        y.innerHTML= "The number of students absent = "+count;
    }

}

document.addEventListener("DOMContentLoaded", ()=>{ 

    $("first").addEventListener("click",event=>{
        highlight(event.target);
        
    });
    $("second").addEventListener("click",event=>{
        highlight(event.target);
        
    });


});

window.onload=function(){   
    slidingImages();
}

    
    