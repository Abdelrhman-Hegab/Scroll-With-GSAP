let mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            start: "0% 95%",
            end: "80% 60%",
            scrub: true,
        }
    });

    tl.to("#cans", {
        top: "145%",
        left: "77%",
        width: "30%",
        rotate: "-30deg",
    }, 'cans')

    tl.to("#leaf", {
        top: "153%",
        left: "75%",
        width: "12%",
        rotate: "0deg",
    }, 'cans')

    tl.to("#blackberry1", {
        top: "114%",
        left: "5%",
        width: "5%",
        rotate: "100deg",
    }, 'cans')

    tl.to("#blackberry2", {
        top: "125%",
        left: "83%",
        width: "12%",
        rotate: "100deg",
    }, 'cans')

    tl.to("#blackberry3", {
        top: "163%",
        left: "70%",
        width: "5%",
        rotate: "60deg",
    }, 'cans')

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".three",
            start: "0% 95%",
            end: "20% 50%",
            scrub: true,
        }
    });

    tl2.to("#cans", {
        top: "237%",
        left: "50%",
        width: "30%",
        rotate: "0deg",
    }, 'cans')

});



mm.add("(min-width:768px) and (max-width:1023px)", () => {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            start: "0% 95%",
            end: "80% 60%",
            scrub: true,
        }
    });

    tl.to("#cans", {
        top: "150%",
        left: "70%",
        width: "45%",
        rotate: "-25deg",
    }, 'cans')

    tl.to("#leaf", {
        top: "160%",
        left: "65%",
        width: "18%",
        rotate: "0deg",
    }, 'cans')

    tl.to("#blackberry1", {
        top: "120%",
        left: "10%",
        width: "10vw",
        rotate: "80deg",
    }, 'cans')

    tl.to("#blackberry2", {
        top: "138%",
        left: "85%",
        width: "15vw",
        rotate: "80deg",
    }, 'cans')

    tl.to("#blackberry3", {
        top: "170%",
        left: "60%",
        width: "8vw",
        rotate: "50deg",
    }, 'cans')


    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".three",
            start: "0% 95%",
            end: "20% 50%",
            scrub: true,
        }
    });

    tl2.to("#cans", {
        top: "240%",
        left: "50%",
        width: "40%",
        rotate: "0deg",
    }, 'cans')

});



mm.add("(max-width: 767px)", () => {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            start: "0% 95%",
            end: "80% 60%",
            scrub: true,
        }
    });

    tl.to("#cans", {
        top: "165%",
        left: "85%",
        width: "40%",
        rotate: "-20deg",
    }, 'cans')

    tl.to("#leaf", {
        top: "175%",
        left: "65% ",
        width: "15%",
        rotate: "0deg",
    }, 'cans')

    tl.to("#blackberry1", {
        top: "135%",
        left: "60%",
        width: "16vw",
        rotate: "60deg",
    }, 'cans')

    tl.to("#blackberry2", {
        top: "150%",
        left: "90%",
        width: "18vw",
        rotate: "60deg",
    }, 'cans')

    tl.to("#blackberry3", {
        top: "170%",
        left: "75%",
        width: "16vw",
        rotate: "50deg",
    }, 'cans')


    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".three",
            start: "0% 95%",
            end: "20% 50%",
            scrub: true,
        }
    });

    tl2.to("#cans", {
        top: "241.5%",
        left: "50%",
        width: "40%",
        rotate: "0deg",
    }, 'cans')

});

mm.add("(max-width: 550px)", () => {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            start: "0% 95%",
            end: "80% 60%",
            scrub: true,
        }
    });

    tl.to("#cans", {
        top: "160%",  
        left: "80%",   
        width: "45%",  
        rotate: "-15deg",
    }, 'cans')

    tl.to("#leaf", {
        top: "170%",
        left: "60%",
        width: "18%",
        rotate: "0deg",
    }, 'cans')

    tl.to("#blackberry1", {
        top: "130%",
        left: "55%",
        width: "18vw",
        rotate: "50deg",
    }, 'cans')

    tl.to("#blackberry2", {
        top: "145%",
        left: "85%",
        width: "20vw",
        rotate: "50deg",
    }, 'cans')

    tl.to("#blackberry3", {
        top: "165%",
        left: "70%",
        width: "18vw",
        rotate: "40deg",
    }, 'cans')

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".three",
            start: "0% 95%",
            end: "20% 50%",
            scrub: true,
        }
    });

    tl2.to("#cans", {
        top: "238%",   
        left: "62%",
        width: "40%",
        rotate: "0deg",
    }, 'cans')
});
