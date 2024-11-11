var canvas = document.getElementById('favCanvas');
var ctx = canvas.getContext('2d');

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

ctx.beginPath();
ctx.moveTo(0, 0); // Top-left point
ctx.lineTo(64, 0); // Top-right point
ctx.lineTo(64, 64); // Bottom-right point
ctx.lineTo(0, 40); // Bottom-left point
ctx.lineTo(0, 0); // Top-left point
ctx.closePath();
ctx.stroke();

const faviconURL = canvas.toDataURL('image/png');
const favicon = document.getElementById('favicon');
favicon.href = faviconURL;


