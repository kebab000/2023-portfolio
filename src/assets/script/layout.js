let scrollTop = 0
const layout1 = document.querySelector(".left .left__desc");
const layout2 = document.querySelector(".right #ticket");
gsap.set(layout1, {autoAlpha: 1, y:-5100})
gsap.set(layout2, {autoAlpha: 1, y:535})
let scrollLayout = 0
window.addEventListener("scroll", ()=>{
    scrollTop = window.pageYOffset || window.scrollY ||document.documentElement.scrollTop;
    scrollLayout = scrollTop * 0.5                        
    //info
    document.querySelector(".scroll span").innerHTML = parseInt(scrollTop);
 
    gsap.to(layout1, { duration: 0.3, y: -5100 + scrollLayout });
    });

