function bF(Y, R, V, E, r, K) {
  if (typeof Y === "undefined") {
    Y = 1;
    R = 0;
    V = 0;
    E = 1;
    r = 0;
    K = 0
  }
  this.o = Y;
  this.O = R;
  this.w8 = V;
  this.Xa = E;
  this.Wr = r;
  this.W8 = K
}

bF.prototype.translate = function (Y, R) {
  this.Wr += Y;
  this.W8 += R
}

bF.prototype.rotate = function (Y) {
  var R = new bF(Math.cos(Y), -Math.sin(Y), Math.sin(Y), Math.cos(Y), 0, 0);
  this.concat(R)
}

bF.prototype.scale = function (Y, R) {
  var V = new bF(Y, 0, 0, R, 0, 0);
  this.concat(V)
}

bF.prototype.concat = function (Y) {
  this.m3(new bF(this.o * Y.o + this.O * Y.w8, this.o * Y.O + this.O * Y.Xa, this.w8 * Y.o + this.Xa * Y.w8, this.w8 * Y.O + this.Xa * Y.Xa, this.Wr * Y.o + this.W8 * Y.w8 + Y.Wr, this.Wr * Y.O + this.W8 * Y.Xa + Y.W8))
}

bF.prototype.tb = function () {
  var Y = this.o * this.Xa - this.O * this.w8;
  this.m3(new bF(this.Xa / Y, -this.O / Y, -this.w8 / Y, this.o / Y, (this.w8 * this.W8 - this.Xa * this.Wr) / Y, (this.O * this.Wr - this.o * this.W8) / Y))
}

bF.prototype.clone = function () {
  return new bF(this.o, this.O, this.w8, this.Xa, this.Wr, this.W8)
}

bF.prototype.m3 = function (Y) {
  this.o = Y.o;
  this.O = Y.O;
  this.w8 = Y.w8;
  this.Xa = Y.Xa;
  this.Wr = Y.Wr;
  this.W8 = Y.W8
}
