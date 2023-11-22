Shery.mouseFollower();

Shery.hoverWithMediaCircle(".target" /* Element to target.*/, {
    images:["./k.jpg"," ", "https://img.freepik.com/premium-photo/colorful-abstract-background-with-lots-different-colored-shapes-colors-it-generative-ai_97167-9340.jpg", " "],
  });

  Shery.hoverWithMediaCircle(".target" /* Element to target.*/, {
    // images:["./k.jpg"],
    videos: [" ","./1.mp4", "", "3.mp4"]
  });
  

  Shery.makeMagnet(".magnet")



  gsap.to(".lem",{
    scrollTrigger:{
      trigger: "#fimages",
      pin: true,
      start:"top top",
      end:"bottom bottom",
      endTrigger:".last",
      scrub: 1,
    },
    y:"-300%",
    ease: Power1
  });

  let section = document.querySelectorAll(".lem")


  Shery.imageEffect(".images",{
    style: 5,
    config: {onMouse:{value:1}},
    slideStyle: (setScroll) => {
      section.forEach(function(section,index){
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: function(prog){
            setScroll(prog.progress*1.25 +index);
            console.log(prog)
          }
        })
      })
    }
  })

  Shery.textAnimate(".text-target", {
    style: 1,
    y: 60,
    delay: 0.1,
    duration: 0.8,
    stagger: 0.3,
  });

    