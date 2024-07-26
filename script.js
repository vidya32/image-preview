const current=document.querySelector("#current");
const imgs=document.querySelector(".imgs");
const img=document.querySelectorAll(".imgs img")//imgs contains all img tag
const opacity=0.6;
//img[0].style.opacity=opacity;  
imgs.addEventListener("click",(event) =>{
    imgs.forEach((imgele)=>{
        imgele.style.opacity=1;
    })
    const clickedimgurl=event.target.src;
    current.src=clickedimgurl; 
    current.classList.add("fadeIn");
    setTimeout(() =>{
        current.classList.remove("fadeIn");
    },600)
    event.target.style.opacity=opacity; 

}); 
