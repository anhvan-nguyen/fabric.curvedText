function w() {}
    w.cw = {};
    w.cP = document.createElement("canvas");
    w.GS = w.cP.getContext("2d");
    w.jC = function(Y, R, V, E, r, K) {
        if (r == null)
            r = K = 0;
        E = Math.log(E) / Math.log(2);
        E = Math.round(E);
        for (var x = 0; x < V; x++)
            for (var J = 0; J < R; J++) {
                var t = x * R + J << 2
                  , C = w.uW(x + K, J + r, E);
                Y[t] = Y[t + 1] = Y[t + 2] = C;
                Y[t + 3] = 255
            }
    }
    ;
    w.uW = function(x, Y, R) {
        return 255 - ((x >>> R) + (Y >>> R) & 1) * 51
    }
    ;
    w.gc = function(Y) {
        var R = Y.toString(16);
        while (R.length < 6)
            R = "0" + R;
        return R
    }
    ;
    w.CU = function(Y) {
        return parseInt(Y, 16)
    }
    ;
    w.te = function(Y) {
        return .3 * Y.h + .59 * Y.l + .11 * Y.O
    }
    ;
    w.Gl = function(Y) {
        return Math.max(Y.h, Y.l, Y.O) - Math.min(Y.h, Y.l, Y.O)
    }
    ;
    w.l6 = function(Y, R, V) {
        return .3 * Y + .59 * R + .11 * V
    }
    ;
    w.ak$ = function(Y, R, V) {
        return Math.max(Y, R, V) - Math.min(Y, R, V)
    }
    ;
    w.kW = function(Y, R) {
        var V = R - Y
          , E = Math.abs(V)
          , r = V - 1
          , K = V + 1;
        if (Math.abs(r) < E)
            V = r;
        else if (Math.abs(K) < E)
            V = K;
        return V
    }
    ;
    w.Es = function(Y, R, V, E) {
        return (R - V) * E / (Y - V)
    }
    ;
    w.Tv = function(Y) {
        return Y < .0031308 ? 12.92 * Y : 1.055 * Math.pow(Y, 1 / 2.4) - .055
    }
    ;
    w.a1p = function(Y) {
        return Y < .04045 ? Y / 12.92 : Math.pow((Y + .055) / 1.055, 2.4)
    }
    ;
    w.afM = function(Y, R) {
        var V = Math.min(Y.length, R.length);
        for (var x = 0; x < V; x += 4) {
            var E = Y[x]
              , r = Y[x + 1]
              , K = Y[x + 2];
            R[x] = 16 + Math.floor(65.481 / 255 * E + 128.553 / 255 * r + 24.966 / 255 * K + .5);
            R[x + 1] = 128 - Math.floor(37.797 / 255 * E - 74.203 / 255 * r + 112 / 255 * K + .5);
            R[x + 2] = 128 + Math.floor(112 / 255 * E - 93.786 / 255 * r - 18.214 / 255 * K + .5);
            R[x + 3] = Y[x + 3]
        }
    }
    ;
    w.t0 = function(Y, R, V) {
        var E = Math.max(Y, R, V)
          , r = Math.min(Y, R, V)
          , K = 0
          , J = 0
          , t = (E + r) * .5;
        if (E != r) {
            var C = E - r;
            J = t > .5 ? C / (2 - (E + r)) : C / (E + r);
            switch (E) {
            case Y:
                K = (R - V) / C + (R < V ? 6 : 0);
                break;
            case R:
                K = (V - Y) / C + 2;
                break;
            case V:
                K = (Y - R) / C + 4;
                break
            }
            K *= 1 / 6
        }
        return {
            ak: K,
            Ve: J,
            Ni: t
        }
    }
    ;
    w.gj = function(Y, R, V) {
        var E, r, K;
        if (R == 0)
            E = r = K = V;
        else {
            var J = V < .5 ? V * (1 + R) : V + R - V * R
              , t = 2 * V - J;
            E = w.y_(t, J, Y + 1 / 3);
            r = w.y_(t, J, Y);
            K = w.y_(t, J, Y - 1 / 3)
        }
        return {
            h: E,
            l: r,
            O: K
        }
    }
    ;
    w.y_ = function(Y, R, V) {
        if (V < 0)
            V += 1;
        if (V > 1)
            V -= 1;
        if (V < 1 / 6)
            return Y + (R - Y) * 6 * V;
        if (V < 1 / 2)
            return R;
        if (V < 2 / 3)
            return Y + (R - Y) * (2 / 3 - V) * 6;
        return Y
    }
    ;
    w.mL = function(Y, R, V) {
        var E = Math.max(Y, R, V), r = Math.min(Y, R, V), K, J, t = E, C = E - r;
        J = E == 0 ? 0 : C / E;
        if (E == r)
            K = 0;
        else {
            switch (E) {
            case Y:
                K = (R - V) / C + (R < V ? 6 : 0);
                break;
            case R:
                K = (V - Y) / C + 2;
                break;
            case V:
                K = (Y - R) / C + 4;
                break
            }
            K *= 1 / 6
        }
        return {
            ak: K,
            Ve: J,
            U9: t
        }
    }
    ;
    w.Bx = function(Y, R, V) {
        var E, r, K, x, J, t, C, c;
        x = Math.floor(Y * 6);
        J = Y * 6 - x;
        t = V * (1 - R);
        C = V * (1 - J * R);
        c = V * (1 - (1 - J) * R);
        switch (x % 6) {
        case 0:
            E = V,
            r = c,
            K = t;
            break;
        case 1:
            E = C,
            r = V,
            K = t;
            break;
        case 2:
            E = t,
            r = V,
            K = c;
            break;
        case 3:
            E = t,
            r = C,
            K = V;
            break;
        case 4:
            E = c,
            r = t,
            K = V;
            break;
        case 5:
            E = V,
            r = t,
            K = C;
            break
        }
        return {
            h: E,
            l: r,
            O: K
        }
    }
    ;
    w.im = function() {
        var Y = []
          , R = [];
        for (var x = 0; x < 2e3; x++) {
            var V = x / 1e3;
            Y[x] = w.a1p(V);
            R[x] = V > .008856 ? Math.pow(V, 1 / 3) : (903.3 * V + 16) * (1 / 116)
        }
        return [Y, R]
    }();
    w.Rp = function(Y, R, V) {
        var E = w.im[0]
          , r = w.im[1];
        Y = E[~~(Y * (1e3 / 255))];
        R = E[~~(R * (1e3 / 255))];
        V = E[~~(V * (1e3 / 255))];
        var K = w.RK.a7y
          , J = K[0] * Y + K[1] * R + K[2] * V
          , t = K[4] * Y + K[5] * R + K[6] * V
          , C = K[8] * Y + K[9] * R + K[10] * V;
        J = J * (100 / 96.72);
        t = t * (100 / 100);
        C = C * (100 / 81.427);
        return w.Ic(J, t, C)
    }
    ;
    w.Ic = function(Y, R, V) {
        var E = w.im[1]
          , r = E[~~(Y * 1e3)]
          , K = E[~~(R * 1e3)]
          , J = E[~~(V * 1e3)];
        return {
            Nz: 116 * K - 16,
            o: 500 * (r - K),
            O: 200 * (K - J)
        }
    }
    ;
    w.QP = function(Y, R, V) {
        var E = 903.3
          , r = .008856
          , K = (Y + 16) / 116
          , J = K * K * K
          , t = K - V / 200
          , C = t * t * t
          , c = R / 500 + K
          , M = c * c * c
          , a = C > r ? C : (116 * t - 16) / E
          , Q = J > r ? J : (116 * K - 16) / E
          , A = M > r ? M : (116 * c - 16) / E
          , p = A * 96.72
          , v = Q * 100
          , W = a * 81.427
          , n = w.RK.LA(w.RK.B2, [p / 100, v / 100, W / 100, 0]);
        for (var x = 0; x < 4; x++)
            n[x] = Math.max(0, Math.min(255, w.Tv(n[x]) * 255));
        return {
            h: n[0],
            l: n[1],
            O: n[2]
        }
    }
    ;
    w.oH = function(Y, R, V, E, r) {
        var K = Y.Nz
          , J = Y.o
          , t = Y.O
          , C = (K < R.Nz ? R.Nz - K : V.Nz < K ? V.Nz - K : 0) * (1 / 100)
          , c = (J < R.o ? R.o - J : V.o < J ? V.o - J : 0) * (1 / 116)
          , M = (t < R.O ? R.O - t : V.O < t ? V.O - t : 0) * (1 / 116)
          , a = Math.sqrt(C * C + c * c + M * M) * 1.35;
        return a <= E ? Math.min(1, 1.17 * (1 - a * r)) : 0
    }
    ;
    w.ds = function(Y, R, V) {
        var E = R - w.te(Y);
        V.h = Y.h + E;
        V.l = Y.l + E;
        V.O = Y.O + E;
        w.a5j(V)
    }
    ;
    w.Yu = function(Y, R, V) {
        var E = Y.h
          , r = Y.l
          , K = Y.O;
        if (E == r && r == K) {
            V.h = V.l = V.O = 0
        } else if (E > r) {
            if (E > K) {
                if (r > K) {
                    V.h = R;
                    V.l = w.Es(E, r, K, R);
                    V.O = 0
                } else {
                    V.h = R;
                    V.O = w.Es(E, K, r, R);
                    V.l = 0
                }
            } else {
                V.O = R;
                V.h = w.Es(K, E, r, R);
                V.l = 0
            }
        } else {
            if (E < K) {
                if (r > K) {
                    V.l = R;
                    V.O = w.Es(r, K, E, R);
                    V.h = 0
                } else {
                    V.O = R;
                    V.l = w.Es(K, r, E, R);
                    V.h = 0
                }
            } else {
                V.l = R;
                V.h = w.Es(r, E, K, R);
                V.O = 0
            }
        }
    }
    ;
    w.a5j = function(Y) {
        var R = Y.h
          , V = Y.l
          , E = Y.O
          , r = w.l6(R, V, E)
          , z = Math.min(R, V, E)
          , K = Math.max(R, V, E);
        if (z < 0) {
            var J = r / (r - z);
            R = r + (R - r) * J;
            V = r + (V - r) * J;
            E = r + (E - r) * J
        }
        if (K > 1) {
            var J = (1 - r) / (K - r);
            R = r + (R - r) * J;
            V = r + (V - r) * J;
            E = r + (E - r) * J
        }
        Y.h = R;
        Y.l = V;
        Y.O = E
    }
    ;
    w.f6 = function(Y, R, V) {
        var E = Y.length
          , r = .3
          , K = .59
          , J = .11;
        if (V) {
            r = V[0];
            K = V[1];
            J = V[2]
        }
        for (var x = 0; x < E; x += 4)
            R[x >> 2] = ~~(Y[x + 0] * r + Y[x + 1] * K + Y[x + 2] * J + .5)
    }
    ;
    w.MH = function(Y, R) {
        var V = R.length;
        for (var x = 0; x < V; x += 4) {
            var E = Y[x >>> 2];
            R[x] = E;
            R[x + 1] = E;
            R[x + 2] = E
        }
    }
    ;
    w.JX = function(Y, R) {
        var V = Y.o
          , E = Y.h
          , r = Y.l
          , K = Y.O
          , J = Math.min(Y.o.length, R.buffer.byteLength >>> 2)
          , t = 4 * Math.floor(J / 4)
          , C = new Uint32Array(R.buffer)
          , c = new Uint32Array(V.buffer)
          , M = new Uint32Array(E.buffer)
          , a = new Uint32Array(r.buffer)
          , Q = new Uint32Array(K.buffer);
        for (var x = 0; x < t; x += 4) {
            var A = c[x >> 2]
              , p = Q[x >> 2]
              , v = a[x >> 2]
              , W = M[x >> 2];
            C[x] = A << 24 | (p & 255) << 16 | (v & 255) << 8 | W & 255;
            C[x + 1] = (A & 65280) << 16 | (p & 65280) << 8 | v & 65280 | (W & 65280) >>> 8;
            C[x + 2] = (A & 16711680) << 8 | p & 16711680 | (v & 16711680) >>> 8 | (W & 16711680) >>> 16;
            C[x + 3] = A & 4278190080 | (p & 4278190080) >>> 8 | (v & 4278190080) >>> 16 | (W & 4278190080) >>> 24
        }
        for (var x = t; x < J; x++)
            C[x] = V[x] << 24 | K[x] << 16 | r[x] << 8 | E[x]
    }
    ;
    w.jW = function(Y, R) {
        var V = R.o
          , E = R.h
          , r = R.l
          , K = R.O
          , J = Math.min(R.o.length, Y.buffer.byteLength >>> 2)
          , t = 4 * Math.floor(J / 4)
          , C = new Uint32Array(Y.buffer)
          , c = new Uint32Array(V.buffer)
          , M = new Uint32Array(E.buffer)
          , a = new Uint32Array(r.buffer)
          , Q = new Uint32Array(K.buffer);
        for (var x = 0; x < t; x += 4) {
            var A = C[x]
              , p = C[x + 1]
              , v = C[x + 2]
              , W = C[x + 3];
            M[x >> 2] = A & 255 | (p & 255) << 8 | (v & 255) << 16 | W << 24;
            a[x >> 2] = (A & 65280) >> 8 | p & 65280 | (v & 65280) << 8 | (W & 65280) << 16;
            Q[x >> 2] = (A & 16711680) >> 16 | (p & 16711680) >> 8 | v & 16711680 | (W & 16711680) << 8;
            c[x >> 2] = A >>> 24 | p >>> 24 << 8 | v >>> 24 << 16 | W & 4278190080
        }
        for (var x = t; x < J; x++) {
            var n = C[x];
            E[x] = n >> 0 & 255;
            r[x] = n >> 8 & 255;
            K[x] = n >> 16 & 255;
            V[x] = n >> 24 & 255
        }
    }
    ;
    w.vH = function(Y, R, V) {
        var E = new Uint8Array(Y.buffer)
          , r = Math.min(E.length / 4, R.length);
        for (var x = 0; x < r; x++) {
            R[x] = E[(x << 2) + V]
        }
    }
    ;
    w.hL = function(Y, R, V) {
        var E = new Uint8Array(R.buffer)
          , r = new Uint32Array(Y.buffer)
          , K = Math.min(E.length / 4, Y.length)
          , x = 0;
        while (x + 4 < K) {
            var J = r[x >>> 2];
            E[(x << 2) + V] = J & 255;
            E[(x << 2) + V + 4] = J >>> 8 & 255;
            E[(x << 2) + V + 8] = J >>> 16 & 255;
            E[(x << 2) + V + 12] = J >>> 24;
            x += 4
        }
        while (x < K) {
            E[(x << 2) + V] = Y[x];
            x++
        }
    }
    ;
    w.h3 = function(Y, R, V) {
        if (V == null)
            V = 0;
        var E = new Uint32Array(Y.buffer)
          , r = E.length;
        for (var x = 0; x < r; x++)
            E[x] = E[x] & V | R
    }
    ;
    w.ann = function(Y, R, V, E, r) {
        if (r == null)
            r = 0;
        var K = new Uint32Array(Y.buffer);
        V = V.Cy(R);
        var J = V.x - R.x
          , t = V.y - R.y
          , C = V.d
          , c = V.b
          , M = R.d;
        for (var a = 0; a < c; a++) {
            var x = (t + a) * M + J;
            for (var Q = 0; Q < C; Q++) {
                K[x] = K[x] & r | E;
                x++
            }
        }
    }
    ;
    w.Jc = function(Y, R) {
        var V = Math.min(Y.buffer.byteLength, R.buffer.byteLength)
          , E = V >>> 2
          , Y = new Uint32Array(Y.buffer,0,E)
          , R = new Uint32Array(R.buffer,0,E);
        R.set(Y)
    }
    ;
    w.yU = function(Y, R) {
        var V = Y.buffer.byteLength
          , E = R.buffer.byteLength
          , r = new Uint32Array(Y.buffer,0,V >> 2)
          , K = new Uint32Array(R.buffer,0,E >> 2);
        if (V != E)
            return !1;
        var J = r.length;
        for (var x = 0; x < J; x++)
            if (K[x] != r[x])
                return !1;
        return !0
    }
    ;
    w.tb = function(Y) {
        var R = new Uint32Array(Y.buffer)
          , V = R.length;
        for (var x = 0; x < V; x++)
            R[x] = ~R[x]
    }
    ;
    w.a5k = function(Y) {
        var R = Y.length;
        for (var x = 0; x < R; x += 4) {
            Y[x] = ~Y[x];
            Y[x + 1] = ~Y[x + 1];
            Y[x + 2] = ~Y[x + 2]
        }
    }
    ;
    w.abJ = function(Y) {
        var R = Y.length;
        for (var x = 3; x < R; x += 4)
            Y[x] = ~Y[x]
    }
    ;
    w.aa_ = function(Y) {
        return Y + (Y % 4 == 0 ? 0 : 4 - Y % 4)
    }
    ;
    w.T = function(Y, R) {
        if (R == null)
            R = !1;
        if (!R)
            Y = w.aa_(Y);
        try {
            var V = new Uint8Array(Y)
        } catch (em) {
            alert("Not enough RAM! (need " + Math.round(Y / (1 << 20)) + " MB)", 7e3);
            throw "low_ram"
        }
        return V
    }
    ;
    w.A0 = function(Y) {
        var R = Y.length
          , V = Y[R - 2]
          , E = Y[R - 1];
        while (E.d >= 2 && E.b >= 2) {
            var r = w.ry(V, E);
            Y.push(r.uG, r.rect);
            V = r.uG;
            E = r.rect
        }
    }
    ;
    w.gz = function(Y) {
        var R = Y.length
          , V = Y[R - 2]
          , E = Y[R - 1];
        while (E.d >= 2 && E.b >= 2) {
            var r = w.t_(V, E);
            Y.push(r.uG, r.rect);
            V = r.uG;
            E = r.rect
        }
    }
    ;
    w.ry = function(Y, R, V) {
        var E = R.d
          , r = R.b
          , K = E >> 1
          , J = r >> 1
          , t = new gE(R.x,R.y,K,J)
          , C = V && V.length == K * J * 4 ? V : w.T(K * J * 4)
          , c = new Uint32Array(Y.buffer)
          , M = new Uint32Array(C.buffer);
        for (var a = 0; a < J; a++)
            for (var Q = 0; Q < K; Q++) {
                var A = a * K + Q
                  , p = (a << 1) * E + (Q << 1)
                  , v = c[p]
                  , W = c[p + 1]
                  , n = c[p + E]
                  , $ = c[p + E + 1]
                  , G = v >>> 24
                  , o = W >>> 24
                  , B = n >>> 24
                  , L = $ >>> 24
                  , u = G + o + B + L;
                if (u == 1020) {
                    var y = (v >>> 0 & 255) + (W >>> 0 & 255) + (n >>> 0 & 255) + ($ >>> 0 & 255) + 2 >>> 2
                      , S = (v >>> 8 & 255) + (W >>> 8 & 255) + (n >>> 8 & 255) + ($ >>> 8 & 255) + 2 >>> 2
                      , X = (v >>> 16 & 255) + (W >>> 16 & 255) + (n >>> 16 & 255) + ($ >>> 16 & 255) + 2 >>> 2;
                    M[A] = 255 << 24 | X << 16 | S << 8 | y
                } else if (u == 0)
                    M[A] = 0;
                else {
                    var y = (v >>> 0 & 255) * G + (W >>> 0 & 255) * o + (n >>> 0 & 255) * B + ($ >>> 0 & 255) * L
                      , S = (v >>> 8 & 255) * G + (W >>> 8 & 255) * o + (n >>> 8 & 255) * B + ($ >>> 8 & 255) * L
                      , X = (v >>> 16 & 255) * G + (W >>> 16 & 255) * o + (n >>> 16 & 255) * B + ($ >>> 16 & 255) * L
                      , N = 1 / u;
                    y = ~~(y * N + .5);
                    S = ~~(S * N + .5);
                    X = ~~(X * N + .5);
                    M[A] = u + 2 >>> 2 << 24 | X << 16 | S << 8 | y
                }
            }
        return {
            rect: t,
            uG: C
        }
    }
    ;
    w.eJ = function(Y, R, V) {
        var E = R.d
          , r = R.b
          , K = E >> 1
          , J = r >> 1
          , t = new gE(R.x,R.y,K,J)
          , C = V && V.length == K * J * 4 ? V : w.T(K * J * 4)
          , c = new Uint32Array(Y.buffer)
          , M = new Uint32Array(C.buffer);
        for (var a = 0; a < J; a++)
            for (var Q = 0; Q < K; Q++) {
                var A = a * K + Q
                  , p = (a << 1) * E + (Q << 1)
                  , v = c[p]
                  , W = c[p + 1]
                  , n = c[p + E]
                  , $ = c[p + E + 1]
                  , G = 2 + (v >>> 0 & 255) + (W >>> 0 & 255) + (n >>> 0 & 255) + ($ >>> 0 & 255) >>> 2
                  , o = 2 + (v >>> 8 & 255) + (W >>> 8 & 255) + (n >>> 8 & 255) + ($ >>> 8 & 255) >>> 2
                  , B = 2 + (v >>> 16 & 255) + (W >>> 16 & 255) + (n >>> 16 & 255) + ($ >>> 16 & 255) >>> 2
                  , L = 2 + (v >>> 24 & 255) + (W >>> 24 & 255) + (n >>> 24 & 255) + ($ >>> 24 & 255) >>> 2;
                M[A] = L << 24 | B << 16 | o << 8 | G
            }
        return {
            rect: t,
            uG: C
        }
    }
    ;
    w.a8R = function(Y, R, V) {
        var E = R.d
          , r = R.b
          , K = 2 * Math.floor(E / 3)
          , J = 2 * Math.floor(r / 3)
          , t = new gE(R.x,R.y,K,J)
          , C = V && V.length == K * J * 4 ? V : w.T(K * J * 4)
          , c = new Uint32Array(Y.buffer)
          , M = new Uint32Array(C.buffer);
        for (var a = 0; a < J; a += 2)
            for (var Q = 0; Q < K; Q += 2) {
                var A = a * K + Q
                  , p = (a * 3 >>> 1) * E + (Q * 3 >>> 1)
                  , v = c[p]
                  , W = c[p + 1]
                  , n = c[p + 2]
                  , $ = c[p + E]
                  , G = c[p + 1 + E]
                  , o = c[p + 2 + E]
                  , B = c[p + E + E]
                  , L = c[p + 1 + E + E]
                  , u = c[p + 2 + E + E]
                  , y = v >>> 24 << 2
                  , S = (v >>> 16 & 255) * y
                  , X = (v >>> 8 & 255) * y
                  , N = (v & 255) * y
                  , k = W >>> 24 << 1
                  , d = (W >>> 16 & 255) * k
                  , P = (W >>> 8 & 255) * k
                  , Z = (W & 255) * k
                  , s = n >>> 24 << 2
                  , _ = (n >>> 16 & 255) * s
                  , b = (n >>> 8 & 255) * s
                  , q = (n & 255) * s
                  , e = $ >>> 24 << 1
                  , g = ($ >>> 16 & 255) * e
                  , F = ($ >>> 8 & 255) * e
                  , l = ($ & 255) * e
                  , i = G >>> 24
                  , aM = (G >>> 16 & 255) * i
                  , H = (G >>> 8 & 255) * i
                  , iP = (G & 255) * i
                  , hq = o >>> 24 << 1
                  , iG = (o >>> 16 & 255) * hq
                  , h = (o >>> 8 & 255) * hq
                  , dw = (o & 255) * hq
                  , eK = B >>> 24 << 2
                  , f9 = (B >>> 16 & 255) * eK
                  , gn = (B >>> 8 & 255) * eK
                  , d$ = (B & 255) * eK
                  , dJ = L >>> 24 << 1
                  , br = (L >>> 16 & 255) * dJ
                  , hE = (L >>> 8 & 255) * dJ
                  , gN = (L & 255) * dJ
                  , aK = u >>> 24 << 2
                  , dL = (u >>> 16 & 255) * aK
                  , aQ = (u >>> 8 & 255) * aK
                  , d3 = (u & 255) * aK
                  , b9 = y + k + e + i
                  , ap = s + k + hq + i
                  , fS = eK + dJ + e + i
                  , bG = aK + dJ + hq + i
                  , cH = b9 == 0 ? 0 : 1 / b9
                  , bq = ap == 0 ? 0 : 1 / ap
                  , hO = fS == 0 ? 0 : 1 / fS
                  , gD = bG == 0 ? 0 : 1 / bG
                  , ds = 0
                  , cR = 0
                  , ah = 0
                  , cu = 0;
                ds = ~~(.5 + (N + Z + l + iP) * cH);
                cR = ~~(.5 + (X + P + F + H) * cH);
                ah = ~~(.5 + (S + d + g + aM) * cH);
                cu = ~~(.5 + b9 * (1 / 9));
                M[A] = cu << 24 | ah << 16 | cR << 8 | ds;
                ds = ~~(.5 + (q + Z + dw + iP) * bq);
                cR = ~~(.5 + (b + P + h + H) * bq);
                ah = ~~(.5 + (_ + d + iG + aM) * bq);
                cu = ~~(.5 + ap * (1 / 9));
                M[A + 1] = cu << 24 | ah << 16 | cR << 8 | ds;
                ds = ~~(.5 + (d$ + gN + l + iP) * hO);
                cR = ~~(.5 + (gn + hE + F + H) * hO);
                ah = ~~(.5 + (f9 + br + g + aM) * hO);
                cu = ~~(.5 + fS * (1 / 9));
                M[A + K] = cu << 24 | ah << 16 | cR << 8 | ds;
                ds = ~~(.5 + (d3 + gN + dw + iP) * gD);
                cR = ~~(.5 + (aQ + hE + h + H) * gD);
                ah = ~~(.5 + (dL + br + iG + aM) * gD);
                cu = ~~(.5 + bG * (1 / 9));
                M[A + K + 1] = cu << 24 | ah << 16 | cR << 8 | ds
            }
        return {
            rect: t,
            uG: C
        }
    }
    ;
    w.aeo = function(Y, R, V) {
        var E = R.d
          , r = R.b
          , K = 2 * Math.floor(E / 3)
          , J = 2 * Math.floor(r / 3)
          , t = new gE(R.x,R.y,K,J)
          , C = V && V.length == K * J * 4 ? V : w.T(K * J * 4)
          , c = new Uint32Array(Y.buffer)
          , M = new Uint32Array(C.buffer);
        for (var a = 0; a < J; a += 2)
            for (var Q = 0; Q < K; Q += 2) {
                var A = a * K + Q
                  , p = (a * 3 >>> 1) * E + (Q * 3 >>> 1)
                  , v = c[p]
                  , W = c[p + 1]
                  , n = c[p + 2]
                  , $ = c[p + E]
                  , G = c[p + 1 + E]
                  , o = c[p + 2 + E]
                  , B = c[p + E + E]
                  , L = c[p + 1 + E + E]
                  , u = c[p + 2 + E + E]
                  , y = (v >>> 16 & 255) << 2
                  , S = (v >>> 8 & 255) << 2
                  , X = (v & 255) << 2
                  , N = (W >>> 16 & 255) << 1
                  , k = (W >>> 8 & 255) << 1
                  , d = (W & 255) << 1
                  , P = (n >>> 16 & 255) << 2
                  , Z = (n >>> 8 & 255) << 2
                  , s = (n & 255) << 2
                  , _ = ($ >>> 16 & 255) << 1
                  , b = ($ >>> 8 & 255) << 1
                  , q = ($ & 255) << 1
                  , e = G >>> 16 & 255
                  , g = G >>> 8 & 255
                  , F = G & 255
                  , l = (o >>> 16 & 255) << 1
                  , i = (o >>> 8 & 255) << 1
                  , aM = (o & 255) << 1
                  , H = (B >>> 16 & 255) << 2
                  , iP = (B >>> 8 & 255) << 2
                  , hq = (B & 255) << 2
                  , iG = (L >>> 16 & 255) << 1
                  , h = (L >>> 8 & 255) << 1
                  , dw = (L & 255) << 1
                  , eK = (u >>> 16 & 255) << 2
                  , f9 = (u >>> 8 & 255) << 2
                  , gn = (u & 255) << 2
                  , d$ = 0
                  , dJ = 0
                  , br = 0;
                d$ = ~~(.5 + (X + d + q + F) * (1 / 9));
                dJ = ~~(.5 + (S + k + b + g) * (1 / 9));
                br = ~~(.5 + (y + N + _ + e) * (1 / 9));
                M[A] = 255 << 24 | br << 16 | dJ << 8 | d$;
                d$ = ~~(.5 + (s + d + aM + F) * (1 / 9));
                dJ = ~~(.5 + (Z + k + i + g) * (1 / 9));
                br = ~~(.5 + (P + N + l + e) * (1 / 9));
                M[A + 1] = 255 << 24 | br << 16 | dJ << 8 | d$;
                d$ = ~~(.5 + (hq + dw + q + F) * (1 / 9));
                dJ = ~~(.5 + (iP + h + b + g) * (1 / 9));
                br = ~~(.5 + (H + iG + _ + e) * (1 / 9));
                M[A + K] = 255 << 24 | br << 16 | dJ << 8 | d$;
                d$ = ~~(.5 + (gn + dw + aM + F) * (1 / 9));
                dJ = ~~(.5 + (f9 + h + i + g) * (1 / 9));
                br = ~~(.5 + (eK + iG + l + e) * (1 / 9));
                M[A + K + 1] = 255 << 24 | br << 16 | dJ << 8 | d$
            }
        return {
            rect: t,
            uG: C
        }
    }
    ;
    w.mo = function(Y) {
        var R = 255
          , V = Y.length;
        V -= V & 31;
        for (var x = 3; x < V; x += 32)
            R = R & Y[x] & Y[x + 4] & Y[x + 8] & Y[x + 12] & Y[x + 16] & Y[x + 20] & Y[x + 24] & Y[x + 28];
        return R != 255
    }
    ;
    w.Zh = function(Y, R, V, E) {
        var r = w.ry
          , K = w.a8R
          , t = 0;
        if (!w.mo(Y)) {
            r = w.eJ;
            K = w.aeo
        }
        var J = {
            uG: Y,
            rect: R
        }
          , C = V;
        while (C < .499) {
            t++;
            C *= 2
        }
        for (var x = 0; x < t; x++)
            J = r(J.uG, J.rect, E);
        if (C < .5001)
            J = r(J.uG, J.rect, E);
        else
            J = K(J.uG, J.rect, E);
        return J
    }
    ;
    w.a8U = function(Y, R, V, E) {
        var r = w.t_
          , K = w.X4
          , J = {
            uG: Y,
            rect: R
        }
          , t = 0
          , C = V;
        while (C < .499) {
            t++;
            C *= 2
        }
        for (var x = 0; x < t; x++)
            J = r(J.uG, J.rect, E);
        if (C < .5001)
            J = r(J.uG, J.rect, E);
        else
            J = K(J.uG, J.rect, E);
        return J
    }
    ;
    w.t_ = function(Y, R, V) {
        var E = R.d
          , r = R.b
          , K = E >> 1
          , J = r >> 1
          , t = new gE(R.x,R.y,K,J);
        if (Y == null)
            return {
                rect: t
            };
        var C = V && V.length >= K * J ? V : w.T(K * J);
        for (var c = 0; c < J; c++) {
            var M = c * K;
            for (var a = 0; a < K; a++) {
                var Q = (c << 1) * E + (a << 1);
                C[M + a] = 2 + Y[Q] + Y[Q + 1] + Y[Q + E] + Y[Q + E + 1] >>> 2
            }
        }
        return {
            rect: t,
            uG: C
        }
    }
    ;
    w.X4 = function(Y, R, V) {
        var E = R.d
          , r = R.b
          , K = 2 * Math.floor(E / 3)
          , J = 2 * Math.floor(r / 3)
          , t = new gE(R.x,R.y,K,J);
        if (Y == null)
            return {
                rect: t
            };
        var C = V && V.length >= K * J ? V : w.T(K * J);
        for (var c = 0; c < J; c += 2)
            for (var M = 0; M < K; M += 2) {
                var a = c * K + M
                  , Q = (c * 3 >>> 1) * E + (M * 3 >>> 1)
                  , A = Y[Q] << 2
                  , p = Y[Q + 1] << 1
                  , v = Y[Q + 2] << 2
                  , W = Y[Q + E] << 1
                  , n = Y[Q + 1 + E]
                  , $ = Y[Q + 2 + E] << 1
                  , G = Y[Q + E + E] << 2
                  , o = Y[Q + 1 + E + E] << 1
                  , B = Y[Q + 2 + E + E] << 2;
                C[a] = ~~(.5 + (A + p + W + n) * (1 / 9));
                C[a + 1] = ~~(.5 + (v + p + $ + n) * (1 / 9));
                C[a + K] = ~~(.5 + (G + o + W + n) * (1 / 9));
                C[a + K + 1] = ~~(.5 + (B + o + $ + n) * (1 / 9))
            }
        return {
            rect: t,
            uG: C
        }
    }
    ;
    w.md = function(Y, R, V, E, r) {
        var K = R.Cy(E);
        if (r)
            K = K.Cy(r);
        var J = Math.max(0, K.x - R.x)
          , t = Math.max(0, K.x - E.x)
          , C = Math.max(0, K.y - R.y)
          , c = Math.max(0, K.y - E.y)
          , M = K.d
          , a = K.b;
        for (var x = 0; x < a; x++) {
            var Q = (C + x) * R.d + J
              , A = (c + x) * E.d + t;
            for (var p = 0; p < M; p++) {
                V[A + p] = Y[Q + p]
            }
        }
    }
    ;
    w.Uo = function(Y, R, V, E) {
        if (R.yU(E)) {
            w.hL(Y, V, 3);
            return
        }
        var r = R.Cy(E)
          , K = Math.max(0, r.x - R.x)
          , J = Math.max(0, r.x - E.x)
          , t = Math.max(0, r.y - R.y)
          , C = Math.max(0, r.y - E.y)
          , c = r.d
          , M = r.b;
        for (var x = 0; x < M; x++) {
            var a = (t + x) * R.d + K
              , Q = (C + x) * E.d + J;
            for (var A = 0; A < c; A++)
                V[(Q + A << 2) + 3] = Y[a + A]
        }
    }
    ;
    w.vo = function(Y, R, V, E) {
        var r = R.Cy(E)
          , K = Math.max(0, r.x - R.x)
          , J = Math.max(0, r.x - E.x)
          , t = Math.max(0, r.y - R.y)
          , C = Math.max(0, r.y - E.y)
          , c = r.d
          , M = r.b;
        for (var x = 0; x < M; x++) {
            var a = (t + x) * R.d + K
              , Q = (C + x) * E.d + J;
            for (var A = 0; A < c; A++)
                V[Q + A] = Y[(a + A << 2) + 3]
        }
    }
    ;
    w.Vj = function(Y, R, V, E, r) {
        if (R.yU(E) && (r == null || r.yU(E))) {
            w.Jc(Y, V);
            return
        }
        Y = new Uint32Array(Y.buffer),
        V = new Uint32Array(V.buffer);
        var K = R.Cy(E);
        if (r)
            K = K.Cy(r);
        var J = Math.max(0, K.x - R.x)
          , t = Math.max(0, K.x - E.x)
          , C = Math.max(0, K.y - R.y)
          , c = Math.max(0, K.y - E.y)
          , M = K.d
          , a = K.b
          , Q = M & 3
          , A = Q == 0 ? M : M - Q;
        for (var x = 0; x < a; x++) {
            var p = (C + x) * R.d + J
              , v = (c + x) * E.d + t;
            V.set(new Uint32Array(Y.buffer,p * 4,M), v)
        }
    }
    ;
    w.w_ = function(Y, R, V, E) {
        var r = R.Cy(E)
          , K = Math.max(0, r.x - R.x)
          , J = Math.max(0, r.x - E.x)
          , t = Math.max(0, r.y - R.y)
          , C = Math.max(0, r.y - E.y)
          , c = r.d
          , M = r.b
          , a = Y.o
          , Q = Y.h
          , A = Y.l
          , p = Y.O
          , v = V.o
          , W = V.h
          , n = V.l
          , $ = V.O;
        for (var x = 0; x < M; x++) {
            var G = (t + x) * R.d + K
              , o = (C + x) * E.d + J;
            for (var B = 0; B < c; B++) {
                v[o + B] = a[G + B];
                W[o + B] = Q[G + B];
                n[o + B] = A[G + B];
                $[o + B] = p[G + B]
            }
        }
    }
    ;
    w.N8 = function(Y) {
        var R = Y.length;
        for (var x = 0; x < R; x += 4) {
            var V = Y[x + 3];
            Y[x] = ~~(Y[x] * V * (1 / 255) + .5);
            Y[x + 1] = ~~(Y[x + 1] * V * (1 / 255) + .5);
            Y[x + 2] = ~~(Y[x + 2] * V * (1 / 255) + .5)
        }
    }
    ;
    w.Rf = function(Y) {
        var R = Y.length;
        for (var x = 0; x < R; x += 4) {
            var V = Y[x + 3];
            if (V == 0 || V == 255)
                continue;
            var E = 255 / V;
            Y[x] = ~~(Y[x] * E + .5);
            Y[x + 1] = ~~(Y[x + 1] * E + .5);
            Y[x + 2] = ~~(Y[x + 2] * E + .5)
        }
    }
    ;
    w._w = function(Y, R) {
        for (var x = 0; x < Y.length; x++)
            if (Y[x] != R)
                return !1;
        return !0
    }
    ;
    w.o8 = function(Y) {
        return Y + 1 + (Y >>> 8) >>> 8
    }
    ;
    w.round = function(Y, R) {
        if (R == null)
            R = 128;
        var V = Y.length;
        for (var x = 0; x < V; x++)
            Y[x] = Y[x] < R ? 0 : 255
    }
    ;
    w.sH = function(Y, R) {
        var V = Y.length;
        for (var x = 0; x < V; x++)
            Y[x] = Math.round(Y[x] * R)
    }
    ;
    w.Wd = function(Y, R) {
        var V = new Uint32Array(Y.buffer)
          , E = new Uint32Array(R.buffer)
          , r = V.length;
        for (var x = 0; x < r; x++) {
            var K = V[x]
              , J = E[x];
            E[x] = w.o8((K >>> 24) * (J >>> 24)) << 24 | w.o8((K >>> 16 & 255) * (J >>> 16 & 255)) << 16 | w.o8((K >>> 8 & 255) * (J >>> 8 & 255)) << 8 | w.o8((K & 255) * (J & 255))
        }
    }
    ;
    w.IK = function(Y, R) {
        var V = Y.length;
        for (var x = 0; x < V; x++)
            R[(x << 2) + 3] = w.o8(R[(x << 2) + 3] * Y[x])
    }
    ;
    w.acJ = function(Y, R, V, E) {
        var r = Math.max(0, E.x - R.x)
          , K = Math.max(0, R.x - E.x)
          , J = Math.max(0, E.y - R.y)
          , t = Math.max(0, R.y - E.y)
          , C = Math.min(R.x + R.d, E.x + E.d) - Math.max(R.x, E.x)
          , c = Math.min(R.y + R.b, E.y + E.b) - Math.max(R.y, E.y);
        for (var x = 0; x < c; x++) {
            var M = (J + x) * R.d + r
              , a = (t + x) * E.d + K;
            for (var Q = 0; Q < C; Q++) {
                V[a] = w.o8(V[a] * Y[M]);
                M++;
                a++
            }
        }
    }
    ;
    w.Yd = function(Y, R, V, E) {
        var r = Math.max(0, E.x - R.x)
          , K = Math.max(0, R.x - E.x)
          , J = Math.max(0, E.y - R.y)
          , t = Math.max(0, R.y - E.y)
          , C = Math.min(R.x + R.d, E.x + E.d) - Math.max(R.x, E.x)
          , c = Math.min(R.y + R.b, E.y + E.b) - Math.max(R.y, E.y);
        for (var x = 0; x < c; x++) {
            var M = (J + x) * R.d + r
              , a = ((t + x) * E.d + K << 2) + 3;
            for (var Q = 0; Q < C; Q++) {
                V[a] = w.o8(V[a] * Y[M]);
                M++;
                a += 4
            }
        }
    }
    ;
    w._A = function(Y, R, V, E) {
        var r = Math.max(0, E.x - R.x)
          , K = Math.max(0, R.x - E.x)
          , J = Math.max(0, E.y - R.y)
          , t = Math.max(0, R.y - E.y)
          , C = Math.min(R.x + R.d, E.x + E.d) - Math.max(R.x, E.x)
          , c = Math.min(R.y + R.b, E.y + E.b) - Math.max(R.y, E.y);
        for (var x = 0; x < c; x++) {
            var M = ((J + x) * R.d + r << 2) + 3
              , a = ((t + x) * E.d + K << 2) + 3;
            for (var Q = 0; Q < C; Q++) {
                V[a] = w.o8(V[a] * Y[M]);
                M += 4;
                a += 4
            }
        }
    }
    ;
    w.FL = function(Y) {
        var R = new Float64Array(256)
          , V = new Float64Array(256)
          , E = new Float64Array(256)
          , r = new Float64Array(256)
          , K = Y.length
          , J = 0;
        for (var x = 0; x < K; x += 4) {
            var t = Y[x + 3]
              , C = t * (1 / 255);
            V[Y[x + 0]] += C;
            E[Y[x + 1]] += C;
            r[Y[x + 2]] += C;
            J += t
        }
        for (var x = 0; x < 256; x++)
            R[x] = V[x] + E[x] + r[x];
        return [R, V, E, r, K >>> 2, J / 255]
    }
    ;
    w.CI = function(Y, R) {
        var V = new Uint32Array(Y.buffer)
          , E = V.length;
        for (var x = 0; x < E; x++) {
            var r = V[x]
              , K = r & 255
              , J = r >> 8 & 255
              , t = r >> 16 & 255
              , C = r >> 24 & 255;
            V[x] = R[K] | R[J] << 8 | R[t] << 16 | R[C] << 24
        }
    }
    ;
    w.amu = function(Y, R, V, E, r, K, J) {
        var t = new Uint32Array(Y.buffer)
          , C = new Uint32Array(R.buffer)
          , c = t.length
          , M = 0;
        while (256 << M < V.length)
            M++;
        if (!J && !K) {
            for (var x = 0; x != c; x++) {
                var a = t[x]
                  , Q = (a & 255) << M
                  , A = (a >>> 8 & 255) << M
                  , p = (a >>> 16 & 255) << M
                  , v = V[Q]
                  , W = E[A]
                  , n = r[p];
                C[x] = v | W << 8 | n << 16 | a & 4278190080
            }
            return
        }
        for (var x = 0; x < c; x++) {
            var a = t[x]
              , Q = (a & 255) << M
              , A = (a >>> 8 & 255) << M
              , p = (a >>> 16 & 255) << M;
            if (K)
                Q = A = p = Math.round(Q * .3 + A * .59 + p * .11);
            var v = V[Q]
              , W = E[A]
              , n = r[p];
            if (J) {
                var $ = w.l6(Q, A, p)
                  , G = w.l6(v, W, n);
                if ($ > G) {
                    var o = ($ - G) / (255 - G);
                    v += o * (255 - v);
                    W += o * (255 - W);
                    n += o * (255 - n)
                } else if (G == 0)
                    v = W = n = 0;
                else {
                    var o = $ / G;
                    v = o * v;
                    W = o * W;
                    n = o * n
                }
            }
            C[x] = v | W << 8 | n << 16 | a & 4278190080
        }
    }
    ;
    w.iE = function(Y, R) {
        var V = R.d
          , E = R.b
          , top = 0
          , r = 0
          , K = 0
          , J = 0
          , t = 0;
        t = 0;
        for (var C = 0; C < E; C++) {
            var c = C * V;
            for (var x = 0; x < V; x++)
                t |= Y[c + x];
            if (t != 0)
                break;
            top++
        }
        if (top == E)
            return new gE(0,0,0,0);
        t = 0;
        for (var C = E - 1; C >= 0; C--) {
            var c = C * V;
            for (var x = 0; x < V; x++)
                t |= Y[c + x];
            if (t != 0)
                break;
            K++
        }
        var M = E - K;
        t = 0;
        for (var x = 0; x < V; x++) {
            for (var C = top; C < M; C++)
                t |= Y[C * V + x];
            if (t != 0)
                break;
            r++
        }
        t = 0;
        for (var x = V - 1; x >= 0; x--) {
            for (var C = top; C < M; C++)
                t |= Y[C * V + x];
            if (t != 0)
                break;
            J++
        }
        var a = new gE(R.x + r,R.y + top,V - r - J,E - top - K);
        return a
    }
    ;
    w.m7 = function(Y, R, V, E) {
        if (E == null)
            E = [!0, !0, !0, !0];
        if (V == null)
            V = 0;
        var r = new Uint32Array(Y.buffer)
          , K = R.d
          , J = R.b
          , top = 0
          , t = 0
          , C = 0
          , c = 0
          , M = !1
          , a = [r[0], r[r.length - 1], 0][V];
        M = !1;
        if (E[0])
            for (var Q = 0; Q < J; Q++) {
                var A = Q * K;
                for (var x = 0; x < K; x++)
                    if (r[A + x] != a)
                        M = !0;
                if (M)
                    break;
                top++
            }
        M = !1;
        if (E[2])
            for (var Q = J - 1; Q >= 0; Q--) {
                var A = Q * K;
                for (var x = 0; x < K; x++)
                    if (r[A + x] != a)
                        M = !0;
                if (M)
                    break;
                C++
            }
        M = !1;
        if (E[1])
            for (var x = 0; x < K; x++) {
                for (var Q = 0; Q < J; Q++)
                    if (r[Q * K + x] != a)
                        M = !0;
                if (M)
                    break;
                t++
            }
        M = !1;
        if (E[3])
            for (var x = K - 1; x >= 0; x--) {
                for (var Q = 0; Q < J; Q++)
                    if (r[Q * K + x] != a)
                        M = !0;
                if (M)
                    break;
                c++
            }
        var p = new gE(R.x + t,R.y + top,K - t - c,J - top - C);
        return p.uD() ? new gE(0,0,0,0) : p
    }
    ;
    w.O_ = function(Y) {
        var R = w.iE(Y.channel, Y.rect);
        if (R.yU(Y.rect))
            return;
        var V = w.T(R.X());
        w.md(Y.channel, Y.rect, V, R);
        Y.channel = V;
        Y.rect = R
    }
    ;
    w.pp = function(Y) {
        var R = w.T(Y.buffer.length >> 2);
        w.vH(Y.buffer, R, 3);
        var V = w.iE(R, Y.rect);
        if (V.yU(Y.rect))
            return;
        var E = new w.T(V.X() * 4);
        w.Vj(Y.buffer, Y.rect, E, V);
        Y.buffer = E;
        Y.rect = V
    }
    ;
    w.extend = function(Y, R, V) {
        if (Y.rect.Nk(R))
            return;
        var E = Y.rect.ov(R)
          , r = w.T(E.X());
        if (V != null)
            r.fill(V);
        w.md(Y.channel, Y.rect, r, E);
        Y.rect = E;
        Y.channel = r
    }
    ;
    w.aeb = function(Y, R) {
        if (R.uD() || Y.rect.Nk(R))
            return;
        var V = Y.rect.ov(R)
          , E = w.T(V.X() * 4);
        w.Vj(Y.buffer, Y.rect, E, V);
        Y.rect = V;
        Y.buffer = E
    }
    ;
    w.ja = function(Y, R, V) {
        if (!V.M_(Y))
            return !1;
        var E = Math.floor(Y.x) - V.x
          , r = Math.floor(Y.y) - V.y
          , x = r * V.d + E;
        return R[x] > 128
    }
    ;
    w.a59 = function(Y, R, V) {
        if (!V.M_(Y))
            return !1;
        var E = Math.floor(Y.x) - V.x
          , r = Math.floor(Y.y) - V.y
          , x = r * V.d + E;
        return R[4 * x + 3] > 128
    }
    ;
    w.Ys = function(Y) {
        if (w.Lt.length < Y) {
            w.Lt = w.T(Y);
            w.Lt.fill(255)
        }
        return w.Lt
    }
    ;
    w.Lt = w.T(0);
    w.TX = function(Y) {
        if (w.wT.length < Y)
            w.wT = w.T(Y);
        return w.wT
    }
    ;
    w.wT = w.T(0);
    w.Te = function(Y) {
        this.o = w.T(Y);
        this.h = w.T(Y);
        this.l = w.T(Y);
        this.O = w.T(Y)
    }
    ;
    w.Te.prototype.clone = function() {
        var Y = this.o.length
          , R = new w.Te(1);
        R.o = this.o.slice(0);
        R.h = this.h.slice(0);
        R.l = this.l.slice(0);
        R.O = this.O.slice(0);
        return R
    }
    ;
    w.cw.xs = function() {
        function Y($, G) {
            return $[G] + $[G + 1] + $[G + 2] + $[G + 3]
        }
        function R($, G) {
            return $[G] + $[G + 1] + $[G + 2] + 2 * $[G + 3]
        }
        function V($, G, o, B) {
            $[G] = o[B];
            $[G + 1] = o[B + 1];
            $[G + 2] = o[B + 2];
            $[G + 3] = o[B + 3]
        }
        function E($, G, o) {
            $[G] = $[o];
            $[G + 1] = $[o + 1];
            $[G + 2] = $[o + 2];
            $[G + 3] = $[o + 3]
        }
        function r($, G, o) {
            $[o] = G[o];
            $[o + 1] = G[o + 1];
            $[o + 2] = G[o + 2];
            $[o + 3] = 255 - G[o + 3]
        }
        function K($) {
            for (var x = 0, G = $.length; x < G; x += 4) {
                $[x + 3] = 255 - $[x + 3]
            }
        }
        function J() {
            var $ = Math.random();
            if ($ > .5)
                return 0;
            if ($ > .25)
                return 1;
            if ($ > .1)
                return 2;
            if ($ > .02143)
                return 3;
            if ($ > .00445)
                return 4;
            if ($ > 65e-5)
                return 5;
            if ($ > 415e-6)
                return 6;
            if ($ > 55e-6)
                return 7;
            return 8
        }
        function t($, G, o, B, L, u) {
            $[G] = o[B] + (L[u] - o[B] >> 1);
            $[G + 1] = o[B + 1] + (L[u + 1] - o[B + 1] >> 1);
            $[G + 2] = o[B + 2] + (L[u + 2] - o[B + 2] >> 1);
            $[G + 3] = o[B + 3] + (L[u + 3] - o[B + 3] >> 1)
        }
        function C($, G, o, B, L, u) {
            $[G] = L[u] + o[B] >> 1;
            $[G + 1] = L[u + 1] + o[B + 1] >> 1;
            $[G + 2] = L[u + 2] + o[B + 2] >> 1;
            $[G + 3] = L[u + 3] + o[B + 3] >> 1
        }
        function c($, G, o, B, L, u, y, S, X) {
            var N = 0, k = 0, d = 0, x, P = L[u], Z;
            t(S, 0, $, G, $, o);
            for (x = 0; x < P; x++) {
                t(S, (x + 1) * 4, S, x * 4, $, o)
            }
            k = (P + 1) * 4;
            d += P;
            u--;
            V($, G, S, k - 4);
            B[u] = Y($, G);
            G -= X;
            while (u > 0 && B[u - 1] < B[u]) {
                Z = S;
                S = y;
                y = Z;
                N = k;
                C(S, 0, $, G - X, y, 0);
                for (x = 4; x < N; x += 4) {
                    C(S, x, S, x - 4, y, x)
                }
                P = L[u];
                for (x = d; x < P; x++) {
                    t(S, k, S, k - 4, y, N - 4);
                    k += 4;
                    d++
                }
                u--;
                V($, G, S, k - 4);
                B[u] = Y($, G);
                G -= X
            }
        }
        function M($, G, o, B, L) {
            var u = G * 4, y = 0, S, X, N = new Uint8Array(G + 1), k = new Uint8Array(10 * 4), d = new Uint8Array(10 * 4);
            for (var x = 0; x < o; x++) {
                r(B, $, y);
                L[0] = Y(B, y);
                N[0] = J();
                S = y;
                y += 4;
                for (var P = 1; P < G; P++) {
                    r(B, $, y);
                    L[P] = Y(B, y);
                    X = J();
                    N[P] = X;
                    if (L[P - 1] < L[P] && X > 0) {
                        c(B, y - 4, y, L, N, P, k, d, 4)
                    }
                    y += 4
                }
                L[G] = L[0];
                N[G] = N[0];
                if (L[G - 1] < L[G] && X > 0) {
                    c(B, y, S, L, N, G, k, d, 4)
                }
            }
            K(B)
        }
        function a() {
            var $ = Math.random();
            if ($ > .659755)
                return 0;
            if ($ > .1625)
                return 10;
            if ($ > .06)
                return 20;
            if ($ > .01)
                return 30;
            if ($ > .0035)
                return 40;
            if ($ > 65e-5)
                return 50;
            if ($ > 415e-6)
                return 60;
            if ($ > 55e-6)
                return 70;
            return 80
        }
        function Q($, G, o, B, L, u) {
            var y = a() + 1
              , S = B[L];
            for (var x = 1; x < y; x++) {
                if (0 > L)
                    break;
                if (B[L - x] < S) {
                    E($, G, o)
                } else {
                    break
                }
                G += u
            }
        }
        function A($, G, o, B, L) {
            var u = G * 4
              , y = 0;
            for (var x = 0; x < o; x++) {
                r(B, $, y);
                L[0] = Y(B, y);
                y += 4;
                for (var S = 1; S < G; S++) {
                    r(B, $, y);
                    L[S] = Y($, y);
                    if (L[S - 1] < L[S]) {
                        Q(B, y - 4, y, L, S, -4)
                    }
                    y += 4
                }
                L[G] = L[0];
                if (L[S - 1] < L[S]) {
                    Q(B, y - 4, y - u, L, S, -4)
                }
            }
            K(B)
        }
        function p($, G, o, B, L, u) {
            var y = 1, S, X, N = new Uint8Array(4), k, d = G;
            while (Math.random() < 1 / y) {
                d = G;
                if (B <= 1)
                    break;
                S = o[B];
                X = o[B - 1];
                if (S <= X)
                    break;
                V(N, 0, $, d - u);
                k = !0;
                for (var x = B; x < L; x++) {
                    if (X > o[x]) {
                        V($, d - u, N, 0);
                        o[x - 1] = X;
                        k = !1;
                        break
                    }
                    V($, d - u, $, d);
                    o[x - 1] = o[x];
                    d += u
                }
                if (k) {
                    V($, d - u, N, 0);
                    o[L - 1] = X
                }
                y++;
                B--;
                G -= u
            }
        }
        function v($, G, o, B, L) {
            var u = 0
              , y = 0
              , S = G * 4;
            for (var x = 0; x < o; x++) {
                y = u;
                for (var X = 0; X < G; X++) {
                    r(B, $, u);
                    L[X] = R(B, u);
                    u += 4
                }
                u = y;
                for (var X = 1; X < G; X++) {
                    if (L[X - 1] < L[X] && Math.random() < .66) {
                        p(B, u + 4, L, X, G, 4)
                    }
                    u += 4
                }
                u += 4
            }
            K(B)
        }
        function W($, G, o, B, L) {
            var u = L[0], y = L[1], S = new Uint16Array(G + 1), X = $, N = B, k;
            if (y) {
                k = B.slice(0);
                n($, B, G, o);
                X = B;
                N = k
            }
            if (u == 0)
                M(X, G, o, N, S);
            else if (u == 1)
                A(X, G, o, N, S);
            else if (u == 2)
                v(X, G, o, N, S);
            if (y) {
                n(k, B, G, o)
            }
        }
        function n($, G, o, B) {
            for (var L = 0; L < B; L++)
                for (var u = 0; u < o; u++) {
                    var y = L * o + u << 2
                      , S = L * o + (o - 1 - u) << 2;
                    G[S] = $[y];
                    G[S + 1] = $[y + 1];
                    G[S + 2] = $[y + 2];
                    G[S + 3] = $[y + 3]
                }
        }
        return W
    }();
    w.cw.aeC = function() {
        function Y(R, V, E, r) {
            var K = new Uint8Array(R.length)
              , J = new Uint8Array(R.length >>> 2)
              , t = new Uint8Array(R.length >>> 2);
            w.RV.Ad(R, K, V, E, w.RV.Mp[2], 0, !0);
            for (var x = 0; x < R.length; x += 4) {
                var C = K[x + 0] * .3 + K[x + 1] * .59 + K[x + 2] * .11;
                J[x >>> 2] = C;
                r[x + 0] = R[x + 0];
                r[x + 1] = R[x + 1];
                r[x + 2] = R[x + 2];
                r[x + 3] = R[x + 3]
            }
            w.RV.$O(J, t, V, E);
            for (var x = 0; x < R.length; x += 4) {
                K[x + 3] = ~~(Math.max(0, 255 - t[x >>> 2] - 50) * (255 / 205))
            }
            for (var x = 0, c = R.length; x < c; x += 4) {
                var M = K[x + 3] / 255;
                r[x] = K[x] * M + r[x] * (1 - M);
                r[x + 1] = K[x + 1] * M + r[x + 1] * (1 - M);
                r[x + 2] = K[x + 2] * M + r[x + 2] * (1 - M)
            }
        }
        return Y
    }();
    w.cw.ace = function() {
        function Y(R, V, E, r) {
            var K = new Uint8Array(R.length >>> 2)
              , J = new Uint8Array(R.length >>> 2)
              , t = new Uint8Array(R.length);
            for (var x = 0; x < R.length; x += 4) {
                var C = R[x + 0] * .3 + R[x + 1] * .59 + R[x + 2] * .11;
                J[x >>> 2] = C;
                t[x] = R[x];
                t[x + 1] = R[x + 1];
                t[x + 2] = R[x + 2]
            }
            w.RV.$O(J, K, V, E);
            w.RV.Ad(R, r, V, E, w.RV.Mp[1], 0, !0);
            for (var x = 0; x < R.length; x += 4) {
                t[x + 3] = 255 - K[x >>> 2]
            }
            for (var x = 0, c = R.length; x < c; x += 4) {
                var M = t[x + 3] / 255;
                r[x] = t[x] * M + r[x] * (1 - M);
                r[x + 1] = t[x + 1] * M + r[x + 1] * (1 - M);
                r[x + 2] = t[x + 2] * M + r[x + 2] * (1 - M)
            }
        }
        return Y
    }();
    w.cw.agz = function() {
        function Y(K, J, t, C, c) {
            var M = new Uint32Array(K.buffer)
              , a = 0;
            for (var x = 0; x < t; x++) {
                for (var Q = 0; Q < J; Q++,
                a += 4) {
                    var A = M[x * J + Q]
                      , p = A & 255
                      , v = A >>> 8 & 255
                      , W = A >>> 16 & 255
                      , n = A >>> 24 & 255
                      , $ = ~~(Math.random() * 8)
                      , G = $ % 3
                      , o = 0
                      , B = 0;
                    if ($ < 3) {
                        B--
                    } else if ($ > 4) {
                        B++
                    }
                    if (G == 0) {
                        o--
                    } else if (G == 2) {
                        o++
                    }
                    var L = Q + o
                      , u = x + B;
                    if (L < 0)
                        L = 0;
                    else if (L > J - 1)
                        L = J - 1;
                    if (u < 0)
                        u = 0;
                    else if (u > t - 1)
                        u = t - 1;
                    var A = M[u * J + L]
                      , y = A & 255
                      , S = A >>> 8 & 255
                      , X = A >>> 16 & 255
                      , N = A >>> 24 & 255;
                    C[a] = c(p, y);
                    C[a + 1] = c(v, S);
                    C[a + 2] = c(W, X);
                    C[a + 3] = c(n, N)
                }
            }
        }
        function R(K, J) {
            return J
        }
        function V(K, J) {
            return K > J ? J : K
        }
        function E(K, J) {
            return K < J ? J : K
        }
        function r(K, J, t, C, c) {
            var M = c[0];
            if (M == 0)
                Y(K, J, t, C, R);
            else if (M == 1)
                Y(K, J, t, C, V);
            else if (M == 2)
                Y(K, J, t, C, E);
            else if (M == 3) {
                console.error("Not implemented")
            } else
                console.error("Mew mew")
        }
        return r
    }();
    w.cw.a1C = function() {
        var Y = [], R = new Uint8Array(512), V = new Float32Array(512), E = new Float32Array(512), r = [1, -1, 1, -1, 1, -1, 0, 0], K = [1, 1, -1, -1, 0, 0, 1, -1], J = 0, t, p = 0;
        for (; J < 256; J++)
            Y[J] = J;
        while (J != 0) {
            J--;
            t = Math.floor(Math.random() * J);
            Y[t] ^= Y[J] ^ (Y[J] = Y[t])
        }
        function C(C) {
            C = Math.floor(C * 65536);
            if (C < 256) {
                C |= C << 8
            }
            for (var x = 0; x < 256; x++) {
                var n = x + 256
                  , $ = Y[x] ^ (x & 1 ? C : C >> 8) & 255;
                R[x] = R[n] = $;
                $ = $ % 8;
                V[x] = V[n] = r[$];
                E[x] = E[n] = K[$]
            }
        }
        function c(n) {
            return n * n * n * (n * (n * 6 - 15) + 10)
        }
        function M(n, $, G) {
            return (1 - G) * n + G * $
        }
        function a(n, $) {
            return n & $
        }
        function Q(n, $) {
            return n % $
        }
        function A(n, $, G, o, B) {
            var L = Math.floor(n), u = Math.floor($), J, y, S, X, N, k;
            n = n - L;
            $ = $ - u;
            L = L & 255;
            u = u & 255;
            J = L + R[u];
            X = V[J] * n + E[J] * $;
            J = L + R[B(u + 1, o)];
            S = V[J] * n + E[J] * ($ - 1);
            J = B(L + 1, G) + R[u];
            N = V[J] * (n - 1) + E[J] * $;
            J = B(L + 1, G) + R[B(u + 1, o)];
            k = V[J] * (n - 1) + E[J] * ($ - 1);
            y = c(n);
            return M(M(X, N, y), M(S, k, y), c($))
        }
        function v(n, J, $) {
            n[J] = $
        }
        function W(n, $, G, o, B) {
            var L = Math.min(Math.min($, 256), Math.min(256, G)), u = L == 256 || L < 8, y = 8, S = new Uint32Array(y), X = new Uint32Array(y), N = new Float32Array(y), k = new Float32Array(y), d = 1, P = 1, Z = u ? a : Q, s = v, _;
            for (var x = 0; x < y; x++) {
                _ = P * 1 / L;
                if (u) {
                    X[x] = (1 << Math.ceil(Math.log2(G * _))) - 1;
                    S[x] = (1 << Math.ceil(Math.log2($ * _))) - 1
                } else {
                    X[x] = _ * G;
                    S[x] = _ * $
                }
                N[x] = d;
                k[x] = _;
                d *= .5;
                P = P << 1
            }
            C(Math.random());
            for (var b = 0, J = 0; b < G; b++) {
                for (var q = 0; q < $; q++) {
                    var e = 0;
                    for (var g = 0; g < y; g++) {
                        _ = k[g];
                        e += A(q * _, b * _, S[g], X[g], Z) * N[g]
                    }
                    s(o, J++, Math.round(Math.max(0, 255 * Math.min(1, .5 + e * .5))))
                }
            }
        }
        return W
    }();
    w.cw.abT = function() {
        function Y(R, V, E, r, K) {
            var J = K && K[0] ? K[0] : 4, t, C, c, M, a, Q, A;
            for (var x = 0; x < E; x++) {
                var p = Math.max(x - J, 0)
                  , v = Math.min(x + J, E - 1);
                for (var W = 0; W < V; W++) {
                    var n = Math.max(W - J, 0)
                      , $ = Math.min(W + J, V - 1);
                    t = p * V + n << 2;
                    M = R[t];
                    a = R[t + 1];
                    Q = R[t + 2];
                    A = R[t + 3];
                    t = p * V + $ << 2;
                    M += R[t];
                    a += R[t + 1];
                    Q += R[t + 2];
                    A += R[t + 3];
                    t = v * V + n << 2;
                    M += R[t];
                    a += R[t + 1];
                    Q += R[t + 2];
                    A += R[t + 3];
                    t = v * V + $ << 2;
                    M += R[t];
                    a += R[t + 1];
                    Q += R[t + 2];
                    A += R[t + 3];
                    t = x * V + W << 2;
                    r[t] = M + 2 >>> 2;
                    r[t + 1] = a + 2 >>> 2;
                    r[t + 2] = Q + 2 >>> 2;
                    r[t + 3] = A + 2 >>> 2
                }
            }
        }
        return Y
    }();
    w.Kk = {
        ahS: function(Y, R) {
            var x = Y.length;
            Y.push(R);
            var V = x >>> 1;
            while (V != 0 && Y[x][0] < Y[V][0]) {
                var E = Y[x];
                Y[x] = Y[V];
                Y[V] = E;
                x = V;
                V = x >>> 1
            }
        },
        anw: function(Y) {
            if (Y.length == 2)
                return Y.pop();
            var top = Y[1]
              , x = 1;
            Y[1] = Y.pop();
            var R = Y.length;
            while (!0) {
                var V = x << 1
                  , E = V + 1
                  , r = x;
                if (V < R && Y[V][0] < Y[r][0])
                    r = V;
                if (E < R && Y[E][0] < Y[r][0])
                    r = E;
                if (r == x)
                    break;
                var K = Y[x];
                Y[x] = Y[r];
                Y[r] = K;
                x = r
            }
            return top
        },
        adn: function(Y) {
            for (var x = 1; x < Y.length; x++) {
                var R = x
                  , V = 1e9;
                while (R != 0) {
                    var E = Y[R][0];
                    if (E > V) {
                        console.log(x);
                        throw "e"
                    }
                    V = E;
                    R = R >>> 1
                }
            }
        }
    };
    w.Q = {};
    w.Q.$T = new Float64Array(256);
    w.Q.hn = new Uint8Array(256 * 256);
    w.Q.DN = new Uint8Array(256 * 256);
    (function() {
        for (var x = 0; x < 256; x++)
            w.Q.$T[x] = 255 / x;
        for (var x = 0; x < 256; x++)
            for (var Y = 0; Y < 256; Y++)
                w.Q.hn[x * 256 + Y] = x == 0 ? 0 : Math.round(Y * 255 / x);
        for (var x = 0; x < 256; x++)
            for (var Y = 0; Y < 256; Y++)
                w.Q.DN[x * 256 + Y] = Math.round(x * (255 - Y) / 255)
    }());
    w.Q.D2 = function(Y, R, V, E, r, K, J, t) {
        if (t == null)
            t = ft.WB();
        if ("idiv,lbrn,div ,lddg,vLit,lLit,hMix,diff".split(",").indexOf(Y) == -1) {
            J = J * t.fill;
            t.fill = 1;
            t.style = !1
        }
        var C = "norm,dark,mul ,idiv,lbrn,lite,scrn,div ,lddg,over,sLit,hLit,vLit,lLit,pLit,hMix,diff,smud,fsub,fdiv".split(",")
          , c = "dkCl,lgCl,hue ,sat ,colr,lum ".split(",")
          , M = w.Q[Y + "F"];
        if (t.mB == null && Y == "norm")
            w.Q.afS(R, V, E, r, K, J, M, t.mG ? 1 : 0);
        else if (Y == "diss")
            w.Q.a2G(R, V, E, r, K, J, M, t.mG ? 1 : 0);
        else if (C.indexOf(Y) != -1)
            w.Q.any(R, V, E, r, K, J, M, t);
        else if (c.indexOf(Y) != -1)
            w.Q.anh(R, V, E, r, K, J, M, t)
    }
    ;
    w.Q.acE = function(Y, R, V) {
        var E = Y * V + 1 - V;
        return E < .001 ? 0 : 1 - Math.min(1, (1 - R) / E)
    }
    ;
    w.Q.a75 = function(Y, R, V) {
        return Y * V == 1 ? 1 : Math.min(1, R / (1 - Y * V))
    }
    ;
    w.Q.cg = function(Y) {
        return Y <= .25 ? ((16 * Y - 12) * Y + 4) * Y : Math.sqrt(Y)
    }
    ;
    w.Q.normF = function(Y, R, V) {
        return Y
    }
    ;
    w.Q.darkF = function(Y, R, V) {
        return Math.min(Y, R)
    }
    ;
    w.Q["mul F"] = function(Y, R, V) {
        return Y * R
    }
    ;
    w.Q.idivF = function(Y, R, V) {
        var E = Y * V + 1 - V;
        return R == 1 ? 1 : 1 - R >= E ? 0 : 1 - (1 - R) / E
    }
    ;
    w.Q.lbrnF = function(Y, R, V) {
        return Math.max(0, Y * V + R - V)
    }
    ;
    w.Q.dkClF = function(Y, R, V) {
        var E = w.te(Y) < w.te(R) ? Y : R;
        V.h = E.h;
        V.l = E.l;
        V.O = E.O;
        return V
    }
    ;
    w.Q.liteF = function(Y, R, V) {
        return Math.max(Y, R)
    }
    ;
    w.Q.scrnF = function(Y, R, V) {
        return R + Y - R * Y
    }
    ;
    w.Q["div F"] = function(Y, R, V) {
        Y *= V;
        return R == 0 ? 0 : R >= 1 - Y ? 1 : R / (1 - Y)
    }
    ;
    w.Q.lddgF = function(Y, R, V) {
        Y *= V;
        return Math.min(1, Y + R)
    }
    ;
    w.Q.lgClF = function(Y, R, V) {
        var E = w.te(Y) > w.te(R) ? Y : R;
        V.h = E.h;
        V.l = E.l;
        V.O = E.O;
        return V
    }
    ;
    w.Q.overF = function(Y, R, V) {
        return w.Q.hLitF(R, Y, V)
    }
    ;
    w.Q.sLitF = function(Y, R, V) {
        return Y <= .5 ? R - (1 - 2 * Y) * R * (1 - R) : R + (2 * Y - 1) * (w.Q.cg(R) - R)
    }
    ;
    w.Q.hLitF = function(Y, R, V) {
        return Y <= .5 ? w.Q["mul F"](2 * Y, R, V) : w.Q.scrnF(2 * Y - 1, R, V)
    }
    ;
    w.Q.vLitF = function(Y, R, V) {
        return Y <= .5 ? w.Q.acE(2 * Y, R, V) : w.Q.a75(2 * Y - 1, R, V)
    }
    ;
    w.Q.lLitF = function(Y, R, V) {
        return Y <= .5 ? w.Q.lbrnF(2 * Y, R, V) : w.Q.lddgF(2 * Y - 1, R, V)
    }
    ;
    w.Q.pLitF = function(Y, R, V) {
        return Y <= .5 ? w.Q.darkF(2 * Y, R, V) : w.Q.liteF(2 * Y - 1, R, V)
    }
    ;
    w.Q.hMixF = function(Y, R, V) {
        if (V > .99)
            return Y + R < 1 ? 0 : 1;
        return Math.min(1, Math.max(0, (R + Y * V - V) / (1 - V + 1e-6)))
    }
    ;
    w.Q.diffF = function(Y, R, V) {
        Y *= V;
        return Math.abs(Y - R)
    }
    ;
    w.Q.smudF = function(Y, R, V) {
        return Y + R - 2 * Y * R
    }
    ;
    w.Q.fsubF = function(Y, R, V) {
        return Math.max(R - Y, 0)
    }
    ;
    w.Q.fdivF = function(Y, R, V) {
        return Math.min(R / Y, 1)
    }
    ;
    w.Q["hue F"] = function(Y, R, V) {
        w.Yu(Y, w.Gl(R), V);
        w.ds(V, w.te(R), V)
    }
    ;
    w.Q["sat F"] = function(Y, R, V) {
        w.Yu(R, w.Gl(Y), V);
        w.ds(V, w.te(R), V)
    }
    ;
    w.Q.colrF = function(Y, R, V) {
        w.ds(Y, w.te(R), V)
    }
    ;
    w.Q["lum F"] = function(Y, R, V) {
        w.ds(R, w.te(Y), V)
    }
    ;
    w.Q.afS = function(Y, R, V, E, r, K, J, t) {
        var C = R.Cy(E).Cy(r)
          , c = Math.max(0, C.x - R.x)
          , M = Math.max(0, C.x - E.x)
          , a = Math.max(0, C.y - R.y)
          , Q = Math.max(0, C.y - E.y)
          , A = C.d
          , p = C.b
          , v = R.d
          , W = E.d
          , n = w.Q.hn
          , $ = w.Q.DN
          , G = new Uint32Array(Y.buffer)
          , o = new Uint32Array(V.buffer);
        for (var x = 0; x < p; x++) {
            var B = (a + x) * v + c
              , L = (Q + x) * W + M;
            for (var u = 0; u < A; u++) {
                var y = G[B + u]
                  , N = 255;
                if (y >>> 24 == 0)
                    continue;
                if (y >>> 24 == 255 && K == 1 && t == 0) {
                    o[L + u] = G[B + u];
                    continue
                }
                var S = o[L + u]
                  , X = 255 * K & 255;
                if (t == 0) {
                    X = (y >>> 24) * K & 255;
                    N = S >>> 24
                }
                var k = $[N << 8 | X]
                  , d = X + k
                  , P = y & 255
                  , Z = y >>> 8 & 255
                  , s = y >>> 16 & 255
                  , _ = S & 255
                  , b = S >>> 8 & 255
                  , q = S >>> 16 & 255;
                o[L + u] = t * (S >>> 24) + (1 - t) * d << 24 | n[d << 8 | w.o8(s * X + q * k)] << 16 | n[d << 8 | w.o8(Z * X + b * k)] << 8 | n[d << 8 | w.o8(P * X + _ * k)]
            }
        }
    }
    ;
    w.Q.a9$ = function(Y, R, V, E, r, K) {
        var J = R.Cy(E).Cy(r)
          , t = Math.max(0, J.x - R.x)
          , C = Math.max(0, J.x - E.x)
          , c = Math.max(0, J.y - R.y)
          , M = Math.max(0, J.y - E.y)
          , a = J.d
          , Q = J.b
          , A = R.d
          , p = E.d
          , v = w.Q.hn
          , W = w.Q.DN
          , n = new Uint32Array(Y.buffer)
          , $ = new Uint32Array(V.buffer)
          , G = Math.floor(Math.random() * 16777215)
          , o = 0;
        for (var x = 0; x < Q; x++) {
            var B = (c + x) * A + t
              , L = (M + x) * p + C;
            for (var u = 0; u < a; u++) {
                var y = n[B + u];
                if (y >>> 24 == 0)
                    continue;
                if (y >> 24 == 255 && K == 1) {
                    $[L + u] = y;
                    continue
                }
                var S = $[L + u]
                  , X = (y >>> 24) * K * (1 / 255)
                  , N = (S >>> 24) * (1 / 255)
                  , k = N * (1 - X)
                  , d = X + k
                  , P = y & 255
                  , Z = y >>> 8 & 255
                  , s = y >>> 16 & 255
                  , _ = S & 255
                  , b = S >>> 8 & 255
                  , q = S >>> 16 & 255;
                o >>>= 8;
                if ((u & 3) == 0)
                    o = w.Q.Vw(L + u + G);
                var e = d == 0 ? 0 : 1 / d
                  , g = Math.floor(d * (256 * 255)) + (o & 255) >>> 8
                  , F = Math.floor((s * X + q * k) * e + .5)
                  , l = Math.floor((Z * X + b * k) * e + .5)
                  , i = Math.floor((P * X + _ * k) * e + .5);
                $[L + u] = g << 24 | F << 16 | l << 8 | i
            }
        }
    }
    ;
    w.Q.Kd = function(Y, R, V, E, r, K, J, t) {
        var C = w.l6(Y, R, V)
          , c = w.l6(E, r, K)
          , M = Math.min
          , a = w.Q.a11
          , Q = a(C, t, 0);
        Q = M(Q, a(Y, t, 8));
        Q = M(Q, a(R, t, 16));
        Q = M(Q, a(V, t, 24));
        var A = a(c, t, 4);
        A = M(A, a(E, t, 12));
        A = M(A, a(r, t, 20));
        A = M(A, a(K, t, 28));
        A = Math.max(A, 1 - J);
        var p = Math.min(Q, A);
        return p < 0 ? 0 : p > 1 ? 1 : p
    }
    ;
    w.Q.a11 = function(Y, R, x) {
        return Math.min((Y - R[x]) * R[x + 1], (Y - R[x + 3]) * R[x + 2])
    }
    ;
    w.Q.any = function(Y, R, V, E, r, K, J, t) {
        var C = 1 / 255
          , c = C * K
          , M = t.mG ? 1 : 0
          , a = t.fill
          , Q = t.style
          , A = R.Cy(E).Cy(r)
          , p = Math.max(0, A.x - R.x)
          , v = Math.max(0, A.x - E.x)
          , W = Math.max(0, A.y - R.y)
          , n = Math.max(0, A.y - E.y)
          , $ = A.d
          , G = A.b
          , o = R.d
          , B = E.d
          , L = new Uint32Array(Y.buffer)
          , u = new Uint32Array(V.buffer);
        for (var x = 0; x < G; x++) {
            var y = (W + x) * o + p
              , S = (n + x) * B + v;
            for (var X = 0; X < $; X++,
            y++,
            S++) {
                var N = L[y]
                  , e = 1;
                if (N >>> 24 == 0)
                    continue;
                var k = u[S]
                  , d = (N & 255) * C
                  , P = (N >>> 8 & 255) * C
                  , Z = (N >>> 16 & 255) * C
                  , s = (k & 255) * C
                  , _ = (k >>> 8 & 255) * C
                  , b = (k >>> 16 & 255) * C
                  , q = K;
                if (M == 0) {
                    q = (N >>> 24) * c;
                    e = (k >>> 24) * C
                }
                if (t.mB)
                    q *= w.Q.Kd(d, P, Z, s, _, b, e, t.mB);
                var g = e * (1 - q)
                  , F = q + g
                  , l = F == 0 ? 0 : 255 / F
                  , i = Q ? 1 : q
                  , aM = ((1 - e) * q * d + (1 - i) * e * s + i * e * J(d, s, (1 + q - i) * a)) * l
                  , H = ((1 - e) * q * P + (1 - i) * e * _ + i * e * J(P, _, (1 + q - i) * a)) * l
                  , iP = ((1 - e) * q * Z + (1 - i) * e * b + i * e * J(Z, b, (1 + q - i) * a)) * l;
                F = q * a + e * (1 - q * a);
                var hq = ~~(F * 255 + .5);
                u[S] = M * (k >>> 24) + (1 - M) * hq << 24 | iP << 16 | H << 8 | aM
            }
        }
    }
    ;
    w.Q.anh = function(Y, R, V, E, r, K, J, t) {
        var C = 1 / 255
          , c = C * K
          , M = t.mG ? 1 : 0
          , a = R.Cy(E).Cy(r)
          , Q = Math.max(0, a.x - R.x)
          , A = Math.max(0, a.x - E.x)
          , p = Math.max(0, a.y - R.y)
          , v = Math.max(0, a.y - E.y)
          , W = a.d
          , n = a.b
          , $ = new Uint32Array(Y.buffer)
          , G = new Uint32Array(V.buffer)
          , o = {
            h: 0,
            l: 0,
            O: 0
        }
          , B = {
            h: 0,
            l: 0,
            O: 0
        }
          , L = {
            h: 0,
            l: 0,
            O: 0
        };
        for (var x = 0; x < n; x++) {
            var u = (p + x) * R.d + Q
              , y = (v + x) * E.d + A;
            for (var S = 0; S < W; S++,
            u++,
            y++) {
                var X = $[u]
                  , N = G[y]
                  , k = (X & 255) * C
                  , d = (X >>> 8 & 255) * C
                  , P = (X >>> 16 & 255) * C
                  , Z = (N & 255) * C
                  , s = (N >>> 8 & 255) * C
                  , _ = (N >>> 16 & 255) * C
                  , b = K
                  , q = 1;
                if (M == 0) {
                    b = (X >>> 24) * c;
                    q = (N >>> 24) * C
                }
                if (t.mB)
                    b *= w.Q.Kd(k, d, P, Z, s, _, q, t.mB);
                var e = q * (1 - b)
                  , g = b + e
                  , F = 255 / g;
                o.h = k;
                o.l = d;
                o.O = P;
                B.h = Z;
                B.l = s;
                B.O = _;
                J(o, B, L);
                var l = (((1 - q) * k + q * L.h) * b + Z * e) * F
                  , i = (((1 - q) * d + q * L.l) * b + s * e) * F
                  , aM = (((1 - q) * P + q * L.O) * b + _ * e) * F
                  , H = M * (N >>> 24) + (1 - M) * Math.round(g * 255);
                G[y] = H << 24 | aM << 16 | i << 8 | l
            }
        }
    }
    ;
    w.Q.wy = function(Y) {
        Y = Y ^ 61 ^ Y >>> 16;
        Y = Y + (Y << 3);
        Y = Y ^ Y >>> 4;
        Y = Y * 668265261;
        Y = Y ^ Y >> 15;
        return (Y & 16777215) * (1 / 16777215)
    }
    ;
    w.Q.Vw = function(Y) {
        Y = Y ^ 61 ^ Y >>> 16;
        Y = Y + (Y << 3);
        Y = Y ^ Y >>> 4;
        Y = Y * 668265261;
        Y = Y ^ Y >>> 15;
        return Y
    }
    ;
    w.Q.LH = function(Y) {
        this.J_ = Y
    }
    ;
    w.Q.LH.prototype.get = function() {
        var Y = this.J_ = w.Q.Vw(this.J_);
        return (Y & 16777215) * (1 / 16777215)
    }
    ;
    w.Q.a2G = function(Y, R, V, E, r, K, J, t) {
        var C = 1 / 255
          , c = C * K
          , M = Math.round(K * (256 * 256 * 256 / 255))
          , a = R.Cy(E).Cy(r)
          , Q = Math.max(0, a.x - R.x)
          , A = Math.max(0, a.x - E.x)
          , p = Math.max(0, a.y - R.y)
          , v = Math.max(0, a.y - E.y)
          , W = a.d
          , n = a.b
          , $ = new Uint32Array(Y.buffer)
          , G = new Uint32Array(V.buffer);
        for (var x = 0; x < n; x++) {
            var o = (p + x) * R.d + Q
              , B = (v + x) * E.d + A;
            for (var L = 0; L < W; L++,
            o++,
            B++) {
                var u = $[o]
                  , y = G[B]
                  , S = t * 255 + (1 - t) * (u >>> 24);
                if ((w.Q.Vw(o) & 16777215) >= S * M)
                    continue;
                G[B] = u & 16777215 | t * (y >>> 24) + (1 - t) * 255 << 24
            }
        }
    }
    ;
    w.Q.ae9 = function(Y, R, V) {
        for (var x = 0; x < Y.length; x += 4) {
            var E = V[x >>> 2];
            if (E == 0)
                continue;
            var r = E * (1 / 255)
              , K = 1 / r
              , J = R[x]
              , t = R[x + 1]
              , C = R[x + 2]
              , c = Y[x]
              , M = Y[x + 1]
              , a = Y[x + 2];
            R[x] = Math.min(255, Math.max(0, Math.round((J - (1 - r) * c) * K)));
            R[x + 1] = Math.min(255, Math.max(0, Math.round((t - (1 - r) * M) * K)));
            R[x + 2] = Math.min(255, Math.max(0, Math.round((C - (1 - r) * a) * K)));
            R[x + 3] = 255
        }
    }
    ;
    w.Q.Sk = function(Y, R, V, E, r, K, J, t, C, c, M) {
        if (c == null)
            c = !1;
        if (M == null)
            M = [1, 1, 1];
        var a = 255 << 24 | M[2] * 16711680 | M[1] * 65280 | M[0] * 255
          , Q = ~a;
        if (r && !R.yU(K)) {
            var A = w.T(R.X() * 4);
            A.fill(J);
            w.md(r, K, A, R);
            r = A;
            K = R
        }
        if (c) {
            if (r == null)
                w.Q.a2k(Y, R, V, E, r, t, C, a, Q);
            else
                w.Q.a4c(Y, R, V, E, r, t, C)
        } else {
            if (r == null)
                w.Q.aal(Y, R, V, E, r, t, C, a, Q);
            else
                w.Q.agF(Y, R, V, E, r, t, C)
        }
    }
    ;
    w.Q.aal = function(Y, R, V, E, r, K, J, t, C) {
        var c = 1 / 255
          , M = R.Cy(E).Cy(K)
          , a = Math.max(0, M.x - R.x)
          , Q = Math.max(0, M.x - E.x)
          , A = Math.max(0, M.y - R.y)
          , p = Math.max(0, M.y - E.y)
          , v = M.d
          , W = M.b
          , n = new Uint32Array(Y.buffer)
          , $ = new Uint32Array(V.buffer)
          , G = w.Q.hn
          , o = J * 255 & 255;
        for (var x = 0; x < W; x++) {
            var B = (A + x) * R.d + a
              , L = (p + x) * E.d + Q;
            for (var u = 0; u < v; u++,
            B++,
            L++) {
                var y = n[B]
                  , S = $[L]
                  , X = y >>> 24
                  , N = S >>> 24
                  , k = w.o8(o * X + (255 - o) * N)
                  , d = w.o8(X * o)
                  , P = w.o8(N * (255 - o))
                  , Z = y & 255
                  , s = y >>> 8 & 255
                  , _ = y >>> 16 & 255
                  , b = S & 255
                  , q = S >>> 8 & 255
                  , e = S >>> 16 & 255
                  , g = d * Z + b * P
                  , F = d * s + q * P
                  , l = d * _ + e * P;
                g = G[k << 8 | w.o8(g)];
                F = G[k << 8 | w.o8(F)];
                l = G[k << 8 | w.o8(l)];
                var i = k << 24 | l << 16 | F << 8 | g;
                $[L] = C & S | t & i
            }
        }
    }
    ;
    w.Q.a2k = function(Y, R, V, E, r, K, J, t, C) {
        var c = 1 / 255
          , M = R.Cy(E).Cy(K)
          , a = Math.max(0, M.x - R.x)
          , Q = Math.max(0, M.x - E.x)
          , A = Math.max(0, M.y - R.y)
          , p = Math.max(0, M.y - E.y)
          , v = M.d
          , W = M.b
          , n = new Uint32Array(Y.buffer)
          , $ = new Uint32Array(V.buffer)
          , G = w.Q.hn
          , o = J * 16777215 & 16777215;
        for (var x = 0; x < W; x++) {
            var B = (A + x) * R.d + a
              , L = (p + x) * E.d + Q;
            for (var u = 0; u < v; u++,
            B++,
            L++) {
                if ((w.Q.Vw(B) & 16777215) < o) {
                    $[L] = C & $[L] | t & n[B]
                }
            }
        }
    }
    ;
    w.Q.agF = function(Y, R, V, E, r, K, J) {
        var t = 1 / 255
          , C = R.Cy(E).Cy(K)
          , c = Math.max(0, C.x - R.x)
          , M = Math.max(0, C.x - E.x)
          , a = Math.max(0, C.y - R.y)
          , Q = Math.max(0, C.y - E.y)
          , A = C.d
          , p = C.b
          , v = new Uint32Array(Y.buffer)
          , W = new Uint32Array(V.buffer)
          , n = w.Q.hn;
        for (var x = 0; x < p; x++) {
            var $ = (a + x) * R.d + c
              , G = (Q + x) * E.d + M;
            for (var o = 0; o < A; o++,
            $++,
            G++) {
                var B = r[$] * J & 255;
                if (B == 0)
                    continue;
                if (B == 255) {
                    W[G] = v[$];
                    continue
                }
                var L = v[$]
                  , u = W[G]
                  , y = L >>> 24
                  , S = u >>> 24
                  , X = w.o8(B * y + (255 - B) * S)
                  , N = w.o8(y * B)
                  , k = w.o8(S * (255 - B))
                  , d = L & 255
                  , P = L >>> 8 & 255
                  , Z = L >>> 16 & 255
                  , s = u & 255
                  , _ = u >>> 8 & 255
                  , b = u >>> 16 & 255
                  , q = n[X << 8 | w.o8(N * d + s * k)]
                  , e = n[X << 8 | w.o8(N * P + _ * k)]
                  , g = n[X << 8 | w.o8(N * Z + b * k)];
                W[G] = X << 24 | g << 16 | e << 8 | q
            }
        }
    }
    ;
    w.Q.a4c = function(Y, R, V, E, r, K, J) {
        var t = 1 / 255
          , C = R.Cy(E).Cy(K)
          , c = Math.max(0, C.x - R.x)
          , M = Math.max(0, C.x - E.x)
          , a = Math.max(0, C.y - R.y)
          , Q = Math.max(0, C.y - E.y)
          , A = C.d
          , p = C.b
          , v = new Uint32Array(Y.buffer)
          , W = new Uint32Array(V.buffer)
          , n = w.Q.hn
          , $ = Math.round(J * 257);
        for (var x = 0; x < p; x++) {
            var G = (a + x) * R.d + c
              , o = (Q + x) * E.d + M;
            for (var B = 0; B < A; B++,
            G++,
            o++) {
                var L = r[G] * $;
                if ((w.Q.Vw(G) & 65535) < L)
                    W[o] = v[G]
            }
        }
    }
    ;
    w.Q.Zn = function(Y, R, V, E, r, K, J) {
        var t = 1 / 255
          , C = R.Cy(E).Cy(K)
          , c = Math.max(0, C.x - R.x)
          , M = Math.max(0, C.x - E.x)
          , a = Math.max(0, C.y - R.y)
          , Q = Math.max(0, C.y - E.y)
          , A = C.d
          , p = C.b
          , v = new Uint32Array(Y.buffer)
          , W = new Uint32Array(V.buffer)
          , n = Math.floor(Math.random() * E.X())
          , $ = w.Q.a0Y;
        for (var x = 0; x < p; x++) {
            var G = (a + x) * R.d + c
              , o = (Q + x) * E.d + M;
            for (var B = 0; B < A; B++) {
                var L = r[G + B] * J;
                if (L == 0)
                    continue;
                if (L == 255) {
                    W[o + B] = v[G + B];
                    continue
                }
                var u = v[G + B]
                  , y = W[o + B]
                  , S = u >>> 24
                  , X = y >>> 24
                  , N = S * L * (1 / 255)
                  , k = X * (255 - L) * (1 / 255)
                  , d = u & 255
                  , P = u >>> 8 & 255
                  , Z = u >>> 16 & 255
                  , s = y & 255
                  , _ = y >>> 8 & 255
                  , b = y >>> 16 & 255
                  , q = w.Q.Vw(o + B + n)
                  , e = Math.floor((N + k) * 256 + .5) + (q >>> 0 & 255) >>> 8
                  , g = e == 0 ? 0 : 256 / (N + k)
                  , F = d * N + s * k
                  , l = P * N + _ * k
                  , i = Z * N + b * k
                  , aM = Math.floor(F * g + .5) + (q >>> 8 & 255) >>> 8
                  , H = Math.floor(l * g + .5) + (q >>> 16 & 255) >>> 8
                  , iP = Math.floor(i * g + .5) + (q >>> 21 & 248) >>> 8;
                W[o + B] = e << 24 | iP << 16 | H << 8 | aM
            }
        }
    }
    ;
    w.Q.a0Y = function(Y) {
        return Math.floor(Y + Math.random())
    }
    ;
    w.Q.d$ = function(Y, R, V, E, r, K, J) {
        var t = 1 / 255
          , C = R.Cy(E).Cy(K)
          , c = Math.max(0, C.x - R.x)
          , M = Math.max(0, C.x - E.x)
          , a = Math.max(0, C.y - R.y)
          , Q = Math.max(0, C.y - E.y)
          , A = C.d
          , p = C.b;
        for (var x = 0; x < p; x++) {
            var v = (a + x) * R.d + c
              , W = (Q + x) * E.d + M;
            for (var n = 0; n < A; n++,
            v++,
            W++) {
                var $ = J * r[v] * t;
                if ($ == 0)
                    continue;
                if ($ == 1) {
                    V[W] = Y[v];
                    continue
                }
                V[W] = Y[v] * $ + V[W] * (1 - $)
            }
        }
    }
    ;
    w.I0 = {};
    w.I0.acG = function(Y, R, V, E, r, K) {
        w.I0.BD(Y, R, V, E, r, K, null, 0)
    }
    ;
    w.I0.anG = function(Y, R, V, E, r) {
        w.I0.BD(Y, R, V, E, r, null, null, 0)
    }
    ;
    w.I0.adP = function(Y, R, V, E, r, K, J) {
        w.I0.BD(Y, R, V, E, r, null, K, J * .5)
    }
    ;
    w.I0.BD = function(Y, R, V, E, r, K, J, t) {
        var C = 0
          , k = 0
          , d = 1e9
          , P = 0
          , Z = 1e9
          , s = 0
          , _ = 1e9
          , b = 0
          , q = 0
          , e = 0
          , g = 0;
        if (K) {
            C = r * .5;
            r = 3 + Math.round((r - 3) * .75)
        }
        if (J) {
            r = Math.round(r * 2.2)
        }
        var c = 1 / r
          , M = Math.floor(R * c) + 1
          , a = Math.floor(V * c) + 1
          , Q = []
          , A = new Uint8Array(M * a * 4)
          , p = J ? .5 : 1
          , v = K ? 64 : 0;
        for (var W = 0; W < a; W++) {
            var n = J ? .5 * (W & 1) : 0;
            for (var $ = 0; $ < M; $++) {
                var G = ($ + Math.random() * p + n) * r
                  , o = (W + Math.random() * p) * r;
                Q.push(G, o);
                var B = Math.min(R - 1, Math.floor(G))
                  , L = Math.min(V - 1, Math.floor(o))
                  , u = (L * R + B) * 4
                  , y = (W * M + $) * 4;
                for (var x = 0; x < 4; x++)
                    A[y + x] = Math.max(0, Math.min(255, Math.floor(Y[u + x] + (Math.random() - .5) * v)))
            }
        }
        var S = K ? K : J ? J : [0, 0, 0]
          , X = M * a * 2
          , N = [-M - 1, -M, -M + 1, -1, 0, 1, M - 1, M, M + 1];
        for (var W = 0; W < V; W++) {
            e = 0;
            for (var $ = 0; $ < R; $++) {
                var F = $ + .5
                  , l = W + .5
                  , i = Math.floor(l * c)
                  , aM = Math.floor(F * c)
                  , H = i * M + aM
                  , iG = 0
                  , h = 0;
                if (e > 1 + t) {
                    d = w.I0.tg(Q, k, F, l);
                    b = Math.sqrt(d);
                    e--;
                    g++
                } else {
                    d = Z = _ = 1e9;
                    for (var x = 0; x < N.length; x++) {
                        var iP = (H + N[x]) * 2;
                        if (iP < 0 || iP >= X)
                            continue;
                        var hq = w.I0.tg(Q, iP, F, l);
                        if (hq < _) {
                            if (hq < Z) {
                                if (hq < d) {
                                    s = P;
                                    _ = Z;
                                    P = k;
                                    Z = d;
                                    k = iP;
                                    d = hq
                                } else {
                                    s = P;
                                    _ = Z;
                                    P = iP;
                                    Z = hq
                                }
                            } else {
                                s = iP;
                                _ = hq
                            }
                        }
                    }
                    b = Math.sqrt(d);
                    q = Math.sqrt(Z);
                    e = q - (b + q) * .5
                }
                if (J == null) {
                    var dw = (b + q) * .5
                      , eK = K ? Math.max(0, dw - C) : 0;
                    iG = Math.max(0, Math.min(1, .5 + dw - b - eK));
                    h = Math.max(0, Math.min(1, 1 - (.5 + dw - b) - eK))
                } else {
                    var f9 = Math.min(w.I0.fu(Q, k, P, F, l), w.I0.fu(Q, k, s, F, l));
                    iG = Math.max(0, Math.min(1, f9 - t * .5));
                    if (F < t || R - t < F || l < t || V - t < l)
                        iG = 0;
                    h = 0
                }
                var gn = 1 - h - iG
                  , y = W * R + $ << 2
                  , d$ = k << 1
                  , dJ = P << 1;
                E[y + 0] = Math.floor(.5 + iG * A[d$ + 0] + h * A[dJ + 0] + gn * S[0]);
                E[y + 1] = Math.floor(.5 + iG * A[d$ + 1] + h * A[dJ + 1] + gn * S[1]);
                E[y + 2] = Math.floor(.5 + iG * A[d$ + 2] + h * A[dJ + 2] + gn * S[2]);
                E[y + 3] = Y[y + 3]
            }
        }
    }
    ;
    w.I0.tg = function(Y, R, V, E) {
        var r = V - Y[R]
          , K = E - Y[R + 1];
        return r * r + K * K
    }
    ;
    w.I0.fu = function(Y, R, V, E, r) {
        var K = Y[R]
          , J = Y[R + 1]
          , t = Y[V]
          , C = Y[V + 1]
          , c = (K + t) * .5
          , M = (J + C) * .5
          , a = c + (C - J)
          , Q = M - (t - K)
          , A = Q - M
          , p = a - c;
        return Math.abs(A * E - p * r + a * M - Q * c) / Math.sqrt(p * p + A * A)
    }
    ;
    w.Ue = {};
    w.Ue.k5 = function(Y) {
        if (w.Ue.qc.length < Y)
            w.Ue.qc = w.T(Y);
        return w.Ue.qc
    }
    ;
    w.Ue.qc = w.T(0);
    w.Ue.Ho = function(Y) {
        if (w.Ue.Hw.length < Y)
            w.Ue.Hw = new Float32Array(Y);
        return w.Ue.Hw
    }
    ;
    w.Ue.Hw = new Float32Array(0);
    w.Ue.dh = function(Y, R, V, E) {
        var r = V.d
          , K = V.b;
        w.Ue.aeG(Y, R, r, K, E)
    }
    ;
    w.Ue.T1 = function(Y, R, V, E) {
        var r = V.d
          , K = V.b;
        w.Ue.a5m(Y, R, r, K, E)
    }
    ;
    w.Ue.aaD = function(Y, R, V) {
        var E = R.d
          , r = R.b;
        w.Ue.ai5(Y, E, r, V)
    }
    ;
    w.Ue.iS = function(Y, R, V, E, r) {
        var K = V.d
          , J = V.b;
        w.Ue.a1P(Y, R, K, J, E, r)
    }
    ;
    w.Ue.AO = function(Y, R, V, E) {
        var r = V.d
          , K = V.b;
        E = Math.round(E);
        var J = w.Ue.k5(r * K);
        w.Jc(Y, R);
        w.Ue.xS(R, J, r, K, E)
    }
    ;
    w.Ue.Zt = function(Y, R, V) {
        var E = R.d
          , r = R.b;
        V = Math.round(V);
        var K = w.Ue.k5(E * r * 4);
        w.Ue.Sn(Y, K, E, r, V)
    }
    ;
    w.Ue.nT = function(Y, R, V, E) {
        var r = V.d
          , K = V.b;
        E = Math.round(E);
        var J = w.Ue.Ho(r * K);
        w.Jc(Y, R);
        w.Ue.IJ(R, J, r, K, E)
    }
    ;
    w.Ue.dH = function(Y, R, V) {
        var E = R.d
          , r = R.b;
        V = Math.round(V);
        var K = w.Ue.k5(E * r * 4);
        w.Ue.tV(Y, K, E, r, V);
        w.Jc(K, Y)
    }
    ;
    w.Ue.ge = function(Y, z) {
        var R = Math.sqrt(12 * Y * Y / z + 1)
          , V = Math.floor(R);
        if (V % 2 == 0)
            V--;
        var E = V + 2
          , r = (12 * Y * Y - z * V * V - 4 * z * V - 3 * z) / (-4 * V - 4)
          , K = Math.round(r)
          , J = [];
        for (var x = 0; x < z; x++)
            J.push(x < K ? V : E);
        return J
    }
    ;
    w.Ue.aeG = function(Y, R, V, E, r) {
        var K = w.Ue.ge(r, 3)
          , J = w.Ue.k5(V * E);
        w.Jc(Y, R);
        w.Ue.xS(R, J, V, E, K[0] - 1 >> 1);
        w.Ue.xS(R, J, V, E, K[1] - 1 >> 1);
        w.Ue.xS(R, J, V, E, K[2] - 1 >> 1)
    }
    ;
    w.Ue.a5m = function(Y, R, V, E, r) {
        var K = w.Ue.ge(r, 2)
          , J = w.Ue.k5(V * E);
        w.Jc(Y, R);
        w.Ue.xS(R, J, V, E, K[0] - 1 >> 1);
        w.Ue.xS(R, J, V, E, K[1] - 1 >> 1)
    }
    ;
    w.Ue.ai5 = function(Y, R, V, E) {
        var r = w.Ue.ge(E, 3)
          , K = w.Ue.k5(R * V * 4);
        w.Ue.Sn(Y, K, R, V, r[0] - 1 >> 1);
        w.Ue.Sn(Y, K, R, V, r[1] - 1 >> 1);
        w.Ue.Sn(Y, K, R, V, r[2] - 1 >> 1)
    }
    ;
    w.Ue.a1P = function(Y, R, V, E, r, K) {
        if (K == null)
            K = 3;
        var J = w.Ue.ge(r, K)
          , t = w.Ue.Ho(V * E);
        w.Jc(Y, R);
        for (var x = 0; x < K; x++)
            w.Ue.IJ(R, t, V, E, (J[x] - 1) / 2)
    }
    ;
    w.Ue.xS = function(Y, R, V, E, r) {
        w.Ue.aeF(Y, R, V, E, r);
        w.Ue.a7u(R, Y, V, E, r)
    }
    ;
    w.Ue.Sn = function(Y, R, V, E, r) {
        w.Ue.tV(Y, R, V, E, r);
        w.Ue.adu(R, Y, V, E, r)
    }
    ;
    w.Ue.IJ = function(Y, R, V, E, r) {
        w.Ue.ai6(Y, R, V, E, r);
        w.Ue.a4V(R, Y, V, E, r)
    }
    ;
    w.Ue.S4 = [];
    w.Ue.JR = function(Y) {
        if (w.Ue.S4[Y])
            return w.Ue.S4[Y];
        var R = 1 / (Y + Y + 1)
          , V = (Y + Y + 1) * 256
          , E = w.T(V);
        for (var x = 0; x < V; x++)
            E[x] = Math.round(x * R);
        w.Ue.S4[Y] = E;
        return E
    }
    ;
    w.Ue.aeF = function(Y, R, V, E, r) {
        var K = 1 / (r + r + 1)
          , J = V - r - r - 1
          , t = w.Ue.JR(r);
        for (var x = 0; x < E; x++) {
            var C = x * V
              , c = C
              , M = C + r
              , a = Y[C]
              , Q = Y[C + V - 1]
              , A = (r + 1) * a;
            for (var p = 0; p < r; p++)
                A += Y[C + p];
            for (var p = 0; p <= r; p++) {
                A += Y[M + p] - a;
                R[C + p] = t[A]
            }
            M += r + 1;
            C += r + 1;
            for (var p = 0; p < J; p++) {
                A += Y[M + p] - Y[c + p];
                R[C + p] = t[A]
            }
            M += J;
            c += J;
            C += J;
            for (var p = V - r; p < V; p++) {
                A += Q - Y[c++];
                R[C++] = t[A]
            }
        }
    }
    ;
    w.Ue.tV = function(Y, R, V, E, r) {
        var K = V << 2
          , J = r << 2
          , t = 1 / (r + r + 1)
          , C = V - r - r - 1
          , c = C << 2
          , M = w.Ue.JR(r);
        for (var x = 0; x < E; x++) {
            var a = x * K
              , Q = a
              , A = a + J
              , p = a + K
              , v = Y[a]
              , W = Y[a + 1]
              , n = Y[a + 2]
              , $ = Y[a + 3]
              , G = (r + 1) * v
              , o = (r + 1) * W
              , B = (r + 1) * n
              , L = (r + 1) * $;
            for (var u = 0; u < J; u += 4) {
                G += Y[a + u];
                o += Y[a + u + 1];
                B += Y[a + u + 2];
                L += Y[a + u + 3]
            }
            for (var u = 0; u <= J; u += 4) {
                G += Y[A] - v;
                R[a] = M[G];
                o += Y[A + 1] - W;
                R[a + 1] = M[o];
                B += Y[A + 2] - n;
                R[a + 2] = M[B];
                L += Y[A + 3] - $;
                R[a + 3] = M[L];
                A += 4;
                a += 4
            }
            for (var u = 0; u < c; u += 4) {
                G += Y[A + u] - Y[Q + u];
                R[a + u] = M[G];
                o += Y[A + u + 1] - Y[Q + u + 1];
                R[a + u + 1] = M[o];
                B += Y[A + u + 2] - Y[Q + u + 2];
                R[a + u + 2] = M[B];
                L += Y[A + u + 3] - Y[Q + u + 3];
                R[a + u + 3] = M[L]
            }
            A += c;
            Q += c;
            a += c;
            v = Y[p - 4];
            W = Y[p - 3];
            n = Y[p - 2];
            $ = Y[p - 1];
            for (var u = V - r; u < V; u++) {
                G += v - Y[Q];
                R[a] = M[G];
                o += W - Y[Q + 1];
                R[a + 1] = M[o];
                B += n - Y[Q + 2];
                R[a + 2] = M[B];
                L += $ - Y[Q + 3];
                R[a + 3] = M[L];
                Q += 4;
                a += 4
            }
        }
    }
    ;
    w.Ue.ai6 = function(Y, R, V, E, r) {
        var K = 1 / (r + r + 1)
          , J = V - r - r - 1;
        for (var x = 0; x < E; x++) {
            var t = x * V
              , C = t
              , c = t + r
              , M = Y[t]
              , a = Y[t + V - 1]
              , Q = (r + 1) * M;
            for (var A = 0; A < r; A++)
                Q += Y[t + A];
            for (var A = 0; A <= r; A++) {
                Q += Y[c + A] - M;
                R[t + A] = Q * K
            }
            c += r + 1;
            t += r + 1;
            for (var A = 0; A < J; A++) {
                Q += Y[c + A] - Y[C + A];
                R[t + A] = Q * K
            }
            c += J;
            C += J;
            t += J;
            for (var A = V - r; A < V; A++) {
                Q += a - Y[C++];
                R[t++] = Q * K
            }
        }
    }
    ;
    w.Ue.a7u = function(Y, R, V, E, r) {
        var K = 1 / (r + r + 1)
          , J = E - r - r - 1
          , t = w.Ue.JR(r);
        for (var x = 0; x < V; x++) {
            var C = x
              , c = C
              , M = C + r * V
              , a = Y[C]
              , Q = Y[C + V * (E - 1)]
              , A = (r + 1) * a;
            for (var p = 0; p < r; p++)
                A += Y[C + p * V];
            for (var p = 0; p <= r; p++) {
                A += Y[M] - a;
                R[C] = t[A];
                M += V;
                C += V
            }
            for (var p = 0; p < J; p++) {
                var v = p * V;
                A += Y[M + v] - Y[c + v];
                R[C + v] = t[A]
            }
            c += J * V;
            M += J * V;
            C += J * V;
            for (var p = E - r; p < E; p++) {
                A += Q - Y[c];
                R[C] = t[A];
                c += V;
                C += V
            }
        }
    }
    ;
    w.Ue.adu = function(Y, R, V, E, r) {
        var K = V << 2
          , J = r << 2
          , t = 1 / (r + r + 1)
          , C = E - r - r - 1
          , c = C << 2
          , M = w.Ue.JR(r);
        for (var x = 0; x < V; x++) {
            var a = x << 2
              , Q = a
              , A = a + r * K
              , p = a + K * (E - 1)
              , v = Y[a]
              , W = Y[a + 1]
              , n = Y[a + 2]
              , $ = Y[a + 3]
              , G = (r + 1) * v
              , o = (r + 1) * W
              , B = (r + 1) * n
              , L = (r + 1) * $;
            for (var u = 0; u < r; u++) {
                var y = a + u * K;
                G += Y[y];
                o += Y[y + 1];
                B += Y[y + 2];
                L += Y[y + 3]
            }
            for (var u = 0; u <= r; u++) {
                G += Y[A] - v;
                R[a] = M[G];
                o += Y[A + 1] - W;
                R[a + 1] = M[o];
                B += Y[A + 2] - n;
                R[a + 2] = M[B];
                L += Y[A + 3] - $;
                R[a + 3] = M[L];
                A += K;
                a += K
            }
            for (var u = 0; u < C; u++) {
                var S = u * K;
                G += Y[A + S] - Y[Q + S];
                R[a + S] = M[G];
                o += Y[A + S + 1] - Y[Q + S + 1];
                R[a + S + 1] = M[o];
                B += Y[A + S + 2] - Y[Q + S + 2];
                R[a + S + 2] = M[B];
                L += Y[A + S + 3] - Y[Q + S + 3];
                R[a + S + 3] = M[L]
            }
            Q += C * K;
            A += C * K;
            a += C * K;
            v = Y[p];
            W = Y[p + 1];
            n = Y[p + 2];
            $ = Y[p + 3];
            for (var u = E - r; u < E; u++) {
                G += v - Y[Q];
                R[a] = M[G];
                o += W - Y[Q + 1];
                R[a + 1] = M[o];
                B += n - Y[Q + 2];
                R[a + 2] = M[B];
                L += $ - Y[Q + 3];
                R[a + 3] = M[L];
                Q += K;
                a += K
            }
        }
    }
    ;
    w.Ue.a4V = function(Y, R, V, E, r) {
        var K = 1 / (r + r + 1)
          , J = E - r - r - 1;
        for (var x = 0; x < V; x++) {
            var t = x
              , C = t
              , c = t + r * V
              , M = Y[t]
              , a = Y[t + V * (E - 1)]
              , Q = (r + 1) * M;
            for (var A = 0; A < r; A++)
                Q += Y[t + A * V];
            for (var A = 0; A <= r; A++) {
                Q += Y[c] - M;
                R[t] = Q * K;
                c += V;
                t += V
            }
            for (var A = 0; A < J; A++) {
                var p = A * V;
                Q += Y[c + p] - Y[C + p];
                R[t + p] = Q * K
            }
            C += J * V;
            c += J * V;
            t += J * V;
            for (var A = E - r; A < E; A++) {
                Q += a - Y[C];
                R[t] = Q * K;
                C += V;
                t += V
            }
        }
    }
    ;
    w.iv = {};
    w.iv.T = function(Y, R, V, E) {
        var r = [];
        for (var K = 0; K < 4; K++)
            for (var J = 0; J < 4; J++)
                r.push(Y + V * J / 3, R + E * K / 3);
        return r
    }
    ;
    w.iv.QT = function(Y, R) {
        var V = Y.slice(0);
        for (var x = 0; x < 4; x++)
            for (var E = 0; E < 4; E++) {
                var r = 2 * (x * 4 + E)
                  , K = 2 * (E * 4 + (3 - x));
                if (R) {
                    var J = r;
                    r = K;
                    K = J
                }
                V[K] = Y[r];
                V[K + 1] = Y[r + 1]
            }
        return V
    }
    ;
    w.iv.amb = new Float64Array(16);
    w.iv.drawImage = function(Y, R, V, E, r, K, J) {
        if (J == null)
            J = !1;
        var t = K.d
          , C = K.b
          , Q = 2;
        r = new Uint32Array(r.buffer);
        R = new Uint32Array(R.buffer);
        var c = w.iv.A.Fk(Y, 0, 1, 0, 1, V, E)
          , M = c.ta
          , a = c.XV
          , A = 1 / Q
          , p = w.iv.Vz
          , v = new Float64Array(2)
          , W = new Uint32Array(30);
        for (var n = 0; n < C; n++)
            for (var $ = 0; $ < t; $++) {
                var G = $ + K.x + .5
                  , o = n + K.y + .5
                  , B = w.iv.A.aeH(M, a, G, o, W)
                  , k = 0
                  , d = 0
                  , P = 0
                  , Z = 0;
                if (B == 0)
                    continue;
                var L = n * t + $
                  , u = w.iv.ja(Y, G, o, M, W, B, !0)
                  , y = p[0] * V
                  , S = p[1] * E;
                if (J) {
                    if (u != -1 && 0 < y && y < V && 0 < S && S < E) {
                        var X = Math.floor(S) * V + Math.floor(y);
                        r[L] = R[X]
                    }
                    continue
                }
                var N = u != -1 && (1 < y && y < V - 1) && (1 < S && S < E - 1);
                if (M[u + 8] < .95) {
                    w.J.k6(y, S, R, V, E, r, L, 0);
                    continue
                }
                for (var x = 0; x < Q; x++)
                    for (var s = 0; s < Q; s++) {
                        var G = $ + K.x + (x + .5) * A
                          , o = n + K.y + (s + .5) * A
                          , u = 0;
                        u = w.iv.ja(Y, G, o, M, W, B, !0);
                        if (u != -1) {
                            var y = p[0]
                              , S = p[1]
                              , y = Math.floor(y * V);
                            S = Math.floor(S * E);
                            var _ = R[S * V + y]
                              , b = _ >>> 24;
                            k += (_ & 255) * b;
                            d += (_ >>> 8 & 255) * b;
                            P += (_ >>> 16 & 255) * b;
                            Z += b
                        }
                    }
                if (Z != 0) {
                    var q = 1 / Z;
                    k = ~~(k * q + .5);
                    d = ~~(d * q + .5);
                    P = ~~(P * q + .5);
                    Z = ~~(Z * A * A + .5);
                    r[L] = Z << 24 | P << 16 | d << 8 | k
                }
            }
    }
    ;
    w.iv.Vz = new Float64Array(5 * 20);
    w.iv.a3x = new Uint32Array(5 * 5 * 20);
    w.iv.ja = function(Y, R, V, E, r, K, J) {
        var t = w.iv.Vz
          , C = w.iv.a3x
          , c = 0
          , M = 0;
        for (var x = 0; x < K; x++) {
            var a = r[x]
              , Q = c;
            c = w.iv.gn(Y, R, V, E, a + 4, J, t, c);
            if (c != Q) {
                C[M] = a;
                M += 5
            }
        }
        if (c == 0)
            return -1;
        else if (c == 5)
            return C[0];
        else {
            var A = 0;
            for (var x = 0; x < c; x += 5)
                if (t[x + 4] < t[A + 4])
                    A = x;
            t[0] = t[A];
            t[1] = t[A + 1];
            t[2] = t[A + 2];
            t[3] = t[A + 3];
            return C[A]
        }
    }
    ;
    w.iv.oG = new Array(10);
    w.iv.gn = function(Y, R, V, E, r, K, J, t) {
        var C = w.iv.oG
          , c = 0
          , M = 0
          , a = 0
          , Q = 0
          , A = 0
          , p = 0
          , v = 0
          , W = E[r]
          , n = E[r + 1]
          , $ = E[r + 2]
          , G = E[r + 3]
          , o = ($ - R) * ($ - R) + (G - V) * (G - V);
        for (var x = 0; x < 5 && o > .05; x++) {
            w.iv.Q9(C, 0, n);
            w.iv.rn(C, 4, W);
            w.iv.Uk(Y, C);
            c = C[8];
            M = C[9];
            w.iv.rn(C, 0, n);
            w.iv.Q9(C, 4, W);
            w.iv.Uk(Y, C);
            a = C[8];
            Q = C[9];
            A = 1 / (c * Q - M * a);
            p = ($ - R) * A;
            v = (G - V) * A;
            W += -Q * p + a * v;
            n += +M * p - c * v;
            w.iv.nM(Y, W, n, C);
            $ = C[8];
            G = C[9];
            o = ($ - R) * ($ - R) + (G - V) * (G - V)
        }
        if (K && (W < 0 || W > 1 || n < 0 || n > 1 || o > .25))
            return t;
        J[t] = W;
        J[t + 1] = n;
        J[t + 2] = $;
        J[t + 3] = G;
        J[t + 4] = c * Q - M * a;
        return t + 5
    }
    ;
    w.iv.apply = function(Y, R, V) {
        var E = V.x
          , r = V.y
          , K = 1 / V.d
          , J = 1 / V.b
          , t = w.iv.oG;
        for (var C = 0; C < R.length; C += 2) {
            var c = (R[C] - E) * K
              , M = (R[C + 1] - r) * J;
            w.iv.nM(Y, c, M, t);
            R[C] = t[8];
            R[C + 1] = t[9]
        }
    }
    ;
    w.iv.nM = function(Y, R, V, E) {
        w.iv.Q9(E, 0, V);
        w.iv.Q9(E, 4, R);
        w.iv.Uk(Y, E)
    }
    ;
    w.iv.rn = function(Y, x, R) {
        var V = 1 - R;
        Y[x] = -3 * (V * V);
        Y[x + 1] = 3 * (V * V) - 6 * (R * V);
        Y[x + 2] = 6 * (R * V) - 3 * (R * R);
        Y[x + 3] = 3 * (R * R)
    }
    ;
    w.iv.Q9 = function(Y, x, R) {
        var V = 1 - R;
        Y[x] = V * (V * V);
        Y[x + 1] = 3 * R * (V * V);
        Y[x + 2] = 3 * (R * R) * V;
        Y[x + 3] = R * R * R
    }
    ;
    w.iv.Uk = function(Y, R) {
        var V = 0
          , E = 0
          , r = 0;
        r = R[0] * R[4];
        V += Y[0] * r;
        E += Y[1] * r;
        r = R[0] * R[5];
        V += Y[2] * r;
        E += Y[3] * r;
        r = R[0] * R[6];
        V += Y[4] * r;
        E += Y[5] * r;
        r = R[0] * R[7];
        V += Y[6] * r;
        E += Y[7] * r;
        r = R[1] * R[4];
        V += Y[8] * r;
        E += Y[9] * r;
        r = R[1] * R[5];
        V += Y[10] * r;
        E += Y[11] * r;
        r = R[1] * R[6];
        V += Y[12] * r;
        E += Y[13] * r;
        r = R[1] * R[7];
        V += Y[14] * r;
        E += Y[15] * r;
        r = R[2] * R[4];
        V += Y[16] * r;
        E += Y[17] * r;
        r = R[2] * R[5];
        V += Y[18] * r;
        E += Y[19] * r;
        r = R[2] * R[6];
        V += Y[20] * r;
        E += Y[21] * r;
        r = R[2] * R[7];
        V += Y[22] * r;
        E += Y[23] * r;
        r = R[3] * R[4];
        V += Y[24] * r;
        E += Y[25] * r;
        r = R[3] * R[5];
        V += Y[26] * r;
        E += Y[27] * r;
        r = R[3] * R[6];
        V += Y[28] * r;
        E += Y[29] * r;
        r = R[3] * R[7];
        V += Y[30] * r;
        E += Y[31] * r;
        R[8] = V;
        R[9] = E
    }
    ;
    w.iv.A = {};
    w.iv.A.cg = 12;
    w.iv.A.oi = new Uint32Array(50);
    w.iv.A.aeH = function(Y, R, V, E, r) {
        var K = 0
          , J = w.iv.A.oi
          , t = 1;
        J[0] = 0;
        while (t != 0) {
            var C = J[--t];
            if (Y[C + 0] <= V && Y[C + 1] <= E && V < Y[C + 2] && E < Y[C + 3]) {
                if (R[C + C + 18] == 0) {
                    r[K] = C;
                    K++
                } else {
                    J[t] = R[C + C + 18];
                    J[t + 1] = R[C + C + 19];
                    t += 2
                }
            }
        }
        return K
    }
    ;
    w.iv.A.agT = function(Y, R, V, E, r) {
        var K = 0
          , J = w.iv.A.E3
          , t = w.iv.A.oi
          , C = 1
          , c = 0
          , M = 999999999999;
        t[0] = 0;
        while (C != 0) {
            var a = t[--C]
              , Q = J(V, E, Y[a + 0], Y[a + 1])
              , A = J(V, E, Y[a + 0], Y[a + 3])
              , p = J(V, E, Y[a + 2], Y[a + 1])
              , v = J(V, E, Y[a + 2], Y[a + 3])
              , W = Math.min(Q, Math.min(A, Math.min(p, v)))
              , n = Math.max(Q, Math.max(A, Math.max(p, v)));
            if (W > M)
                continue;
            if (R[a + a + 18] == 0) {
                if (n < M) {
                    M = n;
                    c = a
                }
            } else {
                t[C] = R[a + a + 18];
                t[C + 1] = R[a + a + 19];
                C += 2
            }
        }
        r[K] = c;
        K++;
        return K
    }
    ;
    w.iv.A.E3 = function(Y, R, V, E) {
        return (V - Y) * (V - Y) + (E - R) * (E - R)
    }
    ;
    w.iv.A.rX = null;
    w.iv.A.aW = null;
    w.iv.A.Fk = function(Y, R, V, E, r, K, J) {
        if (K == null) {
            K = 1;
            J = 1
        }
        w.iv.A.aW = Y;
        if (w.iv.A.rX == null) {
            w.iv.A.rX = {
                ta: new Float64Array(15e3 * 8),
                XV: null
            };
            w.iv.A.rX.XV = new Uint32Array(w.iv.A.rX.ta.buffer)
        }
        var t = w.iv.A.rX;
        w.iv.A._x(Y, R, V, E, r, 0, t.ta, t.XV, 0, K, J);
        return t
    }
    ;
    w.iv.A._x = function(Y, R, V, E, r, K, J, t, C, c, M) {
        var a = w.H.Hh(Y), Q = C, A = w.iv.A.aW, p = (R + V) / 2, v = (E + r) / 2, W = w.iv.oG, n = w.iv.Vz, $ = w.iv.amb, H, iP, hq;
        w.iv.nM(A, p, v, W);
        var G = W[8]
          , o = W[9];
        $[0] = p;
        $[1] = v;
        $[2] = G;
        $[3] = o;
        w.iv.gn(A, G + 1, o, $, 0, !1, n, 0);
        var B = (p - n[0]) * c
          , L = (v - n[1]) * M
          , u = Math.sqrt(B * B + L * L);
        w.iv.gn(A, G, o + 1, $, 0, !1, n, 0);
        var y = (p - n[0]) * c
          , S = (v - n[1]) * M
          , X = Math.sqrt(y * y + S * S);
        J[Q] = a.x;
        J[Q + 1] = a.y;
        J[Q + 2] = a.x + a.d;
        J[Q + 3] = a.y + a.b;
        J[Q + 4] = p;
        J[Q + 5] = v;
        J[Q + 6] = G;
        J[Q + 7] = o;
        J[Q + 8] = .5 * (u + X);
        t[Q + Q + 18] = 0;
        t[Q + Q + 19] = 0;
        C += 10;
        w.iv.Q9(W, 0, .1);
        w.iv.rn(W, 4, .1);
        w.iv.Uk(Y, W);
        var N = W[8]
          , k = W[9];
        w.iv.rn(W, 0, .1);
        w.iv.Q9(W, 4, .7);
        w.iv.Uk(Y, W);
        var d = W[8]
          , P = W[9];
        w.iv.Q9(W, 0, .8);
        w.iv.rn(W, 4, .8);
        w.iv.Uk(Y, W);
        var Z = W[8]
          , s = W[9];
        w.iv.rn(W, 0, .9);
        w.iv.Q9(W, 4, .2);
        w.iv.Uk(Y, W);
        var _ = W[8]
          , b = W[9]
          , q = (Z - N) * (Z - N) + (_ - d) * (_ - d) + (s - k) * (s - k) + (b - P) * (b - P);
        if (C >= J.length) {
            console.log("Buffer not long enough");
            throw "e"
        }
        if (K == w.iv.A.cg || q < 2)
            return C;
        var e = w.iv.A.D8(Y, !0)
          , g = w.H.Hh(e[0])
          , F = w.H.Hh(e[1])
          , l = w.iv.A.D8(Y, !1)
          , i = w.H.Hh(l[0])
          , aM = w.H.Hh(l[1]);
        if (g.d + g.b + F.d + F.b < i.d + i.b + aM.d + aM.b) {
            hq = !0;
            H = e[0];
            iP = e[1]
        } else {
            hq = !1;
            H = l[0];
            iP = l[1]
        }
        var iG = (R + V) / 2
          , h = (E + r) / 2
          , dw = R
          , eK = E
          , f9 = V
          , gn = r
          , d$ = R
          , dJ = E
          , br = V
          , hE = r;
        if (hq) {
            f9 = d$ = iG
        } else {
            gn = dJ = h
        }
        t[Q + Q + 18] = C;
        C = w.iv.A._x(H, dw, f9, eK, gn, K + 1, J, t, C, c, M);
        t[Q + Q + 19] = C;
        C = w.iv.A._x(iP, d$, br, dJ, hE, K + 1, J, t, C, c, M);
        var gN = t[Q + Q + 18]
          , aK = t[Q + Q + 19];
        J[Q] = Math.min(J[gN], J[aK]);
        J[Q + 1] = Math.min(J[gN + 1], J[aK + 1]);
        J[Q + 2] = Math.max(J[gN + 2], J[aK + 2]);
        J[Q + 3] = Math.max(J[gN + 3], J[aK + 3]);
        return C
    }
    ;
    w.iv.A.D8 = function(Y, R) {
        var V = 0
          , E = 0
          , r = 0
          , K = 0
          , J = 0
          , t = 0
          , C = 0
          , c = 0
          , M = Y.slice(0)
          , a = Y.slice(0);
        for (var x = 0; x < 4; x++) {
            V = R ? Y[x * 8 + 2 * 0] : Y[0 * 8 + 2 * x];
            E = R ? Y[x * 8 + 2 * 0 + 1] : Y[0 * 8 + 2 * x + 1];
            r = R ? Y[x * 8 + 2 * 1] : Y[1 * 8 + 2 * x];
            K = R ? Y[x * 8 + 2 * 1 + 1] : Y[1 * 8 + 2 * x + 1];
            J = R ? Y[x * 8 + 2 * 2] : Y[2 * 8 + 2 * x];
            t = R ? Y[x * 8 + 2 * 2 + 1] : Y[2 * 8 + 2 * x + 1];
            C = R ? Y[x * 8 + 2 * 3] : Y[3 * 8 + 2 * x];
            c = R ? Y[x * 8 + 2 * 3 + 1] : Y[3 * 8 + 2 * x + 1];
            var Q = (V + r) / 2
              , A = (E + K) / 2
              , p = (r + J) / 2
              , v = (K + t) / 2
              , W = (J + C) / 2
              , n = (t + c) / 2
              , $ = (Q + p) / 2
              , G = (A + v) / 2
              , o = (p + W) / 2
              , B = (v + n) / 2
              , L = ($ + o) / 2
              , u = (G + B) / 2;
            if (R) {
                M[x * 8 + 2 * 0] = V;
                M[x * 8 + 2 * 0 + 1] = E;
                M[x * 8 + 2 * 1] = Q;
                M[x * 8 + 2 * 1 + 1] = A;
                M[x * 8 + 2 * 2] = $;
                M[x * 8 + 2 * 2 + 1] = G;
                M[x * 8 + 2 * 3] = L;
                M[x * 8 + 2 * 3 + 1] = u;
                a[x * 8 + 2 * 0] = L;
                a[x * 8 + 2 * 0 + 1] = u;
                a[x * 8 + 2 * 1] = o;
                a[x * 8 + 2 * 1 + 1] = B;
                a[x * 8 + 2 * 2] = W;
                a[x * 8 + 2 * 2 + 1] = n;
                a[x * 8 + 2 * 3] = C;
                a[x * 8 + 2 * 3 + 1] = c
            } else {
                M[0 * 8 + 2 * x] = V;
                M[0 * 8 + 2 * x + 1] = E;
                M[1 * 8 + 2 * x] = Q;
                M[1 * 8 + 2 * x + 1] = A;
                M[2 * 8 + 2 * x] = $;
                M[2 * 8 + 2 * x + 1] = G;
                M[3 * 8 + 2 * x] = L;
                M[3 * 8 + 2 * x + 1] = u;
                a[0 * 8 + 2 * x] = L;
                a[0 * 8 + 2 * x + 1] = u;
                a[1 * 8 + 2 * x] = o;
                a[1 * 8 + 2 * x + 1] = B;
                a[2 * 8 + 2 * x] = W;
                a[2 * 8 + 2 * x + 1] = n;
                a[3 * 8 + 2 * x] = C;
                a[3 * 8 + 2 * x + 1] = c
            }
        }
        return [M, a]
    }
    ;
    w.XO = {};
    w.XO.a7P = function(Y, R, V) {
        var E = w.XO.aaH(R, V)
          , r = w.XO.z2(E, Y, R, V);
        return {
            rD: E,
            Ni: r
        }
    }
    ;
    w.XO.aag = function(Y, R, V) {
        var E = Math.round(Y.length / 8)
          , r = new Uint32Array(E)
          , K = new Uint8Array(E)
          , J = new Uint32Array(E);
        w.h3(r, 4294967295, 0);
        r[V] = 0;
        var t = new fo(E);
        t.push(V, r[V]);
        var C = {
            rD: Y,
            Ni: R,
            _Q: r,
            YD: K,
            Xg: J,
            Nz: t,
            acd: V
        };
        return C
    }
    ;
    w.XO.Vh = function(Y, R) {
        var V = Y.rD
          , E = Y.Ni
          , r = Y._Q
          , K = Y.YD
          , J = Y.Xg
          , t = Y.Nz;
        while (!t.uD() && (R == null || K[R] == 0)) {
            var C = t.pop();
            K[C] = 1;
            for (var x = 0; x < 8; x++) {
                var c = V[8 * C + x];
                if (c == -1 || K[c])
                    continue;
                var M = r[C] + E[8 * C + x];
                if (t.contains(c) && M < r[c])
                    t.remove(c, r[c]);
                if (!t.contains(c)) {
                    r[c] = M;
                    J[c] = C;
                    t.push(c, r[c])
                }
            }
        }
    }
    ;