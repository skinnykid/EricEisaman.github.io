window.onload = function(){
  var canvas = document.createElement('canvas'),
      c = canvas.getContext('2d');
  canvas.width = 400;
  canvas.height = 400;
  document.body.appendChild(canvas);
  var posX = canvas.width / 2,
      posY = canvas.height / 2;
  setInterval(function(){
    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width,canvas.height);
    posX += 1;
    posY += 1;
    c.fillStyle = 'white';
    c.fillRect(posX,posY,10,10);
  },30);
}

