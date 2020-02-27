define(function(require,exports,module){
     var util = {};

     var colorRange = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

     util.randomColor = function(){
          return '#' +
               colorRange[Math.floor(Math.random() * 16)] +
               colorRange[Math.floor(Math.random() * 16)] +
               colorRange[Math.floor(Math.random() * 16)] +
               colorRange[Math.floor(Math.random() * 16)] +
               colorRange[Math.floor(Math.random() * 16)] +
               colorRange[Math.floor(Math.random() * 16)];
     };

     module.exports = util;
});

let duration = 0.8;
let delay = 0.3;
let revealText = document.querySelector(".reveal");
let letters = revealText.textContent.split("");
revealText.textContent = "";
let middle = letters.filter(e => e !== " ").length / 2;
letters.forEach((letter, i) => {
     let span = document.createElement("span");
     span.textContent = letter;
     span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
     revealText.append(span);
});