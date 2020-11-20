function gv(Y, R) {
  if (!Y)
    Y = 0;
  if (!R)
    R = 0;
  this.x = Y;
  this.y = R
}

gv.prototype.clone = function () {
  return new gv(this.x, this.y)
}