function w() {}
    w.cw = {};
    w.cP = document.createElement("canvas");
    w.GS = w.cP.getContext("2d");
   
    w.gc = function(Y) {
        var R = Y.toString(16);
        while (R.length < 6)
            R = "0" + R;
        return R
    }
    
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

    w.XO.a1G = function(Y, R, V) {
        var E = new Float32Array(R * V);
        for (var r = 0; r < V; r++)
            for (var K = 0; K < R; K++) {
                var x = r * R + K
                  , J = -16 * Y[x];
                if (1 < K && K < R - 2 && 1 < r && r < V - 2) {
                    J += Y[x - R - R];
                    J += Y[x - R - 1] + 2 * Y[x - R] + Y[x - R + 1];
                    J += Y[x - 2] + 2 * Y[x - 1] + 2 * Y[x + 1] + Y[x + 2];
                    J += Y[x + R - 1] + 2 * Y[x + R] + Y[x + R + 1];
                    J += Y[x + R + R]
                }
                E[x] = J / 16
            }
        return E
    }
    ;
    w.XO.a9y = function(Y, R, V) {
        var E = new Float32Array(R * V)
          , x = 0
          , r = 0;
        for (var K = 0; K < V; K++)
            for (var J = 0; J < R; J++) {
                var t = 0
                  , C = 0;
                if (0 < J && J < R - 1)
                    t = Y[x + 1] - Y[x - 1];
                if (0 < K && K < V - 1)
                    C = Y[x + R] - Y[x - R];
                E[x] = Math.sqrt(t * t + C * C);
                if (E[x] > r)
                    r = E[x];
                x++
            }
        var c = R * V
          , M = r == 0 ? 0 : 1 / r;
        for (var x = 0; x < c; x++)
            E[x] = 1 - E[x] * M;
        return E
    }
    ;
    w.XO.aej = function(Y, R, V) {
        var E = new Float32Array(R * V * 2)
          , x = 0;
        for (var r = 0; r < V; r++)
            for (var K = 0; K < R; K++) {
                var J = 0
                  , t = 0;
                if (0 < K && K < R - 1 && 0 < r && r < V - 1) {
                    J = 2 * Y[x + 1] - 2 * Y[x - 1];
                    t = 2 * Y[x + R] - 2 * Y[x - R]
                }
                var C = Math.sqrt(J * J + t * t);
                if (C != 0) {
                    E[2 * x] = J / C;
                    E[2 * x + 1] = t / C
                } else {
                    E[2 * x] = J;
                    E[2 * x + 1] = t
                }
                x++
            }
        return E
    }
    ;
    w.XO.z2 = function(Y, R, V, E) {
        var r = w.XO.a1G(R, V, E)
          , K = w.XO.a9y(R, V, E)
          , J = w.XO.aej(R, V, E)
          , t = 256
          , C = new Float32Array(t);
        for (var x = 0; x < t; x++)
            C[x] = Math.acos(-1 + 2 * x / (t - 1));
        var c = [-1, 0, 1, 1, 1, 0, -1, -1]
          , M = [-1, -1, -1, 0, 1, 1, 1, 0]
          , a = 1 / Math.sqrt(2)
          , Q = new Uint8Array(V * E * 8)
          , A = V * E;
        for (var p = 0; p < A; p++) {
            var v = r[p]
              , W = J[2 * p + 1]
              , n = -J[2 * p];
            for (var $ = 0; $ < 8; $++) {
                var G = 8 * p + $
                  , o = Y[G];
                if (o == -1)
                    Q[G] = -1;
                else {
                    var B = ($ & 1) == 0
                      , L = v * r[o] >= 0 ? 0 : 1
                      , u = K[o] * (B ? 1 : a)
                      , y = 1
                      , S = J[2 * o + 1]
                      , X = -J[2 * o];
                    if (!(W == 0 && n == 0 || S == 0 && X == 0)) {
                        var N = c[$]
                          , k = M[$];
                        if (W * c[$] + n * M[$] < 0) {
                            N = -N;
                            k = -k
                        }
                        if (B) {
                            N *= a;
                            k *= a
                        }
                        var d = W * N + n * k
                          , P = S * N + X * k
                          , Z = 2 / (3 * Math.PI) * (C[Math.floor((.5 + .5 * d) * (t - 1))] + C[Math.floor((.5 + .5 * P) * (t - 1))]);
                        y = Z
                    }
                    var s = Math.round(20 * (.43 * L + .43 * y + .14 * u));
                    Q[G] = Math.max(1, Math.min(255, s))
                }
            }
        }
        console.log(Q);
        return Q
    }
    ;
    w.XO.aaH = function(Y, R) {
        var V = new Int32Array(Y * R * 8)
          , E = V
          , x = 0
          , r = 0;
        E.fill(-1);
        for (var K = 0; K < R; K++)
            for (var J = 0; J < Y; J++) {
                if (K > 0 && J > 0)
                    E[r + 0] = x - Y - 1;
                if (K > 0)
                    E[r + 1] = x - Y;
                if (K > 0 && J < Y - 1)
                    E[r + 2] = x - Y + 1;
                if (J < Y - 1)
                    E[r + 3] = x + 1;
                if (K < R - 1 && J < Y - 1)
                    E[r + 4] = x + Y + 1;
                if (K < R - 1)
                    E[r + 5] = x + Y;
                if (K < R - 1 && J > 0)
                    E[r + 6] = x + Y - 1;
                if (J > 0)
                    E[r + 7] = x - 1;
                x++;
                r += 8
            }
        return V
    }
    ;
    w.RV = {};
    w.RV.Mg = function(Y) {
        var R = Y.slice(0)
          , V = 0;
        for (var x = 0; x < Y.length; x++)
            V += Y[x];
        for (var x = 0; x < Y.length; x++)
            R[x] /= V;
        return R
    }
    ;
    w.RV.Mp = [w.RV.Mg([1, 2, 1, 2, 16, 2, 1, 2, 1]), w.RV.Mg([1, 2, 1, 2, 4, 2, 1, 2, 1]), w.RV.Mg([0, -1, 0, -1, 8, -1, 0, -1, 0]), w.RV.Mg([-.7, -1, -.7, -1, 10, -1, -.7, -1, -.7]), [-1, 0, 1, -2, 0, 2, -1, 0, 1], [1, 2, 1, 0, 0, 0, -1, -2, -1]];
    w.RV.Ad = function(Y, R, V, E, r, K, J, t) {
        if (J == null)
            J = !1;
        if (t == null)
            t = !1;
        var C = Math.floor(Math.sqrt(r.length))
          , c = C - 1 >>> 1
          , M = new Uint32Array(Y.buffer)
          , R = new Uint8ClampedArray(R.buffer);
        for (var x = 0; x < E; x++)
            for (var a = 0; a < V; a++) {
                var Q = 0
                  , A = 0
                  , p = 0
                  , v = 0;
                for (var W = 0; W < C; W++)
                    for (var n = 0; n < C; n++) {
                        var $ = r[W * C + n];
                        if ($ == 0)
                            continue;
                        var G = a - c + n
                          , o = x - c + W;
                        if (G < 0)
                            G = 0;
                        else if (G > V - 1)
                            G = V - 1;
                        if (o < 0)
                            o = 0;
                        else if (o > E - 1)
                            o = E - 1;
                        if (t && M[o * V + G] >>> 24 == 0) {
                            o = x;
                            G = a
                        }
                        var B = M[o * V + G];
                        Q += (B & 255) * $;
                        A += (B >>> 8 & 255) * $;
                        p += (B >>> 16 & 255) * $;
                        v += (B >>> 24 & 255) * $
                    }
                if (J) {
                    if (Q < 0)
                        Q = -Q;
                    if (A < 0)
                        A = -A;
                    if (p < 0)
                        p = -p;
                    if (v < 0)
                        v = -v
                }
                if (t) {
                    Q = Math.max(0, Math.min(255, Q));
                    A = Math.max(0, Math.min(255, A));
                    p = Math.max(0, Math.min(255, p));
                    v = Math.max(0, Math.min(255, v))
                }
                var L = x * V + a << 2;
                R[L] = ~~(.5 + Q);
                R[L + 1] = ~~(.5 + A);
                R[L + 2] = ~~(.5 + p);
                R[L + 3] = 255 - K & R[L + 3] | K & ~~(.5 + v)
            }
    }
    ;
    w.RV.PY = function(Y, R, V, E) {
        var r = Y.length
          , K = new Uint8Array(r);
        w.RV.Ad(Y, R, V, E, w.RV.Mp[4], 0, !0);
        w.RV.Ad(Y, K, V, E, w.RV.Mp[5], 0, !0);
        for (var x = 0; x < r; x += 4) {
            var J = R[x]
              , t = R[x + 1]
              , C = R[x + 2]
              , c = R[x + 3]
              , M = K[x]
              , a = K[x + 1]
              , Q = K[x + 2]
              , A = K[x + 3];
            R[x] = 255 - Math.max(0, Math.min(255, Math.sqrt(J * J + M * M)));
            R[x + 1] = 255 - Math.max(0, Math.min(255, Math.sqrt(t * t + a * a)));
            R[x + 2] = 255 - Math.max(0, Math.min(255, Math.sqrt(C * C + Q * Q)))
        }
    }
    ;
    w.RV.$O = function(Y, R, V, E) {
        var r = Y.length
          , K = new Uint8Array(r);
        w.RV.zY(Y, R, V, E, w.RV.Mp[4], !0);
        w.RV.zY(Y, K, V, E, w.RV.Mp[5], !0);
        for (var x = 0; x < r; x++) {
            var J = R[x]
              , t = K[x];
            R[x] = 255 - Math.max(0, Math.min(255, Math.sqrt(J * J + t * t)))
        }
    }
    ;
    w.RV.zY = function(Y, R, V, E, r, K) {
        R = new Uint8ClampedArray(R.buffer);
        var J = [-V - 1, -V, -V + 1, -1, 0, 1, V - 1, V, V + 1]
          , t = E - 1
          , C = V - 1;
        for (var x = 1; x < t; x++)
            for (var c = 1; c < C; c++) {
                var M = x * V + c
                  , a = w.RV.Fe(Y, M, V, r);
                if (K) {
                    if (a < 0)
                        a = -a
                }
                R[M] = ~~(a + .5)
            }
    }
    ;
    w.RV.Fe = function(Y, R, V, E) {
        return Y[R - V - 1] * E[0] + Y[R - V] * E[1] + Y[R - V + 1] * E[2] + Y[R - 1] * E[3] + Y[R] * E[4] + Y[R + 1] * E[5] + Y[R + V - 1] * E[6] + Y[R + V] * E[7] + Y[R + V + 1] * E[8]
    }
    ;
    w.RV.gI = function(Y, R, V, E, r) {
        var K = [-V - 1, -V, -V + 1, -1, 0, 1, V - 1, V, V + 1]
          , J = E - 1
          , t = V - 1;
        for (var x = 1; x < J; x++)
            for (var C = 1; C < t; C++) {
                var c = x * V + C;
                R[c] = w.RV.a9n(Y, c, V, r)
            }
    }
    ;
    w.RV.a9n = function(Y, R, V, E) {
        return Y[R - V - 1] * E[0] + Y[R - V] * E[1] + Y[R - V + 1] * E[2] + Y[R - 1] * E[3] + Y[R] * E[4] + Y[R + 1] * E[5] + Y[R + V - 1] * E[6] + Y[R + V] * E[7] + Y[R + V + 1] * E[8]
    }
    ;
    w.gr = {};
    w.gr.a94 = function() {
        function Y(J, t, C, c, M, a, Q) {
            if (M == 0) {
                t.set(J);
                return
            }
            var A = w.T(C * c)
              , p = w.T(C * c);
            if (w.mo(J)) {
                R(J, t, C, c, M, a, Q);
                var v = [w.gr.O9, w.gr.AI]
                  , W = v.indexOf(a)
                  , n = W != -1 ? v[1 - W] : a;
                w.vH(J, A, 3);
                w.gr.Q1(A, p, C, c, M, n, Q);
                w.hL(p, t, 3)
            } else {
                for (var x = 0; x < 3; x++) {
                    w.vH(J, A, x);
                    w.gr.Q1(A, p, C, c, M, a, Q);
                    w.hL(p, t, x)
                }
            }
        }
        function R(J, t, C, c, M, a, Q) {
            var A = 0
              , p = new ArrayBuffer(512 * 4 * 3)
              , v = [new Int32Array(p,0), new Int32Array(p,2048), new Int32Array(p,2 * 2048)]
              , W = 1 + 2 * Math.round(Math.sqrt(M))
              , n = W >>> 1
              , $ = new Array(W)
              , G = new Array(W);
            for (var x = 0; x < W; x++) {
                var p = new ArrayBuffer(512 * 4 * 3);
                $[x] = [new Int32Array(p,0), new Int32Array(p,2048), new Int32Array(p,2 * 2048)];
                G[x] = $[x][0]
            }
            var o = a[0]
              , B = a[1]
              , L = v[0];
            for (var u = 0; u < C; u++)
                if (u < M || u > C - M - W - 1) {
                    L.fill(0);
                    var y = Math.max(u - M, 0)
                      , S = Math.min(C, u + M + 1)
                      , X = S - y;
                    for (var N = 0; N < M; N++)
                        E(L, J, N * C + y, N * C + S, 1);
                    for (var N = 0; N < c; N++) {
                        var k = N - M - 1
                          , d = N + M;
                        if (d < c)
                            E(L, J, d * C + y, d * C + S, 1);
                        if (k >= 0)
                            E(L, J, k * C + y, k * C + S, -1);
                        var P = N * C + u << 2;
                        A = L[300];
                        if (A != 0)
                            for (var x = 0; x < 3; x++)
                                t[P + x] = o(v[x], J[P + x], A, Q)
                    }
                } else {
                    for (var x = 0; x < W; x++)
                        G[x].fill(0);
                    var y = u - M + n
                      , S = u + M + 1 + n;
                    for (var N = 0; N < M; N++)
                        V(G, J, N * C + y, N * C + S, 1, n);
                    for (var N = 0; N < c; N++) {
                        var k = N - M - 1
                          , d = N + M;
                        if (k >= 0)
                            V(G, J, k * C + y, k * C + S, -1, n);
                        if (d < c)
                            V(G, J, d * C + y, d * C + S, 1, n);
                        var Z = $[n];
                        A = Z[0][300];
                        for (var x = 0; x < n; x++) {
                            var s = n - 1 - x
                              , _ = n + 1 + x
                              , b = $[s]
                              , q = $[_]
                              , e = A + b[0][300]
                              , g = A + q[0][300]
                              , F = N * C + u + s << 2
                              , l = N * C + u + _ << 2;
                            if (e != 0)
                                for (var i = 0; i < 3; i++)
                                    t[F + i] = B(Z[i], b[i], J[F + i], e, Q);
                            if (g != 0)
                                for (var i = 0; i < 3; i++)
                                    t[l + i] = B(Z[i], q[i], J[l + i], g, Q)
                        }
                        var P = N * C + u + n << 2;
                        if (A != 0)
                            for (var i = 0; i < 3; i++)
                                t[P + i] = o(Z[i], J[P + i], A, Q)
                    }
                    u += W - 1
                }
        }
        function V(J, t, C, c, M, a) {
            var Q = r
              , A = C << 2
              , p = c << 2;
            Q(J[a - 1], t, C - 1 << 2, M);
            Q(J[a - 1], t, c - 1 << 2, -M);
            Q(J[a + 1], t, c << 2, M);
            Q(J[a + 1], t, C << 2, -M);
            for (var x = 1; x < a; x++) {
                var v = J[a - x - 1]
                  , W = J[a + x + 1];
                for (var n = 0; n <= x; n++) {
                    var $ = n << 2;
                    Q(v, t, C - 1 - n << 2, M);
                    Q(v, t, c - 1 - n << 2, -M);
                    Q(W, t, c + n << 2, M);
                    Q(W, t, C + n << 2, -M)
                }
            }
            E(J[a], t, C, c, M)
        }
        function E(J, t, x, C, c) {
            var M = x << 2
              , a = C << 2;
            while (M < a) {
                r(J, t, M, c);
                M += 4
            }
        }
        function r(J, t, C, c) {
            var M = c * t[C + 3];
            J[300] += M;
            K(J, t[C], 0, M);
            K(J, t[C + 1], 512, M);
            K(J, t[C + 2], 1024, M)
        }
        function K(J, t, C, c) {
            J[C | t] += c;
            J[C | 256 | t >>> 4] += c
        }
        return Y
    }();
    w.gr.Q1 = function() {
        function Y(a, Q, A, p, v, W, n) {
            if (v == 0) {
                Q.set(a);
                return
            }
            if (v <= 80)
                R(a, Q, A, p, v, W, n);
            else
                K(a, Q, A, p, v, W, n)
        }
        function R(a, Q, A, p, v, W, n) {
            var $ = 0
              , G = new Int32Array(512)
              , o = 1 + 2 * Math.round(Math.sqrt(v))
              , B = o >>> 1
              , L = new Array(o);
            for (var x = 0; x < o; x++)
                L[x] = new Int32Array(512);
            var u = W[0]
              , y = W[1];
            for (var S = 0; S < A; S++)
                if (S < v || S > A - v - o - 1) {
                    G.fill(0);
                    $ = 0;
                    var X = Math.max(S - v, 0)
                      , N = Math.min(A, S + v + 1)
                      , k = N - X;
                    for (var d = 0; d < v; d++) {
                        $ += k;
                        E(G, a, d * A + X, d * A + N, 1)
                    }
                    for (var d = 0; d < p; d++) {
                        var P = d - v - 1
                          , Z = d + v;
                        if (P >= 0) {
                            $ -= k;
                            E(G, a, P * A + X, P * A + N, -1)
                        }
                        if (Z < p) {
                            $ += k;
                            E(G, a, Z * A + X, Z * A + N, 1)
                        }
                        var s = u(G, a[d * A + S], $, n);
                        Q[d * A + S] = s
                    }
                } else {
                    for (var x = 0; x < o; x++)
                        L[x].fill(0);
                    $ = 0;
                    var X = S - v + B
                      , N = S + v + 1 + B
                      , k = N - X;
                    for (var d = 0; d < v; d++) {
                        $ += k;
                        V(L, a, d * A + X, d * A + N, 1, B)
                    }
                    for (var d = 0; d < p; d++) {
                        var P = d - v - 1
                          , Z = d + v;
                        if (P >= 0) {
                            $ -= k;
                            V(L, a, P * A + X, P * A + N, -1, B)
                        }
                        if (Z < p) {
                            $ += k;
                            V(L, a, Z * A + X, Z * A + N, 1, B)
                        }
                        for (var x = 0; x < B; x++) {
                            var _ = B - 1 - x
                              , b = B + 1 + x;
                            Q[d * A + S + _] = y(L[B], L[_], a[d * A + S + _], $, n);
                            Q[d * A + S + b] = y(L[B], L[b], a[d * A + S + b], $, n)
                        }
                        Q[d * A + S + B] = u(L[B], a[d * A + S + B], $, n)
                    }
                    S += o - 1
                }
        }
        function V(a, Q, A, p, v, W) {
            var n = r;
            n(a[W - 1], Q[A - 1], 0, v);
            n(a[W - 1], Q[p - 1], 0, -v);
            n(a[W + 1], Q[p], 0, v);
            n(a[W + 1], Q[A], 0, -v);
            for (var x = 1; x < W; x++) {
                var $ = a[W - x - 1]
                  , G = a[W + x + 1];
                for (var o = 0; o <= x; o++) {
                    n($, Q[A - 1 - o], 0, v);
                    n($, Q[p - 1 - o], 0, -v);
                    n(G, Q[p + o], 0, v);
                    n(G, Q[A + o], 0, -v)
                }
            }
            E(a[W], Q, A, p, v)
        }
        function E(a, Q, x, A, p) {
            while (x < A)
                r(a, Q[x++], 0, p)
        }
        function r(a, Q, A, p) {
            a[A | Q] += p;
            a[A | 256 | Q >>> 4] += p
        }
        function K(a, Q, A, p, v, W, n) {
            var $ = 0
              , G = new Int32Array(512)
              , o = new Int32Array(1 * A)
              , B = new Int32Array(512 * A)
              , L = Math.min(v, A)
              , u = Math.min(v, p)
              , y = W[0];
            for (var S = 0; S < u; S++)
                J(B, o, a, A, S, 1);
            for (var S = 0; S < p; S++) {
                if (S + v < p)
                    J(B, o, a, A, S + v, 1);
                if (S - v - 1 >= 0)
                    J(B, o, a, A, S - v - 1, -1);
                G.fill(0);
                $ = 0;
                for (var X = 0; X < L; X++) {
                    $ += o[X];
                    t(G, B, X)
                }
                for (var X = 0; X < A; X++) {
                    var N = X - v - 1
                      , k = X + v;
                    if (N >= 0 && o[N] != 0) {
                        $ -= o[N];
                        C(G, B, N)
                    }
                    if (k < A && o[k] != 0) {
                        $ += o[k];
                        t(G, B, k)
                    }
                    var d = $ == 0 ? 0 : y(G, a[S * A + X], $, n);
                    Q[S * A + X] = d
                }
            }
        }
        function J(a, Q, A, p, v, W) {
            var x = v * p;
            for (var n = 0; n < p; n++) {
                r(a, A[x + n], n << 9, W);
                Q[n] += W
            }
        }
        function t(a, Q, A) {
            for (var x = 0; x < 16; x++) {
                var p = Q[A << 9 | 256 | x];
                if (p == 0)
                    continue;
                a[256 | x] += p;
                var v = x << 4
                  , W = A << 9 | v;
                c(a, Q, v, W);
                c(a, Q, v + 4, W + 4);
                c(a, Q, v + 8, W + 8);
                c(a, Q, v + 12, W + 12)
            }
        }
        function C(a, Q, A) {
            for (var x = 0; x < 16; x++) {
                var p = Q[A << 9 | 256 | x];
                if (p == 0)
                    continue;
                a[256 | x] -= p;
                var v = x << 4
                  , W = A << 9 | v;
                M(a, Q, v, W);
                M(a, Q, v + 4, W + 4);
                M(a, Q, v + 8, W + 8);
                M(a, Q, v + 12, W + 12)
            }
        }
        function c(a, Q, A, p) {
            a[A] += Q[p];
            a[A + 1] += Q[p + 1];
            a[A + 2] += Q[p + 2];
            a[A + 3] += Q[p + 3]
        }
        function M(a, Q, A, p) {
            a[A] -= Q[p];
            a[A + 1] -= Q[p + 1];
            a[A + 2] -= Q[p + 2];
            a[A + 3] -= Q[p + 3]
        }
        return Y
    }();
    w.gr.AI = [function(Y, R, V, E) {
        var x = 15;
        while (Y[256 | x] == 0 && x > 0)
            x--;
        x = (x << 4) + 15;
        while (Y[x] == 0 && x > 0)
            x--;
        return x
    }
    , function(Y, R, V, E, r) {
        var x = 15;
        while (Y[256 | x] + R[256 | x] == 0 && x > 0)
            x--;
        x = (x << 4) + 15;
        while (Y[x] + R[x] == 0 && x > 0)
            x--;
        return x
    }
    ];
    w.gr.O9 = [function(Y, R, V, E) {
        var x = 0;
        while (Y[256 | x] == 0 && x < 15)
            x++;
        x = x << 4;
        while (Y[x] == 0 && x < 255)
            x++;
        return x
    }
    , function(Y, R, V, E, r) {
        var x = 0;
        while (Y[256 | x] + R[256 | x] == 0 && x < 15)
            x++;
        x = x << 4;
        while (Y[x] + R[x] == 0 && x < 255)
            x++;
        return x
    }
    ];
    w.gr.L$ = .5;
    w.gr.Lp = [function(Y, R, V, E) {
        var r = ~~(.5 + w.gr.L$ * V)
          , K = 0
          , x = 256;
        while (K + Y[x] <= r)
            K += Y[x++];
        x = x - 256 << 4;
        while (K <= r)
            K += Y[x++];
        return x - 1
    }
    , function(Y, R, V, E, r) {
        var K = ~~(.5 + w.gr.L$ * E)
          , J = 0
          , x = 256;
        while (J + Y[x] + R[x] <= K) {
            J += Y[x] + R[x];
            x++
        }
        x = x - 256 << 4;
        while (J <= K) {
            J += Y[x] + R[x];
            x++
        }
        return x - 1
    }
    ];
    w.gr.OY = [function(Y, R, V, E) {
        var r = E[0]
          , K = 0
          , J = 0
          , x = Math.max(0, R - r)
          , t = Math.min(256, R + r + 1);
        while (x < t) {
            var C = Y[x];
            K += x * C;
            J += C;
            x++
        }
        return J == 0 ? 0 : K / J
    }
    , function(Y, R, V, E, r) {
        var K = r[0]
          , J = 0
          , t = 0
          , x = Math.max(0, V - K)
          , C = Math.min(256, V + K + 1);
        while (x < C) {
            var c = Y[x] + R[x];
            J += x * c;
            t += c;
            x++
        }
        return t == 0 ? 0 : J / t
    }
    ];
    w.J = {};
    w.J.cV = function(Y) {
        var R = D._.Sj(Y.Trnf)
          , V = Y.Sz.v
          , E = w.J.k4(R, new gE(0,0,V.Wdth.v,V.Hght.v));
        return w.J.P4(E)
    }
    ;
    w.J.k4 = function(Y, R) {
        var V = Y[0]
          , E = Y[1]
          , r = Y[2]
          , K = Y[3]
          , J = Y[6]
          , t = Y[7]
          , C = Y[4]
          , c = Y[5]
          , M = 0
          , a = 0
          , Q = 1
          , A = 0
          , p = 0
          , v = 1
          , W = 1
          , n = 1;
        if (R) {
            M = R.x;
            a = R.y;
            Q = R.x + R.d;
            A = R.y;
            p = R.x;
            v = R.y + R.b;
            W = R.x + R.d;
            n = R.y + R.b
        }
        return w.J.vx(Y, [M, a, Q, A, W, n, p, v])
    }
    ;
    w.J.vx = function(Y, R) {
        var V = Y[0]
          , E = Y[1]
          , r = Y[2]
          , K = Y[3]
          , J = Y[6]
          , t = Y[7]
          , C = Y[4]
          , c = Y[5]
          , M = R[0]
          , a = R[1]
          , Q = R[2]
          , A = R[3]
          , p = R[6]
          , v = R[7]
          , W = R[4]
          , n = R[5]
          , $ = [[M, a, 1, 0, 0, 0, -M * V, -a * V, V], [0, 0, 0, M, a, 1, -M * E, -a * E, E], [Q, A, 1, 0, 0, 0, -Q * r, -A * r, r], [0, 0, 0, Q, A, 1, -Q * K, -A * K, K], [p, v, 1, 0, 0, 0, -p * J, -v * J, J], [0, 0, 0, p, v, 1, -p * t, -v * t, t], [W, n, 1, 0, 0, 0, -W * C, -n * C, C], [0, 0, 0, W, n, 1, -W * c, -n * c, c]]
          , G = [0, 0, 0, 0, 0, 0, 0, 0]
          , o = w.NI.ej($, G);
        if (o != 0)
            G = [0, 0, 0, 0, 0, 0, 0, 0];
        return G
    }
    ;
    w.J.w9 = function(Y) {
        return Math.abs(Y[6]) < 1e-10 && Math.abs(Y[7]) < 1e-10
    }
    ;
    w.J.P4 = function(Y) {
        return new bF(Y[0],Y[3],Y[1],Y[4],Y[2],Y[5])
    }
    ;
    w.J.tu = function(Y) {
        return [Y.o, Y.w8, Y.Wr, Y.O, Y.Xa, Y.W8, 0, 0]
    }
    ;
    w.J.apply = function(Y, R) {
        var V = new Float64Array(2);
        for (var E = 0; E < R.length; E += 2) {
            var r = R[E]
              , K = R[E + 1];
            w.J.Ay(r, K, Y, V);
            R[E] = V[0];
            R[E + 1] = V[1]
        }
    }
    ;
    w.J.Ay = function(Y, R, V, E) {
        var r = 1 / (V[6] * Y + V[7] * R + 1);
        E[0] = (V[0] * Y + V[1] * R + V[2]) * r;
        E[1] = (V[3] * Y + V[4] * R + V[5]) * r
    }
    ;
    w.J.BA = function(Y, R) {
        var V = new Float64Array(2);
        w.J.Ay(R.x, R.y, Y, V);
        return new gv(V[0],V[1])
    }
    ;
    w.J.o7 = function(Y, R, V, E) {
        Y = new Uint32Array(Y.buffer);
        R = new Uint32Array(R.buffer);
        for (var r = 0; r < E; r++) {
            for (var K = 0; K < V; K++) {
                R[K * E + r] = Y[r * V + K]
            }
        }
    }
    ;
    w.J.adY = function(Y, R, V, E) {
        Y = new Uint32Array(Y.buffer);
        R = new Uint32Array(R.buffer);
        for (var r = 0; r < E; r++) {
            for (var K = 0; K < V; K++) {
                R[r * V + K] = Y[r * V + V - 1 - K]
            }
        }
    }
    ;
    w.J.WJ = function(Y) {
        return Math.abs(Y[6]) < 1e-9 && Math.abs(Y[7]) < 1e-9
    }
    ;
    w.J.oA = function(Y) {
        return Math.abs(Y[0]) < 1e-9 && Math.abs(Y[4]) < 1e-9 || Math.abs(Y[1]) < 1e-9 && Math.abs(Y[3]) < 1e-9
    }
    ;
    w.J.drawImage = function(Y, R, V, E, r, K, J, t, C) {
        if (J == null)
            J = !1;
        if (t == null)
            t = !1;
        var c = w.J.tb(Y)
          , M = !0
          , a = 0
          , Q = 1 / Math.sqrt(Math.abs(Y[0] / V * Y[4] / E - Y[1] / V * Y[3] / E));
        for (var x = 0; x < 8; x++) {
            var A = Math.round(Y[x]);
            if (x != 2 && x != 5)
                a += Math.abs(A);
            if (Math.abs(A - Y[x]) > 1e-9)
                M = !1
        }
        var p = w.J.WJ(Y)
          , v = w.J.oA(Y) && p
          , W = v ? 1 : 0;
        if (J || M && a == V + E && p) {
            w.J.adx(c, R, V, E, r, K, t, p, C);
            return
        }
        var n = K.d
          , $ = K.b
          , G = new Float64Array(2);
        r = new Uint32Array(r.buffer);
        R = new Uint32Array(R.buffer);
        for (var o = 0; o < $; o++)
            for (var B = 0; B < n; B++) {
                var L = o * n + B, u, y, S, X, aM = 0, H = 0, iP = 0, hq = 0;
                r[L] = 0;
                var N = B + K.x + .5
                  , k = o + K.y + .5;
                u = N;
                y = k;
                S = c;
                X = 1 / (S[6] * u + S[7] * y + 1);
                var d = (S[0] * u + S[1] * y + S[2]) * X
                  , P = (S[3] * u + S[4] * y + S[5]) * X
                  , Z = d * V
                  , s = P * E
                  , _ = Z < -1 || Z > V + 1 || s < -1 || s > E + 1;
                if (t) {
                    Z = Math.max(.001, Math.min(V - 1, Z));
                    s = Math.max(.001, Math.min(E - 1, s))
                } else if (_)
                    continue;
                var b = Q;
                if (!p) {
                    var q = 0
                      , e = 0;
                    S = Y;
                    u = d + 1 / V;
                    y = P;
                    X = 1 / (S[6] * u + S[7] * y + 1);
                    q = (S[0] * u + S[1] * y + S[2]) * X - N;
                    e = (S[3] * u + S[4] * y + S[5]) * X - k;
                    var g = q * q + e * e;
                    u = d;
                    y = P + 1 / E;
                    X = 1 / (S[6] * u + S[7] * y + 1);
                    q = (S[0] * u + S[1] * y + S[2]) * X - N;
                    e = (S[3] * u + S[4] * y + S[5]) * X - k;
                    var F = q * q + e * e;
                    b = 1 / Math.sqrt(Math.max(g, F))
                }
                if (b < 1.1) {
                    w.J.k6(Z, s, R, V, E, r, L, W);
                    continue
                }
                var l = Math.round(b * 2.3);
                if (!t && (Z < .6 || Z > V - .6 || s < .6 || s > E - .6)) {
                    l = Math.max(l, 5)
                }
                if (t && _)
                    l = 1;
                var i = 1 / l
                  , iG = K.x + B
                  , h = K.y + o;
                S = c;
                for (var x = 0; x < l; x++)
                    for (var dw = 0; dw < l; dw++) {
                        u = iG + (x + .5) * i;
                        y = h + (dw + .5) * i;
                        X = 1 / (S[6] * u + S[7] * y + 1);
                        var Z = (S[0] * u + S[1] * y + S[2]) * X
                          , s = (S[3] * u + S[4] * y + S[5]) * X;
                        if (t) {
                            Z = Math.max(.001, Math.min(.999, Z));
                            s = Math.max(.001, Math.min(.999, s))
                        } else if (Z < 0 || Z >= 1 || s < 0 || s >= 1)
                            continue;
                        Z = Math.floor(Z * V);
                        s = Math.floor(s * E);
                        var eK = s * V + Z
                          , f9 = R[eK]
                          , gn = f9 >>> 24;
                        aM += (f9 & 255) * gn;
                        H += (f9 >>> 8 & 255) * gn;
                        iP += (f9 >>> 16 & 255) * gn;
                        hq += gn
                    }
                if (hq != 0) {
                    var d$ = 1 / hq;
                    aM = ~~(aM * d$ + .5);
                    H = ~~(H * d$ + .5);
                    iP = ~~(iP * d$ + .5);
                    hq = ~~(hq * i * i + .5);
                    r[L] = hq << 24 | iP << 16 | H << 8 | aM
                }
            }
    }
    ;
    w.J.adx = function(Y, R, V, E, r, K, J, t, C) {
        if (t && !J && K.X() > 4e6 && C) {
            w.J.ac5(Y, R, V, E, r, K, J, t, C);
            return
        }
        var c = K.x + K.d
          , M = K.y + K.b
          , a = 0
          , Q = new Uint32Array(r.buffer)
          , A = new Uint32Array(R.buffer)
          , p = Y[0] * V
          , v = Y[1] * V
          , W = Y[2] * V
          , n = Y[3] * E
          , $ = Y[4] * E
          , G = Y[5] * E
          , o = Y[6]
          , B = Y[7];
        if (t && !J)
            for (var L = K.y + .5; L < M; L++)
                for (var u = K.x + .5; u < c; u++) {
                    var y = p * u + v * L + W
                      , S = n * u + $ * L + G;
                    if (0 < y && y < V && 0 < S && S < E) {
                        var X = ~~S * V + ~~y;
                        Q[a] = A[X]
                    } else
                        Q[a] = 0;
                    a++
                }
        else
            for (var L = K.y + .5; L < M; L++)
                for (var u = K.x + .5; u < c; u++) {
                    var N = 1 / (o * u + B * L + 1)
                      , y = (p * u + v * L + W) * N
                      , S = (n * u + $ * L + G) * N;
                    if (J) {
                        y = Math.max(.001, Math.min(V - 1, y));
                        S = Math.max(.001, Math.min(E - 1, S))
                    }
                    if (0 < y && y < V && 0 < S && S < E) {
                        var X = Math.floor(S) * V + Math.floor(y);
                        Q[a] = A[X]
                    } else
                        Q[a] = 0;
                    a++
                }
    }
    ;
    w.J.ac5 = function(Y, R, V, E, r, K, J, t, C) {
        var c = new Uint32Array(r.buffer)
          , M = new Uint32Array(R.buffer)
          , B = 0;
        if (C && (K.d & 3) != 0)
            throw "e";
        var a = Y[0] * V
          , Q = Y[1] * V
          , A = Y[2] * V
          , p = Y[3] * E
          , v = Y[4] * E
          , W = Y[5] * E
          , n = Y[6]
          , $ = Y[7]
          , G = K.d
          , o = K.b
          , L = K.x + .5
          , u = K.y + .5
          , y = (G >>> 2 << 2) - 1e-9
          , S = -.1 + (o >>> 1 << 1) - 1e-9
          , X = ~~V
          , N = a == 0 ? 0 : 1 / a
          , k = p == 0 ? 0 : 1 / p;
        for (var d = 0; d < o; d++) {
            var P = L * a + Q * (d + u) + A
              , Z = L * p + v * (d + u) + W
              , s = 0
              , _ = G;
            if (a == 0) {} else if (N > 0) {
                s = Math.max(s, -P * N);
                _ = Math.min(_, (V - P) * N)
            } else {
                _ = Math.min(_, -P * N);
                s = Math.max(s, (V - P) * N)
            }
            if (p == 0) {} else if (k > 0) {
                s = Math.max(s, -Z * k);
                _ = Math.min(_, (E - Z) * k)
            } else {
                _ = Math.min(_, -Z * k);
                s = Math.max(s, (E - Z) * k)
            }
            if (_ < 0)
                _ = 0;
            if (s > _)
                s = _;
            s = Math.ceil(s);
            _ = ~~_;
            B = ~~(d * G);
            for (var b = 0; b < s; b++)
                c[B++] = 0;
            for (var b = s; b < _; b += 4) {
                var q = a * b + P
                  , e = p * b + Z
                  , g = ~~e * X + ~~q;
                c[B++] = c[B++] = c[B++] = c[B++] = M[g]
            }
            for (var b = _; b < G; b++)
                c[B++] = 0
        }
    }
    ;
    w.J.tb = function(Y) {
        var R = Y[4] - Y[5] * Y[7]
          , V = Y[2] * Y[7] - Y[1]
          , E = Y[1] * Y[5] - Y[2] * Y[4]
          , r = Y[5] * Y[6] - Y[3]
          , K = Y[0] - Y[2] * Y[6]
          , J = Y[3] * Y[2] - Y[0] * Y[5]
          , t = Y[3] * Y[7] - Y[4] * Y[6]
          , C = Y[1] * Y[6] - Y[0] * Y[7]
          , c = 1 / (Y[0] * Y[4] - Y[1] * Y[3]);
        return [R * c, V * c, E * c, r * c, K * c, J * c, t * c, C * c]
    }
    ;
    w.J.Zq = function(Y, R) {
        var V = Y[0]
          , E = Y[1]
          , r = Y[2]
          , K = Y[3]
          , J = Y[4]
          , t = Y[5]
          , C = Y[6]
          , c = Y[7]
          , M = R[0]
          , a = R[1]
          , Q = R[2]
          , A = R[3]
          , p = R[4]
          , v = R[5]
          , W = R[6]
          , n = R[7]
          , $ = [V * M + E * A + r * W, V * a + E * p + r * n, V * Q + E * v + r, K * M + J * A + t * W, K * a + J * p + t * n, K * Q + J * v + t, C * M + c * A + W, C * a + c * p + n]
          , G = 1 / (C * Q + c * v + 1);
        for (var x = 0; x < 8; x++)
            $[x] *= G;
        return $
    }
    ;
    w.J.k6 = function(Y, R, V, E, r, K, J, t) {
        var C = Y
          , c = R
          , Q = 0
          , A = 0
          , p = 0
          , v = 0;
        Y -= .499999;
        R -= .499999;
        var M = Math.floor(Y)
          , a = Math.floor(R);
        if (t == 0) {
            var x = a * E + M
              , W = M >= 0 && M < E
              , n = M + 1 >= 0 && M + 1 < E
              , $ = a >= 0 && a < r
              , G = a + 1 >= 0 && a + 1 < r;
            if (W && $)
                Q = V[x];
            if (n && $)
                A = V[x + 1];
            if (W && G)
                p = V[x + E];
            if (n && G)
                v = V[x + E + 1]
        } else if (t == 1) {
            var o = M < 0 ? 0 : M > E - 1 ? E - 1 : M
              , B = M < -1 ? 0 : M > E - 2 ? E - 1 : M + 1
              , L = a < 0 ? 0 : a > r - 1 ? r - 1 : a
              , u = a < -1 ? 0 : a > r - 2 ? r - 1 : a + 1;
            Q = V[L * E + o];
            A = V[L * E + B];
            p = V[u * E + o];
            v = V[u * E + B]
        } else {
            var o = (M + 50 * E) % E
              , B = (M + 50 * E) % E
              , L = (a + 50 * r) % r
              , u = (a + 50 * r) % r;
            Q = V[L * E + o];
            A = V[L * E + B];
            p = V[u * E + o];
            v = V[u * E + B]
        }
        var y = Y - M
          , S = R - a
          , X = (1 - S) * (1 - y) * (Q >>> 24)
          , N = (1 - S) * y * (A >>> 24)
          , k = S * (1 - y) * (p >>> 24)
          , d = S * y * (v >>> 24)
          , P = X + N + k + d
          , Z = X * (Q & 255) + N * (A & 255) + k * (p & 255) + d * (v & 255)
          , s = X * (Q >>> 8 & 255) + N * (A >>> 8 & 255) + k * (p >>> 8 & 255) + d * (v >>> 8 & 255)
          , _ = X * (Q >>> 16 & 255) + N * (A >>> 16 & 255) + k * (p >>> 16 & 255) + d * (v >>> 16 & 255);
        if (P == 0)
            K[J] = 0;
        else {
            var b = 1 / P;
            Z = ~~(Z * b + .5);
            s = ~~(s * b + .5);
            _ = ~~(_ * b + .5);
            P = ~~(P + .5);
            K[J] = P << 24 | _ << 16 | s << 8 | Z
        }
    }
    ;
    w.J.iZ = function(Y, R, V, E, r, K) {
        var J = Y - .499999
          , t = R - .499999
          , C = ~~J
          , c = ~~t
          , M = J - C
          , a = t - c
          , Q = (1 - a) * (1 - M)
          , A = (1 - a) * M
          , p = a * (1 - M)
          , v = a * M
          , W = c * E + C << 2
          , n = (c + 1) * E + C << 2
          , $ = Q * V[W] + A * V[W + 4] + p * V[n] + v * V[n + 4]
          , G = Q * V[W + 1] + A * V[W + 5] + p * V[n + 1] + v * V[n + 5]
          , o = Q * V[W + 2] + A * V[W + 6] + p * V[n + 2] + v * V[n + 6]
          , B = Q * V[W + 3] + A * V[W + 7] + p * V[n + 3] + v * V[n + 7];
        K[0] = $;
        K[1] = G;
        K[2] = o;
        K[3] = B
    }
    ;
    w.J.aiw = function(Y, R, V, E, r) {
        Y -= .499999;
        R -= .499999;
        var K = Math.floor(Y)
          , J = Math.floor(R)
          , t = Y - K
          , C = R - J
          , c = (1 - C) * (1 - t)
          , M = (1 - C) * t
          , a = C * (1 - t)
          , Q = C * t
          , A = (K + 50 * E) % E
          , p = (K + 1 + 50 * E) % E
          , v = (J + 50 * r) % r
          , W = (J + 1 + 50 * r) % r
          , n = V[v * E + A]
          , $ = V[v * E + p]
          , G = V[W * E + A]
          , o = V[W * E + p];
        if (n == null || o == null)
            throw "e";
        return c * n + M * $ + a * G + Q * o
    }
    ;
    w.J.ud = function(Y, R, V, E, r, K, J, t, C, c, M, a) {
        var Q = new Uint32Array(Y.buffer)
          , A = new Uint32Array(E.buffer)
          , p = (1 + 2 * c) / r
          , v = []
          , W = [];
        for (var n = 0; n < r; n++) {
            var $ = -.25 + c - n * p;
            v.push(Math.cos(2 * Math.PI * $) * a / M);
            v.push(Math.sin(2 * Math.PI * $) / M)
        }
        J *= R;
        t *= V;
        for (var G = 0; G < K; G++) {
            var o = Math.pow(G / K, C) * K;
            for (var n = 0; n < r; n++) {
                var B = J + v[n << 1] * o
                  , L = t + v[(n << 1) + 1] * o
                  , u = ~~(.5 + (B < 0 ? 0 : B > R - 1 ? R - 1 : B))
                  , y = ~~(.5 + (L < 0 ? 0 : L > V - 1 ? V - 1 : L));
                A[G * r + n] = Q[y * R + u]
            }
        }
    }
    ;
    w.J.Rd = function(Y, R, V, E, r, K, J, t, C, c, M, a) {
        var Q = new Uint32Array(Y.buffer)
          , A = new Uint32Array(E.buffer)
          , p = 1 / a
          , v = []
          , W = V * 4
          , n = 1 / W;
        for (var $ = 0; $ < W; $++)
            v.push(Math.pow($ * n, 1 / C) * V * M);
        J *= r;
        t *= K;
        for (var $ = 0; $ < K; $++)
            for (var G = 0; G < r; G++) {
                var o = p * (G - J)
                  , B = $ - t
                  , L = 1.75 - Math.atan2(B, o) * (1 / (2 * Math.PI));
                L = L - ~~L;
                L = (L + c) * (1 / (1 + 2 * c));
                var u = Math.sqrt(o * o + B * B);
                u = v[~~(u * 4)];
                w.J.k6(L * R + .5, u + .5, Q, R, V, A, $ * r + G, 1)
            }
    }
    ;
    w.J.co = function(Y, R, V, E, r) {
        var K = r[0]
          , J = r[1];
        for (var t = 0; t < J; t++)
            for (var C = 0; C < K; C++) {
                var c = r[2] * C + r[3] * t + r[4]
                  , M = r[5] * C + r[6] * t + r[7]
                  , a = t * K + C << 2
                  , Q = M * R + c << 2;
                E[a] = Y[Q + 0];
                E[a + 1] = Y[Q + 1];
                E[a + 2] = Y[Q + 2];
                E[a + 3] = Y[Q + 3]
            }
    }
    ;
    w.W = {
        VU: function(Y, R) {
            var V = ~~(.499 + Y * R);
            return V < 0 ? 0 : V > R ? R : V
        },
        ahC: function(Y, R, V, E, r, K, J, t) {
            var C = V[0]
              , c = V[1]
              , M = V[2]
              , a = V[3]
              , Q = E.d
              , A = E.b
              , p = new Float64Array(Q * 4 + 8)
              , v = new Float64Array(Q * 4 + 8);
            for (var W = 0, x = 0; W < A; W++) {
                var n = p;
                p = v;
                v = n;
                v.fill(0);
                for (var $ = 0; $ < Q; $++,
                x++) {
                    var G = $ + r
                      , o = W + K
                      , B = C * G + c * o
                      , L = M * G + a * o
                      , u = 0
                      , X = 0;
                    if (t == 0)
                        u = B + .5;
                    else if (t == 1)
                        u = 2 * Math.sqrt(B * B + L * L);
                    else if (t == 2)
                        u = (Math.PI + Math.atan2(-L, -B)) / (2 * Math.PI);
                    else if (t == 3)
                        u = Math.abs(B * 2);
                    else if (t == 4)
                        u = 2 * (Math.abs(B) + Math.abs(L));
                    var y = w.W.VU(u, J) * 4
                      , S = $ * 4;
                    for (var N = 0; N < 4; N++) {
                        var k = Math.max(0, Math.min(254.999, R[y + N] + p[S + 4 + N]))
                          , d = Math.floor(k);
                        if (Math.random() < k - d)
                            d++;
                        var P = k - d;
                        p[S + 8 + N] = P * (7 / 16);
                        v[S + 0 + N] = P * (3 / 16);
                        v[S + 4 + N] = P * (5 / 16);
                        v[S + 8 + N] = P * (1 / 16);
                        X |= d << N * 8
                    }
                    Y[x] = X
                }
            }
        },
        A: [function(Y, R, V, E, r, K, J) {
            var t = V[0]
              , C = V[1]
              , c = V[2]
              , M = V[3]
              , a = E.d
              , Q = E.b;
            for (var A = 0, x = 0; A < Q; A++)
                for (var p = 0; p < a; p++,
                x++) {
                    var v = p + r
                      , W = A + K
                      , n = t * v + C * W
                      , $ = c * v + M * W
                      , G = n + .5;
                    Y[x] = R[w.W.VU(G, J)]
                }
        }
        , function(Y, R, V, E, r, K, J) {
            var t = V[0]
              , C = V[1]
              , c = V[2]
              , M = V[3]
              , a = E.d
              , Q = E.b;
            for (var A = 0, x = 0; A < Q; A++)
                for (var p = 0; p < a; p++,
                x++) {
                    var v = p + r
                      , W = A + K
                      , n = t * v + C * W
                      , $ = c * v + M * W
                      , G = 2 * Math.sqrt(n * n + $ * $);
                    Y[x] = R[w.W.VU(G, J)]
                }
        }
        , function(Y, R, V, E, r, K, J) {
            var t = V[0]
              , C = V[1]
              , c = V[2]
              , M = V[3]
              , a = E.d
              , Q = E.b;
            for (var A = 0, x = 0; A < Q; A++)
                for (var p = 0; p < a; p++,
                x++) {
                    var v = p + r
                      , W = A + K
                      , n = t * v + C * W
                      , $ = c * v + M * W
                      , G = (Math.PI + Math.atan2(-$, -n)) / (2 * Math.PI);
                    Y[x] = R[w.W.VU(G, J)]
                }
        }
        , function(Y, R, V, E, r, K, J) {
            var t = V[0]
              , C = V[1]
              , c = V[2]
              , M = V[3]
              , a = E.d
              , Q = E.b;
            for (var A = 0, x = 0; A < Q; A++)
                for (var p = 0; p < a; p++,
                x++) {
                    var v = p + r
                      , W = A + K
                      , n = t * v + C * W
                      , $ = c * v + M * W
                      , G = Math.abs(n * 2);
                    Y[x] = R[w.W.VU(G, J)]
                }
        }
        , function(Y, R, V, E, r, K, J) {
            var t = V[0]
              , C = V[1]
              , c = V[2]
              , M = V[3]
              , a = E.d
              , Q = E.b;
            for (var A = 0, x = 0; A < Q; A++)
                for (var p = 0; p < a; p++,
                x++) {
                    var v = p + r
                      , W = A + K
                      , n = t * v + C * W
                      , $ = c * v + M * W
                      , G = 2 * (Math.abs(n) + Math.abs($));
                    Y[x] = R[w.W.VU(G, J)]
                }
        }
        ]
    };
    w.W.ajs = function(Y, R) {
        return Y + .5
    }
    ;
    w.W.aiV = function(Y, R) {
        return 2 * Math.sqrt(Y * Y + R * R)
    }
    ;
    w.W.acD = function(Y, R) {
        return (Math.PI + Math.atan2(-R, -Y)) / (2 * Math.PI)
    }
    ;
    w.W.aiZ = function(Y, R) {
        return Math.abs(Y * 2)
    }
    ;
    w.W.anL = function(Y, R) {
        return 2 * (Math.abs(Y) + Math.abs(R))
    }
    ;
    w.W.JB = function(Y, R, V, E, r, K, J, t, C, c, M, a) {
        if (Y.Clrs == null)
            return;
        var Q = new Uint32Array(R.buffer)
          , A = 1023
          , p = w.W.Ke(Y.Clrs.v, C, c);
        if (a) {
            var v = w.W.an2(Y, p, A + 1, J);
            w.W.ahC(Q, v, E, V, V.x - r, V.y - K, A, t);
            return
        }
        var W = w.W.SX(Y, p, A + 1, J);
        if (t < 5) {
            w.W.A[t](Q, W, E, V, V.x - r, V.y - K, A)
        } else {
            var n = new Uint8Array(W.buffer)
              , $ = V.d
              , G = V.b
              , o = M.mM - M.Ml
              , B = 1 / o
              , L = M.YQ.d - V.d >> 1
              , u = M.YQ.b - V.b >> 1
              , y = M.YQ.d
              , S = -.6 * B
              , X = (-.6 + .4) * B
              , N = (-.6 + 2 * .4) * B
              , k = (-.6 + 3 * .4) * B;
            for (var d = 0, x = 0; d < G; d++)
                for (var P = 0; P < $; P++,
                x += 4) {
                    var Z = 0
                      , s = 0
                      , _ = 0
                      , b = 0
                      , q = (d + u) * y + P + L
                      , e = (M.rb[q] - M.Ml) * B
                      , g = 0;
                    if (e <= 0 || e >= 1) {
                        g = (e <= 0 ? 0 : A) << 2;
                        R[x] = n[g];
                        R[x + 1] = n[g + 1];
                        R[x + 2] = n[g + 2];
                        R[x + 3] = n[g + 3];
                        continue
                    }
                    g = Math.max(0, Math.min(A - 1, Math.round((e + S) * A))) << 2;
                    s += n[g];
                    _ += n[g + 1];
                    b += n[g + 2];
                    Z += n[g + 3];
                    g = Math.max(0, Math.min(A - 1, Math.round((e + X) * A))) << 2;
                    s += n[g];
                    _ += n[g + 1];
                    b += n[g + 2];
                    Z += n[g + 3];
                    g = Math.max(0, Math.min(A - 1, Math.round((e + N) * A))) << 2;
                    s += n[g];
                    _ += n[g + 1];
                    b += n[g + 2];
                    Z += n[g + 3];
                    g = Math.max(0, Math.min(A - 1, Math.round((e + k) * A))) << 2;
                    s += n[g];
                    _ += n[g + 1];
                    b += n[g + 2];
                    Z += n[g + 3];
                    R[x] = s >>> 2;
                    R[x + 1] = _ >>> 2;
                    R[x + 2] = b >>> 2;
                    R[x + 3] = Z >>> 2
                }
        }
    }
    ;
    w.W.Ke = function(Y, R, V) {
        var E = [];
        for (var x = 0; x < Y.length; x++) {
            var r;
            if (Y[x].v.Type.v.Clry == "FrgC")
                r = {
                    h: R >> 16 & 255,
                    l: R >> 8 & 255,
                    O: R & 255
                };
            else if (Y[x].v.Type.v.Clry == "BckC")
                r = {
                    h: V >> 16 & 255,
                    l: V >> 8 & 255,
                    O: V & 255
                };
            else
                r = w.W.VJ(Y[x].v.Clr.v);
            E.push(r)
        }
        return E
    }
    ;
    w.W.VJ = function(Y) {
        var R, V = Y.classID;
        if (V == "RGBC")
            R = {
                h: Y.Rd.v,
                l: Y.Grn.v,
                O: Y.Bl.v
            };
        else if (V == "HSBC") {
            R = w.Bx(Y.H.v.val / 360, Y.Strt.v / 100, Y.Brgh.v / 100);
            R.h *= 255;
            R.l *= 255;
            R.O *= 255
        } else if (V == "CMYC") {
            var E = 100 - Y.Cyn.v
              , r = 100 - Y.Mgnt.v
              , K = 100 - Y.Ylw.v
              , J = 100 - Y.Blck.v
              , t = 255 * E * J * 1e-4
              , C = 255 * (.2 * E + .8 * r) * J * 1e-4
              , c = 255 * (.2 * r + .8 * K) * J * 1e-4;
            R = {
                h: t,
                l: C,
                O: c
            }
        } else if (V == "Grsc")
            R = {
                h: 255 - Y.Gry.v,
                l: 255 - Y.Gry.v,
                O: 255 - Y.Gry.v
            };
        else if (V == "LbCl") {
            R = w.QP(Y.Lmnc.v, Y.A.v, Y.B.v)
        } else
            console.log(Y);
        if (isNaN(R.h))
            R.h = R.l = R.O = 0;
        return R
    }
    ;
    w.W.gD = function(Y) {
        return {
            classID: "RGBC",
            Rd: {
                t: "doub",
                v: Y.h
            },
            Grn: {
                t: "doub",
                v: Y.l
            },
            Bl: {
                t: "doub",
                v: Y.O
            }
        }
    }
    ;
    w.W.an2 = function(Y, R, V, E) {
        var r = []
          , K = 1 / (V - 0);
        for (var x = 0; x < V; x++) {
            var J = x * 4
              , t = w.W.Bh(Y, R, (E ? V - 1 - x : x) * K);
            r[J] = t[0];
            r[J + 1] = t[1];
            r[J + 2] = t[2];
            r[J + 3] = t[3]
        }
        return r
    }
    ;
    w.W.SX = function(Y, R, V, E) {
        var r = new Uint32Array(V)
          , K = 1 / (V - 0);
        for (var x = 0; x < V; x++)
            r[x] = w.W.aX(Y, R, (E ? V - 1 - x : x) * K);
        return r
    }
    ;
    w.W.Bh = function(Y, R, V) {
        var E = 4096
          , r = 1 / 4096
          , K = Y.Intr.v * r
          , J = Y.Clrs.v
          , t = Y.Trns.v
          , C = J.length - 1
          , c = t.length - 1
          , x = -1
          , M = 0
          , a = 0
          , Q = 0
          , A = 0;
        while (x < c && t[x + 1].v.Lctn.v <= V * E)
            x++;
        if (x == -1) {
            M = t[0].v.Opct.v.val * (255 / 100)
        } else if (x == c) {
            M = t[x].v.Opct.v.val * (255 / 100)
        } else {
            var p = w.W.wo(t, r, x, V, K);
            M = (p * t[x].v.Opct.v.val + (1 - p) * t[x + 1].v.Opct.v.val) * (255 / 100)
        }
        x = -1;
        while (x < C && J[x + 1].v.Lctn.v <= V * E)
            x++;
        if (x == -1) {
            var v = R[0];
            a = v.h;
            Q = v.l;
            A = v.O
        } else if (x == C) {
            var v = R[x];
            a = v.h;
            Q = v.l;
            A = v.O
        } else {
            var W = R[x]
              , n = R[x + 1]
              , $ = w.W.wo(J, r, x, V, K);
            a = $ * W.h + (1 - $) * n.h;
            Q = $ * W.l + (1 - $) * n.l;
            A = $ * W.O + (1 - $) * n.O
        }
        return [a, Q, A, M]
    }
    ;
    w.W.aX = function(Y, R, V) {
        var E = w.W.Bh(Y, R, V)
          , r = ~~(.5 + E[0])
          , K = ~~(.5 + E[1])
          , J = ~~(.5 + E[2])
          , t = ~~(.5 + E[3]);
        return t << 24 | J << 16 | K << 8 | r
    }
    ;
    w.W.wo = function(Y, R, x, V, E) {
        if (Y.length == 2)
            E *= .5;
        var r = Y[x].v.Lctn.v * R, K = Y[x + 1].v.Lctn.v * R, J = r + Y[x + 1].v.Mdpn.v * .01 * (K - r), t;
        if (V < J)
            t = .5 * (V - r) / (J - r);
        else
            t = .5 + .5 * (V - J) / (K - J);
        t = .5 + .5 * (E * Math.cos(Math.PI * t) + (1 - E) * (1 - 2 * t));
        return t
    }
    ;
    w.W.eV = function(Y, R) {
        var V = Math.PI * Y.Angl.v.val / 180
          , E = Y.Scl.v.val / 100
          , r = Y.Ofst.v
          , K = r.Hrzn.v.val / 100
          , J = r.Vrtc.v.val / 100
          , t = Math.cos(V)
          , C = -Math.sin(V)
          , c = .5 * R.b
          , M = c * (t / C)
          , a = Math.sqrt(c * c + M * M)
          , Q = .5 * R.d
          , A = Q * (C / t)
          , p = Math.sqrt(Q * Q + A * A)
          , v = Math.min(a, p) * E
          , W = R.x + R.d / 2 + K * R.d
          , n = R.y + R.b / 2 + J * R.b;
        return [new gv(W,n), new gv(W + t * v,n + C * v)]
    }
    ;
    w.W.S8 = function(Y, R, V, E) {
        var r = R.x - Y.x
          , K = -(R.y - Y.y)
          , J = Math.sqrt(r * r + K * K)
          , t = Math.atan2(K, r)
          , C = Math.cos(t)
          , c = -Math.sin(t)
          , M = .5 * V.b
          , a = M * (C / c)
          , Q = Math.sqrt(M * M + a * a)
          , A = .5 * V.d
          , p = A * (c / C)
          , v = Math.sqrt(A * A + p * p)
          , W = J / Math.min(Q, v)
          , n = (Y.x - V.x - V.d / 2) / V.d
          , $ = (Y.y - V.y - V.b / 2) / V.b;
        E.Angl.v.val = 180 * t / Math.PI;
        E.Scl.v.val = W * 100;
        var G = E.Ofst.v;
        G.Hrzn.v.val = n * 100;
        G.Vrtc.v.val = $ * 100
    }
    ;
    w.W.aV = function(Y, R) {
        for (var x = 0; x < Y.length; x++) {
            var V = Y[x]
              , E = Math.round(V[0] * 4096)
              , r = V[1]
              , K = V[2];
            if (K == null)
                K = 1;
            var J = w.W.gD({
                h: r[0] * 255,
                l: r[1] * 255,
                O: r[2] * 255
            });
            R.Clrs.v[x] = {
                t: "Objc",
                v: {
                    classID: "Clrt",
                    Lctn: {
                        t: "long",
                        v: E
                    },
                    Mdpn: {
                        t: "long",
                        v: 50
                    },
                    Clr: {
                        t: "Objc",
                        v: J
                    },
                    Type: {
                        t: "enum",
                        v: {
                            Clry: "UsrS"
                        }
                    }
                }
            };
            R.Trns.v[x] = {
                t: "Objc",
                v: {
                    classID: "TrnS",
                    Lctn: {
                        t: "long",
                        v: E
                    },
                    Mdpn: {
                        t: "long",
                        v: 50
                    },
                    Opct: {
                        t: "UntF",
                        v: {
                            type: "#Prc",
                            val: Math.round(K * 100)
                        }
                    }
                }
            }
        }
    }
    ;
    w.$s = {};
    w.$s.aeq = function(Y, R, V, E, r, K, J, t, C, c, M, a) {
        var Q, A, p, v = Date.now(), W = !1, n = J, $ = c, G, o, B, L, u = K * 255, y = 255 - C * 255, S = 1 + r * 6, X = 1 + t * 6, N = 1 + a * 4, k = (N - 1) / 7, d = 0, P = 255 - 0, Z, s, _, b, q, e, g, F, l, i, aM, H, iP, hq = 0, iG = 1, h, dw, eK, f9, gn, d$, dJ, br, hE, gN, aK = 1 + M, dL, aQ = w.T(V * E), d3 = w.T(V * E), b9 = w.T(V * E), ap = w.T(V * E), fS = 255 / u, bG = 255 / (255 - y);
        for (A = 0; A < E; A++) {
            for (Q = 0; Q < V; Q++) {
                var x = A * V + Q
                  , cH = x << 2;
                h = w.l6(Y[cH], Y[cH + 1], Y[cH + 2]);
                ap[x] = h;
                if (h < u)
                    aQ[x] = 255 - h * fS;
                if (h > y)
                    d3[x] = 255 - (255 - h) * bG
            }
        }
        if (W)
            console.log("init", Date.now() - v);
        v = Date.now();
        if (r * n > 0) {
            b9.set(aQ);
            w.Ue.T1(b9, aQ, new gE(0,0,V,E), n)
        }
        if (t * $ > 0) {
            b9.set(d3);
            w.Ue.T1(b9, d3, new gE(0,0,V,E), $)
        }
        if (W)
            console.log("blur", Date.now() - v);
        v = Date.now();
        var bq = w.T(256)
          , hO = w.T(256);
        for (var x = 0; x < 256; x++) {
            var gD = x * (1 / 255)
              , ds = 0;
            ds = (1 - Math.pow(1 - gD, S)) * 255;
            bq[x] = Math.max(0, Math.min(255, ~~(ds + .5)));
            ds = Math.pow(gD, X) * 255;
            hO[x] = Math.max(0, Math.min(255, ~~(ds + .5)))
        }
        var cR = new Uint8ClampedArray(R.buffer)
          , ah = new Float32Array(32768);
        for (var x = 0; x < 32768; x++) {
            dL = Math.sqrt(x) * (1 / 128);
            if (aK > 1)
                dL = (1 - dL) * (aK - 1) + 1;
            else
                dL = dL * (aK - 1) + 1;
            ah[x] = dL
        }
        for (A = 0; A < E; A++) {
            for (Q = 0; Q < V; Q++) {
                var x = A * V + Q
                  , cH = x << 2
                  , ds = ap[x]
                  , cu = aQ[x] * (1 / 255)
                  , dP = d3[x] * (1 / 255);
                ds = (1 - cu) * ds + cu * bq[~~ds];
                ds = (1 - dP) * ds + dP * hO[~~ds];
                h = ds;
                var i6 = Y[cH]
                  , aZ = Y[cH + 1]
                  , ef = Y[cH + 2];
                dw = -i6 * .168736 - aZ * .331264 + ef * .5;
                eK = i6 * .5 - aZ * .418688 - ef * .081312;
                dL = ah[~~(.5 + dw * dw + eK * eK)];
                f9 = dw * dL;
                d$ = eK * dL;
                iG = 1 - Math.min(2 - (cu + dP), 1);
                dw = iG * dw + (1 - iG) * f9;
                eK = iG * eK + (1 - iG) * d$;
                br = h + 1.402 * eK;
                hE = h - .34414 * dw - .71414 * eK;
                gN = h + 1.772 * dw;
                cR[cH] = ~~(.5 + br);
                cR[cH + 1] = ~~(.5 + hE);
                cR[cH + 2] = ~~(.5 + gN)
            }
        }
        if (W)
            console.log("apply masks", Date.now() - v);
        v = Date.now()
    }
    ;
    w.VO = {};
    w.VO.ug = function(Y, R, V, E, r) {
        var K = !1
          , p = 1
          , P = 0
          , Z = 0
          , l = 0
          , hE = 0;
        if (!R.Nk(r)) {
            var J = R.ov(r)
              , t = w.T(J.X() * 4);
            w.Vj(Y, R, t, J);
            Y = t;
            R = J
        }
        var C = w.T(R.X());
        w.md(V, r, C, R);
        w.round(C);
        r = r.Cy(R);
        var c = r.d
          , M = r.b
          , a = c * 3 < M ? 2 : 1
          , Q = M * 3 < c ? 2 : 1;
        if (r.X() * (a * 2 + 1) * (Q * 2 + 1) < R.X()) {
            var J = new gE(r.x - c * a,r.y - M * a,c * (a * 2 + 1),M * (Q * 2 + 1)).Cy(R)
              , t = w.T(J.X() * 4);
            w.Vj(Y, R, t, J);
            var A = w.T(J.X());
            w.md(C, R, A, J);
            R = J;
            Y = t;
            C = A
        }
        while ((R.d + R.b) / 2 / p > 400)
            p++;
        var v = Y
          , W = R
          , n = C
          , $ = Math.floor(W.d / p)
          , G = Math.floor(W.b / p);
        Y = w.T($ * G * 4);
        w.scale.FQ(v, W.d, W.b, Y, $, G, 1 / p);
        C = w.T($ * G);
        w.scale.co(n, W.d, W.b, C, $, G, 1 / p);
        w.round(C, 1);
        var o = w.iE(C, new gE(0,0,$,G));
        if (o.uD())
            return;
        var B = Math.round((o.d + o.b) / 2 / 15)
          , L = Date.now()
          , u = w.T($ * G * 4);
        w.afM(Y, u);
        var y = Int16Array
          , S = new y($ * G * 24)
          , X = new y(64)
          , N = new y(64)
          , k = new y(64)
          , d = new y(64);
        for (var s = 3; s < G - 4; s++)
            for (var _ = 3; _ < $ - 4; _++) {
                var b = s * $ + _;
                if (C[b] == 255)
                    continue;
                if (w.VO.ak5(u, C, _, s, $, G, X, N, k) != 0)
                    continue;
                w.VO.t3(X, d);
                S[P] = _;
                S[P + 1] = s;
                w.VO.Jc(X, S, P + 4, 12);
                P += 16;
                w.VO.t3(N, d);
                w.VO.Jc(N, S, P, 4);
                P += 4;
                w.VO.t3(k, d);
                w.VO.Jc(k, S, P, 4);
                P += 4;
                var q = S[P - 24 + 5]
                  , e = S[P - 24 + 6];
                S[P - 24 + 5] = S[P - 24 + 20];
                S[P - 24 + 6] = S[P - 24 + 16];
                S[P - 24 + 16] = q;
                S[P - 24 + 20] = e;
                Z++
            }
        if (Z == 0)
            return;
        if (K)
            console.log(Date.now() - L, "FWHT computed");
        L = Date.now();
        var g = [];
        w.VO.Ih(0, Z - 1, g, S, new y(2 * 24));
        if (K)
            console.log(Date.now() - L, "KD tree computed");
        L = Date.now();
        var F = new Float32Array($ * G * 4);
        for (var x = 0; x < Z; x++) {
            var i = x
              , aM = w.VO.a9f(i, S, g, B);
            if (aM == -1)
                continue;
            var H = i * 24
              , iP = aM * 24
              , hq = S[H]
              , iG = S[H + 1]
              , h = S[iP]
              , dw = S[iP + 1];
            l += w.VO.getError(iP, H, S, 1e99);
            var eK = h - hq
              , f9 = dw - iG;
            F[(G + f9) * 2 * $ + ($ + eK)] += 1
        }
        if (K)
            console.log(Date.now() - L, "NN found");
        L = Date.now();
        var gn = []
          , d$ = 1 / (2 * $);
        for (var x = 0; x < F.length; x++) {
            if (F[x] > 0) {
                var s = Math.floor(x * d$)
                  , _ = x - s * 2 * $;
                gn.push({
                    x: _ - $,
                    y: s - G,
                    G: F[x],
                    fx: -1
                })
            }
        }
        gn.sort(function(dP, i6) {
            return i6.G - dP.G
        });
        var dJ = new Int32Array($ * G)
          , br = [];
        for (var x = 0; x < $ * G; x++) {
            if (C[x] == 255) {
                dJ[x] = hE;
                br.push(x % $, Math.floor(x / $));
                hE++
            } else if (Y[(x << 2) + 3] < 200) {
                dJ[x] = -2
            } else {
                dJ[x] = -1
            }
        }
        var gN = w.VO.abz($, G, gn, dJ, br, hE);
        if (gN == null) {
            return
        }
        var aK = gN.su
          , top = gN.top;
        aK = w.VO.a8z(aK, Y, $, G, top, dJ, br, hE);
        if (K)
            console.log(Date.now() - L, "optimal labeling found");
        L = Date.now();
        var J = r.clone();
        J.Yl(1, 1);
        J = J.Cy(W);
        var dL = w.T(J.X() * 4)
          , aQ = w.T(J.X());
        w.Vj(v, W, dL, J);
        var d3 = W.d
          , b9 = W.b;
        for (var s = 0; s < b9; s++)
            for (var _ = 0; _ < d3; _++) {
                if (n[s * d3 + _] == 0)
                    continue;
                var bG = Math.min(Math.floor(_ / p), $ - 1)
                  , cH = Math.min(Math.floor(s / p), G - 1)
                  , bq = dJ[cH * $ + bG]
                  , hO = aK[bq]
                  , gD = top[hO]
                  , ds = _ + gD.x * p
                  , cR = s + gD.y * p
                  , ah = cR * d3 + ds << 2
                  , cu = (s - J.y + W.y) * J.d + (_ - J.x + W.x) << 2;
                dL[cu] = v[ah];
                dL[cu + 1] = v[ah + 1];
                dL[cu + 2] = v[ah + 2];
                dL[cu + 3] = v[ah + 3];
                dL[cu + 3] = v[ah + 3];
                aQ[cu >> 2] = hO + 1
            }
        if (K)
            console.log(Date.now() - L, "copied back");
        L = Date.now();
        w.wV.ug(dL, aQ, J, null, 1e3);
        if (K)
            console.log(Date.now() - L, "poisson smooth");
        L = Date.now();
        w.Vj(dL, J, E, r)
    }
    ;
    w.VO.H_ = function(Y, R, V, E, r, K) {
        return w.VO.gg(Y + r.x, R + r.y, V, E) && K[(R + r.y) * V + (Y + r.x)] == -1 ? 0 : 1e9
    }
    ;
    w.VO.a8z = function(Y, R, V, E, top, r, K, J) {
        var t = Date.now()
          , C = [-1, 0, 0, -1, 1, 0, 0, 1]
          , c = 1e99
          , M = []
          , a = []
          , Q = 2 * (J * 2 * 3 + J * 2)
          , A = null
          , p = 0
          , v = 0
          , W = 0
          , n = 1e99;
        while (!0 && Date.now() < t + 12e3) {
            W++;
            var $ = null
              , G = c;
            for (var o = 0; o < top.length; o++) {
                var B = top[o]
                  , L = 0
                  , u = J + 2
                  , y = 0;
                for (var x = 0; x < J; x++) {
                    var S = K[x * 2]
                      , X = K[x * 2 + 1]
                      , N = top[Y[x]]
                      , k = w.VO.H_(S, X, V, E, B, r)
                      , d = Y[x] == o ? 1e9 : w.VO.H_(S, X, V, E, N, r);
                    for (var z = 0; z < 4; z++) {
                        if (z == 0 && S == 0 || z == 1 && X == 0 || z == 2 && S == V - 1 || z == 3 && X == E - 1)
                            continue;
                        var P = C[2 * z]
                          , Z = C[2 * z + 1]
                          , s = S + P
                          , _ = X + Z
                          , b = r[_ * V + s];
                        if (b == -2) {} else if (b == -1) {
                            k += 3 * w.VO.YK(s + B.x, _ + B.y, s, _, V, E, R, r);
                            k += 2 * w.VO.YK(s + B.x + P, _ + B.y + Z, s + P, _ + Z, V, E, R, r);
                            d += 3 * w.VO.YK(s + N.x, _ + N.y, s, _, V, E, R, r);
                            d += 2 * w.VO.YK(s + N.x + P, _ + N.y + Z, s + P, _ + Z, V, E, R, r)
                        } else if (z > 1) {
                            if (Y[x] == Y[b]) {
                                var q = 0;
                                q += w.VO.YK(S + N.x, X + N.y, S + B.x, X + B.y, V, E, R, r);
                                q += w.VO.YK(s + N.x, _ + N.y, s + B.x, _ + B.y, V, E, R, r);
                                M[L] = x;
                                M[L + 1] = b;
                                a[L] = q;
                                a[L + 1] = q;
                                L += 2
                            } else {
                                var e = top[Y[b]]
                                  , g = u
                                  , F = 0
                                  , l = 0
                                  , i = 0;
                                u++;
                                F += w.VO.YK(S + N.x, X + N.y, S + B.x, X + B.y, V, E, R, r);
                                F += w.VO.YK(s + N.x, _ + N.y, s + B.x, _ + B.y, V, E, R, r);
                                l += w.VO.YK(S + e.x, X + e.y, S + B.x, X + B.y, V, E, R, r);
                                l += w.VO.YK(s + e.x, _ + e.y, s + B.x, _ + B.y, V, E, R, r);
                                i += w.VO.YK(S + e.x, X + e.y, S + N.x, X + N.y, V, E, R, r);
                                i += w.VO.YK(s + e.x, _ + e.y, s + N.x, _ + N.y, V, E, R, r);
                                M[L] = x;
                                M[L + 1] = g;
                                a[L] = F;
                                a[L + 1] = F;
                                L += 2;
                                M[L] = b;
                                M[L + 1] = g;
                                a[L] = l;
                                a[L + 1] = l;
                                L += 2;
                                M[L] = g;
                                M[L + 1] = J + 1;
                                a[L] = i;
                                a[L + 1] = 0;
                                L += 2
                            }
                        }
                    }
                    M[L] = J;
                    M[L + 1] = x;
                    a[L] = k;
                    a[L + 1] = 0;
                    L += 2;
                    M[L] = x;
                    M[L + 1] = J + 1;
                    a[L] = d;
                    a[L + 1] = 0;
                    L += 2;
                    y += Math.min(k, d)
                }
                if (y > G)
                    continue;
                var aM = w.wI.ej(u, L, J, J + 1, M, a, G);
                if (aM._Q < G) {
                    G = aM._Q;
                    var H = Y.slice(0);
                    w.VO.a6l(H, L, M, aM.JC, o, J);
                    $ = H
                }
            }
            if (G * 1 >= c) {
                break
            }
            c = G;
            Y = $;
            if ((W & 3) == 0) {
                if (G * 1.03 >= n)
                    break;
                n = G
            }
            if ((W & 3) == 0) {
                var iP = 0 * top.length;
                for (var x = 0; x < top.length && top.length > iP; x++) {
                    if (Y.indexOf(x) != -1)
                        continue;
                    top.splice(x, 1);
                    for (var b = 0; b < Y.length; b++)
                        if (Y[b] > x)
                            Y[b]--;
                    x--
                }
            }
        }
        return Y
    }
    ;
    w.VO.a6l = function(Y, R, V, E, r, K) {
        for (var x = 0; x < E.length; x++) {
            var J = E[x] << 1
              , t = 0
              , C = 0;
            if (J < R) {
                t = V[J];
                C = V[J + 1]
            } else {
                C = V[J];
                t = V[J + 1]
            }
            if (t == K && Y[C] != r)
                Y[C] = r
        }
    }
    ;
    w.VO.De = function(top, Y, R, V, E, r, K, J, t) {
        for (var x = 0; x < R.length; x++) {
            var C = R[x]
              , c = !0;
            if (J != null && !(w.VO.gg(J + C.x, t + C.y, r, K) && V[r * (t + C.y) + J + C.x] == -1))
                continue;
            if (C.fx == -1)
                C.fx = w.VO.a8B(C, V, E, r, K);
            if (C.fx <= 0)
                continue;
            for (var M = 0; M < top.length; M++) {
                var a = top[M]
                  , Q = C.x - a.x
                  , A = C.y - a.y;
                if (Q * Q + A * A < Y) {
                    c = !1;
                    break
                }
            }
            if (c)
                return C
        }
        return null
    }
    ;
    w.VO.a8B = function(Y, R, V, E, r) {
        var K = 0;
        for (var x = 0; x < V.length; x += 2) {
            var J = V[x] + Y.x
              , t = V[x + 1] + Y.y;
            if (w.VO.gg(J, t, E, r) && R[E * t + J] == -1)
                K++
        }
        return K / (V.length >> 1)
    }
    ;
    w.VO.abz = function(Y, R, V, E, r, K) {
        var top = [];
        for (var x = 0; x < 60; x++) {
            var J = w.VO.De(top, 25, V, E, r, Y, R);
            if (J == null)
                break;
            else
                top.push(J)
        }
        if (top.length == 0)
            return null;
        var t = [];
        for (var x = 0; x < K; x++) {
            var C = r[x * 2]
              , c = r[x * 2 + 1]
              , M = -1
              , a = 0;
            while (!0) {
                a++;
                var Q = Math.random();
                M = Math.floor(Q * .99999 * top.length);
                var A = top[M]
                  , p = C + A.x
                  , v = c + A.y;
                if (w.VO.gg(p, v, Y, R) && E[v * Y + p] == -1)
                    break;
                if (a > 100) {
                    var J;
                    J = w.VO.De(top, 0, V, E, r, Y, R, C, c);
                    if (J == null)
                        return null;
                    top.push(J);
                    a = 0
                }
            }
            t.push(M)
        }
        return {
            top: top,
            su: t
        }
    }
    ;
    w.VO.YK = function(Y, R, V, E, r, K, J, t) {
        if (Y == V && R == E)
            return 0;
        if (Y < 0 || R < 0 || Y >= r || R >= K || V < 0 || E < 0 || V >= r || E >= K || t[R * r + Y] != -1 || t[E * r + V] != -1)
            return 1e7;
        var C = R * r + Y << 2
          , c = E * r + V << 2
          , M = J[C] - J[c]
          , a = J[C + 1] - J[c + 1]
          , Q = J[C + 2] - J[c + 2];
        return 1 + (M * M + a * a + Q * Q)
    }
    ;
    w.VO.gg = function(Y, R, V, E) {
        return Y >= 0 && Y < V && R >= 0 && R < E
    }
    ;
    w.VO.a9f = function(Y, R, V, E) {
        var r = 24 * Y
          , K = R[r]
          , J = R[r + 1]
          , t = E * E
          , C = 0
          , Q = 1e9;
        while (V[C] != 99)
            if (R[r + V[C]] < V[C + 1])
                C = V[C + 2];
            else
                C = V[C + 3];
        var c = V[C + 1]
          , M = V[C + 2]
          , a = -1;
        for (var x = c; x <= M; x++) {
            var C = x
              , A = C * 24
              , p = R[A]
              , v = R[A + 1];
            if ((p - K) * (p - K) + (v - J) * (v - J) < t)
                continue;
            var W = w.VO.getError(A, r, R, Q);
            if (W < Q) {
                Q = W;
                a = C
            }
        }
        return a
    }
    ;
    w.VO.getError = function(Y, R, V, E) {
        var r = 0;
        for (var K = 4; K < 24; K += 4) {
            var J = V[R + K] - V[Y + K]
              , t = V[R + K + 1] - V[Y + K + 1]
              , C = V[R + K + 2] - V[Y + K + 2]
              , c = V[R + K + 3] - V[Y + K + 3];
            r += J * J + t * t + C * C + c * c;
            if (r >= E)
                return r + 1
        }
        return r
    }
    ;
    w.VO.Ih = function(Y, R, V, E, r) {
        var K = 16
          , Q = 0;
        if (R - Y <= K) {
            V.push(99, Y, R);
            return
        }
        w.VO.Hh(Y, R, E, r);
        var J = -1
          , t = -1;
        for (var x = 4; x < 24; x++) {
            var C = r[2 * x + 1] - r[2 * x];
            if (C > t) {
                t = C;
                J = x
            }
        }
        var c = Y + R >> 1
          , M = w.VO.afE(c, Y, R, E, J)
          , a = -1;
        for (var x = Y; x <= R; x++)
            if (E[24 * x + J] == M) {
                if (a == -1)
                    a = x;
                Q = x
            }
        if (Y + 8 < a && a - Y > R - Q)
            c = a;
        else if (Q + 1 < R - 8)
            c = Q + 1;
        else if (R - Y < 64) {
            V.push(99, Y, R);
            return
        } else
            c = c;
        var A = V.length;
        V.push(J, M, 0, 0);
        V[A + 2] = A + 4;
        w.VO.Ih(Y, c - 1, V, E, r);
        V[A + 3] = V.length;
        w.VO.Ih(c, R, V, E, r)
    }
    ;
    w.VO.Hh = function(Y, R, V, E) {
        for (var x = 0; x < 48; x += 4) {
            E[x] = 3e4;
            E[x + 1] = -3e4;
            E[x + 2] = 3e4;
            E[x + 3] = -3e4
        }
        for (var x = Y; x <= R; x++) {
            var r = x * 24;
            for (var K = 0; K < 24; K++) {
                var J = V[r + K]
                  , t = E[K << 1]
                  , C = E[(K << 1) + 1];
                if (J < t)
                    E[K << 1] = J;
                if (J > C)
                    E[(K << 1) + 1] = J
            }
        }
    }
    ;
    w.VO.Se = function(Y, R, V) {
        var E = 0
          , x = 0;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++;
        E = V[Y + x];
        V[Y + x] = V[R + x];
        V[R + x] = E;
        x++
    }
    ;
    w.VO.pB = function(Y, R, V, E) {
        var r = V + E >>> 1
          , K = Y[24 * r + R];
        while (V <= E) {
            while (Y[24 * V + R] < K)
                V++;
            while (Y[24 * E + R] > K)
                E--;
            if (V <= E) {
                if (Y[24 * V + R] != Y[24 * E + R])
                    w.VO.Se(V * 24, E * 24, Y);
                V++;
                E--
            }
        }
        return V
    }
    ;
    w.VO.afE = function(Y, R, V, E, r) {
        var K = 0;
        while (R != V) {
            K = w.VO.pB(E, r, R, V);
            if (Y < K)
                V = K - 1;
            else
                R = K
        }
        return E[Y * 24 + r]
    }
    ;
    w.VO.Jc = function(Y, R, V, E) {
        for (var x = 0; x < E; x++)
            R[V + x] = Y[x]
    }
    ;
    w.VO.ak5 = function(Y, R, V, E, r, K, J, t, C) {
        var c = (E - 3) * r + (V - 3)
          , M = c << 2;
        for (var a = 0; a < 8; a++) {
            if (R[c] + R[c + 1] + R[c + 2] + R[c + 3] + R[c + 4] + R[c + 5] + R[c + 6] + R[c + 7] != 0 || Y[M + 3] < 200 || Y[M + 7] < 200 || Y[M + 11] < 200 || Y[M + 15] < 200 || Y[M + 19] < 200 || Y[M + 23] < 200 || Y[M + 27] < 200 || Y[M + 31] < 200)
                return 1;
            var x = a << 3;
            J[x + 0] = Y[M + 0];
            t[x + 0] = Y[M + 1];
            C[x + 0] = Y[M + 2];
            J[x + 1] = Y[M + 4];
            t[x + 1] = Y[M + 5];
            C[x + 1] = Y[M + 6];
            J[x + 2] = Y[M + 8];
            t[x + 2] = Y[M + 9];
            C[x + 2] = Y[M + 10];
            J[x + 3] = Y[M + 12];
            t[x + 3] = Y[M + 13];
            C[x + 3] = Y[M + 14];
            J[x + 4] = Y[M + 16];
            t[x + 4] = Y[M + 17];
            C[x + 4] = Y[M + 18];
            J[x + 5] = Y[M + 20];
            t[x + 5] = Y[M + 21];
            C[x + 5] = Y[M + 22];
            J[x + 6] = Y[M + 24];
            t[x + 6] = Y[M + 25];
            C[x + 6] = Y[M + 26];
            J[x + 7] = Y[M + 28];
            t[x + 7] = Y[M + 29];
            C[x + 7] = Y[M + 30];
            M += r << 2;
            c += r
        }
        return 0
    }
    ;
    w.VO.t3 = function(Y, R) {
        R[0] = Y[32] + Y[0];
        R[1] = Y[33] + Y[1];
        R[2] = Y[34] + Y[2];
        R[3] = Y[35] + Y[3];
        R[4] = Y[36] + Y[4];
        R[5] = Y[37] + Y[5];
        R[6] = Y[38] + Y[6];
        R[7] = Y[39] + Y[7];
        R[8] = Y[40] + Y[8];
        R[9] = Y[41] + Y[9];
        R[10] = Y[42] + Y[10];
        R[11] = Y[43] + Y[11];
        R[12] = Y[44] + Y[12];
        R[13] = Y[45] + Y[13];
        R[14] = Y[46] + Y[14];
        R[15] = Y[47] + Y[15];
        R[16] = Y[48] + Y[16];
        R[17] = Y[49] + Y[17];
        R[18] = Y[50] + Y[18];
        R[19] = Y[51] + Y[19];
        R[20] = Y[52] + Y[20];
        R[21] = Y[53] + Y[21];
        R[22] = Y[54] + Y[22];
        R[23] = Y[55] + Y[23];
        R[24] = Y[56] + Y[24];
        R[25] = Y[57] + Y[25];
        R[26] = Y[58] + Y[26];
        R[27] = Y[59] + Y[27];
        R[28] = Y[60] + Y[28];
        R[29] = Y[61] + Y[29];
        R[30] = Y[62] + Y[30];
        R[31] = Y[63] + Y[31];
        R[32] = Y[0] - Y[32];
        R[33] = Y[1] - Y[33];
        R[34] = Y[2] - Y[34];
        R[35] = Y[3] - Y[35];
        R[36] = Y[4] - Y[36];
        R[37] = Y[5] - Y[37];
        R[38] = Y[6] - Y[38];
        R[39] = Y[7] - Y[39];
        R[40] = Y[8] - Y[40];
        R[41] = Y[9] - Y[41];
        R[42] = Y[10] - Y[42];
        R[43] = Y[11] - Y[43];
        R[44] = Y[12] - Y[44];
        R[45] = Y[13] - Y[45];
        R[46] = Y[14] - Y[46];
        R[47] = Y[15] - Y[47];
        R[48] = Y[16] - Y[48];
        R[49] = Y[17] - Y[49];
        R[50] = Y[18] - Y[50];
        R[51] = Y[19] - Y[51];
        R[52] = Y[20] - Y[52];
        R[53] = Y[21] - Y[53];
        R[54] = Y[22] - Y[54];
        R[55] = Y[23] - Y[55];
        R[56] = Y[24] - Y[56];
        R[57] = Y[25] - Y[57];
        R[58] = Y[26] - Y[58];
        R[59] = Y[27] - Y[59];
        R[60] = Y[28] - Y[60];
        R[61] = Y[29] - Y[61];
        R[62] = Y[30] - Y[62];
        R[63] = Y[31] - Y[63];
        Y[0] = R[16] + R[0];
        Y[1] = R[17] + R[1];
        Y[2] = R[18] + R[2];
        Y[3] = R[19] + R[3];
        Y[4] = R[20] + R[4];
        Y[5] = R[21] + R[5];
        Y[6] = R[22] + R[6];
        Y[7] = R[23] + R[7];
        Y[8] = R[24] + R[8];
        Y[9] = R[25] + R[9];
        Y[10] = R[26] + R[10];
        Y[11] = R[27] + R[11];
        Y[12] = R[28] + R[12];
        Y[13] = R[29] + R[13];
        Y[14] = R[30] + R[14];
        Y[15] = R[31] + R[15];
        Y[16] = R[0] - R[16];
        Y[17] = R[1] - R[17];
        Y[18] = R[2] - R[18];
        Y[19] = R[3] - R[19];
        Y[20] = R[4] - R[20];
        Y[21] = R[5] - R[21];
        Y[22] = R[6] - R[22];
        Y[23] = R[7] - R[23];
        Y[24] = R[8] - R[24];
        Y[25] = R[9] - R[25];
        Y[26] = R[10] - R[26];
        Y[27] = R[11] - R[27];
        Y[28] = R[12] - R[28];
        Y[29] = R[13] - R[29];
        Y[30] = R[14] - R[30];
        Y[31] = R[15] - R[31];
        R[0] = Y[8] + Y[0];
        R[1] = Y[9] + Y[1];
        R[2] = Y[10] + Y[2];
        R[3] = Y[11] + Y[3];
        R[4] = Y[12] + Y[4];
        R[5] = Y[13] + Y[5];
        R[6] = Y[14] + Y[6];
        R[7] = Y[15] + Y[7];
        R[8] = Y[0] - Y[8];
        R[9] = Y[1] - Y[9];
        R[10] = Y[2] - Y[10];
        R[11] = Y[3] - Y[11];
        R[12] = Y[4] - Y[12];
        R[13] = Y[5] - Y[13];
        R[14] = Y[6] - Y[14];
        R[15] = Y[7] - Y[15];
        Y[0] = R[4] + R[0];
        Y[1] = R[5] + R[1];
        Y[2] = R[6] + R[2];
        Y[3] = R[7] + R[3];
        Y[4] = R[0] - R[4];
        Y[5] = R[1] - R[5];
        Y[6] = R[2] - R[6];
        Y[7] = R[3] - R[7];
        Y[8] = R[12] + R[8];
        Y[9] = R[13] + R[9];
        Y[10] = R[14] + R[10];
        Y[11] = R[15] + R[11];
        Y[12] = R[8] - R[12];
        Y[13] = R[9] - R[13];
        Y[14] = R[10] - R[14];
        Y[15] = R[11] - R[15];
        R[0] = Y[2] + Y[0];
        R[1] = Y[3] + Y[1];
        R[2] = Y[0] - Y[2];
        R[3] = Y[1] - Y[3];
        R[4] = Y[6] + Y[4];
        R[5] = Y[7] + Y[5];
        R[6] = Y[4] - Y[6];
        R[7] = Y[5] - Y[7];
        R[8] = Y[10] + Y[8];
        R[9] = Y[11] + Y[9];
        R[10] = Y[8] - Y[10];
        R[11] = Y[9] - Y[11];
        R[12] = Y[14] + Y[12];
        R[13] = Y[15] + Y[13];
        R[14] = Y[12] - Y[14];
        R[15] = Y[13] - Y[15];
        Y[0] = R[1] + R[0];
        Y[1] = R[0] - R[1];
        Y[2] = R[3] + R[2];
        Y[3] = R[2] - R[3];
        Y[4] = R[5] + R[4];
        Y[5] = R[4] - R[5];
        Y[6] = R[7] + R[6];
        Y[7] = R[6] - R[7];
        Y[8] = R[9] + R[8];
        Y[9] = R[8] - R[9];
        Y[10] = R[11] + R[10];
        Y[11] = R[10] - R[11];
        Y[12] = R[13] + R[12];
        Y[13] = R[12] - R[13];
        Y[14] = R[15] + R[14];
        Y[15] = R[14] - R[15]
    }
    ;
    w.VO.ajI = function() {
        var Y = "", z = 64, R = "v", V = "t", E = "a", r = 5, x, K, J;
        for (x = z >> 1; x > 0; x >>= 1,
        r--) {
            for (K = 0; K < z; K++) {
                J = (K >> r & 1) != 0;
                if (J) {
                    Y += V + "[" + K + "] = " + R + "[" + (-x + K) + "] - " + R + "[" + K + "];  "
                } else {
                    Y += V + "[" + K + "] = " + R + "[" + (x + K) + "] + " + R + "[" + K + "];  "
                }
            }
            E = R;
            R = V;
            V = E;
            Y += "\n"
        }
        console.log(Y)
    }
    ;
    w.VO.anu = function(z, Y, R) {
        var V = Y, E = R, r = V, K = 0, x, t, C;
        while (z >> K != 2)
            K++;
        var J = K;
        for (x = z >> 1; x > 0; x >>= 1,
        K--) {
            for (t = 0; t < z; t++) {
                C = (t >> K & 1) != 0;
                if (C)
                    E[t] = V[-x + t] - V[t];
                else
                    E[t] = V[x + t] + V[t]
            }
            r = V;
            V = E;
            E = r
        }
        if ((J & 1) == 1)
            for (x = 0; x < z; x++)
                R[x] = V[x]
    }
    ;
    w.UK = {};
    w.UK.gU = function(Y, R, V, E, r, K, J, t, C) {
        var c = Date.now()
          , M = new Uint32Array(Y.buffer)
          , a = new Uint32Array(R.buffer)
          , Q = J / V
          , A = t / E
          , p = 1 / Q
          , v = 1 / A
          , W = new Float64Array(2)
          , n = 3
          , $ = 1 / n
          , G = 1 / (n * n)
          , o = 0
          , B = 0
          , L = V
          , u = E;
        if (r) {
            o = r.x;
            B = r.y;
            L = r.d;
            u = r.b
        }
        for (var y = 0; y < u; y++)
            for (var S = 0; S < L; S++) {
                var X = o + S
                  , N = B + y
                  , x = N * V + X
                  , k = x << 1
                  , d = x << 2;
                w.UK.a3f(K, J, t, (X + .5) * Q, (N + .5) * A, W);
                var P = W[0] * p
                  , Z = W[1] * v;
                if (P == 0 && Z == 0)
                    a[x] = M[x];
                else {
                    w.J.k6(X + P + .5, N + Z + .5, M, V, E, a, x, C)
                }
            }
    }
    ;
    w.UK.a3f = function(Y, R, V, E, r, K) {
        E -= .499999;
        r -= .499999;
        var J = ~~E
          , t = ~~r
          , C = E - J
          , c = r - t
          , M = (1 - c) * (1 - C)
          , a = (1 - c) * C
          , Q = c * (1 - C)
          , A = c * C
          , p = J < R - 1 ? J + 1 : J
          , v = t < V - 1 ? t + 1 : t
          , W = t * R + J << 1
          , n = t * R + p << 1
          , $ = v * R + J << 1
          , G = v * R + p << 1;
        K[0] = M * Y[W] + a * Y[n] + Q * Y[$] + A * Y[G];
        K[1] = M * Y[W + 1] + a * Y[n + 1] + Q * Y[$ + 1] + A * Y[G + 1]
    }
    ;
    w.UK.a7Q = function(Y, R, V, E, r) {
        var K = 1 / Y
          , J = [-1, 1, -Y, Y]
          , t = E.length;
        for (var C = 0; C < t; C++) {
            var x = E[C]
              , c = x << 1
              , M = C << 1
              , a = ~~(x * K)
              , Q = x - Y * a
              , A = V[c]
              , p = V[c + 1]
              , v = 0
              , W = 0;
            if (Q != 0 && Q != Y - 1) {
                var n = x - 1 << 1
                  , $ = x + 1 << 1
                  , G = V[n]
                  , o = V[$]
                  , B = V[n + 1]
                  , L = V[$ + 1]
                  , u = A - (G + o) * .5
                  , y = p - (B + L) * .5;
                v -= u * r;
                W -= y * r
            }
            if (a != 0 && a != R - 1) {
                var n = x - Y << 1
                  , $ = x + Y << 1
                  , G = V[n]
                  , o = V[$]
                  , B = V[n + 1]
                  , L = V[$ + 1]
                  , u = A - (G + o) * .5
                  , y = p - (B + L) * .5;
                v -= u * r;
                W -= y * r
            }
            V[c] = A + v;
            V[c + 1] = p + W
        }
    }
    ;
    w.UK.a9g = function(Y, R) {
        var V = Y + "," + R;
        if (w.UK.Dq == V)
            return w.UK.Id;
        var E = w.UK.Id = [];
        w.UK.Dq = V;
        for (var x = 0; x <= 1e3; x++) {
            var r = x * .001
              , K = Math.sqrt(r)
              , J = Math.exp(-4 * K)
              , t = .96 * (1 - K * K)
              , C = R * ((1 - Y) * J + Y * t);
            E[x] = C
        }
        return E
    }
    ;
    w.UK.Dq = "";
    w.UK.Id = [];
    w.UK.a4B = function(Y, R, V, E, r, K, J, t, C, c, M, a, Q) {
        var A = Math.max(0, Math.floor(r - J - 1))
          , p = Math.min(R, Math.ceil(r + J + 1))
          , v = Math.max(0, Math.floor(K - J - 1))
          , W = Math.min(V, Math.ceil(K + J + 1))
          , n = 2 * R
          , $ = J * J
          , G = 1 / J
          , o = 0;
        if (Q && (E == 3 || E == 6))
            C = -C;
        var B = w.UK.a9g(t, C);
        for (var L = v; L < W; L++)
            for (var u = A; u < p; u++) {
                var x = L * R + u
                  , y = x << 1
                  , S = (r - u) * G
                  , X = (K - L) * G
                  , N = S * S + X * X;
                if (N < 1) {
                    a[o] = x;
                    var k = B[~~(N * 1e3)];
                    if (E == 1) {
                        Y[y] = Y[y] * (1 - k * .05);
                        Y[y + 1] = Y[y + 1] * (1 - k * .05)
                    } else {
                        var d = 0, P = 0, _, b, q, e;
                        if (E == 0) {
                            d = c * k;
                            P = M * k
                        } else if (E == 2) {} else if (E == 3) {
                            d = k * X;
                            P = -k * S
                        } else if (E == 4) {
                            d = k * S;
                            P = k * X
                        } else if (E == 5) {
                            d = -k * S;
                            P = -k * X
                        } else if (E == 6) {
                            d = M * k;
                            P = -c * k
                        }
                        var Z = Y[y]
                          , s = Y[y + 1];
                        if (u == 0 || u != R - 1 && d < 0) {
                            _ = 1 + Y[y + 2] - Z;
                            q = Y[y + 3] - s
                        } else {
                            _ = Z - Y[y - 2] + 1;
                            q = s - Y[y - 1]
                        }
                        if (L == 0 || L != V - 1 && P < 0) {
                            b = Y[y + n] - Z;
                            e = 1 + Y[y + n + 1] - s
                        } else {
                            b = Z - Y[y - n];
                            e = s - Y[y - n + 1] + 1
                        }
                        Y[y] = -(_ * d + b * P - Z);
                        Y[y + 1] = -(q * d + e * P - s)
                    }
                    o++
                }
            }
    }
    ;
    w.UK.a8b = function(Y) {
        var R = Y[0]
          , V = Y[0]
          , E = Y[1]
          , r = Y[1];
        for (var x = 0; x < Y.length; x += 2) {
            var K = Y[x]
              , J = Y[x + 1];
            if (K < R)
                R = K;
            else if (K > V)
                V = K;
            if (J < E)
                E = J;
            else if (J > r)
                r = J
        }
        return [R, E, V, r]
    }
    ;
    w.ajx = function(Y, R, V, E, r) {
        function K(h, dw, eK, f9) {
            return Math.sqrt((h - eK) * (h - eK) + (dw - f9) * (dw - f9))
        }
        function J(h, dw) {
            return h >= 0 && h < R && dw >= 0 && dw < V
        }
        function t(h) {
            if (h < 0)
                return 0;
            if (h >= R)
                return R - 1;
            return h
        }
        function C(h) {
            if (h < 0)
                return 0;
            if (h >= V)
                return V - 1;
            return h
        }
        function c(x, h) {
            var dw = h[3] * (1 / 255)
              , eK = E[x] + h[0] * dw;
            if (eK > 255)
                eK = 255;
            E[x] = eK;
            eK = E[x + 1] + h[1] * dw;
            if (eK > 255)
                eK = 255;
            E[x + 1] = eK;
            eK = E[x + 2] + h[2] * dw;
            if (eK > 255)
                eK = 255;
            E[x + 2] = eK
        }
        function M(h, dw, eK) {
            if (!g(h, dw))
                return;
            if (eK[3] < 0)
                eK[3] = 0;
            c((dw * R + h) * 4, eK)
        }
        function a(h) {
            var dw = h.slice(0, 3);
            dw[3] = 0;
            return dw
        }
        var Q = R / 800;
        function A(h) {
            return Math.round(h * Q)
        }
        function p() {
            for (var x = 0; x <= 300; x++) {
                l[x] = v(x)
            }
        }
        function v(V) {
            var h = .8, dw = .2, eK = h * dw, f9 = V / 60 % 2 - 1, gn = eK * (1 - f9 * f9), d$ = dw - eK, dJ;
            if (V < 60) {
                dJ = [eK + d$, gn, 0]
            } else if (V < 120) {
                dJ = [gn, eK, 0]
            } else if (V < 180) {
                dJ = [0, eK, gn]
            } else if (V < 240) {
                dJ = [0, gn, eK]
            } else if (V < 300) {
                dJ = [gn, 0, eK]
            } else {
                dJ = [eK, 0, gn]
            }
            return [(dJ[0] + d$) * 255, (dJ[1] + d$) * 255, (dJ[2] + d$) * 255]
        }
        function W(V) {
            return l[~~V]
        }
        function n(h) {
            return 1 - $(h)
        }
        function $(h) {
            return h - ~~h
        }
        function G(h, dw, eK, f9) {
            q(h, dw, eK, 0, dw + 1, 1, f9)
        }
        function o(h, dw, eK, f9, gn, d$) {
            q(h, dw, eK, 0, f9, 1, gn, d$)
        }
        function B(h) {
            for (var x = 0; x < E.length; x += 4) {
                c(x, h)
            }
        }
        function L(h, dw, eK, f9, gn, d$, dJ, br) {
            u(h, dw, eK, f9, gn, 1, d$, dJ, br)
        }
        function u(h, dw, eK, f9, gn, d$, dJ, br, hE) {
            if (d$ == null)
                d$ = .5;
            if (dJ == null)
                dJ = 0;
            if (br == null)
                br = 0;
            if (hE == null)
                hE = !1;
            var gN = h.x
              , aK = h.y
              , dL = eK.slice(0)
              , aQ = ~~(eK[3] * aM);
            f9 = f9 * aM;
            if (!hE) {
                dw = e(dw);
                gn = e(gn);
                dJ = e(dJ);
                br = e(br)
            }
            var d3 = t(gN - dw)
              , b9 = t(gN + dw);
            for (var ap = d3; ap <= b9; ap++) {
                var fS = ap - gN
                  , bG = Math.floor(Math.sqrt(dw * dw - fS * fS))
                  , cH = C(aK - bG)
                  , bq = C(aK);
                for (var hO = cH; hO <= bq; hO++) {
                    var gD = K(ap, hO, gN, aK);
                    if (gD > dw || gD <= dw - gn)
                        break;
                    var ds = (gD - dw + gn) / gn;
                    dL[3] = aQ - f9 * (d$ == 1 ? ds : Math.pow(ds, d$));
                    c((hO * R + ap) * 4, dL)
                }
                cH = C(aK + bG);
                for (var hO = cH; hO > bq; hO--) {
                    var gD = K(ap, hO, gN, aK);
                    if (gD > dw || gD <= dw - gn)
                        break;
                    var ds = (gD - dw + gn) / gn;
                    dL[3] = aQ - f9 * (d$ == 1 ? ds : Math.pow(ds, d$));
                    c((hO * R + ap) * 4, dL)
                }
            }
            if (dJ > 0) {
                q(h, dw + dJ, dL, dL[3], dJ, 1, 0, 0, !0)
            }
            if (br > 0) {
                q(h, dw - gn, F(eK), -eK[3], br, 1, 0, 0, !0)
            }
        }
        function y(h, dw, eK, f9, gn, d$) {
            q(h, dw, eK, eK[3], dw + 1, 1, f9, gn, d$)
        }
        function S(h, dw, eK, f9, gn) {
            if (gn == null)
                gn = !1;
            var d$ = h.x
              , dJ = h.y;
            f9 *= aM;
            if (!gn) {
                dw = e(dw);
                eK = e(eK)
            }
            var br = t(d$ - dw)
              , hE = t(d$ + dw);
            for (var gN = br; gN < hE; gN++) {
                var aK = gN - d$
                  , dL = ~~Math.sqrt(dw * dw - aK * aK)
                  , aQ = C(dJ - dL)
                  , d3 = C(dJ);
                for (var b9 = aQ; b9 <= d3; b9++) {
                    var ap = K(gN, b9, d$, dJ);
                    if (ap > dw || ap <= dw - eK)
                        break;
                    var fS = (dw - ap) / eK
                      , bG = W(300 * fS);
                    bG[3] = f9;
                    c((b9 * R + gN) * 4, bG)
                }
                aQ = C(dJ + dL);
                for (var b9 = aQ; b9 > d3; b9--) {
                    var ap = K(gN, b9, d$, dJ);
                    if (ap > dw || ap <= dw - eK)
                        break;
                    var fS = (dw - ap) / eK
                      , bG = W(300 * fS);
                    bG[3] = f9;
                    c((b9 * R + gN) * 4, bG)
                }
            }
        }
        function X(i, h) {
            var dw = i.uC
              , eK = i.BT
              , f9 = h.slice(0)
              , gn = h[3] * aM
              , d$ = Math.abs(eK.y - dw.y) > Math.abs(eK.x - dw.x);
            if (d$) {
                var dJ = dw.x;
                dw.x = dw.y;
                dw.y = dJ;
                dJ = eK.x;
                eK.x = eK.y;
                eK.y = dJ
            }
            if (dw.x > eK.x) {
                var dJ = dw;
                dw = eK;
                eK = dJ
            }
            var br = eK.x - dw.x
              , hE = eK.y - dw.y
              , gN = br == 0 ? 1 : hE / br
              , aK = Math.round(dw.x)
              , dL = dw.y + gN * (aK - dw.x)
              , aQ = n(dw.x + .5)
              , d3 = aK
              , b9 = ~~dL;
            if (d$) {
                f9[3] = gn * n(dL) * aQ;
                M(b9, d3, f9);
                f9[3] = gn * $(dL) * aQ;
                M(b9 + 1, d3, f9)
            } else {
                f9[3] = gn * n(dL) * aQ;
                M(d3, b9, f9);
                f9[3] = gn * $(dL) * aQ;
                M(d3, b9 + 1, f9)
            }
            var ap = dL - gN;
            aK = Math.round(eK.x);
            dL = eK.y + gN * (aK - eK.x);
            aQ = $(eK.x + .5);
            var fS = aK
              , bG = ~~dL;
            if (d$) {
                f9[3] = gn * n(dL) * aQ;
                M(bG, fS, f9);
                f9[3] = gn * $(dL) * aQ;
                M(bG + 1, fS, f9)
            } else {
                f9[3] = gn * n(dL) * aQ;
                M(fS, bG, f9);
                f9[3] = gn * $(dL) * aQ;
                M(fS, bG + 1, f9)
            }
            if (d$) {
                for (var cH = d3 + 1; cH <= fS - 1; cH++) {
                    f9[3] = gn * n(ap);
                    M(~~ap, cH, f9);
                    f9[3] = gn * $(ap);
                    M(~~ap + 1, cH, f9);
                    ap += gN
                }
            } else {
                for (var cH = d3 + 1; cH <= fS - 1; cH++) {
                    f9[3] = gn * n(ap);
                    M(cH, ~~ap, f9);
                    f9[3] = gn * $(ap);
                    M(cH, ~~ap + 1, f9);
                    ap += gN
                }
            }
        }
        function N(h, dw, eK, f9) {
            for (var x = 0; x < 4; x++) {
                var gn = h.Gd(dw + 1.3 * x, eK);
                X(gn, f9, 1)
            }
        }
        function gv(h, dw) {
            this.x = Math.round(h);
            this.y = Math.round(dw)
        }
        var k = Math.PI / 180;
        gv.prototype.Gd = function(h, dw) {
            h = h * k;
            var eK = this.x + dw * Math.cos(h)
              , f9 = this.y + dw * Math.sin(h);
            return new d(this.x,this.y,eK,f9)
        }
        ;
        gv.prototype.a4P = function(h, dw) {
            h = h * k;
            var eK = this.bk + dw * Math.cos(h)
              , f9 = this.aaV + dw * Math.sin(h);
            return new gv(eK,f9)
        }
        ;
        function d(h, dw, eK, f9) {
            this.uC = new gv(h,dw);
            this.BT = new gv(eK,f9)
        }
        d.prototype.z6 = function(h) {
            var dw = h * this.uC.x + (1 - h) * this.BT.x
              , eK = h * this.uC.y + (1 - h) * this.BT.y;
            return new gv(dw,eK)
        }
        ;
        var P = L
          , Z = y
          , s = G
          , _ = o
          , b = S
          , q = u
          , e = A
          , g = J
          , F = a
          , l = [];
        p();
        for (var x = 0; x < Y.length; x++) {
            E[x] = Y[x]
        }
        var i = new d(R * r[2],V * r[3],R / 2,V / 2)
          , aM = r[1]
          , H = [];
        H[0] = function iP() {
            var h = [80, 40, 15, 60]
              , eK = 0
              , f9 = 0;
            s(i.z6(1.4), 260, h, 10);
            s(i.z6(1), 100, [240, 50, 50, 30], 30);
            Z(i.z6(1), 60, [255, 40, 0, 40]);
            var dw = [255, 255, 255, 255];
            q(i.z6(1), 70, dw, dw[3], 58, .5);
            s(i.z6(1), 12, dw);
            dw[3] = 40;
            P(i.z6(1), 150, dw, dw[3], 150);
            for (var x = 0; x < 40; x++) {
                eK += Math.random() * 25;
                f9 = Math.random() * e(300) + e(100);
                var gn = i.z6(1).Gd(eK, f9);
                X(i.z6(1).Gd(eK, f9), [110, 110, 110, 30])
            }
            Z(i.z6(1), 130, [255, 255, 255, 8]);
            var d$ = [170, 30, 23, 70];
            _(i.z6(1), 70, d$, 1, 3, 3);
            var dJ = [60, 60, 130, 40];
            s(i.z6(.47), 44, dJ, 5);
            s(i.z6(.43), 22, dJ, 3);
            dJ[3] = 16;
            s(i.z6(.53), 15, dJ, 2);
            var br = [138, 94, 42, 100];
            s(i.z6(.2), 16, br, 2);
            var hE = [130, 255, 170, 180];
            Z(i.z6(0), 4, hE);
            Z(i.z6(-.25), 5, hE);
            br = [150, 90, 0, 50];
            P(i.z6(-.45), 55, F(br), -br[3], 40, 2);
            s(i.z6(-.42), 35, br, 2);
            s(i.z6(-.5), 15, br, 2);
            b(i.z6(-1.28), 145, 11, 70);
            var gN = W(0);
            gN[3] = 50;
            P(i.z6(-1.28), 149, gN, gN[3], 4);
            gN = W(300);
            gN[3] = 50;
            P(i.z6(-1.28), 155 - 1, F(gN), -gN[3], 3);
            var aK = [130, 130, 10, 50];
            _(i.z6(-1), 73, aK, 3, 2);
            var dL = [40, 130, 70, 40];
            P(i.z6(-1), 70, F(dL), -dL[3], 35);
            dL = [40, 170, 60, 50];
            s(i.z6(-.7), 25, dL, 4);
            var dL = [70, 110, 50, 60];
            P(i.z6(1.3), 30, F(dL), -dL[3], 11, 3);
            dJ = [0, 50, 210, 80];
            Z(i.z6(-.72), 20, dJ)
        }
        ;
        H[1] = function hq() {
            Z(i.z6(1), 150, [240, 70, 70, 60]);
            s(i.z6(1), 100, [200, 60, 60, 40], 30);
            var h = [255, 255, 255, 255]
              , dw = 0
              , eK = 0;
            q(i.z6(1), 75, h, h[3], 63);
            s(i.z6(1), 12, h);
            Z(i.z6(1), 270, [200, 200, 200, 20], 10);
            for (var x = 0; x < 10; x++) {
                dw += 10 + Math.random() * 40;
                eK = Math.random() * e(250) + e(80);
                var f9 = i.z6(1).Gd(dw, eK);
                X(f9, [110, 110, 110, 35])
            }
            dw = 5;
            eK = 100;
            for (var x = 0; x < 12; x++) {
                dw += 30;
                N(i.z6(1), dw, eK, [90, 90, 90, 40])
            }
            var gn = [150, 40, 23, 100];
            _(i.z6(1), 70, gn, 1, 3, 3);
            var d$ = [30, 100, 60, 40];
            Z(i.z6(-.9), 180, [255, 255, 255, 20]);
            s(i.z6(-.9), 140, d$, 15);
            var dJ = [170, 80, 25, 15];
            _(i.z6(-.9), 120, dJ, 1, 4, 4);
            var br = [110, 240, 190, 200];
            Z(i.z6(-.6), 3, br);
            br[3] = 100;
            Z(i.z6(-.6), 7, br);
            var hE = [230, 120, 40, 85];
            Z(i.z6(-.73), 9, hE);
            var gN = [60, 60, 190, 50];
            s(i.z6(.3), 28, gN, 6);
            gN[3] = 25;
            s(i.z6(.34), 20, gN, 3)
        }
        ;
        H[2] = function iG() {
            var h = [255, 255, 255, 255]
              , eK = 0
              , f9 = 0;
            s(i.z6(1), 13, h);
            q(i.z6(1), 150, h, h[3], 137);
            var dw = [120, 80, 35, 20];
            s(i.z6(1.4), 260, dw, 10);
            for (var x = 0; x < 40; x++) {
                eK += 5 + Math.random() * 30;
                f9 = Math.random() * e(300);
                X(i.z6(1).Gd(eK, f9), [110, 110, 110, 20])
            }
            var gn = [10, 30, 255, 30];
            s(i.z6(1), 70, gn, 50);
            var d$ = [15, 90, 170, 15];
            s(i.z6(1.5), 60, d$);
            var dJ = [220, 220, 20, 50];
            s(i.z6(-1.15), 8, dJ, 2);
            var h = [255, 255, 255, 40];
            Z(i.z6(-1.18), 6, h);
            Z(i.z6(-1.18), 4, h);
            dJ = [110, 110, 10, 8];
            P(i.z6(-1.2), 32, F(dJ), -dJ[3], 20, 3);
            var br = [5, 0, 16, 255];
            for (var x = 0; x < 4; x++) {
                s(i.z6(-1.36), 10, br, 3)
            }
            var hE = [90, 200, 150, 20]
              , gN = hE.slice(0);
            gN[3] *= 2;
            s(i.z6(-1.32), 7, gN, 3);
            s(i.z6(-1.36), 7, gN, 3);
            s(i.z6(-1.4), 7, gN, 3);
            var h = [230, 230, 230, 100];
            Z(i.z6(-1.36), 2, h);
            h[3] = 3;
            s(i.z6(-.55), 10, h);
            dJ = [120, 100, 10, 18];
            s(i.z6(-.55), 160, dJ, 8);
            s(i.z6(-.55), 80, dJ, 4);
            hE[3] = 3;
            gN[3] = 6;
            P(i.z6(-.49), 13, F(gN), -gN[3], 13, 2);
            P(i.z6(-.55), 13, F(gN), -gN[3], 13, 2);
            hE[3] = 20;
            s(i.z6(.15), 25, hE, 3);
            dJ[3] = 100;
            Z(i.z6(-.52), 3, dJ);
            dJ = [200, 200, 50, 40];
            s(i.z6(.27), 1, dJ, 4);
            var aK = [150, 40, 23, 30];
            P(i.z6(1), 80, F(aK), -aK[3], 2, 1)
        }
        ;
        return H[r[0]]()
    }
    ;
    w.NI = {};
    w.NI.o7 = function(Y) {
        var R = Y.length
          , z = Y[0].length
          , V = new Array(z);
        for (var x = 0; x < z; x++)
            V[x] = new Array(R);
        for (var x = 0; x < z; x++)
            for (var E = 0; E < R; E++)
                V[x][E] = Y[E][x];
        return V
    }
    ;
    w.NI.O2 = function(Y, R) {
        var V = Y.length
          , z = Y[0].length
          , E = new Array(V);
        for (var x = 0; x < V; x++)
            E[x] = new Array(z);
        for (var x = 0; x < V; x++)
            for (var r = 0; r < z; r++)
                E[x][r] = Y[x][r] - R[x][r];
        return E
    }
    ;
    w.NI.add = function(Y, R) {
        var V = Y.length
          , z = Y[0].length
          , E = new Array(V);
        for (var x = 0; x < V; x++)
            E[x] = new Array(z);
        for (var x = 0; x < V; x++)
            for (var r = 0; r < z; r++)
                E[x][r] = Y[x][r] + R[x][r];
        return E
    }
    ;
    w.NI.multiply = function(Y, R) {
        var V = Y.length
          , E = Y[0].length
          , z = R[0].length;
        if (E != R.length)
            throw "e";
        var r = new Array(V);
        for (var x = 0; x < V; x++)
            r[x] = new Array(z);
        if ((E & 1) != 0)
            for (var x = 0; x < V; x++) {
                var K = Y[x]
                  , J = r[x];
                for (var t = 0; t < z; t++) {
                    var C = 0;
                    for (var c = 0; c < E; c++)
                        C += K[c] * R[c][t];
                    J[t] = C
                }
            }
        else
            for (var x = 0; x < V; x++) {
                var K = Y[x]
                  , J = r[x];
                for (var t = 0; t < z; t++) {
                    var C = 0;
                    for (var c = 0; c < E; c += 2)
                        C += K[c] * R[c][t] + K[c + 1] * R[c + 1][t];
                    J[t] = C
                }
            }
        return r
    }
    ;
    w.NI.TN = function(Y, R) {
        var V = Y.length
          , z = Y[0].length
          , E = new Array(V);
        for (var x = 0; x < V; x++) {
            var r = 0;
            for (var K = 0; K < z; K++)
                r += Y[x][K] * R[K];
            E[x] = r
        }
        return E
    }
    ;
    w.NI.MX = function(Y, R) {
        var V = [];
        for (var x = 0; x < Y; x++) {
            V.push([]);
            for (var E = 0; E < R; E++)
                V[x].push(0)
        }
        return V
    }
    ;
    w.NI.a7i = function(Y) {
        for (var x = 0; x < Y.length; x++)
            console.log(JSON.stringify(Y[x]))
    }
    ;
    w.NI.akX = function(Y) {
        var R = [];
        for (var x = 0; x < Y.length; x++)
            R.push(Y[x].join(","));
        return "[" + R.join(";") + "]"
    }
    ;
    w.NI.ej = function(Y, R) {
        var V = Y.length;
        for (var E = 0; E < V; E++) {
            var r = 0
              , K = Number.NEGATIVE_INFINITY;
            for (var x = E; x < V; x++)
                if (Math.abs(Y[x][E]) > K) {
                    r = x;
                    K = Math.abs(Y[x][E])
                }
            w.NI.akm(Y, E, r);
            for (var x = E + 1; x < V; x++) {
                if (Y[E][E] == 0)
                    return 1;
                var J = Y[x][E] / Y[E][E];
                for (var t = E; t < V + 1; t++)
                    Y[x][t] -= Y[E][t] * J
            }
        }
        for (var x = V - 1; x >= 0; x--) {
            if (Y[x][x] == 0)
                return 1;
            var C = Y[x][V] / Y[x][x];
            R[x] = C;
            for (var t = x - 1; t >= 0; t--) {
                Y[t][V] -= Y[t][x] * C;
                Y[t][x] = 0
            }
        }
        return 0
    }
    ;
    w.NI.akm = function(Y, R, V) {
        var E = Y[R];
        Y[R] = Y[V];
        Y[V] = E
    }
    ;
    w.NI.akJ = function(Y) {
        var R = Y.length
          , V = w.NI.MX(R, R);
        for (var x = 0; x < R; x++)
            V[x][x] = Y[x];
        return V
    }
    ;
    w.NI.a61 = function(Y) {
        var R = Y.length
          , V = Y[0].length
          , E = new Array(R);
        for (var x = 0; x < R; x++) {
            E[x] = 0;
            for (var r = 0; r < V; r++)
                E[x] += Y[x][r];
            E[x] /= V
        }
        return E
    }
    ;
    w.NI.j5 = function(Y) {
        var R = 0;
        for (var x = 0; x < Y.length; x++)
            R += Y[x] * Y[x];
        return Math.sqrt(R)
    }
    ;
    w.RK = {};
    w.RK.wS = function(Y) {
        var R = ~~(Y + .5);
        return R < 0 ? 0 : R > 255 ? 255 : R
    }
    ;
    w.RK.transform = function(Y, R, V) {
        var E = w.RK.wS
          , r = Y.h.length;
        for (var x = 0; x < r; x++) {
            var K = Y.h[x]
              , J = Y.l[x]
              , t = Y.O[x];
            R.h[x] = E(V[0] * K + V[1] * J + V[2] * t + V[3] * 255);
            R.l[x] = E(V[4] * K + V[5] * J + V[6] * t + V[7] * 255);
            R.O[x] = E(V[8] * K + V[9] * J + V[10] * t + V[11] * 255)
        }
    }
    ;
    w.RK.fy = function(Y, R, V) {
        var E = w.RK.wS
          , r = Y.length;
        for (var x = 0; x < r; x += 4) {
            var K = Y[x]
              , J = Y[x + 1]
              , t = Y[x + 2];
            R[x] = E(V[0] * K + V[1] * J + V[2] * t + V[3] * 255);
            R[x + 1] = E(V[4] * K + V[5] * J + V[6] * t + V[7] * 255);
            R[x + 2] = E(V[8] * K + V[9] * J + V[10] * t + V[11] * 255)
        }
    }
    ;
    w.RK.m0 = function(Y) {
        var R = Y[0] + Y[1] + Y[2]
          , V = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        if (R == 1) {
            var E = Y.indexOf(1);
            V[E] = V[E + 4] = V[E + 8] = 1
        } else {
            V[0] = Y[0];
            V[5] = Y[1];
            V[10] = Y[2]
        }
        return V
    }
    ;
    w.RK.wN = function(Y, R, V) {
        return [1, 0, 0, Y, 0, 1, 0, R, 0, 0, 1, V, 0, 0, 0, 1]
    }
    ;
    w.RK.Qj = function(Y, R, V) {
        return [Y, 0, 0, 0, 0, R, 0, 0, 0, 0, V, 0, 0, 0, 0, 1]
    }
    ;
    w.RK.a9u = function(Y) {
        return [Y[0], Y[1], Y[2], Y[4], Y[5], Y[6], Y[8], Y[9], Y[10]]
    }
    ;
    w.RK._k = function(Y) {
        return [Y[0], Y[1], Y[2], 0, Y[3], Y[4], Y[5], 0, Y[6], Y[7], Y[8], 0, 0, 0, 0, 1]
    }
    ;
    w.RK.LA = function(Y, R) {
        return [Y[0] * R[0] + Y[1] * R[1] + Y[2] * R[2] + Y[3] * R[3], Y[4] * R[0] + Y[5] * R[1] + Y[6] * R[2] + Y[7] * R[3], Y[8] * R[0] + Y[9] * R[1] + Y[10] * R[2] + Y[11] * R[3], Y[12] * R[0] + Y[13] * R[1] + Y[14] * R[2] + Y[15] * R[3]]
    }
    ;
    w.RK.o7 = function(Y) {
        var R = [];
        R[0] = Y[0];
        R[1] = Y[4];
        R[2] = Y[8];
        R[3] = Y[12];
        R[4] = Y[1];
        R[5] = Y[5];
        R[6] = Y[9];
        R[7] = Y[13];
        R[8] = Y[2];
        R[9] = Y[6];
        R[10] = Y[10];
        R[11] = Y[14];
        R[12] = Y[3];
        R[13] = Y[7];
        R[14] = Y[11];
        R[15] = Y[15];
        return R
    }
    ;
    w.RK.multiply = function(Y, R) {
        var V = [];
        V[0] = Y[0] * R[0] + Y[1] * R[4] + Y[2] * R[8] + Y[3] * R[12];
        V[1] = Y[0] * R[1] + Y[1] * R[5] + Y[2] * R[9] + Y[3] * R[13];
        V[2] = Y[0] * R[2] + Y[1] * R[6] + Y[2] * R[10] + Y[3] * R[14];
        V[3] = Y[0] * R[3] + Y[1] * R[7] + Y[2] * R[11] + Y[3] * R[15];
        V[4] = Y[4] * R[0] + Y[5] * R[4] + Y[6] * R[8] + Y[7] * R[12];
        V[5] = Y[4] * R[1] + Y[5] * R[5] + Y[6] * R[9] + Y[7] * R[13];
        V[6] = Y[4] * R[2] + Y[5] * R[6] + Y[6] * R[10] + Y[7] * R[14];
        V[7] = Y[4] * R[3] + Y[5] * R[7] + Y[6] * R[11] + Y[7] * R[15];
        V[8] = Y[8] * R[0] + Y[9] * R[4] + Y[10] * R[8] + Y[11] * R[12];
        V[9] = Y[8] * R[1] + Y[9] * R[5] + Y[10] * R[9] + Y[11] * R[13];
        V[10] = Y[8] * R[2] + Y[9] * R[6] + Y[10] * R[10] + Y[11] * R[14];
        V[11] = Y[8] * R[3] + Y[9] * R[7] + Y[10] * R[11] + Y[11] * R[15];
        V[12] = Y[12] * R[0] + Y[13] * R[4] + Y[14] * R[8] + Y[15] * R[12];
        V[13] = Y[12] * R[1] + Y[13] * R[5] + Y[14] * R[9] + Y[15] * R[13];
        V[14] = Y[12] * R[2] + Y[13] * R[6] + Y[14] * R[10] + Y[15] * R[14];
        V[15] = Y[12] * R[3] + Y[13] * R[7] + Y[14] * R[11] + Y[15] * R[15];
        return V
    }
    ;
    w.RK.tb = function(Y) {
        var R = [];
        R[0] = Y[5] * Y[10] * Y[15] - Y[5] * Y[14] * Y[11] - Y[6] * Y[9] * Y[15] + Y[6] * Y[13] * Y[11] + Y[7] * Y[9] * Y[14] - Y[7] * Y[13] * Y[10];
        R[1] = -Y[1] * Y[10] * Y[15] + Y[1] * Y[14] * Y[11] + Y[2] * Y[9] * Y[15] - Y[2] * Y[13] * Y[11] - Y[3] * Y[9] * Y[14] + Y[3] * Y[13] * Y[10];
        R[2] = Y[1] * Y[6] * Y[15] - Y[1] * Y[14] * Y[7] - Y[2] * Y[5] * Y[15] + Y[2] * Y[13] * Y[7] + Y[3] * Y[5] * Y[14] - Y[3] * Y[13] * Y[6];
        R[3] = -Y[1] * Y[6] * Y[11] + Y[1] * Y[10] * Y[7] + Y[2] * Y[5] * Y[11] - Y[2] * Y[9] * Y[7] - Y[3] * Y[5] * Y[10] + Y[3] * Y[9] * Y[6];
        R[4] = -Y[4] * Y[10] * Y[15] + Y[4] * Y[14] * Y[11] + Y[6] * Y[8] * Y[15] - Y[6] * Y[12] * Y[11] - Y[7] * Y[8] * Y[14] + Y[7] * Y[12] * Y[10];
        R[5] = Y[0] * Y[10] * Y[15] - Y[0] * Y[14] * Y[11] - Y[2] * Y[8] * Y[15] + Y[2] * Y[12] * Y[11] + Y[3] * Y[8] * Y[14] - Y[3] * Y[12] * Y[10];
        R[6] = -Y[0] * Y[6] * Y[15] + Y[0] * Y[14] * Y[7] + Y[2] * Y[4] * Y[15] - Y[2] * Y[12] * Y[7] - Y[3] * Y[4] * Y[14] + Y[3] * Y[12] * Y[6];
        R[7] = Y[0] * Y[6] * Y[11] - Y[0] * Y[10] * Y[7] - Y[2] * Y[4] * Y[11] + Y[2] * Y[8] * Y[7] + Y[3] * Y[4] * Y[10] - Y[3] * Y[8] * Y[6];
        R[8] = Y[4] * Y[9] * Y[15] - Y[4] * Y[13] * Y[11] - Y[5] * Y[8] * Y[15] + Y[5] * Y[12] * Y[11] + Y[7] * Y[8] * Y[13] - Y[7] * Y[12] * Y[9];
        R[9] = -Y[0] * Y[9] * Y[15] + Y[0] * Y[13] * Y[11] + Y[1] * Y[8] * Y[15] - Y[1] * Y[12] * Y[11] - Y[3] * Y[8] * Y[13] + Y[3] * Y[12] * Y[9];
        R[10] = Y[0] * Y[5] * Y[15] - Y[0] * Y[13] * Y[7] - Y[1] * Y[4] * Y[15] + Y[1] * Y[12] * Y[7] + Y[3] * Y[4] * Y[13] - Y[3] * Y[12] * Y[5];
        R[11] = -Y[0] * Y[5] * Y[11] + Y[0] * Y[9] * Y[7] + Y[1] * Y[4] * Y[11] - Y[1] * Y[8] * Y[7] - Y[3] * Y[4] * Y[9] + Y[3] * Y[8] * Y[5];
        R[12] = -Y[4] * Y[9] * Y[14] + Y[4] * Y[13] * Y[10] + Y[5] * Y[8] * Y[14] - Y[5] * Y[12] * Y[10] - Y[6] * Y[8] * Y[13] + Y[6] * Y[12] * Y[9];
        R[13] = Y[0] * Y[9] * Y[14] - Y[0] * Y[13] * Y[10] - Y[1] * Y[8] * Y[14] + Y[1] * Y[12] * Y[10] + Y[2] * Y[8] * Y[13] - Y[2] * Y[12] * Y[9];
        R[14] = -Y[0] * Y[5] * Y[14] + Y[0] * Y[13] * Y[6] + Y[1] * Y[4] * Y[14] - Y[1] * Y[12] * Y[6] - Y[2] * Y[4] * Y[13] + Y[2] * Y[12] * Y[5];
        R[15] = Y[0] * Y[5] * Y[10] - Y[0] * Y[9] * Y[6] - Y[1] * Y[4] * Y[10] + Y[1] * Y[8] * Y[6] + Y[2] * Y[4] * Y[9] - Y[2] * Y[8] * Y[5];
        var V = Y[0] * R[0] + Y[1] * R[4] + Y[2] * R[8] + Y[3] * R[12];
        for (var x = 0; x < 16; x++)
            R[x] /= V;
        return R
    }
    ;
    w.RK.a9R = function(Y) {
        var R = []
          , V = Y[5] * Y[10] * Y[15] - Y[5] * Y[14] * Y[11] - Y[6] * Y[9] * Y[15] + Y[6] * Y[13] * Y[11] + Y[7] * Y[9] * Y[14] - Y[7] * Y[13] * Y[10]
          , E = -Y[4] * Y[10] * Y[15] + Y[4] * Y[14] * Y[11] + Y[6] * Y[8] * Y[15] - Y[6] * Y[12] * Y[11] - Y[7] * Y[8] * Y[14] + Y[7] * Y[12] * Y[10]
          , r = Y[4] * Y[9] * Y[15] - Y[4] * Y[13] * Y[11] - Y[5] * Y[8] * Y[15] + Y[5] * Y[12] * Y[11] + Y[7] * Y[8] * Y[13] - Y[7] * Y[12] * Y[9]
          , K = -Y[4] * Y[9] * Y[14] + Y[4] * Y[13] * Y[10] + Y[5] * Y[8] * Y[14] - Y[5] * Y[12] * Y[10] - Y[6] * Y[8] * Y[13] + Y[6] * Y[12] * Y[9];
        return Y[0] * V + Y[1] * E + Y[2] * r + Y[3] * K
    }
    ;
    w.RK.B2 = w.RK._k([3.1338561, -1.6168667, -.4906146, -.9787684, 1.9161415, .033454, .0719453, -.2289914, 1.4052427]);
    w.RK.anf = w.RK._k([1.9624274, -.6105343, -.3413404, -.9787684, 1.9161415, .033454, .0286869, -.1406752, 1.3487655]);
    w.RK.a7y = w.RK.tb(w.RK.B2);
    w.wI = {};
    w.wI.qU = new Uint32Array(1);
    w.wI.YV = function(Y, R, V, E, r, K) {
        var J = new Uint32Array(Y)
          , t = 0
          , C = w.wI.qU;
        if (C.length < R * 4)
            w.wI.qU = C = new Uint32Array(R * 4);
        var c = new Float64Array(C.buffer);
        for (var x = 0; x < R; x += 2) {
            var M = r[x]
              , a = r[x + 1]
              , Q = K[x]
              , A = K[x + 1];
            C[t] = a;
            c[t + 2 >> 1] = Q;
            C[t + 1] = J[M];
            J[M] = t + 1;
            t += 4;
            C[t] = M;
            c[t + 2 >> 1] = A;
            C[t + 1] = J[a];
            J[a] = t + 1;
            t += 4
        }
        return {
            YD: C,
            agK: c,
            aiD: J
        }
    }
    ;
    w.wI.ej = function(Y, R, V, E, r, K, J) {
        var t = 1
          , C = w.wI.YV(Y, R, V, E, r, K)
          , c = C.YD
          , M = C.agK
          , a = C.aiD
          , Q = new Uint32Array(Y)
          , A = new w.wI.sq(Y)
          , v = 1
          , o = 0;
        A.push(V);
        A.push(E);
        var p = new w.wI.sq(Y)
          , W = new Uint8Array(Y)
          , n = new Uint32Array(Y);
        W[V] = 1;
        W[E] = 2;
        var $ = new Uint32Array(Y)
          , G = new Uint32Array(Y);
        G[V] = G[E] = 0;
        $[V] = $[E] = 1;
        while (!0) {
            var B = -1
              , k = 0
              , s = 1e30;
            while (!A.sz() && B == -1) {
                var L = A.top()
                  , u = W[L]
                  , y = a[L] - 1;
                while (y != -1) {
                    var S = c[y]
                      , X = W[S]
                      , N = y ^ u - 1 << 2;
                    if (M[N + 2 >> 1] != 0) {
                        if (X == 0) {
                            w.wI.EI(L, y, S, W, n, G, $);
                            A.push(S)
                        } else if (X == u && $[S] <= $[L] && G[S] > G[L])
                            w.wI.EI(L, y, S, W, n, G, $);
                        else if (X != u) {
                            B = N
                        }
                    }
                    y = c[y + 1] - 1
                }
                if (B != -1)
                    break;
                A.pop()
            }
            if (B == -1) {
                break
            }
            v++;
            var d = B;
            while (d != -1) {
                Q[k] = d;
                k++;
                d = n[c[d ^ 4]] - 1
            }
            var P = k >> 1;
            for (var x = 0; x < P; x++) {
                var Z = Q[x];
                Q[x] = Q[k - x - 1];
                Q[k - x - 1] = Z
            }
            d = n[c[B]] - 1;
            while (d != -1) {
                Q[k] = d ^ 4;
                k++;
                d = n[c[d ^ 4]] - 1
            }
            for (var x = 0; x < k; x++)
                s = Math.min(s, M[Q[x] + 2 >> 1]);
            o += s;
            if (o >= J)
                return {
                    JC: null,
                    _Q: o
                };
            for (var x = 0; x < k; x++) {
                var _ = Q[x]
                  , b = _ ^ 4
                  , L = c[b]
                  , S = c[_];
                M[_ + 2 >> 1] -= s;
                M[b + 2 >> 1] += s;
                if (M[_ + 2 >> 1] == 0 && W[L] == W[S]) {
                    if (W[L] == 1) {
                        n[S] = 0;
                        p.push(S)
                    }
                    if (W[L] == 2) {
                        n[L] = 0;
                        p.push(L)
                    }
                }
            }
            while (!p.sz()) {
                var L = p.pop()
                  , u = W[L]
                  , y = a[L] - 1
                  , q = u == 1 ? 4 : 0
                  , e = 0
                  , g = 0
                  , F = 1e9;
                while (y != -1) {
                    var S = c[y]
                      , l = y ^ 4
                      , N = y ^ q;
                    if (W[S] == u && M[N + 2 >> 1] > 0 && w.wI.alE(S, V, E, n, c, v, $, G) + 1 < F) {
                        e = S;
                        g = l;
                        F = G[S] + 1
                    }
                    y = c[y + 1] - 1
                }
                if (g != 0) {
                    w.wI.EI(e, g, L, W, n, G, $);
                    continue
                }
                y = a[L] - 1;
                while (y != -1) {
                    var S = c[y]
                      , N = y ^ q;
                    if (W[S] == u) {
                        if (M[N + 2 >> 1] > 0) {
                            A.push(S)
                        }
                        if (n[S] == y + 1) {
                            n[S] = 0;
                            p.push(S)
                        }
                    }
                    y = c[y + 1] - 1
                }
                W[L] = 0;
                A.remove(L)
            }
        }
        var i = [];
        for (var x = 0; x < R; x += 2) {
            var L = r[x]
              , S = r[x + 1];
            if (W[L] == 1 && W[S] != 1) {
                i.push(x >> 1)
            }
            if (W[S] == 1 && W[L] != 1) {
                i.push(R + x >> 1)
            }
        }
        return {
            JC: i,
            _Q: o
        }
    }
    ;
    w.wI.EI = function(Y, R, V, E, r, K, J) {
        E[V] = E[Y];
        r[V] = R + 1;
        K[V] = K[Y] + 1;
        J[V] = J[Y]
    }
    ;
    w.wI.alE = function(Y, R, V, E, r, K, J, t) {
        var C = Y
          , c = E[Y] - 1
          , M = 0;
        while (c != -1 && J[Y] != K) {
            Y = r[c ^ 4];
            c = E[Y] - 1;
            M++
        }
        if (c == -1 && Y != R && Y != V)
            return 1e9;
        var a = t[Y] + M;
        M = 0;
        c = E[C] - 1;
        while (C != Y) {
            t[C] = a - M;
            M++;
            J[C] = K;
            C = r[c ^ 4];
            c = E[C] - 1
        }
        return a
    }
    ;
    w.wI.a9U = function(Y, R, V, E, r, K) {
        var J = w.wI.YV(Y, R, V, E, r, K)
          , t = J.YD
          , C = J.agK
          , c = J.aiD
          , M = 0
          , a = 0
          , Q = new Uint32Array(Y * 2)
          , A = new w.wI.$0(Y)
          , p = 0;
        while (!0) {
            A.reset();
            A.push(V);
            for (var x = 0; x < Y; x++)
                Q[x << 1] = 0;
            while (!A.sz()) {
                var v = A.pop()
                  , W = c[v] - 1;
                while (W != -1) {
                    p = t[W];
                    if (Q[p << 1] == 0 && C[W + 2 >> 1] > 0 && p != V) {
                        Q[p << 1] = v + 1;
                        Q[(p << 1) + 1] = W;
                        A.push(p)
                    }
                    W = t[W + 1] - 1
                }
                if (Q[E << 1] != 0) {
                    break
                }
            }
            if (Q[E << 1] == 0) {
                break
            }
            var n = 1e30;
            p = E;
            while (!0) {
                var $ = Q[p << 1] - 1;
                if ($ == -1)
                    break;
                var G = Q[(p << 1) + 1];
                n = Math.min(n, C[G + 2 >> 1]);
                p = $
            }
            p = E;
            while (!0) {
                var $ = Q[p << 1] - 1;
                if ($ == -1)
                    break;
                var G = Q[(p << 1) + 1]
                  , o = G ^ 4;
                C[G + 2 >> 1] -= n;
                C[o + 2 >> 1] += n;
                p = $
            }
            M += n
        }
        var B = [];
        for (var x = 0; x < R; x += 2) {
            var $ = r[x]
              , p = r[x + 1];
            if ((Q[$ << 1] != 0 || $ == V) && Q[p << 1] == 0 && p != V) {
                B.push(x >> 1)
            }
            if ((Q[p << 1] != 0 || p == V) && Q[$ << 1] == 0 && $ != V) {
                B.push(R + x >> 1)
            }
        }
        return {
            JC: B,
            _Q: M
        }
    }
    ;
    w.wI.$0 = function(Y) {
        Y |= Y >> 1;
        Y |= Y >> 2;
        Y |= Y >> 4;
        Y |= Y >> 8;
        Y |= Y >> 16;
        this.AF = new Uint32Array(Y + 1);
        this.wC = Y;
        this.Y$ = 0;
        this.VF = 0
    }
    ;
    w.wI.$0.prototype = {
        push: function(Y) {
            var R = this.VF;
            this.AF[R] = Y;
            this.VF = R + 1 & this.wC
        },
        pop: function() {
            var Y = this.Y$
              , R = this.AF[Y];
            this.Y$ = Y + 1 & this.wC;
            return R
        },
        sz: function() {
            return this.Y$ == this.VF
        },
        reset: function() {
            this.Y$ = 0;
            this.VF = 0
        }
    };
    w.wI.sq = function(Y) {
        Y |= Y >> 1;
        Y |= Y >> 2;
        Y |= Y >> 4;
        Y |= Y >> 8;
        Y |= Y >> 16;
        this.AF = new Uint32Array(Y + 1);
        this.wq = new Uint32Array(Y + 1);
        this.wC = Y;
        this.Y$ = 0;
        this.VF = 0
    }
    ;
    w.wI.sq.prototype = {
        top: function() {
            return this.AF[this.Y$]
        },
        ak3: function() {
            return this.AF[this.VF]
        },
        push: function(Y) {
            if (this.wq[Y] != 0)
                return;
            this.wq[Y] = this.VF + 1;
            var R = this.VF;
            this.AF[R] = Y;
            this.VF = R + 1 & this.wC
        },
        pop: function() {
            var Y = this.Y$
              , R = this.AF[Y];
            this.wq[R] = 0;
            this.Y$ = Y + 1 & this.wC;
            return R
        },
        sz: function() {
            return this.Y$ == this.VF
        },
        remove: function(Y) {
            var R = this.wq[Y] - 1;
            if (R == -1)
                return;
            this.wq[Y] = 0;
            if (R == this.Y$) {
                this.pop();
                return
            }
            var V = this.pop();
            this.AF[R] = V;
            this.wq[V] = R + 1
        },
        bL: function(x) {
            return x + this.wC + 1 & this.wC
        }
    };
    w.wI.iC = function(Y, R, V) {
        var E = w.wI.pB(Y, R, V);
        if (R < E - 1)
            w.wI.iC(Y, R, E - 1);
        if (E < V)
            w.wI.iC(Y, E, V)
    }
    ;
    w.wI.pB = function(Y, R, V) {
        var E = Y[R + V >>> 1];
        while (R <= V) {
            while (Y[R] < E)
                R++;
            while (Y[V] > E)
                V--;
            if (R <= V) {
                w.wI.Se(Y, R, V);
                R++;
                V--
            }
        }
        return R
    }
    ;
    w.wI.Se = function(Y, R, V) {
        var E = Y[R];
        Y[R] = Y[V];
        Y[V] = E
    }
    ;
    w.Wg = {};
    w.Wg.a3w = function(Y) {
        for (var x = 0; x < Y.length; x++)
            w.Wg.yF(Y, x)
    }
    ;
    w.Wg.yF = function(Y, x) {
        Y[x].v.keyShapeInvalidated = {
            t: "bool",
            v: !0
        }
    }
    ;
    w.Wg.aez = function(Y) {
        for (var x = 0; x < Y.length; x++)
            Y[x].v.keyOriginIndex.v = x
    }
    ;
    w.Wg.TX = function() {
        return {
            t: "Objc",
            v: {
                classID: "null",
                keyOriginIndex: {
                    t: "long",
                    v: 0
                },
                keyShapeInvalidated: {
                    t: "bool",
                    v: !0
                }
            }
        }
    }
    ;
    w.Wg.i3 = function(Y) {
        Y = Y.v;
        var R = {
            Rctn: 2,
            Ln: 4,
            Elps: 5
        }
          , V = R[Y.classID]
          , E = Y.topLeft ? w.Wg.fC(Y) : null
          , r = null
          , K = 0;
        if (V == 4) {
            var J = Y.Strt.v
              , t = Y.End.v;
            r = [J.Hrzn.v.val, J.Vrtc.v.val, t.Hrzn.v.val, t.Vrtc.v.val];
            K = Y.Wdth.v.val
        }
        if (V == null)
            return null;
        return w.Wg.zb(V, V == 4 ? null : w.Wg.YB(Y), E, r, K)
    }
    ;
    w.Wg.$j = function(Y, R, V, E, r, K) {
        var J = {
            classID: Y,
            unitValueQuadVersion: {
                t: "long",
                v: 1
            }
        };
        if (R)
            w.Wg.F0(J, ["Left", "Top", "Rght", "Btom"], R);
        if (V)
            w.Wg.F0(J, ["topLeft", "topRight", "bottomRight", "bottomLeft"], V);
        if (Y == "Ln") {
            J.Strt = {
                t: "Objc",
                v: {
                    classID: "Pnt",
                    Hrzn: {
                        t: "UntF",
                        v: {
                            type: "#Pxl",
                            val: E[0]
                        }
                    },
                    Vrtc: {
                        t: "UntF",
                        v: {
                            type: "#Pxl",
                            val: E[1]
                        }
                    }
                }
            },
            J.End = {
                t: "Objc",
                v: {
                    classID: "Pnt",
                    Hrzn: {
                        t: "UntF",
                        v: {
                            type: "#Pxl",
                            val: E[2]
                        }
                    },
                    Vrtc: {
                        t: "UntF",
                        v: {
                            type: "#Pxl",
                            val: E[3]
                        }
                    }
                }
            },
            J.Wdth = {
                t: "UntF",
                v: {
                    type: "#Pxl",
                    val: r
                }
            }
        }
        if (K)
            J.Nm = {
                t: "TEXT",
                v: K
            };
        return {
            t: "Objc",
            v: J
        }
    }
    ;
    w.Wg.zb = function(Y, R, V, E, r) {
        var K = w.Wg.TX()
          , J = K.v;
        delete J.keyShapeInvalidated;
        J.keyOriginType = {
            t: "long",
            v: Y
        };
        J.keyOriginResolution = {
            t: "doub",
            v: 75
        };
        if (Y == 4) {
            J.keyOriginLineStart = {
                t: "Objc",
                v: {
                    classID: "Pnt",
                    Hrzn: {
                        t: "doub",
                        v: E[0]
                    },
                    Vrtc: {
                        t: "doub",
                        v: E[1]
                    }
                }
            };
            J.keyOriginLineEnd = {
                t: "Objc",
                v: {
                    classID: "Pnt",
                    Hrzn: {
                        t: "doub",
                        v: E[2]
                    },
                    Vrtc: {
                        t: "doub",
                        v: E[3]
                    }
                }
            };
            R = [Math.min(E[0], E[2]), Math.min(E[1], E[3]), Math.max(E[0], E[2]), Math.max(E[1], E[3])];
            J.keyOriginLineWeight = {
                t: "doub",
                v: r
            },
            J.keyOriginLineArrowSt = {
                t: "bool",
                v: !1
            };
            J.keyOriginLineArrowEnd = {
                t: "bool",
                v: !1
            };
            J.keyOriginLineArrWdth = {
                t: "doub",
                v: 0
            };
            J.keyOriginLineArrLngth = {
                t: "doub",
                v: 0
            };
            J.keyOriginLineArrConc = {
                t: "long",
                v: 0
            }
        }
        var t = {
            classID: "unitRect",
            unitValueQuadVersion: {
                t: "long",
                v: 1
            }
        };
        J.keyOriginShapeBBox = {
            t: "Objc",
            v: t
        };
        w.Wg.LF(J, R);
        if (V != null) {
            var C = {
                classID: "radii",
                unitValueQuadVersion: {
                    t: "long",
                    v: 1
                }
            };
            J.keyOriginRRectRadii = {
                t: "Objc",
                v: C
            };
            w.Wg.$W(J, V)
        }
        return K
    }
    ;
    w.Wg.g = function(Y, R, V, E) {
        var r = w.J.oA(R)
          , K = w.J.WJ(R)
          , J = Math.max(Math.abs(R[0]), Math.abs(R[1]))
          , t = Math.max(Math.abs(R[3]), Math.abs(R[4]));
        for (var x = 0; x < Y.length; x++) {
            var C = Y[x].v
              , c = C.keyShapeInvalidated;
            if (c && c.v || C.keyOriginType == null)
                continue;
            if (V.length != 0 && V.indexOf(x) == -1)
                continue;
            var M = C.keyOriginType.v;
            if (!r || !K || E && M == 2 && Math.abs(1 - J / t) > .01) {
                w.Wg.yF(Y, x);
                continue
            }
            var a = w.Wg.CZ(C);
            w.J.apply(R, a);
            w.Wg.LF(C, [Math.min(a[0], a[2]), Math.min(a[1], a[3]), Math.max(a[0], a[2]), Math.max(a[1], a[3])]);
            if (M == 2) {
                var Q = w.Wg.zU(C)
                  , A = new bF(R[0],R[1],R[3],R[4],0,0);
                A.ht();
                if (A.o == 0) {
                    Q.push(Q.shift());
                    A.rotate(Math.PI / 2);
                    A.ht()
                }
                if (A.o < 0) {
                    var p = Q[0];
                    Q[0] = Q[1];
                    Q[1] = p;
                    p = Q[2];
                    Q[2] = Q[3];
                    Q[3] = p
                }
                if (A.Xa < 0) {
                    var p = Q[0];
                    Q[0] = Q[3];
                    Q[3] = p;
                    p = Q[1];
                    Q[1] = Q[2];
                    Q[2] = p
                }
                if (E)
                    for (var v = 0; v < 4; v++)
                        Q[v] = Q[v] * J;
                w.Wg.$W(C, Q)
            }
            if (M == 4) {
                C.keyOriginLineWeight.v *= J;
                var W = w.Wg.Vn(C);
                w.J.apply(R, W);
                w.Wg.ah9(C, W)
            }
        }
    }
    ;
    w.Wg.AG = function(Y, R) {
        var V = R.N;
        for (var x = 0; x < Y.length; x++) {
            var E = Y[x].v, r = E.keyShapeInvalidated, a;
            if (r && r.v || E.keyOriginType == null)
                continue;
            var K = E.keyOriginType.v
              , J = w.Wg.CZ(E)
              , t = J[0]
              , C = J[1]
              , c = J[2]
              , M = J[3];
            if (K == 1)
                a = w.Y.o3.Rect(t, C, c - t, M - C, 0);
            else if (K == 2) {
                var Q = w.Wg.zU(E);
                a = w.Y.o3.Rect(t, C, c - t, M - C, Q)
            } else if (K == 4) {
                var A = w.Wg.Vn(E);
                a = w.Y.o3.QE(A[0], A[1], A[2], A[3], E.keyOriginLineWeight.v)
            } else if (K == 5)
                a = w.Y.o3.lp(t, C, c - t, M - C);
            var p = w.Y.En(V, x)
              , v = w.Y.Cs(V, x);
            a[2].yV = V[p].yV;
            var W = V;
            V = V.slice(0, p);
            for (var n = 2; n < a.length; n++)
                V.push(a[n]);
            for (var n = p + v; n < W.length; n++)
                V.push(W[n])
        }
        R.N = V;
        R.Dw = !0
    }
    ;
    w.Wg.k4 = function(Y) {
        var R = 1e9
          , V = -R
          , E = 1e9
          , r = -E
          , K = null
          , J = Y.PD()
          , t = J[0]
          , C = J[1];
        for (var c = 0; c < C.length; c++) {
            var M = t[C[c]]
              , a = M.add.vogk;
            if (a == null)
                continue;
            var Q = M.add.vmsk.C;
            for (var A = 0; A < a.length; A++) {
                var p = a[A].v
                  , v = p.keyShapeInvalidated;
                if (v && v.v || p.keyOriginType == null)
                    continue;
                if (C.length == 1 && Q.length != 0 && Q.indexOf(A) == -1)
                    continue;
                var W = p.keyOriginType.v;
                if (W != 4) {
                    var n = w.Wg.CZ(p);
                    R = Math.min(R, n[0]);
                    E = Math.min(E, n[1]);
                    V = Math.max(V, n[2]);
                    r = Math.max(r, n[3])
                }
                if (W == 2 && K == null) {
                    K = w.Wg.zU(p)
                }
            }
        }
        return [R < V ? [R, E, V, r] : null, K]
    }
    ;
    w.Wg.a4A = function(Y, R, V) {
        var E = w.Wg.k4(Y)[0], r;
        if (E) {
            var K = new bF;
            K.translate(-E[0], -E[1]);
            K.scale(1 / (E[2] - E[0]), 1 / (E[3] - E[1]));
            K.scale(R[2] - R[0], R[3] - R[1]);
            K.translate(R[0], R[1]);
            r = w.J.tu(K)
        }
        var J = Y.PD()
          , t = J[0]
          , C = J[1];
        for (var c = 0; c < C.length; c++) {
            var M = t[C[c]]
              , a = M.add.vogk;
            if (a == null)
                continue;
            var Q = M.add.vmsk.C;
            for (var A = 0; A < a.length; A++) {
                var p = a[A].v
                  , v = p.keyShapeInvalidated;
                if (v && v.v || p.keyOriginType == null)
                    continue;
                if (C.length == 1 && Q.length != 0 && Q.indexOf(A) == -1)
                    continue;
                var W = p.keyOriginType.v;
                if (W != 4 && R[0] != null) {
                    var R = w.Wg.CZ(p);
                    w.J.apply(r, R);
                    w.Wg.LF(p, R)
                }
                if (W == 2 && V != null) {
                    w.Wg.$W(p, V)
                }
            }
        }
    }
    ;
    w.Wg.CZ = function(Y) {
        return w.Wg.YB(Y.keyOriginShapeBBox.v)
    }
    ;
    w.Wg.YB = function(Y) {
        var R = Y.Left.v.val
          , V = Y.Rght.v.val
          , E = Y.Top.v.val
          , r = Y.Btom.v.val;
        return [R, E, V, r]
    }
    ;
    w.Wg.LF = function(Y, R) {
        w.Wg.F0(Y.keyOriginShapeBBox.v, ["Left", "Top", "Rght", "Btom"], R)
    }
    ;
    w.Wg.zU = function(Y) {
        return w.Wg.fC(Y.keyOriginRRectRadii.v)
    }
    ;
    w.Wg.fC = function(Y) {
        var R = []
          , V = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
        for (var E = 0; E < 4; E++)
            R.push(Y[V[E]].v.val);
        return R
    }
    ;
    w.Wg.$W = function(Y, R) {
        w.Wg.F0(Y.keyOriginRRectRadii.v, ["topLeft", "topRight", "bottomRight", "bottomLeft"], R)
    }
    ;
    w.Wg.F0 = function(Y, R, V) {
        for (var x = 0; x < 4; x++)
            if (V[x] != null)
                Y[R[x]] = {
                    t: "UntF",
                    v: {
                        type: "#Pxl",
                        val: V[x]
                    }
                }
    }
    ;
    w.Wg.Vn = function(Y) {
        var R = Y.keyOriginLineStart.v
          , V = Y.keyOriginLineEnd.v;
        return [R.Hrzn.v, R.Vrtc.v, V.Hrzn.v, V.Vrtc.v]
    }
    ;
    w.Wg.ah9 = function(Y, R) {
        var V = Y.keyOriginLineStart.v
          , E = Y.keyOriginLineEnd.v;
        V.Hrzn.v = R[0];
        V.Vrtc.v = R[1];
        E.Hrzn.v = R[2];
        E.Vrtc.v = R[3]
    }
    ;
    w.H = {};
    w.H.clone = function(Y) {
        return {
            R: Y.R.slice(0),
            P: Y.P.slice(0)
        }
    }
    ;
    w.H.SO = function(Y) {
        if (Y.length < 6)
            return !0;
        var R = Y.length - 4;
        for (var x = 0; x < R; x += 2)
            if (!w.H.vC(Y[x], Y[x + 1], Y[x + 2], Y[x + 3], Y[x + 4], Y[x + 5]))
                return !1;
        if (!w.H.vC(Y[R], Y[R + 1], Y[R + 2], Y[R + 3], Y[0], Y[1]))
            return !1;
        if (!w.H.vC(Y[R + 2], Y[R + 3], Y[0], Y[1], Y[2], Y[3]))
            return !1;
        return !0
    }
    ;
    w.H.vC = function(Y, R, V, E, r, K) {
        return (R - E) * (r - V) + (V - Y) * (K - E) >= 0
    }
    ;
    w.H._t = function(Y) {
        var R = {}
          , V = null
          , E = 0
          , r = {
            M: 2,
            L: 2,
            Q: 4,
            C: 6
        };
        for (var x = 0; x < Y.R.length; x++) {
            var K = Y.R[x];
            if (K.charAt(0) == "#") {
                if (R[K] == null)
                    R[K] = {
                        P: [],
                        R: []
                    };
                V = R[K]
            } else if (K != "X") {
                V.R.push(K);
                var J = r[K];
                if (J == null)
                    J = 0;
                for (var t = 0; t < J; t++)
                    V.P.push(Y.P[E + t]);
                E += J
            }
        }
        return R
    }
    ;
    w.H.cU = function(Y, R) {
        Y = w.H.vQ(Y);
        var V = Y.P
          , E = Y.R
          , r = 0
          , K = []
          , J = null;
        for (var x = 0; x < E.length; x++) {
            var t = E[x];
            if (t == "M") {
                J = {
                    ae_: r,
                    ij: 0,
                    Vi: !1
                };
                K.push(J);
                r += 2
            }
            if (t == "C") {
                J.ij++;
                r += 6
            }
            if (t == "Z") {
                J.Vi = !0
            }
        }
        var C = [];
        for (var x = 0; x < K.length; x++)
            if (K[x].ij != 0)
                C.push(K[x]);
        K = C;
        for (var x = 0; x < K.length; x++) {
            var c = K[x]
              , M = c.ae_
              , a = M + 2 + c.ij * 6
              , A = 0;
            c.WC = w.H.Hh(V, M, a);
            var Q = V[M] == V[a - 2] && V[M + 1] == V[a - 1];
            for (var p = 0; p < c.ij; p++) {
                var v = M + p * 6
                  , W = v + 6;
                A += (V[W] - V[v]) * (V[W + 1] + V[v + 1])
            }
            if (c.ij == 2) {
                var n = function(i, aM, H) {
                    var iP = 1 - H;
                    return iP * iP * iP * i[aM] + 3 * iP * iP * H * i[aM + 2] + 3 * iP * H * H * i[aM + 4] + H * H * H * i[aM + 6]
                }
                  , $ = V[M]
                  , G = V[M + 1]
                  , o = V[M + 6]
                  , B = V[M + 7]
                  , L = V[M + 6]
                  , u = V[M + 7]
                  , y = n(V, M, .5)
                  , S = n(V, M + 1, .5)
                  , X = n(V, M + 6, .5)
                  , N = n(V, M + 7, .5);
                A = (y - $) * (S - G) + (o - y) * (B - S) + (X - o) * (N - B) + (L - X) * (u - N)
            }
            if (!Q)
                A += (V[M] - V[a - 2]) * (V[M + 1] + V[a - 1]);
            c.Jw = A <= 0
        }
        for (var x = 0; x < K.length - 1; x++)
            for (var v = x + 1; v < K.length; v++) {
                var k = K[x]
                  , d = K[v];
                if (d.WC.Nk(k.WC)) {
                    K[x] = d;
                    K[v] = k
                }
            }
        var P = K.length == 0 ? !0 : K[0].Jw
          , Z = [{
            type: 6
        }, {
            type: 8,
            all: 0
        }];
        for (var x = 0; x < K.length; x++) {
            var c = K[x]
              , M = c.ae_
              , a = M + 2 + c.ij * 6
              , Q = V[M] == V[a - 2] && V[M + 1] == V[a - 1]
              , s = c.Vi || Q ? 0 : 3
              , _ = c.Jw == P && !R ? 1 : 0;
            if (!R && x != 0) {
                if (K[x - 1].WC.Nk(c.WC) && K[x - 1].Jw != c.Jw)
                    _ = 0;
                for (var v = 0; v < K.length; v++)
                    if (v != x && K[v].WC.Nk(c.WC))
                        _ = 0
            }
            Z.push({
                type: s,
                length: c.ij + (Q ? 0 : 1),
                yV: _,
                sK: 2
            });
            for (var v = 0; v < c.ij; v++) {
                var r = M + v * 6, b = new gv(V[r],V[r + 1]), q = new gv(V[r + 2],V[r + 3]), e;
                if (v == 0) {
                    if (Q)
                        e = new gv(V[a - 4],V[a - 3]);
                    else
                        e = b.clone()
                } else
                    e = new gv(V[r - 2],V[r - 1]);
                Z.push({
                    type: s + 2,
                    wJ: e,
                    Z: b,
                    Ii: q
                })
            }
            if (!Q) {
                var g = new gv(V[a - 2],V[a - 1]);
                Z.push({
                    type: s + 2,
                    wJ: new gv(V[a - 4],V[a - 3]),
                    Z: g,
                    Ii: g.clone()
                })
            }
        }
        for (var v = 0; v < Z.length; v++) {
            var F = Z[v];
            if (F.type > 5 || F.type == 0 || F.type == 3)
                continue;
            var l = F.wJ.yU(F.Z) || F.Ii.yU(F.Ii);
            if (!l) {
                var k = F.wJ.x * (F.Z.y - F.Ii.y) + F.Z.x * (F.Ii.y - F.wJ.y) + F.Ii.x * (F.wJ.y - F.Z.y);
                if (Math.abs(k) < 1e-6)
                    l = !0
            }
            if (l)
                F.type--
        }
        return Z
    }
    ;
    w.H.FY = function() {
        function Y(E, r, K, J) {
            if (!J && E.Ii.yU(E.Z) && r.wJ.yU(r.Z)) {
                K.P.push(r.Z.x, r.Z.y);
                K.R.push("L")
            } else {
                K.P.push(E.Ii.x, E.Ii.y, r.wJ.x, r.wJ.y, r.Z.x, r.Z.y);
                K.R.push("C")
            }
        }
        function R(E, r, x, K, J, t) {
            var C = r[x];
            E.P.push(C.Z.x, C.Z.y);
            E.R.push("M");
            for (var c = x; c < x + K - 1; c++)
                Y(r[c], r[c + 1], E, t);
            if (!J)
                Y(r[c], r[x], E, t)
        }
        function V(E, r) {
            if (r == null)
                r = !1;
            var K = {
                P: [],
                R: []
            };
            for (var x = 0; x < E.length; x++) {
                if (E[x].type > 5)
                    continue;
                var J = E[x].length;
                if (J == 0)
                    continue;
                if (x == E.length - 1)
                    break;
                var t = E[x].type == 3;
                R(K, E, x + 1, J, t, r);
                if (!t)
                    K.R.push("Z");
                x += J
            }
            return K
        }
        return V
    }();
    w.H.a7R = function(Y) {
        var R = Y.P, V = [], E, r = 0;
        for (var x = 0; x < Y.R.length; x++) {
            var K = Y.R[x];
            if (K == "C") {
                E.push(R[r++], R[r++], R[r++], R[r++], R[r++], R[r++])
            } else if (K == "Z") {} else {
                E = [];
                if (K != "M") {
                    E.push(K);
                    x++
                }
                E.push(R[r++], R[r++]);
                V.push(E)
            }
        }
        return V
    }
    ;
    w.H.C6 = function(Y, R, V, E) {
        if (E == null)
            E = 1e9;
        var r = 1e9
          , K = 0;
        for (var x = 0; x < Y.length; x += 2) {
            var J = R - Y[x]
              , t = V - Y[x + 1]
              , C = J * J + t * t;
            if (C < r) {
                r = C;
                K = x >>> 1
            }
        }
        return r < E * E ? K : -1
    }
    ;
    w.H.oD = function(Y, R, V, E) {
        for (var x = 0; x < Y.length; x += 2) {
            var r = Y[x]
              , K = Y[x + 1]
              , J = R[x]
              , t = R[x + 1];
            V[x] = r + (J - r) * E;
            V[x + 1] = K + (t - K) * E
        }
    }
    ;
    w.H.g = function(Y, R, V) {
        for (var x = 0; x < Y.length; x += 2) {
            var E = Y[x]
              , r = Y[x + 1];
            V[x] = E * R.o + r * R.w8 + R.Wr;
            V[x + 1] = E * R.O + r * R.Xa + R.W8
        }
    }
    ;
    w.H.Hh = function(Y, R, V) {
        if (R == null)
            R = 0;
        if (V == null)
            V = Y.length;
        var E = 99999999999
          , r = -E
          , K = 99999999999
          , J = -K;
        for (var x = R; x < V; x += 2) {
            var t = Y[x]
              , C = Y[x + 1];
            E = Math.min(E, t);
            K = Math.min(K, C);
            r = Math.max(r, t);
            J = Math.max(J, C)
        }
        return new gE(E,K,r - E,J - K)
    }
    ;
    w.H.Yz = function(Y, R) {
        var V = Math.max(R.x, Math.min(R.x + R.d, Y.x))
          , E = Math.max(R.y, Math.min(R.y + R.b, Y.y))
          , r = Y.x - V
          , K = Y.y - E;
        return Math.sqrt(r * r + K * K)
    }
    ;
    w.H.pV = function(Y) {
        if (Y.uD())
            return new gE(Math.floor(Y.x),Math.floor(Y.y),Math.ceil(Y.d),Math.ceil(Y.b));
        var R = Math.floor(Y.x)
          , V = Math.ceil(Y.x + Y.d)
          , E = Math.floor(Y.y)
          , r = Math.ceil(Y.y + Y.b);
        return new gE(R,E,V - R,r - E)
    }
    ;
    w.H.LB = function(Y) {
        return w.H.pV(w.H.Hh(Y))
    }
    ;
    w.H.se = function(Y) {
        var R = Y.x
          , V = Y.y
          , E = Y.x + Y.d
          , r = Y.y + Y.b;
        return {
            R: ["M", "L", "L", "L", "Z"],
            P: [R, V, E, V, E, r, R, r]
        }
    }
    ;
    w.H.concat = function(Y, R, V) {
        if (V == null)
            V = new bF;
        for (var x = 0; x < R.P.length; x += 2) {
            var E = R.P[x]
              , r = R.P[x + 1];
            Y.P.push(E * V.o + r * V.w8 + V.Wr);
            Y.P.push(E * V.O + r * V.Xa + V.W8)
        }
        for (var x = 0; x < R.R.length; x++)
            Y.R.push(R.R[x])
    }
    ;
    w.H.vQ = function(Y) {
        var R = Y.P
          , V = []
          , E = []
          , r = 0
          , K = 0
          , J = 0
          , t = 0
          , C = 0
          , c = 0
          , M = 0
          , a = 0
          , Q = 0;
        for (var x = 0; x < Y.R.length; x++) {
            var A = Y.R[x];
            if (A == "M") {
                K = R[r];
                J = R[r + 1];
                r += 2;
                E.push(A);
                V.push(K, J)
            } else if (A == "C") {
                t = R[r];
                C = R[r + 1];
                c = R[r + 2];
                M = R[r + 3];
                a = R[r + 4];
                Q = R[r + 5];
                r += 6;
                E.push(A);
                V.push(t, C, c, M, a, Q);
                K = a;
                J = Q
            } else if (A == "Q") {
                t = R[r];
                C = R[r + 1];
                c = R[r + 2];
                M = R[r + 3];
                r += 4;
                var p = t - K
                  , v = C - J
                  , W = c - t
                  , n = M - C;
                E.push("C");
                V.push(K + 2 / 3 * p, J + 2 / 3 * v, t + 1 / 3 * W, C + 1 / 3 * n, c, M);
                K = c;
                J = M
            } else if (A == "L") {
                t = R[r];
                C = R[r + 1];
                r += 2;
                var $ = t - K
                  , G = C - J;
                E.push("C");
                V.push(K, J, t, C, t, C);
                K = t;
                J = C
            } else
                E.push(A)
        }
        return {
            R: E,
            P: V
        }
    }
    ;
    w.H.a9_ = function(Y) {
        var R = Y.P
          , V = []
          , E = []
          , r = 0;
        for (var x = 0; x < Y.R.length; x++) {
            var K = Y.R[x];
            if (K == "Q") {
                var J = R[r - 2]
                  , t = R[r - 1]
                  , C = R[r]
                  , c = R[r + 1]
                  , M = R[r + 2]
                  , a = R[r + 3];
                r += 4;
                var Q = C - J
                  , A = c - t
                  , p = M - C
                  , v = a - c;
                E.push("C");
                V.push(J + 2 / 3 * Q, t + 2 / 3 * A, C + 1 / 3 * p, c + 1 / 3 * v, M, a)
            } else {
                var W = 0;
                if (K == "M" || K == "L")
                    W = 2;
                else if (K == "C")
                    W = 6;
                for (var n = 0; n < W; n++)
                    V.push(R[r + n]);
                r += W;
                E.push(K)
            }
        }
        return {
            R: E,
            P: V
        }
    }
    ;
    w.H.Pg = function(Y, R) {
        var V = Y.P
          , E = []
          , r = []
          , K = 0
          , J = 0
          , t = 0
          , C = 0
          , c = 0
          , M = 0
          , a = 0
          , Q = 0
          , A = 0;
        for (var x = 0; x < Y.R.length; x++) {
            var p = Y.R[x];
            if (p == "M") {
                J = V[K];
                t = V[K + 1];
                K += 2;
                r.push(p);
                E.push(J, t)
            } else if (p == "C") {
                C = V[K];
                c = V[K + 1];
                M = V[K + 2];
                a = V[K + 3];
                Q = V[K + 4];
                A = V[K + 5];
                K += 6;
                w.H.Y7(J, t, C, c, M, a, Q, A, R, r, E, 0);
                J = Q;
                t = A
            } else
                r.push(p)
        }
        return {
            R: r,
            P: E
        }
    }
    ;
    w.H.Y7 = function(Y, R, V, E, r, K, J, t, C, c, M, a) {
        var Q = Math.sqrt((J - Y) * (J - Y) + (t - R) * (t - R))
          , A = Math.sqrt((J - r) * (J - r) + (t - K) * (t - K)) + Math.sqrt((r - V) * (r - V) + (K - E) * (K - E)) + Math.sqrt((V - Y) * (V - Y) + (E - R) * (E - R))
          , p = (Q + A) / 2;
        if (p <= C) {
            c.push("C");
            M.push(V, E, r, K, J, t)
        } else {
            var v = 0
              , W = 0
              , n = 0
              , $ = 0
              , G = 0
              , o = 0
              , B = 0
              , L = 0
              , u = 0
              , y = 0
              , S = 0
              , X = 0
              , N = 0;
            W = (Y + V) / 2;
            n = (R + E) / 2;
            $ = (V + r) / 2;
            G = (E + K) / 2;
            o = (r + J) / 2;
            B = (K + t) / 2;
            L = (W + $) / 2;
            u = (n + G) / 2;
            y = ($ + o) / 2;
            S = (G + B) / 2;
            X = (L + y) / 2;
            N = (u + S) / 2;
            w.H.Y7(Y, R, W, n, L, u, X, N, C, c, M, a + 1);
            w.H.Y7(X, N, y, S, o, B, J, t, C, c, M, a + 1)
        }
    }
    ;
    w.H.uN = function(Y, R) {
        var V = Y.length - 2
          , E = Y[0]
          , r = Y[1]
          , K = Y[V]
          , J = Y[V + 1]
          , t = K - E
          , C = J - r
          , c = 1 / Math.sqrt(t * t + C * C)
          , M = K * r - J * E
          , a = -1
          , Q = -1;
        for (var x = 2; x < V; x += 2) {
            var A = Y[x]
              , p = Y[x + 1]
              , v = Math.abs(C * A - t * p + M) * c;
            if (v > Q) {
                Q = v;
                a = x
            }
        }
        if (Q < R)
            return [E, r, K, J];
        var W = w.H.uN(Y.slice(0, a + 2), R)
          , n = w.H.uN(Y.slice(a), R);
        for (var x = 2; x < n.length; x++)
            W.push(n[x]);
        return W
    }
    ;
    w.H.acc = function() {
        var Y = function(E, r, K, J, t, C) {
            return (r - J) * (t - K) + (K - E) * (C - J) >= 0
        }
          , R = function(E, r, K, J, t, C, c, M) {
            var a = c - K
              , Q = M - J
              , A = t - K
              , p = C - J
              , v = E - K
              , W = r - J
              , n = a * a + Q * Q
              , $ = a * A + Q * p
              , G = a * v + Q * W
              , o = A * A + p * p
              , B = A * v + p * W
              , L = 1 / (n * o - $ * $)
              , u = (o * G - $ * B) * L
              , y = (n * B - $ * G) * L;
            return u >= 0 && y >= 0 && u + y < 1
        }
          , V = function(E) {
            var z = E.length >>> 1
              , x = 0;
            if (z < 3)
                return [];
            var r = []
              , K = [];
            for (var x = 0; x < z; x++)
                K.push(x);
            var J = z;
            while (J > 3) {
                var t = K[(x + 0) % J]
                  , C = K[(x + 1) % J]
                  , c = K[(x + 2) % J]
                  , M = E[2 * t]
                  , a = E[2 * t + 1]
                  , Q = E[2 * C]
                  , A = E[2 * C + 1]
                  , p = E[2 * c]
                  , v = E[2 * c + 1]
                  , W = !1;
                if (Y(M, a, Q, A, p, v)) {
                    W = !0;
                    for (var n = 0; n < J; n++) {
                        var $ = K[n];
                        if ($ == t || $ == C || $ == c)
                            continue;
                        if (R(E[2 * $], E[2 * $ + 1], M, a, Q, A, p, v)) {
                            W = !1;
                            break
                        }
                    }
                }
                if (W) {
                    r.push(t, C, c);
                    K.splice((x + 1) % J, 1);
                    J--;
                    x = 0
                } else if (x++ > 3 * J)
                    break
            }
            r.push(K[0], K[1], K[2]);
            return r
        };
        return V
    }();
    w.H.a2v = function(Y, R) {
        var V = {}
          , E = {
            R: [],
            P: []
        };
        for (var x = 0; x < R.length; x += 3) {
            var r = R[x] * 2
              , K = R[x + 1] * 2
              , J = R[x + 2] * 2;
            w.H.f8(Y, r, K, E, V);
            w.H.f8(Y, r, J, E, V);
            w.H.f8(Y, K, J, E, V)
        }
        return E
    }
    ;
    w.H.f8 = function(Y, R, V, E, r) {
        if (R > V) {
            var K = V;
            V = R;
            R = K
        }
        if (r[R + "," + V])
            return;
        r[R + "," + V] = !0;
        E.R.push("M", "L");
        E.P.push(Y[R], Y[R + 1], Y[V], Y[V + 1])
    }
    ;
    w.H.kL = function(Y, R) {
        var V = []
          , E = Y.length;
        for (var x = 0; x < E; x += 2) {
            var r = Y[x]
              , K = Y[x + 1]
              , J = Y[(x + 2) % E]
              , t = Y[(x + 3) % E];
            if (t < K) {
                var C = K;
                K = t;
                t = C
            }
            if (K < R && R < t) {
                var c = (R - K) / (t - K);
                V.push(r + c * (J - r))
            }
        }
        V.sort(function(M, a) {
            return M - a
        });
        return V
    }
    ;
    w.H.amy = function(Y, R) {
        var V = R.slice(0)
          , z = Y.length / 2
          , E = []
          , r = [];
        for (var x = 0; x < z; x++) {
            var K = (x + 1) % z
              , J = Y[2 * x] - Y[2 * K]
              , t = Y[2 * x + 1] - Y[2 * K + 1];
            r[x] = Math.sqrt(J * J + t * t)
        }
        for (var x = 0; x < z; x++) {
            var C = (x - 1 + z) % z
              , K = (x + 1) % z
              , c = R[x]
              , M = c + R[C]
              , a = c + R[K];
            if (M != 0)
                V[x] = Math.min(V[x], r[C] * c / M);
            if (a != 0)
                V[x] = Math.min(V[x], r[x] * c / a)
        }
        for (var x = 0; x < z; x++) {
            var K = (x + 1) % z
              , Q = (x + 2) % z
              , A = V[x]
              , p = V[K]
              , v = Y[2 * x]
              , W = Y[2 * x + 1]
              , n = Y[2 * K]
              , $ = Y[2 * K + 1]
              , G = Y[2 * Q]
              , o = Y[2 * Q + 1]
              , B = r[x]
              , L = r[K]
              , u = w.H.a8j(v, W, n, $, G, o, A, p, B, L);
            E.push(u[0], u[1], u[0], u[1], u[2], u[3]);
            E.push(u[2], u[3], u[4], u[5], u[6], u[7])
        }
        return E
    }
    ;
    w.H.a8j = function(Y, R, V, E, r, K, J, t, C, c) {
        if (C == null)
            C = Math.sqrt((V - Y) * (V - Y) + (E - R) * (E - R));
        if (c == null)
            c = Math.sqrt((r - V) * (r - V) + (K - E) * (K - E));
        var M = .553
          , a = 0
          , Q = 0
          , A = 0
          , p = 0;
        if (C != 0) {
            a = (V - Y) / C;
            Q = (E - R) / C
        }
        if (c != 0) {
            A = (r - V) / c;
            p = (K - E) / c
        }
        var v = Y + J * a
          , W = R + J * Q
          , n = V - t * a
          , $ = E - t * Q;
        return [v, W, n, $, V - t * a * (1 - M), E - t * Q * (1 - M), V + t * A * (1 - M), E + t * p * (1 - M), V + t * A, E + t * p]
    }
    ;
    w.H.vr = function(Y, R, V, E, r, K, J) {
        var t = Y - V
          , C = R - E
          , c = r - V
          , M = K - E
          , a = 1 / Math.sqrt(t * t + C * C)
          , Q = 1 / Math.sqrt(c * c + M * M)
          , A = t * a
          , p = C * a
          , v = c * Q
          , W = M * Q
          , n = p * J
          , $ = -A * J
          , G = -W * J
          , o = v * J
          , B = w.H.Oq(n, $, A, p, G, o, v, W)
          , L = n + A * B
          , u = $ + p * B
          , B = w.H.Oq(0, 0, A, p, L, u, -p, A)
          , y = A * B
          , S = p * B;
        return [Math.sqrt(y * y + S * S), A, p, v, W]
    }
    ;
    w.H.Ar = function(Y, R, V, E, r, K, J) {
        var t = w.H.vr(Y, R, V, E, r, K, J)
          , C = t[0]
          , c = t[1]
          , M = t[2]
          , a = t[3]
          , Q = t[4]
          , A = Math.atan2(c * Q - M * a, c * a + M * Q);
        if (A < 0) {
            A = A * -1
        }
        var p = Math.PI - A
          , v = 4 / 3 * Math.tan(p / 4)
          , W = V + C * c
          , n = E + C * M
          , $ = V + C * a
          , G = E + C * Q
          , o = W + v * J * -c
          , B = n + v * J * -M
          , L = $ + v * J * -a
          , u = G + v * J * -Q;
        return [0, 0, W, n, o, B, L, u, $, G]
    }
    ;
    w.H.Oq = function(Y, R, V, E, r, K, J, t) {
        var C = J * (R - K) - t * (Y - r)
          , c = t * V - J * E;
        if (c == 0)
            return 0;
        return C / c
    }
    ;
    w.H.Ar(0, 50, 0, 0, 30, 30, 10);
    w.wV = function() {}
    ;
    w.wV.ug = function(Y, R, V, E, r) {
        var K = V.d
          , J = V.b
          , t = K * J
          , C = new Int32Array(t)
          , z = 0;
        for (var x = 0; x < t; x++)
            if (R[x] != 0) {
                C[x] = z;
                z++
            } else if (Y[(x << 2) + 3] < 200) {
                C[x] = -2
            } else
                C[x] = -1;
        if (z == 0)
            return;
        var c = new w.fM(z,z)
          , M = new Array(3 * z)
          , a = new Array(3 * z);
        for (var x = 0; x < a.length; x++)
            a[x] = M[x] = 0;
        var Q = 1 / 255
          , A = [-K, -1, 1, K]
          , p = []
          , v = [];
        for (var W = 0; W < J; W++)
            for (var n = 0; n < K; n++) {
                var $ = W * K + n
                  , G = $ << 2
                  , x = C[$]
                  , o = x * 3
                  , B = 0
                  , L = 0
                  , u = 0;
                if (x == -1 || x == -2)
                    continue;
                for (var y = 0; y < 4; y++) {
                    if (y == 2) {
                        L = u;
                        p[u] = 0;
                        v[u] = x;
                        u++
                    }
                    var S = $ + A[y]
                      , X = S << 2
                      , N = C[S];
                    if (y == 0 && W == 0 || y == 1 && n == 0 || y == 2 && n == K - 1 || y == 3 && W == J - 1 || N == -2)
                        continue;
                    B++;
                    if (N == -1) {
                        M[o + 0] += Y[X + 0];
                        M[o + 1] += Y[X + 1];
                        M[o + 2] += Y[X + 2]
                    } else {
                        p[u] = -1;
                        v[u] = N;
                        u++;
                        if (R[$] == R[S]) {
                            M[o + 0] += Y[G + 0] - Y[X + 0];
                            M[o + 1] += Y[G + 1] - Y[X + 1];
                            M[o + 2] += Y[G + 2] - Y[X + 2]
                        }
                    }
                }
                p[L] = B;
                c.mr(p, v, u)
            }
        for (var x = 0; x < t; x++)
            if (C[x] != -1) {
                var k = x << 2
                  , d = C[x]
                  , P = d * 3;
                a[P] = Y[k + 0];
                a[P + 1] = Y[k + 1];
                a[P + 2] = Y[k + 2]
            }
        var Z = Date.now();
        c.a98(a, M, E, r);
        console.log(Date.now() - Z);
        for (var x = 0; x < t; x++) {
            var d = C[x]
              , s = d * 3
              , k = x << 2;
            if (d == -1 || Y[k + 3] != 255)
                continue;
            Y[k + 0] = ~~(.5 + Math.max(0, Math.min(255, a[s + 0])));
            Y[k + 1] = ~~(.5 + Math.max(0, Math.min(255, a[s + 1])));
            Y[k + 2] = ~~(.5 + Math.max(0, Math.min(255, a[s + 2])))
        }
    }
    ;
    w.rect = {};
    w.rect.fN = function(Y, R) {
        var V = [Y]
          , E = [];
        for (var x = 0; x < R.length; x++) {
            var r = R[x]
              , K = !1;
            for (var J = x + 1; J < R.length; J++) {
                var t = R[J];
                if (t[0] <= r[0] && t[1] <= r[1] && r[2] <= t[2] && r[3] <= t[3]) {
                    K = !0;
                    break
                }
            }
            if (!K)
                E.push(r)
        }
        R = E;
        for (var x = 0; x < R.length; x++) {
            var r = R[x];
            for (var J = 0; J < V.length; J++) {
                var t = V[J]
                  , C = Math.max(r[0], t[0])
                  , c = Math.min(r[2], t[2])
                  , M = Math.max(r[1], t[1])
                  , a = Math.min(r[3], t[3]);
                if (C < c && M < a) {
                    var Q = [];
                    if (t[1] < r[1]) {
                        var A = t.slice(0);
                        A[3] = r[1];
                        Q.push(A)
                    }
                    if (t[0] < r[0]) {
                        var p = t.slice(0);
                        p[1] = M;
                        p[2] = r[0];
                        Q.push(p)
                    }
                    if (r[2] < t[2]) {
                        var v = t.slice(0);
                        v[1] = M;
                        v[0] = r[2];
                        Q.push(v)
                    }
                    if (r[3] < t[3]) {
                        var W = [C, a, c, t[3]];
                        Q.push(W)
                    }
                    if (Q.length != 0) {
                        V[J] = Q[0];
                        for (var n = 1; n < Q.length; n++)
                            V.push(Q[n])
                    }
                }
            }
            V.push(r);
            V = w.rect.akw(V)
        }
        V.sort(function(r, t) {
            return r[1] != t[1] ? r[1] - t[1] : r[0] - t[0]
        });
        return V
    }
    ;
    w.rect.akw = function(Y) {
        Y = Y.slice(0);
        for (var x = 0; x < Y.length; x++) {
            var R = Y[x]
              , V = null;
            if (R[4] != null)
                continue;
            for (var E = 0; E < Y.length; E++) {
                var r = Y[E];
                if (x == E || r[4] != null)
                    continue;
                var K = R[0] == r[0]
                  , J = R[1] == r[1]
                  , t = R[2] == r[2]
                  , C = R[3] == r[3];
                if (J && C && (R[2] == r[0] || R[0] == r[2])) {
                    V = [Math.min(R[0], r[0]), R[1], Math.max(R[2], r[2]), R[3]]
                }
                if (K && t && (R[3] == r[1] || R[1] == r[3])) {
                    V = [R[0], Math.min(R[1], r[1]), R[2], Math.max(R[3], r[3])]
                }
                if (V) {
                    Y[x] = V;
                    Y.splice(E, 1);
                    break
                }
            }
            if (V) {
                x--
            }
        }
        return Y
    }
    ;
    w.rect.ip = function(Y) {
        var R = new gE;
        for (var x = 0; x < Y.length; x++)
            R = R.ov(Y[x]);
        return R
    }
    ;
    w.rect.aaJ = function(Y, R) {
        var V = w.rect.ip
          , E = new UnionFind(Y.length)
          , L = 1e3
          , u = 1e3;
        for (var x = 0; x < Y.length; x++)
            for (var r = x + 1; r < Y.length; r++) {
                if (!R)
                    continue;
                var K = Y[x]
                  , J = Y[r]
                  , a = 1e9
                  , Q = 1e9;
                if (K.Wo(J)) {
                    E.link(x, r);
                    continue
                }
                var t = K.x + K.d
                  , C = K.y + K.b
                  , c = J.x + J.d
                  , M = J.y + J.b;
                if ((t < J.x || c < K.x) && (C < J.y || M < K.y))
                    continue;
                if (!(C < J.y || M < K.y))
                    a = Math.min(Math.abs(t - J.x), Math.abs(K.x - c));
                if (!(t < J.x || c < K.x))
                    Q = Math.min(Math.abs(C - J.y), Math.abs(K.y - M));
                var A = Math.min(a, Q)
                  , p = Math.min(K.d, K.b, J.d, J.b);
                if (A < .3 * p)
                    E.link(x, r)
            }
        var v = []
          , W = {};
        for (var x = 0; x < Y.length; x++) {
            var n = E.find(x)
              , $ = Y[x];
            if (W[n] == null) {
                W[n] = v.length;
                v.push([])
            }
            v[W[n]].push($)
        }
        var G = []
          , o = [];
        for (var x = 0; x < v.length; x++) {
            G.push(V(v[x]));
            var B = V(v[x]);
            B.bL = x;
            o.push(B)
        }
        o.sort(function(_, b) {
            return Math.max(b.b, b.d) - Math.max(_.b, _.d)
        });
        var y = new NETXUS.RectanglePacker(L,u);
        while (!0) {
            var S = !1;
            y.reset(L, u);
            for (var x = 0; x < o.length; x++) {
                var X = y.findCoords(o[x].d, o[x].b);
                if (X) {
                    o[x].x = X.x;
                    o[x].y = X.y
                } else {
                    L = Math.floor(L * 1.1);
                    u = Math.floor(u * 1.1);
                    S = !0;
                    break
                }
            }
            if (S)
                continue;
            break
        }
        for (var x = 0; x < v.length; x++) {
            var N = o[x]
              , k = N.bL
              , d = G[k]
              , P = v[k]
              , Z = N.x - d.x
              , s = N.y - d.y;
            for (var r = 0; r < P.length; r++)
                P[r].offset(Z, s)
        }
    }
    ;
    w.DG = function() {}
    ;
    w.DG.N2 = Math.floor(16 * window.devicePixelRatio);
    w.DG.c9 = {};
    w.DG.k8 = 0;
    w.DG.YR = [[12, 76, 2], [12, 76, 3], [12, 76, 4], [12, 76, 5], [12, 76, 6]];
    w.DG.a2w = ["px", "in", "cm", "mm", "%"];
    w.DG.fg = function(Y, R, V) {
        var E = R.zX
          , r = [1, E, E / 2.54, E / 25.4, R.d / 100][V];
        return Y * r
    }
    ;
    w.DG.qF = function(Y, R, V, E, r) {
        var K = V.YX.xa
          , J = [1, R, R / 2.54, R / 25.4, E / 100][K]
          , t = [2, 3, 2, 1, 2][K];
        Y = Y / J;
        var C = Math.round(Y)
          , c = K == 0 && Math.abs(Y - C) < 1e-6 ? C + "" : Y.toFixed(t);
        if (r)
            c += " " + w.DG.a2w[K];
        return c
    }
    ;
    w.DG.a4w = function(Y, R, V, E) {
        var r = V.YX.xa
          , K = [1, R, R / 2.54, R / 25.4, E / 100][r];
        Y = parseFloat(Y) * K;
        return Y
    }
    ;
    w.DG.a84 = function(Y, R) {
        var V = Y + "," + R;
        if (w.DG.c9.clr == V)
            return;
        var E = Math.round(w.DG.N2 * .5);
        w.DG.k8 = E;
        var r = document.createElement("canvas");
        r.width = r.height = E;
        var K = r.getContext("2d");
        K.font = E * 1.5 + "px monospace";
        var J = "0 1 2 3 4 5 6 7 8 9 -".split(" ");
        for (var x = 0; x < J.length; x++) {
            K.fillStyle = "#" + w.gc(R);
            K.fillRect(0, 0, E, E);
            K.fillStyle = "#" + w.gc(Y);
            K.fillText(J[x], 0, E);
            w.DG.c9[J[x]] = K.getImageData(0, 0, E, E).data
        }
        w.DG.c9.clr = V
    }
    ;
    // w.DG.ac7 = function(Y, R, V) {
    //     var E = 0
    //       , r = 0
    //       , K = 4 * w.DG.N2;
    //     for (var x = 9; x >= 0; x--) {
    //         var J = Math.pow(10, x);
    //         if (5 * J * Y <= K) {
    //             E = 5 * J;
    //             r = 10;
    //             break
    //         }
    //         if (2 * J * Y <= K) {
    //             E = 2 * J;
    //             r = 4;
    //             break
    //         }
    //         if (1 * J * Y <= K) {
    //             E = 1 * J;
    //             r = 10;
    //             break
    //         }
    //     }
    //     if (E == 0) {
    //         E = 1;
    //         r = 10
    //     }
    //     var t = Math.ceil(E * Y)
    //       , C = w.T(t * w.DG.N2 * 4);
    //     w.h3(C, 4278190080 | V);
    //     for (var x = 0; x < w.DG.N2; x++)
    //         w.DG.z3(C, 4 * x * t, R);
    //     for (var x = 0; x < t; x++)
    //         w.DG.z3(C, 4 * ((w.DG.N2 - 1) * t + x), R);
    //     if (E == 2)
    //         r = 2;
    //     if (E == 5)
    //         r = 5;
    //     if (E > 1 || E == 1 && t > 20)
    //         for (var x = 1; x < r; x++)
    //             w.DG.ama(C, x * (t / r), t, (x & 1) == 1 ? .8 : .7, R);
    //     return {
    //         XY: C,
    //         step: E
    //     }
    // }
    // ;
    // w.DG.ama = function(Y, R, V, E, r) {
    //     var R = Math.round(R);
    //     for (var K = Math.round(w.DG.N2 * E); K < w.DG.N2 - 1; K++)
    //         w.DG.z3(Y, 4 * (K * V + R), r)
    // }
    // ;
    // w.DG.z3 = function(Y, R, V) {
    //     Y[R + 0] = V >> 16 & 255;
    //     Y[R + 1] = V >> 8 & 255;
    //     Y[R + 2] = V & 255
    // }
    // ;
    // w.DG.alG = function(Y, R, V) {
    //     var E = R & 255, r = R >> 8 & 255, K = R >> 16 & 255, n, $, G, o;
    //     R = Math.round(E * .6) << 16 | Math.round(r * .6) << 8 | Math.round(K * .6);
    //     w.DG.a84(Math.round(E * .8) << 16 | Math.round(r * .8) << 8 | Math.round(K * .8), V);
    //     var J = this.ac7(Y.k, R, V)
    //       , t = Y.Cf(0, 0)
    //       , C = Y.Cf(Y.GS.d, Y.GS.b)
    //       , c = Math.floor(t.x / J.step) * J.step
    //       , M = Math.ceil(C.x / J.step) * J.step
    //       , a = Math.floor(t.y / J.step) * J.step
    //       , Q = Math.ceil(C.y / J.step) * J.step
    //       , A = Y.nS(c, a)
    //       , p = Y.nS(M, a)
    //       , v = J.step * Y.k
    //       , W = Math.ceil(v);
    //     n = Y.oS.data;
    //     $ = new gE(0,0,Y.GS.d,w.DG.N2);
    //     G = new gE(0,0,W,w.DG.N2);
    //     o = new gE(0,Math.round(w.DG.N2 * .08),w.DG.k8,w.DG.k8);
    //     for (var x = 0; x < (M - c) / J.step; x++) {
    //         G.x = Math.round(A.x + x * v);
    //         w.Vj(J.XY, G, n, $, G);
    //         var B = (c + x * J.step).toString(10);
    //         for (var L = 0; L < B.length; L++) {
    //             o.x = G.x + 3 + L * Math.round(w.DG.k8 * .8);
    //             var u = w.DG.c9[B[L]];
    //             w.Vj(u, o, n, $, o)
    //         }
    //     }
    //     var y = new Uint32Array(J.XY.buffer)
    //       , S = new Uint32Array(J.XY.length);
    //     for (var X = 0; X < W; X++)
    //         for (var N = 0; N < w.DG.N2; N++) {
    //             S[X * w.DG.N2 + N] = y[N * W + X]
    //         }
    //     J.XY = new Uint8Array(S.buffer);
    //     n = Y.MR.data;
    //     $ = new gE(0,0,w.DG.N2,Y.GS.b);
    //     G = new gE(0,0,w.DG.N2,W);
    //     o = new gE(Math.round(w.DG.N2 * .2),0,w.DG.k8,w.DG.k8);
    //     for (var x = 0; x < (Q - a) / J.step; x++) {
    //         G.y = Math.round(A.y + x * v);
    //         w.Vj(J.XY, G, n, $, G);
    //         var B = Math.abs(a + x * J.step).toString(10);
    //         for (var L = 0; L < B.length; L++) {
    //             o.y = G.y + 3 + L * Math.round(w.DG.k8 * 1.15);
    //             var u = w.DG.c9[B[L]];
    //             w.Vj(u, o, n, $, o)
    //         }
    //     }
    // }
    // ;
    w.scale = {};
    w.scale.hO = document.createElement("canvas");
    w.scale.jm = w.scale.hO.getContext("2d");
    w.scale.abC = document.createElement("canvas");
    w.scale.a3b = w.scale.abC.getContext("2d");
    w.scale.bP = function(Y, R, V) {
        var E = w.scale.hO
          , r = w.scale.jm;
        E.width = R;
        E.height = V;
        var K = new ImageData(new Uint8ClampedArray(Y.buffer),R,V);
        r.putImageData(K, 0, 0);
        return r.createPattern(E, "repeat")
    }
    ;
    w.scale.acO = function(Y, R, V, E, r, K, J, t) {
        var C = w.scale.uF(Y, V, E, r, K, J, t);
        w.jW(C.data, R)
    }
    ;
    w.scale.a4_ = function(Y, R, V, E, r, K, J, t) {
        var C = w.scale.uF(Y, V, E, r, K, J, t);
        w.Jc(C.data, R)
    }
    ;
    w.scale.uF = function(Y, R, V, E, r, K, J) {
        var t = w.scale.hO
          , C = w.scale.jm;
        t.width = R;
        t.height = V;
        C.rect(0, 0, R, V);
        C.translate(K, J);
        C.scale(E, r);
        C.fillStyle = Y;
        C.fill();
        return C.getImageData(0, 0, R, V)
    }
    ;
    w.scale.g = function(Y, R, V, E, r) {
        var K = V.clone();
        K.tb();
        var J = r.d
          , t = r.b
          , C = w.H.se(R).P;
        w.H.g(C, K, C);
        var c = w.H.LB(C).Cy(r)
          , M = c.x
          , a = c.y
          , Q = M + c.d
          , A = a + c.b
          , p = ~~R.x
          , v = ~~R.y
          , W = ~~R.d
          , n = ~~R.b;
        for (var $ = a; $ < A; $++)
            for (var G = M; G < Q; G++) {
                var o = G + .5
                  , B = $ + .5
                  , L = V.o * o + V.w8 * B + V.Wr - p
                  , u = V.O * o + V.Xa * B + V.W8 - v;
                if (0 <= L && 0 <= u && L < W && u < n)
                    E[$ * J + G] = Y[~~u * W + ~~L]
            }
    }
    ;
    w.scale.abn = function(Y, R, V, E, r) {
        var K = new Uint32Array(Y.buffer)
          , J = new Uint32Array(E.buffer)
          , t = V.clone();
        t.tb();
        var C = r.d
          , c = r.b
          , M = w.H.se(R).P;
        w.H.g(M, t, M);
        var a = w.H.LB(M).Cy(r)
          , Q = a.x
          , A = a.y
          , p = Q + a.d
          , v = A + a.b
          , W = ~~R.x
          , n = ~~R.y
          , $ = ~~R.d
          , G = ~~R.b;
        for (var o = A; o < v; o++)
            for (var B = Q; B < p; B++) {
                var L = B + .5
                  , u = o + .5
                  , y = V.o * L + V.w8 * u + V.Wr - W
                  , S = V.O * L + V.Xa * u + V.W8 - n;
                if (0 <= y && 0 <= S && y < $ && S < G)
                    J[o * C + B] = K[~~S * $ + ~~y]
            }
    }
    ;
    w.scale.co = function(Y, R, V, E, r, K, J) {
        if (J < 1)
            w.scale.ahn(Y, R, V, E, r, K, Math.round(1 / J));
        else
            w.scale.a5X(Y, R, V, E, r, K, J)
    }
    ;
    w.scale.FQ = function(Y, R, V, E, r, K, J, t) {
        if (t)
            t = t.Cy(new gE(0,0,R,V));
        Y = new Uint32Array(Y.buffer);
        E = new Uint32Array(E.buffer);
        if (J < 1)
            w.scale.a9D(Y, R, V, E, r, K, Math.round(1 / J), t);
        else
            w.scale.adh(Y, R, V, E, r, K, J)
    }
    ;
    w.scale.a5X = function(Y, R, V, E, r, K, J) {
        for (var t = 0; t < V; t++)
            for (var C = 0; C < R; C++) {
                var c = Y[t * R + C]
                  , M = Math.min(J, r - C * J)
                  , a = Math.min(J, K - t * J);
                for (var x = 0; x < a; x++)
                    for (var Q = 0; Q < M; Q++)
                        E[(J * t + x) * r + J * C + Q] = c
            }
    }
    ;
    w.scale.ahn = function(Y, R, V, E, r, K, J) {
        for (var t = 0; t < K; t++)
            for (var C = 0; C < r; C++) {
                var c = 0
                  , M = Math.min(J, R - C * J)
                  , a = Math.min(J, V - t * J);
                for (var x = 0; x < a; x++)
                    for (var Q = 0; Q < M; Q++)
                        c += Y[(J * t + x) * R + (J * C + Q)];
                E[t * r + C] = Math.round(c / (M * a))
            }
    }
    ;
    w.scale.adh = function(Y, R, V, E, r, K, J) {
        for (var t = 0; t < V; t++)
            for (var C = 0; C < R; C++) {
                var c = Y[t * R + C]
                  , M = Math.min(J, r - C * J)
                  , a = Math.min(J, K - t * J);
                for (var x = 0; x < a; x++)
                    for (var Q = 0; Q < M; Q++)
                        E[(J * t + x) * r + J * C + Q] = c
            }
    }
    ;
    w.scale.a9D = function(Y, R, V, E, r, K, J, t) {
        var C = 0
          , c = r
          , M = 0
          , a = K;
        if (t) {
            C = Math.floor(t.x / J);
            c = Math.ceil((t.x + t.d) / J);
            M = Math.floor(t.y / J);
            a = Math.ceil((t.y + t.b) / J)
        }
        for (var Q = M; Q < a; Q++)
            for (var A = C; A < c; A++) {
                var p = 0
                  , v = 0
                  , W = 0
                  , n = 0
                  , $ = Math.min(J, R - A * J)
                  , G = Math.min(J, V - Q * J);
                for (var x = 0; x < G; x++)
                    for (var o = 0; o < $; o++) {
                        var B = Y[(J * Q + x) * R + J * A + o]
                          , L = B >>> 24;
                        p += L;
                        v += L * (B >>> 16 & 255);
                        W += L * (B >>> 8 & 255);
                        n += L * (B & 255)
                    }
                if (p != 0) {
                    var u = 1 / p;
                    E[Q * r + A] = p / ($ * G) << 24 | v * u << 16 | W * u << 8 | n * u
                } else
                    E[Q * r + A] = 0
            }
    }
    ;
    
    // w.style = {};
    // w.style.stroke = function(Y, R, V, E) {
    //     var r = V.d
    //       , K = V.b
    //       , J = new Float64Array(r * K);
    //     w.style.yN(Y, J, r, K);
    //     w.style.rG(R, V, J, V, E)
    // }
    // ;
    // w.style.rG = function(Y, R, V, E, r) {
    //     var K = R.Cy(E)
    //       , J = K.d
    //       , t = K.b;
    //     r += .5;
    //     var C = K.x - R.x
    //       , c = K.y - R.y
    //       , M = R.d
    //       , a = K.x - E.x
    //       , Q = K.y - E.y
    //       , A = E.d;
    //     for (var p = 0; p < t; p++) {
    //         var v = (p + Q) * A + a
    //           , W = (p + c) * M + C;
    //         for (var n = 0; n < J; n++) {
    //             var $ = Math.max(0, Math.min(1, r - V[v + n]));
    //             Y[W + n] = Math.round($ * 255)
    //         }
    //     }
    // }
    // ;
    // w.style.aep = function(Y, R, V, E) {
    //     for (var r = 0; r < V; r++)
    //         for (var K = 0; K < R; K++) {
    //             var J = r * R + K
    //               , t = 0
    //               , C = 0
    //               , c = Y[J];
    //             if (K == 0 || r == 0) {
    //                 t = Y[J + 1] - c;
    //                 C = Y[J + R] - c
    //             } else if (K == V - 1 || r == R - 1) {
    //                 t = c - Y[J - 1];
    //                 C = c - Y[J - R]
    //             } else {
    //                 t = Y[J + 1] - Y[J - 1];
    //                 C = Y[J + R] - Y[J - R]
    //             }
    //             if (t != 0 || C != 0) {
    //                 var M = 1 / Math.sqrt(t * t + C * C);
    //                 t *= M;
    //                 C *= M
    //             }
    //             E[J + J] = t;
    //             E[J + J + 1] = C
    //         }
    // }
    // ;
    // w.style.yN = function(Y, R, V, E) {
    //     var r = 0
    //       , K = V * E;
    //     for (var x = 0; x < K; x++)
    //         r |= Y[x];
    //     if (r == 0) {
    //         R.fill(1e9);
    //         return
    //     }
    //     var J = w.style.CT(Y, V, E);
    //     for (var t = 0; t < E; t++)
    //         for (var C = 0; C < V; C++) {
    //             var x = t * V + C
    //               , c = J[x * 2]
    //               , M = J[x * 2 + 1]
    //               , a = (t + M) * V + C + c;
    //             if (c == 0 && M == 0) {
    //                 R[x] = 0;
    //                 continue
    //             }
    //             var Q = Math.sqrt(c * c + M * M)
    //               , A = Y[a] * (1 / 255)
    //               , p = 1 / Q
    //               , v = Math.abs(c) * p
    //               , W = Math.abs(M) * p;
    //             if (W > v) {
    //                 var n = W;
    //                 W = v;
    //                 v = n
    //             }
    //             R[x] = Q + w.style.a3k(v, W, A)
    //         }
    // }
    // ;
    // w.style.a3k = function(Y, R, V) {
    //     return (.5 - V) * Y
    // }
    // ;
    // w.style.CT = function(Y, R, V, E) {
    //     if (E == null) {
    //         E = !0;
    //         for (var x = 0; x < Y.length; x++)
    //             E = E && (Y[x] == 0 || Y[x] == 255)
    //     }
    //     var r = new Int16Array(R * V * 2);
    //     if (E)
    //         w.style.abR(Y, r, R, V);
    //     else
    //         w.style.a6s(Y, r, R, V);
    //     return r
    // }
    // ;
    // w.style.a6s = function(Y, R, V, E) {
    //     var r = V * E;
    //     for (var x = 0; x < r; x++)
    //         if (Y[x] == 0) {
    //             R[x * 2] = 16383;
    //             R[x * 2 + 1] = 16383
    //         }
    //     for (var K = 1; K <= E - 1; K++) {
    //         var x = K * V;
    //         for (var J = 0; J <= V - 1; J++)
    //             w.style.ME(R, Y, V, x + J << 1, -1);
    //         for (var J = 1; J <= V - 1; J++)
    //             w.style.qq(R, Y, V, x + J << 1, -1);
    //         for (var J = V - 2; J >= 0; J--)
    //             w.style.qq(R, Y, V, x + J << 1, 1)
    //     }
    //     for (var K = E - 2; K >= 0; K--) {
    //         var x = K * V;
    //         for (var J = 0; J <= V - 1; J++)
    //             w.style.ME(R, Y, V, x + J << 1, 1);
    //         for (var J = 1; J <= V - 1; J++)
    //             w.style.qq(R, Y, V, x + J << 1, -1);
    //         for (var J = V - 2; J >= 0; J--)
    //             w.style.qq(R, Y, V, x + J << 1, 1)
    //     }
    // }
    // ;
    // w.style.qq = function(Y, R, V, E, r) {
    //     var K = (E >>> 1) + r << 1
    //       , J = Y[E]
    //       , t = Y[E + 1]
    //       , C = Y[K] + r
    //       , c = Y[K + 1]
    //       , M = C * C + c * c
    //       , a = J * J + t * t;
    //     if (c != 16383 && (J == 16383 || Math.sqrt(M) + (.5 - R[(E >>> 1) + c * V + C] * (1 / 255)) < Math.sqrt(a) + (.5 - R[(E >>> 1) + t * V + J] * (1 / 255)))) {
    //         Y[E] = C;
    //         Y[E + 1] = c
    //     }
    // }
    // ;
    // w.style.ME = function(Y, R, V, E, r) {
    //     var K = (E >>> 1) + r * V << 1
    //       , J = Y[E]
    //       , t = Y[E + 1]
    //       , C = Y[K]
    //       , c = Y[K + 1] + r
    //       , M = C * C + c * c
    //       , a = J * J + t * t;
    //     if (C != 16383 && (J == 16383 || Math.sqrt(M) + (.5 - R[(E >>> 1) + c * V + C] * (1 / 255)) < Math.sqrt(a) + (.5 - R[(E >>> 1) + t * V + J] * (1 / 255)))) {
    //         Y[E] = C;
    //         Y[E + 1] = c
    //     }
    // }
    // ;
    // w.style.abR = function(Y, R, V, E) {
    //     var r = V * E;
    //     for (var x = 0; x < r; x++)
    //         if (Y[x] == 0) {
    //             R[x * 2] = 16383;
    //             R[x * 2 + 1] = 16383
    //         }
    //     for (var K = 1; K <= E - 1; K++) {
    //         var x = K * V;
    //         for (var J = 0; J <= V - 1; J++)
    //             w.style.BH(R, Y, V, x + J << 1, -1);
    //         for (var J = 1; J <= V - 1; J++)
    //             w.style.NG(R, Y, V, x + J << 1, -1);
    //         for (var J = V - 2; J >= 0; J--)
    //             w.style.NG(R, Y, V, x + J << 1, 1)
    //     }
    //     for (var K = E - 2; K >= 0; K--) {
    //         var x = K * V;
    //         for (var J = 0; J <= V - 1; J++)
    //             w.style.BH(R, Y, V, x + J << 1, 1);
    //         for (var J = 1; J <= V - 1; J++)
    //             w.style.NG(R, Y, V, x + J << 1, -1);
    //         for (var J = V - 2; J >= 0; J--)
    //             w.style.NG(R, Y, V, x + J << 1, 1)
    //     }
    // }
    // ;
    // w.style.NG = function(Y, R, V, E, r) {
    //     var K = (E >>> 1) + r << 1
    //       , J = Y[E]
    //       , t = Y[E + 1]
    //       , C = Y[K] + r
    //       , c = Y[K + 1]
    //       , M = C * C + c * c
    //       , a = J * J + t * t;
    //     if (c != 16383 && (J == 16383 || M < a)) {
    //         Y[E] = C;
    //         Y[E + 1] = c
    //     }
    // }
    // ;
    // w.style.BH = function(Y, R, V, E, r) {
    //     var K = (E >>> 1) + r * V << 1
    //       , J = Y[E]
    //       , t = Y[E + 1]
    //       , C = Y[K]
    //       , c = Y[K + 1] + r
    //       , M = C * C + c * c
    //       , a = J * J + t * t;
    //     if (C != 16383 && (J == 16383 || M < a)) {
    //         Y[E] = C;
    //         Y[E + 1] = c
    //     }
    // }
    // ;
    // w.style.agl = function(Y, R, V, E, r) {
    //     var K = V * E
    //       , J = (V + E + 1) * 1.01;
    //     for (var x = 0; x < K; x++)
    //         if (Y[x] <= r)
    //             R[x] = J;
    //     for (var t = 1; t < V; t++)
    //         R[t] = Math.min(R[t], R[t - 1]);
    //     for (var C = 1; C < E; C++) {
    //         var x = C * V;
    //         R[x] = Math.min(R[x], Math.min(R[x - V] + 1, R[x - V + 1] + Math.SQRT2));
    //         for (var t = 1; t < V - 1; t++) {
    //             var c = R[++x]
    //               , M = Math.min(R[x - 1] + 1, Math.min(R[x - V - 1] + Math.SQRT2, Math.min(R[x - V] + 1, R[x - V + 1] + Math.SQRT2)));
    //             if (M < c)
    //                 R[x] = M
    //         }
    //         x++;
    //         R[x] = Math.min(R[x], Math.min(R[x - 1] + 1, Math.min(R[x - V - 1] + Math.SQRT2, R[x - V] + 1)))
    //     }
    //     for (var t = V - 2; t >= 0; t--)
    //         R[t + K - V] = Math.min(R[t + K - V], R[t + K - V + 1]);
    //     for (var C = E - 2; C >= 0; C--) {
    //         var x = C * V + V - 1;
    //         R[x] = Math.min(R[x], Math.min(R[x + V] + 1, R[x + V - 1] + Math.SQRT2));
    //         for (var t = V - 2; t >= 1; t--) {
    //             var c = R[--x]
    //               , M = Math.min(R[x + 1] + 1, Math.min(R[x + V - 1] + Math.SQRT2, Math.min(R[x + V] + 1, R[x + V + 1] + Math.SQRT2)));
    //             if (M < c)
    //                 R[x] = M
    //         }
    //         x--;
    //         R[x] = Math.min(R[x], Math.min(R[x + 1] + 1, Math.min(R[x + V] + 1, R[x + V + 1] + Math.SQRT2)))
    //     }
    // }
    // ;
    // w.style.aj1 = function(Y, R, V, E, r) {
    //     var K = new Int32Array(V * E);
    //     w.style.a2c(Y, K, V, E, r);
    //     w.style.a3_(K, R, V, E)
    // }
    // ;
    // w.style.a2c = function(Y, R, V, E, r) {
    //     var K = new Int32Array(E);
    //     for (var J = 0; J < V; J++) {
    //         var t = V + E;
    //         for (var C = E - 1; C >= 0; C--) {
    //             if (Y[C * V + J] > r)
    //                 t = 0;
    //             else
    //                 t++;
    //             K[C] = t
    //         }
    //         t = V + E;
    //         for (var C = 0; C < E; C++) {
    //             if (Y[C * V + J] > r)
    //                 t = 0;
    //             else
    //                 t++;
    //             R[C * V + J] = t < K[C] ? -t : K[C]
    //         }
    //     }
    // }
    // ;
    // w.style.a3_ = function(Y, R, V, E) {
    //     var r = (V + E) * (V + E)
    //       , K = new Float64Array(V)
    //       , J = new Uint16Array(V);
    //     for (var t = 0; t < E; t++) {
    //         var C = t * V
    //           , c = 0;
    //         J[0] = 0;
    //         K[0] = -r;
    //         K[1] = +r;
    //         for (var M = 1; M < V; M++) {
    //             var a = Y[M + C] * Y[M + C] + M * M
    //               , Q = (a - (Y[J[c] + C] * Y[J[c] + C] + J[c] * J[c])) / (2 * M - 2 * J[c]);
    //             while (Q <= K[c]) {
    //                 c--;
    //                 Q = (a - (Y[J[c] + C] * Y[J[c] + C] + J[c] * J[c])) / (2 * M - 2 * J[c])
    //             }
    //             c++;
    //             J[c] = M;
    //             K[c] = Q;
    //             K[c + 1] = r
    //         }
    //         c = 0;
    //         for (var M = 0; M < V; M++) {
    //             while (K[c + 1] < M)
    //                 c++;
    //             var A = J[c] - M
    //               , p = Y[J[c] + C]
    //               , x = t * V + M << 1;
    //             R[x] = A;
    //             R[x + 1] = p
    //         }
    //     }
    // }
    // ;
    // w.style.tG = function(Y, R, V) {
    //     if (V)
    //         for (var x = 0; x < Y.length; x++) {
    //             var E = Y[x];
    //             if (E > 0)
    //                 Y[x] = Math.max(0, Math.min(255, E + R * 2 * (w.style.wy(x) - 128)))
    //         }
    //     else
    //         for (var x = 0; x < Y.length; x++) {
    //             var E = Y[x];
    //             if (E > 0)
    //                 Y[x] = Math.max(0, Math.min(255, E + Math.min(E * 3, R * 2 * (w.style.wy(x) - 128))))
    //         }
    // }
    // ;
    // w.style.wy = function(Y) {
    //     Y = Y ^ 61 ^ Y >> 16;
    //     Y = Y + (Y << 3);
    //     Y = Y ^ Y >> 4;
    //     Y = Y * 668265261;
    //     Y = Y ^ Y >> 15;
    //     return Y & 255
    // }
    // ;
    w.CF = {};
    w.CF.VY = function(Y, R, V) {
        var E = Y.canvas
          , r = O.M()
          , K = Math.floor;
        if (E.width != K(R * r) || E.height != K(V * r))
            O.ct(E, R, V, Y)
    }
    ;
    w.CF.Tg = function(Y, R, V, E, r, K) {
        w.CF.VY(Y, R, V);
        if (K == null)
            K = !1;
        var J = r.channel
          , t = r.rect
          , C = !r.isEnabled;
        R = Math.floor(R * O.M());
        V = Math.floor(V * O.M());
        if (R * V == 0)
            return;
        var c = Y.createImageData(R, V)
          , M = c.data
          , a = 1 / R
          , Q = 1 / V;
        for (var x = 0; x < V; x++)
            for (var A = 0; A < R; A++) {
                var p = x * R + A
                  , v = p * 4
                  , W = Math.round(E.x + A * a * E.d)
                  , n = Math.round(E.y + x * Q * E.b)
                  , $ = 0;
                if (W < t.x || W >= t.x + t.d || n < t.y || n >= t.y + t.b)
                    $ = r.color;
                else
                    $ = J[(n - t.y) * t.d + (W - t.x)];
                $ = 255 * (255 - r.pI) + $ * r.pI >>> 8;
                if (K)
                    $ = 170 + Math.round(.4 * ($ - 170));
                M[v] = $;
                M[v + 1] = $;
                M[v + 2] = $;
                M[v + 3] = 255
            }
        Y.putImageData(c, 0, 0);
        if (C)
            w.CF.qJ(Y, R, V)
    }
    ;
    w.CF.ajj = function(Y, R, V, E) {
        Y.fillStyle = "#eeeeee";
        Y.fillRect(.6 * R, .6 * V, R, V);
        Y.lineWidth = 1.5;
        var r = .65 * R
          , K = .95 * R
          , J = .65 * V
          , t = .95 * V
          , C = .75 * R
          , c = .85 * R
          , M = .75 * V
          , a = .85 * V;
        Y.beginPath();
        Y.moveTo(r, J);
        Y.lineTo(K, J);
        Y.lineTo(K, t);
        Y.lineTo(r, t);
        Y.lineTo(r, J);
        Y.moveTo(C, M);
        Y.lineTo(c, M);
        Y.lineTo(c, a);
        Y.lineTo(C, a);
        Y.lineTo(C, M);
        Y.closePath();
        Y.stroke()
    }
    ;
    w.CF.m5 = [];
    w.CF.aeY = function(Y, R, V) {
        var E, r, K, J = O.M();
        R = Math.floor(J * R);
        V = Math.floor(J * V);
        E = Math.ceil(Math.max(R, V) * .35);
        r = R - E;
        K = V - E;
        var t = w.CF.m5[E];
        if (t == null) {
            var C = O.w("canvas")
              , c = C.getContext("2d");
            C.width = C.height = E;
            c.fillStyle = "#eeeeee";
            c.fillRect(0, 0, E, E);
            c.lineWidth = 1;
            c.strokeRect(2.5, 2.5, E - 5, E - 5);
            var M = c.createImageData(3, 3);
            w.h3(M.data, 4278190080);
            M.data[4 * 4] = M.data[4 * 4 + 1] = M.data[4 * 4 + 2] = 238;
            c.putImageData(M, 1, 1);
            c.putImageData(M, E - 4, 1);
            c.putImageData(M, 1, E - 4);
            c.putImageData(M, E - 4, E - 4);
            t = w.CF.m5[E] = c.getImageData(0, 0, E, E)
        }
        Y.putImageData(t, r, K)
    }
    ;
    w.CF.a1d = function(Y, R, V, E, r) {
        w.CF.VY(Y, R, V);
        R = Math.floor(R * O.M());
        V = Math.floor(V * O.M());
        var K = R / E.d;
        if (R * V == 0)
            return;
        Y.fillStyle = "#999999";
        Y.setTransform(1, 0, 0, 1, 0, 0);
        Y.clearRect(0, 0, R, V);
        var J = w.CF.ot;
        if (J == null) {
            J = w.CF.ot = JSON.parse(JSON.stringify(g9.vs.default));
            J.strokeEnabled.v = !0
        }
        J.strokeStyleLineWidth.v.val = 1 * O.M() / K;
        Y.fillStyle = "#ffffff";
        Y.scale(K, K);
        w.Y.KA(r.N, Y, 0, 0);
        w.Y.KA(r.N, Y, 0, 0, J)
    }
    ;
    w.CF.za = null;
    w.CF.k0 = function(Y, R, V, E, r, K, J, t) {
        w.CF.VY(Y, R, V);
        R = Math.floor(R * O.M());
        V = Math.floor(V * O.M());
        if (R * V == 0)
            return;
        var C = Math.max(R, V)
          , c = w.CF.za;
        if (c == null || c.width < C || c.height < C) {
            w.CF.za = c = Y.createImageData(C, C)
        }
        C = c.width;
        var M = c.data
          , a = E.d / R
          , Q = E.b / V
          , A = 1 / 255
          , p = K.x
          , v = K.x + K.d
          , W = K.y
          , n = K.y + K.b;
        for (var x = 0; x < V; x++)
            for (var $ = 0; $ < R; $++) {
                var G = x * C + $
                  , o = G * 4
                  , B = ~~(E.x + $ * a)
                  , L = ~~(E.y + x * Q)
                  , u = w.uW(x, $, 2);
                if (B < p || B >= v || L < W || L >= n) {
                    M[o] = u;
                    M[o + 1] = u;
                    M[o + 2] = u;
                    M[o + 3] = 255
                } else {
                    var y = (L - K.y) * K.d + (B - K.x) << 2
                      , S = r[y + 3] * A;
                    M[o] = r[y + 0] * S + u * (1 - S);
                    M[o + 1] = r[y + 1] * S + u * (1 - S);
                    M[o + 2] = r[y + 2] * S + u * (1 - S);
                    M[o + 3] = 255
                }
            }
        if (t != null)
            for (var x = 0; x < M.length; x += 4)
                M[x] = M[x + 1] = M[x + 2] = M[x + t];
        Y.putImageData(c, 0, 0);
        if (J)
            w.CF.qJ(Y, R, V)
    }
    ;
    w.CF.a51 = function(Y, R, V, E) {
        w.CF.VY(Y, R, V);
        Y.fillStyle = w.CF.VJ(E.Clr.v);
        Y.fillRect(0, 0, R, V);
        w.CF.Q4(Y, R, V)
    }
    ;
    w.CF.aa = null;
    w.CF.aj_ = function(Y, R, V, E) {
        w.CF.VY(Y, R, V);
        var r = Y.canvas.width
          , K = Y.canvas.height
          , J = w.CF.aa;
        if (J == null || J.width != r || J.height != K) {
            Y.fillStyle = "#ffffff";
            Y.fillRect(0, 0, R, V);
            Y.fillStyle = "#000000";
            Y.font = "" + V * .7 + "px serif";
            Y.fillText("T", (R - V * .43) / 2, V * .75);
            Y.fillText("T", (R - V * .43) / 2, V * .75);
            w.CF.aa = Y.getImageData(0, 0, r, K)
        } else
            Y.putImageData(J, 0, 0)
    }
    ;
    w.CF.aeX = function(Y, R, V) {
        w.CF.VY(Y, R, V);
        Y.clearRect(0, 0, R, V);
        Y.font = V * .7 + "px serif";
        Y.fillText(":(", (R - V * .43) / 2, V * .7)
    }
    ;
    w.CF.a16 = function(Y, R, V, E) {
        w.CF.VY(Y, R, V);
        var r = f8.get(E)
          , K = em.get(f8.names[r]).substring(0, 3);
        Y.fillStyle = "#ffffff";
        Y.fillRect(0, 0, R, V);
        Y.fillStyle = "#000000";
        Y.font = V * .55 + "px sans-serif";
        var J = Y.measureText(K);
        Y.fillText(K, (R - J.width) / 2, V * .67);
        Y.fillRect(0, 0, R, V * .1);
        Y.fillRect(0, V * .9, R, V * .1)
    }
    ;
    w.CF.aim = function(Y, R, V, E) {
        w.CF.VY(Y, R, V);
        var r = Y.canvas.width
          , K = Y.canvas.height
          , J = Y.getImageData(0, 0, r, K);
        w.W.JB(E.Grad.v, new Uint8Array(J.data.buffer), new gE(0,0,r,K), [1 / r, 0, 0, 1 / K], r / 2, K / 2, !1, 0, 16711680, 65280);
        Y.putImageData(J, 0, 0);
        w.CF.Q4(Y, R, V)
    }
    ;
    w.CF.alz = function(Y, R, V, E, r) {
        w.CF.VY(Y, R, V);
        var K = Y
          , J = ft.$B(E.Ptrn.v, r.add.Patt);
        if (J == null)
            return;
        var t = J._7[1];
        w.CF.k0(Y, R, V, t, J._7[0], t, !1);
        w.CF.Q4(K, R, V)
    }
    ;
    w.CF.qJ = function(Y, R, V) {
        Y.strokeStyle = "#bb0000";
        Y.lineWidth = 3;
        Y.beginPath();
        Y.moveTo(R * .15, V * .15);
        Y.lineTo(R * .85, V * .85);
        Y.moveTo(R * .85, V * .15);
        Y.lineTo(R * .15, V * .85);
        Y.closePath();
        Y.stroke()
    }
    ;
    w.CF.qJ = function(Y, R, V) {
        Y.strokeStyle = "#bb0000";
        Y.lineWidth = 3;
        Y.beginPath();
        Y.moveTo(R * .15, V * .15);
        Y.lineTo(R * .85, V * .85);
        Y.moveTo(R * .85, V * .15);
        Y.lineTo(R * .15, V * .85);
        Y.closePath();
        Y.stroke()
    }
    ;
    w.CF.Q4 = function(Y, R, V) {
        Y.fillStyle = "#eeeeee";
        Y.fillRect(0, V * .75, R, V * .25);
        Y.beginPath();
        Y.moveTo(0, V * .75);
        Y.lineTo(R, V * .75);
        Y.moveTo(R * .1, V * .875);
        Y.lineTo(R * .9, V * .875);
        Y.moveTo(R * .65, V * .825);
        Y.lineTo(R * .65, V * .95);
        Y.closePath();
        Y.stroke()
    }
    ;
    w.CF.VJ = function(Y) {
        var R = w.W.VJ(Y)
          , V = Math.round(R.h) << 16 | Math.round(R.l) << 8 | Math.round(R.O);
        return "#" + w.gc(V)
    }
    ;
    w.Y = {};
    w.Y.ir = function(Y, R, V) {
        var E = []
          , r = -1;
        for (var x = 0; x < Y.length; x++) {
            var K = Y[x];
            if ((K.type == 0 || K.type == 3) && K.yV != -1)
                r++;
            if (K.type > 5 || K.type == 0 || K.type == 3)
                continue;
            if (R != null && R.indexOf(r) == -1)
                continue;
            if (V != null && V.indexOf(x) == -1)
                continue;
            E.push(K.wJ.x);
            E.push(K.wJ.y);
            E.push(K.Z.x);
            E.push(K.Z.y);
            E.push(K.Ii.x);
            E.push(K.Ii.y)
        }
        return E
    }
    ;
    w.Y.w0 = function(Y, R, V, E) {
        var r = 0
          , K = -1;
        for (var x = 0; x < R.length; x++) {
            var J = R[x];
            if ((J.type == 0 || J.type == 3) && J.yV != -1)
                K++;
            if (J.type > 5 || J.type == 0 || J.type == 3)
                continue;
            if (V != null && V.indexOf(K) == -1)
                continue;
            if (E != null && E.indexOf(x) == -1)
                continue;
            J.wJ.Fb(Y[r], Y[r + 1]);
            J.Z.Fb(Y[r + 2], Y[r + 3]);
            J.Ii.Fb(Y[r + 4], Y[r + 5]);
            r += 6
        }
    }
    ;
    w.Y.DS = function(Y, R, V, E) {
        var r = w.Y.ir(Y, V, E);
        w.H.g(r, R, r);
        w.Y.w0(r, Y, V, E)
    }
    ;
    w.Y.al5 = function(Y, R, V, E) {
        var r = w.Y.ir(Y, V, E);
        w.J.apply(R, r);
        w.Y.w0(r, Y, V, E)
    }
    ;
    w.Y.a8s = function(Y, R, V, E) {
        if (V == null && E == null) {
            var r = w.Y.aaz(Y, 40);
            for (var x = 0; x < r.length; x++)
                Y[x] = r[x]
        }
        var K = w.Y.ir(Y, V, E);
        w.iv.apply(R, K, w.H.Hh(K));
        w.Y.w0(K, Y, V, E)
    }
    ;
    w.Y.aaz = function(Y, R) {
        var V = [];
        for (var x = 0; x < Y.length; x++) {
            var E = Y[x];
            if (E.type > 5) {
                V.push(JSON.parse(JSON.stringify(E)));
                continue
            }
            var r = w.Y.a5H(Y, x + 1, E.length);
            r = w.H.Pg(r, R);
            var K = w.Y.a1N(r);
            x += E.length;
            E = JSON.parse(JSON.stringify(E));
            E.length = K.length;
            V.push(E);
            for (var J = 0; J < K.length; J++)
                V.push(K[J])
        }
        return V
    }
    ;
    w.Y.a5H = function(Y, R, V) {
        var E = {
            R: ["M"],
            P: []
        }
          , r = Y[R]
          , K = Y[R + V - 1];
        E.P.push(r.Z.x, r.Z.y);
        for (var x = 1; x < V; x++) {
            var J = Y[R + x - 1]
              , t = Y[R + x];
            E.R.push("C");
            E.P.push(J.Ii.x, J.Ii.y, t.wJ.x, t.wJ.y, t.Z.x, t.Z.y)
        }
        E.R.push("C");
        E.P.push(K.Ii.x, K.Ii.y, r.wJ.x, r.wJ.y, r.Z.x, r.Z.y);
        return E
    }
    ;
    w.Y.a1N = function(Y) {
        var R = []
          , V = Y.R
          , E = Y.P
          , r = 0
          , z = E.length;
        R.push({
            type: 2,
            wJ: new gv(E[z - 4],E[z - 3]),
            Z: new gv(E[0],E[1]),
            Ii: new gv(E[2],E[3])
        });
        for (var x = 0; x < V.length - 2; x++) {
            var K = x * 6 + 4;
            R.push({
                type: 2,
                wJ: new gv(E[K],E[K + 1]),
                Z: new gv(E[K + 2],E[K + 3]),
                Ii: new gv(E[K + 4],E[K + 5])
            })
        }
        return R
    }
    ;
    w.Y.aj3 = function(Y) {
        for (var x = 0; x < Y.length; x++) {
            if (Y[x].type > 5)
                continue;
            var R = Y[x].length;
            if (!(R == 4 || R == 6 || R == 8)) {
                x += R;
                continue
            }
            for (var V = 0; V < R; V++) {
                var E = Y[x + 1 + V]
                  , r = Y[x + 1 + (V + 1) % R]
                  , K = Math.min(E.Z.x, r.Z.x)
                  , J = Math.min(E.Z.y, r.Z.y)
                  , t = 0
                  , C = 0;
                if (E.Z.x < r.Z.x) {
                    t = E.Z.y - J;
                    C = t - (r.Z.x - K)
                } else {
                    t = r.Z.y - J;
                    C = t - (E.Z.x - K)
                }
                if (Math.abs(C) < .2 * t)
                    return t
            }
        }
        return -1
    }
    ;
    w.Y.OI = function(Y, R) {
        var V = null
          , E = -1
          , r = !w.Y.nn(Y);
        for (var x = 0; x < Y.length; x++) {
            var K = Y[x];
            if (K.type > 5)
                continue;
            if ((K.type == 0 || K.type == 3) && K.yV != -1)
                E++;
            if (R != null && R.indexOf(E) == -1)
                continue;
            if (x == Y.length - 1)
                break;
            var J = K.type == 3
              , t = K.length
              , C = K.yV
              , c = w.Y.ajz(Y, x + 1, t, J);
            if (V == null)
                V = c;
            else if (r) {
                if (R != null || C == 0 || C == -1 || C == 2)
                    V = V.ov(c);
                else if (C == 1)
                    V = V;
                else if (C == 3) {
                    V = c;
                    r = !1
                }
            } else {
                if (R != null || C == 0 || C == -1 || C == 1)
                    V = V.ov(c);
                else if (C == 2)
                    V = V;
                else if (C == 3)
                    V = V.Cy(c)
            }
            x += t
        }
        if (V == null || V.d < 0 || V.b < 0)
            V = new gE(0,0,0,0);
        return V
    }
    ;
    w.Y.aiy = new Float64Array(4);
    w.Y.ajz = function(Y, x, R, V) {
        var E = w.Y.aiy;
        E[0] = 1e30;
        E[1] = 1e30;
        E[2] = -1e30;
        E[3] = -1e30;
        var r = Y[x + R - 1];
        if (!V)
            w.Y.r6(r.Z.x, r.Z.y, r.Ii.x, r.Ii.y, Y[x].wJ.x, Y[x].wJ.y, Y[x].Z.x, Y[x].Z.y, E);
        for (var K = x; K < x + R - 1; K++) {
            var J = Y[K]
              , t = Y[K + 1];
            if (J.Z.yU(J.Ii) && t.wJ.yU(t.Z)) {
                E[0] = Math.min(E[0], Math.min(J.Z.x, t.Z.x));
                E[1] = Math.min(E[1], Math.min(J.Z.y, t.Z.y));
                E[2] = Math.max(E[2], Math.max(J.Z.x, t.Z.x));
                E[3] = Math.max(E[3], Math.max(J.Z.y, t.Z.y))
            } else
                w.Y.r6(J.Z.x, J.Z.y, J.Ii.x, J.Ii.y, t.wJ.x, t.wJ.y, t.Z.x, t.Z.y, E)
        }
        return new gE(E[0],E[1],E[2] - E[0],E[3] - E[1])
    }
    ;
    w.Y.r6 = function(Y, R, V, E, r, K, J, t, C) {
        var c = Y
          , M = R
          , a = Y
          , Q = R
          , A = 40
          , p = 1 / (A - 1);
        for (var v = 0; v < A; v++) {
            var W = v * p
              , n = 1 - W
              , $ = n * n * n
              , G = 3 * n * n * W
              , o = 3 * n * W * W
              , B = W * W * W
              , L = $ * Y + G * V + o * r + B * J
              , u = $ * R + G * E + o * K + B * t;
            if (L < c)
                c = L;
            else if (L > a)
                a = L;
            if (u < M)
                M = u;
            else if (u > Q)
                Q = u
        }
        if (c < C[0])
            C[0] = c;
        if (M < C[1])
            C[1] = M;
        if (a > C[2])
            C[2] = a;
        if (Q > C[3])
            C[3] = Q
    }
    ;
    w.Y.M9 = function(Y, R) {
        var V = Y.length - 3
          , E = R % V
          , r = Math.floor(E);
        if (R < 0 || r >= V)
            return null;
        var K = Y[3 + r]
          , J = Y[3 + (r + 1) % V]
          , t = K.Z
          , C = K.Ii
          , c = J.wJ
          , M = J.Z
          , a = E - r
          , Q = 1 - a
          , A = Q * Q * Q * t.x + 3 * Q * Q * a * C.x + 3 * Q * a * a * c.x + a * a * a * M.x
          , p = Q * Q * Q * t.y + 3 * Q * Q * a * C.y + 3 * Q * a * a * c.y + a * a * a * M.y;
        return new gv(A,p)
    }
    ;
    w.Y._Z = function(Y) {
        var R = 2
          , V = w.Y.VH(Y)
          , E = !1;
        for (var x = 2; x < Y.length; x++) {
            var r = Y[x].yV;
            if (r != null) {
                if (r == 2 || r == 0 || r == 3)
                    E = !0
            }
        }
        if (E && Y.length < 15e3 && V > 1)
            Y = w.Y.XQ(Y);
        var K = w.H.FY(Y);
        return {
            PM: Typr.U.pathToSVG({
                crds: K.P,
                cmds: K.R
            }, R),
            sa: E ? 1 : 0
        }
    }
    ;
    w.Y.XQ = function(Y) {
        w.Y.me();
        var R, V = w.Y.Bn(Y), E = [];
        for (var x = 0; x < V.length; x++) {
            var r = V[x][0]
              , K = V[x][1];
            if (Math.abs(r.area) < 1e-5)
                E.push(r);
            else if (R == null)
                R = r;
            else {
                R = R[K](r);
                R.remove()
            }
        }
        if (R == null)
            R = new paper.CompoundPath(E);
        else {
            if (R.segments)
                R = new paper.CompoundPath(R);
            for (var x = 0; x < E.length; x++) {
                R.addChild(E[x])
            }
        }
        var J = Y.slice(0, 2);
        J = J.concat(w.Y.ks(R));
        if (J[2])
            J[2].yV = 1;
        for (var x = 3; x < J.length; x++)
            if (J[x].yV != null)
                J[x].yV = -1;
        return J
    }
    ;
    w.Y.me = function() {
        if (w.Y.anB == null) {
            var Y = O.w("canvas");
            paper.setup(Y);
            w.Y.anB = !0
        }
    }
    ;
    w.Y.aee = function(Y, R) {
        w.Y.me();
        var V = []
          , E = w.Y.Bn(Y)
          , r = new paper.Path.Rectangle(new paper.Rectangle(R.x,R.y,R.d,R.b));
        r.remove();
        r.fillColor = new paper.Color(1,0,0);
        for (var x = 0; x < E.length; x++) {
            if (r.intersects(E[x][0]) || r.contains(E[x][0].children[0].segments[0].point))
                V.push(x)
        }
        return V
    }
    ;
    w.Y.ja = function(Y, R, V, E) {
        w.Y.me();
        var r = V ? {
            curves: !0,
            tolerance: E
        } : null
          , K = new paper.Point(R.x,R.y)
          , J = w.Y.Bn(Y);
        for (var x = J.length - 1; x >= 0; x--) {
            var t = J[x][0]
              , C = t.hitTest(K, r);
            if (C != null)
                return {
                    wt: x,
                    BE: V ? C.location.index : null
                }
        }
        return {
            wt: -1
        }
    }
    ;
    w.Y.a9 = function(Y, R) {
        var V = [[], [], []];
        for (var x = 0; x < Y.length; x++) {
            var E = Y[x];
            if (E.type > 5 || E.type == 0 || E.type == 3)
                continue;
            if (R.M_(E.Z))
                V[0].push(x);
            if (R.M_(E.wJ))
                V[1].push(x);
            if (R.M_(E.Ii))
                V[2].push(x)
        }
        return V
    }
    ;
    w.Y.a6T = function(Y, R, V) {
        var E = V.slice(0)
          , r = [null, null]
          , K = -1
          , t = null;
        for (var x = 2; x < Y.length; x++) {
            if ((Y[x].type == 0 || Y[x].type == 3) && Y[x].yV != -1)
                K++;
            r[x] = V[K]
        }
        V = r;
        var J = Y.slice(0, 2);
        r = V.slice(0, 2);
        for (var x = 2; x < Y.length; x++) {
            if (Y[x].type == 0 || Y[x].type == 3) {
                t = Y[x];
                J.push(t);
                r.push(V[x])
            } else {
                if (R.indexOf(x) == -1) {
                    J.push(Y[x]);
                    r.push(V[x])
                } else {
                    t.length--;
                    w.Wg.yF(V, x)
                }
            }
        }
        for (var x = 2; x < J.length; x++) {
            var C = J[x];
            if (C.type != 0 && C.type != 3)
                continue;
            if (C.length == 0) {
                if (J[x + 1] && J[x + 1].yV == -1) {
                    J[x + 1].yV = C.yV
                }
                r.splice(x, 1);
                J.splice(x, 1);
                x--
            }
        }
        for (var x = 0; x < E.length; x++)
            if (r.indexOf(E[x]) == -1) {
                E.splice(x, 1);
                x--
            }
        return J
    }
    ;
    w.Y.a0o = function(Y, R) {
        var V = Y.slice(0, 2)
          , E = -1;
        for (var x = 2; x < Y.length; x++) {
            if ((Y[x].type == 0 || Y[x].type == 3) && Y[x].yV != -1)
                E++;
            if (R.indexOf(E) == -1)
                V.push(Y[x])
        }
        return V
    }
    ;
    w.Y.aij = function(Y, R) {
        var V = Y.slice(0, 2)
          , E = -1;
        for (var x = 2; x < Y.length; x++) {
            if ((Y[x].type == 0 || Y[x].type == 3) && Y[x].yV != -1)
                E++;
            if (R.indexOf(E) != -1)
                V.push(Y[x])
        }
        return V
    }
    ;
    w.Y.ahB = function(Y) {
        var R = 0;
        for (var x = 0; x < Y.length; x++)
            if (Y[x].type == 0 || Y[x].type == 3)
                R = x;
        return Y[R]
    }
    ;
    w.Y.VH = function(Y) {
        var R = -1;
        for (var x = 0; x < Y.length; x++)
            if ((Y[x].type == 0 || Y[x].type == 3) && Y[x].yV != -1)
                R++;
        return R + 1
    }
    ;
    w.Y.En = function(Y, R, V) {
        var E = -1;
        for (var x = 0; x < Y.length; x++)
            if ((Y[x].type == 0 || Y[x].type == 3) && (V || Y[x].yV != -1)) {
                E++;
                if (E == R)
                    return x
            }
        return -1
    }
    ;
    w.Y.HJ = function(Y, R, V) {
        var E = -1;
        for (var x = 0; x < Y.length; x++)
            if ((Y[x].type == 0 || Y[x].type == 3) && (V || Y[x].yV != -1)) {
                if (x >= R)
                    return E;
                E++
            }
        return E
    }
    ;
    w.Y.Cs = function(Y, R) {
        var V = -1
          , E = 0;
        for (var x = 0; x < Y.length; x++) {
            if ((Y[x].type == 0 || Y[x].type == 3) && Y[x].yV != -1)
                V++;
            if (V == R)
                E++
        }
        return E
    }
    ;
    w.Y.afd = function(Y) {
        var R = 180;
        for (var x = 0; x < Y.length; x++) {
            if (Y[x].type != 0 && Y[x].type != 3)
                continue;
            var V = Y[x].length;
            if (V < 3)
                continue;
            for (var E = 0; E < V; E++) {
                var r = Y[x + 1 + (E - 1 + V) % V]
                  , K = Y[x + 1 + E]
                  , J = Y[x + 1 + (E + 1) % V]
                  , t = K.Z
                  , C = K.wJ.yU(t) ? r.Ii : K.wJ
                  , c = K.Ii.yU(t) ? J.wJ : K.Ii;
                if (t.yU(C) || t.yU(c))
                    continue;
                var M = C.x - t.x
                  , a = C.y - t.y
                  , Q = c.x - t.x
                  , A = c.y - t.y
                  , C = Math.atan2(C.y - t.y, C.x - t.x) * 180 / Math.PI
                  , c = Math.atan2(c.y - t.y, c.x - t.x) * 180 / Math.PI
                  , p = Math.abs(c - C) % 360
                  , v = p > 180 ? 360 - p : p;
                if (v < R)
                    R = v
            }
        }
        return R * Math.PI / 180
    }
    ;
    w.Y.ks = function(Y) {
        var R = Y.segments ? [Y] : Y.children
          , V = [];
        for (var x = 0; x < R.length; x++) {
            var E = R[x]
              , r = E.segments
              , K = E.closed ? 0 : 3
              , J = V.length
              , t = null;
            if (r.length <= 1)
                continue;
            V.push({
                type: K,
                length: r.length,
                yV: 0,
                sK: 2
            });
            for (var C = 0; C < r.length; C++) {
                var c = r[C]
                  , M = new gv(c.handleIn.x,c.handleIn.y)
                  , a = new gv(c.handleOut.x,c.handleOut.y)
                  , Q = new gv(c.point.x,c.point.y)
                  , A = {
                    type: K + 1,
                    wJ: Q.add(M),
                    Z: Q,
                    Ii: Q.add(a)
                };
                if (t == null)
                    t = A;
                V.push(A);
                if (C + 1 == r.length && gv.VN(t.Z, A.Z) < 1e-5) {
                    V.pop();
                    V[J].length--;
                    t.wJ = A.wJ;
                    if (K == 3)
                        for (var p = J; p < V.length; p++)
                            V[p].type -= 3
                }
            }
        }
        return V
    }
    ;
    w.Y.Bn = function(Y) {
        w.Y.me();
        var R = [], V, E = new paper.Color(1,0,0);
        function r(A, t) {
            A.remove();
            A.closed = !t;
            A.fillRule = "evenodd"
        }
        for (var x = 0; x < Y.length; x++) {
            if (Y[x].type > 5)
                continue;
            var K = Y[x].length, J;
            if (x == Y.length - 1)
                break;
            var t = Y[x].type == 3;
            if (x == 2) {
                if (!w.Y.fs(Y))
                    J = "subtract";
                else
                    J = "unite"
            } else {
                if (Y[x].yV == 0)
                    J = "exclude";
                if (Y[x].yV == 1)
                    J = "unite";
                if (Y[x].yV == 2)
                    J = "subtract";
                if (Y[x].yV == 3)
                    J = "intersect"
            }
            if (Y[x].yV != -1) {
                V = new paper.CompoundPath;
                R.push([V, J]);
                V.fillRule = "evenodd";
                V.fillColor = E
            }
            var C = [];
            for (var c = 0; c < K; c++) {
                var M = Y[x + 1 + c]
                  , a = M.wJ.O2(M.Z)
                  , Q = M.Ii.O2(M.Z);
                C.push([[M.Z.x, M.Z.y], [a.x, a.y], [Q.x, Q.y]])
            }
            var A = new paper.Path(C);
            r(A, t);
            V.addChild(A);
            x += K
        }
        return R
    }
    ;
    w.Y.XC = function(Y) {
        for (var x = 0; x < Y.length; x++) {
            var R = Y[x];
            if (R.Z == null)
                continue;
            if (!R.Z.yU(R.wJ) || !R.Z.yU(R.Ii))
                return !1
        }
        return !0
    }
    ;
    w.Y.a77 = function(Y) {
        if (Y.length <= 5)
            return 0;
        var R = 0
          , V = Y.length - 3 - 1;
        for (var x = 0; x < V; x++) {
            var E = Y[3 + x]
              , r = Y[3 + x + 1];
            if (E.type == 0 || r.type == 0)
                return 0;
            R += (r.Z.x - E.Z.x) * (E.Z.y + r.Z.y)
        }
        R += (Y[3].Z.x - Y[3 + V].Z.x) * (Y[3 + V].Z.y + Y[3 + 1].Z.y);
        return -R * .5
    }
    ;
    w.Y.nn = function(Y) {
        var R = Y[2]
          , V = !1;
        if (Y.length == 2)
            V = Y[1].all == 0;
        else if (Y[1].all == 1) {
            if (R.yV == 1 || R.yV == 3)
                V = !0;
            else
                V = !1
        } else {
            if (R.yV == 1 || R.yV == 3 || R.yV == 0)
                V = !0;
            else
                V = !1
        }
        return V
    }
    ;
    w.Y.fs = function(Y) {
        var R = w.Y.nn(Y);
        for (var x = 3; x < Y.length; x++)
            if (Y[x].yV == 3)
                R = !0;
        return R
    }
    ;
    w.Y.ae7 = 0;
    w.Y.LT = 0;
    w.Y.a9k = 0;
    w.Y.aa8 = function(Y, R, V, E) {
        if (V.uD())
            return;
        var r = V.X()
          , G = 16384;
        w.Y.ae7 += r;
        if (r > w.Y.LT) {
            w.Y.LT = r
        }
        var K = V.d
          , J = V.b;
        if (E == null && w.Y.XC(Y)) {
            var t = !0;
            for (var x = 2; x < Y.length; )
                if (Y[x].length == 2)
                    x += 3;
                else {
                    t = !1;
                    break
                }
            if (t) {
                return
            }
            if (w.Y.he(Y)) {
                R.fill(255);
                var C = w.Y.OI(Y);
                if (C.X() != r) {
                    var c = 1 - (C.x - V.x)
                      , M = 1 - (C.y - V.y)
                      , a = 1 - (V.x + V.d - (C.x + C.d))
                      , Q = 1 - (V.x + V.b - (C.x + C.b))
                      , A = ~~(c * 255)
                      , p = ~~(a * 255)
                      , v = ~~(M * 255)
                      , W = ~~(Q * 255);
                    R.fill(v, 0, K);
                    R[0] = ~~(c * M * 255);
                    R[K - 1] = ~~(a * M * 255);
                    for (var x = K; x < r; x += K) {
                        R[x] = A;
                        R[x + K - 1] = p
                    }
                    R.fill(W, (J - 1) * K, J * K);
                    R[r - K] = ~~(c * Q * 255);
                    R[r - 1] = ~~(a * Q * 255)
                }
                return
            }
        }
        var n = w.cP
          , $ = w.GS
          , o = Math.ceil(K / G)
          , B = Math.ceil(J / G)
          , L = Math.ceil(K / o)
          , u = Math.ceil(J / B)
          , y = Date.now();
        for (var S = 0; S < B; S++)
            for (var X = 0; X < o; X++) {
                var N = X * L
                  , k = S * u
                  , d = L
                  , P = u;
                n.width = d;
                n.height = P;
                if (!w.Y.nn(Y))
                    $.fillRect(0, 0, d, P);
                w.Y.KA(Y, $, -V.x - N, -V.y - k, E);
                var Z = new Uint8Array($.getImageData(0, 0, d, P).data.buffer);
                if (d == K && P == J)
                    w.vH(Z, R, 3);
                else
                    w.vo(Z, new gE(N,k,d,P), R, new gE(0,0,K,J))
            }
    }
    ;
    w.Y.KA = function(Y, R, V, E, r) {
        if (r != null && r.fillEnabled.v) {
            var K = !1
              , J = !1
              , t = 0;
            for (var x = 0; x < Y.length; x++) {
                var C = Y[x].yV;
                if (C != null)
                    t++;
                if (C == -1)
                    K = !0;
                if (C > 0)
                    J = !0
            }
            if (!K && t < 20)
                Y = w.Y.XQ(Y)
        }
        for (var x = 0; x < Y.length; x++) {
            if (Y[x].type > 5)
                continue;
            var c = Y[x].length;
            if (c == 0)
                continue;
            if (x == Y.length - 1)
                break;
            var M = Y[x].type == 3
              , C = Y[x].yV;
            if (C != -1 && r == null) {
                var a = ["xor", "source-over", "destination-out", "source-in"][C];
                R.globalCompositeOperation = a
            }
            if (Y[x].yV != -1) {
                R.beginPath();
                if (r) {
                    var Q = r.strokeStyleLineWidth.v.val
                      , A = r.strokeStyleLineAlignment.v.strokeStyleLineAlignment
                      , p = r.strokeStyleLineCapType.v.strokeStyleLineCapType
                      , v = r.strokeStyleLineJoinType.v.strokeStyleLineJoinType
                      , W = r.strokeStyleMiterLimit.v
                      , n = []
                      , $ = r.strokeStyleLineDashSet.v;
                    for (var G = 0; G < $.length; G++)
                        n.push($[G].v.val * Q);
                    R.setLineDash(n);
                    R.lineCap = ["butt", "round", "square"][g9.vs.Ag.indexOf(p)];
                    R.lineJoin = ["miter", "round", "bevel"][g9.vs.join.indexOf(v)];
                    R.lineWidth = g9.vs.lT.indexOf(A) == 1 ? Q : Q *= 2;
                    R.miterLimit = W
                }
            }
            w.Y.a1S(R, Y, x + 1, c, V, E, M);
            if (M) {} else
                R.closePath();
            if (Y[x + 1 + c] == null || Y[x + 1 + c].yV != -1) {
                if (r)
                    R.stroke();
                else
                    R.fill("evenodd")
            }
            x += c
        }
    }
    ;
    w.Y.a1S = function(Y, R, x, V, E, r, K) {
        var J = R[x]
          , t = null;
        Y.moveTo(J.Z.x + E, J.Z.y + r);
        for (var C = x; C < x + V - 1; C++) {
            J = R[C];
            t = R[C + 1];
            Y.bezierCurveTo(J.Ii.x + E, J.Ii.y + r, t.wJ.x + E, t.wJ.y + r, t.Z.x + E, t.Z.y + r)
        }
        if (!K) {
            J = R[C];
            t = R[x];
            Y.bezierCurveTo(J.Ii.x + E, J.Ii.y + r, t.wJ.x + E, t.wJ.y + r, t.Z.x + E, t.Z.y + r)
        }
    }
    ;
    w.Y.Jh = function(Y, R, V) {
        var E = []
          , r = V ? 4 : 1
          , K = !1;
        if (R != null)
            for (var x = 0; x < R.length; x++)
                if (R[x] != 0) {
                    K = !0;
                    break
                }
        if (R != null && K) {
            var J = w.H.amy(Y, R)
              , t = J.length / 6;
            for (var x = 0; x < t; x++) {
                var C = x * 6
                  , c = (x - 1 + t) % t * 6
                  , M = J[C]
                  , a = J[C + 1]
                  , Q = J[C + 2]
                  , A = J[C + 3]
                  , p = J[c + 4]
                  , v = J[c + 5];
                E.push({
                    type: r,
                    wJ: new gv(p,v),
                    Z: new gv(M,a),
                    Ii: new gv(Q,A)
                })
            }
        } else {
            for (var x = 0; x < Y.length; x += 2) {
                var W = new gv(Y[x],Y[x + 1]);
                E.push({
                    type: r,
                    wJ: W.clone(),
                    Z: W.clone(),
                    Ii: W.clone()
                })
            }
        }
        return E
    }
    ;
    w.Y.UG = function(Y, R) {
        w.Y.me();
        var V = new paper.Path;
        V.remove();
        var E = Y.length - 1
          , r = Math.sqrt((Y[E - 1] - Y[0]) * (Y[E - 1] - Y[0]) + (Y[E] - Y[1]) * (Y[E] - Y[1])) < 3;
        V.closed = r;
        for (var x = 0; x < Y.length; x += 2)
            V.add(new paper.Point(Y[x],Y[x + 1]));
        V.simplify(R);
        var K = [{
            type: 6
        }, {
            type: 8,
            all: 0
        }];
        K = K.concat(w.Y.ks(V));
        return K
    }
    ;
    w.Y.pa = function(Y, R, V) {
        var E = Y[R].length
          , r = Y[R].type
          , K = 0
          , J = Y.slice(R + 1, R + 1 + E);
        for (var x = 0; x < E; x++) {
            var t = V[(x - 1 + E) % E]
              , C = V[(x + 1 + E) % E]
              , c = V[x];
            if (c != 0) {
                var M = J[(x - 1 + E) % E].Z
                  , a = J[(x + 0 + E) % E].Z
                  , Q = J[(x + 1 + E) % E].Z
                  , A = gv.VN(a, M)
                  , p = gv.VN(a, Q)
                  , v = w.H.vr(M.x, M.y, a.x, a.y, Q.x, Q.y, c)[0]
                  , W = Math.min(v, t == 0 ? A : A / 2, C == 0 ? p : p / 2);
                c *= W / v;
                var n = w.H.Ar(M.x, M.y, a.x, a.y, Q.x, Q.y, c)
                  , $ = {
                    type: r + 1,
                    wJ: new gv(n[2],n[3]),
                    Z: new gv(n[2],n[3]),
                    Ii: new gv(n[4],n[5])
                }
                  , G = {
                    type: r + 1,
                    wJ: new gv(n[6],n[7]),
                    Z: new gv(n[8],n[9]),
                    Ii: new gv(n[8],n[9])
                };
                Y.splice(R + K + 1, 1, $, G);
                K++;
                Y[R].length++
            }
            K++
        }
    }
    ;
    w.Y.XC = function(Y) {
        for (var x = 0; x < Y.length; x++) {
            var R = Y[x]
              , V = R.type;
            if (V == 1 || V == 2 || V == 4 || V == 5)
                if (!R.Z.yU(R.wJ) || !R.Z.yU(R.Ii))
                    return !1
        }
        return !0
    }
    ;
    w.Y.he = function(Y) {
        if (Y.length != 7 || !w.Y.XC(Y))
            return !1;
        for (var x = 0; x < 4; x++) {
            var R = !0;
            for (var V = 0; V < 4; V++) {
                var E = Y[3 + (x + V & 3)]
                  , r = Y[3 + (x + V + 1 & 3)];
                if (E.Z.x != r.Z.x && E.Z.y != r.Z.y)
                    R = !1
            }
            if (R)
                return !0
        }
        return !1
    }
    ;
    w.Y.o3 = {};
    w.Y.o3.ec = function(Y, R, V) {
        var E = [{
            type: 6
        }, {
            type: 8,
            all: 0
        }]
          , r = null;
        E.push({
            type: V ? 3 : 0,
            yV: 1,
            length: 0,
            oe: 0,
            SP: 0,
            sK: 1
        });
        if (R == 0)
            r == null;
        else if (R instanceof Array)
            r = R;
        else {
            r = [];
            for (var x = 0; x < Y.length; x += 2)
                r.push(R)
        }
        E = E.concat(w.Y.Jh(Y, r, V));
        E[2].length = E.length - 3;
        return E
    }
    ;
    w.Y.o3.a6w = function(Y, R, V, E, r) {
        var K = []
          , J = []
          , t = .553
          , C = 1
          , c = -1;
        K.push({
            type: 1,
            wJ: new gv(0,t),
            Z: new gv(0,0),
            Ii: new gv(0,-t)
        });
        r += 2;
        for (var x = 0; x < r; x++) {
            var M = {
                type: 1
            };
            if (x == 0) {
                M.Z = new gv(1,-1);
                M.wJ = new gv(1 - t,-1);
                M.Ii = new gv(1 + t,-1)
            } else {
                var a = -(x + 2) * Math.PI / 2
                  , Q = 1 + ((x & 1) == 1 ? x - 1 : x)
                  , A = Math.sin(a)
                  , p = Math.cos(a);
                C += Q * (A - p);
                c += Q * (p + A);
                M.Z = new gv(C,c);
                M.wJ = new gv(C + Q * p * t,c - Q * A * t);
                if ((x & 1) == 1)
                    Q += 2;
                M.Ii = new gv(C - Q * p * t,c + Q * A * t)
            }
            var v = {
                type: 1,
                wJ: new gv(-M.Ii.x,-M.Ii.y),
                Z: new gv(-M.Z.x,-M.Z.y),
                Ii: new gv(-M.wJ.x,-M.wJ.y)
            };
            K.push(M);
            if (x < r - 2)
                J.push(v)
        }
        J.reverse();
        K = K.concat(J);
        var W = [{
            type: 6
        }, {
            type: 8,
            all: 0
        }];
        W.push({
            type: 0,
            yV: 1,
            length: K.length,
            oe: 0,
            SP: 0,
            sK: 1
        });
        W = W.concat(K);
        var n = new bF(V / r,0,0,V / r,0,0);
        n.rotate(E);
        n.translate(Y, R);
        w.Y.DS(W, n);
        return W
    }
    ;
    w.Y.o3.Rect = function(Y, R, V, E, r) {
        var K = [Y, R, Y + V, R, Y + V, R + E, Y, R + E];
        return w.Y.o3.ec(K, r)
    }
    ;
    w.Y.o3.iU = function(Y, R, V, E, r, K) {
        var J = []
          , t = 2 * Math.PI / r;
        for (var x = 0; x < r; x++)
            J.push(Math.cos(x * t), Math.sin(x * t));
        var C = new bF(V,0,0,V,0,0);
        C.rotate(E);
        C.translate(Y, R);
        w.H.g(J, C, J);
        return w.Y.o3.ec(J, K)
    }
    ;
    w.Y.o3.ai3 = function(Y, R, V, E, r, K, J) {
        var t = []
          , C = Math.PI / r;
        for (var x = 0; x < r * 2; x++) {
            var c = (x & 1) == 0 ? 1 : J;
            t.push(c * Math.cos(x * C), c * Math.sin(x * C))
        }
        var M = new bF(V,0,0,V,0,0);
        M.rotate(E);
        M.translate(Y, R);
        w.H.g(t, M, t);
        return w.Y.o3.ec(t, K)
    }
    ;
    w.Y.o3.QE = function(Y, R, V, E, r) {
        return w.Y.o3.rO(0, Y, R, V, E, r)
    }
    ;
    w.Y.o3.alo = function(Y, R, V, E, r, K) {
        return w.Y.o3.rO(1, Y, R, V, E, r, K)
    }
    ;
    w.Y.o3.rO = function(Y, R, V, E, r, K, J) {
        var t = Math.sqrt((E - R) * (E - R) + (r - V) * (r - V)), C;
        K /= 2;
        if (Y == 0)
            C = [-K, 0, K, 0, K, t, -K, t];
        else {
            var c = K * 2 * J * 1.3 / 1.5
              , M = K * J;
            C = [-K, 0, K, 0, K, t - c, M, t - c, 0, t, -M, t - c, -K, t - c]
        }
        var a = new bF(1,0,0,1,0,0);
        a.rotate(Math.atan2(-r + V, E - R) + Math.PI / 2);
        a.translate(R, V);
        w.H.g(C, a, C);
        return w.Y.o3.ec(C, 0)
    }
    ;
    w.Y.o3.lp = function(Y, R, V, E) {
        var r = [{
            type: 6
        }, {
            type: 8,
            all: 0
        }]
          , a = .553;
        r.push({
            type: 0,
            yV: 1,
            length: 4,
            oe: 0,
            SP: 0,
            sK: 1
        });
        var K = Y
          , J = R
          , t = Y + V
          , C = R + E
          , Y = (K + t) / 2
          , R = (J + C) / 2
          , c = (K - t) / 2
          , M = (J - C) / 2;
        r.push({
            type: 1,
            wJ: new gv(Y - a * c,R - M),
            Z: new gv(Y,R - M),
            Ii: new gv(Y + a * c,R - M)
        });
        r.push({
            type: 1,
            wJ: new gv(Y + c,R - a * M),
            Z: new gv(Y + c,R),
            Ii: new gv(Y + c,R + a * M)
        });
        r.push({
            type: 1,
            wJ: new gv(Y + a * c,R + M),
            Z: new gv(Y,R + M),
            Ii: new gv(Y - a * c,R + M)
        });
        r.push({
            type: 1,
            wJ: new gv(Y - c,R + a * M),
            Z: new gv(Y - c,R),
            Ii: new gv(Y - c,R - a * M)
        });
        return r
    }
    ;
    w.Y.o3.a6g = function(Y, R, V, E, r) {
        var K = [{
            type: 6
        }, {
            type: 8,
            all: 0
        }];
        K.push({
            type: 3,
            yV: 1,
            length: 5,
            oe: 0,
            SP: 0,
            sK: 1
        });
        var J = (r - E) / 4;
        for (var x = 0; x < 5; x++) {
            var t = x * J
              , C = Math.cos(t)
              , c = Math.sin(t)
              , M = .553 * (J / (Math.PI / 2))
              , a = c * M
              , Q = -C * M
              , A = new gv(C,c);
            K.push({
                type: 4,
                wJ: x == 0 ? A.clone() : new gv(C + a,c + Q),
                Z: A,
                Ii: x == 4 ? A.clone() : new gv(C - a,c - Q)
            })
        }
        var p = new bF;
        p.rotate(-E);
        p.scale(V, V);
        p.translate(Y, R);
        w.Y.DS(K, p);
        return K
    }
    ;
    w.uM = {};
    w.uM.type = {
        warpNone: [22, 5, 0],
        warpCustom: [22, 5, 16],
        warpArc: [22, 5, 1],
        warpArcLower: [22, 5, 2],
        warpArcUpper: [22, 5, 3],
        warpArch: [22, 5, 4],
        warpBulge: [22, 5, 5],
        warpShellLower: [22, 5, 6],
        warpShellUpper: [22, 5, 7],
        warpFlag: [22, 5, 8],
        warpWave: [22, 5, 9],
        warpFish: [22, 5, 10],
        warpRise: [22, 5, 11],
        warpFisheye: [22, 5, 12],
        warpInflate: [22, 5, 13],
        warpSqueeze: [22, 5, 14],
        warpTwist: [22, 5, 15]
    };
    w.uM.XJ = function(Y) {
        var R = Y.warpStyle.v.warpStyle;
        if (R == "warpNone")
            return !0;
        else if (R == "warpCustom") {
            var V = !1
              , E = Y.customEnvelopeWarp.v.meshPoints.v.arr
              , r = E[0].arr
              , K = E[1].arr;
            for (var x = 0; x < 4; x++)
                for (var J = 0; J < 4; J++) {
                    if (Math.abs(r[x] - r[J * 4 + x]) > 1 || Math.abs(K[x * 4] - K[x * 4 + J]) > 1)
                        V = !0
                }
            return !V
        } else
            return Y.warpValue.v == 0 && Y.warpPerspective.v == 0 && Y.warpPerspectiveOther.v == 0
    }
    ;
    w.uM.T = function(Y) {
        var R = {
            classID: "warp",
            warpStyle: {
                t: "enum",
                v: {
                    warpStyle: "warpNone"
                }
            },
            warpValue: {
                t: "doub",
                v: 0
            },
            warpPerspective: {
                t: "doub",
                v: 0
            },
            warpPerspectiveOther: {
                t: "doub",
                v: 0
            },
            warpRotate: {
                t: "enum",
                v: {
                    Ornt: "Hrzn"
                }
            }
        };
        if (Y) {
            R.bounds = {
                t: "Objc",
                v: {
                    classID: "Rctn",
                    Top: {
                        t: "UntF",
                        v: {
                            type: "#Pxl",
                            val: Y.y
                        }
                    },
                    Left: {
                        t: "UntF",
                        v: {
                            type: "#Pxl",
                            val: Y.x
                        }
                    },
                    Btom: {
                        t: "UntF",
                        v: {
                            type: "#Pxl",
                            val: Y.y + Y.b
                        }
                    },
                    Rght: {
                        t: "UntF",
                        v: {
                            type: "#Pxl",
                            val: Y.x + Y.d
                        }
                    }
                }
            };
            R.uOrder = {
                t: "long",
                v: 4
            };
            R.vOrder = {
                t: "long",
                v: 4
            }
        }
        return R
    }
    ;
    w.uM.abK = function(Y, R, V, E) {
        for (var x = 0; x < Y.length; x += 2) {
            var r = Y[x]
              , K = Y[x + 1]
              , J = (r - R.x) / R.d
              , t = (K - R.y) / R.b
              , C = (1 - V) / 2
              , c = 1 - C
              , M = C + J * (c - C);
            t = .5 + (t - .5) * M * 2;
            var a = (1 - E) / 2
              , Q = 1 - a
              , A = a + t * (Q - a);
            J = .5 + (J - .5) * A * 2;
            r = R.x + J * R.d;
            K = R.y + t * R.b;
            Y[x] = r;
            Y[x + 1] = K
        }
    }
    ;
    w.uM.t$ = function(Y, R) {
        var V = []
          , E = [];
        for (var x = 0; x < Y.length; x += 2) {
            V.push(Y[x]);
            E.push(Y[x + 1])
        }
        var r = [];
        r.push({
            id: "Hrzn",
            type: "UnFl",
            uID: "#Pxl",
            arr: V
        });
        r.push({
            id: "Vrtc",
            type: "UnFl",
            uID: "#Pxl",
            arr: E
        });
        R.warpStyle.v.warpStyle = "warpCustom";
        R.customEnvelopeWarp = {
            t: "Objc",
            v: {
                classID: "customEnvelopeWarp",
                meshPoints: {
                    t: "ObAr",
                    v: {
                        classID: "rationalPoint",
                        arr: r
                    }
                }
            }
        }
    }
    ;
    w.uM.gF = function(Y, R) {
        if (R == null) {
            var V = Y.bounds.v
              , E = V.Left.v.val
              , r = V.Rght.v.val
              , K = V.Top.v.val
              , J = V.Btom.v.val;
            R = new gE(E,K,r - E,J - K)
        }
        if (R.uD())
            R.d = R.b = 1;
        var t = []
          , C = Y.warpStyle.v.warpStyle;
        if (C == "warpCustom") {
            var c = Y.customEnvelopeWarp.v.meshPoints.v.arr
              , M = c[0].arr
              , a = c[1].arr;
            for (var x = 0; x < 16; x++)
                t.push(M[x], a[x])
        } else
            t = w.uM.uM(R, C, Y.warpRotate.v.Ornt == "Hrzn", Y.warpValue.v / 100, Y.warpPerspective.v / 100, Y.warpPerspectiveOther.v / 100);
        return t
    }
    ;
    w.uM.uM = function(Y, R, V, E, r, K) {
        var J = w.iv.T(Y.x, Y.y, Y.d, Y.b);
        if (R == "warpNone")
            return J;
        var t = JSON.parse(JSON.stringify(Y))
          , C = new bF;
        if (!V) {
            C.translate(-Y.x, -Y.y);
            C.rotate(-Math.PI / 2);
            C.translate(Y.b, 0);
            w.H.g(J, C, J);
            Y = new gE(0,0,Y.b,Y.d);
            J = w.iv.QT(J, !1)
        }
        w.uM.acI(J, Y, R, E, r, K);
        if (!V) {
            J = w.iv.QT(J, !0);
            Y = t;
            C.tb();
            w.H.g(J, C, J)
        }
        if (E == 0)
            w.uM.abK(J, Y, r, K);
        else {
            var C = new bF(1 / Y.d,0,0,1 / Y.b,-Y.x,-Y.y);
            C.translate(-.5, -.5);
            w.H.g(J, C, J);
            w.uM.aj8(J, K, r);
            C.tb();
            w.H.g(J, C, J)
        }
        return J
    }
    ;
    w.uM.acI = function(Y, R, V, E, r, K) {
        for (var x = 0; x < 4; x++) {
            for (var J = 0; J < 4; J++) {
                var t = 2 * (4 * x + J)
                  , C = Y[t] - R.x
                  , c = Y[t + 1] - R.y
                  , M = C
                  , a = c;
                if (E != 0) {
                    var Q = R.d / 2
                      , A = R.b / 2;
                    M -= Q;
                    a -= A;
                    var p = M
                      , v = M
                      , W = -A
                      , n = A
                      , $ = Math.abs(E)
                      , G = Math.tan((1 - $) * Math.PI / 2)
                      , o = Math.sqrt(G * G + 1)
                      , B = Math.atan2(1, G)
                      , L = M / Q * B
                      , u = Q * o
                      , y = Q * o + R.b
                      , S = Math.cos(B)
                      , X = Math.sin(B)
                      , N = w.uM.aeg(S, X)
                      , k = w.uM.a5t(S, X)
                      , d = -G * Q + N * u;
                    if (V == "warpArc") {
                        p = Math.sin(L) * y;
                        W = G * Q - Math.cos(B) * y + A;
                        v = Math.sin(L) * u;
                        n = G * Q - Math.cos(B) * u + A;
                        if (J == 1 || J == 2) {
                            p = J == 1 ? -k * y : k * y;
                            v = J == 1 ? -k * u : k * u;
                            W = G * Q + A - N * y;
                            n = G * Q + A - N * u
                        }
                        if (E < 0) {
                            var P = p;
                            p = v;
                            v = P;
                            P = W;
                            W = -n;
                            n = -P
                        }
                    }
                    if (V == "warpArcLower") {
                        if (J == 1 || J == 2) {
                            v = J == 1 ? -k * u : k * u;
                            n = E < 0 ? A - d : A + d
                        }
                    }
                    if (V == "warpArcUpper" || V == "warpArch" || V == "warpBulge") {
                        if (J == 1 || J == 2) {
                            p = J == 1 ? -k * u : k * u;
                            W = E < 0 ? -A + d : -A - d
                        }
                        if (V == "warpArch") {
                            v = p;
                            n = W + 2 * A
                        }
                        if (V == "warpBulge") {
                            v = p;
                            n = -W
                        }
                    }
                    if (V == "warpFish" || V == "warpFlag" || V == "warpWave") {
                        if (J == 1) {
                            W -= E * 4 * A;
                            n += E * 4 * A
                        }
                        if (J == 2) {
                            W += E * 4 * A;
                            n -= E * 4 * A
                        }
                        if (V == "warpFlag" || V == "warpWave")
                            W = n - 2 * A
                    }
                    if (V == "warpRise") {
                        if (J < 2)
                            W = -A + E * A * 4;
                        n = W + 2 * A
                    }
                    var Z = (a + A) / R.b;
                    M = p + Z * (v - p);
                    a = W + Z * (n - W);
                    if (V == "warpWave") {
                        if (x == 0)
                            a = -A;
                        if (x == 3)
                            a = A;
                        if (x == 1 || x == 2)
                            a = 2 * A * (x / 3 - .5) * (1 / 3) + a * (2 / 3)
                    }
                    if (V == "warpFisheye") {
                        if ((x == 1 || x == 2) && (J == 1 || J == 2)) {
                            M = M + 4 * M * E;
                            a = a + 4 * a * E
                        }
                    }
                    if (V == "warpInflate") {
                        var s = 2 / 3;
                        if ((x == 1 || x == 2) && (J == 1 || J == 2)) {
                            M = M + .5 * M * E;
                            a = a + .5 * a * E
                        } else if (x == 1 || x == 2)
                            M = M + s * M * E;
                        else if (J == 1 || J == 2)
                            a = a + s * a * E
                    }
                    if (V == "warpSqueeze") {
                        var s = 2 / 3;
                        if ((x == 1 || x == 2) && (J == 1 || J == 2)) {
                            if (E > 0)
                                M = M - s * M * E;
                            else
                                a = a + s * a * E
                        } else if (x == 1 || x == 2)
                            M = M - s * M * E;
                        else if (J == 1 || J == 2)
                            a = a + s * a * E
                    }
                    if (V == "warpTwist") {
                        if ((x == 1 || x == 2) && (J == 1 || J == 2)) {
                            var _ = E * Math.PI / 2
                              , o = 1 + Math.abs(E) * 2
                              , b = M * Math.cos(_) - a * Math.sin(_)
                              , q = M * Math.sin(_) + a * Math.cos(_);
                            M = b * o;
                            a = q * o
                        }
                    }
                    if (V == "warpShellLower" || V == "warpShellUpper") {
                        if (V == "warpShellUpper") {
                            x = 3 - x;
                            a = -a
                        }
                        if (x > 2 || x == 2 && (J == 0 || J == 3)) {
                            if (E > 0) {
                                var e = u + x / 3 * 2 * A;
                                M = Math.sin(L) * e;
                                a = -G * Q - A + Math.cos(L) * e;
                                if (J == 1 || J == 2) {
                                    M = J == 1 ? -k * e : k * e;
                                    a = -G * Q - A + N * e
                                }
                            } else {
                                if ((J == 1 || J == 2) && x == 3) {
                                    M = J == 1 ? -k * u : k * u;
                                    a = G * Q - N * u + A
                                } else if (x == 2) {
                                    a = A - A * (2 / 3) * Math.cos(L);
                                    M = M + A * (2 / 3) * Math.sin(L)
                                }
                            }
                        }
                        if (V == "warpShellUpper") {
                            x = 3 - x;
                            a = -a
                        }
                    }
                    M += Q;
                    a += A
                }
                C = M,
                c = a;
                Y[t] = C + R.x;
                Y[t + 1] = c + R.y
            }
        }
    }
    ;
    w.uM.aj8 = function(Y, R, V) {
        var E = [];
        for (var r = 0; r < 4; r++)
            E.push(1 - V + r / 3 * 2 * V);
        var K = [];
        for (var r = 0; r < 4; r++)
            K.push(1 - R + r / 3 * 2 * R);
        var J = [0, 0, 0, 0]
          , t = [0, 0, 0, 0];
        for (var x = 0; x < 4; x++)
            for (var r = 0; r < 4; r++) {
                var C = 2 * (4 * x + r)
                  , c = Y[C]
                  , M = Y[C + 1];
                J[r] += c / 4;
                t[r] += M / 4
            }
        for (var x = 0; x < 4; x++)
            for (var r = 0; r < 4; r++) {
                var a = E[r]
                  , C = 2 * (4 * x + r)
                  , c = Y[C]
                  , M = Y[C + 1]
                  , Q = J[r]
                  , A = t[r];
                Y[C] = Q + a * (c - Q);
                Y[C + 1] = A + a * (M - A)
            }
        var p = Y.slice(0);
        for (var x = 0; x < 4; x++)
            for (var r = 1; r < 3; r++) {
                var C = 2 * (4 * x + r)
                  , c = Y[C]
                  , M = Y[C + 1]
                  , v = C + (r == 1 ? -2 : 2)
                  , W = Y[v]
                  , n = Y[v + 1];
                Y[C] = c - W;
                Y[C + 1] = M - n
            }
        var $ = Y[0]
          , G = Y[1]
          , o = Y[8]
          , B = Y[9]
          , L = Y[16]
          , u = Y[17]
          , y = Y[24]
          , S = Y[25]
          , X = Y[6]
          , N = Y[7]
          , k = Y[14]
          , d = Y[15]
          , P = Y[22]
          , Z = Y[23]
          , s = Y[30]
          , _ = Y[31]
          , b = X - $
          , q = N - G
          , e = k - o
          , g = d - B
          , F = P - L
          , l = Z - u
          , i = s - y
          , aM = _ - S;
        for (var x = 0; x < 4; x++) {
            var H = 2 * x * 4
              , iP = 0
              , hq = 0
              , iG = x == 1 ? .33 : .66
              , h = 1 - iG;
            if (x == 0) {
                iP = b;
                hq = q
            }
            if (x == 1) {
                iP = h * b + iG * -i;
                hq = h * q + iG * -aM
            }
            if (x == 2) {
                iP = h * b + iG * -i;
                hq = h * q + iG * -aM
            }
            if (x == 3) {
                iP = -i;
                hq = -aM
            }
            Y[H] = Y[H] + iP / 2;
            Y[H + 1] = Y[H + 1] + hq / 2;
            Y[H + 6] = Y[H + 6] - iP / 2;
            Y[H + 7] = Y[H + 7] - hq / 2
        }
        for (var x = 0; x < 4; x++)
            for (var r = 1; r < 3; r++) {
                var C = 2 * (4 * x + r)
                  , c = Y[C]
                  , M = Y[C + 1]
                  , v = C + (r == 1 ? -2 : 2)
                  , W = Y[v]
                  , n = Y[v + 1]
                  , a = 2 * x / 3;
                Y[C] = W + a * c;
                Y[C + 1] = n + a * M
            }
        for (var x = 1; x < 3; x++)
            for (var r = 1; r < 3; r++) {
                var C = 2 * (4 * x + r)
                  , c = Y[C]
                  , M = Y[C + 1]
                  , dw = x == 1 ? -8 : -16
                  , eK = x == 1 ? 16 : 8
                  , f9 = Y[C + dw]
                  , gn = Y[C + dw + 1]
                  , d$ = Y[C + eK]
                  , dJ = Y[C + eK + 1]
                  , a = x / 3;
                c = (1 - a) * f9 + a * d$;
                M = (1 - a) * gn + a * dJ;
                Y[C] = c;
                Y[C + 1] = M
            }
        w.H.oD(p, Y, Y, R)
    }

    w.uM.aeg = function(Y, R) {
        return (4 - Y) * (1 / 3)
    }

    w.uM.a5t = function(Y, R) {
        return (1 - Y) * (3 - Y) / (3 * R)
    }