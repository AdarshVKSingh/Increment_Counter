
const container = document.querySelectorAll(".num");
container.forEach((ad)=>{
    ad.innerHTML= 0;
})


const counter = ()=>{
    container.forEach((element)=>{
        
        const final = +element.getAttribute("data-target");
        const inc = Number(final)/900;
        
        const cur = Number(element.innerHTML);
        if(cur + inc <final){
            element.innerHTML = Math.round(cur + inc);
            setInterval(counter,500);
        }else{
            element.innerHTML = Number(final);
        }
    })
}
counter();