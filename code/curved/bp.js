var bp = {};
bp.xm = function (Y, R) {
    var V = {
        R: [],
        P: []
    }
        , E = R.g
        , r = bg.SV(R)
        , K = Math.max(E.O * E.O, E.w8 * E.w8) < 1e-9 ? E : null;
    if (r == 3 || r == 4)
        K = null;
    bp.acu(Y, V, K);
    if (!w.uM.XJ(R.P5)) {
        var J = w.H.Hh(V.P);
        V = w.H.vQ(V);
        V = w.H.Pg(V, Math.min(J.d, J.b) / 8);
        var t = bg.Tf(R, Y)
            , C = w.uM.gF(R.P5, t);
        w.iv.apply(C, V.P, t)
    }
    w.H.g(V.P, E, V.P);
    return V
}

bp.Ee = function (Y, R) {
    if (!cd.B8())
        return;
    var V = Y.VW
        , E = V.ResourceDict.FontSet
        , r = V.ResourceDict.StyleSheetSet[0].StyleSheetData
        , K = V.EngineDict.StyleRun.RunLengthArray
        , J = V.EngineDict.StyleRun.RunArray
        , t = bg.mu(V)
        , C = !0
        , c = {}
        , M = 0;
    for (var x = 0; x < J.length; x++) {
        var a = J[x].StyleSheet.StyleSheetData.Font;
        if (a == null)
            a = r.Font;
        for (var Q = 0; Q < K[x]; Q++) {
            var A = t.charCodeAt(M + Q)
                , p = a + "," + (A > 128 ? A : -1);
            if (c[p] == null) {
                c[p] = 1;
                if (R.cH(E[a].Name, A) == null)
                    C = !1
            }
        }
        M += K[x]
    }
    return C
}

bp.acu = function (Y, R, V) {
    var E = new bF;
    for (var x = 0; x < Y.JT.length; x++)
        bp.a7n(Y.G$, Y.JT[x], R, E, V)
}

bp.a7n = function (Y, R, V, E, r) {
    E.translate(R.Cj.x, R.Cj.y);
    for (var x = 0; x < R.ZH.length; x++) {
        var K = {}
            , J = R.ZH[x];
        if (!J.Cg)
            break;
        var t = E.clone();
        t.translate(J.Cj.x, J.Cj.y);
        if (r) {
            var C = r.W8 + t.W8 * r.Xa;
            t.W8 = (Math.round(C) - r.W8) / r.Xa
        }
        for (var c = J.start; c < J.end; c++)
            bp.anO(Y, R.R3[c], R, K, V, t)
    }
    E.translate(-R.Cj.x, -R.Cj.y)
}

bp.anO = function (Y, R, V, E, r, K) {
    K.translate(R.Cj.x, R.Cj.y);
    for (var J = R.$S; J <= R.Ce; J++) {
        var t = V.vE[J]
            , C = t.V.d
            , c = Y[V.abj + t.A6];
        if (c.pi == "\n")
            continue;
        var M = c.pT.FontSize / c.Ng.head.unitsPerEm
            , a = bg.VJ(c.pT)
            , Q = (Math.round(a.h) << 16) + (Math.round(a.l) << 8) + Math.round(a.O);
        r.R.push("#" + w.gc(Q));
        var A = K.clone();
        A.translate(t.Cj.x + t.ws * M, t.Cj.y - t.FW * M);
        var p = new bF;
        p.scale(M, -M);
        if (c.Od == 1 && bp.a3E.indexOf(c.pi) != -1)
            p.concat(new bF(-1, 0, 0, 1, C, 0));
        if (c.pT.FauxItalic)
            p.concat(new bF(1, 0, -Math.tan(.18), 1, 0, 0));
        p.translate(0, c.Co);
        p.scale(c.scale.x, c.scale.y);
        if (c.pT.BaselineShift != null)
            p.translate(0, -c.pT.BaselineShift);
        if (t.I2 != 0) {
            p.rotate(-t.I2)
        }
        p.concat(A);
        if (t.path.R.length != 0 && c.pi != "\t") {
            if (c.pT.FauxBold) {
                var v = c.pT.FontSize / 2048 * 27 * c.scale.x;
                p.Wr += v;
                w.H.concat(r, t.path, p);
                p.Wr -= v + v;
                w.H.concat(r, t.path, p)
            } else
                w.H.concat(r, t.path, p)
        }
        if (c.pi != "\n") {
            if (c.pT.Underline) {
                if (E.f2 == null)
                    E.f2 = c.Ng.post.underlineThickness;
                if (E.afB == null)
                    E.afB = c.Ng.post.underlinePosition;
                var W = 0
                    , n = E.afB - E.f2 / 2
                    , $ = t.Gt * 1.05
                    , G = -E.f2;
                w.H.concat(r, {
                    R: ["M", "L", "L", "L", "Z"],
                    P: [W, n, W + $, n, W + $, n + G, W, n + G]
                }, p)
            }
            if (c.pT.Strikethrough) {
                var o = c.Ng["OS/2"].yStrikeoutSize
                    , B = c.Ng["OS/2"].yStrikeoutPosition
                    , W = 0
                    , n = B + o / 2
                    , $ = t.Gt * 1.05
                    , G = -o;
                w.H.concat(r, {
                    R: ["M", "L", "L", "L", "Z"],
                    P: [W, n, W + $, n, W + $, n + G, W, n + G]
                }, p)
            }
        }
        r.R.push("X")
    }
    K.translate(-R.Cj.x, -R.Cj.y)
}