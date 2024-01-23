document.querySelectorAll(".lol").forEach(element=>
    {
        element.addEventListener("mousedown",function()
        {  
            element.style.color = "blue";
        })
        element.addEventListener("mouseup",function () 
        {
            element.style.color = "lightcyan"; 
            console.log(element.innerHTML);       
        })
    }  
)

