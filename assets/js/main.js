const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

ScrollTrigger.matchMedia({
  // large
  "(min-width: 1025px)": function() {

    $(document).ready(function() {
      $('.hamburger-btn').click(function(e){
          e.preventDefault();
          $('.menu-wrap').css('max-width','100%')
          $('.menu-wrap').css('padding-right','80px')
          $('.menu-list').css('display','flex')
          $('.aboutus').css('display','none')
          $(this).css('display','none')
          $('.close-btn').css('display','block')
      })
      $('.close-btn').click(function(e){
        e.preventDefault();
        $('.menu-wrap').css('max-width','');
        $('.menu-wrap').css('padding-right','');
        $('.menu-list').css('display','');
        $('.aboutus').css('display','');
        $(this).css('display','none');
        $('.hamburger-btn').css('display','block');
      });
    });    

horiScroll = gsap.to('.content-wrap .sticky-inner',{
  scrollTrigger:{
      trigger:".content-wrap",
      start:"0% 0%", 
      end:"100% 100%",
      scrub:0,
      invalidateOnRefresh: true,
  },
  ease:'none',
  xPercent:-100,
  x:function(){
      return window.innerWidth
  }
})


// main section

gsap.to(".iphone", {
  yPercent:-50,
  scrollTrigger: {
    trigger: ".iphone",
    containerAnimation: horiScroll,
    start: "0% 50%",
    end: "100% 50%",

    ease:'none',
    scrub:0
  }
});
gsap.to(".macbook", {
yPercent:-80,
scrollTrigger: {
  trigger: ".macbook",
  containerAnimation: horiScroll,
  start: "0% 50%",
  end: "100% 50%",
  ease:'none',
  scrub:0
}
});
gsap.set('.obj',{yPercent:-300})
gsap.to(".obj", {
yPercent:0,
scrollTrigger: {
  trigger: ".obj",
  containerAnimation: horiScroll,
  start: "10% 80%",
  end: "100% 50%",
  ease:'none',
}
});

const imageWraps = [
'.sc-project .img-wrap.fitnavi',
'.sc-project .img-wrap.dahae',
'.sc-project .img-wrap.charancha',
'.sc-project .img-wrap.c-selecto'
];

imageWraps.forEach(imageWrap => {
gsap.set(imageWrap, { yPercent: 50 });
gsap.to(imageWrap, {
  yPercent: 0,
  scrollTrigger: {
    trigger: imageWrap,
    containerAnimation: horiScroll,
    start: "0% 50%",
    end: "100% 50%",
    ease: 'none',
    scrub: 0
  }
});
});

gsap.set('.sc-ourservice .bg-obj .obj1',{xPercent:-100,yPercent:200})
gsap.to(".sc-ourservice .bg-obj .obj1", {
xPercent:0,
yPercent:0,
scrollTrigger: {
  trigger: ".sc-ourservice .bg-obj .obj1",
  containerAnimation: horiScroll,
  start: "0% 50%",
  end: "100% 50%",
  ease:'none',
  scrub:0,
}
});
gsap.set('.sc-ourservice .bg-obj .obj2',{xPercent:-10,yPercent:20})
gsap.to(".sc-ourservice .bg-obj .obj2", {
xPercent:0,
yPercent:0,
scrollTrigger: {
  trigger: ".sc-ourservice .bg-obj .obj2",
  containerAnimation: horiScroll,
  start: "0% 50%",
  end: "100% 50%",
  ease:'none',
  scrub:0
}
});
gsap.set('.sc-ourservice .bg-obj .obj3',{xPercent:100,yPercent:-80})
gsap.to(".sc-ourservice .bg-obj .obj3", {
xPercent:0,
yPercent:0,
scrollTrigger: {
  trigger: ".sc-ourservice .bg-obj .obj3",
  containerAnimation: horiScroll,
  start: "0% 50%",
  end: "100% 50%",
  ease:'none',
  scrub:0
}
});
  },
  // medium
  "(min-width: 768px) and (max-width: 1024px)": function() {
    $(document).ready(function() {
      $('.hamburger-btn').click(function(e){
          e.preventDefault();
          $('.menu-wrap').css('max-width','100%')
          $('.menu-wrap').css('padding-right','80px')
          $('.menu-list').css('display','flex')
          $('.aboutus').css('display','none')
          $(this).css('display','none')
          $('.close-btn').css('display','block')
      })
      $('.close-btn').click(function(e){
        e.preventDefault();
        $('.menu-wrap').css('max-width','');
        $('.menu-wrap').css('padding-right','');
        $('.menu-list').css('display','');
        $('.aboutus').css('display','');
        $(this).css('display','none');
        $('.hamburger-btn').css('display','block');
      });
    });  

    gsap.to(".iphone", {
      xPercent:-50,
      scrollTrigger: {
        trigger: ".iphone",
        start: "0% 50%",
        end: "100% 50%",
        ease:'none',
        scrub:0
      }
    });
    gsap.to(".macbook", {
      xPercent:-80,
      scrollTrigger: {
        trigger: ".macbook",
        start: "0% 50%",
        end: "100% 50%",
        ease:'none',
        scrub:0
      }
      });
      gsap.set('.obj',{xPercent:-300})
      gsap.to(".obj", {
      xPercent:0,
      scrollTrigger: {
        trigger: ".obj",
        start: "10% 80%",
        end: "100% 50%",
        ease:'none',
      }
      });
  },
  
  // small
  "(max-width: 767px)": function() {
    $(document).ready(function() {
      $('.hamburger-btn').click(function(e){
          e.preventDefault();
          $('.header').css('width','100%')
          $('.header').css('height','100%')
          $('.logo').css('display','none')
          $('.menu-wrap').css('max-width','100%')
          $('.menu-wrap').css('padding','100px')
          $('.menu-list').css('display','flex')
          $('.menu-list').css('flex-direction','column')
          $('.aboutus').css('display','none')
          $(this).css('display','none')
          $('.close-btn').css('display','block')
          $('.close-btn').css('transform','translateY(-100%)')
      })
      $('.close-btn').click(function(e){
        e.preventDefault();
        $('.header').css('width','')
        $('.header').css('height','')
        $('.logo').css('display','block')
        $('.menu-wrap').css('max-width','');
        $('.menu-wrap').css('padding','');
        $('.menu-list').css('display','');
        $('.menu-list').css('flex-direction','');
        $('.aboutus').css('display','');
        $(this).css('display','none');
        $(this).css('transform','');
        $('.hamburger-btn').css('display','block');
      });
    });  

    gsap.to(".iphone", {
      xPercent:-50,
      scrollTrigger: {
        trigger: ".iphone",
        start: "0% 50%",
        end: "100% 50%",
        ease:'none',
        scrub:0
      }
    });
    gsap.to(".macbook", {
      xPercent:-30,
      scrollTrigger: {
        trigger: ".macbook",
        start: "0% 50%",
        end: "100% 50%",
        ease:'none',
        scrub:0
      }
      });
      gsap.set('.obj',{xPercent:-300})
      gsap.to(".obj", {
      xPercent:0,
      scrollTrigger: {
        trigger: ".obj",
        start: "10% 80%",
        end: "100% 50%",
        ease:'none',
        scrub:0
      }
      });

      const imageWraps = [
        '.sc-project .img-wrap.fitnavi',
        '.sc-project .img-wrap.dahae',
        '.sc-project .img-wrap.charancha',
        '.sc-project .img-wrap.c-selecto'
        ];
        
        imageWraps.forEach(imageWrap => {
        gsap.set(imageWrap, { yPercent: 30, opacity :0 });
        gsap.to(imageWrap, {
          yPercent: 0,
          opacity:1,
          duration:3,
          scrollTrigger: {
            trigger: imageWrap,
            start: "0% 70%",
            end: "100% 30%",
            ease: 'none',
            scrub: 0
          }
        });
      });
  },
  // all
  "all": function() {
    
  }
});