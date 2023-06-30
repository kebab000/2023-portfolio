document.querySelectorAll(".split").forEach(text => {
    let theText = text.innerText;
    let newText = "";

    for(let i=0; i<text.innerText.length; i++){
        newText += "<span aria-hidden='true'>";
        if (text.innerText[i] == " "){
            newText += "&nbsp;"
        } else {
            newText += text.innerText[i];
        }
        newText += "</span>";
    }

    text.innerHTML = newText;
    text.setAttribute("aria-label", theText);
});

gsap.set("#section1 .text .title > div span", {opacity: 0, yPercent: 100,});
gsap.set("#section1 .text .desc > div span", {opacity: 0, yPercent: 150,  rotationz: 50,});
gsap.set("#section1 .bg", {opacity: 0});

setTimeout(() => {
    gsap.to("#section1 .text .title > div span", {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "circ.out",
        stagger: 0.05,
    });

    gsap.to("#section1 .text .desc > div span", {
        rotationz: 0,
        yPercent: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power2.out",
        stagger: 0.009,
        delay: 1,
    });

    gsap.to(".bg", {
        opacity: 0.5,
        duration: 2,
        delay: 3,
    })
}, 2000);