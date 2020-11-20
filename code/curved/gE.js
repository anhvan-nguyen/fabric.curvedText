function gE(Y, R, V, E) {
  if (!Y)
    Y = 0;
  if (!R)
    R = 0;
  if (!V)
    V = 0;
  if (!E)
    E = 0;
  this.x = Y;
  this.y = R;
  this.d = V;
  this.b = E
}
gE.prototype.clone = function () {
  return new gE(this.x, this.y, this.d, this.b)
}

gE.prototype.uD = function () {
  return this.d <= 0 || this.b <= 0
}

gE.prototype.offset = function (Y, R) {
  this.x += Y;
  this.y += R
}

gE.prototype.V8 = function (Y) {
  this.offset(Y.x, Y.y)
}

gE.prototype.ov = function (Y) {
  if (this.uD())
    return Y.clone();
  if (Y.uD())
    return this.clone();
  var R = this.clone();
  R.aj4(Y);
  return R
}

gE.prototype.aj4 = function (Y) {
  if (Y.uD())
    return;
  if (this.uD()) {
    this.m3(Y);
    return
  }
  this.xN(Y.x, Y.y);
  this.xN(Y.x + Y.d, Y.y + Y.b)
}

gE.prototype.xN = function (Y, R) {
  var V = Math.min(this.x, Y)
    , E = Math.min(this.y, R);
  this.d = Math.max(this.x + this.d, Y) - V;
  this.b = Math.max(this.y + this.b, R) - E;
  this.x = V;
  this.y = E
}
