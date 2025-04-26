//Daniel Mason 04/26/2025//
//I adapted this project from Adapted from https://javascript30.com/ 5 flex panels gallery as well as https://javascript30.com/ 16 CSS Text Shadow Mouse Move Effect and https://javascript30.com/ 24 Sticky Nav to complete a working gallery website for my tattoo artist. I combined project 2, project 3 and project 5 and the lessons to improve this site.

const header = document.querySelector('.header');
const text = header.querySelector('h1');
const walk = 25; 

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = header;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = ((x / width * walk) - (walk / 2));
  const yWalk = ((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk * -1}px ${yWalk *-1}px 0 rgba(131, 121, 121, 0.7)
  `;

}

header.addEventListener('mousemove', shadow);


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

const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav(){

if(window.scrollY >= topOfNav){
  document.body.style.paddingTop = nav.offsetHeight + 'px';
  document.body.classList.add('fixed-nav');
}
else{
  document.body.style.paddingTop = 0;
  document.body.classList.remove('fixed-nav');
}

}
 

window.addEventListener('scroll', fixNav);