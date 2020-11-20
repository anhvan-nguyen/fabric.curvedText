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
gE.prototype.X = function() {
  return this.d * this.b
}
;
gE.prototype.clone = function() {
  return new gE(this.x,this.y,this.d,this.b)
}
;
gE.prototype.contains = function(Y, R) {
  return Y >= this.x && Y <= this.x + this.d && (R >= this.y && R <= this.y + this.b)
}
;
gE.prototype.M_ = function(Y) {
  return this.contains(Y.x, Y.y)
}
;
gE.prototype.Nk = function(Y) {
  return this.x <= Y.x && this.y <= Y.y && Y.x + Y.d <= this.x + this.d && Y.y + Y.b <= this.y + this.b
}
;
gE.prototype.m3 = function(Y) {
  this.x = Y.x;
  this.y = Y.y;
  this.d = Y.d;
  this.b = Y.b
}
;
gE.prototype.yU = function(Y) {
  return this.x == Y.x && this.y == Y.y && this.d == Y.d && this.b == Y.b
}
;
gE.prototype.Yl = function(Y, R) {
  this.x -= Y;
  this.y -= R;
  this.d += 2 * Y;
  this.b += 2 * R
}
;
gE.prototype.akp = function(Y) {
  this.Yl(Y.x, Y.y)
}
;
gE.prototype.Cy = function(Y) {
  var R = Math.max(this.x, Y.x)
    , V = Math.max(this.y, Y.y)
    , E = Math.min(this.x + this.d, Y.x + Y.d)
    , r = Math.min(this.y + this.b, Y.y + Y.b);
  if (E < R || r < V)
      return new gE;
  else
      return new gE(R,V,E - R,r - V)
}
;
gE.prototype.Wo = function(Y) {
  if (Y.y + Y.b < this.y || Y.x > this.x + this.d || Y.y > this.y + this.b || Y.x + Y.d < this.x)
      return !1;
  return !0
}
;
gE.prototype.uD = function() {
  return this.d <= 0 || this.b <= 0
}
;
gE.prototype.offset = function(Y, R) {
  this.x += Y;
  this.y += R
}
;
gE.prototype.V8 = function(Y) {
  this.offset(Y.x, Y.y)
}
;
gE.prototype.aiS = function() {
  this.x = this.y = this.d = this.b = 0
}
;
gE.prototype.Fb = function(Y, R, V, E) {
  this.x = Y;
  this.y = R;
  this.d = V;
  this.b = E
}
;
gE.prototype.ov = function(Y) {
  if (this.uD())
      return Y.clone();
  if (Y.uD())
      return this.clone();
  var R = this.clone();
  R.aj4(Y);
  return R
}
;
gE.qc = new Float32Array(2);
gE.prototype.aj4 = function(Y) {
  if (Y.uD())
      return;
  if (this.uD()) {
      this.m3(Y);
      return
  }
  this.xN(Y.x, Y.y);
  this.xN(Y.x + Y.d, Y.y + Y.b)
}
;
gE.prototype.xN = function(Y, R) {
  var V = Math.min(this.x, Y)
    , E = Math.min(this.y, R);
  this.d = Math.max(this.x + this.d, Y) - V;
  this.b = Math.max(this.y + this.b, R) - E;
  this.x = V;
  this.y = E
}
;
gE.prototype.a70 = function(Y, R, V, E) {
  if (this.d == 0 && this.b == 0)
      this.aac(Y, R);
  else
      this.xN(Y, R);
  this.xN(V, E)
}
;
gE.prototype.aac = function(Y, R) {
  this.x = Y;
  this.y = R;
  this.d = this.b = 0
}
;