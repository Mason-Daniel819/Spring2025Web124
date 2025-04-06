/*Daniel Mason 04/04/2025*/
/*<meta name="author" content="Daniel Mason">
/*Daniel Mason 04/04/2025*/
/*I adapted this project from Adapted from https://javascript30.com/ 5 flex panels gallery*/


const panels = document.querySelectorAll('.panel');
function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e){
  if(e.propertyName.includes('flex')){
  this.classList.toggle('open-active')
}
}
panels.forEach(panel=> panel.addEventListener('click', toggleOpen));
panels.forEach(panel=> panel.addEventListener('transitionend', toggleActive));
