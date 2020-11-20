function gv(Y, R) {
  if (!Y)
      Y = 0;
  if (!R)
      R = 0;
  this.x = Y;
  this.y = R
}
gv.prototype.add = function(Y) {
  return new gv(this.x + Y.x,this.y + Y.y)
}
;
gv.prototype.clone = function() {
  return new gv(this.x,this.y)
}
;
gv.prototype.m3 = function(Y) {
  this.x = Y.x;
  this.y = Y.y
}
;
gv.prototype.yU = function(Y) {
  return this.x == Y.x && this.y == Y.y
}
;
gv.prototype.normalize = function(Y) {
  var R = Math.sqrt(this.x * this.x + this.y * this.y);
  this.x *= Y / R;
  this.y *= Y / R
}
;
gv.prototype.offset = function(Y, R) {
  this.x += Y;
  this.y += R
}
;
gv.prototype.Fb = function(Y, R) {
  this.x = Y;
  this.y = R
}
;
gv.prototype.O2 = function(Y) {
  return new gv(this.x - Y.x,this.y - Y.y)
}
;
gv.VN = function(Y, R) {
  return gv.adD(Y.x, Y.y, R.x, R.y)
}
;
gv.oD = function(Y, R, V) {
  return new gv(Y.x + V * (R.x - Y.x),Y.y + V * (R.y - Y.y))
}
;
gv.a4P = function(Y, R) {
  return new gv(Y * Math.cos(R),Y * Math.sin(R))
}
;
gv.adD = function(Y, R, V, E) {
  return Math.sqrt((V - Y) * (V - Y) + (E - R) * (E - R))
}
;
gv.ZS = {};
gv.e5 = {};
gv.ZS.create = function() {
  var Y = new Float32Array(4);
  return Y
}
;
gv.e5.create = function(Y) {
  var R = new Float32Array(16);
  R[0] = R[5] = R[10] = R[15] = 1;
  if (Y)
      gv.e5.set(Y, R);
  return R
}
;
gv.ZS.add = function(Y, R, V) {
  V[0] = Y[0] + R[0];
  V[1] = Y[1] + R[1];
  V[2] = Y[2] + R[2];
  V[3] = Y[3] + R[3]
}
;
gv.ZS.set = function(Y, R) {
  R[0] = Y[0];
  R[1] = Y[1];
  R[2] = Y[2];
  R[3] = Y[3]
}
;
gv.e5.set = function(Y, R) {
  R[0] = Y[0];
  R[1] = Y[1];
  R[2] = Y[2];
  R[3] = Y[3];
  R[4] = Y[4];
  R[5] = Y[5];
  R[6] = Y[6];
  R[7] = Y[7];
  R[8] = Y[8];
  R[9] = Y[9];
  R[10] = Y[10];
  R[11] = Y[11];
  R[12] = Y[12];
  R[13] = Y[13];
  R[14] = Y[14];
  R[15] = Y[15]
}
;
gv.e5.multiply = function(Y, R, V) {
  var E = Y[0]
    , r = Y[1]
    , K = Y[2]
    , J = Y[3]
    , t = Y[4]
    , C = Y[5]
    , c = Y[6]
    , M = Y[7]
    , a = Y[8]
    , Q = Y[9]
    , A = Y[10]
    , p = Y[11]
    , v = Y[12]
    , W = Y[13]
    , n = Y[14]
    , $ = Y[15]
    , G = R[0]
    , o = R[1]
    , B = R[2]
    , L = R[3];
  V[0] = G * E + o * t + B * a + L * v;
  V[1] = G * r + o * C + B * Q + L * W;
  V[2] = G * K + o * c + B * A + L * n;
  V[3] = G * J + o * M + B * p + L * $;
  G = R[4];
  o = R[5];
  B = R[6];
  L = R[7];
  V[4] = G * E + o * t + B * a + L * v;
  V[5] = G * r + o * C + B * Q + L * W;
  V[6] = G * K + o * c + B * A + L * n;
  V[7] = G * J + o * M + B * p + L * $;
  G = R[8];
  o = R[9];
  B = R[10];
  L = R[11];
  V[8] = G * E + o * t + B * a + L * v;
  V[9] = G * r + o * C + B * Q + L * W;
  V[10] = G * K + o * c + B * A + L * n;
  V[11] = G * J + o * M + B * p + L * $;
  G = R[12];
  o = R[13];
  B = R[14];
  L = R[15];
  V[12] = G * E + o * t + B * a + L * v;
  V[13] = G * r + o * C + B * Q + L * W;
  V[14] = G * K + o * c + B * A + L * n;
  V[15] = G * J + o * M + B * p + L * $;
  return V
}
;
gv.e5.inverse = function(Y, R) {
  var V = Y[0]
    , E = Y[1]
    , r = Y[2]
    , K = Y[3]
    , J = Y[4]
    , t = Y[5]
    , C = Y[6]
    , c = Y[7]
    , M = Y[8]
    , a = Y[9]
    , Q = Y[10]
    , A = Y[11]
    , p = Y[12]
    , v = Y[13]
    , W = Y[14]
    , n = Y[15]
    , $ = V * t - E * J
    , G = V * C - r * J
    , o = V * c - K * J
    , B = E * C - r * t
    , L = E * c - K * t
    , u = r * c - K * C
    , y = M * v - a * p
    , S = M * W - Q * p
    , X = M * n - A * p
    , N = a * W - Q * v
    , k = a * n - A * v
    , d = Q * n - A * W
    , P = $ * d - G * k + o * N + B * X - L * S + u * y;
  if (!P) {
      return null
  }
  P = 1 / P;
  R[0] = (t * d - C * k + c * N) * P;
  R[1] = (r * k - E * d - K * N) * P;
  R[2] = (v * u - W * L + n * B) * P;
  R[3] = (Q * L - a * u - A * B) * P;
  R[4] = (C * X - J * d - c * S) * P;
  R[5] = (V * d - r * X + K * S) * P;
  R[6] = (W * o - p * u - n * G) * P;
  R[7] = (M * u - Q * o + A * G) * P;
  R[8] = (J * k - t * X + c * y) * P;
  R[9] = (E * X - V * k - K * y) * P;
  R[10] = (p * L - v * o + n * $) * P;
  R[11] = (a * o - M * L - A * $) * P;
  R[12] = (t * S - J * N - C * y) * P;
  R[13] = (V * N - E * S + r * y) * P;
  R[14] = (v * G - p * B - W * $) * P;
  R[15] = (M * B - a * G + Q * $) * P;
  return R
}
;
gv.e5.ae0 = function(Y, R, V) {
  var E = R[0]
    , r = R[1];
  V[0] = E * Y[0] + r * Y[4] + Y[12];
  V[1] = E * Y[1] + r * Y[5] + Y[13]
}
;
gv.e5.ako = function(Y, R, V) {
  var E = R[0]
    , r = R[1]
    , K = R[2]
    , J = R[3];
  V[0] = Y[0] * E + Y[4] * r + Y[8] * K + Y[12] * J;
  V[1] = Y[1] * E + Y[5] * r + Y[9] * K + Y[13] * J;
  V[2] = Y[2] * E + Y[6] * r + Y[10] * K + Y[14] * J;
  V[3] = Y[3] * E + Y[7] * r + Y[11] * K + Y[15] * J
}
;