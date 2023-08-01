module.exports = class Embed {
  constructor(){
    this.data = {};
  }

  setTitle(title){
    this.data.title = title;
  }

  setDescription(description){
    this.data.description = description;
  }

  setColor(cor){
    const colorConvert = require('color-convert');

function color(colorNameInput) {
  const rgbArray = colorConvert.keyword.rgb(colorNameInput);
  
  if (!rgbArray) {
    throw new Error(`Cor não encontrada: ${colorNameInput}`);
  }
  
  const red = rgbArray[0];
  const green = rgbArray[1];
  const blue = rgbArray[2];
  
  return ((red & 0xFF) << 16) + ((green & 0xFF) << 8) + (blue & 0xFF);
}

    this.data.color = color(cor)

    
  }
}