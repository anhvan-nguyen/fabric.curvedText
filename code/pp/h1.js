function h1() {}
    h1.nX = function(Y) {
        var R = new Uint8Array(Y)
          , V = 0
          , E = {
            sm: [],
            gb: [],
            list: []
        }
          , r = f.hy(R, V);
        V += 2;
        if (r <= 2) {
            return h1.alL(R)
        }
        var K = f.hy(R, V);
        V += 2;
        var J = f.rc(R, V, 8);
        V += 8;
        var t = f.n(R, V);
        V += 4;
        if (t > 0)
            E.sm = h1.Xz(R, V, t, K, r);
        V += t;
        var C = f.rc(R, V, 8);
        V += 8;
        var c = f.n(R, V);
        V += 4;
        if (c > 0)
            E.gb = hu.e0(R, V, c);
        V += c;
        var M = f.rc(R, V, 8);
        V += 8;
        var a = f.n(R, V);
        V += 4;
        if (a > 0) {
            var Q = {};
            cj.MQ(R, Q, V + 4);
            E.list = Q.Brsh.v
        }
        V += a;
        var A = E.list;
        for (var x = 0; x < A.length; x++) {
            h3.j5.check(A[x].v)
        }
        return E
    }
    ;
    h1.MW = function(Y, R) {
        Y.v.Nm.v = R
    }
    ;
    h1.alL = function(Y) {
        var R = {
            sm: [],
            gb: [],
            list: []
        }
          , V = 0
          , E = f.hy(Y, V);
        V += 2;
        var r = f.hy(Y, V);
        V += 2;
        for (var x = 0; x < r; x++) {
            var K = f.hy(Y, V);
            V += 2;
            var J = f.n(Y, V);
            V += 4;
            var t = V;
            if (K == 2) {
                var C = {};
                R.sm.push(C);
                var c = f.n(Y, t);
                t += 4;
                var M = f.hy(Y, t);
                t += 2;
                if (E == 2) {
                    var a = f.Va(Y, t);
                    t += 4 + a.length * 2 + 2
                }
                C.id = aP.Gc() + "-d71c-11e5-b1ae-a548a96e5f9f";
                t++;
                t += 8;
                C.V = f.kC(Y, t);
                t += 16;
                var Q = f.hy(Y, t);
                t += 2;
                var A = Y[t];
                t++;
                C.channel = dW._e(!1, Q, Y, C.V.d, C.V.b, t, A);
                var p = h3.Xl(C.id)
                  , v = p.Brsh.v;
                v.Dmtr.v.val = C.V.d;
                v.Spcn.v.val = M;
                R.list.push({
                    t: "Objc",
                    v: p
                })
            }
            V += J
        }
        return R
    }
    ;
    h1.wc = function(Y) {
        var R = new ez
          , V = 0
          , E = 0;
        f.L8(R, V, 6);
        V += 2;
        f.L8(R, V, 2);
        V += 2;
        f.ZF(R, V, "8BIMsamp");
        V += 8;
        V += 4;
        E = V;
        V = h1.Ga(R, V, Y.sm);
        f.$M(R, E - 4, V - E);
        f.ZF(R, V, "8BIMpatt");
        V += 8;
        V += 4;
        E = V;
        V = hu.fm(R, V, Y.gb);
        f.$M(R, E - 4, V - E);
        var r = {
            classID: "null",
            Brsh: {
                t: "VlLs",
                v: Y.list
            }
        };
        f.ZF(R, V, "8BIMdesc");
        V += 8;
        V += 4;
        E = V;
        f.$M(R, V, 16);
        V += 4;
        V += cj.w1(R, r, V);
        f.$M(R, E - 4, V - E);
        return R.data.slice(0, V).buffer
    }
    ;
    h1.Xz = function(Y, R, V, E, r) {
        var K = f.n
          , J = f.kC
          , t = R + V
          , C = [];
        while (R < t) {
            var c = {};
            C.push(c);
            var M = K(Y, R);
            R += 4;
            var a = R
              , Q = f.na(Y, R);
            R += Q.length;
            c.id = Q.UL;
            if (E == 1) {
                R += 9;
                c.V = J(Y, R);
                R += 16
            } else {
                R += 7;
                var A = K(Y, R);
                R += 4;
                c.V = J(Y, R);
                R += 16;
                var p = K(Y, R);
                R += 4;
                R += p * 4;
                var v = K(Y, R);
                R += 4;
                var W = K(Y, R);
                R += 4;
                var n = J(Y, R);
                R += 16
            }
            var $ = f.hy(Y, R);
            R += 2;
            var G = Y[R];
            R += 1;
            c.channel = dW._e(!1, $, Y, c.V.d, c.V.b, R, G);
            if (M % 4 != 0)
                M += 4 - M % 4;
            R = a + M
        }
        return C
    }
    ;
    h1.Ga = function(Y, R, V) {
        var E = f.$M
          , r = f.Sg;
        for (var x = 0; x < V.length; x++) {
            var K = V[x]
              , J = R + 4
              , C = 56
              , M = 1;
            R += 4;
            f.vS(Y, R, K.id);
            R += K.id.length + 2;
            Y.ZK(R, 1);
            Y.data[R] = 1;
            R += 3;
            E(Y, R, 3);
            R += 4;
            var t = R;
            R += 4;
            r(Y, R, K.V);
            R += 16;
            E(Y, R, C);
            R += 4;
            R += C * 4;
            E(Y, R - 4, 1);
            var c = R;
            R += 4;
            E(Y, R, 8);
            R += 4;
            r(Y, R, K.V);
            R += 16;
            f.L8(Y, R, 8);
            R += 2;
            Y.ZK(R, 1);
            Y.data[R] = M;
            R++;
            Y.ZK(R, K.V.X() * 2);
            R = dW.e9(K.channel, Y.data, K.V.d, K.V.b, R, M);
            Y.ZK(R, 8);
            R += 8;
            var a = R - J;
            E(Y, J - 4, a);
            E(Y, t, a - 49);
            E(Y, c, a - 305);
            if (a % 4 != 0)
                R += 4 - a % 4
        }
        return R
    }
    ;