function a3() {}
    a3.WL = function() {
        return {
            WC: new gE(0,0,50,50),
            $Y: "",
            u1: "play",
            N: w.Y.o3.ec([.1, .1, .9, .5, .1, .9], 0)
        }
    }
    ;
    a3.nX = function(Y) {
        Y = new Uint8Array(Y);
        var R = 0
          , V = []
          , E = Date.now()
          , r = f.rc(Y, 0, 4);
        R += 4;
        var K = f.n(Y, R);
        R += 4;
        var J = f.n(Y, R);
        R += 4;
        for (var x = 0; x < J; x++) {
            var t = f.Va(Y, R);
            R += t.length * 2 + 4 + 2;
            if ((t.length & 1) == 0)
                R += 2;
            R = a3.X8(Y, R, t, V)
        }
        return V
    }
    ;
    a3.X8 = function(Y, R, V, E) {
        var r = f.n(Y, R);
        R += 4;
        var K = f.n(Y, R);
        R += 4;
        var J = R
          , t = f.na(Y, J).UL;
        J += t.length + 1;
        var C = f.kC(Y, J);
        J += 16;
        var c = a3.Vy(Y, J, K - (J - R))
          , M = w.Y.ir(c)
          , a = w.H.Hh(M)
          , Q = 1 / a.d
          , A = 1 / a.b;
        w.Y.DS(c, new bF(Q,0,0,A,-a.x * Q,-a.y * A));
        E.push({
            u1: V,
            $Y: t,
            N: c,
            WC: C
        });
        R += K;
        return R
    }
    ;
    a3.MW = function(Y, R) {
        Y.u1 = R
    }
    ;
    a3.wc = function(Y) {
        var R = new ez
          , V = 0;
        f.ZF(R, V, "cush");
        V += 4;
        f.$M(R, V, 2);
        V += 4;
        f.$M(R, V, Y.length);
        V += 4;
        for (var x = 0; x < Y.length; x++) {
            var E = Y[x]
              , r = E.u1 + "\0";
            f.m8(R, V, r);
            V += 4 + r.length * 2;
            if ((r.length & 1) == 1)
                V += 2;
            f.$M(R, V, 1);
            V += 4;
            V += 4;
            var K = V;
            f.vS(R, V, E.$Y);
            V += E.$Y.length + 1;
            f.Sg(R, V, E.WC);
            V += 16;
            R.ZK(V, E.N.length * 26);
            a3.$R(R.data, V, E.N, 1, 1);
            V += E.N.length * 26;
            var J = V - K;
            if ((J & 3) != 0)
                J += 4 - (J & 3);
            f.$M(R, K - 4, J);
            V = K + J
        }
        return R.data.slice(0, V).buffer
    }
    ;
    a3.Vy = function(Y, R, V, E, r) {
        if (E == null)
            E = 1;
        if (r == null)
            r = 1;
        var K = f.Y3
          , J = f.ag2
          , t = []
          , C = Math.floor(V / 26);
        for (var x = 0; x < C; x++) {
            var c = R + x * 26
              , M = {}
              , a = 0;
            t.push(M);
            M.type = K(Y, c);
            c += 2;
            if (M.type == 6) {
                a = 24
            }
            if (M.type == 8) {
                M.all = K(Y, c);
                c += 2;
                a = 22
            }
            if (M.type == 0 || M.type == 3) {
                M.length = K(Y, c);
                c += 2;
                M.yV = K(Y, c);
                c += 2;
                M.sK = K(Y, c);
                c += 2;
                M.oe = f.n(Y, c);
                c += 4;
                M.SP = f.n(Y, c);
                c += 4;
                a = 10
            }
            if (M.type == 1 || M.type == 2 || M.type == 4 || M.type == 5) {
                var Q, A;
                A = J(Y, c);
                c += 4;
                Q = J(Y, c);
                c += 4;
                M.wJ = new gv(Q * E,A * r);
                A = J(Y, c);
                c += 4;
                Q = J(Y, c);
                c += 4;
                M.Z = new gv(Q * E,A * r);
                A = J(Y, c);
                c += 4;
                Q = J(Y, c);
                c += 4;
                M.Ii = new gv(Q * E,A * r);
                a = 0
            }
            for (var p = 0; p < a; p++)
                if (Y[c + p] != 0) {
                    console.log("Unexpected non-zero byte!", M, p, Y[c + p])
                }
        }
        return t
    }
    ;
    a3.$R = function(Y, R, V, E, r) {
        var K = f.l7
          , J = f.cs
          , t = V.length;
        for (var x = 0; x < t; x++) {
            var C = R + x * 26
              , c = V[x];
            K(Y, C, c.type);
            C += 2;
            if (c.type == 6) {}
            if (c.type == 8)
                K(Y, C, c.all);
            if (c.type == 0 || c.type == 3) {
                K(Y, C, c.length);
                C += 2;
                K(Y, C, c.yV);
                C += 2;
                K(Y, C, c.sK);
                C += 2
            }
            if (c.type == 1 || c.type == 2 || c.type == 4 || c.type == 5) {
                J(Y, C, c.wJ.y / r);
                C += 4;
                J(Y, C, c.wJ.x / E);
                C += 4;
                J(Y, C, c.Z.y / r);
                C += 4;
                J(Y, C, c.Z.x / E);
                C += 4;
                J(Y, C, c.Ii.y / r);
                C += 4;
                J(Y, C, c.Ii.x / E);
                C += 4
            }
        }
    }
    ;