const videoUrls = [
  './images/1short.mp4',
  './images/3short.mp4'
];

function preloadVideos(urls) {
  urls.forEach(url => {
    const video = document.createElement('video');
    video.src = url;
    video.load();
  });
}

preloadVideos(videoUrls);

Shery.mouseFollower();

Shery.hoverWithMediaCircle(".target" , {
    images:["https://i.postimg.cc/QMYPc2MT/k.jpg","", "https://img.freepik.com/premium-photo/colorful-abstract-background-with-lots-different-colored-shapes-colors-it-generative-ai_97167-9340.jpg", ""],
  });

  // https://media.giphy.com/media/Qfyj11pV7m2bevTYMk/giphy-downsized-large.gif 

  Shery.hoverWithMediaCircle(".target" , {
    videos: [" ","./images/1short.mp4", "", "./images/3short.mp4"]
  });
  

  Shery.makeMagnet(".magnet");

  function isMobileDevice() {
    return /Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  }

  if(isMobileDevice()){
  ScrollTrigger.default({
    snap: false,
  })
  }

  // gsap.from("card",{
  //     y:"1000",
  //     opacity: "0",
  //     ease: Power1,
  //     duration: 0.8,
  // });

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


  tl=gsap.timeline();

  tl.from('#loader h1',{
    x:40,
    opacity:0,
    duration: 1,
    stagger: 0.3,
  })

  tl.to('#loader h1',{
    opacity:0,
    x:-40,
    duration:1,
  })

  tl.to('#loader',{
    opacity:0,
    display: "none",
    duration:1,
  })

  tl.from('h1',{
    y:50,
    // stagger: 0.3,
    duration: 0.3,
  })



  
    