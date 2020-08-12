const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

imagemin(['src/*.{jpg,png,gif,svg}'], {
  destination: 'dest',
  plugins: [
    imageminMozjpeg({ quality: 80 }),
    imageminPngquant({ quality: [0.3, 0.5] }),
    imageminGifsicle(),
    imageminSvgo(),
  ],
}).then(() => {
  console.log('Images optimized');
});
