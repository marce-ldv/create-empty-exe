var games = Array.from(document.getElementsByClassName("product-title__text"));
var text = '';
games.forEach(a => text += ("\n" + a.innerHTML));
console.log(text);
