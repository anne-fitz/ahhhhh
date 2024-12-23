// let sparkles = [];
// let starColor = [250, 213, 255]; // Default pink

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   noStroke();

//   // Debug: Check if the body has the class "exercise"
//   console.log("Body classes:", document.body.classList);

// //   if (document.body.classList.contains('exercise-page')) {
// //     starColor = [200, 200, 255]; // Light blue for exercise page
// //     console.log("Star color set to light blue");
// //   } else if (document.body.classList.contains('relationships-page')) {
// //     starColor = [225, 188, 255];
// //   } else {
// //     console.log("Star color set to default pink");
// //   }

//   // Initialize sparkles
//   for (let i = 0; i < 100; i++) {
//     sparkles.push(new Sparkle());
//   }
// }

// function draw() {
//   clear(); // Clear the background to allow transparency
//   background(0, 0, 0, 10); // Slightly persistent background for a glowing effect

//   // Debug: Display the number of sparkles
//   console.log("Number of sparkles:", sparkles.length);

//   // Update and display sparkles
//   for (let sparkle of sparkles) {
//     sparkle.update();
//     sparkle.display();
//   }
// }

// class Sparkle {
//   constructor() {
//     this.x = random(width);
//     this.y = random(height);
//     this.size = random(10, 25);
//     this.speedX = random(-1, 1);
//     this.speedY = random(-1, 1);
//     this.alpha = random(150, 255); // Opacity
//     this.twinkleSpeed = random(0.01, 0.03); // Twinkling effect speed
//     this.angle = 0; // Angle for twinkling
//   }

//   update() {
//     // Move sparkle
//     this.x += this.speedX;
//     this.y += this.speedY;

//     // Bounce off edges
//     if (this.x < 0 || this.x > width) {
//       this.speedX *= -1;
//     }
//     if (this.y < 0 || this.y > height) {
//       this.speedY *= -1;
//     }

//     // Twinkle effect
//     this.angle += this.twinkleSpeed;
//   }

//   display() {
//     push();
//     translate(this.x, this.y);
//     rotate(this.angle);

//     // Debug: Check the current star color
//     console.log("Drawing sparkle at", this.x, this.y, "with color", starColor);

//     // Create spiky star shape
//     fill(...starColor, this.alpha); // Dynamic color with variable transparency
//     beginShape();
//     for (let i = 0; i < 10; i++) {
//       let radius = i % 2 === 0 ? this.size / 2 : this.size; // Alternate radius for spikes
//       let angle = TWO_PI * i / 10;
//       let sx = cos(angle) * radius;
//       let sy = sin(angle) * radius;
//       vertex(sx, sy);
//     }
//     endShape(CLOSE);

//     pop();
//   }
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

let sparkles = [];
let starColor = [250, 213, 255]; // Default pink

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // Initialize sparkles
  for (let i = 0; i < 100; i++) {
    sparkles.push(new Sparkle());
  }
}

function draw() {
  clear(); // Clear the background to allow transparency
  background(0, 0, 0, 10); // Slightly persistent background for a glowing effect

  // Update and display sparkles
  for (let sparkle of sparkles) {
    sparkle.update();
    sparkle.display();
  }
}

class Sparkle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(10, 25);
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
    this.alpha = random(150, 255); // Opacity
    this.twinkleSpeed = random(0.01, 0.03); // Twinkling effect speed
    this.angle = 0; // Angle for twinkling
  }

  update() {
    // Move sparkle
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off edges
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }

    // Twinkle effect
    this.angle += this.twinkleSpeed;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    // Create spiky star shape
    fill(...starColor, this.alpha); // Dynamic color with variable transparency
    beginShape();
    for (let i = 0; i < 10; i++) {
      let radius = i % 2 === 0 ? this.size / 2 : this.size; // Alternate radius for spikes
      let angle = TWO_PI * i / 10;
      let sx = cos(angle) * radius;
      let sy = sin(angle) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);

    pop();
  }
}

function windowResized() {
  // Resize canvas to match the new window size
  resizeCanvas(windowWidth, windowHeight);

  // Adjust sparkles' positions to maintain proportion
  for (let sparkle of sparkles) {
    sparkle.x = sparkle.x * (windowWidth / width);
    sparkle.y = sparkle.y * (windowHeight / height);
  }
}

