const canvas = document.getElementById('canvas');
const canvasContainer = document.getElementById('canvasContainer');
const canvasInp = document.getElementById('canvasInp');
const ctx = canvas.getContext('2d');

// const bluishGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
// bluishGradient.addColorStop(0, '#3a9bdc');
// bluishGradient.addColorStop(1, '#1260cc');

ctx.strokeStyle = '#253f4b';
ctx.fillStyle = '#757575';

var main = false;
// const redishGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
// redishGradient.addColorStop(0, '#ff0000');
// redishGradient.addColorStop(1, '#ff0000');

let x = 200, y = 360, a = 25, b = 20;
// let lacking = y > 400;
// ctx.fillRect(0, 0, canvas.width, canvas.height);
let facing = 'N';

ctx.lineWidth = 3;

// Direction mappings based on facing direction
const directions = {
     'N': { uu: u, rr: r, dd: d, ll: l, pUU: pU, pRR: pR, pDD: pD, pLL: pL },
     'E': { uu: r, rr: d, dd: l, ll: u, pUU: pR, pRR: pD, pDD: pL, pLL: pU },
     'S': { uu: d, rr: l, dd: u, ll: r, pUU: pD, pRR: pL, pDD: pU, pLL: pR },
     'W': { uu: l, rr: u, dd: r, ll: d, pUU: pL, pRR: pU, pDD: pR, pLL: pD }
};

// Input command parser and handler
canvasInp.addEventListener('input', () => {
     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
     // ctx.fillRect(0, 0, canvas.width, canvas.height);
     x = 200, y = 360;
     facing = 'N';
     o();

     const commands = canvasInp.value.trim().split(' ');
     commands.forEach(command => {
          let steps;
          if (command.startsWith('-0')) steps = Number(command.slice(2));
          else if (command.startsWith('0')) steps = Number(command.slice(1));
          else if (command.startsWith('+0')) steps = Number(command.slice(2));
          else if (command.startsWith('l')) steps = Number(command.slice(1));
          else if (command.startsWith('r')) steps = Number(command.slice(1));

          if ((command.startsWith('-0') && command.length > 2) || (command.startsWith('l') && command.length > 1)) {
               repeat(directions[facing].uu, directions[facing].pLL, steps - 1);
               directions[facing].uu();
               a = 40;
               directions[facing].ll();
               a = 25;
          } else if ((command.startsWith('0') || command.startsWith('s')) && command.length > 1) {
               repeat(directions[facing].uu, false, steps);
          } else if ((command.startsWith('+0') && command.length > 2) || (command.startsWith('r')) && command.length > 1) {
               repeat(directions[facing].uu, directions[facing].pRR, steps - 1);
               directions[facing].uu();
               a = 40;
               directions[facing].rr();
               a = 25;
          } else if (command === '-1') {
               directions[facing].ll();
          } else if (command === '1') {
               directions[facing].rr();
          } else if (command === '0') {
               directions[facing].uu();
          } else if (command === 'R') {
               directions[facing].uu();
               main = true;
               directions[facing].pUU();
               main = false;
               directions[facing].uu();
               directions[facing].rr();
          }
          else if (command === 'L') {
               directions[facing].uu();
               main = true;
               directions[facing].pUU();
               main = false;
               directions[facing].uu();
               directions[facing].ll();
          }
     });
     console.log(canvasInp.value);
     console.log(x, y);
     console.log(facing);
});

// Helper function to repeat movement
function repeat(action, action2, times) {
     for (let i = 0; i < times; i++) {
          action();
          if (action2) action2();
     }
}

// Directional movement and pseudo-movement functions
function o() { drawCircle(x, y + 10); }
o();
function l() { drawLine(x - a, y); facing = 'W'; }
function pL() { dashedLine(x - b, y); }
function r() { drawLine(x + a, y); facing = 'E'; }
function pR() { dashedLine(x + b, y); }
function u() { drawLine(x, y - a); facing = 'N'; }
function pU() { dashedLine(x, y - b); }
function d() {
     drawLine(x, y + a); facing = 'S'; // y > 400 ? (canvas.height = 600, canvasContainer.style.height = 600 + "px") : null;
}
function pD() { dashedLine(x, y + b); }
function R() {

}
function L() { }

// Helper functions for movement and drawing
function drawLine(newX, newY) {
     // ctx.strokeStyle = 'blue';
     ctx.beginPath();
     ctx.moveTo(x, y);
     ctx.lineTo(newX, newY);
     ctx.stroke();
     // ctx.strokeStyle = 'grey';
     x = newX; y = newY;
}

function dashedLine(newX, newY) {
     ctx.setLineDash([3, 2]);
     ctx.strokeStyle = '#365563';
     ctx.beginPath();
     ctx.moveTo(x, y);
     ctx.lineTo(newX, newY);
     if (main) {
          x = newX; y = newY;
     }
     ctx.stroke();
     ctx.strokeStyle = '#253f4b';
     // 
     ctx.setLineDash([]);
}

function drawCircle(cx, cy) {
     ctx.beginPath();
     ctx.arc(cx, cy, 10, 0, 2 * Math.PI);
     ctx.stroke();
}
