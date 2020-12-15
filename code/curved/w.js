function w() {}
    w.gc = function(Y) {
        var R = Y.toString(16);
        while (R.length < 6)
            R = "0" + R;
        return R
    }
    w.iv = {};
    w.iv.T = function(Y, R, V, E) {
        var r = [];
        for (var K = 0; K < 4; K++)
            for (var J = 0; J < 4; J++)
                r.push(Y + V * J / 3, R + E * K / 3);
        return r
    }
    ;
    w.iv.oG = new Array(10);

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

    w.iv.nM = function(Y, R, V, E) {
        w.iv.Q9(E, 0, V);
        w.iv.Q9(E, 4, R);
        w.iv.Uk(Y, E)
    }

    w.iv.Q9 = function(Y, x, R) {
        var V = 1 - R;
        Y[x] = V * (V * V);
        Y[x + 1] = 3 * R * (V * V);
        Y[x + 2] = 3 * (R * R) * V;
        Y[x + 3] = R * R * R
    }

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
    w.H = {};
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
    w.uM = {};
    // w.uM.type = {
    //     warpNone: [22, 5, 0],
    //     warpCustom: [22, 5, 16],
    //     warpArc: [22, 5, 1],
    //     warpArcLower: [22, 5, 2],
    //     warpArcUpper: [22, 5, 3],
    //     warpArch: [22, 5, 4],
    //     warpBulge: [22, 5, 5],
    //     warpShellLower: [22, 5, 6],
    //     warpShellUpper: [22, 5, 7],
    //     warpFlag: [22, 5, 8],
    //     warpWave: [22, 5, 9],
    //     warpFish: [22, 5, 10],
    //     warpRise: [22, 5, 11],
    //     warpFisheye: [22, 5, 12],
    //     warpInflate: [22, 5, 13],
    //     warpSqueeze: [22, 5, 14],
    //     warpTwist: [22, 5, 15]
    // };
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