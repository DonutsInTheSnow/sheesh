// bobPig graphic 

  const cx = document.querySelector("canvas").getContext("2d");
  var img = document.getElementById("bob");

  var lastTime = null;
  function frame(time) {
    if (lastTime != null)
      updateAnimation(Math.min(100, time - lastTime) / 1000);
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  var x = 100, y = 60, width = 20, height = 20, speedX = 100, speedY = 60;

  function updateAnimation(step) {
    // draws the blue box (comment cx.clearRect() back in to clear contrail)
    // cx.clearRect(0, 0, 400, 400);
    cx.strokeStyle = "transparent";
    cx.lineWidth = 1;
    // cx.strokeRect(0, 0, 400, 400);
    cx.strokeRect(0, 0, 350, 350);
    // handles the change of direction in the animation
    x += step * speedX;
    y += step * speedY;
    // if (x < width - 35 || x > 373 - width)
    if (x < width - 35 || x > 323 - width)
      speedX = -speedX;
    // if (y < height - 25 || y > 373 - height)
    if (y < height - 25 || y > 323 - height)
      speedY = -speedY;
    // draws the image on the canvas 
    cx.drawImage(img, x, y, 65, 55);
    cx.beginPath();   
    cx.fill();
  }
