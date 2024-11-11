var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');

ctx.lineWidth = 2;

// home to smn
ctx.beginPath();
ctx.arc(200, 360, 10, 0, 2 * Math.PI); // Draw a full circle
ctx.moveTo(190, 360); // home
ctx.lineTo(160, 360); // smn 1
ctx.stroke();

ctx.setLineDash([5, 5]); // Set the line dash pattern

ctx.beginPath();
ctx.moveTo(160, 360); // smn 1
ctx.lineTo(160, 400); // radhe
ctx.stroke();

ctx.setLineDash([]); // remove dash

ctx.beginPath();
ctx.moveTo(160, 360); // 1
ctx.lineTo(160, 320); // gully
ctx.stroke();

ctx.setLineDash([5, 5]); // Set the line dash pattern

ctx.beginPath();
ctx.moveTo(160, 340)
ctx.lineTo(200, 340); // gully
ctx.stroke();

ctx.beginPath();
ctx.moveTo(160, 320); // 2
ctx.lineTo(300, 320); // gully 2
ctx.stroke();

ctx.setLineDash([]); // remove dash

ctx.beginPath();
ctx.moveTo(160, 320); // 3
ctx.lineTo(120, 320);
ctx.lineTo(120, 290);
ctx.stroke();

ctx.beginPath();
// ctx.moveTo(120, 290);
// ctx.arc(120, 280, 10, -Math.PI / 2, Math.PI * 3 / 2);
ctx.rect();
ctx.stroke();













