document.querySelectorAll(".lol").forEach(element=>{
    element.addEventListener("click",function()
    {
        console.log(element.tagName);
    })
})

