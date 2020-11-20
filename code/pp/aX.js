function aX() {}
    aX.nX = function(Y) {
        var R = new Uint8Array(Y)
          , V = []
          , E = 0;
        E = aX.iG(R, E, V);
        if (E + 3 < R.length) {
            V = [];
            E = aX.iG(R, E, V)
        }
        return V
    }
    ;
    aX.iG = function(Y, R, V) {
        var E = f.hy
          , r = f.Y3
          , K = E(Y, R);
        R += 2;
        var J = E(Y, R);
        R += 2;
        for (var x = 0; x < J; x++) {
            var t = aX.Pi(Y, R);
            R += 10;
            if (K == 2) {
                t._m = f.Va(Y, R);
                R += 4 + t._m.length * 2 + 2
            }
            V.push(t)
        }
        return R
    }
    ;
    aX.Pi = function(Y, R) {
        var V = f.hy
          , E = f.Y3
          , r = V(Y, R)
          , A = null;
        R += 2;
        var K = V(Y, R);
        R += 2;
        var J = V(Y, R);
        R += 2;
        var t = V(Y, R);
        R += 2;
        var C = V(Y, R);
        R += 2;
        var c = 1 / 65535
          , M = 255 / 65535
          , a = 100 / 65535
          , Q = 255 / 1e4;
        if (r == 0)
            A = {
                h: K * M,
                l: J * M,
                O: t * M
            };
        else if (r == 1) {
            A = w.Bx(K * c, J * c, t * c);
            A.h *= 255;
            A.l *= 255;
            A.O *= 255
        } else if (r == 2)
            A = w.W.VJ({
                classID: "CMYC",
                Cyn: {
                    t: "doub",
                    v: 100 - K * a
                },
                Mgnt: {
                    t: "doub",
                    v: 100 - J * a
                },
                Ylw: {
                    t: "doub",
                    v: 100 - t * a
                },
                Blck: {
                    t: "doub",
                    v: 100 - C * a
                }
            });
        else if (r == 7) {
            var p = w.QP(K / 100, E(Y, R - 6) / 100, E(Y, R - 4) / 100);
            A = p
        } else if (r == 8) {
            A = {
                h: 255 - K * Q,
                l: 255 - J * Q,
                O: 255 - t * Q
            }
        } else
            throw "e " + r + ", ";
        return A
    }
    ;
    aX.wc = function(Y) {
        var R = new ez
          , V = 0
          , E = f.L8;
        E(R, V, 2);
        V += 2;
        E(R, V, Y.length);
        V += 2;
        for (var x = 0; x < Y.length; x++) {
            var r = Y[x];
            R.ZK(V, 10);
            aX.Su(R.data, V, r);
            V += 10;
            var K = (r._m ? r._m : "") + "\0";
            f.m8(R, V, K);
            V += 4 + K.length * 2
        }
        return R.data.slice(0, V).buffer
    }
    ;
    aX.MW = function(Y, R) {
        Y._m = R
    }
    ;
    aX.Su = function(Y, R, V) {
        var E = 65535 / 255
          , r = f.Yk;
        r(Y, R, 0);
        r(Y, R + 2, Math.round(V.h * E));
        r(Y, R + 4, Math.round(V.l * E));
        r(Y, R + 6, Math.round(V.O * E));
        r(Y, R + 8, 0)
    }
    ;