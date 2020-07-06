let fs = require('fs'),
    path = require('path'),
    png = require('png-js')

// Promise for png-js decode function.
function loadPng(buf){
  let p = new Promise((resolve, reject) => {
    let w, h, pixels
    let data = new png(buf)
    w = data.width
    h = data.height
    data.decode((vals) => {
      pixels = vals
      resolve({ w, h, data: pixels })
    })
  })
  return p
}

// Loads an image file at path `fp` and returns an object.
// { data: Buffer, w: Number, h: Number }
export function loadImage(fp){
  switch (path.extname(fp)){
    case '.png':
      let buf = fs.readFileSync(fp)
      return loadPng(buf)
  }
}