const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// const image = document.getElementById('source');

// image.addEventListener('load', e => {
//   ctx.filter = 'blur(1000px)';
//   ctx.drawImage(image, 10, 10, 180, 120);
// });

ctx.filter = 'blur(4px)';
ctx.font = '48px serif';
ctx.fillText('Hello world', 50, 100);