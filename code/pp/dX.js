function dX() {
  this.a8 = {};
  this.VX = {}
}
dX.DB = [];
dX.oB = function(Y) {
  var R = dX.DB;
  if (R.length != 0) {
      var V = new I(O.E.Ft);
      for (var x = 0; x < R.length; x++)
          R[x].f(V)
  }
  window.requestAnimationFrame(dX.oB)
}
;
window.requestAnimationFrame(dX.oB);
dX.prototype.Xr = function(Y) {
  var R = this.a8[Y];
  if (R == null)
      return !1;
  return R.length > 0
}
;
dX.prototype.addEventListener = function(Y, R) {
  this.s(Y, R, null)
}
;
dX.prototype.s = function(Y, R, V) {
  if (this.a8[Y] == null) {
      this.a8[Y] = [];
      this.VX[Y] = []
  }
  this.a8[Y].push(R);
  this.VX[Y].push(V);
  if (Y == O.E.Ft) {
      var E = dX.DB;
      if (E.indexOf(this) == -1)
          E.push(this)
  }
}
;
dX.prototype.removeEventListener = function(Y, R) {
  var V = this.a8[Y];
  if (V == null)
      return;
  var E = V.indexOf(R);
  if (E < 0)
      return;
  var r = this.VX[Y];
  V.splice(E, 1);
  r.splice(E, 1);
  if (Y == O.E.Ft && V.length == 0) {
      var K = dX.DB;
      K.splice(K.indexOf(this), 1)
  }
}
;
dX.prototype.f = function(Y) {
  Y.currentTarget = this;
  if (Y.target == null)
      Y.target = this;
  var R = this.a8[Y.type];
  if (R == null)
      return;
  var V = this.VX[Y.type];
  for (var x = 0; x < R.length; x++) {
      if (V[x] == null)
          R[x](Y);
      else
          R[x].call(V[x], Y)
  }
}
;