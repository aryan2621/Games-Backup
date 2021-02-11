const  rippleBtn=document.querySelector('.ripple-button');
rippleBtn.addEventListener('click',(e)=>{
    let ripples=document.createElement('span');
    const horizontalPos=e.clientX-e.target.offsetLeft;
    const verticalPos=e.clientY-e.target.offsetTop;
    ripples.style.left=horizontalPos+'px';
    ripples.style.top=verticalPos+'px';
    rippleBtn.appendChild(ripples);
    setTimeout(()=>{
        ripples.remove();
    },1500)
})