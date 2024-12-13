function king(name, color, position, castled) {
  chesspiece.call(this, name, color, position);
  this.castled = castled;
}

king.prototype = chesspiece.prototype;
king.prototype.constructor = king;

king.prototype.setcastled = function () {
  if (this.position == "G8") this.castled = true;
};

let k1 = new king("king", "black", "E8", false);

k1.display();
k1.moveTo("G8");
k1.setcastled();
k1.display();
document.write(k1.name + " " + k1.castled);
