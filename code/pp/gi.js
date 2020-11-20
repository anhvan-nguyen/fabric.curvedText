function gi() {}
    gi.nX = function(Y) {
        var R = new Uint8Array(Y)
          , V = 2
          , E = {
            OH: [],
            fS: []
        }
          , r = f.rc(R, V, 4);
        V += 4;
        var K = f.hy(R, V);
        V += 2;
        var J = f.n(R, V);
        V += 4;
        E.OH = hu.e0(R, V, J);
        V += J;
        var t = f.n(R, V);
        V += 4;
        for (var x = 0; x < t; x++) {
            var C = f.n(R, V);
            V += 4;
            var c = V
              , M = {
                $Y: {},
                qm: {}
            };
            E.fS.push(M);
            V += 4;
            V += cj.MQ(R, M.$Y, V);
            V += 4;
            V += cj.MQ(R, M.qm, V);
            V = c + C;
            var a = M.qm.blendOptions
              , Q = M.qm.Lefx;
            if (a && Object.keys(a.v).length > 1) {}
            if (Q) {
                if (Q.v.masterFXSwitch == null)
                    Q.v.masterFXSwitch = {
                        t: "bool",
                        v: !0
                    };
                fx.Sm(Q.v)
            }
        }
        return E
    }
    ;
    gi.MW = function(Y, R) {
        Y.$Y.Nm.v = R
    }
    ;
    gi.wc = function(Y) {
        var R = new ez
          , V = 0;
        f.L8(R, V, 2);
        V += 2;
        f.ZF(R, V, "8BSL");
        V += 4;
        f.L8(R, V, 3);
        V += 2;
        var E = V;
        V += 4;
        V = hu.fm(R, V, Y.OH);
        f.$M(R, E, V - E - 4);
        var r = Y.fS.length;
        f.$M(R, V, r);
        V += 4;
        for (var x = 0; x < r; x++) {
            V += 4;
            var K = V
              , J = Y.fS[x];
            f.$M(R, V, 16);
            V += 4;
            V += cj.w1(R, J.$Y, V);
            var t = J.qm.Lefx;
            if (t) {
                J.qm.Lefx = JSON.parse(JSON.stringify(t));
                fx.fh(J.qm.Lefx.v)
            }
            f.$M(R, V, 16);
            V += 4;
            V += cj.w1(R, J.qm, V);
            if (t)
                J.qm.Lefx = t;
            f.$M(R, K - 4, V - K)
        }
        return R.data.slice(0, V).buffer
    }
    ;