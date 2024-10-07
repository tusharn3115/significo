function homeAnimation() {
    gsap.set(".slides", {
        scale: 5,
    })
    
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            scrub: 3,
            start: 'top top',
            end: 'bottom bottom',
        },
    })
    
    tl.to(".video", {
        css: {
            '--clip': '0%',
        },
        ease: 'power1.inOut',
    },'a')
    
    tl.to(".slides", {
        scale: 1,
        ease: 'power1.inOut',
    },'a')
    
    tl.to(".rgt", {
        xPercent: 10,
        stagger: .03,
        ease: 'power1.inOut',
    },'b')
    tl.to(".lft", {
        xPercent: -10,
        stagger: .03,
        ease: 'power1.inOut',
    },'b')
}
homeAnimation()


function real() {
    gsap.to('.slidez', {
        scrollTrigger: {
            trigger: '.real',
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        },
        xPercent: -200,
        ease: 'power1.inOut',
    })
}
real()


function ourTeamAnim() {
    document.querySelectorAll(".listelem")
.forEach((el) => {
    el.addEventListener("mousemove", (dets) => {
        gsap.to(el.querySelector(".picture"), {
            opacity: 1,
            x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
            ease: "power4",
            duration: 0.5,
        })
    })

    el.addEventListener("mouseleave", (dets) => {
        gsap.to(el.querySelector(".picture"), {
            opacity: 0,
            ease: "power4",
            duration: 0.5,
        })
    })
})
}
ourTeamAnim()


function paraAnimation() {
    var clutter = '';
document.querySelector(".textpara").textContent.split("").forEach((e) => {
    if(e == " ") {
        clutter += `<span>&nbsp;</span>`;
    } else {
        clutter += `<span>${e}</span>`;
    }
});

document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span", {
    opacity: 0.1,
})

gsap.to(".textpara span", {
    opacity: 1,
    stagger: .03,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".para",
        start: "top 70%",
        end: "bottom 90%",
        scrub: 2,
    },
})
}
paraAnimation()


(function () {
    var scroll = new LocomotiveScroll();
})();