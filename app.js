const lscroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  inertia: .6
});

var box = document.querySelector("body");
var pageX = document.getElementById("x");
var pageY = document.getElementById("y");

function updateDisplay(event) {
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;
}

box.addEventListener("mousemove", updateDisplay, false);
box.addEventListener("mouseenter", updateDisplay, false);
box.addEventListener("mouseleave", updateDisplay, false);



window.addEventListener('load', loader);

function loader(){

    const TLLOAD = gsap.timeline();

    TLLOAD
    .to('.l_bloc-txt', {
        height: 'auto', 
        duration: 0.6, 
        delay: 0.4, 
        ease: 'power2.out'
    },)

    .to('.l_bloc-txt h2', {
        y: 0, 
        ease: 'power2.out'
    }, '-=0.6')

    .to('.l_loader_circle', {
        x:0, 
        duration: 0.6, 
        ease: 'power2.out'
    },'-=0.4')

    .to('.l_load-container', {
        opacity: 0, 
        duration: 0.8, 
        delay: 0.7
    })
    .add(() => {
        document.querySelector('.l_load-container').style.display = "none";
    })
    .from('header', {
      duration:1.3,
      y:"-100%",
      stagger: 0.2,
      ease: 'Expo.easeInOut'
    })
    .from('.l_container_left', {
      duration:1.5,
      y:"-115%",
      stagger: 0.2,
      ease: 'Expo.easeInOut'
    }, "-=0.4")
    .from('.l_container_right', {
      duration:1.5,
      y:"-115%",
      stagger: 0.2,
      ease: 'Expo.easeInOut'
    }, "-=0.8")
    .from('.l_container_center', {
      duration:1,
      opacity:0,
      ease: 'Expo.easeInOut'
    },"-=0.5")
    .from('.pl_contain_title .pl_row', {
      y: 100,
      opacity:0,
      ease: 'power4.in',
      duration: 1,
    })
    .from('.pl_svg_scroll', {
      duration:1.5,
      stagger: 0.2,
      opacity:0,
      ease: 'Expo.easeInOut'
    },"-=0.6")
    .from('.wp_circle_btn', {
      duration:1,
      y:"100%",
      stagger: 0.2,
      opacity:0,
      ease: 'Expo.easeInOut'
    },"-=1")
    .from('.s_scolarite', {
      duration:1,
      x:"-100%",
      stagger: 0.8,
      opacity:0,
      ease: 'Expo.easeInOut'
    },"-=1")
} 




class HoverButton {
  constructor(el) {
    this.el = el;
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener();
  }
  
  attachEventsListener() {
    window.addEventListener('mousemove', e => this.onMouseMove(e));
    window.addEventListener('resize', e => this.calculatePosition(e));
  }
  
  calculatePosition() {
    gsap.set(this.el, {
      x: 0,
      y: 0,
      scale: 1
    });
    const box = this.el.getBoundingClientRect();
    this.x = box.left + (box.width * 0.5);
    this.y = box.top + (box.height * 0.5);
    this.width = box.width;
    this.height = box.height;
  }
  
  onMouseMove(e) {
    let hover = false;
    let hoverArea = (this.hover ? 0.7 : 0.5);
    let x = e.clientX - this.x;
    let y = e.clientY - this.y;
    let distance = Math.sqrt( x*x + y*y );
    if (distance < (this.width * hoverArea)) {
       hover = true;
        if (!this.hover) {
          this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
    }
    
    if(!hover && this.hover) {
      this.onLeave();
      this.hover = false;
    }
  }
  
  onHover(x, y) {
    gsap.to(this.el,  {
      x: (x - this.x) * 0.4,
      y: (y - this.y) * 0.4,
      scale: 1.15,
      ease: 'power2.out',
      duration: 0.4
    });
    this.el.style.zIndex = 10;
  }
  onLeave() {
    gsap.to(this.el, {
      x: 0,
      y: 0,
      scale: 1,
      ease: 'elastic.out(1.2, 0.4)',
      duration: 0.7
    });
    this.el.style.zIndex = 1;
  }
}


const btnOpen = document.querySelector('.menu_hamburger svg');
new HoverButton(btnOpen);

const btnExit = document.querySelector('.o_overlay .o_exit_btn');
new HoverButton(btnExit);

const btn3 = document.querySelector('.dark_mode_btn i');
new HoverButton(btn3);


const overlay = document.querySelector('.o_overlay')

var tlMenu = gsap.timeline({defaults:{duration: 1, ease: Back.easeOut.config(2)}})

tlMenu.paused(true);
tlMenu.to(".o_overlay", {clipPath: 'circle(100%'})

tlMenu.from('.o_overlay_container nav li a', {
	duration:1.3,
	y:"100%",
	stagger: 0.2,
	ease: 'Expo.easeInOut'
});

tlMenu.from('.o_social_links li', {
	duration:1,
	y:"-100%",
	opacity:0,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tlMenu.from('.o_overlay .o_exit_btn i', {
	duration:1,
	y:"-100%",
	opacity:0,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
}, "-=0.8");

btnOpen.addEventListener('click', () => {
  tlMenu.play();
})
btnExit.addEventListener('click', () => {
  tlMenu.reverse();
})


