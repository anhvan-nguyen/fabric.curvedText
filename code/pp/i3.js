function i3() {}
    i3.nX = function(Y) {
        var R = new Uint8Array(Y)
          , V = []
          , E = 0
          , r = f.hy(R, E);
        E += 2;
        if (r != 4) {
            throw "Unknown version of curves: " + r
        }
        var K = f.hy(R, E);
        E += 2;
        for (var x = 0; x < K; x++) {
            var J = i3.VP(R, E);
            E += 2 + 2 * J.length;
            V.push(J)
        }
        if (E == R.length)
            return V;
        var t = f.rc(R, E, 4);
        E += 4;
        var C = f.hy(R, E);
        E += 2;
        var c = f.hy(R, E);
        E += 2;
        if (c != 0)
            throw "extra curves for channels";
        return V
    }
    ;
    i3.xz = function(Y, R, V) {
        var E = R
          , r = []
          , K = Y[R];
        R += 3;
        var J = f.n(Y, R);
        R += 4;
        for (var x = 0; x < 4; x++) {
            var t = J >>> x & 1;
            if (t) {
                if (K == 0) {
                    var C = i3.VP(Y, R);
                    R += 2 + 2 * C.length
                } else {
                    var C = i3.abW(Y, R);
                    R += 256
                }
                r.push(C)
            } else
                r.push(K == 0 ? [0, 0, 255, 255] : i3.an1())
        }
        var c = h2.WL("curv");
        for (var x = 0; x < 4; x++) {
            if (K == 0) {
                var M = r[x]
                  , a = [];
                for (var Q = 0; Q < M.length; Q += 2)
                    a.push(w.Mq.t2(M[Q], M[Q + 1], !0));
                i3.FZ(c, x, a)
            } else
                i3.FZ(c, x, r[x])
        }
        return c
    }
    ;
    i3.an1 = function() {
        var Y = [];
        for (var x = 0; x < 256; x++)
            Y.push(x);
        return Y
    }
    ;
    i3.FZ = function(Y, R, V) {
        var E = c8.ZN("CrvA", R);
        if (V.length < 256)
            E.Crv = {
                t: "VlLs",
                v: V
            };
        else {
            E.Mpng = {
                t: "VlLs",
                v: []
            };
            for (var x = 0; x < 256; x++)
                E.Mpng.v[x] = {
                    t: "long",
                    v: V[x]
                }
        }
        E = {
            t: "Objc",
            v: E
        };
        var r = Y.Adjs.v
          , K = c8.xk(r, R);
        if (K == -1)
            r.push(E);
        else
            r[K] = E
    }
    ;
    i3.k3 = function(Y, R) {
        var V = Y.Adjs.v
          , E = c8.xk(V, R);
        if (E == -1) {
            if (V.length == 0 || V[0].v.Crv)
                return [w.Mq.t2(0, 0, !0), w.Mq.t2(255, 255, !0)];
            var r = [];
            for (var x = 0; x < 256; x++)
                r.push(x);
            return r
        }
        var K = V[E].v
          , J = K.Crv;
        if (J)
            return J.v;
        var r = [];
        for (var x = 0; x < 256; x++)
            r.push(K.Mpng.v[x].v);
        return r
    }
    ;
    i3.VP = function(Y, R) {
        var V = []
          , E = f.hy(Y, R);
        R += 2;
        for (var r = 0; r < E; r++) {
            var K = f.hy(Y, R);
            R += 2;
            var J = f.hy(Y, R);
            R += 2;
            V.push(J, K)
        }
        return V
    }
    ;
    i3.a4U = function(Y, R, V) {
        var E = V.length / 2;
        f.L8(Y, R, E);
        R += 2;
        for (var r = 0; r < E; r++) {
            f.L8(Y, R, V[r * 2 + 1]);
            R += 2;
            f.L8(Y, R, V[r * 2 + 0]);
            R += 2
        }
    }
    ;
    i3.abW = function(Y, R) {
        var V = [];
        for (var x = 0; x < 256; x++)
            V.push(Y[R + x]);
        return V
    }
    ;
    i3.a76 = function(Y, R, V) {
        Y.ZK(R, 256);
        for (var x = 0; x < 256; x++)
            Y.data[R + x] = V[x]
    }
    ;
    i3.U_ = function(Y, R, V) {
        var E = [];
        for (var x = 0; x < 4; x++) {
            var r = i3.k3(V, x);
            if (r.length == 256)
                E.push(r);
            else {
                var K = [];
                for (var J = 0; J < r.length; J++)
                    K.push(r[J].v.Hrzn.v, r[J].v.Vrtc.v);
                E.push(K)
            }
        }
        var t = R
          , C = E[0].length == 256 ? 1 : 0;
        Y.ZK(R, 3);
        Y.data[R] = C;
        Y.data[R + 1] = 0;
        Y.data[R + 2] = 1;
        R += 3;
        f.$M(Y, R, 15);
        R += 4;
        for (var x = 0; x < 4; x++) {
            var c = E[x];
            if (C == 0) {
                i3.a4U(Y, R, c);
                R += 2 + 2 * c.length
            } else {
                i3.a76(Y, R, c);
                R += 256
            }
        }
        return R - t
    }
    ;