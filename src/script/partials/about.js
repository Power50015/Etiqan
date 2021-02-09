$(function() {
    const aboutImgBorder = $('.img-border').tilt({
        maxTilt: 10,
        perspective: 500, // Transform perspective, the lower the more extreme the tilt gets.
        easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
        scale: 1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000, // Speed of the enter/exit transition.
        transition: true, // Set a transition on enter/exit.
        reset: false, // If the tilt effect has to be reset on exit.
        glare: true, // Enables glare effect
        maxGlare: 0.3 // From 0 - 1.
    });
    const aboutImg = $('.about-img img').tilt({
        maxTilt: 10,
        perspective: 500, 
        easing: "cubic-bezier(.03,.98,.52,.99)", 
        scale: 1, 
        speed: 1000, 
        transition: true, 
        reset: false, 
        glare: false, 
        maxGlare: 0.3 
    });
});
