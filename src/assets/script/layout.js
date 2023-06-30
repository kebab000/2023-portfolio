
let scrollTop = 0
const layout1 = document.querySelector(".left .left__desc");
const layout2 = document.querySelector(".right #ticket");
const siteCount = document.querySelector(".site__count") 
const phpCount = document.querySelector(".php__count"); 
let count1 = 0;
let count2 = 0;
let lastScrollTop = 0;
let isScrollingUp = false;
gsap.set(layout1, {autoAlpha: 1, y:-5100})
gsap.set(layout2, {autoAlpha: 1, y:535})
let scrollLayout = 0
window.addEventListener("scroll", ()=>{
    scrollTop = window.pageYOffset || window.scrollY ||document.documentElement.scrollTop;
    scrollLayout = scrollTop * 0.5                        
    isScrollingUp = scrollTop < lastScrollTop;
    lastScrollTop = scrollTop;
    siteCount.innerHTML = count1;
    phpCount.innerHTML = count2; 
    //info
    document.querySelector(".scroll span").innerHTML = parseInt(scrollTop);
 
    gsap.to(layout1, { duration: 0.3, y: -5100 + scrollLayout });

    if (scrollTop == 6606 && isScrollingUp) {
        layout2.style.transform = 'translate(0px, 506px)';
        count1++;
    }
    if (scrollTop == 9505 && isScrollingUp) {
        layout2.style.transform = "translate(0px, 490px)";
        count1++
    
    }
    if (scrollTop == 13200 && isScrollingUp) {
        layout2.style.transform = "translate(0px, 475px)";
        count1++
    
    }
    if (scrollTop == 17145 && isScrollingUp) {
        layout2.style.transform = "translate(0px, 460px)";
        count1++
    
    }
    if (scrollTop == 20300 && isScrollingUp) {
        layout2.style.transform = "translate(0px, 410px)";    
        count2++
    }
    if (scrollTop == 24420 && isScrollingUp) {
        layout2.style.transform = "translate(0px, 395px)";    
        count2++
    }
    });

