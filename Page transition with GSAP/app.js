const tl = gsap.timeline({defaults: {ease: 'power2.out'}});

tl.to('.slider', {y: '-100%', duration:1.5}); 
tl.to('.intro .hero', {y: '0%', duration:1.0}); 
tl.fromTo('.nav',{opacity:0}, {opacity:1, duration:1}); 