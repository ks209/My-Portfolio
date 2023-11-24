Shery.mouseFollower();

Shery.hoverWithMediaCircle(".target" , {
    images:["https://i.postimg.cc/QMYPc2MT/k.jpg"," ", "https://img.freepik.com/premium-photo/colorful-abstract-background-with-lots-different-colored-shapes-colors-it-generative-ai_97167-9340.jpg", " "],
  });

  Shery.hoverWithMediaCircle(".target" , {
    videos: [" ","./images/1.mp4", "", "./images/3.mp4"]
  });
  

  Shery.makeMagnet(".magnet");



  gsap.to("#fleft",{
    scrollTrigger:{
      trigger: "#fimages",
      pin: true,
      start:"top top",
      end:"bottom bottom",
      endTrigger:".last",
      scrub: 1,
    },
    y:"-200%",
    ease: Power1,
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
            setScroll(prog.progress +index);
          }
        })
      })
    }
  })



  
    