function c8() {}
    c8.nX = function(Y) {
        var R = new Uint8Array(Y)
          , V = 2
          , E = [];
        for (var x = 0; x < 29; x++) {
            var r = [];
            E.push(r);
            for (var K = 0; K < 5; K++)
                r.push(f.hy(R, V + x * 10 + K * 2))
        }
        V += 29 * 10;
        if (V < R.length) {
            var J = f.rc(R, V, 4);
            V += 4;
            var t = f.hy(R, V);
            V += 2;
            var C = f.hy(R, V);
            V += 2;
            var c = C - 29;
            for (var x = 0; x < c; x++) {
                var r = [];
                E.push(r);
                for (var K = 0; K < 5; K++)
                    r.push(f.hy(R, V + x * 10 + K * 2))
            }
        }
        var M = h2.WL("levl");
        for (var x = 0; x < 4; x++)
            c8.FZ(M, x, E[x]);
        return M
    }
    ;
    c8.ZN = function(Y, x) {
        var R = ["Cmps", "Rd", "Grn", "Bl"]
          , V = {
            t: "obj ",
            v: [{
                t: "Enmr",
                v: {
                    classID: "Chnl",
                    typeID: "Chnl",
                    enum: R[x]
                }
            }]
        };
        return {
            classID: Y,
            Chnl: V
        }
    }
    ;
    c8.xk = function(Y, R) {
        var V = {
            Cmps: 0,
            Rd: 1,
            Grn: 2,
            Bl: 3
        };
        for (var x = 0; x < Y.length; x++) {
            var E = Y[x].v
              , r = V[E.Chnl.v[0].v.enum];
            if (r == R)
                return x
        }
        return -1
    }
    ;
    c8.FZ = function(Y, R, V) {
        var E = c8.ZN("LvlA", R);
        E.Inpt = {
            t: "VlLs",
            v: [{
                t: "long",
                v: V[0]
            }, {
                t: "long",
                v: V[1]
            }]
        };
        E.Otpt = {
            t: "VlLs",
            v: [{
                t: "long",
                v: V[2]
            }, {
                t: "long",
                v: V[3]
            }]
        };
        E.Gmm = {
            t: "doub",
            v: V[4] / 100
        };
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
    c8.k3 = function(Y, R) {
        var V = [0, 255, 0, 255, 100]
          , E = Y.Adjs.v
          , r = c8.xk(E, R);
        if (r == -1)
            return V;
        var K = E[r].v;
        if (K.Inpt) {
            V[0] = K.Inpt.v[0].v;
            V[1] = K.Inpt.v[1].v
        }
        if (K.Otpt) {
            V[2] = K.Otpt.v[0].v;
            V[3] = K.Otpt.v[1].v
        }
        if (K.Gmm) {
            V[4] = Math.round(K.Gmm.v * 100)
        }
        return V
    }
    ;
    c8.wc = function(Y, R) {
        var V = []
          , E = 0;
        for (var x = 0; x < 4; x++)
            V.push(c8.k3(R, x));
        while (V.length < 29)
            V.push([0, 255, 0, 255, 100]);
        Y.ZK(0, 2 + 10 * 29);
        f.Yk(Y.data, E, 2);
        E += 2;
        for (var x = 0; x < 29; x++) {
            var r = V[x];
            for (var K = 0; K < 5; K++)
                f.Yk(Y.data, E + x * 10 + K * 2, r[K])
        }
        E += 29 * 10;
        if (V.length == 29)
            return E;
        Y.ZK(E, 8 + 10 * (V.length - 29));
        f.Xw(Y.data, E, "Lvls");
        E += 4;
        f.Yk(Y.data, E, 3);
        E += 2;
        f.Yk(Y.data, E, V.length);
        E += 2;
        var J = V.length - 29;
        for (var x = 0; x < J; x++) {
            var r = V[29 + x];
            for (var K = 0; K < 5; K++)
                f.Yk(Y.data, E + x * 10 + K * 2, r[K])
        }
        E += 10 * J;
        return E
    }
    ;