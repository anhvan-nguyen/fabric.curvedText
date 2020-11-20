var D = {};

D._ = function (Y, R, V) {
    D.R0.call(this, Y, R, V);
    this.fZ = 0;
    this.t = null;
    this.V7 = null;
    this.gL = null;
    this.Y4 = 1;
    this.lE = !1;
    this.cursor = null;
    this.xu = null;
    this.w$ = null;
    this.pS = !1;
    this.tR = null;
    this.a97 = 0;
    this.FI = null;
    this.KY = 0;
    this.jj = null;
    this.Z8 = null;
    this.S1 = null;
    this.Ff = null;
    this.a7Z = null;
    this.BJ = null
}

D._.k9 = function (Y) {
    var R = Y.clone()
        , V = Math.atan2(-R.O, R.o)
        , E = new bF;
    E.rotate(-V);
    R.concat(E);
    return (Math.abs(R.o) + Math.abs(R.Xa)) / 2
}
