(function (global) {
  var curvedText = global.curvedText || (global.curvedText = {})
  curvedText.TySh = null;
  curvedText.dD = dD;
  function dD() {
    this.jp = {
      jq: new au,
    };
  }
  curvedText.B8 = cd.B8;

  curvedText.curved = function (Y, R, V, canvas) {
    if (V == null)
      V = !1;
    var E = this.TySh;
      if (!bp.Ee(E, R.jq))
          return !1;
    this.Yr = new cd(E.VW, R.jq);
    var K = curvedText.o0(this.Yr, E, canvas);
      if (w.uM.XJ(E.P5))
          E.Bk = new gE;
      else {
          if (bg.Re(E.VW) == 1) {
              var J = bg.ah(E.VW)
                , z = K.Bk.y;
              E.Bk = new gE(0,z,J[2] - J[0],J[3] - J[1] - z)
          } else {
              E.Bk = K.Bk
          }
      }
    return !0
  }
    ;

  curvedText.o0 = function (Y, R, canvas) {
    var V = Y.aY(), C;
    if (V.x == Infinity || V.uD())
      return {
        uG: w.T(0),
        V: new gE,
        Bk: new gE
      };
    var E = Y.aY()
      , path = bp.xm(Y, R)
      , K = w.H.LB(path.P);
    if (K.uD())
      return {
        uG: w.T(0),
        V: new gE,
        Bk: new gE
      };
    const J = document.getElementById("canvas");
    J.width = canvas.width;
    J.height = canvas.height;
    var ctx = canvas.getContext("2d");
    Typr.U.pathToContext({
      crds: path.P,
      cmds: path.R
    }, ctx)
    ctx.save();
    ctx.restore();
    if (Y.G$.length != 0) {
      var c = bg.SV(R)
        , M = ctx.getImageData(0, 0, K.d, K.b);
      C = new Uint8Array(M.data.buffer);
      if (c == 0)
        for (var x = 0; x < C.length; x += 4)
          C[x + 3] = C[x + 3] > 80 ? 255 : 0;
      if (c == 3)
        for (var x = 0; x < C.length; x += 4)
          C[x + 3] = Math.min(255, C[x + 3] * 1.5)
    } else
      C = w.T(K.X() * 4);
    return {
      uG: C,
      V: K,
      Bk: E
    }
  };

  curvedText.MF = null;
  curvedText.initTySh = function (r, MF) {
    this.Qm = this.nt = 0;
    this.MF = MF;
    this.TySh = bg.BW(r.x, r.y, MF);
  };

  curvedText.onChangeTySh = function (obj) {
    if (!obj)
      return;
    if (obj.warpStyle)
      this.TySh.P5.warpStyle.v.warpStyle = obj.warpStyle;
    if (obj.warpValue)
      this.TySh.P5.warpValue.v = obj.warpValue;
    this.TySh.VW.EngineDict.Rendered.Shapes = {
      WritingDirection: 0,
      Children: [
        {
          ShapeType: 0,
          Procession: 0,
          Lines: {
            WritingDirection: 0,
            Children: []
          },
          Cookie: {
            Photoshop: {
              ShapeType: 0,
              PointBase: [
                0,
                0
              ],
              Base: {
                ShapeType: 0,
                TransformPoint0: [
                  1,
                  0
                ],
                TransformPoint1: [
                  0,
                  1
                ],
                TransformPoint2: [
                  0,
                  0
                ]
              }
            }
          }
        }
      ]
    }
  };

  curvedText.Qm = -1;
  curvedText.nt = -1;

  curvedText.startCurved = function (FX, gL, canvas) {
    if (this.TySh == null) {
      return;
    }
    var R = FX.selectionStart
      , V = this.TySh
      , E = bg.mu(V.VW)
      , r = FX.value + "\n"
      , K = Math.min(this.Qm, this.nt)

    this.Qm = Math.min(R, K);
    if (r.length - R < E.length - this.nt)
      this.nt = E.length - r.length + R;
    if (E != r) {
      while (this.Qm > 0 && E.charAt(this.Qm - 1) != r.charAt(this.Qm - 1))
        this.Qm--
    }
    var t = E.substring(0, this.Qm)
      , C = E.substring(this.nt, E.length)
      , c = r.substring(this.Qm, r.length - C.length);
    bg.to(V.VW, this.Qm, this.nt);
    bg.ys(V.VW, this.Qm, c);
    var M = this.vZ(this.MF, V)
    bg.wR(V.VW, this.Qm, this.Qm + c.length - 1, M);
    this.Qm = this.nt = t.length + c.length;
    this.curved(undefined, gL, !0, canvas)
  };

  curvedText.vZ = function (MF, R) {
    var V = JSON.parse(JSON.stringify(MF));
    bg.aH(V, 1 / D._.k9(R.g));
    return V
  };

})(typeof exports !== 'undefined' ? exports : this)