function hn() {}
    hn.xz = function(Y, R, V) {
        var E = {}
          , r = f.hy(Y, R);
        R += 2;
        E.aR = Y[R] == 1;
        R++;
        R++;
        E._$ = [f.Y3(Y, R), f.Y3(Y, R + 2), f.Y3(Y, R + 4)];
        R += 6;
        E._I = [f.Y3(Y, R), f.Y3(Y, R + 2), f.Y3(Y, R + 4)];
        R += 6;
        E.wP = [];
        for (var x = 0; x < 6; x++) {
            var K = {};
            K.eA = [f.Y3(Y, R), f.Y3(Y, R + 2), f.Y3(Y, R + 4), f.Y3(Y, R + 6)];
            R += 8;
            K.lj = [f.Y3(Y, R), f.Y3(Y, R + 2), f.Y3(Y, R + 4)];
            R += 6;
            E.wP.push(K)
        }
        var J = h2.WL("hue2")
          , t = E;
        if (J.Clrz == null)
            J.Clrz = {
                t: "bool",
                v: !1
            };
        J.Clrz.v = t.aR;
        for (var x = 0; x < 7; x++) {
            var C = x == 0 ? t.aR ? t._$ : t._I : t.wP[x - 1];
            hn.FZ(J, x, C)
        }
        return J
    }
    ;
    hn.aam = function(Y) {
        return {
            classID: "Hst2",
            H: {
                t: "long",
                v: Y[0]
            },
            Strt: {
                t: "long",
                v: Y[1]
            },
            Lght: {
                t: "long",
                v: Y[2]
            }
        }
    }
    ;
    hn.xk = function(Y, R) {
        for (var x = 0; x < Y.length; x++) {
            var V = Y[x].v.LclR;
            if (R == 0 && V == null || V != null && V.v == R)
                return x
        }
        return -1
    }
    ;
    hn.FZ = function(Y, R, V) {
        var E = R == 0 ? V : V.lj
          , r = hn.aam(E);
        if (R != 0) {
            var K = V.eA;
            r.LclR = {
                t: "long",
                v: R
            },
            r.BgnR = {
                t: "long",
                v: K[0]
            };
            r.BgnS = {
                t: "long",
                v: K[1]
            };
            r.EndS = {
                t: "long",
                v: K[2]
            };
            r.EndR = {
                t: "long",
                v: K[3]
            }
        }
        r = {
            t: "Objc",
            v: r
        };
        var J = Y.Adjs.v
          , t = hn.xk(J, R);
        if (t == -1)
            J.push(r);
        else
            J[t] = r
    }
    ;
    hn.k3 = function(Y, R) {
        var V = Y.Adjs.v
          , E = hn.xk(V, R);
        if (E == -1) {
            if (R == 0)
                return [0, 0, 0];
            else
                return [{
                    eA: [315, 345, 15, 45],
                    lj: [0, 0, 0]
                }, {
                    eA: [15, 45, 75, 105],
                    lj: [0, 0, 0]
                }, {
                    eA: [75, 105, 135, 165],
                    lj: [0, 0, 0]
                }, {
                    eA: [135, 165, 195, 225],
                    lj: [0, 0, 0]
                }, {
                    eA: [195, 225, 255, 285],
                    lj: [0, 0, 0]
                }, {
                    eA: [255, 285, 315, 345],
                    lj: [0, 0, 0]
                }][R - 1]
        }
        var r = V[E].v
          , K = [r.H.v, r.Strt.v, r.Lght.v];
        if (R == 0)
            return K;
        return {
            lj: K,
            eA: [r.BgnR.v, r.BgnS.v, r.EndS.v, r.EndR.v]
        }
    }
    ;
    hn.U_ = function(Y, R, V) {
        var E = {
            aR: V.Clrz.v,
            wP: []
        };
        E._$ = E._I = hn.k3(V, 0);
        for (var x = 1; x < 7; x++)
            E.wP.push(hn.k3(V, x));
        var r = 2 + 2 + 12 + 6 * 14
          , K = Y.data;
        Y.ZK(R, r);
        f.Yk(K, R, 2);
        R += 2;
        K[R] = E.aR ? 1 : 0;
        R++;
        R++;
        f.l7(K, R + 0, E._$[0]);
        f.l7(K, R + 2, E._$[1]);
        f.l7(K, R + 4, E._$[2]);
        R += 6;
        f.l7(K, R + 0, E._I[0]);
        f.l7(K, R + 2, E._I[1]);
        f.l7(K, R + 4, E._I[2]);
        R += 6;
        for (var x = 0; x < 6; x++) {
            var J = E.wP[x].eA
              , t = E.wP[x].lj;
            f.l7(K, R + 0, J[0]);
            f.l7(K, R + 2, J[1]);
            f.l7(K, R + 4, J[2]);
            f.l7(K, R + 6, J[3]);
            R += 8;
            f.l7(K, R + 0, t[0]);
            f.l7(K, R + 2, t[1]);
            f.l7(K, R + 4, t[2]);
            R += 6
        }
        return r
    }
    ;