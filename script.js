


let index = 0;
function createArjita(){
    const icon = document.createElement(`img`); 
    icon.classList.add('fatso');
    icon.src = "./assets/tumpa.png"
    icon.style.left = `${Math.random()*100}` + `vw`

    document.body.appendChild(icon);

    setTimeout(()=>{
        icon.remove();
    }, 6000)

};

setInterval(() => {
  
createArjita();
}, 500);

