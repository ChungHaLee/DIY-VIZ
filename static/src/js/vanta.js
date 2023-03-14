function birdBackground(){
    const birdsBackground= VANTA.BIRDS({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 400.00,
        minWidth: 500.00,
        scale: 1.00,
        quantity: 5,
        scaleMobile: 1.00,
        backgroundColor: 0xffffff,
        color1: 0xff00c3,
        color2: 0x3cff00,
        colorMode: "variance",
        speedLimit: 7.00,
        alignment: 100.00,
    })
}

birdBackground();
