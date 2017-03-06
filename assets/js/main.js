console.log("Hello World from main.js!");


TweenMax.from(".arm1", 1, {rotation: 150, repeat: -1, yoyo: true, ease: Power2.easeInOut}); // correct: 55deg
TweenMax.from(".arm2", 1, {rotation: -80, repeat: -1, yoyo: true, ease: Power2.easeInOut}); // correct: -30deg
TweenMax.from(".arm3", 1, {rotation: -75, repeat: -1, yoyo: true, ease: Power2.easeInOut}); // correct: -25deg

// comment out two tweens at a time to isolate one and see how it works.