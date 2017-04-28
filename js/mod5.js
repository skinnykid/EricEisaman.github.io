window.onload = function(){
  var canvas = document.createElement('canvas'),
      c = canvas.getContext('2d');
  canvas.width = 400;
  canvas.height = 400;
  document.body.appendChild(canvas);
  var posX = canvas.width / 2,
      posY = canvas.height / 2,
      velX = 3,
      velY = 3;
  setInterval(function(){
    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width,canvas.height);
    posX += velX;
    posY += velY;
    if(posX > canvas.width - 10){
      posX = canvas.width - 10;
      velX *= -1;
    }else if(posX <0){
      posX = 0;
      velX *= -1;
    }
    if(posY > canvas.height - 10){
      posY = canvas.height - 10;
      velY *= -1;
    }else if(posX <0){
      posY = 0;
      velX *= -1;
    }
    c.fillStyle = 'white';
    c.fillRect(posX,posY,10,10);
  },30);
}

