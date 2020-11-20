var D = {};
    D.R0 = function(Y, R, V) {
        this.name = Y;
        this.id = R;
        this.zk = null;
        if (V != null)
            this.Za = V
    }
    ;
    D.R0.prototype.Vl = function(Y, R, V, E, r) {}
    ;
    D.R0.prototype.enable = function(Y, R, V, E, r, K) {
        var J = new I(O.E.z,!0);
        J.data = {
            e: O.U.u$,
            Cz: "default"
        };
        R.f(J)
    }
    ;
    D.R0.prototype.disable = function(Y, R, V, E, r) {}
    ;
    D.R0.prototype.av = function(Y, R, V, E, r) {
        return !1
    }
    ;
    D.R0.prototype.K_ = function(Y, R, V, E, r) {}
    ;
    D.R0.prototype.qo = function(Y, R, V, E, r) {}
    ;
    D.R0.prototype.NZ = function(Y, R, V, E, r) {}
    ;
    D.R0.prototype.Eb = function(Y, R, V, E, r) {}
    ;
    D.R0.prototype.og = function(Y, R, V, E, r) {}
    ;
    D.R0.prototype.U7 = function(Y, R, V, E) {}
    ;
    D.R0.prototype.J$ = function(Y, R, V, E) {}
    ;
    D.R0.prototype.$E = function(Y, R) {}
    ;
    D.R0.prototype.Zk = function(Y, R) {}
    ;
    D.R0.prototype.c8 = function(Y, R, V, E, r) {}
    ;
    D.R0.prototype.rP = function(Y, R) {}
    ;
    D.R0.prototype.DP = function(Y, R) {
        return !1
    }
    ;
    D.R0.prototype.cm = function(Y, R) {
        return !1
    }
    ;
    D.R0.prototype.rT = function() {
        return !1
    }
    ;
    D.R0.prototype.Tj = function(Y, R) {
        return !0
    }
    ;
    D.R0.prototype.nd = function() {
        return null
    }
    ;
    D.R0.prototype.l5 = function(Y, R, V) {}
    ;
    D.R0.prototype._T = function() {
        return !1
    }
    ;
    D.R0.prototype.NL = function(Y, R, V, E) {}
    ;
    D.R0.prototype.track = function(Y) {
        var R = new I(O.E.io,!0);
        R.data = Y;
        Y.Gz = !0;
        this.zk.f(R)
    }
    ;
    D.R0.hu = function(Y, R, V, E, r) {
        D.R0.x2(Y, R, [em.get([12, 41]).charAt(0) + ": " + w.DG.qF(V.d, E.zX, r, E.d, !0), em.get([12, 42]).charAt(0) + ": " + w.DG.qF(V.b, E.zX, r, E.b, !0)], E)
    }
    ;
    D.R0.x2 = function(Y, R, V, E) {
        var r = 14
          , K = 130
          , J = V.length * 17 + 8
          , t = new gE(Y,R - J,K,J)
          , C = D.R0.SF;
        if (C == null)
            C = D.R0.SF = document.createElement("canvas");
        C.width = K;
        C.height = J;
        var c = C.getContext("2d");
        c.fillStyle = "rgba(0,0,1,1)";
        c.fillRect(0, 0, K, J);
        c.font = r + "px monospace";
        c.fillStyle = "rgba(255,255,255,1)";
        for (var x = 0; x < V.length; x++)
            c.fillText(V[x], 6, (x + 1) * 17);
        E.S.po = [[c.getImageData(0, 0, K, J).data, t.clone()]]
    }
    ;
    D.R0.SF = null;
    D.NJ = "0";
    D.OX = "1";
    D.ajb = "2";
    D.adH = "3";
    D.Zw = "5";
    D.am0 = "6";
    D.a9J = "7";
    D.oE = "8";
    D.bc = "9";
    D.OV = "10";
    D.Am = "11";
    D.zH = "12";
    D.uS = "13";
    D.$n = "14";
    D.a19 = "16";
    D.He = "18";
    D.sB = "19";
    D.AD = "20";
    D.qv = "21";
    D.Na = "22";
    D.RR = "23";
    D.Pu = "24";
    D.hl = "25";
    D.Kx = "27";
    D.PF = "31";
    D.ajK = "32";
    D.a8H = "34";
    D.a1j = "35";
    D.Xj = "36";
    D.Wk = "37";
    D.Ow = "38";
    D.sx = "39";
    D.ly = "40";
    D.GN = "41";
    D.mV = "42";
    D.PU = "43";
    D.m6 = "47";
    D.OG = "51";
    D.px = "52";
    D.iO = "54";
    D.l_ = "55";
    D._s = "56";
    D.H0 = "57";
    D._6 = "58";
    D.E5 = "59";
    D.a1$ = "60";
    D.V9 = "61";
    D.vB = "100";
    D.wk = "101";
    D._p = "102";
    D.hw = "120";
    D.fJ = "230";
    D.alD = "231";
    D.Tu = "232";
    D.AQ = "233";
    D.$l = "234";
    D.p4 = "235";
    D.y9 = "236";
    D.E1 = function(Y) {
        var R = D.J2
          , V = null;
        for (var E in R)
            if (R[E][1].indexOf(Y[1].classID) != -1)
                V = E;
        return V
    }
    ;
    D.J2 = {};
    D.J2[D.RR] = ["tools/brush", ["PbTl"]];
    D.J2[D.Pu] = ["tools/pencil", ["PcTl"]];
    D.J2[D.PF] = ["tools/eraser", ["ErTl"]];
    D.OJ = function(Y, R, V) {
        D.R0.call(this, Y, R, V);
        this.$_ = {
            brush: Y ? h3.Xl() : null,
            bmode: "norm",
            opacity: 1,
            flow: 1,
            smth: 0,
            samp: 0,
            prsr: [!1, !0],
            emode: 0,
            wconf: [40, !0, !0],
            algnd: !1,
            sfrom: 0,
            alt: [!1],
            expo: .5,
            rng: 1,
            strn: .5,
            pdetail: !0,
            smode: 1,
            qsmode: 0,
            setop: "front",
            patch: 0
        };
        this.ri = null;
        this.WY = null;
        this.fQ = null;
        this.jc = null;
        this.a$ = null;
        this.MD = null;
        this.An = null;
        this.Dm = null;
        this.N3 = null;
        this.Hf = null;
        this.PZ = null;
        this.Oc = null;
        this.w$ = null;
        this.zV = 1;
        this.oq = !1;
        this.vT = null;
        this.caller = null
    }
    ;
    D.OJ.prototype = new D.R0;
    D.OJ.prototype.cm = function(Y, R) {
        return Y.tc && R.i(m.Ms)
    }
    ;
    D.OJ.prototype.qo = function(Y, R, V, E, r) {
        if (E.i(m.yx)) {
            this.MD = new gv(r.x,r.y);
            var K = this.$_.brush.Brsh.v
              , J = K.Dmtr.v.val
              , t = K.Hrdn != null ? K.Hrdn.v.val : -1;
            this.An = [J, t, !0, JSON.parse(JSON.stringify(this.$_.brush)), r];
            this.P2(V)
        }
    }
    ;
    D.OJ.prototype.aZ = function(Y, R, V) {
        var E = this.An
          , r = Y.a.k
          , K = V.x - E[4].x
          , J = V.y - E[4].y
          , t = E[0]
          , C = E[1]
          , c = Math.abs(K) > Math.abs(J);
        if (c && E[2]) {
            var M = Math.round(2 * K / r);
            t += M;
            V.x -= K - .5 * M * r
        }
        if (!c && !E[2] && C != -1) {
            var M = Math.round(.25 * J);
            C += M;
            V.y -= J - 4 * M
        }
        t = Math.max(1, t);
        C = E[1] == -1 ? -1 : Math.max(0, Math.min(100, C));
        var a = E[3];
        a.Brsh.v.Dmtr.v.val = t;
        if (C != -1)
            a.Brsh.v.Hrdn.v.val = C;
        this.An = [t, C, c, a, V];
        var Q = g6.Zu(a, R.hX.sm, r)
          , A = Q[1];
        A.x = Math.round(this.MD.x - A.d / 2);
        A.y = Math.round(this.MD.y - A.b / 2);
        Y.S.LI = [Q];
        var p = Y.a.Cf(this.MD.x, this.MD.y);
        Y.S.K6 = {
            JE: [],
            z4: [p.x - t / 2, p.y, p.x + t / 2, p.y]
        };
        if (C != -1)
            Y.S.K6.z4.push(p.x + 50 / r, p.y - C / 2, p.x + 50 / r, p.y + C / 2);
        Y.eR = !0
    }
    ;
    D.OJ.prototype.og = function(Y, R, V, E, r) {
        if (this.id == D.AD)
            return;
        if (this.MD) {
            this.MD = null;
            this.or(JSON.parse(JSON.stringify(this.An[3])));
            Y.S.LI = [];
            Y.S.K6 = null;
            Y.eR = !0;
            return
        }
        var K = new I(O.E.z,!0);
        K.data = {
            e: O.U.oN,
            m: this.id,
            ahg: "showBrushOpts",
            RO: new gv(r.Gt + 4,r.nV)
        };
        R.f(K)
    }
    ;
    D.OJ.prototype.or = function(Y) {
        var R = new I(O.E.z,!0);
        R.data = {
            e: O.U.KZ,
            jR: fG.D7,
            C1: Y
        };
        this.caller.f(R)
    }
    ;
    D.OJ.iy = function(Y, R, V, E) {
        if (Y == null)
            Y = "FrgC";
        if (R == null)
            R = "norm";
        if (V == null)
            V = 1;
        var r = {
            classID: "Fl",
            Usng: {
                t: "enum",
                v: {
                    FlCn: Y
                }
            },
            Opct: {
                t: "UntF",
                v: {
                    type: "#Prc",
                    val: Math.round(V * 100)
                }
            },
            Md: {
                t: "enum",
                v: {
                    BlnM: i2.Mr(R)
                }
            }
        };
        if (Y == "Clr")
            r.Clr = {
                t: "Objc",
                v: E
            };
        if (Y == "contentAware")
            r.contentAwareColorAdaptationFill = {
                t: "bool",
                v: !0
            };
        return {
            CM: "fill",
            eQ: r
        }
    }
    ;
    D.OJ.prototype.Vl = function(Y, R, V, E, r) {
        this.zk = R;
        var K = V.dR.length;
        if (K == 0 && !V.J3())
            return;
        var J = K != 0 ? -1 - V.dR[0] : V.C[0]
          , t = V.t[J];
        if (Y.e == "fromAction") {
            var C = Y.e2
              , c = C.eQ;
            if (C.CM == "fill") {
                var M = (c.Opct ? c.Opct.v.val : 100) / 100, a = c.Md ? i2.Hy(c.Md.v.BlnM) : "norm", Q = c.Usng.v.FlCn, A;
                if (Q == "contentAware") {
                    if (V.v == null) {
                        alert("Select an area to heal first.");
                        return
                    }
                    if (!V.J3())
                        return;
                    this.nf(V);
                    this.ex(V, 0);
                    var p = V.v
                      , v = w.T(p.rect.X() * 4);
                    w.hL(p.channel, v, 3);
                    this.IE(V, "sheal", v, p.rect, p.rect);
                    this.D(V, p.rect);
                    this.finish(V, p.rect)
                } else {
                    if (Q == "FrgC")
                        A = r.B9;
                    else if (Q == "BckC")
                        A = r.$h;
                    else if (Q == "Blck")
                        A = 0;
                    else if (Q == "Wht")
                        A = 16777215;
                    else if (Q == "Gry")
                        A = 8421504;
                    else if (Q == "Clr") {
                        var W = w.W.VJ(c.Clr.v);
                        A = W.h << 16 | W.l << 8 | W.O
                    }
                    var n = A >> 16 & 255
                      , $ = A >> 8 & 255
                      , G = A >> 0 & 255;
                    this.I8(V, t, V.v, n, $, G, Math.round(255 * M), a, [2, 3])
                }
            } else if (C.CM == "delete") {
                var o = J < 0 ? 1 : t.St, p = V.v, S;
                if (p == null)
                    return;
                var B = J < 0 ? V.Rg[-J - 1] : o <= 0 ? null : o == 1 ? t.fp() : t.Ka(V).r
                  , L = o <= 0 ? t.rect : B.rect
                  , u = o <= 0 ? p.rect.Cy(L) : p.rect.clone();
                if (u.uD())
                    return;
                var y = u.X();
                if (o <= 0) {
                    S = w.T(y * 4);
                    w.Vj(t.buffer, t.rect, S, u)
                } else {
                    S = w.T(y);
                    B.extend(u);
                    w.md(B.channel, B.rect, S, u)
                }
                if (0 <= J && t.Gi(V, p)) {
                    if (o <= 0) {
                        w.h3(S, 0);
                        w.Vj(t.gT.WC, t.gT.kn, S, u)
                    } else {
                        w.set(S, 255);
                        w.md(t.gT.WC, t.gT.kn, S, u)
                    }
                } else {
                    if (o <= 0) {
                        var X = w.T(S.length >> 2);
                        w.vH(S, X, 3);
                        w.Q.d$(w.TX(p.rect.X()), p.rect, X, u, p.channel, u, 1);
                        w.hL(X, S, 3)
                    } else {
                        var N = w.T(p.rect.X())
                          , n = r.$h >> 16 & 255
                          , $ = r.$h >> 8 & 255
                          , G = r.$h >> 0 & 255;
                        w.set(N, Math.round(w.l6(n, $, G)));
                        w.Q.d$(N, p.rect, S, u, p.channel, u, 1)
                    }
                }
                this.we(V, !0, [2, 2], J, o, u, S)
            }
        }
        if (Y.e == "stroke") {
            var k = Y.af_
              , p = V.v;
            if (p == null) {
                p = {
                    rect: t.rect.clone(),
                    channel: w.T(t.rect.X())
                };
                w.vH(t.buffer, p.channel, 3)
            }
            var d = ft.y$(k)
              , P = D.Ls.s8(p, Math.ceil(d[0]), Math.ceil(d[1]))
              , A = w.W.VJ(k.Clr.v)
              , n = Math.round(A.h)
              , $ = Math.round(A.l)
              , G = Math.round(A.O);
            this.I8(V, t, P, n, $, G, Math.round(255 * k.Opct.v.val / 100), i2.Hy(k.Md.v.BlnM), [14, 9])
        }
        if (Y.e == "fillBMP") {
            this.wa(V, t, V.v, Y.SS, Y.Yf, Y._O)
        }
        if (Y.e == "draw") {
            var Z = Y.VS
              , s = Z.rect;
            this.nf(V);
            var _ = V.t[V.C[0]];
            if (Y.ajm && _ && _.St <= 0 && V.dR.length == 0) {
                s = ad.ZJ.SW(Z, V);
                _.buffer = Z.buffer.slice(0);
                _.rect = s.clone()
            } else {
                var b = this.$_.bmode;
                this.$_.bmode = "norm";
                this.IE(V, "draw", Z.buffer, s, s.Cy(new gE(0,0,V.d,V.b)));
                this.$_.bmode = b
            }
            this.D(V, s);
            V.IU = !0;
            this.finish(V, s, Y._O, Y.ajm)
        }
    }
    ;
    D.OJ.prototype.I8 = function(Y, R, V, E, r, K, J, t, C) {
        var c = V == null ? new gE(0,0,Y.d,Y.b) : V.rect
          , M = J << 24 | K << 16 | r << 8 | E << 0
          , a = w.T(c.X() * 4);
        w.h3(a, M);
        this.wa(Y, R, V, a, t, C)
    }
    ;
    D.OJ.prototype.wa = function(Y, R, V, E, r, K) {
        var J = Y.dR.length != 0 ? -1 - Y.dR[0] : Y.C[0], t = J < 0 ? 1 : R.St, C = J < 0 ? Y.Rg[-1 - J] : t <= 0 ? null : t == 1 ? R.fp() : R.Ka(Y).r, c = t <= 0 ? R.rect : C.rect, M = V == null ? new gE(0,0,Y.d,Y.b) : V.rect, a = V == null ? w.Ys(Y.d * Y.b) : V.channel, Q = M.X(), A, p = null;
        if (t <= 0) {
            A = w.T(Q * 4);
            w.Vj(R.buffer, R.rect, A, M)
        } else {
            A = w.T(Q);
            C.extend(M);
            w.md(C.channel, C.rect, A, M)
        }
        if (V != null)
            w.IK(a, E);
        if (t > 0) {
            p = w.T(Q);
            w.f6(E, p)
        }
        if (0 <= J && V && R.Gi(Y, V)) {
            var v = R.gT.rB
              , W = R.gT.rB.slice(0);
            if (t <= 0)
                w.Jc(E, W);
            else
                w.Jc(p, W);
            var n = new il([2, 3],this);
            n.data = {
                e: "drawtemp",
                $: Y.C[0],
                Av: t,
                a0a: v,
                abk: W
            };
            Y.Ug(n);
            this.$E(n.data, Y)
        } else {
            if (t <= 0) {
                var $;
                if (R.kx(0)) {
                    $ = w.T(M.X());
                    w.vH(A, $, 3)
                }
                w.Q.D2(r, E, M, A, M, M, 1);
                if (R.kx(0))
                    w.hL($, A, 3)
            } else
                w.Q.d$(p, M, A, M, a, M, 1);
            this.we(Y, !0, K, J, t, M, A)
        }
    }
    ;
    D.OJ.prototype.DP = function(Y) {
        if (m.B_.indexOf(Y) != -1)
            return !0;
        return !1
    }
    ;
    D.OJ.prototype.U7 = function(Y, R, V, E) {
        var r = this.$_.brush
          , K = E.i(m.yx)
          , J = K != this.oq
          , t = D.OJ.xo(r, E);
        if (t != null)
            this.or(t);
        if (!E.i(m.sV) && E.K0() != -1) {
            var C = O.je(Math.round(this.$_.opacity * 100), E.K0()) / 100;
            this.mQ({
                opacity: C
            }, R)
        }
        if (this.id == D.oE && J && Y != null) {
            var c = this.$_.qsmode;
            if (c == 2)
                c = Y.v == null ? 0 : 1;
            else
                c = 2;
            this.mQ({
                qsmode: c
            }, R)
        }
        this.oq = K;
        if (J) {
            if (Y)
                this.zV = Y.a.k;
            this.P2(V, E)
        }
    }
    ;
    D.OJ.xo = function(Y, R) {
        var V = Y.Brsh.v.Dmtr.v.val
          , E = Y.Brsh.v.Hrdn != null ? Y.Brsh.v.Hrdn.v.val : -1
          , r = V
          , K = E
          , J = R.i(m.Ms);
        if (R.i(m.OF)) {
            if (J)
                E = 25 * Math.floor((E - 1) / 25);
            else {
                if (V <= 10)
                    V--;
                else if (V <= 50)
                    V = 5 * Math.floor((V - 1) / 5);
                else if (V <= 100)
                    V = 10 * Math.floor((V - 1) / 10);
                else if (V <= 200)
                    V = 25 * Math.floor((V - 1) / 25);
                else if (V <= 400)
                    V = 50 * Math.floor((V - 1) / 50);
                else
                    V = 100 * Math.floor((V - 1) / 100)
            }
        }
        if (R.i(m.$G)) {
            if (J)
                E = 25 * Math.ceil((E + 1) / 25);
            else {
                if (V < 10)
                    V++;
                else if (V < 50)
                    V = 5 * Math.ceil((V + 1) / 5);
                else if (V < 100)
                    V = 10 * Math.ceil((V + 1) / 10);
                else if (V < 200)
                    V = 25 * Math.ceil((V + 1) / 25);
                else if (V < 400)
                    V = 50 * Math.ceil((V + 1) / 50);
                else
                    V = 100 * Math.ceil((V + 1) / 100)
            }
        }
        V = Math.max(1, V);
        E = Math.max(0, Math.min(100, E));
        if (K == -1)
            E = -1;
        if (V != r || E != K) {
            var t = JSON.parse(JSON.stringify(Y));
            t.Brsh.v.Dmtr.v.val = V;
            if (K != -1)
                t.Brsh.v.Hrdn.v.val = E;
            return t
        }
        return null
    }
    ;
    D.OJ.prototype.P2 = function(Y, R, V, E) {
        if (Y.hX.list.length == 0)
            return;
        var r = this.id, K;
        if ((r == D.Kx || r == D.sB || r == D.RR || r == D.Pu) && (R != null && R.i(m.yx) || this.$_.alt[0]))
            K = "crosshair";
        else {
            var J = this.zV, t = this.$_.brush, C;
            if (V && V.C.length != 0)
                C = V.t[V.C[0]];
            if ((r == D.Kx || r == D.sB) && C != null && C.St <= 0 && this.Oc) {
                var c = V.a.Cf(E.x, E.y), M = this.ba(c), a = this.Oc, Q = this.PZ, A = new gE(Q.x + M.x,Q.y + M.y,Q.d,Q.b), p = g6.Zu(t, Y.hX.sm, J), v = p[0], W = p[1], n = Math.ceil(W.d / J), $ = new gE(Math.round(c.x - n / 2),Math.round(c.y - n / 2),n,n), G = w.T($.X() * 4), o, B;
                w.Vj(a, A, G, $);
                if (J == 1) {
                    o = G;
                    B = $
                } else if (J < 1) {
                    var L = w.Zh(G, $, J);
                    o = L.uG;
                    B = L.rect;
                    if (B.X() != W.X()) {
                        B = W.clone();
                        B.x = L.rect.x;
                        B.y = L.rect.y;
                        o = w.T(B.X() * 4);
                        w.Vj(L.uG, L.rect, o, B)
                    }
                } else {
                    o = v.slice(0);
                    B = W;
                    w.scale.FQ(G, $.d, $.b, o, B.d, B.b, J)
                }
                var u = this.$_.opacity / 255;
                for (var x = 0; x < o.length; x += 4)
                    o[x + 3] = u * (v[x + 3] * o[x + 3]);
                K = {
                    XY: o,
                    V: B,
                    Uy: new gv(B.d / 2,B.b / 2)
                }
            } else
                K = g6.zI(t, Y.hX.sm, J, r == D.hl)
        }
        var y = new I(O.E.z,!0);
        y.data = {
            e: O.U.u$,
            Cz: K
        };
        if (this.caller)
            this.caller.f(y)
    }
    ;
    D.OJ.prototype.enable = function(Y, R, V, E) {
        this.ri = V;
        this.caller = R;
        this.or(JSON.parse(JSON.stringify(this.$_.brush)));
        if (Y && Y.a.k != 0)
            this.zV = Y.a.k;
        this.P2(V, E)
    }
    ;
    D.OJ.prototype.rP = function(Y, R) {
        if (R == fG.D7) {
            this.$_.brush = Y.hX.EG;
            this.P2(Y)
        }
    }
    ;
    D.OJ.prototype.c8 = function(Y, R, V, E, r) {
        for (var K in Y)
            this.$_[K] = Y[K];
        if (this.$_.alt[0])
            this.P2(r, E, V)
    }
    ;
    D.OJ.prototype.RQ = function(Y) {
        var R = Y.dR.length != 0 ? -1 - Y.dR[0] : Y.C[0]
          , V = Y.t[R]
          , E = R < 0 ? 1 : V.St
          , r = R < 0 ? Y.Rg[-R - 1] : E <= 0 ? null : E == 1 ? V.fp() : V.Ka(Y).r
          , K = r ? r.channel : V.buffer
          , J = (r ? r.rect : V.rect).clone();
        return [V, E, r, K, J]
    }
    ;
    D.OJ.prototype.nf = function(Y, R) {
        this.w$ = Y.v == null ? null : {
            rect: Y.v.rect.clone(),
            channel: Y.v.channel.slice(0)
        };
        var V = this.RQ(Y)
          , E = V[0]
          , r = V[1]
          , K = V[2];
        this.Hf = V[3];
        this.N3 = V[4];
        var J = new gE(0,0,Y.d,Y.b)
          , t = J.ov(this.N3);
        if ((this.jU() && r <= 0 || t.yU(this.N3)) && R != !0)
            this.Hf = this.Hf.slice(0);
        else {
            if (K)
                K.extend(t);
            else
                E.extend(t)
        }
    }
    ;
    D.OJ.prototype.ex = function(Y, R) {
        var V = this.RQ(Y)
          , E = V[1]
          , r = V[3]
          , K = V[4]
          , J = [r, K]
          , t = R != null ? R : this.$_.sfrom;
        if (E <= 0 && t != 0) {
            J[1] = new gE(0,0,Y.d,Y.b);
            J[0] = Y.tL(t == 1 && Y.C[0] != Y.t.length - 1 ? Y.C[0] : null).slice(0)
        }
        this.Oc = J[0].slice(0);
        this.PZ = J[1].clone()
    }
    ;
    D.OJ.prototype.__ = function(Y, R, V) {
        if (Y.i(m.yx)) {
            var E = new I(O.E.K,!0);
            E.m = D.$n;
            E.data = {
                e: "pickhere",
                a2i: V
            };
            R.f(E);
            return !0
        }
        return !1
    }
    ;
    D.OJ.prototype.Fx = function(Y, R, V, E, r, K) {
        if (!Y.J3(this.caller)) {
            this.WY = null;
            return
        }
        this.nf(Y);
        var J = new gE(0,0,Y.d,Y.b)
          , t = null;
        if (K != null) {
            var C = Y.dR.length != 0 ? -1 - Y.dR[0] : Y.C[0]
              , c = Y.t[C]
              , M = C < 0 ? Y.Rg[-C - 1] : c.St <= 0 ? null : c.St == 1 ? c.fp() : c.Ka(Y).r;
            t = w.T(J.X() * 4);
            if (M)
                D.OJ.c5(this.Hf, this.N3, M.color, t, J);
            else
                w.Vj(this.Hf, this.N3, t, J)
        }
        var a = this.$_;
        if (this.WY && this.id == D.oE && a.qsmode != 0 && Y.v != null) {} else {
            var Q = R.B9
              , A = R.$h;
            if (this.vT == "erase") {
                var p = Q;
                Q = A;
                A = p
            }
            var v = this.id == D.oE ? this.N3 : J;
            this.WY = new g6(a.brush,R.hX.sm,R.hX.gb,{
                TA: r,
                Nu: K,
                a3Z: a.smth * 50 * O.M() / Y.a.k,
                zq: this.id == D.Pu || a.emode == 1,
                qa: a.prsr
            },Q,A,v,t)
        }
        if (this.id == D.oE) {
            this.WY.wg(a.brush, a.qsmode == 2 ? 0 : 16777215)
        }
        var W = Y.a.Cf(E.x, E.y);
        if (V.i(m.Ms) && this.fQ) {
            var n = this.fQ;
            this.WY.moveTo(n.x, n.y, E.dl);
            this.WY.lineTo(.001 * n.x + .999 * W.x, .001 * n.y + .999 * W.y, E.dl);
            this.WY.lineTo(W.x, W.y, E.dl)
        } else
            this.WY.moveTo(W.x, W.y, E.dl);
        this.fQ = W;
        this.jc = W.clone();
        this.a$ = new bC(W,Y.a.I2)
    }
    ;
    D.OJ.prototype.Z1 = function(Y, R, V) {
        if (Y && Y.a.k != 0 && Y.a.k != this.zV) {
            this.zV = Y.a.k;
            this.P2(V)
        }
    }
    ;
    D.OJ.prototype.il = function(Y, R, V, E) {
        if (this.WY == null)
            return;
        var r = Y.t[Y.C[0]]
          , K = Y.a.Cf(E.x, E.y)
          , J = this.a$.No(K, V);
        if (J.yU(this.fQ))
            return 1;
        this.WY.lineTo(J.x, J.y, E.dl);
        this.fQ = J;
        if (this.id == D.Kx || this.id == D.sB) {
            var t = this.J9()
              , C = 11;
            t = Y.a.nS(K.x - t.x, K.y - t.y);
            var c = C >>> 1
              , M = new gE(Math.round(t.x) - c,Math.round(t.y) - c,C,C)
              , a = w.T(M.X() * 4);
            w.h3(16777215);
            for (var x = 0; x < C; x++)
                a[(x * C + c) * 4 + 3] = a[(C * c + x) * 4 + 3] = 255;
            Y.S.po = [[a, M]];
            Y.eR = !0
        }
    }
    ;
    D.OJ.prototype.J$ = function(Y, R, V, E) {
        if (V.BL != this.id)
            return;
        if (this.id != D.oE || Y == null)
            return;
        if (Y.v == null || Y.C[0] != this.ahu) {
            this.ahu = Y.C[0];
            this.mQ({
                qsmode: 0
            }, R)
        }
    }
    ;
    D.OJ.prototype.D = function(Y, R) {
        if (Y.dR.length != 0) {
            Y.eR = !0;
            return
        }
        var V = Y.t[Y.C[0]];
        if (R == null) {
            R = this.WY.KE();
            if (this.jU() && V.St <= 0)
                R = R.Cy(this.N3)
        }
        if (R.uD())
            return;
        if (V.St <= 0) {
            V.D(R)
        }
        if (V.St == 1) {
            V.fp().Dw = !0;
            V.Qd(Y)
        }
        if (V.St == 3) {
            V.D()
        }
        Y.D(Y.root.Ba(R, Y, Y.C[0], !0))
    }
    ;
    D.OJ.prototype.Eb = function(Y, R, V, E, r) {
        if (this.WY == null)
            return;
        this.WY.finish();
        if (this.id != D.He && this.id != D.sB && this.id != D.oE)
            this.MZ(Y);
        if (this.id == D.Kx || this.id == D.sB) {
            Y.S.po = [];
            Y.eR = !0
        }
        if (this.id == D.oE) {
            var K = Y.v;
            Y.v = this.w$;
            var J = new I(O.E.K,!0);
            J.data = {
                e: "setsel",
                _O: this.name,
                v: K
            };
            J.m = D.OX;
            R.f(J);
            if (this.$_.qsmode == 0)
                this.mQ({
                    qsmode: 1
                }, R)
        } else {
            this.finish(Y, this.WY.Vv());
            this.WY = null;
            this.Dm = null
        }
        this.dir = 0
    }
    ;
    D.OJ.prototype.mQ = function(Y, R) {
        for (var V in Y)
            this.$_[V] = Y[V];
        var E = new I(O.E.z,!0);
        E.data = {
            e: O.U.oN,
            m: this.id,
            Q$: Y
        };
        R.f(E)
    }
    ;
    D.OJ.prototype.jU = function() {
        var Y = this.id;
        return Y == D.oE || Y == D.PF || Y == D.sx || Y == D.ly || Y == D.GN || Y == D.Na
    }
    ;
    D.OJ.prototype.finish = function(Y, R, V, E, r) {
        var K = Y.dR.length != 0 ? -1 - Y.dR[0] : Y.C[0], J = Y.t[K], t = K < 0 ? 1 : J.St, C = K < 0 ? Y.Rg[-K - 1] : t <= 0 ? null : t == 1 ? J.fp() : J.Ka(Y).r, c = C ? C.rect : J.rect, Q;
        if (this.jU() || !c.yU(this.N3)) {
            if (C == null) {
                if (this.jU())
                    J.O_();
                else {
                    var M = R.ov(this.N3)
                      , a = w.T(M.X() * 4);
                    w.Vj(J.buffer, J.rect, a, M);
                    J.buffer = a;
                    J.rect = M
                }
            } else
                C.O_();
            this.D(Y, c)
        }
        if (t <= 0) {
            Q = w.T(R.X() * 4);
            w.Vj(this.Hf, this.N3, Q, R)
        } else {
            Q = w.T(R.X());
            Q.fill(C.color);
            w.md(this.Hf, this.N3, Q, R)
        }
        this.we(Y, !1, V ? V : this.name, K, t, R, Q, E, r)
    }
    ;
    D.OJ.prototype.we = function(Y, R, V, E, r, K, J, t, C) {
        var c = J;
        if (r > 0) {
            c = w.T(K.X() * 4);
            D.OJ.c5(J, K, 0, c, K)
        }
        var M = new il(V,this);
        M.data = [{
            $: E,
            Av: r,
            V: K,
            f4: c
        }];
        if (t)
            M.data.ny = [Y.v, null];
        if (C)
            M.data.ny = [this.w$, Y.v];
        Y.Ug(M);
        if (R)
            this.$E(M.data, Y);
        else if (t)
            Y.v = null;
        ad.ic.WF(Y, M.data)
    }
    ;
    D.OJ.prototype.Zk = function(Y, R) {
        this.fF(Y, R, !1)
    }
    ;
    D.OJ.prototype.$E = function(Y, R) {
        this.fF(Y, R, !0)
    }
    ;
    D.OJ.prototype.fF = function(Y, R, V) {
        if (Y.e == "drawtemp") {
            var E = V ? Y.abk : Y.a0a
              , r = R.t[Y.$];
            r.gT.rB = E;
            r.Cm(R, 0, 0, R.v);
            r.D();
            R.IU = !0
        } else {
            ad.ic.fV(R, Y);
            if (Y.ny) {
                R.v = Y.ny[V ? 1 : 0];
                R.ha = !0
            }
        }
        R.D()
    }
    ;
    D.OJ.prototype.MZ = function(Y) {
        this.IE(Y, this.vT, this.WY.TY(), this.WY.Tf(), this.WY.KE());
        this.D(Y)
    }
    ;
    D.OJ.prototype.IE = function(Y, R, V, E, r) {
        var K = this.$_, J = Y.t[Y.C[0]], t = Y.dR.length != 0 ? Y.Rg[Y.dR[0]] : J.St <= 0 ? null : J.St == 1 ? J.fp() : J.Ka(Y).r, C = w.T(r.X() * 4), c, M = J.kx(0);
        if (t == null) {
            if (this.id == D.qv && R == "heal")
                w.Vj(J.buffer, J.rect, C, r);
            else
                w.Vj(this.Hf, this.N3, C, r);
            if (M) {
                c = w.T(r.X());
                w.vH(C, c, 3)
            }
        } else {
            D.OJ.c5(this.Hf, this.N3, t.color, C, r)
        }
        if (Y.v && R != "qselect") {
            var a = r.Cy(Y.v.rect)
              , Q = w.T(a.X() * 4);
            if (R == "copy") {
                var A = w.T(a.X());
                w.md(Y.v.channel, Y.v.rect, A, a);
                w.Vj(C, r, Q, a);
                w.Q.Sk(V, E, Q, a, A, a, 0, a, 1, !1)
            } else {
                w.Vj(V, E, Q, a);
                w.Yd(Y.v.channel, Y.v.rect, Q, a)
            }
            V = Q;
            E = a
        }
        if (R == "idraw" || R == "ierase") {
            if (this.Dm == null)
                this.Dm = w.T(this.N3.X());
            var p = this.$_.samp
              , v = this.ri.$h
              , W = p == 0 ? this.fQ : this.jc
              , n = W.x
              , $ = W.y
              , G = D.Mo.mk(this.Hf, this.N3, [W, new gv(n - 2,$), new gv(n + 2,$), new gv(n,$ - 2), new gv(n,$ + 2)]);
            if (p == 2)
                G = [[v >>> 16 & 255, v >>> 8 & 255, v >>> 0 & 255, 255]];
            var o = D.Mo.E2(C, r, this.fQ, G, this.$_.wconf)
              , B = w.T(r.X());
            w.md(this.Dm, this.N3, B, r);
            w.d2.ov(o, B, B);
            w.md(B, r, this.Dm, this.N3);
            w.Yd(B, r, V, E);
            R = R.slice(1)
        }
        if (R == "erase" && (ad.ic.cy(Y) != 16777215 || t))
            R = "draw";
        if (R == "draw")
            w.Q.D2(K.bmode, V, E, C, r, r, K.opacity);
        else if (R == "erase") {
            var L = w.T(r.X() * 4);
            w.Vj(V, E, L, r);
            if (t == null) {
                var u = w.T(r.X());
                w.vH(L, u, 3);
                w.sH(u, K.opacity);
                w.tb(u);
                w.Yd(u, r, C, r)
            } else {
                w.h3(L, 0, 4278190080);
                w.Q.D2("norm", L, r, C, r, r, K.opacity)
            }
        } else if (R == "clone" || R == "heal") {
            var y = this.J9()
              , S = this.PZ.clone();
            S.offset(y.x, y.y);
            var X = r.clone();
            X.Yl(1, 1);
            var N = w.T(X.X() * 4)
              , k = w.T(X.X());
            w.Vj(V, E, N, X);
            w.vH(N, k, 3);
            w.h3(N, 0);
            if (t == null) {
                w.Vj(this.Oc, S, N, X);
                var d = w.T(X.X());
                w.vH(N, d, 3);
                w.Wd(d, k)
            } else
                D.OJ.c5(this.Hf, S, t.color, N, X);
            if (R == "clone") {
                w.hL(k, N, 3);
                w.Q.D2(K.bmode, N, X, C, r, r, K.opacity)
            }
            if (R == "heal") {
                var P = k.slice(0);
                w.round(P, 20);
                var Z = w.T(X.X() * 4);
                if (this.id == D.qv)
                    w.Vj(J.buffer, J.rect, Z, X);
                else
                    w.Vj(this.Hf, this.N3, Z, X);
                w.Q.Sk(N, X, Z, X, P, X, 0, X, 1, !1);
                w.wV.ug(Z, P, X);
                w.Q.Sk(Z, X, C, r, k, X, 0, r, 1, !1)
            }
        } else if (R == "dodge" || R == "burn") {
            var N = w.T(r.X() * 4)
              , b = 1
              , q = 0
              , e = 0
              , g = 0;
            w.Vj(V, E, N, r);
            var s = r.X() * 4
              , _ = D.OJ.lg;
            if (this.oq) {
                if (R == "dodge")
                    R = "burn";
                else
                    R = "dodge"
            }
            var F = K.rng;
            if (R == "dodge") {
                q = [1 - b / 2, 1, 1 + b][F];
                e = [1, 1 / (1 + b), 1][F];
                g = [b / 2, 0, 0][F]
            }
            if (R == "burn") {
                q = [1 / (1 - b / 2), 1, 1 - b / 2][F];
                e = [1, 1 + b, 1][F];
                g = [-(b / 2) / (1 - b / 2), 0, 0][F]
            }
            for (var x = 0; x < s; x += 4) {
                var l = N[x + 3];
                C[x + 0] = _(C[x + 0], q, e, g, l);
                C[x + 1] = _(C[x + 1], q, e, g, l);
                C[x + 2] = _(C[x + 2], q, e, g, l)
            }
        } else if (R == "sponge" || R == "redeye") {
            var N = w.T(r.X() * 4)
              , k = w.T(r.X());
            w.Vj(V, E, N, r);
            w.vH(N, k, 3);
            w.Jc(C, N);
            var i = K.smode;
            if (this.oq)
                i = 1 - i;
            var aM = h2.WL("hue2");
            if (R == "sponge")
                hn.FZ(aM, 0, [0, [-50, 46][i], [6, 5][i]]);
            else
                hn.FZ(aM, 1, {
                    eA: [265, 305, 25, 55],
                    lj: [0, -90, -70]
                });
            var H = f8.P7("hue2", aM);
            f8.tI(H, N, N, r);
            w.Q.Sk(N, r, C, r, k, r, 0, r, 1, !1)
        } else if (R == "copy")
            w.Vj(V, E, C, r);
        else if (R == "sheal") {
            var N = w.T(r.X() * 4)
              , k = w.T(r.X());
            w.Vj(V, E, N, r);
            w.vH(N, k, 3);
            N.fill(0);
            w.VO.ug(this.Oc, this.PZ, k, N, r);
            if (this.$_.sfrom == 0)
                w.Vj(N, r, C, r);
            else {
                w.Vj(this.Hf, this.N3, C, r);
                w.hL(k, N, 3);
                w.Q.D2("norm", N, r, C, r, r, 1)
            }
        } else if (R == "qselect") {
            var iP = this.N3
              , hq = iP.d
              , iG = iP.b
              , h = hq * iG
              , dw = this.WY.TY()
              , G = this.Hf
              , eK = D.Ls.FP
              , k = eK.Ot;
            k.fill(128);
            for (var x = 0; x < h; x++) {
                var f9 = dw[x << 2]
                  , gn = dw[(x << 2) + 3];
                if (gn == 255 && (f9 == 0 || f9 == 255))
                    k[x] = f9
            }
            k[0] = k[hq - 1] = 0;
            k[(iG >>> 1) * hq] = k[(iG >>> 1) * hq + hq - 1] = 0;
            D.Gb.kM(eK, !0);
            Y.v = {
                rect: iP,
                channel: eK.v.slice(0)
            };
            Y.ha = !0
        }
        if (t == null) {
            if (M)
                w.hL(c, C, 3);
            w.Vj(C, r, J.buffer, J.rect)
        } else
            D.OJ.n0(C, r, t)
    }
    ;
    D.OJ.J9 = function() {
        return null
    }
    ;
    D.OJ.lg = function(Y, R, V, E, r) {
        var K = Y * (1 / 255)
          , J = E + R * Math.pow(K, V)
          , t = Math.round(J * r + K * (255 - r));
        return Math.max(0, Math.min(255, t))
    }
    ;
    D.OJ.c5 = function(Y, R, V, E, r) {
        var K = w.T(r.X());
        K.fill(V);
        w.md(Y, R, K, r);
        w.h3(E, 4278190080);
        w.MH(K, E)
    }
    ;
    D.OJ.n0 = function(Y, R, V) {
        var E = w.T(R.X());
        w.f6(Y, E);
        w.md(E, R, V.channel, V.rect)
    }
    ;
    D.Ls = function(Y, R, V) {
        D.R0.call(this, Y, R, V);
        this.$_ = {
            gm: "front",
            Sf: 0,
            Ht: {
                eO: 0,
                x: 3,
                y: 2
            },
            as: [16, !0, !0]
        };
        this.Qn = new gv(-1,-1);
        this.eL = new gv(-1,-1);
        this._z = "default";
        this.zk = null;
        this.acp = !0;
        this.TZ = !1;
        this.ZR = !1;
        this.oq = !1;
        this.Bq = 0;
        this.TC = 0;
        this.SR = !1;
        this.z$ = null;
        this.II = null;
        this.jr = !1
    }
    ;
    D.Ls.prototype = new D.R0;
    D.Ls.prototype.aky = function() {
        var Y = this.$_
          , R = [{
            front: 0,
            union: 1,
            difference: 2,
            intersection: 3
        }[Y.gm], Y.Sf];
        if (this.id == D.bc)
            R.push(Y.as);
        return R
    }
    ;
    D.Ls.prototype.a4L = function(Y, R, V) {
        var E = this.$_;
        E.gm = ["front", "union", "difference", "intersection"][Y[0]];
        E.Sf = Y[1];
        E.as = Y[2];
        var r = new I(O.E.z,!0);
        r.data = {
            e: O.U.oN,
            m: this.id,
            PH: E
        };
        V.f(r)
    }
    ;
    D.Ls.FP = {
        key: ""
    };
    D.Ls.X_ = function(Y, R) {
        var V = {
            CM: Y,
            eQ: {
                classID: "setd",
                null: {
                    t: "obj ",
                    v: [{
                        t: "prop",
                        v: {
                            classID: "Chnl",
                            keyID: "fsel"
                        }
                    }]
                }
            }
        };
        if (R)
            V.eQ.T = R;
        return V
    }
    ;
    D.Ls.IA = function(Y, R) {
        return D.Ls.X_("set", {
            t: "Objc",
            v: {
                classID: Y,
                Top: {
                    t: "UntF",
                    v: {
                        type: "#Pxl",
                        val: R.y
                    }
                },
                Left: {
                    t: "UntF",
                    v: {
                        type: "#Pxl",
                        val: R.x
                    }
                },
                Btom: {
                    t: "UntF",
                    v: {
                        type: "#Pxl",
                        val: R.y + R.b
                    }
                },
                Rght: {
                    t: "UntF",
                    v: {
                        type: "#Pxl",
                        val: R.x + R.d
                    }
                }
            }
        })
    }
    ;
    D.Ls.h8 = function(Y, R) {
        var V = []
          , E = []
          , K = "set";
        for (var x = 0; x < Y.length; x += 2) {
            V.push(Y[x]);
            E.push(Y[x + 1])
        }
        var r = {
            t: "Objc",
            v: {
                classID: "Plgn",
                Pts: {
                    t: "ObAr",
                    v: {
                        classID: "Pnt",
                        arr: [{
                            id: "Hrzn",
                            type: "UnFl",
                            uID: "#Pxl",
                            arr: V
                        }, {
                            id: "Vrtc",
                            type: "UnFl",
                            uID: "#Pxl",
                            arr: E
                        }]
                    }
                }
            }
        };
        if (R)
            K = {
                front: "set",
                union: "addTo",
                difference: "subtractFrom",
                intersection: "interfaceWhite"
            }[R];
        return D.Ls.X_(K, r)
    }
    ;
    D.Ls.a7A = function(Y, R) {
        var V = {
            t: "Objc",
            v: {
                classID: "Pnt",
                Hrzn: {
                    t: "UntF",
                    v: {
                        type: "#Pxl",
                        val: Y.x
                    }
                },
                Vrtc: {
                    t: "UntF",
                    v: {
                        type: "#Pxl",
                        val: Y.y
                    }
                }
            }
        }
          , E = D.Ls.X_("set", V);
        E.eQ.Tlrn = {
            t: "long",
            v: R[0]
        };
        E.eQ.AntA = {
            t: "bool",
            v: R[1]
        };
        E.eQ.Cntg = {
            t: "bool",
            v: R[2]
        };
        return E
    }
    ;
    D.Ls.C$ = function(Y) {
        return D.Ls.X_("set", {
            t: "enum",
            v: {
                Ordn: Y ? "Al" : "None"
            }
        })
    }
    ;
    D.Ls.ahT = function(Y, R, V) {
        var E = {
            classID: "null"
        };
        if (Y != "border")
            E.selectionModifyEffectAtCanvasBounds = {
                t: "bool",
                v: V
            };
        var r = {
            e: "By",
            c: "By",
            b: "Wdth",
            f: "Rds",
            s: "Rds"
        }[Y[0]];
        E[r] = {
            t: "UntF",
            v: {
                type: "#Pxl",
                val: R
            }
        };
        return {
            CM: Y,
            eQ: E
        }
    }
    ;
    D.Ls.FB = function(Y, R, V) {
        var E = {
            t: "obj ",
            v: [{
                t: "prop",
                v: {
                    classID: "Chnl",
                    keyID: "fsel"
                }
            }]
        }
          , r = {
            t: "obj ",
            v: [{
                t: "Enmr",
                v: {
                    classID: "Chnl",
                    typeID: "Chnl",
                    enum: R
                }
            }]
        };
        if (V)
            r.v.push({
                t: "name",
                v: {
                    classID: "Lyr",
                    val: V
                }
            });
        var K = [{
            classID: "null",
            null: E,
            T: r
        }, {
            classID: "null",
            null: r,
            T: E
        }, {
            classID: "null",
            null: r,
            From: E
        }, {
            classID: "null",
            null: r,
            With: E
        }]
          , J = ["set", "add", "subtract", "interfaceIconFrameDimmed"];
        return {
            CM: J[Y],
            eQ: K[Y]
        }
    }
    ;
    D.Ls.NO = function(Y, R) {
        var V = new I(O.E.z,!0);
        V.data = {
            e: O.U.KZ,
            jR: fG.Eo
        };
        if (!R.Ql)
            Y.f(V);
        V.data = {
            e: O.U.KZ,
            jR: fG.ef
        };
        if (!R.YX.kv)
            Y.f(V)
    }
    ;
    D.Ls.prototype.Vl = function(Y, R, V, E, r) {
        D.Ls.NO(R, r);
        this.zk = R;
        var K = Y.e, J, t, C = new gE(0,0,V.d,V.b), gN = !1, aK, dL, aQ, d3;
        if (K == "fromAction") {
            var c = Y.e2
              , M = c.CM
              , a = c.eQ
              , Q = a ? a.selectionModifyEffectAtCanvasBounds : null
              , A = Q && Q.v;
            if (M == "inverse") {
                if (V.v == null) {
                    alert("No selection!");
                    return
                }
                J = {
                    channel: w.T(C.X()),
                    rect: C
                };
                w.md(V.v.channel, V.v.rect, J.channel, J.rect);
                w.tb(J.channel);
                t = [7, 2]
            } else if (M == "expand") {
                var p = a.By.v.val
                  , v = V.v.rect.clone();
                v.Yl(p, p);
                var W = w.T(v.X())
                  , n = w.T(v.X());
                w.md(V.v.channel, V.v.rect, n, v);
                w.style.stroke(n, W, v, p);
                J = {
                    channel: W,
                    rect: v
                };
                t = [7, 4]
            } else if (M == "contract") {
                var p = a.By.v.val
                  , $ = V.v.rect.clone();
                $.Yl(1, 1);
                if (!A)
                    $ = $.Cy(C);
                var n = w.T($.X())
                  , G = w.T(n.length);
                w.md(V.v.channel, V.v.rect, n, $);
                w.tb(n);
                w.style.stroke(n, G, $, p);
                w.tb(G);
                J = {
                    channel: G,
                    rect: $
                };
                w.O_(J);
                t = [7, 5]
            } else if (M == "border") {
                var p = a.Wdth.v.val;
                J = D.Ls.s8(V.v, p / 2, p / 2);
                t = [7, 9]
            } else if (M == "feather" || M == "smoothness") {
                var p = a.Rds.v.val;
                J = D.Ls.ps(V.v, p, M == "smoothness", C, A);
                t = M == "feather" ? [7, 6] : [19, 3, 0]
            } else {
                var o = a.null.v;
                function B(ef) {
                    var hv = ef.Top.v.val
                      , bq = ef.Left.v.val;
                    return new gE(bq,hv,ef.Rght.v.val - bq,ef.Btom.v.val - hv)
                }
                function L(ef) {
                    var hv = ef[0].arr
                      , eh = ef[1].arr
                      , aB = {
                        P: [],
                        R: []
                    };
                    for (var x = 0; x < hv.length; x++) {
                        aB.R.push(x == 0 ? "M" : "L");
                        aB.P.push(hv[x], eh[x])
                    }
                    aB.R.push("Z");
                    return aB
                }
                var u = ["set", "addTo", "subtractFrom", "interfaceWhite"].indexOf(M)
                  , y = a.T ? a.T.v : null;
                if (y && y.classID == "Elps") {
                    J = this.dY(D.sT.pY(B(y)));
                    t = [10, 4]
                } else if (y && y.classID == "Rctn") {
                    var S = B(y);
                    J = {
                        channel: w.T(S.X()),
                        rect: S.clone()
                    };
                    J.channel.fill(255);
                    t = [10, 15]
                } else if (y && y.classID == "ObSl") {
                    var S = B(y)
                      , X = D.Ls.FP
                      , N = X.rect
                      , k = X.Ot
                      , d = N.d
                      , P = N.b
                      , Z = S.x - N.x
                      , s = Z + S.d - 1
                      , _ = Math.max(Z, Math.min(s, Z + s >>> 1))
                      , b = S.y - N.y
                      , q = b + S.b - 1
                      , e = Math.max(b, Math.min(q, b + q >>> 1))
                      , g = Math.max(Z, 0)
                      , F = Math.min(s, d)
                      , l = Math.max(b, 0)
                      , i = Math.min(q, P);
                    k.fill(128);
                    if (0 <= b)
                        for (var aM = g; aM < F; aM++)
                            k[b * d + aM] = 0;
                    if (q < P)
                        for (var aM = g; aM < F; aM++)
                            k[q * d + aM] = 0;
                    if (0 <= Z)
                        for (var H = l; H < i; H++)
                            k[H * d + Z] = 0;
                    if (s < d)
                        for (var H = l; H < i; H++)
                            k[H * d + s] = 0;
                    var iP = D.$V.nh
                      , hq = Math.round(S.d * iP)
                      , iG = Math.round(S.b * iP);
                    for (var aM = Math.max(0, _ - hq); aM < Math.min(d, _ + hq); aM++)
                        k[e * d + aM] = 255;
                    for (var H = Math.max(0, e - iG); H < Math.min(P, e + iG); H++)
                        k[H * d + _] = 255;
                    D.Gb.kM(X, !0);
                    J = {
                        channel: X.v.slice(0),
                        rect: N.clone()
                    };
                    t = [10, 44]
                } else if (y && y.classID == "Plgn") {
                    J = this.dY(L(y.Pts.v.arr));
                    t = [10, 9]
                } else if (y && y.classID == "Pnt") {
                    J = D.Mo.AX(V, new gv(y.Hrzn.v.val,y.Vrtc.v.val), [a.Tlrn.v, a.AntA == null || a.AntA.v, a.Cntg == null || a.Cntg.v]);
                    t = [10, 12]
                } else if (y && y.Ordn == "None") {
                    J = null;
                    t = [7, 1]
                } else if (y && y.Ordn == "Al") {
                    J = {
                        channel: w.T(C.X()),
                        rect: C
                    };
                    J.channel.fill(255);
                    t = [7, 0]
                } else if (y && y[0] && y[0].v.keyID == "WrPt") {
                    var h = {
                        e: "frompath",
                        b3: [-1, 0, 0]
                    };
                    this.Vl(h, R, V, E, r);
                    return
                } else {
                    var dw = ["set", "add", "subtract", "interfaceIconFrameDimmed"].indexOf(M), eK = M == "set" ? y : o, f9 = eK[0].v.enum, h;
                    if (f9 == "Trsp" || f9 == "Msk" || f9 == "vectorMask") {
                        var gn = V.C[0];
                        if (eK.length == 2)
                            gn = cA.Hv(V, eK[1]);
                        var d$ = ["Trsp", "Msk", "vectorMask"].indexOf(f9);
                        h = {
                            e: "fromlayer",
                            b3: [gn, d$, dw]
                        }
                    } else {
                        if (eK[0].t == "name") {
                            var gn = 0;
                            for (var x = 0; x < V.Rg.length; x++)
                                if (V.Rg[x].name == eK[0].v.val)
                                    gn = x;
                            h = {
                                e: "fromchannel",
                                b3: [-5 - gn, 0, dw]
                            }
                        } else {
                            var dJ = ["RGB", "Rd", "Grn", "Bl"].indexOf(f9);
                            h = {
                                e: "fromchannel",
                                b3: [-1 - dJ, 0, dw]
                            }
                        }
                    }
                    this.Vl(h, R, V, E, r);
                    return
                }
                if (a.Fthr)
                    J = D.Ls.ps(J, a.Fthr.v.val, !1);
                if (M != "set" && V.v != null)
                    J = w.d2.wz(J, V.v, ["", "union", "difference", "intersection"][u])
            }
            if (M == "expand" || M == "contract")
                if (!A && !C.contains(J.rect)) {
                    var br = J.rect.Cy(C)
                      , hE = w.T(br.X());
                    w.md(J.channel, J.rect, hE, br);
                    J.channel = hE;
                    J.rect = br
                }
        }
        if (K == "qmask") {
            gN = !0;
            var b9 = V.Xo()
              , ap = new gE(0,0,V.d,V.b);
            if (b9) {
                J = b9.rect.yU(ap) && w._w(b9.channel, 255) ? null : {
                    rect: b9.rect.clone(),
                    channel: b9.channel.slice(0)
                };
                aK = b9
            } else {
                J = null;
                dL = new j.QG;
                dL.color = 0;
                dL.name = "Quick Mask";
                dL.rw = !0;
                if (V.v) {
                    dL.rect = V.v.rect.clone();
                    dL.channel = V.v.channel.slice(0)
                } else {
                    dL.rect = ap;
                    dL.channel = w.T(dL.rect.X());
                    dL.channel.fill(255)
                }
            }
            t = [6, 6, 1]
        }
        if (K == "setsel") {
            J = Y.v;
            t = Y._O
        }
        if (K == "crange") {
            var fS = Y.yk
              , bG = Y.en;
            J = D.Ls._D(V, fS, bG, Y.fq);
            t = [7, 8];
            fS = {
                t: "Objc",
                v: {
                    classID: "LbCl",
                    Lmnc: {
                        t: "doub",
                        v: fS.Nz
                    },
                    A: {
                        t: "doub",
                        v: fS.o
                    },
                    B: {
                        t: "doub",
                        v: fS.O
                    }
                }
            };
            bG = {
                t: "Objc",
                v: {
                    classID: "LbCl",
                    Lmnc: {
                        t: "doub",
                        v: bG.Nz
                    },
                    A: {
                        t: "doub",
                        v: bG.o
                    },
                    B: {
                        t: "doub",
                        v: bG.O
                    }
                }
            };
            this.track({
                CM: "colorRange",
                eQ: {
                    __name: "Color Range",
                    classID: "ClrR",
                    Fzns: {
                        t: "long",
                        v: Math.round(Y.fq * 200)
                    },
                    Mnm: fS,
                    Mxm: bG,
                    colorModel: {
                        t: "long",
                        v: 0
                    }
                }
            })
        }
        if (K == "fromlayer" || K == "fromchannel" || K == "frompath") {
            var cH = Y.b3[0]
              , d$ = Y.b3[1]
              , u = Y.b3[2];
            if (K == "fromlayer") {
                if (cH == null)
                    cH = V.C[0];
                var bq = V.t[cH];
                if (d$ == 0) {
                    var hO = bq.rect
                      , gD = bq.buffer;
                    if (hO.uD())
                        return;
                    var ds = w.T(gD.length >>> 2);
                    w.vH(gD, ds, 3);
                    J = {
                        channel: ds,
                        rect: hO.clone()
                    }
                } else {
                    if (bq.r == null)
                        bq.Qd(V);
                    var cR = d$ == 1 ? bq.fp() : bq.r;
                    J = D.Ls.oP(cR, C)
                }
                this.track(D.Ls.FB(u, ["Trsp", "Msk"][d$], bq.getName()))
            } else if (K == "frompath") {
                var ah = V.PD()
                  , cu = ah[1]
                  , ah = ah[0];
                if (cH == null)
                    if (ah.length == 0 || cu.length == 0)
                        return;
                var dP = ah[cu[0]];
                if (cH != null)
                    for (var x = 0; x < ah.length; x++)
                        if (ah[x].wt == cH)
                            dP = ah[x];
                var cR = dP.add.vmsk.fp()
                  , i6 = cR.Tf();
                if (i6.X() == 0)
                    return;
                var ds = cR.bG();
                if (Y.b3[3] != null)
                    this.acp = Y.b3[3];
                if (this.acp) {
                    ds = ds.slice(0);
                    w.round(ds)
                }
                aQ = [JSON.stringify(V.JU), JSON.stringify(V.LX)];
                d3 = ["[]", "[]"];
                V.JU = [];
                V.LX = [];
                J = {
                    channel: ds,
                    rect: i6
                }
            } else {
                if (cH == null)
                    cH = D.Ls.Tx(V);
                J = D.Ls.cR(V, cH)
            }
            if (u != 0 && V.v)
                J = w.d2.wz(J, V.v, ["", "union", "difference", "intersection"][u]);
            t = [14, 11]
        }
        if (J != null && w._w(J.channel, 0)) {
            J = null;
            t = [7, 1]
        }
        if (J)
            w.O_(J);
        var aZ = new il(t,this);
        aZ.data = {
            e: "changesel",
            w$: V.v,
            o6: J,
            Xo: gN,
            aif: aK,
            ajr: dL,
            kR: aQ,
            a5U: d3
        };
        V.Ug(aZ);
        this.$E(aZ.data, V)
    }
    ;
    D.Ls.Tx = function(Y) {
        var R = 0;
        if (Y.dR.length != 0)
            R = -5 - Y.dR[0];
        else if (JSON.stringify(Y.a.r1) == "[1,1,1]")
            R = -1;
        else
            R = -2 - Y.a.r1.indexOf(1);
        return R
    }
    ;
    D.Ls.cR = function(Y, R) {
        var V, E = new gE(0,0,Y.d,Y.b);
        if (-5 < R & R < 0) {
            var r = -R - 1
              , K = Y.tL()
              , J = w.T(E.X());
            if (r == 0)
                w.f6(K, J);
            else
                w.vH(K, J, r - 1);
            V = {
                channel: J,
                rect: E.clone()
            }
        }
        if (R < -4) {
            V = D.Ls.oP(Y.Rg[-R - 5], E)
        }
        return V
    }
    ;
    D.Ls.oP = function(Y, R) {
        var V, E;
        if (Y.VJ() == 0) {
            E = Y.Tf();
            if (E.X() == 0)
                return;
            V = Y.bG()
        } else {
            E = R;
            V = w.T(E.X());
            Y.pk(E, V)
        }
        return {
            channel: V,
            rect: E
        }
    }
    ;
    D.Ls.prototype.cm = function(Y) {
        return this.SR || Y.tc && this.id != D.Zw
    }
    ;
    D.Ls.prototype.$a = function(Y, R, V) {
        var E = new I(R,!0);
        E.data = V;
        Y.f(E)
    }
    ;
    D.Ls.prototype.am = function(Y, R) {
        var V = new I(O.E.z,!0);
        V.data = {
            e: O.U.u$,
            Cz: R
        };
        Y.f(V)
    }
    ;
    D.Ls.prototype.Tf = function(Y, R, V) {
        R = Y.v == null || this.Bq > 1 || this.TC > 1 ? R : null;
        var E = this.Qn
          , r = this.eL;
        if (V) {
            E.x = Math.max(0, Math.min(Y.d, E.x));
            E.y = Math.max(0, Math.min(Y.b, E.y));
            r.x = Math.max(0, Math.min(Y.d, r.x));
            r.y = Math.max(0, Math.min(Y.b, r.y))
        }
        var K = D.z0.th(E, r, R, !0, this.$_.Ht)
          , J = K[0].x
          , t = K[0].y;
        return new gE(J,t,K[1].x - J,K[1].y - t)
    }
    ;
    D.Ls.prototype.K_ = function(Y, R, V, E, r) {
        if (this.zx())
            return;
        this.zk = R;
        this.TZ = !1;
        this.ZR = E.i(m.Ms);
        this.oq = E.i(m.yx);
        this.Bq = this.ZR ? 0 : 1;
        this.TC = this.oq ? 0 : 1;
        this.Qn = Y.a.Cf(r.x, r.y);
        this.Qn = D.RT.wW(Y, this.Qn, V);
        if (this.y1(Y, this.Qn, E)) {
            this.SR = !0;
            this.z$ = Y.v.rect.clone();
            return
        }
        this.BB(Y, V, E, r);
        Y.a.Ob = new gE
    }
    ;
    D.Ls.prototype.y1 = function(Y, R, V) {
        var E = V.i(m.Ms)
          , r = V.i(m.yx);
        if (Y.v && !E && !r && this.$_.gm == "front")
            return w.ja(R, Y.v.channel, Y.v.rect);
        return !1
    }
    ;
    D.Ls.prototype.NZ = function(Y, R, V, E, r) {
        this.zk = R;
        if (this.jr)
            return;
        var K = Y.a.Cf(r.x, r.y);
        if (gv.VN(this.Qn, K) * Y.a.k > 5)
            this.TZ = !0;
        if (E.i(m.dL)) {
            if (this.II == null)
                this.II = new gv(K.x - this.Qn.x,K.y - this.Qn.y);
            this.Qn.x = K.x - this.II.x;
            this.Qn.y = K.y - this.II.y
        } else
            this.II = null;
        this.eL = K;
        if (!this.SR)
            this.eL = D.RT.wW(Y, this.eL, V);
        if (this.y1(Y, this.eL, E))
            this.am(R, "move");
        else
            this.am(R, this._z);
        if (this.SR) {
            var J = this.z$.clone();
            J.x += this.eL.x - this.Qn.x;
            J.y += this.eL.y - this.Qn.y;
            var t = D.RT.CR(Y, J, V);
            Y.v.rect.x = Math.round(this.eL.x - this.Qn.x + this.z$.x + t[0]);
            Y.v.rect.y = Math.round(this.eL.y - this.Qn.y + this.z$.y + t[1]);
            Y.ha = !0;
            D.RT.cF(Y, J, t);
            return
        }
        this.Wz(Y, V, E, r);
        if (Y.a.Ob)
            Y.a.Ob = this.Tf(Y, E)
    }
    ;
    D.Ls.prototype.zx = function() {
        return !1
    }
    ;
    D.Ls.prototype.Eb = function(Y, R, V, E, r) {
        Y.a.Ob = null;
        this.eL = Y.a.Cf(r.x, r.y);
        this.eL = D.RT.wW(Y, this.eL, V);
        if (this.SR) {
            this.SR = !1;
            if (this.eL.yU(this.Qn) && this.Nh() == "front") {
                this.$a(R, O.E.io, D.Ls.C$());
                return
            }
            this.s$(Y, this.z$, Y.v.rect.clone());
            if (Y != null && Y.S.VE) {
                Y.S.VE = null;
                Y.eR = !0
            }
            return
        }
        this.$k(Y, V, E, r);
        D.Ls.NO(R, V)
    }
    ;
    D.Ls.prototype.s$ = function(Y, R, V) {
        var E = Y.Io();
        if (E != null && E.m == this && E.data.e == "movesel") {} else {
            E = new il([7, 7],this);
            E.data = {
                e: "movesel",
                jj: R
            };
            Y.Ug(E)
        }
        E.data.Aj = V;
        this.$E(E.data, Y)
    }
    ;
    D.Ls.prototype.qo = function(Y, R, V, E, r) {
        this.jr = !0
    }
    ;
    D.Ls.prototype.og = function(Y, R, V, E, r) {
        var K = new I(O.E.z,!0);
        K.data = {
            e: O.U.oN,
            m: this.id,
            PN: r,
            HR: Y,
            gL: V
        };
        R.f(K);
        this.jr = !1
    }
    ;
    D.Ls.prototype.U7 = function(Y, R, V, E) {
        var r = E.i(m.Ms)
          , K = E.i(m.yx);
        if (this.TZ) {
            if (this.Bq == 0 && !r)
                this.Bq++;
            if (this.Bq == 1 && r)
                this.Bq++;
            if (this.TC == 0 && !K)
                this.TC++;
            if (this.TC == 1 && K)
                this.TC++
        }
        if (Y != null && Y.v != null) {
            var J = E.ro();
            if (J.x != 0 || J.y != 0) {
                var t = Y.v.rect.clone();
                t.x += J.x;
                t.y += J.y;
                this.s$(Y, Y.v.rect.clone(), t)
            }
        }
        var C = D.Ls.$K(this.$_.gm, r, K)
          , c = new I(O.E.z,!0);
        c.data = {
            e: O.U.oN,
            m: this.id,
            gm: C
        };
        R.f(c)
    }
    ;
    D.Ls.prototype.finish = function(Y, R, V, E) {
        var r = Y.v
          , K = this.getSelection(Y, R, V, E);
        if (K == null)
            K = D.Ls.C$();
        else {
            var J = this.$_.Sf
              , t = this.Nh();
            if (J != 0)
                K.eQ.Fthr = {
                    t: "UntF",
                    v: {
                        type: "#Pxl",
                        val: J
                    }
                };
            if (t != "front" && t != "xor")
                K.CM = {
                    union: "addTo",
                    difference: "subtractFrom",
                    intersection: "interfaceWhite"
                }[t]
        }
        this.$a(this.zk, O.E.io, K);
        this.Qn.Fb(-1, -1);
        this.eL.Fb(-1, -1)
    }
    ;
    D.Ls.prototype.Nh = function() {
        return D.Ls.$K(this.$_.gm, this.ZR, this.oq)
    }
    ;
    D.Ls.$K = function(Y, R, V) {
        if (R)
            Y = "union";
        if (V)
            Y = "difference";
        if (R && V)
            Y = "intersection";
        return Y
    }
    ;
    D.Ls.prototype.getSelection = function(Y, R, V, E) {
        return null
    }
    ;
    D.Ls.prototype.BB = function(Y, R, V, E) {}
    ;
    D.Ls.prototype.Wz = function(Y, R, V, E) {}
    ;
    D.Ls.prototype.$k = function(Y, R, V, E) {}
    ;
    D.Ls.prototype.Zk = function(Y, R) {
        var V = Y.e;
        if (V == "changesel")
            R.v = Y.w$;
        if (V == "movesel")
            R.v.rect = Y.jj;
        if (Y.Xo) {
            if (Y.aif) {
                R.dR = [R.Rg.length];
                R.Rg.push(Y.aif)
            } else {
                R.Rg.pop();
                R.dR = []
            }
        }
        if (Y.kR) {
            R.JU = JSON.parse(Y.kR[0]);
            R.LX = JSON.parse(Y.kR[1])
        }
        R.ha = !0
    }
    ;
    D.Ls.prototype.$E = function(Y, R) {
        var V = Y.e;
        if (V == "changesel")
            R.v = Y.o6;
        if (V == "movesel")
            R.v.rect = Y.Aj;
        if (Y.Xo) {
            if (Y.ajr) {
                R.dR = [R.Rg.length];
                R.Rg.push(Y.ajr)
            } else {
                R.Rg.pop();
                R.dR = []
            }
        }
        if (Y.kR) {
            R.JU = JSON.parse(Y.a5U[0]);
            R.LX = JSON.parse(Y.a5U[1])
        }
        R.ha = !0
    }
    ;
    D.Ls.prototype.c8 = function(Y) {
        this.$_ = Y
    }
    ;
    D.Ls.prototype.dY = function(Y) {
        var R = w.H.LB(Y.P);
        if (R.uD())
            return null;
        var V = O.w("canvas", "");
        V.width = R.d;
        V.height = R.b;
        var E = V.getContext("2d");
        E.beginPath();
        E.translate(-R.x, -R.y);
        Typr.U.pathToContext({
            cmds: Y.R,
            crds: Y.P
        }, E);
        E.closePath();
        E.fill();
        var r = w.T(R.X())
          , K = E.getImageData(0, 0, V.width, V.height);
        w.vH(K.data, r, 3);
        return {
            rect: R,
            channel: r
        }
    }
    ;
    D.Ls.ps = function(Y, R, V, E, r) {
        if (V)
            R = Math.round(R * .7);
        var K = Math.ceil(2.6 * R)
          , J = Y.rect.clone();
        J.Yl(K, K);
        if (E && !r)
            J = J.Cy(E);
        var t = w.T(J.X())
          , C = w.T(t.length);
        w.md(Y.channel, Y.rect, C, J);
        w.Ue.dh(C, t, J, R);
        if (V) {
            var c = t.length;
            for (var x = 0; x < c; x++) {
                var M = (t[x] - 128) * R * 2.5;
                t[x] = Math.max(0, Math.min(255, Math.round(128 + M)))
            }
        }
        return {
            channel: t,
            rect: J
        }
    }
    ;
    D.Ls.s8 = function(Y, R, V) {
        var E = Math.max(1, Math.ceil(V))
          , r = Y.rect.clone();
        r.Yl(E, E);
        var K = r.X()
          , J = {
            channel: w.T(K),
            rect: r
        }
          , t = w.T(K);
        w.md(Y.channel, Y.rect, t, J.rect);
        if (V != 0)
            w.style.stroke(t, J.channel, J.rect, V);
        else
            w.Jc(t, J.channel);
        var C = w.T(K);
        w.tb(t);
        if (R != 0)
            w.style.stroke(t, C, J.rect, R);
        else
            w.Jc(t, C);
        w.d2.Cy(J.channel, C, J.channel);
        return J
    }
    ;
    D.Ls._D = function(Y, R, V, E) {
        var r = new gE(0,0,Y.d,Y.b)
          , K = Y.tL();
        if (Y.v) {
            var J = Y.v.rect.Cy(r)
              , t = w.T(J.X() * 4);
            w.Vj(K, r, t, J);
            r = J;
            K = t
        }
        var C = r.X()
          , c = w.T(C)
          , M = 1 / E;
        for (var x = 0; x < C; x++) {
            var a = x << 2
              , Q = w.Rp(K[a], K[a + 1], K[a + 2])
              , A = w.oH(Q, R, V, E, M);
            c[x] = K[a + 3] * A
        }
        return {
            rect: r,
            channel: c
        }
    }
    ;
    D.kE = function() {
        D.OJ.call(this, [10, 18], D.Xj, "tools/blur");
        this.vT = "copy"
    }
    ;
    D.kE.prototype = new D.OJ;
    D.kE.prototype.K_ = function(Y, R, V, E, r) {
        var K = E.i(m.yx) ? g6.c2 : g6.Xj;
        this.Fx(Y, V, E, r, this.$_.strn, K);
        if (this.WY == null)
            return;
        this.MZ(Y)
    }
    ;
    D.kE.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.Pe = function() {
        D.OJ.call(this, [10, 0], D.RR, "tools/brush");
        this.vT = "draw"
    }
    ;
    D.Pe.prototype = new D.OJ;
    D.Pe.prototype.K_ = function(Y, R, V, E, r) {
        if (this.__(E, R, r))
            return;
        this.Fx(Y, V, E, r, this.$_.flow);
        if (this.WY == null)
            return;
        this.MZ(Y)
    }
    ;
    D.Pe.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.AB = function() {
        D.OJ.call(this, [10, 42], D.hl, "tools/crepl");
        this.vT = "idraw";
        this.$_.bmode = "hue "
    }
    ;
    D.AB.prototype = new D.OJ;
    D.AB.prototype.K_ = function(Y, R, V, E, r) {
        if (this.__(E, R, r))
            return;
        this.Fx(Y, V, E, r, this.$_.flow);
        if (this.WY == null)
            return;
        this.MZ(Y)
    }
    ;
    D.AB.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.RU = function() {
        D.OJ.call(this, [10, 43], D.Na, "tools/redeye");
        this.$_.smode = 0;
        this.vT = "redeye"
    }
    ;
    D.RU.prototype = new D.OJ;
    D.RU.prototype.K_ = function(Y, R, V, E, r) {
        this.Fx(Y, V, E, r, this.$_.flow);
        if (this.WY == null)
            return;
        this.MZ(Y)
    }
    ;
    D.RU.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.WW = function() {
        D.OJ.call(this, [10, 38], D.Pu, "tools/pencil");
        this.vT = "draw"
    }
    ;
    D.WW.prototype = new D.OJ;
    D.WW.prototype.K_ = function(Y, R, V, E, r) {
        if (this.__(E, R, r))
            return;
        this.Fx(Y, V, E, r, this.$_.flow);
        if (this.WY == null)
            return;
        this.MZ(Y)
    }
    ;
    D.WW.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.Ew = function() {
        D.OJ.call(this, [10, 22], D.ly, "tools/burn");
        this.vT = "burn"
    }
    ;
    D.Ew.prototype = new D.OJ;
    D.Ew.prototype.K_ = function(Y, R, V, E, r) {
        this.Fx(Y, V, E, r, this.$_.expo / Math.E);
        if (this.WY == null)
            return;
        this.MZ(Y)
    }
    ;
    D.Ew.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.Qi = function(Y, R, V) {
        D.OJ.call(this, Y == "" ? null : Y ? Y : [10, 1], R ? R : D.Kx, V ? V : "tools/clone");
        this.vT = "clone";
        this.aD = null;
        this.q = null
    }
    ;
    D.Qi.prototype = new D.OJ;
    D.Qi.prototype.K_ = function(Y, R, V, E, r) {
        var K = this.$_
          , J = K.alt[0];
        if (E.i(m.yx) || E.i(m.i1) || J) {
            this.aD = Y.a.Cf(r.x, r.y);
            this.q = null;
            if (J)
                this.mQ({
                    alt: [!1]
                }, R);
            this.ex(Y);
            this.P2(V, E, Y, r);
            return
        }
        if (this.aD == null) {
            alert(em.get([15, 7, 0]));
            return
        }
        this.P2(V, E);
        this.Fx(Y, V, E, r, this.$_.flow);
        if (this.WY == null)
            return;
        this.q = this.ba(Y.a.Cf(r.x, r.y));
        this.MZ(Y)
    }
    ;
    D.Qi.prototype.ba = function(Y) {
        var R = this.q;
        if (R == null || !this.$_.algnd)
            R = new gv(Math.round(Y.x - this.aD.x),Math.round(Y.y - this.aD.y));
        return R
    }
    ;
    D.Qi.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null) {
            if (this.aD != null)
                this.P2(V, E, Y, r);
            return
        }
        if (!r.tc || this.aD == null)
            return;
        this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.Qi.prototype.J9 = function() {
        return this.q
    }
    ;
    D.Gp = function(Y, R, V) {
        D.R0.call(this, Y, R, V);
        this.ZA = {
            Yc: {
                eO: 0,
                x: 0,
                y: 0
            },
            mS: !1
        };
        this.Z8 = null;
        this.cursor = null;
        this.a7q = 0;
        this.WT = null;
        this.Qn = null;
        this.mb = null
    }
    ;
    D.Gp.prototype = new D.R0;
    D.Gp.prototype.rT = function() {
        return this.Z8 != null
    }
    ;
    D.Gp.prototype.cm = function(Y) {
        return this.Z8 && this.Z8.ne()
    }
    ;
    D.Gp.prototype.K_ = function(Y, R, V, E, r) {
        this.WT = r;
        var K = Y.a.Cf(r.x, r.y);
        K.x = Math.round(K.x);
        K.y = Math.round(K.y);
        var J = this.ZA.Yc
          , t = J.eO != 0 ? J.x / J.y : null;
        if (this.Z8)
            this.Z8.K_(Y, V, E, K, t, !1);
        else
            this.Qn = D.RT.wW(Y, K, V)
    }
    ;
    D.Gp.prototype.la = function(Y, R) {
        var V = [Y.x, Y.y, Y.x + Y.d, Y.y, Y.x + Y.d, Y.y + Y.b, Y.x, Y.y + Y.b];
        return new ge(V,!0,!1,this.id == D.Am,!0,R,this.id == D.Am ? 2 : 0,this.id == D.Am)
    }
    ;
    D.Gp.prototype.P2 = function(Y) {
        var R = new I(O.E.z,!0);
        R.data = {
            e: O.U.u$,
            Cz: this.cursor
        };
        Y.f(R)
    }
    ;
    D.Gp.prototype.enable = function(Y, R, V, E) {
        this.cursor = "crosshair";
        this.P2(R);
        if (Y != null && Y.v) {
            var r = this.ZA.Yc = {
                eO: 0,
                x: 0,
                y: 0
            };
            this.$a(R, O.E.z, {
                e: O.U.oN,
                m: this.id,
                LN: !1,
                Ht: r
            });
            this.c8({
                Qh: "cropby",
                afr: 3
            }, R, Y, E, V)
        }
    }
    ;
    D.Gp.prototype.NZ = function(Y, R, V, E, r) {
        this.WT = r;
        var K = Y.a.Cf(r.x, r.y);
        if (!r.tc) {
            var J = "crosshair";
            if (this.Z8) {
                var t = this.Z8.L4(K, Y.a.k);
                if (t)
                    J = t;
                else
                    J = "default"
            }
            if (J != this.cursor) {
                this.cursor = J;
                this.P2(R)
            }
        }
        if (this.Z8)
            this.Z8.NZ(Y, V, E, K);
        else if (this.Qn) {
            var C = D.z0.th(this.Qn, D.RT.wW(Y, K, V), E, !0, this.ZA.Yc)
              , c = C[0].x
              , M = C[0].y
              , a = this.mb = new gE(c,M,C[1].x - c,C[1].y - M);
            Y.S.ZW = w.H.se(a);
            Y.eR = !0;
            D.R0.hu(r.x + 10, r.y - 10, a, Y, V)
        }
    }
    ;
    D.Gp.prototype.Eb = function(Y, R, V, E, r) {
        this.WT = r;
        if (this.Z8 == null) {
            if (this.Qn) {
                var K = this.mb;
                if (K) {
                    var J = this.ZA.Yc;
                    this.Z8 = this.la(K, J.eO != 0);
                    this.Z8.sw(Y, V);
                    this.mb = null;
                    this.$a(R, O.E.z, {
                        e: O.U.oN,
                        m: this.id,
                        LN: !0
                    })
                }
                this.Qn = null;
                Y.S.po = [];
                Y.eR = !0
            }
            return
        }
        var t = Y.a.Cf(r.x, r.y);
        this.Z8.Eb(Y, V, E, t);
        this.$a(R, O.E.z, {
            e: O.U.oN,
            m: this.id,
            LN: !0
        });
        var C = this.Z8.JG();
        if (Math.abs(C[0] - C[4]) < 2 || Math.abs(C[1] - C[5]) < 2) {
            this.disable(Y, R, null, E);
            return
        }
        if (Date.now() - this.a7q < 200 && this.Z8.mW(t)) {
            this.WK(Y, V);
            this.disable(Y, R, V, E);
            return
        }
        this.a7q = Date.now()
    }
    ;
    D.Gp.prototype.U7 = function(Y, R, V, E) {
        var r = this.Z8;
        if (r == null || this.WT && this.WT.tc)
            return;
        if (E.i(m.ZI)) {
            this.WK(Y, V);
            this.disable(Y, R, V, E)
        } else if (E.i(m.TP)) {
            this.disable(Y, R, V, E)
        } else
            r.U7(Y, V, E)
    }
    ;
    D.Gp.cp = function(Y, R) {
        if (R == null)
            R = [!0, !0, !0, !0];
        var V = {
            classID: "trim",
            trimBasedOn: {
                t: "enum",
                v: {
                    trimBasedOn: ["topLeftPixelColor", "bottomRightPixelColor", "Trns"][Y]
                }
            }
        }
          , E = ["Top", "Left", "Btom", "Rght"];
        for (var x = 0; x < 4; x++)
            V[E[x]] = {
                t: "bool",
                v: R[x]
            };
        return {
            CM: "trim",
            eQ: V
        }
    }
    ;
    D.Gp.Tt = function(Y, R, V, E) {
        var r = {
            classID: "null"
        };
        if (E != null) {
            r.Wdth = {
                t: "UntF",
                v: {
                    type: "#Pxl",
                    val: Y
                }
            };
            r.Hght = {
                t: "UntF",
                v: {
                    type: "#Pxl",
                    val: R
                }
            };
            r.Intr = {
                t: "enum",
                v: {
                    Intp: ["Nrst", "Blnr", "bicubicSharper"][E]
                }
            }
        }
        if (V != null)
            r.Rslt = {
                t: "UntF",
                v: {
                    type: "#Rsl",
                    val: V
                }
            };
        return {
            CM: "imageSize",
            eQ: r
        }
    }
    ;
    D.Gp.ju = function(Y, R, V) {
        if (V == null)
            V = 4;
        var E = Math.floor(V / 3)
          , r = V % 3;
        return {
            CM: "canvasSize",
            eQ: {
                classID: "null",
                Wdth: {
                    t: "UntF",
                    v: {
                        type: "#Pxl",
                        val: Y
                    }
                },
                Hght: {
                    t: "UntF",
                    v: {
                        type: "#Pxl",
                        val: R
                    }
                },
                Hrzn: {
                    t: "enum",
                    v: {
                        HrzL: ["Left", "Cntr", "Rght"][r]
                    }
                },
                Vrtc: {
                    t: "enum",
                    v: {
                        VrtL: ["Top", "Cntr", "Btom"][E]
                    }
                }
            }
        }
    }
    ;
    D.Gp.prototype.Vl = function(Y, R, V, E, r) {
        var K = new gE(0,0,V.d,V.b), J = [11, 3], t = V.zX, C = V.d / 2, c = V.b / 2, M = 1, q, e;
        if (Y.e == "fromAction") {
            var a = Y.e2, Q = a.CM, A = a.eQ, p = V.d / V.b, v = A.Wdth ? A.Wdth.v.val : -1, W = A.Hght ? A.Hght.v.val : -1, t = A.Rslt ? A.Rslt.v.val : null, n = A.Wdth ? A.Wdth.v.type : A.Hght ? A.Hght.v.type : -1, $ = 1, G;
            if (Q == "imageSize") {
                if (A.Intr) {
                    if (A.Intr.v.Intp == "Nrst")
                        $ = 0;
                    if (A.Intr.v.Intp == "bicubicSharper")
                        $ = 2;
                    if (v == -1 && W == -1) {
                        var o = t / V.zX;
                        v = Math.round(V.d * o);
                        W = Math.round(V.b * o)
                    } else if (n == "#Prc") {
                        if (v != -1)
                            v = Math.round(V.d * v / 100);
                        if (W != -1)
                            W = Math.round(V.b * W / 100)
                    }
                    if (A.CnsP && A.CnsP.v) {
                        if (v == -1)
                            v = Math.round(W * p);
                        if (W == -1)
                            W = Math.round(v / p)
                    }
                } else {
                    if (n == "#Prc")
                        t = Math.round(V.zX / ((v != -1 ? v : W) / 100));
                    else if (n == -1)
                        t = Math.round(t);
                    else
                        throw "e";
                    v = V.d;
                    W = V.b
                }
                G = {
                    e: "imgsize",
                    Zx: v,
                    hb: W,
                    Nj: t,
                    Y4: $
                }
            } else if (Q == "canvasSize") {
                if (v == -1)
                    v = V.d;
                if (W == -1)
                    W = V.b;
                if (A.Rltv && A.Rltv.v == !0) {
                    if (A.Wdth)
                        v += V.d;
                    if (A.Hght)
                        W += V.b
                }
                var B = A.Vrtc ? A.Vrtc.v.VrtL : "Cntr"
                  , L = A.Hrzn ? A.Hrzn.v.HrzL : "Cntr";
                G = {
                    e: "canvsize",
                    Zx: v,
                    hb: W,
                    Zv: 3 * ["Top", "Cntr", "Btom"].indexOf(B) + ["Left", "Cntr", "Rght"].indexOf(L)
                }
            } else if (Q == "revealAll") {
                G = {
                    e: "revealAll"
                }
            } else if (Q == "trim") {
                var u = {
                    topLeftPixelColor: 0,
                    bottomRightPixelColor: 1,
                    Trns: 2
                }[A.trimBasedOn.v.trimBasedOn];
                if (u == null)
                    throw "e";
                var y = ["Top", "Left", "Btom", "Rght"]
                  , S = [!0, !0, !0, !0];
                for (var x = 0; x < 4; x++)
                    if (A[y[x]])
                        S[x] = A[y[x]].v;
                G = {
                    e: "trim",
                    a4X: u,
                    Ht: S
                }
            }
            if (G)
                this.Vl(G, R, V, E, r);
            return
        } else if (Y.e == "imgsize") {
            K = new gE(0,0,Y.Zx,Y.hb);
            if (Y.Nj)
                t = Y.Nj;
            M = Y.Y4
        } else if (Y.e == "canvsize") {
            var X = Y.Zv != null ? Y.Zv : 0;
            K = new gE(0,0,Y.Zx,Y.hb);
            var N = V.d - Y.Zx
              , k = V.b - Y.hb
              , d = Math.round(N / 2)
              , P = Math.round(k / 2);
            if (X == 1 || X == 4 || X == 7)
                K.x = d;
            if (X == 2 || X == 5 || X == 8)
                K.x = N;
            if (X == 3 || X == 4 || X == 5)
                K.y = P;
            if (X == 6 || X == 7 || X == 8)
                K.y = k;
            if (Y.q) {
                K.x = Y.q.x;
                K.y = Y.q.y
            }
        } else if (Y.e == "rot" && (Y.G + 2 * Math.PI) % (Math.PI / 2) != 0) {
            var Z = w.H.se(K).P
              , s = new bF;
            s.translate(-C, -c);
            s.rotate(Y.G);
            s.translate(C, c);
            w.H.g(Z, s, Z);
            K = w.H.LB(Z)
        } else if (Y.e == "rot" && Y.G != Math.PI && Y.G != -Math.PI) {
            K = new gE(C - V.b / 2,c - V.d / 2,V.b,V.d);
            if ((V.d + V.b & 1) == 1) {
                C = Math.floor(C);
                c = Math.floor(c);
                K = new gE(C - Math.floor(V.b / 2),c - Math.floor(V.d / 2),V.b,V.d);
                if ((V.d & 1) == 1 && Y.G != -Math.PI / 2)
                    K.y--;
                if ((V.b & 1) == 1 && Y.G == -Math.PI / 2)
                    K.x--
            }
        } else if (Y.e == "trim") {
            J = [11, 12, 0];
            var _ = V.tL()
              , b = new gE(0,0,V.d,V.b);
            K = w.m7(_, b, Y.a4X, Y.Ht);
            if (K.uD())
                K = b
        } else if (Y.e == "cropbysel") {
            J = [11, 12, 1];
            K = V.v.rect.clone()
        } else if (Y.e == "revealAll") {
            J = [11, 12, 2];
            K = V.root.Tf(V, !0)
        }
        if (Y.e == "imgsize" || Y.e == "rot" || Y.e == "scl") {
            var g = new bF;
            if (Y.e == "imgsize") {
                J = [11, 10];
                g.scale(Y.Zx / V.d, Y.hb / V.b)
            } else {
                g.translate(-C, -c);
                if (Y.e == "rot")
                    g.rotate(Y.G);
                if (Y.e == "scl")
                    g.scale(Y.G.x, Y.G.y);
                g.translate(C, c);
                J = Y._O
            }
            e = w.J.tu(g);
            q = this.mm(V, r, !0, e, M)
        } else if (Y.e == "auto-align") {
            if (V.C.length < 2) {
                alert("Select two or more layers.");
                return
            }
            var F = [];
            for (var x = 0; x < V.C.length; x++) {
                var l = V.t[V.C[x]];
                if (!l.Il() && l.add.SoLd == null) {
                    alert("Unsupported layer selected.");
                    return
                }
                if (l.rect.uD()) {
                    alert("Empty layer selected.");
                    return
                }
                F.push([l.buffer, l.rect])
            }
            var i = w.QZ.ue(F, 0);
            if (i == null) {
                alert("No similarity found.");
                return
            }
            e = i[1];
            var aM = V.C;
            V.C = V.C.slice(1);
            q = this.mm(V, r, !1, i.slice(1), M);
            V.C = aM;
            K = V.root.Tf(V, !0);
            J = [2, 10, 1]
        }
        var H = new gE(0,0,V.d,V.b);
        if (!K.uD() && (!K.yU(H) || q != null)) {
            var iP = new il(J,this);
            iP.data = {
                jj: H,
                Aj: K,
                a80: V.zX,
                Nj: t,
                li: q,
                xP: e,
                p_: D.Gp.sX(V, K, H, q != null)
            };
            V.Ug(iP);
            this.$E(iP.data, V)
        }
    }
    ;
    D.Gp.sX = function(Y, R, V, E) {
        if (Y.dO.length == 0)
            return null;
        var r = JSON.stringify(Y.dO)
          , K = JSON.parse(r);
        D.QW.a0t(K, R, V, E);
        K = JSON.stringify(K);
        return [r, K]
    }
    ;
    D.Gp.prototype.mm = function(Y, R, V, E, r, K) {
        var J = {
            t: [],
            tR: null,
            $N: null
        };
        if (V) {
            for (var x = 0; x < Y.t.length; x++)
                J.t.push(x);
            for (var x = 0; x < Y.Pf.length; x++)
                J.t.push(-1 - x);
            for (var x = 0; x < Y.Rg.length; x++)
                J.t.push(-1e3 - x)
        } else
            J.t = Y.C.slice(0);
        J.tR = D._.vF(Y, J.t, !0);
        D._.zE(Y, R, J.t, J.tR, r, E, null, !0, K);
        J.$N = D._.vF(Y, J.t, !0);
        return J
    }
    ;
    D.Gp.prototype.$E = function(Y, R) {
        if (Y.Nj)
            R.zX = Y.Nj;
        if (Y.p_)
            R.dO = JSON.parse(Y.p_[1]);
        if (Y.li) {
            D.Gp.lo(R, w.J.P4(Y.xP));
            D._.YZ(R, Y.li.t, Y.li.$N)
        }
        D.Gp.mS(R, Y.Aj)
    }
    ;
    D.Gp.prototype.Zk = function(Y, R) {
        if (Y.a80)
            R.zX = Y.a80;
        if (Y.p_)
            R.dO = JSON.parse(Y.p_[0]);
        var V = Y.jj.clone();
        V.offset(-Y.Aj.x, -Y.Aj.y);
        D.Gp.mS(R, V);
        if (Y.Yi)
            R.a.q.m3(Y.Yi);
        R.EY();
        if (Y.li) {
            var E = w.J.P4(Y.xP).clone();
            E.tb();
            D.Gp.lo(R, E);
            D._.YZ(R, Y.li.t, Y.li.tR)
        }
    }
    ;
    D.Gp.lo = function(Y, R) {
        for (var x = 0; x < Y.t.length; x++) {
            var V = Y.t[x];
            if (V.add.artb == null)
                continue;
            var E = w.H.se(V.GP()).P;
            w.H.g(E, R, E);
            var r = w.H.LB(E);
            V.HN(r)
        }
    }
    ;
    D.Gp.mS = function(Y, R) {
        Y.d = R.d;
        Y.b = R.b;
        var V = [];
        for (var x = 0; x < Y.t.length; x++)
            V.push(x);
        D.RT.Zg(Y, V, null, -R.x, -R.y);
        for (var x = 0; x < Y.t.length; x++) {
            Y.t[x].Qd(Y)
        }
        Y.EY();
        Y.a.q.Fb(0, 0);
        if (Y.v)
            Y.v.rect.offset(-R.x, -R.y);
        for (var x = 0; x < 2; x++)
            for (var E = 0; E < Y.fO[x].length; E++)
                Y.fO[x][E] -= x == 0 ? R.x : R.y;
        for (var x = 0; x < Y.Rg.length; x++)
            Y.Rg[x].rect.offset(-R.x, -R.y)
    }
    ;
    D.Gp.prototype.c8 = function(Y, R, V, E, r) {
        if (Y.Qh == "commit") {
            this.WK(V, r);
            this.disable(V, R, null, E)
        } else if (Y.Qh == "cancel") {
            this.disable(V, R, null, E)
        }
        var K = null
          , J = new gE(0,0,V.d,V.b)
          , t = this.ZA.Yc;
        if (Y.Qh == "config") {
            this.ZA = Y.ZA;
            t = this.ZA.Yc;
            if (this.ZA.mS != null)
                return;
            if (V == null)
                return;
            K = J;
            if (t.eO == 1) {
                var C = t.x / t.y;
                K.b = Math.round(K.d / C)
            }
            if (t.eO == 2) {
                K.d = t.x;
                K.b = t.y
            }
            K.x = Math.round((V.d - K.d) / 2);
            K.y = Math.round((V.b - K.b) / 2)
        }
        if (Y.Qh == "cropby") {
            if (V == null)
                return;
            var c = Y.afr, K;
            if (c == 0)
                K = V.root.Tf(V, !0);
            if (c == 1) {
                if (V.C.length == 0)
                    alert("No layer is selected.");
                else {
                    var M = V.root.qk(V.C[0]);
                    K = M.Tf(V, !0)
                }
            }
            if (c == 2) {
                if (V.C.length == 0)
                    alert("No layer is selected.");
                else {
                    K = w.m7(V.tL(), J, 0);
                    if (K.uD())
                        K = J.clone()
                }
            }
            if (c == 3) {
                if (V.v != null)
                    K = V.v.rect;
                else
                    alert("There is no selection.")
            }
        }
        if (K && K.uD())
            K = null;
        if (K != null) {
            this.Z8 = this.la(K, t.eO != 0);
            this.Z8.sw(V, r);
            this.$a(R, O.E.z, {
                e: O.U.oN,
                m: this.id,
                LN: !0
            })
        }
    }
    ;
    D.Gp.prototype.WK = function(Y, R) {
        var V = this.Z8.JG(), E = w.H.LB(V), r = this.ail(Y, V), K = !1, J = this.ZA.Yc, t = this.ZA.mS, C = J.x, c = J.y, Q;
        if (this.id == D.OV && J.eO == 2 && r.X() != C * c) {
            r = new gE(r.x,r.y,C,c);
            K = !0
        }
        var M = w.J.k4(V, r);
        M = w.J.tb(M);
        var a = w.J.w9(M)
          , A = Math.atan2(M[3], M[0]);
        if (Math.abs(A) > 1e-9 || !a || K || t)
            Q = this.mm(Y, R, !0, M, 1, E);
        var p = new il(this.name,this)
          , v = new gE(0,0,Y.d,Y.b);
        p.data = {
            jj: v,
            Aj: r,
            li: Q,
            xP: M,
            Yi: Y.a.q.clone(),
            p_: D.Gp.sX(Y, r, v, !1)
        };
        Y.Ug(p);
        this.$E(p.data, Y)
    }
    ;
    D.Gp.prototype.ail = function(Y, R) {
        var V = w.J.k4(R)
          , E = w.J.w9(V)
          , r = w.J.P4(V)
          , K = r.Wr
          , J = r.W8
          , t = Math.atan2(r.O, r.o);
        r.rotate(t);
        var C = new gE(K,J,r.o,r.Xa);
        if (!E) {
            function c(G, x, o) {
                var B = G[x] - G[o]
                  , L = G[x + 1] - G[o + 1];
                return Math.sqrt(B * B + L * L)
            }
            var M = c(R, 0, 2), a = c(R, 4, 6), Q = Math.max(M, a), A = c(R, 2, 4), p = c(R, 6, 0), v = Math.max(A, p), W = D.Gp.a83(R, Y.d / 2, Y.b / 2), n, $;
            if (isNaN(W) || W == Infinity || W == -Infinity || Math.min(W, 1 / W) < .1)
                W = (M + a) / (A + p);
            if (Q / v > W) {
                n = Q * 1;
                $ = n / W
            } else {
                $ = v * 1;
                n = $ * W
            }
            C.d = n;
            C.b = $
        }
        C.x = Math.round(C.x);
        C.y = Math.round(C.y);
        C.d = Math.round(C.d);
        C.b = Math.round(C.b);
        return C
    }
    ;
    D.Gp.a83 = function(Y, R, V) {
        var E = Y[0] - R
          , r = Y[1] - V
          , K = Y[2] - R
          , J = Y[3] - V
          , t = Y[6] - R
          , C = Y[7] - V
          , c = Y[4] - R
          , M = Y[5] - V
          , a = ((r - M) * t - (E - c) * C + E * M - r * c) / ((J - M) * t - (K - c) * C + K * M - J * c)
          , Q = ((r - M) * K - (E - c) * J + E * M - r * c) / ((C - M) * K - (t - c) * J + t * M - C * c)
          , A = -((Q * C - r) * (a * J - r) + (Q * t - E) * (a * K - E)) / ((Q - 1) * (a - 1));
        function p(W) {
            return W * W
        }
        var v = Math.sqrt((p(a - 1) + p(a * J - r) / A + p(a * K - E) / A) / (p(Q - 1) + p(Q * C - r) / A + p(Q * t - E) / A));
        if (a == 1 && Q == 1)
            v = Math.sqrt((p(J - r) + p(K - E)) / (p(C - r) + p(t - E)));
        return v
    }
    ;
    D.Gp.prototype.disable = function(Y, R, V, E) {
        if (Y == null)
            return;
        if (this.Z8)
            this.Z8.clear(Y);
        this.Z8 = null;
        this.$a(R, O.E.z, {
            e: O.U.oN,
            m: this.id,
            LN: !1
        })
    }
    ;
    D.Gp.prototype.$a = function(Y, R, V, E) {
        var r = new I(R,!0);
        r.data = V;
        if (E)
            r.m = E;
        Y.f(r)
    }
    ;
    D.IS = function() {
        D.Gp.call(this, [10, 2], D.OV, "tools/rcrop")
    }
    ;
    D.IS.prototype = new D.Gp;
    D.WU = function() {
        D.Gp.call(this, [10, 39], D.Am, "tools/pcrop")
    }
    ;
    D.WU.prototype = new D.Gp;
    D.My = function() {
        D.OJ.call(this, [10, 21], D.sx, "tools/dodge");
        this.vT = "dodge"
    }
    ;
    D.My.prototype = new D.OJ;
    D.My.prototype.K_ = function(Y, R, V, E, r) {
        this.Fx(Y, V, E, r, this.$_.expo / Math.PI);
        if (this.WY == null)
            return;
        this.MZ(Y)
    }
    ;
    D.My.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.tf = function() {
        D.OJ.call(this, [10, 3], D.PF, "tools/eraser");
        this.vT = "erase"
    }
    ;
    D.tf.prototype = new D.OJ;
    D.tf.prototype.K_ = function(Y, R, V, E, r) {
        this.Fx(Y, V, E, r, this.$_.flow);
        if (this.WY == null)
            return;
        this.MZ(Y)
    }
    ;
    D.tf.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        var K = this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.aI = function() {
        D.OJ.call(this, [10, 45], D.ajK, "tools/beraser");
        this.vT = "ierase"
    }
    ;
    D.aI.prototype = new D.OJ;
    D.aI.prototype.K_ = function(Y, R, V, E, r) {
        if (this.__(E, R, r))
            return;
        this.Fx(Y, V, E, r, this.$_.flow);
        if (this.WY == null)
            return;
        this.MZ(Y)
    }
    ;
    D.aI.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.M8 = function() {
        D.Ls.call(this, [10, 15], D.OX, "tools/rselect");
        this._z = "crosshair"
    }
    ;
    D.M8.prototype = new D.Ls;
    D.M8.prototype.Wz = function(Y, R, V, E) {
        if (!E.tc || !this.TZ)
            return;
        var r = this.Tf(Y, V, !0);
        Y.S.ZW = w.H.se(r);
        Y.eR = !0;
        D.R0.hu(E.x + 10, E.y - 10, r, Y, R)
    }
    ;
    D.M8.prototype.$k = function(Y, R, V, E) {
        Y.S.ZW = null;
        Y.S.po = [];
        Y.eR = !0;
        this.finish(Y, R, V, E)
    }
    ;
    D.M8.prototype.getSelection = function(Y, R, V, E) {
        if (this.Qn.yU(this.eL) || !this.TZ)
            return null;
        var r = this.Tf(Y, V, !0);
        if (r.uD())
            return null;
        return D.Ls.IA("Rctn", r)
    }
    ;
    D.sT = function() {
        D.Ls.call(this, [10, 4], D.ajb, "tools/eselect");
        this._z = "crosshair"
    }
    ;
    D.sT.prototype = new D.Ls;
    D.sT.prototype.Wz = function(Y, R, V, E) {
        if (!E.tc || !this.TZ)
            return;
        var r = this.Tf(Y, V);
        Y.S.ZW = D.sT.pY(r);
        Y.eR = !0;
        D.R0.hu(E.x + 10, E.y - 10, r, Y, R)
    }
    ;
    D.sT.prototype.$k = function(Y, R, V, E) {
        Y.S.ZW = null;
        Y.S.po = [];
        Y.eR = !0;
        this.finish(Y, R, V, E)
    }
    ;
    D.sT.prototype.getSelection = function(Y, R, V, E) {
        if (this.Qn.yU(this.eL) || !this.TZ)
            return null;
        var r = this.Tf(Y, V);
        if (!r.Wo(new gE(0,0,Y.d,Y.b)))
            return null;
        return D.Ls.IA("Elps", r)
    }
    ;
    D.sT.pY = function(Y) {
        var R = Y.x
          , V = Y.y
          , E = Y.x + Y.d
          , r = Y.y + Y.b
          , K = (R + E) / 2
          , J = (V + r) / 2
          , t = (R - E) / 2
          , C = (V - r) / 2
          , c = .5522848
          , M = {
            P: [K, J - C],
            R: ["M", "C", "C", "C", "C"]
        };
        M.P.push(K + c * t, J - C, K + t, J - c * C, K + t, J);
        M.P.push(K + t, J + c * C, K + c * t, J + C, K, J + C);
        M.P.push(K - c * t, J + C, K - t, J + c * C, K - t, J);
        M.P.push(K - t, J - c * C, K - c * t, J - C, K, J - C);
        return M
    }
    ;
    D.Hp = function() {
        D.R0.call(this, [10, 5], D.$n, "tools/eyedropper");
        this.r9 = !1;
        this.aG = 1
    }
    ;
    D.Hp.prototype = new D.R0;
    D.Hp.prototype.cm = function(Y) {
        return Y.tc
    }
    ;
    D.Hp.prototype.Vl = function(Y, R, V, E, r) {
        if (Y.e == "pickhere")
            this.iQ(V, R, r, E, Y.a2i)
    }
    ;
    D.Hp.prototype.K_ = function(Y, R, V, E, r) {
        this.r9 = !0;
        this.iQ(Y, R, V, E, r)
    }
    ;
    D.Hp.prototype.NZ = function(Y, R, V, E, r) {
        if (this.r9)
            this.iQ(Y, R, V, E, r)
    }
    ;
    D.Hp.prototype.Eb = function(Y, R, V, E, r) {
        this.r9 = !1
    }
    ;
    D.Hp.prototype.iQ = function(Y, R, V, E, r) {
        var K = D.Hp.s3(Y, r, this.aG)
          , J = new I(O.E.z);
        J.data = {
            e: O.U.KZ,
            jR: fG.Iu,
            zN: 0,
            G: K
        };
        R.f(J)
    }
    ;
    D.Hp.s3 = function(Y, R, V) {
        var E = Y.a.Cf(R.x, R.y)
          , r = Math.floor(E.x)
          , K = Math.floor(E.y)
          , J = (V - 1) / 2
          , t = Math.max(0, r - J)
          , C = Math.max(0, K - J)
          , c = Math.min(Y.d, r + J + 1)
          , M = Math.min(Y.b, K + J + 1)
          , a = (c - t) * (M - C)
          , Q = Y.tL()
          , A = 0
          , p = 0
          , v = 0;
        for (var r = t; r < c; r++)
            for (var K = C; K < M; K++) {
                var x = 4 * (K * Y.d + r);
                A += Q[x];
                p += Q[x + 1];
                v += Q[x + 2]
            }
        A = Math.round(A / a);
        p = Math.round(p / a);
        v = Math.round(v / a);
        return A << 16 | p << 8 | v
    }
    ;
    D.Hp.prototype.c8 = function(Y) {
        this.aG = Y.aG
    }
    ;
    D.AK = function() {
        D.R0.call(this, [10, 6], D.a8H, "tools/gradient");
        this.$_ = {
            W: JSON.parse(g9.Ta.up).v,
            qm: "Lnr",
            RM: !1,
            ahe: !1,
            aa1: "norm",
            TA: 1
        };
        this.mg = !1;
        this.Om = null
    }
    ;
    D.AK.prototype = new D.R0;
    D.AK.prototype.enable = function(Y, R, V, E) {
        var r = new I(O.E.z,!0);
        r.data = {
            e: O.U.u$,
            Cz: "default"
        };
        R.f(r)
    }
    ;
    D.AK.prototype.c8 = function(Y) {
        this.$_ = Y.jR
    }
    ;
    D.AK.prototype.K_ = function(Y, R, V, E, r) {
        if (!Y.J3())
            return;
        this.Om = Y.a.Cf(r.x, r.y);
        this.Om = D.RT.wW(Y, this.Om, V);
        this.mg = !0
    }
    ;
    D.AK.prototype.NZ = function(Y, R, V, E, r) {
        if (!this.mg)
            return;
        var K = Y.a.Cf(r.x, r.y);
        K = D.RT.wW(Y, K, V);
        if (E.i(m.Ms))
            K = D.AK.JN(this.Om, K);
        Y.S.ZW = {
            P: [this.Om.x, this.Om.y, K.x, K.y],
            R: ["M", "L"]
        };
        Y.S.ho = [this.Om.x, this.Om.y, K.x, K.y];
        Y.eR = !0
    }
    ;
    D.AK.prototype.Eb = function(Y, R, V, E, r) {
        if (!this.mg)
            return;
        var K = Y.t[Y.C[0]]
          , J = Y.a.Cf(r.x, r.y);
        J = D.RT.wW(Y, J, V);
        if (E.i(m.Ms))
            J = D.AK.JN(this.Om, J);
        var t = J.O2(this.Om)
          , C = gv.oD(this.Om, J, .5)
          , c = Math.atan2(t.y, t.x)
          , M = gv.VN(this.Om, J)
          , a = Math.sin(c)
          , Q = Math.cos(c);
        if (M > 2) {
            var A;
            if (Y.v)
                A = Y.v.rect;
            else
                A = new gE(0,0,Y.d,Y.b);
            var p = w.T(A.X() * 4)
              , v = this.$_
              , W = v.qm;
            if (W != "Lnr") {
                M *= 2;
                C = this.Om
            }
            w.W.JB(v.W, p, A, [Q * 1 / M, a * 1 / M, -a * 1 / M, Q * 1 / M], C.x, C.y, v.RM, g9.W.types.indexOf(W), V.B9, V.$h, null, v.ahe);
            var n = Math.round(v.TA * 256)
              , $ = p.length;
            if (n != 256)
                for (var x = 0; x < $; x += 4)
                    p[x + 3] = p[x + 3] * n >>> 8;
            var G = new I(O.E.K);
            G.m = D.PF;
            G.data = {
                e: "fillBMP",
                SS: p,
                Yf: v.aa1,
                _O: this.name
            };
            R.f(G)
        }
        Y.S.ZW = null;
        Y.S.ho = [];
        Y.eR = !0;
        this.mg = !1
    }
    ;
    D.AK.JN = function(Y, R) {
        if (Y.yU(R))
            return Y;
        var V = R.x - Y.x
          , E = R.y - Y.y
          , r = Math.abs(V)
          , K = Math.abs(E);
        if (r > K)
            K = r / 2 > K ? 0 : r;
        if (K > r)
            r = K / 2 > r ? 0 : K;
        r = V > 0 ? r : -r;
        K = E > 0 ? K : -K;
        var J = Math.sqrt(V * V + E * E) / Math.sqrt(r * r + K * K);
        return new gv(Y.x + r * J,Y.y + K * J)
    }
    ;
    D.AK.E0 = function(Y, R, V, E, r, K, J) {
        if (J == null)
            J = O.w("canvas", "");
        var t = J.getContext("2d");
        J.width = R;
        J.height = V;
        var C = new gE(0,0,R,V)
          , c = w.T(R * V * 4);
        w.jC(c, R, V, 4);
        var M = Math.sin(E)
          , a = Math.cos(E)
          , Q = w.T(R * V * 4);
        w.W.JB(Y, Q, C, [a * 1 / R, M * 1 / R, -M * 1 / V, a * 1 / V], R / 2, V / 2, !1, 0, r, K);
        w.Q.D2("norm", Q, C, c, C, C, 1);
        var A = t.getImageData(0, 0, R, V);
        w.Jc(c, A.data);
        t.putImageData(A, 0, 0);
        return J.toDataURL()
    }
    ;
    D.AK.alO = function(Y, R, V) {
        var E = JSON.parse(JSON.stringify(Y));
        for (var x = 0; x < E.Clrs.v.length; x++) {
            var r = E.Clrs.v[x].v
              , K = r.Type.v.Clry;
            if (K == "UsrS")
                continue;
            var J = K == "FrgC" ? R : V;
            r.Type.v.Clry = "UsrS";
            r.Clr = {
                t: "Objc",
                v: w.W.gD({
                    h: J >> 16 & 255,
                    l: J >> 8 & 255,
                    O: J & 255
                })
            }
        }
        return E
    }
    ;
    D.lq = function() {
        D.R0.call(this, [10, 7], D.E5, "tools/hand");
        this._P = new gv(0,0);
        this.iw = null
    }
    ;
    D.lq.prototype = new D.R0;
    D.lq.prototype.Vl = function(Y, R, V, E, r) {
        var K = Y.e;
        if (K == "setcls") {
            V.a.r1 = Y.r1;
            V.eR = !0;
            V.tz = !0
        }
        if (K == "scroll" && !E.i(m.yx)) {
            if (E.i(m.sV))
                D.lq.DO(V, V.a.q.x - Y.t6.y, V.a.q.y - Y.t6.x);
            else
                D.lq.DO(V, V.a.q.x - Y.t6.x, V.a.q.y - Y.t6.y)
        }
    }
    ;
    D.lq.prototype.enable = function(Y, R, V, E) {
        this.iw = null;
        var r = new I(O.E.z,!0);
        r.data = {
            e: O.U.u$,
            Cz: "grab"
        };
        R.f(r)
    }
    ;
    D.lq.prototype.K_ = function(Y, R, V, E, r) {
        this.iw = Y.a.q.clone();
        this._P.Fb(r.x, r.y)
    }
    ;
    D.lq.prototype.NZ = function(Y, R, V, E, r) {
        if (!r.tc)
            return;
        if (this.iw == null)
            this.K_(Y, R, V, E, r);
        D.lq.DO(Y, this.iw.x + (r.x - this._P.x), this.iw.y + (r.y - this._P.y))
    }
    ;
    D.lq.prototype.Eb = function(Y, R, V, E, r) {
        this.iw = null
    }
    ;
    D.lq.DO = function(Y, R, V) {
        var E = Y.a.k;
        if (Y.d * E < Y.a.GS.d && Y.b * E < Y.a.GS.b)
            Y.a.q.Fb(0, 0);
        else {
            Y.a.q.x = R;
            Y.a.q.y = V
        }
        Y.tz = !0
    }
    ;
    D.K4 = function() {
        D.R0.call(this, [10, 47], D.a1$, "tools/rview");
        this._P = new gv(0,0);
        this.fQ = null;
        this.a4e = null
    }
    ;
    D.K4.prototype = new D.R0;
    D.K4.prototype.enable = function(Y, R, V, E) {
        this.iw = null;
        var r = new I(O.E.z,!0);
        r.data = {
            e: O.U.u$,
            Cz: "grab"
        };
        R.f(r);
        if (Y)
            this.ia(Y, R)
    }
    ;
    D.K4.prototype.disable = function(Y, R, V, E, r) {
        if (Y)
            this.ia(Y, R)
    }
    ;
    D.K4.prototype.NL = function(Y, R, V, E) {
        if (Y)
            this.ia(Y, R)
    }
    ;
    D.K4.prototype.K_ = function(Y, R, V, E, r) {
        this._P.Fb(r.x, r.y);
        var K = Y.a;
        this.fQ = K.Cf(K.GS.d / 2, K.GS.b / 2);
        this.a4e = K.QC()
    }
    ;
    D.K4.prototype.NZ = function(Y, R, V, E, r) {
        if (!r.tc)
            return;
        var K = Y.a
          , J = this.fQ
          , t = this._P
          , C = new gv(K.GS.d / 2,K.GS.b / 2)
          , c = Math.atan2(r.y - C.y, r.x - C.x)
          , M = Math.atan2(t.y - C.y, t.x - C.x);
        this.ZZ(Y, R, this.a4e.clone(), J, c - M)
    }
    ;
    D.K4.prototype.c8 = function(Y, R, V, E) {
        this.ZZ(V, R, null, null, Y.ZP - V.a.I2);
        V.a.I2 = Y.ZP
    }
    ;
    D.K4.prototype.ZZ = function(Y, R, V, E, r) {
        var K = Y.a;
        if (V == null)
            V = K.QC();
        if (E == null)
            E = K.Cf(K.GS.d / 2, K.GS.b / 2);
        V.translate(-E.x, -E.y);
        V.rotate(r);
        V.translate(E.x, E.y);
        K.I5(V);
        if (Y.d * K.k < K.GS.d && Y.b * K.k < K.GS.b)
            K.q.Fb(0, 0);
        Y.eR = !0;
        this.ia(Y, R)
    }
    ;
    D.K4.prototype.ia = function(Y, R) {
        var V = new I(O.E.z,!0);
        V.data = {
            e: O.U.oN,
            m: this.id,
            ZP: Y.a.I2
        };
        R.f(V)
    }
    ;
    D.nN = function() {
        D.Qi.call(this, [10, 25], D.sB, "tools/hbrush")
    }
    ;
    D.nN.prototype = new D.Qi("");
    D.nN.prototype.Eb = function(Y, R, V, E, r) {
        if (this.WY == null)
            return;
        this.IE(Y, "heal", this.WY.TY(), this.WY.Tf(), this.WY.Vv());
        this.D(Y, this.WY.Vv());
        D.OJ.prototype.Eb.call(this, Y, R, V, E, r);
        if (!this.$_.algnd)
            this.q = null
    }
    ;
    D.hM = function() {
        D.R0.call(this, [10, 8], D.m6, "tools/htype");
        this.kF = [];
        this.P3 = null;
        this.gL = null;
        this.caller = null;
        this.hY = 1;
        this.zn = null;
        this.a9s = 0;
        this.fX = 0;
        this.anC = null;
        this.$b = null;
        this.UY = null;
        this.BU = null;
        this.Yr = null;
        this.Rb = null;
        this.ad1 = null;
        this.ze = null;
        this.Z8 = null;
        this.rV = null;
        this.a7m = null;
        this.SY = !1;
        this.I3 = !1;
        this.Vp = !1;
        this.j3 = null;
        this.Aq = null;
        this.adJ = null;
        this.a5 = !1;
        this.$r = !1;
        this.Qm = -1;
        this.nt = -1;
        this.FX = document.createElement("textarea");
        this.FX.setAttribute("style", "font-family:Arial; font-size:14px; z-index:-1; " + " position:absolute; top:0px; left:0px;  pointer-events: none; opacity:0; width:" + (window.innerWidth - 10) + "px; height:150px;");
        this.FX.addEventListener("input", this.yQ.bind(this), !1);
        this.FX.addEventListener("keydown", this.ai4.bind(this), !1)
    }
    ;
    D.hM.prototype = new D.R0;
    D.hM.prototype.cm = function(Y) {
        return Y.tc
    }
    ;
    D.hM.prototype.J$ = function(Y, R, V, E) {
        if (this.UY != null)
            return;
        this.caller = R;
        this.P3 = Y;
        var r = this.ib(Y);
        if (r.length != 0) {
            var K = null
              , J = []
              , t = [];
            for (var x = 0; x < r.length; x++) {
                var C = Y.t[r[x]]
                  , c = C.add.TySh
                  , M = 0
                  , a = bg.mu(c.VW).length - 2
                  , Q = bg.iK(c.VW, M, a);
                bg.aH(Q, D._.k9(c.g));
                if (Q.G$.Font != null)
                    Q.G$.Font = Q.rQ[Q.G$.Font].Name;
                K = Q.rQ;
                J.push(Q.G$);
                t.push(Q.JT)
            }
            var Q = {
                rQ: K,
                G$: bg.Zq(J),
                JT: bg.Zq(t)
            };
            if (Q.G$.Font)
                bg.hx(Q, Q.G$.Font);
            this.k$(R, Q, c)
        }
    }
    ;
    D.hM.prototype.ib = function(Y) {
        var R = [];
        for (var x = 0; x < Y.C.length; x++)
            if (Y.t[Y.C[x]] && Y.t[Y.C[x]].add.TySh)
                R.push(Y.C[x]);
        return R
    }
    ;
    D.hM.prototype.Vl = function(Y, R, V, E, r) {
        debugger
        if (Y.e == "insertText" && this.UY) {
            var K = this.FX
              , J = K.value
              , t = K.selectionStart
              , C = K.selectionEnd;
            K.value = J.slice(0, t) + Y.G + J.slice(C);
            K.selectionStart = K.selectionEnd = t + Y.G.length;
            this.yQ(null);
            K.focus()
        }
        if (Y.e == "updateStyles") {
            debugger
            if (this.UY == null) {
                var c = this.ib(V)
                  , M = !1;
                if (c.length != 0) {
                    this.QI(V, R, r, c);
                    for (var x = 0; x < c.length; x++) {
                        var a = V.t[c[x]]
                          , Q = a.add.TySh;
                        bg.AE(Q, this.hY);
                        this.UY = a;
                        var A = bg.mu(Q.VW);
                        this.Qm = 0;
                        this.nt = A.length - 1;
                        bg.wR(Q.VW, this.Qm, this.nt, this.vZ(r, Q));
                        var p = this.EM(V, r);
                        if (p == !1)
                            M = !0
                    }
                    if (M) {
                        this.a5 = !0;
                        return
                    }
                    this.$d(V, R)
                }
                return
            }
            this.Oj(r)
        }
        if (Y.e.startsWith("warp")) {
            var v = this.$r;
            if (Y.e == "warp" || Y.e == "warpCancel") {
                if (Y.e == "warp")
                    this.UY.add.TySh.P5 = Y.uM;
                else
                    this.UY.add.TySh.P5 = this.ad1;
                var V = this.P3;
                this.EM(V, r);
                if (!v)
                    this.AL(V)
            }
            if (Y.e != "warp")
                this.FX.focus();
            if ((Y.e == "warpConfirm" || Y.e == "warpCancel") && v) {
                this.$r = !1;
                if (Y.e == "warpConfirm")
                    this.$d(V, R);
                else
                    this.lA(V, R)
            }
        }
        if (Y.e == "editCurr") {
            if (r.BL != D.m6) {
                this.zn = r.BL;
                var W = new I(O.E.z,!0);
                W.data = {
                    e: O.U.eI,
                    m: D.m6
                };
                R.f(W)
            }
            if (this.UY != null)
                this.disable(V, R, r, E);
            this.P3 = V;
            this.gL = r;
            this.caller = R;
            this.QI(V, R, r, [Y.pj]);
            var A = bg.mu(this.UY.add.TySh.VW);
            this.Qm = 0;
            this.nt = A.length - 1;
            this.AL(V);
            this.O3();
            this.FX.focus()
        }
        if (Y.e == "switchPntPrgr") {
            var a = V.t[V.C[0]]
              , Q = a.add.TySh
              , n = Q.g.k9()
              , $ = JSON.parse(JSON.stringify(Q.VW))
              , G = bg.Re($)
              , o = G == 1 ? bg.ah($) : [0, 0, Math.round(a.rect.d * 1.05 / n), Math.round(a.rect.b * 1.25 / n)]
              , B = bg.iK($, 0, 0)
              , L = B.rQ[B.G$.Font].Name
              , u = r.jq.cH(L)
              , y = [0, o[2], o[2] / 2][B.JT.Justification % 3]
              , S = u ? cd.x9(u, L) * (1 / u.head.unitsPerEm) * B.G$.FontSize : B.G$.FontSize * .8;
            bg.Iq($, 1 - G);
            if (G == 0) {
                y = -y;
                S = -S;
                bg.Ky($, [0, 0, o[2], o[3]])
            }
            var X = new bF(1,0,0,1,y,S);
            X.concat(Q.g);
            this.Vl({
                Qe: V.C[0],
                e: "newED",
                Zj: $,
                g: X
            }, R, V, E, r)
        }
        if (Y.e == "newED") {
            var a = V.t[Y.Qe]
              , Q = a.add.TySh
              , N = this.wl(V, [Y.Qe]);
            Q.VW = Y.Zj;
            if (Y.g)
                Q.g = Y.g;
            var k = new cd(Q.VW,r.jq)
              , d = bp.o0(k, Q);
            a.rect = d.V;
            a.buffer = d.uG;
            a.D();
            V.D();
            var P = new il(this.name,this);
            P.data = {
                lO: N,
                hi: this.wl(V, [Y.Qe])
            };
            V.Ug(P)
        }
        if (Y.e == "fromAction") {
            var Z = Y.e2.eQ.Usng.v
              , s = Z.TxtC.v
              , _ = [];
            for (var x = 0; x < 2; x++) {
                var b = s[x == 0 ? "Hrzn" : "Vrtc"].v
                  , q = b.val;
                if (b.type == "#Prc")
                    q = (x == 0 ? V.d : V.b) * (q / 100);
                _[x] = q
            }
            this.tQ(V, R, r, E, V.a.nS(_[0], _[1]));
            var a = V.t[V.C[0]]
              , Q = a.add.TySh
              , e = Q.VW
              , J = bg.mu(e);
            bg.to(e, 0, J.length - 1);
            bg.ys(e, 0, Z.Txt.v.replace(/\r/g, "\n"));
            for (var G = 0; G < 2; G++) {
                var g = Z[G == 0 ? "Txtt" : "paragraphStyleRange"].v;
                for (var x = 0; x < g.length; x++) {
                    var F = g[x].v
                      , t = F.From.v
                      , C = F.T.v - 1;
                    F = F[G == 0 ? "TxtS" : "paragraphStyle"].v;
                    var l = bg.iK(e, t, C)
                      , i = G == 0 ? l.G$ : l.JT;
                    for (var H in F) {
                        var iP = F[H].v;
                        if (H == "Sz")
                            i.FontSize = Math.round(iP.val);
                        if (H == "fontPostScriptName")
                            bg.hx(l, iP);
                        if (H == "Algn")
                            i.Justification = {
                                Cntr: 2
                            }[iP.Alg]
                    }
                    bg.wR(e, t, C, l)
                }
            }
            var k = new cd(Q.VW,r.jq)
              , d = bp.o0(k, Q);
            a.rect = d.V;
            a.buffer = d.uG;
            a.D();
            V.D();
            this.$d(V, R)
        }
    }
    ;
    D.hM.prototype.Oj = function(Y) {
        var R = Math.min(this.Qm, this.nt)
          , V = Math.max(this.Qm, this.nt)
          , E = this.UY.add.TySh;
        bg.AE(E, this.hY);
        bg.wR(E.VW, R, V - 1, this.vZ(Y, E));
        var r = this.P3
          , K = this.EM(r, Y);
        if (K)
            this.AL(r);
        if (document.activeElement.tagName.toLowerCase() != "input")
            this.FX.focus()
    }
    ;
    D.hM.prototype.DP = function(Y) {
        return this.kF.indexOf(Y) != -1
    }
    ;
    D.hM.prototype.enable = function(Y, R, V, E) {
        var r = this.FX;
        if (!O.cq(r))
            R.j.appendChild(r);
        this.ze = "default";
        this.P2(R)
    }
    ;
    D.hM.prototype.rT = function() {
        return this.UY != null
    }
    ;
    D.hM.gS = function(Y, R) {
        for (var x = Y.t.length - 1; x >= 0; x--) {
            var V = Y.t[x];
            if (V.add.TySh && V.rect.M_(R) && Y.Rn(x)) {
                var E = V.kx(2) || V.kx(31);
                return E ? -2 : x
            }
        }
        return -1
    }
    ;
    D.hM.prototype.K_ = function(Y, R, V, E, r) {
        this.P3 = Y;
        this.gL = V;
        this.caller = R;
        var K = Y.a.Cf(r.x, r.y)
          , J = this.UY == null;
        if (J) {
            var t = D.hM.gS(Y, K);
            if (t == -2) {
                alert(em.get([6, 57, 0]));
                return
            }
            if (t >= 0) {
                if (!bp.Ee(Y.t[t].add.TySh, V.jq)) {
                    alert("Fonts not loaded yet");
                    return
                }
                this.QI(Y, R, V, [t])
            } else {
                this.Vp = !0;
                this.j3 = r;
                return
            }
        }
        var C = J ? -1 : bg.Re(this.UY.add.TySh.VW)
          , c = this.rV ? this.rV : this.Z8;
        if (c && c.K_(Y, V, E, K) && w.uM.XJ(this.UY.add.TySh.P5) || !J && w.H.Yz(K, this.UY.rect) > 20 / Y.a.k && (C == 0 || C == 1)) {
            this.SY = !0;
            this.Aq = K;
            this.adJ = this.UY.add.TySh.g.clone();
            if (this.Qm == -1 && this.nt == -1)
                this.Qm = this.nt = this.dD(K)
        } else {
            if (this.Yr == null) {
                alert("Fonts not loaded yet");
                return
            }
            this.I3 = !0;
            this.Qm = this.nt = this.dD(K);
            var M = Date.now();
            if (M - this.a9s > 300)
                this.fX = 0;
            this.fX++;
            this.a9s = M;
            if (this.fX == 2)
                this.a8d();
            if (this.fX == 3)
                this.ah$();
            if (this.fX > 1) {
                this.I3 = !1
            }
        }
        this.O3();
        this.AL(Y)
    }
    ;
    D.hM.prototype.QI = function(Y, R, V, E) {
        debugger
        var r = Y.t[E[0]];
        this.UY = r;
        this.$a(R, O.E.z, {
            e: O.U.oN,
            m: this.id,
            Qh: "showactive"
        });
        this.BU = E;
        Y.C = E.slice(0);
        Y.$g();
        Y.hv = !0;
        this.Rb = this.wl(Y, E);
        this.Rw(r.add.TySh);
        this.EM(Y, V)
    }
    ;
    D.hM.prototype.Rw = function(Y) {
        if (bg.Re(Y.VW) != 1)
            return;
        var R = bg.ah(Y.VW);
        R = new gE(0,0,R[2] - R[0],R[3] - R[1]);
        var V = [R.x, R.y, R.x + R.d, R.y, R.x + R.d, R.y + R.b, R.x, R.y + R.b];
        w.H.g(V, Y.g, V);
        this.Z8 = new ge(V,!1,!1,!1,!0)
    }
    ;
    D.hM.prototype.a8d = function() {
        var Y = bg.mu(this.UY.add.TySh.VW);
        this.Qm = this.n7(Y, this.Qm);
        this.nt = this.Yo(Y, this.Qm)
    }
    ;
    D.hM.prototype.n7 = function(Y, R) {
        var V = " \t\n,.?!_-+=@#$%^&*'\"(){}[]\\/<>:;|"
          , E = [];
        for (var x = 0; x < V.length; x++)
            E.push(V.charAt(x));
        var r = E.indexOf(Y[R]) == -1 ? !0 : !1;
        for (var x = R - 1; x >= 0; x--)
            if (E.indexOf(Y.charAt(x)) != -1 == r)
                return x + 1;
        return 0
    }
    ;
    D.hM.prototype.Yo = function(Y, R) {
        var V = " \t\n,.?!_-+=@#$%^&*'\"(){}[]\\/<>:;|"
          , E = [];
        for (var x = 0; x < V.length; x++)
            E.push(V.charAt(x));
        var r = E.indexOf(Y[R]) == -1 ? !0 : !1;
        for (var x = R + 1; x < Y.length; x++)
            if (E.indexOf(Y.charAt(x)) != -1 == r)
                return x;
        return Y.length - 1
    }
    ;
    D.hM.prototype.ah$ = function() {
        var Y = this.Yr.a6z(this.Qm);
        this.Qm = Y[0];
        this.nt = Y[1]
    }
    ;
    D.hM.prototype.P2 = function(Y) {
        var R = new I(O.E.z,!0);
        R.data = {
            e: O.U.u$,
            Cz: this.ze
        };
        Y.f(R)
    }
    ;
    D.hM.prototype.NZ = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y)
          , J = this.UY;
        if (!r.tc) {
            var t = "default"
              , C = this.Z8
              , c = this.rV ? this.rV : C;
            if (c && w.uM.XJ(J.add.TySh.P5)) {
                var M = c.L4(K, Y.a.k);
                if (M)
                    t = M;
                else if (c == C && C.mW(K))
                    t = "text"
            } else if (J && w.H.Yz(K, J.rect) > 20 / Y.a.k)
                t = "move";
            else if (D.hM.gS(Y, K) >= 0)
                t = "text";
            if (t != this.ze) {
                this.ze = t;
                this.P2(R)
            }
        }
        var a = this.j3;
        if (this.Vp && Math.min(r.x - a.x, r.y - a.y) > 4 / Y.a.k) {
            this.Vp = !1;
            this.tQ(Y, R, V, E, r);
            J = this.UY;
            this.SY = !0;
            this.Z8 = new ge(null,!1,!1,!1,!0);
            var Q = Y.a.Cf(this.j3.x, this.j3.y);
            Q.x = Math.round(Q.x);
            Q.y = Math.round(Q.y);
            this.Z8.K_(Y, V, E, Q)
        }
        if (this.SY) {
            var A = J.add.TySh;
            if (this.rV) {
                this.rV.NZ(Y, V, E, K);
                var p = w.J.P4(w.J.k4(this.rV.JG(), this.a7m));
                A.g = p;
                this.EM(Y, V);
                bg.yZ(A)
            } else if (this.Z8) {
                this.Z8.NZ(Y, V, E, K);
                var v = A.g.clone()
                  , W = Math.atan2(v.O, v.o);
                v.rotate(W);
                var p = w.J.P4(w.J.k4(this.Z8.JG()))
                  , n = Math.atan2(p.O, p.o);
                p.rotate(n);
                if (!isNaN(p.o) && p.o * p.Xa - p.O * p.w8 != 0) {
                    var $ = new gE(0,0,p.o / v.o,p.Xa / v.Xa)
                      , G = Math.round($.d)
                      , o = Math.round($.b)
                      , B = A.VW.Curve;
                    if (B) {
                        var L = bg.ah(A.VW)
                          , u = new bF(G / L[2],0,0,o / L[3],0,0);
                        w.H.g(B.Points, u, B.Points);
                        bg.yZ(A)
                    }
                    bg.Ky(A.VW, [0, 0, G, o]);
                    A.g = w.J.P4(w.J.k4(this.Z8.JG(), $));
                    this.EM(Y, V);
                    bg.yZ(A)
                }
            } else {
                var y = K.x - this.Aq.x
                  , S = K.y - this.Aq.y;
                A.g = this.adJ.clone();
                var X = new gv(A.g.Wr + y,A.g.W8 + S);
                X = D.RT.wW(Y, X, V);
                A.g.Wr = X.x;
                A.g.W8 = X.y;
                this.EM(Y, V)
            }
        }
        if (this.I3)
            this.nt = this.dD(K);
        if (this.SY || this.I3)
            this.AL(Y)
    }
    ;
    D.hM.prototype.tQ = function(Y, R, V, E, r) {
        var K = Y.PD()
          , J = K[0]
          , t = K[1]
          , C = Y.FD();
        C.add.lnsr = "rend";
        var c = Y.t.slice(0);
        C.fo("Text layer " + c.length);
        this.UY = C;
        var M = Y.C.length == 0 ? Y.t.length - 1 : Y.C[Y.C.length - 1]
          , a = M + 1;
        if (c[M].add.lsct == ha.uL)
            a--;
        this.Rb = {
            Vg: c.slice(0),
            w$: Y.C.slice(0)
        };
        c.splice(a, 0, C);
        Y.C = [a];
        this.Qm = this.nt = 0;
        Y.Bd(c);
        this.Rb.u4 = c.slice(0);
        this.Rb.o6 = Y.C.slice(0);
        this.$a(R, O.E.z, {
            e: O.U.oN,
            m: this.id,
            Qh: "showactive"
        });
        var Q = Y.a.Cf(r.x, r.y);
        C.add.TySh = bg.BW(Q.x, Q.y, V.MF);
        var A = C.add.TySh
          , p = A.VW;
        bg.AE(A, this.hY);
        if (r.tc)
            bg.Iq(p, 1);
        else {
            bg.Iq(p, 0);
            var v = J[t.pop()]
              , W = v ? v.add.vmsk : null;
            if (W) {
                W = W.clone();
                var n = W.N, G, o;
                for (var x = 0; x < n.length; x++)
                    if (n[x].yV != null)
                        n[x].yV = 0;
                var $ = 4 * O.M() / Y.a.k;
                G = w.Y.ja(W.N, Q, !0, $);
                if (G.wt == -1)
                    G = w.Y.ja(W.N, Q);
                if (G.wt != -1) {
                    bg.Iq(p, 1);
                    var B = w.Y.En(n, G.wt)
                      , L = w.Y.Cs(n, G.wt) - 1;
                    n = W.N = n.slice(0, 2).concat(n.slice(B, B + L + 1));
                    W.C = [];
                    A.add = {
                        vmsk: W,
                        vogk: j.OA(n)
                    };
                    p.Curve = {};
                    bg.Hj(A);
                    if (G.BE != null) {
                        var u = cd.bq(p.Curve);
                        w.H.g(u[0], A.g, u[0]);
                        var y = w.H.C6(u[0], Q.x, Q.y)
                          , S = V.MF.JT.Justification;
                        if (S == 2 || S == 5) {
                            var X = (u[2][y] + u[3] * .5) % u[3];
                            y = cd.Al(X, u[2])
                        }
                        var N = u[1][y];
                        N = N % L;
                        W.gZ = [N, N];
                        bg.Hj(A)
                    } else
                        this.Rw(A)
                }
            }
        }
        return C
    }
    ;
    D.hM.prototype.Eb = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y)
          , J = this.Vp;
        if (this.Vp) {
            this.Vp = !1;
            this.tQ(Y, R, V, E, r);
            this.I3 = !0
        }
        if (this.SY || this.I3) {
            this.AL(Y);
            this.O3();
            if (J)
                this.Oj(V)
        }
        if (this.SY && this.Z8)
            this.Z8.Eb(Y, V, E, K);
        this.SY = this.I3 = !1;
        this.zv(Y, V, E);
        this.FX.focus()
    }
    ;
    D.hM.prototype.O3 = function() {
        var Y = this.UY.add.TySh, R = Math.min(this.Qm, this.nt), V = Math.max(this.Qm, this.nt), E, r;
        if (R == V) {
            var K = bg.mu(Y.VW);
            if (R == 0 || K.charAt(R - 1) == "\n")
                E = r = R;
            else
                E = r = R - 1
        } else {
            E = R;
            r = V - 1
        }
        var J = bg.iK(Y.VW, E, r);
        bg.aH(J, D._.k9(Y.g));
        this.k$(this.caller, J, Y)
    }
    ;
    D.hM.prototype.k$ = function(Y, R, V) {
        this.$a(Y, O.E.z, {
            e: O.U.KZ,
            jR: fG.d6,
            MF: R
        });
        var E = this.hY = bg.SV(V);
        this.$a(this.caller, O.E.z, {
            e: O.U.oN,
            m: this.id,
            Qh: "changeAA",
            Eh: E
        })
    }
    ;
    D.hM.prototype.U7 = function(Y, R, V, E) {
        if (E.i(m.TP))
            this.lA(Y, R);
        var r = this.UY;
        if (r)
            if (this.rV == null && E.i(m.sV)) {
                var K = r.add.TySh, J = bg.Re(K.VW), t;
                if (J == 1) {
                    t = bg.ah(K.VW);
                    t = new gE(0,0,t[2] - t[0],t[3] - t[1])
                } else
                    t = this.Yr.aY();
                var C = [t.x, t.y, t.x + t.d, t.y, t.x + t.d, t.y + t.b, t.x, t.y + t.b];
                w.H.g(C, K.g, C);
                this.rV = new ge(C,!0,!0,!1,!1);
                this.a7m = t;
                this.AL(this.P3)
            } else
                this.zv(Y, V, E)
    }
    ;
    D.hM.prototype.zv = function(Y, R, V) {
        var E = this.UY;
        if (E && !this.SY && this.rV != null && !V.i(m.sV)) {
            this.rV.Eb(Y, R, V, null);
            this.rV = null;
            this.Rw(E.add.TySh);
            this.AL(this.P3)
        }
    }
    ;
    D.hM.prototype.disable = function(Y, R, V, E) {
        var r = this.UY;
        this.$d(Y, R)
    }
    ;
    D.hM.prototype.c8 = function(Y, R, V, E, r) {
        if (this.$r)
            return;
        if (Y.Qh == "commit")
            this.$d(V, R);
        if (Y.Qh == "cancel")
            this.lA(V, R);
        if (Y.Qh == "changeAA") {
            this.hY = Y.Eh;
            if (V != null)
                this.Vl({
                    e: "updateStyles"
                }, R, V, E, r)
        }
        if (Y.Qh == "showwarp") {
            if (V == null)
                return;
            if (this.UY == null) {
                var K = V.t[V.C[0]]
                  , J = K.add.TySh;
                if (J == null)
                    return;
                this.QI(V, R, r, [V.C[0]]);
                this.FX.focus();
                this.$r = !0
            }
            this.ad1 = this.UY.add.TySh.P5;
            var t = new I(O.E.z,!0);
            t.data = {
                e: O.U.D0,
                xs: "textwarp"
            };
            R.f(t)
        }
    }
    ;
    D.hM.prototype.rP = function(Y, R) {
        if (R != fG.xM)
            return;
        if (this.a5) {
            this.a5 = !1;
            var V = this.P3
              , E = this.BU;
            for (var x = 0; x < E.length; x++) {
                this.UY = V.t[E[x]];
                this.EM(V, Y)
            }
            this.$d(V, this.caller);
            return
        }
        if (this.UY)
            this.Oj(Y)
    }
    ;
    D.hM.prototype.vZ = function(Y, R) {
        var V = JSON.parse(JSON.stringify(Y.MF));
        bg.aH(V, 1 / D._.k9(R.g));
        return V
    }
    ;
    D.hM.prototype.$E = function(Y, R) {
        if (Y.lO != null)
            this.sf(R, Y.hi);
        else
            this.wX(R, Y.u4, Y.o6)
    }
    ;
    D.hM.prototype.Zk = function(Y, R) {
        if (Y.lO != null)
            this.sf(R, Y.lO);
        else
            this.wX(R, Y.Vg, Y.w$)
    }
    ;
    D.hM.prototype.sf = function(Y, R) {
        for (var x = 0; x < R.length; x++) {
            var V = R[x]
              , E = V.Qe
              , r = Y.t[E];
            r.buffer = V.f4;
            r.rect = V.V.clone();
            r.D();
            var K = r.add.TySh;
            K.P5 = V.uM;
            K.Bk = V.Bk.clone();
            K.g = V.g.clone();
            K.VW = JSON.parse(JSON.stringify(V.VW));
            r.Oh()
        }
        Y.D()
    }
    ;
    D.hM.prototype.wl = function(Y, R) {
        var V = [];
        for (var x = 0; x < R.length; x++) {
            var E = R[x]
              , r = Y.t[E]
              , K = r.add.TySh;
            V.push({
                Qe: E,
                g: K.g.clone(),
                uM: JSON.parse(JSON.stringify(K.P5)),
                Bk: K.Bk.clone(),
                VW: JSON.parse(JSON.stringify(K.VW)),
                f4: r.buffer.slice(0),
                V: r.rect.clone()
            })
        }
        return V
    }
    ;
    D.hM.prototype.wX = function(Y, R, V) {
        Y.C = V;
        Y.Bd(R);
        Y.D();
        Y.IU = !0
    }
    ;
    D.hM.prototype.EM = function(Y, R, V) {
        if (V == null)
            V = !1;
        var E = this.UY.add.TySh;
        if (!bp.Ee(E, R.jq))
            return !1;
        this.Yr = new cd(E.VW,R.jq);
        if (!V) {
            var r = bg.mu(E.VW);
            this.FX.value = r.slice(0, r.length - 1)
        }
        var K = bp.o0(this.Yr, E);
        if (w.uM.XJ(E.P5))
            E.Bk = new gE;
        else {
            if (bg.Re(E.VW) == 1) {
                var J = bg.ah(E.VW)
                  , z = K.Bk.y;
                E.Bk = new gE(0,z,J[2] - J[0],J[3] - J[1] - z)
            } else {
                E.Bk = K.Bk
            }
        }
        var t = this.UY.rect;
        this.UY.rect = K.V;
        this.UY.buffer = K.uG;
        this.UY.D();
        Y.sn();
        Y.D(Y.root.Ba(K.V.ov(t), Y, Y.t.indexOf(this.UY)));
        return !0
    }
    ;
    D.hM.prototype.yQ = function(Y) {
        if (this.UY == null || this.$r)
            return;
        var R = this.FX.selectionStart
          , V = this.UY.add.TySh
          , E = bg.mu(V.VW)
          , r = this.FX.value + "\n"
          , K = Math.min(this.Qm, this.nt)
          , J = Math.max(this.Qm, this.nt)
          , a = !1;
        this.Qm = Math.min(R, K);
        if (r.length - R < E.length - this.nt)
            this.nt = E.length - r.length + R;
        if (E != r) {
            while (this.Qm > 0 && E.charAt(this.Qm - 1) != r.charAt(this.Qm - 1))
                this.Qm--
        }
        var t = E.substring(0, this.Qm)
          , C = E.substring(this.nt, E.length)
          , c = r.substring(this.Qm, r.length - C.length);
        bg.to(V.VW, this.Qm, this.nt);
        bg.ys(V.VW, this.Qm, c);
        var M = this.vZ(this.gL, V)
          , Q = -1
          , A = Array.from(c);
        for (var x = 0; x < A.length; x++)
            Q = Math.max(Q, A[x].codePointAt(0));
        if (Q != -1 && Q > 128 && M.G$.Font != null) {
            var p = M.rQ[M.G$.Font].Name
              , v = this.gL.jq.LG(Q, p, M.rQ);
            if (p != v) {
                bg.hx(M, v);
                a = !0
            }
        }
        if (this.$b != null && c == this.$b) {
            var W = JSON.parse(this.anC);
            M.G$ = W.G$;
            M.rQ = W.rQ;
            a = !0
        }
        bg.wR(V.VW, this.Qm, this.Qm + c.length - 1, M);
        this.Qm = this.nt = t.length + c.length;
        var n = this.P3
          , $ = this.EM(n, this.gL, !0);
        if ($)
            this.AL(n, !0);
        if (a)
            this.O3()
    }
    ;
    D.hM.prototype.ai4 = function(Y) {
        if (this.UY == null || this.$r)
            return;
        if (this.UY == null)
            return;
        var R = m
          , V = 0
          , E = 0
          , n = !1;
        if (R.fz(Y.code, R.bs))
            V = 1;
        if (R.fz(Y.code, R.uZ))
            V = -1;
        if (R.fz(Y.code, R.Rz))
            E = -1;
        if (R.fz(Y.code, R.Ap))
            E = 1;
        var r = Y.ctrlKey || Y.metaKey
          , K = R.fz(Y.code, m.anE)
          , J = R.fz(Y.code, m.aga);
        if (R.fz(Y.code, m.ZI) && r) {
            this.$d(this.P3, this.caller);
            return
        }
        if (R.fz(Y.code, m.SA)) {
            Y.preventDefault();
            var t = this.FX
              , C = t.value
              , c = t.selectionStart
              , M = t.selectionEnd;
            t.value = C.substring(0, c) + "\t" + C.substring(M);
            t.selectionStart = t.selectionEnd = c + 1;
            this.yQ(null);
            return
        }
        if ((R.fz(Y.code, R.r2) || R.fz(Y.code, R.bk)) && r) {
            var a = this.Qm
              , Q = this.nt;
            if (a > Q) {
                var A = a;
                a = Q;
                Q = A
            }
            var p = this.UY.add.TySh
              , v = bg.mu(p.VW);
            if (a != Q) {
                this.$b = v.slice(a, Q);
                this.anC = JSON.stringify(this.gL.MF)
            }
        }
        var W = bg.mu(this.UY.add.TySh.VW);
        if (V != 0 || E != 0 || K || J) {
            Y.preventDefault();
            var $ = this.Qm;
            if (V != 0) {
                if (r && V == -1)
                    $ = this.n7(W, this.Qm - 1);
                else if (r && V == 1)
                    $ = this.Yo(W, this.Qm);
                else {
                    var t = this.FX
                      , C = t.value;
                    $ = this.Qm + V;
                    if ($ != 0 && C.codePointAt($ - 1) > 65535)
                        $ += V
                }
            } else if (E != 0) {
                var G = this.Yr.I4(this.Qm);
                if (E == -1 && G.DH == 0)
                    $ = 0;
                else if (E == 1 && G.DH == this.Yr.anF() - 1)
                    $ = 99999999999;
                else
                    $ = this.Yr.wx(new gv(G.V.x + G.V.d / 2,0), G.DH + E)
            } else if (K) {
                var o = this.Qm - 1;
                while (o > 0 && W.charCodeAt(o) != 10)
                    o--;
                $ = o == 0 ? 0 : o + 1
            } else if (J) {
                var o = this.Qm;
                while (o < W.length - 1 && W.charCodeAt(o) != 10)
                    o++;
                $ = o
            }
            $ = Math.max(0, Math.min(W.length - 1, $));
            if (Y.shiftKey)
                this.Qm = $;
            else
                this.Qm = this.nt = $;
            n = !0
        }
        if (R.fz(Y.code, m.U) && r) {
            this.Qm = 0;
            this.nt = W.length - 1;
            n = !0
        }
        if (n) {
            this.O3();
            this.AL(this.P3)
        }
    }
    ;
    D.hM.a5I = function(Y, R) {
        var V = Y.length;
        if (V != R.length)
            return !1;
        for (var x = 0; x < V; x++)
            if (Y[x].Qe != R[x].Qe)
                return !1;
        return !0
    }
    ;
    D.hM.prototype.$d = function(Y, R) {
        if (this.UY == null)
            return;
        this.UY.Oh();
        var V = this.Rb;
        if (V instanceof Array) {
            var E = this.wl(Y, this.BU)
              , r = Y.Io();
            if (r != null && r.m == this && r.data.lO && D.hM.a5I(r.data.lO, V))
                r.data.hi = E;
            else {
                var K = new il(this.name,this);
                K.data = {
                    lO: V,
                    hi: E
                };
                Y.Ug(K)
            }
        } else {
            var K = new il(this.name,this);
            K.data = {
                Vg: V.Vg,
                u4: V.u4,
                w$: V.w$,
                o6: V.o6
            };
            Y.Ug(K)
        }
        this.escape(Y, R)
    }
    ;
    D.hM.prototype.lA = function(Y, R) {
        if (this.UY == null)
            return;
        if (this.Rb instanceof Array) {
            this.sf(Y, this.Rb);
            if (this.UY)
                bg.yZ(this.UY.add.TySh)
        } else {
            Y.C = this.Rb.w$;
            Y.Bd(this.Rb.Vg)
        }
        Y.D();
        this.escape(Y, R)
    }
    ;
    D.hM.prototype.escape = function(Y, R) {
        this.UY = null;
        this.BU = null;
        this.Yr = null;
        this.Z8 = null;
        this.FX.blur();
        Y.S.ZW = null;
        Y.S.X1 = null;
        Y.S.ho = [];
        Y.eR = !0;
        this.SY = !1;
        this.I3 = !1;
        this.Qm = this.nt = -1;
        this.$a(R, O.E.z, {
            e: O.U.oN,
            m: this.id,
            Qh: "hideactive"
        });
        if (this.zn) {
            var V = new I(O.E.z,!0);
            V.data = {
                e: O.U.eI,
                m: this.zn
            };
            R.f(V);
            this.zn = null
        }
    }
    ;
    D.hM.prototype.$a = function(Y, R, V, E) {
        var r = new I(R,!0);
        r.data = V;
        if (E)
            r.m = E;
        Y.f(r)
    }
    ;
    D.hM.prototype.dD = function(Y) {
        var R = this.UY.add.TySh
          , V = this.Yr
          , E = R.g.clone();
        E.tb();
        var r = E.XA(Y)
          , K = bg.Tf(R, V)
          , J = w.uM.gF(R.P5, K)
          , t = w.iv.A.Fk(J, 0, 1, 0, 1)
          , C = new Uint32Array(30)
          , c = w.iv.A.agT(t.ta, t.XV, r.x, r.y, C)
          , M = w.iv.ja(J, r.x, r.y, t.ta, C, c, !1)
          , a = w.iv.Vz;
        if (a == null)
            a = new Float64Array(2);
        r = new gv(K.x + a[0] * K.d,K.y + a[1] * K.b);
        var Q = V.wx(r);
        return Q
    }
    ;
    D.hM.prototype.AL = function(Y, R) {
        if (R == null)
            R = !1;
        var V = this.UY.add.TySh
          , E = bg.Re(V.VW)
          , r = this.Yr
          , K = r ? bg.Tf(V, r) : null;
        Y.S.ho = [];
        Y.S.ZW = null;
        Y.S.X1 = null;
        var J = this.rV ? this.rV : this.Z8;
        if (J) {
            J.sw(Y, this.gL, !w.uM.XJ(V.P5));
            var t = V.g.clone();
            t.tb();
            w.H.g(Y.S.ho, t, Y.S.ho);
            w.H.g(Y.S.ZW.P, t, Y.S.ZW.P);
            if (r && r.a2h()) {
                var C = K.d - 20
                  , c = K.b + 8;
                Y.S.ZW.P.push(C, c, C + 10, c, C + 5, c - 5, C + 5, c + 5);
                Y.S.ZW.R.push("M", "L", "M", "L")
            }
        } else if (E == 0)
            this.a5l(Y, V, r);
        else
            Y.S.ZW = {
                P: [],
                R: []
            };
        var M = Math.min(this.Qm, this.nt)
          , a = Math.max(this.Qm, this.nt);
        if (!R) {
            this.FX.selectionStart = M;
            this.FX.selectionEnd = a
        }
        if (r != null) {
            var Q = function(J, B) {
                var L = J.x
                  , u = J.y + J.b
                  , y = new bF;
                y.translate(-L, -u);
                y.rotate(-B);
                y.translate(L, u);
                J.y += J.b * .27;
                var $ = w.H.se(J);
                w.H.g($.P, y, $.P);
                return $
            };
            if (M == a) {
                M = Math.max(M, 0);
                var A = r.I4(M);
                if (A) {
                    var p = A.V
                      , v = this.gL.MF.G$.FontSize;
                    if (v != null && v != 0) {
                        v /= V.g.k9();
                        p.y += p.b - v;
                        p.b = v
                    }
                    var W = r.a0G(M);
                    if (W != null && W.Od == 1)
                        p.x += p.d;
                    var n = Q(p, A.I2).P;
                    Y.S.ZW.R.push("M", "L");
                    Y.S.ZW.P.push(n[0], n[1], n[6], n[7])
                }
            } else {
                Y.S.X1 = {
                    P: [],
                    R: []
                };
                for (var x = M; x < a; x++) {
                    var A = r.I4(x)
                      , $ = Q(A.V, A.I2);
                    w.H.concat(Y.S.X1, $)
                }
            }
        }
        if (r != null) {
            if (!K.uD()) {
                var G = w.uM.gF(V.P5, K)
                  , o = Math.min(K.d, K.b) / 10;
                if (Y.S.ZW) {
                    Y.S.ZW = w.H.vQ(Y.S.ZW);
                    Y.S.ZW = w.H.Pg(Y.S.ZW, o);
                    w.iv.apply(G, Y.S.ZW.P, K)
                }
                if (Y.S.X1) {
                    Y.S.X1 = w.H.vQ(Y.S.X1);
                    Y.S.X1 = w.H.Pg(Y.S.X1, o);
                    w.iv.apply(G, Y.S.X1.P, K)
                }
                w.iv.apply(G, Y.S.ho, K)
            }
        }
        if (Y.S.ZW)
            w.H.g(Y.S.ZW.P, V.g, Y.S.ZW.P);
        if (Y.S.X1)
            w.H.g(Y.S.X1.P, V.g, Y.S.X1.P);
        w.H.g(Y.S.ho, V.g, Y.S.ho);
        Y.eR = !0
    }
    ;
    D.hM.prototype.a5l = function(Y, R, V) {
        if (V == null)
            return;
        Y.S.ho.push(0, 0);
        if (Y.S.ZW == null)
            Y.S.ZW = {
                R: [],
                P: []
            };
        for (var x = 0; x < V.JT.length; x++) {
            var E = V.JT[x];
            for (var r = 0; r < E.ZH.length; r++) {
                var K = E.ZH[r]
                  , J = E.Cj.x + K.Cj.x + K.V.x
                  , t = E.Cj.y + K.Cj.y + K.V.y + K.V.b;
                Y.S.ZW.R.push("M", "L");
                Y.S.ZW.P.push(J, t, J + K.V.d, t)
            }
        }
        Y.eR = !0
    }
    ;
    D.lh = function() {
        D.Ls.call(this, [10, 9], D.Zw, "tools/lasso");
        this._z = "crosshair";
        this.wf = null;
        this.A2 = null;
        this.Aq = null
    }
    ;
    D.lh.prototype = new D.Ls;
    D.lh.prototype.BB = function(Y, R, V, E) {
        this.wf = this.Qn;
        this.A2 = {
            P: [this.wf.x, this.wf.y],
            R: ["M"]
        }
    }
    ;
    D.lh.prototype.Wz = function(Y, R, V, E) {
        this.Aq = E;
        var r = this.A2;
        if (r == null)
            return;
        if (!E.tc) {
            if (this.A2 != null && this.TC > 1 && V.i(m.yx)) {
                r.P.pop();
                r.P.pop();
                r.P.push(this.eL.x, this.eL.y);
                Y.S.ZW = r;
                Y.eR = !0
            }
            return
        }
        r.R.push("L");
        r.P.push(this.eL.x, this.eL.y);
        this.wf = this.eL;
        if (this.TZ) {
            Y.S.ZW = r;
            Y.eR = !0
        }
    }
    ;
    D.lh.prototype.rT = function() {
        return this.A2 != null
    }
    ;
    D.lh.prototype.zx = function() {
        return this.A2 != null
    }
    ;
    D.lh.prototype.U7 = function(Y, R, V, E) {
        D.Ls.prototype.U7.call(this, Y, R, V, E);
        if (this.A2 && this.TC > 1 && this.Aq && !this.Aq.tc && !E.i(m.yx))
            this.KL(Y, V, E)
    }
    ;
    D.lh.prototype.$k = function(Y, R, V, E) {
        this.Aq = E;
        var r = this.A2;
        if (r == null)
            return;
        if (this.TC > 1 && V.i(m.yx)) {
            r.R.push("L");
            r.P.push(this.eL.x, this.eL.y);
            return
        }
        this.KL(Y, R, V)
    }
    ;
    D.lh.prototype.KL = function(Y, R, V) {
        this.finish(Y, R, V, this.Aq);
        this.A2 = null;
        Y.S.ZW = null;
        Y.eR = !0
    }
    ;
    D.lh.prototype.getSelection = function(Y, R, V, E) {
        if (this.Qn.yU(this.eL) || !this.TZ)
            return null;
        return D.Ls.h8(this.A2.P)
    }
    ;
    D.RT = function() {
        D.R0.call(this, [10, 11], D.NJ, "tools/move");
        this.cj = new gv(0,0);
        this.yu = new gv(0,0);
        this.YH = null;
        this.a$ = null;
        this.uw = new gv(0,0);
        this.WZ = null;
        this.ri = null;
        this.zk = null;
        this.c0 = 0;
        this.EX = null;
        this.K3 = [];
        this.HB = null;
        this.mg = !1;
        this.e = 0;
        this.jS = null;
        this.NT = null;
        this.dz = null;
        this.Kq = !1;
        this.$_ = {
            TV: !1,
            $o: !1,
            K6: !1
        };
        this.a4m = !1;
        this.a62 = !1;
        this.Z8 = null;
        this.SQ = null;
        this.a4O = null;
        var Y = [];
        for (var x = 0; x < w.DG.YR.length; x++)
            Y.push({
                name: w.DG.YR[x],
                p: function(R, V, E) {
                    return {
                        fi: V.YX.xa == E
                    }
                }
            });
        this.q8 = new bR(Y);
        this.q8.s("select", this.g8, this)
    }
    ;
    D.RT.prototype = new D.R0;
    D.R0.prototype.cm = function(Y) {
        return this.mg && this.e != 2
    }
    ;
    D.RT.prototype._T = function() {
        return this.mg && this.e == 0
    }
    ;
    D.RT.prototype.NL = function(Y, R, V, E) {
        this.Ym(Y, -this.uw.x, -this.uw.y);
        this.uw.Fb(0, 0);
        this.Qo(Y, null, V);
        this.h4(Y)
    }
    ;
    D.RT.prototype.nd = function() {
        var Y = this.$_;
        return [Y.TV ? 1 : 0, Y.$o ? 1 : 0, Y.K6 ? 1 : 0]
    }
    ;
    D.RT.prototype.l5 = function(Y, R, V) {
        var E = this.$_;
        if (Y && Y[0] != null)
            E.TV = Y[0] == 1;
        if (Y && Y[1] != null)
            E.$o = Y[1] == 1;
        if (Y && Y[2] != null)
            E.K6 = Y[2] == 1;
        var r = new I(O.E.z,!0);
        r.data = {
            e: O.U.oN,
            m: this.id,
            PH: E,
            a0Z: R
        };
        V.f(r)
    }
    ;
    D.RT.ID = function(Y, R, V, E, r, K, J) {
        if (J == null)
            J = [!1, !0];
        var t = new gE(0,0,Y.d,Y.b)
          , C = Y.ss(null, r, !0)
          , c = Y.V0(C, J[0] ? t : null, J[1] ? null : t)[0];
        if (J[1]) {
            var M = w.m7(c.tL(), new gE(0,0,c.d,c.b), 2);
            D.Gp.mS(c, M)
        }
        if (V != 1) {
            var a = new gE(0,0,Math.round(c.d * V),Math.round(c.b * V));
            D.Gp.mS(c, a);
            var Q = [];
            for (var x = 0; x < c.t.length; x++)
                Q.push(x);
            var A = D._.vF(c, Q, !0);
            D._.zE(c, E, Q, A, 1, w.J.tu(new bF(V,0,0,V,0,0)), null, !0);
            c.jQ()
        }
        var p = [];
        for (var x = 0; x < R.length; x++)
            if (c.d * c.b != 0)
                p.push(gq.Ye(c, R[x].toUpperCase(), null, null, K ? K[x] : null, E));
        return p
    }
    ;
    D.RT.prototype.mK = function(Y, R, V, E, r) {
        if (Y == null || Y.C.length == 0)
            return;
        var K = D.RT.ID(Y, [R], V, E, null)[0]
          , J = new I(O.E.z,!0);
        J.data = {
            e: O.U.kS,
            data: K,
            name: Y.t[Y.C[0]].getName() + (V == 1 ? "" : "@" + V + "x") + "." + R
        };
        r.f(J)
    }
    ;
    D.RT.prototype.c8 = function(Y, R, V, E, r) {
        if (Y.zN == "getPNG") {
            this.mK(V, "png", Y.xV, r, R)
        } else if (Y.zN == "getSVG") {
            this.mK(V, "svg", Y.xV, r, R)
        }
        if (Y.zN == "prms") {
            this.$_ = Y;
            this.h4(V)
        }
    }
    ;
    D.RT.afj = function(Y) {
        var z = Y.length
          , V = 0;
        Y.sort(function(K, J) {
            return K[0] + K[1] / 2 - (J[0] + J[1] / 2)
        });
        var R = Y[z - 1][0] + Y[z - 1][1] - Y[0][0];
        for (var x = 0; x < z; x++)
            V += Y[x][1];
        var E = Math.round((R - V) / (z - 1))
          , r = Y[0][0];
        for (var x = 0; x < z; x++) {
            Y[x][0] = r;
            r += Y[x][1] + E
        }
    }
    ;
    D.RT.prototype.Vl = function(Y, R, V, E, r) {
        var K = Y.e;
        if (K == "trsl") {
            var J = Math.round(Y.a04)
              , t = Math.round(Y.ahU);
            this.uw.Fb(J, t);
            this.YJ(V, R, E, r, !1, Y.$);
            this.Ym(V, J, t);
            this.Qo(V, null, r)
        } else if (K == "gids" || K == "gidsFromLayer") {
            var C = Y.NT, c, M;
            if (C == null)
                C = JSON.parse(JSON.stringify(V.fO));
            if (K == "gids") {
                c = Y.BM;
                var a = C[0].length + C[1].length
                  , Q = c[0].length + c[1].length;
                M = a == Q ? [23, 2] : a > Q ? [23, 3] : [23, 4];
                if (Q == 0)
                    M = [11, 15, 0]
            } else if (K == "gidsFromLayer") {
                var A = [[], []];
                for (var x = 0; x < V.C.length; x++) {
                    var p = V.t[V.C[x]].rect;
                    if (p.uD())
                        continue;
                    A[0].push(p.x, p.x + p.d);
                    A[1].push(p.y, p.y + p.b)
                }
                M = [11, 15, 1];
                c = JSON.parse(JSON.stringify(V.fO));
                D.RT.bu(c, A)
            }
            if (JSON.stringify(C) == JSON.stringify(c))
                return;
            var K = new il(M,this);
            K.data = {
                e: 2,
                NT: C,
                BM: c
            };
            V.Ug(K);
            this.$E(K.data, V)
        } else if (K == "algn") {
            var v = Y.G;
            if (V == null)
                return;
            if (V.C.length < 2 && !(V.v != null && v != 3 && v != 7)) {
                alert(em.get([15, 7, 5]));
                return
            }
            var W = V.v;
            V.v = null;
            var p = W ? W.rect : D._.Tf(V);
            this.YJ(V, R, E, r, !1);
            if (!this.mg)
                return;
            var n = this.EX
              , $ = {}
              , G = []
              , o = []
              , B = [];
            for (var x = 0; x < n.length; x++) {
                var L = n[x];
                while (V.t[L].getName() == "</Layer group>")
                    L++;
                var u = V.root.qk(L)
                  , y = u;
                while (u.parent != null) {
                    u = u.parent;
                    if (n.indexOf(u.index) != -1)
                        y = u
                }
                var S = o.indexOf(y.index);
                if (S == -1) {
                    S = o.length;
                    o.push(y.index)
                }
                G[x] = S
            }
            var X = []
              , N = []
              , k = [];
            for (var x = 0; x < o.length; x++) {
                var d = D._.Tf(V, V.ss(!0, o[x]));
                k.push(d);
                var P = v == 3 ? [d.y, d.b] : [d.x, d.d];
                X[x] = P;
                N.push(P)
            }
            D.RT.afj(N);
            for (var x = 0; x < o.length; x++) {
                var d = k[x]
                  , Z = d.x
                  , s = d.y;
                if (v == 0)
                    Z = p.x;
                if (v == 1)
                    Z = p.x + (p.d - d.d) / 2;
                if (v == 2)
                    Z = p.x + (p.d - d.d);
                if (v == 3)
                    s = X[x][0];
                if (v == 4)
                    s = p.y;
                if (v == 5)
                    s = p.y + (p.b - d.b) / 2;
                if (v == 6)
                    s = p.y + (p.b - d.b);
                if (v == 7)
                    Z = X[x][0];
                B.push(Math.round(Z - d.x), Math.round(s - d.y))
            }
            var _ = [];
            for (var x = 0; x < n.length; x++) {
                var b = G[x];
                _[2 * x] = B[2 * b];
                _[2 * x + 1] = B[2 * b + 1]
            }
            this.Ym(V, 0, 0, null, _);
            var q = v == 3 || v == 7 ? [20, 4, 6] : [20, 4, v < 3 ? v : v - 1];
            this.Qo(V, null, r, _, q);
            V.v = W
        }
    }
    ;
    D.RT.bu = function(Y, R) {
        for (var x = 0; x < R.length; x++)
            for (var V = 0; V < R[x].length; V++)
                if (Y[x].indexOf(R[x][V]) == -1)
                    Y[x].push(R[x][V])
    }
    ;
    D.RT.prototype.enable = function(Y, R, V, E, r) {
        this.ri = V;
        this.zk = R;
        this.Kq = r ? !0 : !1;
        this.h4(Y);
        this.P2("default", R)
    }
    ;
    D.RT.prototype.disable = function(Y, R, V, E) {
        this.cc(Y)
    }
    ;
    D.RT.prototype.cc = function(Y) {
        if (Y == null)
            return;
        if (this.Z8) {
            this.Z8.clear(Y);
            this.Z8 = null
        }
        if (Y.S.K6) {
            Y.S.K6 = null;
            Y.eR = !0
        }
        if (Y.S.VE) {
            Y.S.VE = null;
            Y.eR = !0
        }
        if (Y.S.y5[this.id]) {
            delete Y.S.y5[this.id];
            Y.eR = !0
        }
        if (Y.S.po.length != 0) {
            Y.S.po = [];
            Y.eR = !0
        }
    }
    ;
    D.RT.prototype.J$ = function(Y, R, V, E) {
        if (V.BL != this.id)
            return;
        this.h4(Y)
    }
    ;
    D.RT.prototype.h4 = function(Y, R) {
        if (Y == null)
            return;
        var V = this.$_;
        this.cc(Y);
        if (!this.Kq) {
            var E;
            if (V.$o || V.K6)
                E = w.H.pV(D._.Tf(Y));
            if (V.$o && !E.uD()) {
                this.Z8 = new ge([E.x, E.y, E.x + E.d, E.y, E.x + E.d, E.y + E.b, E.x, E.y + E.b],!0);
                this.Z8.sw(Y, this.ri)
            }
            if (V.K6) {
                var r = Y.I_(Y.C[0])
                  , M = null
                  , a = !1;
                if (r == null)
                    r = new gE(0,0,Y.d,Y.b);
                Y.S.K6 = {
                    JE: [E],
                    z4: []
                };
                var K = Y.S.K6.z4
                  , J = E.x + E.d
                  , t = E.y + E.b
                  , C = E.x + Math.floor(E.d / 2)
                  , c = E.y + Math.floor(E.b / 2);
                if (R) {
                    var Q = Y.root.ja(new gv(Math.floor(R.x),Math.floor(R.y)));
                    if (Q) {
                        M = w.H.pV(Q.$.OS(Y));
                        if (M.Wo(E)) {
                            a = (M.Nk(E) || E.Nk(M)) && !E.yU(M);
                            if (!a)
                                M = null
                        }
                    }
                }
                this.J5(E, K);
                if (M != null) {
                    Y.S.K6.JE.push(M);
                    var A = M.x + M.d
                      , p = M.y + M.b
                      , v = M.x + Math.floor(M.d / 2)
                      , W = M.y + Math.floor(M.b / 2);
                    if (a) {
                        var n = C
                          , $ = c;
                        if (E.Nk(M)) {
                            n = v;
                            $ = W
                        }
                        K.push(E.x, $, M.x, $);
                        K.push(J, $, A, $);
                        K.push(n, E.y, n, M.y);
                        K.push(n, t, n, p)
                    } else {
                        this.J5(M, K);
                        var G = t < M.y || p < E.y
                          , o = J < M.x || A < E.x;
                        if (J < M.x)
                            K.push(J, c, M.x, c);
                        if (A < E.x)
                            K.push(A, c, E.x, c);
                        if (t < M.y)
                            K.push(C, t, C, M.y);
                        if (p < E.y)
                            K.push(C, p, C, E.y);
                        if (G && !o) {
                            if (E.x < M.x)
                                K.push(E.x, W, M.x, W);
                            if (M.x < E.x)
                                K.push(M.x, c, E.x, c)
                        }
                    }
                } else {
                    if (E.y > r.y)
                        K.push(C, r.y, C, E.y);
                    if (t < r.y + r.b)
                        K.push(C, t, C, r.y + r.b);
                    if (E.x > r.x)
                        K.push(r.x, c, E.x, c);
                    if (J < r.x + r.d)
                        K.push(J, c, r.x + r.d, c)
                }
                Y.eR = !0
            }
        }
        if (this.e == 2 && this.mg) {
            var B = this.EX
              , L = B[0]
              , u = (L == 0 ? "X" : "Y") + ": " + w.DG.qF(Y.fO[L][B[1]], Y.zX, this.ri, L == 0 ? Y.d : Y.b, !0);
            D.R0.x2(Math.round(this.YH.x) + 10, Math.round(this.YH.y) - 10, [u], Y);
            Y.eR = !0
        }
        if (this.e == 3 && this.mg) {
            var y = w.H.se(this.jS);
            Y.S.y5[this.id] = {
                ZW: y
            };
            Y.eR = !0
        }
    }
    ;
    D.RT.prototype.J5 = function(Y, R) {
        var V = Y.d
          , E = Y.b
          , r = Y.x + Math.floor(V * .2)
          , K = Y.y + Math.floor(E * .2);
        R.push(r, Y.y, r, Y.y + E);
        R.push(Y.x, K, Y.x + V, K)
    }
    ;
    D.RT.prototype.P2 = function(Y, R) {
        var V = {
            e: O.U.u$,
            Cz: Y
        }
          , E = new I(O.E.z,!0);
        E.data = V;
        R.f(E)
    }
    ;
    D.RT.prototype.wB = function(Y) {
        var R = this.SQ.sU()[0]
          , V = this.WZ
          , E = this.a4O[R];
        this.Iy(V, E)
    }
    ;
    D.RT.prototype.g8 = function(Y) {
        var R = JSON.parse(JSON.stringify(this.ri.YX));
        R.xa = this.q8.sU()[0];
        var V = new I(O.E.z,!0);
        V.data = {
            e: O.U.KZ,
            jR: fG.SE,
            Eh: R
        };
        this.zk.f(V)
    }
    ;
    D.RT.prototype.og = function(Y, R, V, E, r) {
        if (this.mg)
            this.Eb(Y, R, V, E, r);
        this.WZ = Y;
        this.ri = V;
        this.zk = R;
        var K = Y.a.Cf(r.x, r.y), J;
        if (D.RT.iR(V, r)) {
            J = this.q8
        } else {
            if (this.SQ)
                this.SQ.removeEventListener("select", this.wB);
            var t = [];
            Y.root.ja(K, t);
            if (t.length == 0)
                return;
            var C = [];
            this.a4O = t;
            for (var x = 0; x < t.length; x++)
                C.push({
                    name: Y.t[t[x]].getName()
                });
            J = this.SQ = new bR(C);
            J.s("select", this.wB, this)
        }
        J.parent = R;
        J.B();
        J.update(Y, V);
        var c = new I(O.E.z,!0);
        c.data = {
            e: O.U.nq,
            iF: J,
            x: r.Gt + 2,
            y: r.nV + 1
        };
        R.f(c)
    }
    ;
    D.RT.prototype.av = function(Y, R, V, E, r) {
        return D.RT.iR(V, r)
    }
    ;
    D.RT.prototype.K_ = function(Y, R, V, E, r) {
        this.YH = r;
        this.cj.Fb(r.x, r.y);
        this.yu = Y.a.Cf(r.x, r.y);
        this.a$ = new bC(this.yu);
        this.YJ(Y, R, E, V, !0)
    }
    ;
    D.RT.iR = function(Y, R) {
        return Y.yl && (0 < R.x && R.x < w.DG.N2 || 0 < R.y && R.y < w.DG.N2)
    }
    ;
    D.RT.prototype.YJ = function(Y, R, V, E, r, K) {
        var J, t = this.yu, C = !1;
        if (r) {
            var c = E.Ql && E.YX.fO;
            if (D.RT.iR(E, this.cj)) {
                J = JSON.parse(JSON.stringify(Y.fO));
                if (this.cj.x < w.DG.N2)
                    Y.fO[0].push(t.x);
                if (this.cj.y < w.DG.N2)
                    Y.fO[1].push(t.y);
                if (!c) {
                    var M = new I(O.E.z);
                    if (!E.YX.fO) {
                        M.data = {
                            e: O.U.KZ,
                            jR: fG.Yg
                        };
                        R.f(M)
                    }
                    if (!E.Ql) {
                        M.data = {
                            e: O.U.KZ,
                            jR: fG.Eo
                        };
                        R.f(M)
                    }
                    c = !0
                }
            }
            var a = this.z5(Y, t);
            if (c && a) {
                this.e = 2;
                this.NT = J ? J : JSON.parse(JSON.stringify(Y.fO));
                this.EX = a;
                this.mg = !0;
                this.HB = D._.Tf(Y);
                return
            }
            if (Y.dR.length != 0) {
                this.e = 4;
                this.HB = Y.Rg[Y.dR[0]].rect.clone();
                this.mg = !0;
                return
            }
            if (this.Z8 && this.Z8.L4(t, Y.a.k, !0) != null) {
                var M = new I(O.E.z);
                M.data = {
                    e: O.U.eI,
                    m: D.vB
                };
                R.f(M);
                var Q = new I(O.E.K);
                Q.m = D.vB;
                Q.data = {
                    e: "doMouseDown",
                    YH: this.cj
                };
                R.f(Q);
                return
            }
            if (Y.v && Y.v.rect.M_(t)) {
                var A = Math.round(t.x)
                  , p = Math.round(t.y)
                  , v = Y.v.rect;
                C = Y.v.channel[(p - v.y) * v.d + A - v.x] > 128
            }
            if (!C && (!this.Kq && this.$_.TV || this.Kq && this.$_.TV && (V.i(m.Ms) || Y.C.length < 2))) {
                var W = this.a1K(Y, t, V);
                if (!W) {
                    Y.C = [];
                    Y.LX = null;
                    Y.IU = Y.Nn = !0;
                    this.e = 3;
                    this.jS = new gE;
                    this.mg = !0;
                    return
                }
            }
            if (V.i(m.yx) && !C) {
                var Q = new I(O.E.K);
                Q.m = D.AQ;
                Q.data = {
                    e: j.Uw,
                    a5y: !0
                };
                R.f(Q)
            }
        }
        if (Y.dR.length != 0) {
            this.e = 4;
            this.HB = Y.Rg[Y.dR[0]].rect.clone();
            this.mg = !0;
            return
        }
        this.EX = Y.ss(K == null, K, null, !0);
        for (var x = 0; x < this.EX.length; x++) {
            var n = Y.t[this.EX[x]];
            if (n.kx(2) || n.kx(31)) {
                alert(em.get([6, 57, 0]));
                return
            }
        }
        this.K3 = D.RT.afc(Y, this.EX);
        this.e = 0;
        if (Y.v && (!r || C) && Y.C.length == 1 && Y.J3(!1)) {
            if (!Y.$Q()) {
                this.mg = !1;
                return
            }
            var $ = Y.t[Y.C[0]]
              , G = V.i(m.yx);
            this.e = 1;
            var o = Y.history[Y.A5];
            if (o.m == this && o.data.e == 1 && o.data.$ == Y.C[0] && $.St == $.gT.St && !G) {
                this.dz = o
            } else {
                var B = $.gT, L = !1, u;
                if (!$.Gi(Y, Y.v) || G) {
                    L = !0;
                    $.Uv(Y, Y.v, G)
                }
                if ($.gT.St <= 0) {
                    u = w.T($.gT.rB.length >> 2);
                    w.vH($.gT.rB, u, 3)
                } else
                    u = Y.v.channel.slice(0);
                var y = {
                    rect: $.gT.sa.clone(),
                    channel: u
                };
                this.dz = new il(G ? [12, 53] : [12, 54],this);
                this.dz.data = {
                    e: 1,
                    $: Y.C[0],
                    gT: $.gT,
                    xu: B,
                    pS: L,
                    w$: Y.v,
                    o6: y,
                    Xa: new gv(0,0)
                };
                Y.Ug(this.dz);
                Y.v = y;
                Y.ha = !0
            }
        }
        this.mg = !0;
        this.HB = D._.Tf(Y)
    }
    ;
    D.RT.prototype.a1K = function(Y, R, V) {
        var E = Y.root.ja(new gv(Math.floor(R.x),Math.floor(R.y)));
        if (E) {
            if (E.$.add.vmsk)
                Y.eR = !0;
            var r = Y.t.indexOf(E.$);
            if (V.i(m.Ms)) {
                var K = Y.C.indexOf(r);
                if (K == -1)
                    Y.C.push(r);
                else if (Y.C.length > 1)
                    Y.C.splice(K, 1)
            } else if (Y.C.indexOf(r) == -1) {
                this.Iy(Y, r)
            }
        }
        return E != null
    }
    ;
    D.RT.prototype.Iy = function(Y, R) {
        Y.t[R].St = 0;
        Y.C = [R];
        Y.LX = null;
        Y.$g();
        Y.hv = !0;
        Y.IU = !0
    }
    ;
    D.RT.prototype.NZ = function(Y, R, V, E, r) {
        this.YH = r;
        var K = Y.a.Cf(r.x, r.y), Q, A;
        if (this.a$ && this.e < 2)
            K = this.a$.No(K, E);
        if (!this.mg) {
            if (V.Ql && V.YX.fO) {
                var J = this.z5(Y, K)
                  , t = "default";
                if (J)
                    t = ["col-resize", "row-resize"][J[0]];
                else if (this.Z8) {
                    var C = this.Z8.L4(K, Y.a.k);
                    if (C)
                        t = C
                }
                this.P2(t, R)
            }
            this.h4(Y, K);
            return
        }
        var c = this.yu
          , M = Math.round(K.x - c.x) - this.uw.x
          , a = Math.round(K.y - c.y) - this.uw.y;
        if (this.HB) {
            if (this.e == 2) {
                K = D.RT.wW(Y, K, V, [!1, Y.v ? Y.v.rect : this.HB, !0])
            } else {
                A = this.HB.clone();
                A.offset(this.uw.x + M, this.uw.y + a);
                Q = D.RT.CR(Y, A, V);
                M += Math.round(Q[0]);
                a += Math.round(Q[1])
            }
        }
        this.uw.x += M;
        this.uw.y += a;
        this.Ym(Y, M, a, K, null, E.i(m.Ms));
        this.h4(Y, K);
        if (Q)
            D.RT.cF(Y, A, Q)
    }
    ;
    D.RT.prototype.z5 = function(Y, R) {
        R = [R.x, R.y];
        for (var x = 0; x < 2; x++)
            for (var V = 0; V < Y.fO[x].length; V++)
                if (Math.abs(Y.fO[x][V] - R[x]) * Y.a.k < 4)
                    return [x, V];
        return null
    }
    ;
    D.RT.prototype.Ym = function(Y, R, V, E, r, K) {
        if (this.e == 0) {
            if (r)
                D.RT.Us(Y, this.EX, this.K3, r);
            else
                D.RT.Zg(Y, this.EX, this.K3, R, V)
        } else if (this.e == 1) {
            var J = this.dz.data;
            J.Xa.offset(R, V);
            D.RT.v1(Y, J.$, R, V)
        } else if (this.e == 2) {
            var t = 1e-5;
            if (K)
                t = Y.a.k <= 1 ? 10 : 1;
            else if (Y.a.k <= 1)
                t = 1;
            var C = t * Math.round(E.x / t)
              , c = t * Math.round(E.y / t)
              , M = [C, c]
              , a = this.EX;
            Y.fO[a[0]][a[1]] = M[a[0]]
        } else if (this.e == 3) {
            var Q = this.yu
              , A = w.H.LB([Q.x, Q.y, E.x, E.y]);
            this.jS = A;
            var p = [];
            Y.root.nk(A, p);
            if (JSON.stringify(Y.C) != JSON.stringify(p)) {
                Y.C = p;
                Y.IU = Y.Nn = !0
            }
        } else if (this.e == 4) {
            for (var x = 0; x < Y.dR.length; x++)
                Y.Rg[Y.dR[x]].rect.offset(R, V);
            Y.eR = !0
        }
    }
    ;
    D.RT.v1 = function(Y, R, V, E) {
        var r = Y.t[R];
        Y.v.rect.offset(V, E);
        r.Cm(Y, V, E, Y.v);
        Y.ha = !0;
        Y.D()
    }
    ;
    D.RT.prototype.Eb = function(Y, R, V, E, r) {
        this.Qo(Y, r, V);
        this.h4(Y);
        if (Date.now() - this.c0 < 300) {
            var K = D.hM.gS(Y, Y.a.Cf(r.x, r.y));
            if (K != -1) {
                var J = new I(O.E.K,!0);
                J.m = D.m6;
                J.data = {
                    e: "editCurr",
                    pj: K
                };
                R.f(J)
            }
        }
        this.c0 = Date.now()
    }
    ;
    D.RT.prototype.Qo = function(Y, R, V, E, r) {
        if (!this.mg)
            return;
        this.mg = !1;
        if (this.e == 0) {
            if (E) {
                this.F_(Y, null, E, r)
            } else {
                if (this.uw.x == 0 && this.uw.y == 0)
                    return;
                this.F_(Y, this.uw.clone())
            }
            Y.tz = !0
        } else if (this.e == 2) {
            var K = 0;
            R = [R.x, R.y];
            var J = this.EX
              , aa = this.NT[0].length + this.NT[1].length
              , t = Y.fO[0].length + Y.fO[1].length;
            if (V.yl && R[J[0]] < w.DG.N2) {
                Y.fO[J[0]].splice(J[1], 1);
                K = 1;
                if (aa == t - 1)
                    return
            }
            if (aa < t)
                K = 2;
            var C = new il([[23, 2], [23, 3], [23, 4]][K],this);
            C.data = {
                e: 2,
                NT: this.NT,
                BM: JSON.parse(JSON.stringify(Y.fO))
            };
            Y.Ug(C)
        } else if (this.e == 4) {
            var C = new il([12, 54],this);
            C.data = {
                e: 4,
                C: Y.dR.slice(0),
                q: this.uw.clone()
            };
            Y.Ug(C)
        }
        this.uw.Fb(0, 0)
    }
    ;
    D.RT.prototype.U7 = function(Y, R, V, E) {
        var r = E.ro();
        if (Y != null && (r.x != 0 || r.y != 0)) {
            if (E.i(m.yx) && Y.v == null) {
                var K = new I(O.E.K);
                K.m = D.AQ;
                K.data = {
                    e: j.Uw,
                    a5y: !0
                };
                R.f(K)
            }
            this.uw.Fb(r.x, r.y);
            this.YJ(Y, R, E, V, !1);
            if (!this.mg)
                return;
            this.Ym(Y, r.x, r.y);
            this.Qo(Y, null, V);
            this.h4(Y)
        }
        var J = E.i(m.sV);
        if (!this.Kq && this.a62 != J) {
            if (J) {
                this.a4m = this.$_.TV;
                this.$_.TV = !0
            } else {
                this.$_.TV = this.a4m
            }
            this.a62 = J;
            var t = new I(O.E.z,!0);
            t.data = {
                e: O.U.oN,
                m: this.id,
                PH: this.$_
            };
            R.f(t)
        }
    }
    ;
    D.RT.prototype.Zk = function(Y, R) {
        if (Y.e == 0)
            D.RT.Us(R, Y.C, Y.D$, Y.JH, !0);
        else if (Y.e == 2) {
            R.fO = JSON.parse(JSON.stringify(Y.NT));
            R.eR = !0
        } else if (Y.e == 4) {
            for (var x = 0; x < Y.C.length; x++)
                R.Rg[Y.C[x]].rect.offset(-Y.q.x, -Y.q.y);
            R.eR = !0
        } else {
            var V = R.t[Y.$];
            if (Y.pS) {
                V.iz(R, Y.xu);
                R.v = Y.w$;
                R.ha = !0;
                R.D();
                V.D()
            } else {
                D.RT.v1(R, Y.$, -Y.Xa.x, -Y.Xa.y)
            }
        }
    }
    ;
    D.RT.prototype.$E = function(Y, R) {
        if (Y.e == 0)
            D.RT.Us(R, Y.C, Y.D$, Y.JH);
        else if (Y.e == 2) {
            R.fO = JSON.parse(JSON.stringify(Y.BM));
            R.eR = !0
        } else if (Y.e == 4) {
            for (var x = 0; x < Y.C.length; x++)
                R.Rg[Y.C[x]].rect.offset(Y.q.x, Y.q.y);
            R.eR = !0
        } else {
            var V = R.t[Y.$];
            if (Y.pS) {
                V.gT = Y.gT;
                R.v = Y.o6;
                D.RT.v1(R, Y.$, 0, 0);
                V.D()
            } else {
                D.RT.v1(R, Y.$, Y.Xa.x, Y.Xa.y)
            }
        }
    }
    ;
    D.RT.prototype.F_ = function(Y, R, V, E) {
        if (V) {
            var r = !0;
            for (var x = 0; x < V.length; x++)
                if (V[x] != 0)
                    r = !1;
            if (r)
                return
        }
        var K = Y.history[Y.A5];
        if (K.data && K.m == this && K.data.e == 0 && V == null && JSON.stringify(K.data.C) == JSON.stringify(this.EX) && JSON.stringify(K.data.D$) == JSON.stringify(this.K3)) {
            var J = K.data.JH
              , t = K.data.agC.eQ.T.v;
            t.Hrzn.v.val += R.x;
            t.Vrtc.v.val += R.y;
            for (var x = 0; x < J.length; x += 2) {
                J[x] += R.x;
                J[x + 1] += R.y
            }
        } else {
            if (R == null)
                R = new gv(V[0],V[1]);
            var C = {
                CM: "move",
                eQ: {
                    classID: "null",
                    null: cA.Wn("Lyr", !0),
                    T: {
                        t: "Objc",
                        v: {
                            classID: "Ofst",
                            Hrzn: {
                                t: "UntF",
                                v: {
                                    type: "#Rlt",
                                    val: R.x
                                }
                            },
                            Vrtc: {
                                t: "UntF",
                                v: {
                                    type: "#Rlt",
                                    val: R.y
                                }
                            }
                        }
                    }
                }
            }
              , c = new il(E ? E : [12, 54],this);
            if (V)
                c.data = {
                    e: 0,
                    C: this.EX,
                    D$: this.K3,
                    JH: V
                };
            else
                c.data = {
                    e: 0,
                    C: this.EX,
                    D$: this.K3,
                    JH: D.RT.HW(this.EX, R.x, R.y)
                };
            c.data.agC = C;
            Y.Ug(c);
            this.track(C)
        }
    }
    ;
    D.RT.HW = function(Y, R, V) {
        var E = [];
        for (var x = 0; x < Y.length; x++)
            E.push(R, V);
        return E
    }
    ;
    D.RT.Zg = function(Y, R, V, E, r) {
        D.RT.Us(Y, R, V, D.RT.HW(R, E, r))
    }
    ;
    D.RT.Us = function(Y, R, V, E, r) {
        if (R.length == 0)
            return;
        if (V == null) {
            V = [];
            for (var x = 0; x < R.length; x++) {
                V.push(Y.t[R[x]].d_(Y, !0))
            }
        }
        var K = new gE
          , J = new gE(0,0,Y.d,Y.b);
        for (var x = 0; x < R.length; x++) {
            var t = E[2 * x]
              , C = E[2 * x + 1];
            if (r) {
                t = -t;
                C = -C
            }
            var c = Y.t[R[x]]
              , M = V[x];
            if (c.add.fxrp && (M.indexOf(0) != -1 || c.pG()))
                c.add.fxrp.offset(t, C);
            for (var a = 0; a < M.length; a++) {
                var Q = M[a];
                if (Q == 0) {
                    c.rect.offset(t, C);
                    if (c.i_() && c.Ka(Y))
                        c.Ka(Y).rect.offset(t, C);
                    if (c.add.artb) {
                        var A = c.GP();
                        A.offset(t, C);
                        c.HN(A)
                    }
                    if (c.add.TySh) {
                        c.add.TySh.g.translate(t, C);
                        if (c.add.TySh.add) {
                            c.add.TySh.add.vmsk.offset(t, C)
                        }
                    }
                    if (c.add.SoLd) {
                        var p = new bF(1,0,0,1,t,C)
                          , v = c.add.SoLd
                          , W = D._.Sj(v.Trnf)
                          , n = D._.Sj(v.nonAffineTransform);
                        w.H.g(W, p, W);
                        w.H.g(n, p, n);
                        v.Trnf = D._.zT(W);
                        v.nonAffineTransform = D._.zT(n)
                    }
                }
                if (Q == 1)
                    c.fp().rect.offset(t, C);
                if (Q == 2) {
                    c.add.vmsk.offset(t, C);
                    if (c.add.vogk)
                        w.Wg.g(c.add.vogk, [1, 0, t, 0, 1, C, 0, 0], [])
                }
                if (Q == 3) {
                    c.Ka(Y).r.rect.offset(t, C);
                    if (M.length == 1)
                        c.D()
                }
            }
            if (M.length > 0) {
                var $ = c.add.GdFl;
                if ($ == null)
                    $ = c.add.PtFl;
                if (c.pG() && !c.v5() && c.add.vmsk != null && w.Y.fs(c.add.vmsk.N) && c.add.vmsk.pI == 255 && ($ == null || $.Algn && $.Algn.v)) {
                    c.rect.offset(t, C)
                } else
                    c.Qd(Y);
                var G = Y.root.Ba(c.OS(Y), Y, R[x]);
                K = K.ov(G);
                G.offset(-t, -C);
                K = K.ov(G);
                if (c.add.SoCo || c.add.GdFl || c.add.PtFl || f8.get(c.add) != null)
                    K = K.ov(J);
                c.H$()
            }
        }
        Y.D(K)
    }
    ;
    D.RT.afc = function(Y, R) {
        var V = [];
        for (var x = 0; x < R.length; x++) {
            var E = Y.t[R[x]];
            V.push(E.d_(Y))
        }
        return V
    }
    ;
    D.RT.cF = function(Y, R, V) {
        var E = Y.S.VE = {
            P: [],
            R: []
        }
          , r = R.x + V[0]
          , K = R.y + V[1];
        if (V[2] != 1e9) {
            E.R.push("M", "L");
            E.P.push(V[2], K, V[2], K + R.b)
        }
        if (V[3] != 1e9) {
            E.R.push("M", "L");
            E.P.push(r, V[3], r + R.d, V[3])
        }
        Y.eR = !0
    }
    ;
    D.RT.wW = function(Y, R, V, E) {
        var r = D.RT.lw(Y, [[R.x], [R.y]], V, E);
        return new gv(R.x + r[0],R.y + r[1])
    }
    ;
    D.RT.CR = function(Y, R, V, E, r) {
        var K = r == !0 ? 0 : 1
          , J = D.RT.lw(Y, [[R.x, R.x + (R.d >>> K), R.x + R.d], [R.y, R.y + (R.b >>> K), R.y + R.b]], V, E);
        return J
    }
    ;
    D.RT.lw = function(Y, R, V, E) {
        if (E == null)
            E = [!0, null, !0];
        var r = [0, 0, 1e9, 1e9];
        if (!V.VB)
            return r;
        var K = JSON.parse(JSON.stringify(R));
        for (var J = 0; J < 2; J++) {
            var t = 1e9
              , C = R[J]
              , c = 0;
            for (var M = 0; M < C.length; M++) {
                var a = D.RT.a5S(Y, C[M], K[1 - J][M], J, V, E);
                if (a != 1e9)
                    K[J][M] = a;
                if (a != 1e9 && Math.abs(a - C[M]) < Math.abs(t)) {
                    t = a - C[M];
                    c = a
                }
            }
            if (t != 1e9) {
                r[J] = t;
                r[J + 2] = c
            }
        }
        return r
    }
    ;
    D.RT.a5S = function(Y, R, V, E, r, K) {
        var J = 1e9
          , t = r.EH
          , C = r.YX
          , c = [Y.root];
        while (c.length != 0 && t[2]) {
            var M = c.pop()
              , a = M.$
              , Q = a.rect;
            if (!a.mF())
                continue;
            if (M.children)
                for (var x = 0; x < M.children.length; x++)
                    c.push(M.children[x]);
            if (Y.C.indexOf(M.index) != -1 || Q.uD())
                continue;
            if (E == 0) {
                var A = Q.d
                  , p = A >>> 1;
                if (Math.abs(Q.x - R) < Math.abs(J - R))
                    J = Q.x;
                if (Math.abs(Q.x + p - R) < Math.abs(J - R))
                    J = Q.x + p;
                if (Math.abs(Q.x + A - R) < Math.abs(J - R))
                    J = Q.x + A
            } else {
                var v = Q.b
                  , W = v >>> 1;
                if (Math.abs(Q.y - R) < Math.abs(J - R))
                    J = Q.y;
                if (Math.abs(Q.y + W - R) < Math.abs(J - R))
                    J = Q.y + W;
                if (Math.abs(Q.y + v - R) < Math.abs(J - R))
                    J = Q.y + v
            }
        }
        if (K[0] && t[0] && C.fO && r.Ql) {
            var n = Y.fO[E];
            for (var x = 0; x < n.length; x++)
                if (Math.abs(n[x] - R) < Math.abs(J - R))
                    J = n[x]
        }
        if (t[1] && C.Ry && r.Ql) {
            var $ = Math.round(w.DG.fg(C.yH, Y, C.tv));
            if (E == 1 && C.rf == 1) {
                var G = V * .5 * Math.sqrt(4 / 3), o;
                $ *= Math.sqrt(4 / 3);
                o = Math.round((R - G) / $) * $ + G;
                if (Math.abs(o - R) < Math.abs(J - R))
                    J = o;
                o = Math.round((R + G) / $) * $ - G;
                if (Math.abs(o - R) < Math.abs(J - R))
                    J = o
            } else {
                var o = Math.round(R / $) * $;
                if (Math.abs(o - R) < Math.abs(J - R))
                    J = o
            }
        }
        var B = Y.dO;
        if (t[3] && C.dO && r.Ql && B.length != 0) {
            for (var x = 0; x < B.length; x++) {
                if (!K[2] && Y.N4.indexOf(x) != -1)
                    continue;
                var L = D.QW._1(B, x);
                for (var u = 0; u < 3; u += 2)
                    if (L[u + E] != R && Math.abs(L[u + E] - R) < Math.abs(J - R))
                        J = L[u + E]
            }
        }
        if (K[1]) {
            var Q = K[1]
              , A = Q.d
              , v = Q.b
              , y = [Q.x, Q.y, Q.x + (A >>> 1), Q.y + (v >>> 1), Q.x + A, Q.y + v];
            for (var x = 0; x < 6; x += 2)
                if (Math.abs(y[x + E] - R) < Math.abs(J - R))
                    J = y[x + E]
        }
        if (t[4]) {
            var A = Y.d
              , v = Y.b
              , y = [0, 0, A >>> 1, v >>> 1, A, v];
            for (var x = 0; x < 6; x += 2)
                if (Math.abs(y[x + E] - R) < Math.abs(J - R))
                    J = y[x + E]
        }
        var S = Math.abs(J - R) <= 4 * O.M() / Y.a.k ? J : 1e9;
        return S
    }
    ;
    D.Mo = function() {
        D.Ls.call(this, [10, 12], D.bc, "tools/mwand")
    }
    ;
    D.Mo.prototype = new D.Ls;
    D.Mo.prototype.nd = D.Ls.prototype.aky;
    D.Mo.prototype.l5 = D.Ls.prototype.a4L;
    D.Mo.prototype.BB = function(Y, R, V, E) {
        this.finish(Y, R, V, E)
    }
    ;
    D.Mo.prototype.getSelection = function(Y, R, V, E) {
        var r = this.eL
          , K = D.Ls.a7A(new gv(Math.floor(r.x),Math.floor(r.y)), this.$_.as);
        return K
    }
    ;
    D.Mo.AX = function(Y, R, V) {
        if (Y.C.length != 1) {
            alert("More than one layer selected.");
            return null
        }
        var E = Y.t[Y.C[0]], r = E.St <= 0 ? null : E.St == 1 ? E.fp() : E.Ka(Y).r, K;
        if (r == null && E.add.lsct != null && E.add.lsct != ha.BP) {
            alert("No layer selected.");
            return null
        }
        if (R.x < 0 || R.x > Y.d || R.y < 0 || R.y > Y.b)
            return null;
        var J = new gE(0,0,Y.d,Y.b);
        if (r == null && J.yU(E.rect))
            K = E.buffer;
        else {
            K = w.T(J.X() * 4);
            if (r == null)
                w.Vj(E.buffer, E.rect, K, J);
            else
                D.OJ.c5(r.channel, r.rect, r.color, K, J)
        }
        var t = D.Mo.E2(K, J, R, null, V)
          , C = w.iE(t, J)
          , c = w.T(C.X());
        w.md(t, J, c, C);
        return {
            rect: C,
            channel: c
        }
    }
    ;
    D.Mo.mk = function(Y, R, V) {
        var E = R.d
          , K = 0
          , J = 0
          , t = 0
          , C = 0;
        Y = new Uint32Array(Y.buffer);
        var r = []
          , c = V.length;
        for (var x = 0; x < c; x++) {
            var M = V[x]
              , a = Math.round(M.x - .5 - R.x)
              , Q = Math.round(M.y - .5 - R.y);
            if (!R.M_(M))
                a = Q = 0;
            var A = Q * E + a
              , p = Y[A];
            r.push([p & 255, p >> 8 & 255, p >> 16 & 255, p >>> 24])
        }
        return r
    }
    ;
    D.Mo.E2 = function(Y, R, V, E, r) {
        Y = new Uint32Array(Y.buffer);
        var K = R.d
          , J = R.b
          , t = K * J;
        if (E == null)
            E = D.Mo.mk(Y, R, [V]);
        var C = Math.round(V.x - .5 - R.x)
          , c = Math.round(V.y - .5 - R.y)
          , M = c * K + C
          , a = Date.now()
          , Q = w.T(K * J)
          , A = r[0]
          , p = 1 / A
          , v = r[1] && A > 0 ? 255 : 0;
        if (r[2]) {
            var W = w.T(Q.length)
              , n = new Uint32Array(t)
              , $ = 1;
            n[0] = C << 16 | c;
            W[M] = 1;
            while ($ > 0) {
                var G = n[$ - 1];
                $--;
                var o = G >>> 16
                  , B = G & 65535
                  , x = B * K + o
                  , L = D.Mo.Z6(Y[x], E);
                if (L > A) {
                    var u = v * (1 - Math.max(0, Math.min(1, (L - A) * p)));
                    Q[x] = ~~u
                } else {
                    Q[x] = 255;
                    if (B != J - 1 && W[x + K] == 0) {
                        n[$++] = o << 16 | B + 1;
                        W[x + K] = 1
                    }
                    if (B != 0 && W[x - K] == 0) {
                        n[$++] = o << 16 | B - 1;
                        W[x - K] = 1
                    }
                    if (o != K - 1 && W[x + 1] == 0) {
                        n[$++] = o + 1 << 16 | B;
                        W[x + 1] = 1
                    }
                    if (o != 0 && W[x - 1] == 0) {
                        n[$++] = o - 1 << 16 | B;
                        W[x - 1] = 1
                    }
                }
            }
        } else {
            for (var x = 0; x < t; x++) {
                var L = D.Mo.Z6(Y[x], E);
                if (L <= A)
                    Q[x] = 255
            }
            for (var B = 0; B < J; B++)
                for (var o = 0; o < K; o++) {
                    var x = B * K + o;
                    if (Q[x] == 0 && (o > 0 && (Q[x - 1] == 255 || B > 0 && Q[x - K - 1] == 255 || B < J - 1 && Q[x + K - 1] == 255) || o < K - 1 && (Q[x + 1] == 255 || B > 0 && Q[x - K + 1] == 255 || B < J - 1 && Q[x + K + 1] == 255) || B > 0 && Q[x - K] == 255 || B < J - 1 && Q[x + K] == 255)) {
                        var L = D.Mo.Z6(Y[x], E)
                          , u = v * (1 - Math.max(0, Math.min(1, (L - A) * p)));
                        Q[x] = ~~u
                    }
                }
        }
        return Q
    }
    ;
    D.Mo.Z6 = function(Y, R) {
        var V = R.length
          , E = D.Mo.Hn(Y, R[0])
          , x = 1;
        while (x != V) {
            E = Math.min(E, D.Mo.Hn(Y, R[x]));
            x++
        }
        return E
    }
    ;
    D.Mo.Hn = function(Y, R) {
        var V = Y & 255
          , E = Y >>> 8 & 255
          , r = Y >>> 16 & 255
          , K = Y >>> 24 & 255;
        if (R[3] == 0)
            return K < 5 ? 0 : 255;
        var J = Math.max(Math.abs(V - R[0]), Math.max(Math.abs(E - R[1]), Math.abs(r - R[2])));
        return K == 0 ? 255 : J
    }
    ;
    D.BN = function(Y, R) {
        if (R)
            D.OJ.call(this);
        else if (Y)
            D.OJ.call(this, [10, 49], D.qv, "tools/camove");
        else
            D.OJ.call(this, [10, 26], D.AD, "tools/patch");
        this.wf = null;
        this.A2 = null;
        this.q = null;
        this.Cj = null;
        this.QB = new gv;
        this.ca = null;
        this.In = null
    }
    ;
    D.BN.prototype = new D.OJ;
    D.BN.prototype.K_ = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y);
        if (Y.v && w.ja(K, Y.v.channel, Y.v.rect)) {
            var J = new gE(0,0,Y.d,Y.b)
              , t = J.Cy(Y.v.rect);
            if (!Y.J3() || t.uD())
                return;
            if (!0) {
                var C = w.T(t.X());
                w.md(Y.v.channel, Y.v.rect, C, t);
                Y.v = {
                    channel: C,
                    rect: t
                }
            }
            this.nf(Y);
            this.ex(Y);
            this.Cj = K;
            this.QB = new gv(K.x - Y.v.rect.x,K.y - Y.v.rect.y);
            this.In = w.T(Y.v.rect.X() * 4);
            this.In.fill(255);
            if (this.$_.patch == 1) {
                var c = Y.t[Y.C[0]];
                c.Uv(Y, Y.v, !0);
                if (c.gT == null)
                    this.Cj = null
            }
            this.ca = Y.v.rect.clone()
        } else {
            this.A2 = {
                P: [K.x, K.y],
                R: ["M"]
            };
            this.wf = K
        }
    }
    ;
    D.BN.prototype.NZ = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y);
        if (this.Cj) {
            if (this.$_.patch == 1) {
                var J = Y.t[Y.C[0]].gT
                  , t = K.x - this.QB.x
                  , C = K.y - this.QB.y;
                D.RT.v1(Y, Y.C[0], Math.round(t - J.sa.x), Math.round(C - J.sa.y))
            } else
                this.NH(Y, K, "clone")
        }
        if (this.wf) {
            this.A2.R.push("L");
            this.A2.P.push(K.x, K.y);
            this.wf = K;
            Y.S.ZW = this.A2;
            Y.eR = !0
        }
    }
    ;
    D.BN.prototype.Eb = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y);
        if (this.Cj) {
            var J = Y.v.rect.clone();
            if (this.id == D.qv) {
                var t = Y.t[Y.C[0]];
                t.iz(Y, t.gT);
                Y.v.rect = this.ca.clone();
                var C = w.T(Y.v.rect.X() * 4);
                w.hL(Y.v.channel, C, 3);
                this.IE(Y, "sheal", C, Y.v.rect, Y.v.rect);
                Y.v.rect = J;
                J = J.ov(this.ca)
            }
            this.NH(Y, K, "heal");
            this.finish(Y, J, null, null, !0);
            Y.D(J);
            this.Cj = null
        }
        if (this.wf) {
            var c = D.Ls.$K(this.$_.setop, E.i(m.Ms), E.i(m.yx))
              , M = new I(O.E.io,!0);
            if (this.A2.P.length <= 4)
                M.data = D.Ls.C$();
            else
                M.data = D.Ls.h8(this.A2.P, c);
            R.f(M);
            this.wf = null;
            Y.S.ZW = null;
            Y.eR = !0
        }
    }
    ;
    D.BN.prototype.J9 = function() {
        return this.q
    }
    ;
    D.BN.prototype.c8 = function(Y, R, V, E, r) {
        D.OJ.prototype.c8.call(this, Y, R, V, E, r);
        this.P2(r, E)
    }
    ;
    D.BN.prototype.P2 = function(Y, R) {
        var V = "auto;";
        if (R != null && R.i(m.Ms) && !R.i(m.yx) || this.$_.setop == "union")
            V = "copy";
        var E = new I(O.E.z,!0);
        E.data = {
            e: O.U.u$,
            Cz: V
        };
        if (this.caller)
            this.caller.f(E)
    }
    ;
    D.BN.prototype.NH = function(Y, R, V) {
        var E = new gv(Math.round(this.Cj.x - R.x),Math.round(this.Cj.y - R.y));
        if (this.$_.patch == 1)
            E.Fb(-E.x, -E.y);
        this.q = E;
        this.IE(Y, V, this.In, Y.v.rect, Y.v.rect);
        this.D(Y, Y.v.rect)
    }
    ;
    D.IV = function() {
        D.BN.call(this, !0);
        this.$_.patch = 1
    }
    ;
    D.IV.prototype = new D.BN(!0,!0);
    D.Ly = function() {
        D.OJ.call(this, [10, 13], D.a1j, "tools/pbucket")
    }
    ;
    D.Ly.prototype = new D.OJ;
    D.Ly.prototype.enable = function(Y, R, V, E) {
        var r = new I(O.E.z,!0);
        r.data = {
            e: O.U.u$,
            Cz: "default"
        };
        R.f(r)
    }
    ;
    D.Ly.prototype.rP = function(Y, R) {}
    ;
    D.Ly.prototype.Eb = function(Y, R, V, E, r) {
        if (!Y.J3())
            return;
        var K = Y.a.Cf(r.x, r.y)
          , J = D.Mo.AX(Y, K, this.$_.wconf);
        if (J == null)
            return;
        var t = w.T(J.rect.X() * 4);
        w.h3(t, (V.B9 & 255) << 16 | (V.B9 >> 8 & 255) << 8 | (V.B9 >> 16 & 255) << 0);
        w.hL(J.channel, t, 3);
        this.nf(Y);
        this.IE(Y, "draw", t, J.rect, J.rect);
        this.D(Y, J.rect);
        this.finish(Y, J.rect)
    }
    ;
    D.MI = function() {
        D.Ls.call(this, [10, 14], D.am0, "tools/plasso");
        this._z = "crosshair";
        this.kF = [];
        this.xh = null;
        this.A2 = null;
        this.a8C = 0
    }
    ;
    D.MI.prototype = new D.Ls;
    D.MI.prototype.disable = function(Y, R, V, E) {
        this.mc(Y)
    }
    ;
    D.MI.prototype.BB = function(Y, R, V, E) {
        this.kF = [m.pl, m.dm]
    }
    ;
    D.MI.prototype.DP = function(Y) {
        return this.kF.indexOf(Y) != -1
    }
    ;
    D.MI.prototype.cm = function(Y) {
        return this.A2 != null
    }
    ;
    D.MI.prototype.zx = function() {
        return this.A2 != null
    }
    ;
    D.MI.prototype.rT = function() {
        return this.A2 != null
    }
    ;
    D.MI.prototype.Wz = function(Y, R, V, E) {
        if (this.A2 == null)
            return;
        var r = this.A2
          , K = r.P
          , J = K.length - 2
          , t = this.eL;
        if (this.TC > 1 && V.i(m.yx) && E.tc) {
            K.push(0, 0);
            r.R.push("L");
            J += 2
        } else if (V.i(m.Ms))
            t = D.AK.JN(new gv(K[J - 2],K[J - 1]), t);
        K[J] = t.x;
        K[J + 1] = t.y;
        Y.S.ZW = r;
        Y.eR = !0
    }
    ;
    D.MI.prototype.$k = function(Y, R, V, E) {
        var r = Date.now();
        if (this.A2 == null)
            this.A2 = {
                P: [this.eL.x, this.eL.y, this.eL.x, this.eL.y],
                R: ["M", "L"]
            };
        else {
            this.Wz(Y, R, V, E);
            if (r - this.a8C < 250 || gv.VN(this.eL, new gv(this.A2.P[0],this.A2.P[1])) < 5 * O.M() / Y.a.k) {
                this.xh = this.A2;
                this.finish(Y, R, V, E);
                this.mc(Y);
                return
            }
            this.A2.R.push("L");
            this.A2.P.push(this.eL.x, this.eL.y)
        }
        this.a8C = r;
        Y.S.ZW = this.A2
    }
    ;
    D.MI.prototype.mc = function(Y) {
        this.A2 = null;
        this.kF = [];
        if (Y != null) {
            Y.S.ZW = null;
            Y.eR = !0
        }
    }
    ;
    D.MI.prototype.U7 = function(Y, R, V, E) {
        D.Ls.prototype.U7.call(this, Y, R, V, E);
        if (E.i(m.TP) && this.A2 == null && this.xh && Y.v != null) {
            var r = new I(O.E.K);
            r.m = D.Tu;
            r.data = {
                e: "h_stepbck"
            };
            R.f(r);
            this.BB(Y, V, E, null);
            this.A2 = this.xh;
            return
        }
        if (this.A2 == null)
            return;
        if (E.i(m.pl) || E.i(m.dm)) {
            this.A2.P.pop();
            this.A2.P.pop();
            this.A2.R.pop();
            this.Wz(Y, V, E)
        }
        if (E.i(m.ZI)) {
            if (this.A2.P.length > 4) {
                this.xh = this.A2;
                this.finish(Y, V, E)
            }
            this.A2 = null
        }
        if (E.i(m.TP)) {
            this.A2 = null
        }
        Y.S.ZW = this.A2;
        Y.eR = !0
    }
    ;
    D.MI.prototype.getSelection = function(Y, R, V, E) {
        return D.Ls.h8(this.A2.P)
    }
    ;
    D.tT = function() {
        D.Ls.call(this, [10, 10], D.a9J, "tools/mlasso");
        this._z = "crosshair";
        this.kF = [];
        this.N = [];
        this.o_ = [];
        this.ZH = [];
        this.n1 = null;
        this.Kl = null;
        this.dI = null;
        this.c0 = 0;
        this.KY = 0
    }
    ;
    D.tT.prototype = new D.Ls;
    D.tT.prototype.disable = function(Y, R, V, E) {
        this.clear(Y)
    }
    ;
    D.tT.prototype.cm = function(Y) {
        return this.N.length != 0
    }
    ;
    D.tT.prototype.rT = function() {
        return this.N.length != 0
    }
    ;
    D.tT.prototype.DP = function(Y) {
        return this.kF.indexOf(Y) != -1
    }
    ;
    D.tT.prototype.BB = function(Y, R, V, E) {
        this.kF = [m.pl, m.dm];
        var r = this.um(this.Qn, Y);
        if (this.N.length != 0 && (gv.VN(r, this.N[0]) < 4 * O.M() / Y.a.k || Date.now() - this.c0 < 300)) {
            this.Ty(Y, this.N[0]);
            this.finish(Y, R, V);
            this.clear(Y);
            return
        }
        this.c0 = Date.now();
        if (this.N.length != 0)
            r = this.G2(r, Y);
        else {
            var K = Y.d
              , J = Y.b
              , t = w.T(K * J)
              , C = Y.tL()
              , c = K * J * 4;
            for (var x = 0; x < c; x += 4)
                t[x >>> 2] = ~~(.5 + w.l6(C[x], C[x + 1], C[x + 2]) * (C[x + 3] * (1 / 255)));
            this.n1 = w.XO.a7P(t, K, J);
            this.dI = new Uint16Array(t.length)
        }
        this.Ty(Y, r);
        this.KY = V.i(m.yx) ? 1 : 0;
        this.jX(Y)
    }
    ;
    D.tT.prototype.Ty = function(Y, R) {
        var V = this.N;
        this.o_[V.length] = this.ZH.length;
        if (V.length != 0) {
            w.XO.Vh(this.Kl, R.y * Y.d + R.x);
            var E = this.ut(Y, R);
            E.reverse();
            var r = D.tT.fa(Y, E);
            this.ZH = this.ZH.concat(r)
        }
        V.push(R);
        this.nQ(Y)
    }
    ;
    D.tT.prototype.nQ = function(Y) {
        var R = this.N[this.N.length - 1]
          , V = R.y * Y.d + R.x;
        this.Kl = w.XO.aag(this.n1.rD, this.n1.Ni, V);
        this.dI.fill(0)
    }
    ;
    D.tT.prototype.um = function(Y, R) {
        return new gv(Math.floor(Math.max(0, Math.min(R.d - 1, Y.x))),Math.floor(Math.max(0, Math.min(R.b - 1, Y.y))))
    }
    ;
    D.tT.prototype.clear = function(Y) {
        this.ZH = [];
        this.N = [];
        this.o_ = [];
        this.n1 = null;
        this.Kl = null;
        this.dI = null;
        if (Y != null) {
            Y.S.ZW = null;
            Y.S.ho = [];
            Y.eR = !0
        }
        this.kF = []
    }
    ;
    D.tT.prototype.Wz = function(Y, R, V, E) {
        var r = this.N
          , K = r.length;
        if (K == 0)
            return;
        var J = this.G2(this.um(this.eL, Y), Y)
          , t = this.ut(Y, J);
        for (var x = 0; x < t.length; x++) {
            var C = t[x]
              , c = new gv(C % Y.d,Math.floor(C / Y.d));
            if (this.dI[C] > 30 && gv.VN(c, r[K - 1]) > 20) {
                this.Ty(Y, c);
                return
            }
            this.dI[C]++
        }
        if (this.KY == 1 && E.tc)
            this.Ty(Y, J);
        this.jX(Y)
    }
    ;
    D.tT.prototype.jX = function(Y) {
        var R = this.N;
        if (R.length != 0) {
            var V = this.G2(this.um(this.eL, Y), Y)
              , E = this.ut(Y, V);
            E.reverse();
            var r = D.tT.fa(Y, E)
              , K = this.ZH.concat(r)
              , J = Y.S.ZW = {
                P: K,
                R: ["M"]
            };
            for (var x = 2; x < K.length; x += 2)
                J.R.push("L")
        }
        Y.S.ho = [];
        for (var x = 0; x < R.length; x++)
            Y.S.ho.push(R[x].x + .5, R[x].y + .5);
        Y.eR = !0
    }
    ;
    D.tT.prototype.$k = function(Y, R, V, E) {}
    ;
    D.tT.prototype.U7 = function(Y, R, V, E) {
        if (this.N.length == 0)
            return;
        if (E.i(m.pl) || E.i(m.dm)) {
            this.N.pop();
            this.ZH = this.ZH.slice(0, this.o_[this.N.length]);
            this.o_.pop();
            if (this.N.length == 0)
                this.clear(Y);
            else
                this.nQ(Y);
            this.jX(Y)
        }
        if (E.i(m.ZI)) {
            var r = this.um(this.eL, Y);
            this.Ty(Y, r);
            this.finish(Y, V, E);
            this.clear(Y)
        }
        if (E.i(m.TP)) {
            this.clear(Y)
        }
    }
    ;
    D.tT.prototype.getSelection = function(Y, R, V, E) {
        return D.Ls.h8(this.ZH)
    }
    ;
    D.tT.prototype.ut = function(Y, R) {
        var V = this.N[this.N.length - 1]
          , E = V.y * Y.d + V.x
          , r = R.y * Y.d + R.x;
        if (this.KY == 1)
            return [r, E];
        var K = [r];
        while (r != E) {
            r = this.Kl.Xg[r];
            K.push(r);
            if (K.length > 5e3) {
                console.log(K);
                throw "e"
            }
        }
        return K
    }
    ;
    D.tT.fa = function(Y, R) {
        var V = []
          , E = Y.d;
        for (var x = 0; x < R.length; x++) {
            var r = R[x];
            V.push(r % E + .5, Math.floor(r / E) + .5)
        }
        return V
    }
    ;
    D.tT.prototype.G2 = function(Y, R) {
        var V = R.d
          , E = R.b
          , r = Y.clone()
          , J = 3;
        w.XO.Vh(this.Kl, Y.y * V + Y.x);
        var K = this.Kl._Q[Y.y * V + Y.x];
        for (var t = -J + 1; t < J; t++)
            for (var C = -J + 1; C < J; C++) {
                var c = Y.x + C
                  , M = Y.y + t;
                if (c < 0 || c >= V || M < 0 || M >= E)
                    continue;
                w.XO.Vh(this.Kl, M * V + c);
                if (this.Kl._Q[M * V + c] < K)
                    r.Fb(c, M)
            }
        return r
    }
    ;
    D.fR = function() {
        D.R0.call(this, [10, 36], D.a19, "tools/ruler");
        this.gZ = null;
        this.Xd = null;
        this.OK = null;
        this.D3 = null
    }
    ;
    D.fR.prototype = new D.R0;
    D.fR.prototype.cm = function(Y) {
        return Y.tc
    }
    ;
    D.fR.prototype.disable = function(Y, R, V, E) {
        this.gZ = this.Xd = null;
        if (Y)
            this.h4(Y)
    }
    ;
    D.fR.prototype.K_ = function(Y, R, V, E, r) {
        var K = Y.a.k / O.M()
          , J = Y.a.Cf(r.x, r.y);
        J.x = Math.round(J.x);
        J.y = Math.round(J.y);
        var t = this.gZ;
        if (t && gv.VN(J, t[0]) * K < 6)
            this.Xd = [0];
        else if (t && gv.VN(J, t[1]) * K < 6)
            this.Xd = [1];
        else if (t && D.fR.a0V(t[0], t[1], J) * K < 6 && Math.min(t[0].x, t[1].x) - 5 <= J.x && J.x <= Math.max(t[0].x, t[1].x) + 5 && Math.min(t[0].y, t[1].y) - 5 <= J.y && J.y <= Math.max(t[0].y, t[1].y) + 5) {
            this.Xd = [0, 1];
            this.D3 = [t[0].clone(), t[1].clone()];
            this.OK = J
        } else {
            this.gZ = [J.clone(), J.clone()];
            this.Xd = [1]
        }
    }
    ;
    D.fR.prototype.NZ = function(Y, R, V, E, r) {
        if (this.Xd == null)
            return;
        var K = this.gZ
          , J = this.Xd
          , t = Y.a.Cf(r.x, r.y);
        t.x = Math.round(t.x);
        t.y = Math.round(t.y);
        if (J.length == 2) {
            var C = t.x - this.OK.x
              , c = t.y - this.OK.y;
            K[0] = this.D3[0].clone();
            K[0].offset(C, c);
            K[1] = this.D3[1].clone();
            K[1].offset(C, c)
        } else {
            K[J[0]].Fb(t.x, t.y);
            if (E.i(m.Ms)) {
                K[J[0]] = D.AK.JN(K[1 - J[0]], K[J[0]])
            }
        }
        this.h4(Y);
        this.$a(R, O.E.z, {
            e: O.U.oN,
            m: this.id,
            an0: K[0],
            uC: K[1],
            zX: Y.zX,
            ajd: Y.d
        })
    }
    ;
    D.fR.prototype.Eb = function(Y, R, V, E, r) {
        this.Xd = null
    }
    ;
    D.fR.prototype.$a = function(Y, R, V) {
        var E = new I(R,!0);
        E.data = V;
        Y.f(E)
    }
    ;
    D.fR.prototype.h4 = function(Y) {
        var R = this.gZ;
        if (R == null) {
            Y.S.ZW = null;
            Y.S.ho = []
        } else {
            var V = [R[0].x, R[0].y, R[1].x, R[1].y];
            Y.S.ZW = {
                R: ["M", "L"],
                P: V
            };
            Y.S.ho = V
        }
        Y.eR = !0
    }
    ;
    D.fR.a0V = function(Y, R, V) {
        var E = R.x - Y.x
          , r = R.y - Y.y
          , K = Math.abs(r * V.x - E * V.y + R.x * Y.y - R.y * Y.x)
          , J = Math.sqrt(E * E + r * r);
        return K / J
    }
    ;
    D.HS = function() {
        D.OJ.call(this, [10, 19], D.Wk, "tools/sharpen");
        this.vT = "copy"
    }
    ;
    D.HS.prototype = new D.OJ;
    D.HS.prototype.K_ = function(Y, R, V, E, r) {
        var K = this.$_.pdetail ? g6.c2 : g6.Wk;
        if (E.i(m.yx))
            K = g6.Xj;
        this.Fx(Y, V, E, r, this.$_.strn, K);
        if (this.WY == null)
            return;
        this.MZ(Y)
    }
    ;
    D.HS.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.Aa = function() {
        D.OJ.call(this, [10, 24], D.He, "tools/shbrush");
        this.vT = "draw";
        this.$_.opacity = .5
    }
    ;
    D.Aa.prototype = new D.OJ;
    D.Aa.prototype.K_ = function(Y, R, V, E, r) {
        this.Fx(Y, V, E, r, 1);
        if (this.WY == null)
            return;
        this.ex(Y);
        this.MZ(Y)
    }
    ;
    D.Aa.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.Aa.prototype.Eb = function(Y, R, V, E, r) {
        if (this.WY == null)
            return;
        this.IE(Y, "sheal", this.WY.TY(), this.WY.Tf(), this.WY.Vv(), null);
        this.D(Y, this.WY.Vv());
        D.OJ.prototype.Eb.call(this, Y, R, V, E, r)
    }
    ;
    D.JD = function() {
        D.OJ.call(this, [10, 20], D.Ow, "tools/smudge");
        this.vT = "copy"
    }
    ;
    D.JD.prototype = new D.OJ;
    D.JD.prototype.K_ = function(Y, R, V, E, r) {
        this.Fx(Y, V, E, r, this.$_.strn, g6.Ow);
        if (this.WY == null)
            return;
        this.MZ(Y)
    }
    ;
    D.JD.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.jz = function() {
        D.OJ.call(this, [10, 23], D.GN, "tools/sponge");
        this.vT = "sponge"
    }
    ;
    D.jz.prototype = new D.OJ;
    D.jz.prototype.K_ = function(Y, R, V, E, r) {
        this.Fx(Y, V, E, r, this.$_.flow);
        if (this.WY == null)
            return;
        this.MZ(Y)
    }
    ;
    D.jz.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        this.il(Y, V, E, r);
        this.MZ(Y)
    }
    ;
    D.Qv = function() {
        D.R0.call(this, [10, 17], D.V9, "tools/zoom");
        this.tb = !1;
        this.vX = !0;
        this.Sp = 0;
        this.y7 = null;
        this.Om = null;
        this.mR = 0;
        this.Yi = null;
        this.Wh = 0;
        this.q8 = new bR([{
            name: [8, 0],
            lF: "Ctrl + +"
        }, {
            name: [8, 1],
            lF: "Ctrl + -",
            r5: !0
        }, {
            name: [20, 3],
            lF: "Ctrl + 0"
        }, {
            name: ["VAR0: 100%", [20, 2]],
            lF: "Ctrl + 1"
        }],[{
            c: O.E.K,
            m: D.V9,
            I: {
                e: "zoom",
                vX: !0
            }
        }, {
            c: O.E.K,
            m: D.V9,
            I: {
                e: "zoom",
                vX: !1
            }
        }, {
            c: O.E.K,
            m: D.V9,
            I: {
                e: "adapt",
                G: "fitscr"
            }
        }, {
            c: O.E.K,
            m: D.V9,
            I: {
                e: "adapt",
                G: "pixel"
            }
        }])
    }
    ;
    D.Qv.prototype = new D.R0;
    D.Qv.prototype.og = function(Y, R, V, E, r) {
        var K = this.q8;
        K.B();
        K.parent = R;
        K.update(Y, V);
        var J = new I(O.E.z,!0);
        J.data = {
            e: O.U.nq,
            iF: K,
            x: r.Gt + 2,
            y: r.nV + 1
        };
        R.f(J)
    }
    ;
    D.Qv.prototype.enable = function(Y, R, V, E) {
        this.zw(R, E);
        if (Y && Date.now() - this.Sp < 300)
            this.Vl({
                e: "adapt",
                G: "pixel"
            }, R, Y, E, V);
        this.Sp = Date.now()
    }
    ;
    D.Qv.prototype.K_ = function(Y, R, V, E, r) {
        this.Om = new gv(r.x,r.y);
        this.mR = Y.a.k;
        this.Yi = Y.a.q.clone()
    }
    ;
    D.Qv.prototype.NZ = function(Y, R, V, E, r) {
        if (this.Om == null)
            return;
        var K = Math.round((r.x - this.Om.x) / 16);
        if (K == 0)
            return;
        var J = D.Qv.Ed(this.mR)
          , t = D.Qv.DZ[Math.max(0, Math.min(D.Qv.DZ.length - 1, J - K))];
        Y.a.k = this.mR;
        Y.a.q = this.Yi.clone();
        this.Vl({
            e: "zoom",
            k: t,
            YH: this.Om
        }, R, Y, E, V)
    }
    ;
    D.Qv.prototype.Eb = function(Y, R, V, E, r) {
        if (gv.VN(this.Om, r) < 4) {
            var K = this.Z3(E);
            this.Vl({
                e: "zoom",
                vX: K,
                YH: r
            }, R, Y, E, V)
        }
        this.Om = null
    }
    ;
    D.Qv.DZ = [32, 16, 12, 8, 7, 6, 5, 4, 3, 2, 1, 2 / 3, 1 / 2, 1 / 2 * (2 / 3), 1 / 4, 1 / 4 * (2 / 3), 1 / 8, 1 / 8 * (2 / 3), 1 / 16, 1 / 16 * (2 / 3), 1 / 32, 1 / 32 * (2 / 3), 1 / 64];
    D.Qv.$Z = function(Y, R, V, E) {
        var r = 1;
        while (Y * r * 1 / 2 > V || R * r * 1 / 2 > E)
            r *= 1 / 2;
        if (Y * r * 2 / 3 > V || R * r * 2 / 3 > E)
            r *= 1 / 2;
        else if (Y * r > V || R * r > E)
            r *= 2 / 3;
        return r
    }
    ;
    D.Qv.ab1 = function(Y, R) {
        var V = D.Qv.Ed(Y);
        if (R && V == 0)
            return Y;
        if (!R && V == D.Qv.DZ.length - 1)
            return Y;
        return D.Qv.DZ[R ? V - 1 : V + 1]
    }
    ;
    D.Qv.Ed = function(Y) {
        var R = 0;
        while (D.Qv.DZ[R] > Y)
            R++;
        return R
    }
    ;
    D.Qv.Yx = function(Y, R, V, E) {
        var r = Y.P3;
        if (E == 0 || E == null) {
            E = D.Qv.ab1(Y.k, V);
            if (E == Y.k)
                return
        }
        var K = Y.Cf(R.x, R.y);
        if (r.d * E <= Y.GS.d && r.b * E <= Y.GS.b) {
            Y.q.Fb(0, 0);
            Y.k = E
        } else {
            var J = Y.QC()
              , t = Y.k / E;
            J.translate(-K.x, -K.y);
            J.scale(t, t);
            J.translate(K.x, K.y);
            Y.I5(J)
        }
    }
    ;
    D.Qv.prototype.Vl = function(Y, R, V, E, r) {
        var K = 0
          , J = !1
          , t = null;
        if (Y.e == "adapt") {
            var C = 0;
            if (Y.G == "pixel")
                C = 1;
            if (Y.G == "fitscr") {
                var C = 0
                  , c = V.a.GS.d
                  , M = V.a.GS.b;
                if (V.d <= c && V.b <= M) {
                    var a = 1;
                    while (V.d * (a + 1) <= c && V.b * (a + 1) <= M)
                        a++;
                    C = a
                } else {
                    C = D.Qv.$Z(V.d, V.b, c, M)
                }
            }
            t = new gv(Math.round(V.a.GS.d / 2),Math.round(V.a.GS.b / 2));
            K = C;
            D.Qv.Yx(V.a, t, J, K);
            V.tz = !0
        }
        if (Y.e.startsWith("multi")) {
            function Q(X) {
                var N = X[0].x - X[1].x
                  , k = X[0].y - X[1].y;
                return Math.sqrt(N * N + k * k)
            }
            function A(X) {
                return new gv((X[0].x + X[1].x) / 2,(X[0].y + X[1].y) / 2)
            }
            var p = Y.Uz
              , v = A(p);
            if (Y.e == "multidown") {
                this.y7 = [p, V.a.k, V.a.Cf(v.x, v.y)]
            } else {
                K = this.y7[1] * Q(p) / Q(this.y7[0]);
                if (K >= 1)
                    K = Math.min(32, Math.round(K));
                else {
                    var W = 0
                      , n = 1e9
                      , $ = D.Qv.DZ;
                    for (var x = 0; x < $.length; x++) {
                        var G = Math.abs(1 - K / $[x]);
                        if (G < n) {
                            n = G;
                            W = x
                        }
                    }
                    K = $[W]
                }
                if (K != V.a.k)
                    D.Qv.Yx(V.a, v, J, K);
                var o = this.y7[2]
                  , B = V.a.nS(o.x, o.y)
                  , L = V.a.q;
                L.x = Math.round(L.x + v.x - B.x);
                L.y = Math.round(L.y + v.y - B.y);
                V.tz = !0
            }
        }
        if (Y.e == "scroll") {
            t = Y.YH;
            this.Wh += Y.t6.y;
            var u = 14;
            if (this.Wh < -u) {
                J = !0;
                this.Wh = Math.max(this.Wh + u, -(u - 1))
            } else if (this.Wh > u) {
                J = !1;
                this.Wh = Math.min(this.Wh - u, u - 1)
            } else
                return;
            D.Qv.Yx(V.a, t, J, K);
            V.tz = !0
        }
        if (Y.e == "zoom") {
            t = Y.YH ? Y.YH : new gv(Math.round(V.a.GS.d / 2),Math.round(V.a.GS.b / 2));
            if (Y.k != null)
                K = Y.k;
            else
                J = Y.vX;
            D.Qv.Yx(V.a, t, J, K);
            V.tz = !0
        }
        if (Y.e == "mskView") {
            var y = V.t[V.C[0]]
              , S = y.St == 3 ? y.Ka(V).r : y.fp();
            if (Y.G == 0) {
                V.a.r1 = [1, 1, 1];
                S.rw = !1
            }
            if (Y.G == 1) {
                V.a.r1 = [1, 1, 1];
                S.rw = !0
            }
            if (Y.G == 2) {
                V.a.r1 = [0, 0, 0];
                S.rw = !0
            }
            for (var x = 0; x < V.Rg.length; x++)
                V.Rg[x].rw = !1;
            V.dR = [];
            V.eR = !0
        }
    }
    ;
    D.Qv.prototype.U7 = function(Y, R, V, E) {
        if (this.tb != E.i(m.yx)) {
            this.tb = E.i(m.yx);
            var r = {
                e: O.U.oN,
                m: this.id,
                tb: this.tb
            }
              , K = new I(O.E.z,!0);
            K.data = r;
            R.f(K);
            this.zw(R, E)
        }
    }
    ;
    D.Qv.prototype.zw = function(Y, R) {
        var V = new I(O.E.z,!0)
          , E = this.Z3(R);
        V.data = {
            e: O.U.u$,
            Cz: E ? "zoom-in" : "zoom-out"
        };
        Y.f(V)
    }
    ;
    D.Qv.prototype.c8 = function(Y, R, V, E) {
        this.vX = Y.vX;
        this.zw(R, E)
    }
    ;
    D.Qv.prototype.Z3 = function(Y) {
        var R = this.vX;
        if (Y.i(m.dL) && Y.i(m.sV))
            R = !0;
        if (this.tb)
            R = !R;
        return R
    }
    ;
    D.f3 = function(Y, R, V) {
        D.R0.call(this, Y, R, V);
        this.tW = null;
        this.ri = null;
        this.zk = null;
        this.a5R = 0
    }
    ;
    D.f3.prototype = new D.R0;
    D.f3.prototype.enable = function(Y, R, V, E, r) {
        this.ri = V;
        var K = new I(O.E.z,!0);
        K.data = {
            e: O.U.u$,
            Cz: "default"
        };
        R.f(K)
    }
    ;
    D.f3.prototype.og = function(Y, R, V, E, r) {
        if (Y.PD()[0].length == 0)
            return;
        var K = new I(O.E.z,!0);
        K.data = {
            e: O.U.oN,
            m: this.id,
            PN: r,
            HR: Y,
            gL: V
        };
        R.f(K)
    }
    ;
    D.f3.prototype.WR = function(Y, R) {
        var V = new I(O.E.z,!0);
        V.data = {
            e: O.U.KZ,
            jR: fG.Eo
        };
        if (!R.Ql)
            Y.f(V);
        V.data = {
            e: O.U.KZ,
            jR: fG.nL
        };
        if (!R.YX.Pf)
            Y.f(V)
    }
    ;
    D.f3.prototype.J$ = function(Y, R, V, E) {
        if (V.BL != this.id)
            return;
        if (Y.C.length == 0)
            return;
        var r = Y.t[Y.C[0]]
          , K = r.add.vmsk
          , J = r.add.vstk
          , t = D.f3.Sv(Y, Y.C[0]);
        this.tW = Y;
        this.zk = R;
        if (r.pG() && K != null && (JSON.stringify(J) != JSON.stringify(V.KN) || JSON.stringify(t) != JSON.stringify(V.vg))) {
            this.a5R = Date.now();
            var C = new I(O.E.z,!0);
            C.data = {
                e: O.U.KZ,
                jR: fG.ew,
                G: t
            };
            R.f(C);
            C.data = {
                e: O.U.KZ,
                jR: fG.YY,
                G: J
            };
            R.f(C)
        }
    }
    ;
    D.f3.prototype.rP = function(Y, R) {
        if (this.tW == null)
            return;
        if (R == fG.Di || R == fG.ew || R == fG.YY) {
            if (Date.now() - this.a5R < 50)
                return;
            var V = R == fG.ew
              , E = this.tW
              , r = V ? Y.vg : Y.KN
              , K = [];
            for (var x = 0; x < E.C.length; x++) {
                var J = E.C[x]
                  , t = E.t[J];
                if (!t.pG() || t.add.vmsk == null)
                    continue;
                K.push(J)
            }
            var C = new I(O.E.K,!0);
            C.m = D.AQ;
            C.data = {
                e: j.xi,
                wu: K,
                sL: V,
                G: r
            };
            if (K.length != 0)
                this.zk.f(C)
        }
    }
    ;
    D.f3.prototype.a4W = function(Y) {
        if (typeof Y == "number") {
            var R = new I(O.E.io,!0);
            R.data = D.z0.iy(0);
            R.data.eQ.Usng.v.Type.v.Clr.v = w.W.gD({
                h: Y >>> 16 & 255,
                l: Y >>> 8 & 255,
                O: Y >>> 0 & 255
            });
            this.zk.f(R)
        }
    }
    ;
    D.f3.prototype.Vl = function(Y, R, V, E, r) {
        this.zk = R;
        if (Y.e == "newfill") {
            if (Y.ih == 0) {
                var K = new I(O.E.z,!0);
                K.data = {
                    e: O.U.D0,
                    xs: "colorpicker",
                    Ae: r.B9,
                    uP: this.a4W.bind(this)
                };
                R.f(K)
            }
        } else if (Y.e == "pathedit") {
            var J = Y.zN
              , t = ""
              , C = V.Pf.slice(0)
              , c = V.JU.slice(0)
              , M = V.Pf.slice(0)
              , a = V.JU.slice(0);
            if (J == "rnm") {
                var Q = -1 - Y.wt
                  , A = C[Q]
                  , p = aP.W9(Y.name, A.add);
                if (Q != 0)
                    M[Q] = p;
                else {
                    a = [M.length];
                    M.push(p);
                    M[0] = aP.W9("Work Path")
                }
                t = "Rename"
            } else if (J == "new") {
                M.push(aP.W9("Path " + C.length));
                a = [M.length - 1];
                t = "New"
            } else if (J == "del") {
                if (a.length == 0)
                    return;
                a.sort(function(S, _) {
                    return S - _
                });
                if (a[0] == 0) {
                    M[0] = aP.W9(C[0].name);
                    a = a.slice(1)
                }
                var v = 0;
                while (a.length != 0) {
                    M.splice(a[0] - v, 1);
                    a = a.slice(1);
                    v++
                }
                t = "Delete"
            } else if (J == "fromsel") {
                var W = M[0] = aP.W9("Work Path");
                a = [0];
                if (V.v == null)
                    return;
                var n = V.v.channel.slice(0);
                for (var x = 0; x < n.length; x++)
                    n[x] = n[x] > 128 ? 2 : 1;
                var $ = V.v.rect.clone();
                $.Yl(1, 1);
                var G = w.T($.X());
                w.md(n, V.v.rect, G, $);
                var o = bV.ci(G, $.d, $.b, Math.round($.X() * 5e-4))
                  , B = bV.PD(o)
                  , L = new bF(1,0,0,1,-1 + V.v.rect.x,-1 + V.v.rect.y);
                for (var x = 0; x < B.length; x++)
                    w.H.g(B[x].path.P, L, B[x].path.P);
                for (var x = 0; x < B.length; x++) {
                    var u = B[x];
                    if (u.color == 1 && u.parent == -1)
                        continue;
                    var y = w.H.cU(B[x].path, !1);
                    W.add.vmsk.N = W.add.vmsk.N.concat(y.slice(2))
                }
                W.add.vogk = j.OA(W.add.vmsk.N);
                t = "Selection to"
            }
            var S = new il(t + " Path",this);
            S.data = {
                yR: C,
                IY: c,
                alh: M,
                XH: a
            };
            if (J == "fromsel") {
                S.data.w$ = V.v;
                S.data.o6 = null
            }
            V.Ug(S);
            this.$E(S.data, V)
        } else {
            var X = V.PD(Y.e == "append")
              , B = X[0]
              , N = X[1]
              , W = B[N[0]]
              , k = W.add.vmsk
              , d = W.add.vogk
              , P = k.clone()
              , Z = k.clone()
              , s = JSON.stringify(d);
            if (Y.e == "remove") {
                if (Z.C.length == 0)
                    return;
                var v = 0;
                for (var x = 0; x < Z.C.length; x++) {
                    d.splice(Z.C[x] + v, 1);
                    v--
                }
                Z.N = w.Y.a0o(Z.N, Z.C);
                Z.C = [];
                Z.QS = []
            }
            if (Y.e == "append") {
                D.f3.p0(Y.afR, Z, d)
            }
            this.Um(V, W.wt, Z, d);
            this.IZ(V, Y._O, W.wt, P, Z.clone(), null, s, JSON.stringify(d))
        }
    }
    ;
    D.f3.Y2 = function(Y, R) {
        var V = w.Y.aij(Y.N, Y.C)
          , E = [];
        for (var x = 0; x < Y.C.length; x++)
            E.push(JSON.parse(JSON.stringify(R[Y.C[x]])));
        return [V, E]
    }
    ;
    D.f3.p0 = function(Y, R, V) {
        var E = w.Y.VH(R.N)
          , r = w.Y.VH(Y[0]);
        R.N = R.N.concat(Y[0].slice(2));
        R.C = [];
        for (var x = 0; x < r; x++)
            R.C.push(E + x);
        for (var x = 0; x < r; x++)
            V.push(JSON.parse(JSON.stringify(Y[1][x])))
    }
    ;
    D.f3.prototype.DP = function(Y, R) {
        if (R == null)
            return !1;
        var V = R.PD()
          , E = V[0]
          , r = V[1];
        if (r.length == 0)
            return !1;
        var K = E[r[0]]
          , J = K.add.vmsk;
        if (J && J.C.length + J.QS.length != 0)
            return [m.pl, m.dm].indexOf(Y) != -1
    }
    ;
    D.f3.prototype.U7 = function(Y, R, V, E) {
        if (Y == null)
            return;
        var r = Y.PD()
          , K = r[0]
          , J = r[1];
        if (J.length == 0)
            return;
        var t = K[J[0]]
          , C = t.add.vmsk;
        if (E.i(m.TP) || E.i(m.ZI)) {
            C.QS = [];
            Y.eR = !0
        }
        if (C.C.length != 0) {
            var c = E.ro();
            if (c.x != 0 || c.y != 0) {
                var M = C.clone()
                  , a = C.clone()
                  , Q = new bF(1,0,0,1,c.x,c.y)
                  , A = t.add.vogk
                  , p = JSON.stringify(A);
                w.Y.DS(a.N, Q, a.C);
                w.Wg.g(A, w.J.tu(Q), a.C);
                this.Um(Y, t.wt, a, A);
                this.IZ(Y, "Move Paths", t.wt, M, a.clone(), !0, p, JSON.stringify(A))
            }
            if (E.i(m.pl) || E.i(m.dm))
                this.Vl({
                    e: "remove",
                    _O: "Delete Paths"
                }, R, Y, E, V)
        }
    }
    ;
    D.f3.prototype.IZ = function(Y, R, V, E, r, K, J, t) {
        var C = new il(R,this);
        C.data = {
            gA: V,
            Vs: E,
            hq: r,
            ams: K,
            a8P: J,
            dp: t
        };
        Y.Ug(C)
    }
    ;
    D.f3.prototype.$E = function(Y, R) {
        if (Y.gA != null)
            this.Um(R, Y.gA, Y.hq.clone(), JSON.parse(Y.dp));
        else {
            R.Pf = Y.alh.slice(0);
            R.JU = Y.XH.slice(0);
            R.eR = R.IU = !0
        }
        if (Y.w$ || Y.o6) {
            R.v = Y.o6;
            R.ha = !0
        }
    }
    ;
    D.f3.prototype.Zk = function(Y, R) {
        if (Y.gA != null)
            this.Um(R, Y.gA, Y.Vs.clone(), JSON.parse(Y.a8P));
        else {
            R.Pf = Y.yR.slice(0);
            R.JU = Y.IY.slice(0);
            R.eR = R.IU = !0
        }
        if (Y.w$ || Y.o6) {
            R.v = Y.w$;
            R.ha = !0
        }
    }
    ;
    D.f3.prototype.Um = function(Y, R, V, E) {
        var r = R < 0 ? Y.Pf[-1 - R] : R < 1e6 ? Y.t[R] : Y.t[R - 1e6].add.TySh;
        r.add.vmsk = V;
        r.add.vogk = E;
        if (1e6 <= R) {
            bg.Hj(r);
            var K = Y.t[R - 1e6]
              , J = r
              , t = this.ri
              , C = new cd(J.VW,t.jq)
              , c = bp.o0(C, J);
            K.rect = c.V;
            K.buffer = c.uG;
            K.D();
            Y.D()
        } else if (0 <= R) {
            V.Dw = !0;
            r.Qd(Y);
            Y.D()
        }
        Y.eR = Y.IU = !0
    }
    ;
    D.f3.Sv = function(Y, R) {
        var V = Y.t[R]
          , E = V.add.vstk
          , r = null;
        if (E && !E.fillEnabled.v)
            r = {
                JQ: 0
            };
        else if (V.add.SoCo)
            r = {
                JQ: 1,
                Cv: V.add.SoCo
            };
        else if (V.add.GdFl)
            r = {
                JQ: 2,
                Cv: V.add.GdFl
            };
        else if (V.add.PtFl)
            r = {
                JQ: 3,
                Cv: V.add.PtFl
            };
        return r
    }
    ;
    D.f3.pn = function(Y, R) {
        var V = Y.add.vmsk
          , E = Y.add.vstk
          , r = R.JQ;
        if (E)
            E.fillEnabled.v = r != 0;
        if (r > 0) {
            var K = ["SoCo", "GdFl", "PtFl"][r - 1];
            for (var x = 0; x < 3; x++)
                delete Y.add[["SoCo", "GdFl", "PtFl"][x]];
            Y.add[K] = R.Cv
        }
    }
    ;
    D.z0 = function(Y, R, V, E) {
        D.f3.call(this, Y, R, V);
        this.$_ = {
            tmode: 1,
            shape: a3.WL(),
            pshape: 0,
            binop: 0,
            crad: 0,
            irad: 40,
            length: 4,
            sides: 5,
            width: 5,
            tolr: 5,
            tsiz: 300,
            cstr: {
                eO: 0
            }
        };
        this.al4 = E;
        this.j4 = null;
        this.y8 = null;
        this.bA = null
    }
    ;
    D.z0.prototype = new D.f3;
    D.z0.prototype.cm = function(Y) {
        return Y.tc && this.id != D.PU
    }
    ;
    D.z0.prototype.enable = function(Y, R, V, E, r) {
        this.ri = V;
        var K = new I(O.E.z,!0);
        K.data = {
            e: O.U.u$,
            Cz: "crosshair"
        };
        R.f(K)
    }
    ;
    D.z0.prototype.zb = function(Y, R, V, E) {}
    ;
    D.z0.prototype.K_ = function(Y, R, V, E, r) {
        var K = this.$_.tmode;
        if (K != 2)
            this.WR(R, V);
        if (K == 2 && !Y.J3())
            return;
        var J = Y.a.Cf(r.x, r.y);
        J = D.RT.wW(Y, J, V);
        this.bA = [J.x, J.y];
        this.j4 = J;
        this.y8 = new gv(0,0)
    }
    ;
    D.z0.prototype.b5 = function(Y, R, V) {
        var E = [this.j4.clone(), R.clone()];
        if (this.al4)
            E = D.z0.th(E[0], E[1], V, !0, this.$_.cstr);
        if (Y)
            Y.a.Ob = new gE(E[0].x,E[0].y,E[1].x - E[0].x,E[1].y - E[0].y);
        return this.zb(E[0], E[1], V.i(m.Ms), this.bA)
    }
    ;
    D.z0.prototype.nK = function(Y, R, V) {
        var E = Y.a.Cf(R.x, R.y)
          , r = this.$_.cstr;
        if (r.eO == 2) {
            var K = new gE(E.x - r.x,E.y - r.y,r.x,r.y)
              , J = D.RT.CR(Y, K, V);
            E.x += J[0];
            E.y += J[1];
            D.RT.cF(Y, K, J)
        } else
            E = D.RT.wW(Y, E, V);
        return E
    }
    ;
    D.z0.prototype.NZ = function(Y, R, V, E, r) {
        if (this.j4 == null)
            return;
        var K = this.bA
          , J = K.length
          , t = r ? this.nK(Y, r, V) : new gv(K[J - 2],K[J - 1]);
        if (E.i(m.dL))
            this.j4 = t.O2(this.y8);
        else
            this.y8 = t.O2(this.j4);
        K.push(t.x, t.y);
        if (this.$_.shape == null)
            this.$_.shape = V.Tm[0];
        var C = this.b5(Y, t, E)[0]
          , c = w.H.FY(C);
        Y.S.ZW = c;
        if (this.id != D.PU && this.id != D._s && this.id != D.H0)
            D.R0.hu(r.x + 10, r.y - 10, Y.a.Ob, Y, V);
        Y.eR = !0
    }
    ;
    D.z0.prototype.afH = function(Y, R, V, E) {
        var r = Y[4].clone();
        if (E) {
            r.x -= R / 2;
            r.y -= V / 2
        }
        var K = this.zb(r, new gv(r.x + R,r.y + V), !1, this.bA);
        this.gE(Y[0], Y[1], Y[2], K)
    }
    ;
    D.z0.prototype.gE = function(Y, R, V, E) {
        var r = new I(O.E.io,!0);
        r.data = D.z0.XR(E[1], V);
        R.f(r);
        if (E[1].v.classID == "customShape" && E[1].v.Nm.v.startsWith("--")) {
            var K = Y.PD()
              , J = K[0]
              , t = K[1]
              , C = J[t.pop()]
              , c = C.add.vmsk
              , M = C.add.vogk
              , a = c.clone();
            a.N = E[0];
            this.Um(Y, C.wt, a, M)
        }
    }
    ;
    D.z0.prototype.Eb = function(Y, R, V, E, r) {
        if (this.j4 == null)
            return;
        var K = this.nK(Y, r, V)
          , J = this.$_.binop
          , t = this.$_.tmode
          , C = this.bA
          , c = C.length;
        if (this.id == D.PU && c <= 4) {} else if (c <= 4) {
            K.x = Math.round(K.x);
            K.y = Math.round(K.y);
            var M = new I(O.E.z);
            M.data = {
                e: O.U.D0,
                xs: "createshape",
                a3d: this.afH.bind(this),
                a05: this.name,
                aeL: [Y, R, V, E, K]
            };
            R.f(M)
        } else if (c != 2) {
            var a = this.b5(Y, K, E)
              , Q = a[0];
            if (t == 0 && Q.length > 2) {
                Q[2].yV = [1, 2, 3, 0][J];
                var A = Y.PD(!0)
                  , p = A[0]
                  , v = A[1]
                  , W = p[v.pop()]
                  , n = W.add.vmsk
                  , $ = W.add.vogk
                  , G = n.clone()
                  , o = n.clone()
                  , B = JSON.stringify($);
                o.N = o.N.concat(Q.slice(2));
                o.C = [w.Y.VH(o.N) - 1];
                var L = w.Wg.i3(a[1]);
                $.push(L ? L : w.Wg.TX());
                this.Um(Y, W.wt, o, $);
                this.IZ(Y, this.name, W.wt, G, o, null, B, JSON.stringify($))
            } else if (t == 1) {
                this.gE(Y, R, V, a)
            } else if (t == 2) {
                var o = new j.Ro;
                o.N = o.N.concat(Q.slice(2));
                var u = o.fp()
                  , y = w.T(u.rect.X() * 4);
                w.h3(y, (V.B9 & 255) << 16 | (V.B9 >> 8 & 255) << 8 | (V.B9 >> 16 & 255) << 0);
                w.hL(u.channel, y, 3);
                var S = new I(O.E.K,!0);
                S.m = D.RR;
                S.data = {
                    e: "draw",
                    VS: {
                        buffer: y,
                        rect: u.rect.clone()
                    },
                    _O: this.name
                };
                R.f(S)
            }
        }
        this.j4 = null;
        Y.S.ZW = null;
        Y.S.VE = null;
        Y.S.po = [];
        Y.a.Ob = null;
        Y.eR = !0
    }
    ;
    D.z0.prototype.c8 = function(Y, R, V, E, r) {
        for (var V in Y)
            this.$_[V] = Y[V]
    }
    ;
    D.z0.th = function(Y, R, V, E, r) {
        var K = Y.x
          , J = Y.y
          , t = R.x
          , C = R.y;
        if (r && r.eO == 2) {
            if (E) {
                t = Math.round(t);
                C = Math.round(C)
            }
            K = t - r.x;
            J = C - r.y
        } else {
            var c = 0;
            if (r && r.eO == 1)
                c = r.y / r.x;
            else if (V && V.i(m.Ms))
                c = 1;
            if (c != 0) {
                if (E) {
                    if (K < t)
                        K = Math.floor(K);
                    else
                        K = Math.ceil(K);
                    if (J < C)
                        J = Math.floor(J);
                    else
                        J = Math.ceil(J)
                }
                var M = Math.abs(t - K)
                  , a = Math.abs(C - J)
                  , Q = M;
                if (a / M < c)
                    Q *= a / M / c;
                t = t > K ? K + Q : K - Q;
                C = C > J ? J + Q * c : J - Q * c
            }
            if (V && V.i(m.yx)) {
                K -= t - K;
                J -= C - J
            }
        }
        var Y = new gv(K,J)
          , R = new gv(t,C);
        if (E)
            D.z0.adE(Y, R);
        return [Y, R]
    }
    ;
    D.z0.adE = function(Y, R) {
        if (Y.x > R.x) {
            var V = Y.x;
            Y.x = R.x;
            R.x = V
        }
        if (Y.y > R.y) {
            var V = Y.y;
            Y.y = R.y;
            R.y = V
        }
        Y.x = Math.floor(Y.x);
        Y.y = Math.floor(Y.y);
        R.x = Math.ceil(R.x);
        R.y = Math.ceil(R.y)
    }
    ;
    D.z0.am7 = function() {
        return {
            classID: "Mk",
            null: {
                t: "obj ",
                v: [{
                    t: "Clss",
                    v: {
                        classID: "contentLayer"
                    }
                }]
            },
            Usng: {
                t: "Objc",
                v: {
                    classID: "contentLayer",
                    Type: {
                        t: "Objc",
                        v: {}
                    }
                }
            }
        }
    }
    ;
    D.z0.iy = function(Y, R) {
        var V = D.z0.am7();
        if (R == null)
            R = JSON.parse(JSON.stringify(g9.dN[Y]));
        ad.ZJ.E7(R, V.Usng.v.Type.v, Y);
        return {
            CM: "make",
            eQ: V
        }
    }
    ;
    D.z0.XR = function(Y, R) {
        var V = R.vg
          , E = JSON.parse(JSON.stringify(R.KN));
        if (V.JQ == 0)
            E.fillEnabled.v = !1;
        var r = D.z0.iy(Math.max(0, V.JQ - 1), V.Cv);
        r.eQ.Usng.v.Shp = Y;
        r.eQ.Usng.v.strokeStyle = {
            t: "Objc",
            v: E
        };
        return r
    }
    ;
    D._J = function() {
        D.f3.call(this, [10, 29], D.mV, "tools/pen");
        this.mh = null;
        this.lX = null;
        this.iX = 1;
        this.a96 = 0;
        this.sl = null;
        this.VM = !1
    }
    ;
    D._J.prototype = new D.f3;
    D._J.prototype.cm = function(Y) {
        return this.mh != null
    }
    ;
    D._J.prototype.K_ = function(Y, R, V, E, r) {
        this.WR(R, V);
        var K = Y.a.Cf(r.x, r.y), A, p;
        K.x = Math.round(K.x);
        K.y = Math.round(K.y);
        var J = D.RT.wW(Y, K, V)
          , t = Y.PD(this.iX == 0)
          , C = t[0]
          , c = t[1]
          , M = C[c.pop()]
          , a = M ? M.add.vmsk : null
          , Q = 4 * O.M() / Y.a.k;
        if (a)
            A = w.Y.ja(a.N, K, !0, Q);
        if (this.iX == 1 && (a == null || (a.QS.length == 0 || a.QS[0] != a.N.length - 1) && A.wt == -1)) {
            var v = new I(O.E.io,!0)
              , W = w.Wg.$j("customShape", [0, 0, 1, 1], null, null, null, "--");
            v.data = D.z0.XR(W, V);
            R.f(v);
            t = Y.PD(!0);
            C = t[0];
            c = t[1];
            M = C[c.pop()];
            a = M.add.vmsk;
            a.N = a.N.slice(0, 2)
        }
        var n = M.add.vogk;
        this.mh = a.clone();
        this.lX = JSON.stringify(n);
        var $ = a.N
          , G = w.Y.VH($);
        p = w.Y.a9(a.N, new gE(K.x - Q,K.y - Q,Q * 2,Q * 2));
        A = w.Y.ja(a.N, K, !0, Q);
        if (A.wt != -1 && p[0].length == 0) {
            var o = w.Y.En($, A.wt);
            while ($[o].length <= A.BE) {
                A.BE -= $[o].length;
                o += $[o].length + 1
            }
            $[o].length++;
            $.splice(o + 2 + A.BE, 0, {
                type: 4,
                wJ: J.clone(),
                Z: J.clone(),
                Ii: J.clone()
            });
            a.QS = [o + 2 + A.BE]
        } else if (p[0].length == 1 && E.i(m.yx)) {
            var B = p[0]
              , L = a.N.length - 1
              , u = a.N[B];
            u.Ii = u.Z.clone();
            if (B != L)
                u.wJ = u.Z.clone()
        } else {
            var y = 0;
            if (a.QS.length != 1) {
                a.C = [G];
                $.push({
                    type: 3,
                    length: 1,
                    yV: [1, 2, 3, 0][this.a96],
                    sK: 0,
                    oe: 0,
                    SP: 0
                });
                y = $.length;
                n.push(w.Wg.TX())
            } else {
                var S = a.QS[0]
                  , X = w.Y.HJ($, S)
                  , o = w.Y.En($, X);
                if (S == o + $[o].length && gv.VN(K, $[o + 1].Z) < Q) {
                    $[o].type = 0;
                    a.QS = [o + 1];
                    this.sl = J;
                    this.VM = !0;
                    this.Um(Y, M.wt, a, n);
                    Y.eR = !0;
                    return
                }
                $[o].length++;
                y = S + 1;
                if (S == o + 1 && $[o].length != 2)
                    y = o + 1
            }
            if (E.i(m.Ms) && $[y - 1] && $[y - 1].Z)
                J = D.AK.JN($[y - 1].Z, J);
            $.splice(y, 0, {
                type: 4,
                wJ: J.clone(),
                Z: J.clone(),
                Ii: J.clone()
            });
            a.QS = [y];
            this.sl = J
        }
        this.Um(Y, M.wt, a, n);
        Y.eR = !0
    }
    ;
    D._J.prototype.NZ = function(Y, R, V, E, r) {
        if (this.mh == null)
            return;
        var K = Y.a.Cf(r.x, r.y)
          , J = D.RT.wW(Y, K, V)
          , t = Y.PD(this.iX == 0)
          , C = t[0]
          , c = t[1]
          , M = C[c.pop()]
          , a = M.add.vmsk
          , Q = a.N
          , A = Q[a.QS[0]];
        if (E.i(m.dL)) {
            if (E.i(m.Ms))
                J = D.AK.JN(this.sl, J);
            var p = A.Z.O2(A.Ii)
              , v = A.wJ.O2(A.Z);
            A.Ii = J;
            A.Z = J.add(p);
            A.wJ = A.Z.add(v)
        } else {
            if (E.i(m.Ms))
                J = D.AK.JN(A.Z, J);
            if (this.VM) {
                var W = gv.VN(A.Z, J)
                  , n = W == 0 ? 0 : gv.VN(A.Z, A.Ii) / W;
                A.Ii.x = A.Z.x + n * (J.x - A.Z.x);
                A.Ii.y = A.Z.y + n * (J.y - A.Z.y)
            } else
                A.Ii = J;
            if (E.i(m.yx))
                A.type = 5;
            else {
                A.type = 4;
                A.wJ = A.Z.add(A.Z.O2(J))
            }
            this.sl = J
        }
        this.Um(Y, M.wt, a, M.add.vogk);
        Y.eR = !0
    }
    ;
    D._J.prototype.Eb = function(Y, R, V, E, r) {
        if (this.mh == null)
            return;
        var K = Y.PD(this.iX == 0)
          , J = K[0]
          , t = K[1]
          , C = J[t.pop()]
          , c = C.add.vmsk
          , M = C.add.vogk;
        this.IZ(Y, this.VM ? "Close Path" : "Add Anchor Point", C.wt, this.mh, c.clone(), null, this.lX, JSON.stringify(M));
        this.VM = !1;
        this.mh = null
    }
    ;
    D._J.prototype.c8 = function(Y, R, V, E, r) {
        this.iX = Y.tmode;
        this.a96 = Y.binop
    }
    ;
    D.vq = function() {
        D.z0.call(this, [10, 30], D.PU, "tools/fpen", !1)
    }
    ;
    D.vq.prototype = new D.z0;
    D.vq.prototype.zb = function(Y, R, V, E) {
        return [w.Y.UG(E, this.$_.tolr), w.Wg.$j("customShape", [0, 0, 1, 1], null, null, null, "--")]
    }
    ;
    D.RE = function() {
        D.f3.call(this, [10, 27], D.OG, "tools/pselect");
        this.Xn = null;
        this.z_ = !1;
        this.A2 = null;
        this.mh = null;
        this.Eu = null;
        this.lX = null;
        this.W$ = null;
        this.HB = null;
        this.Uu = null;
        this.a$ = null
    }
    ;
    D.RE.prototype = new D.f3;
    D.RE.prototype.cm = function(Y) {
        return Y.tc
    }
    ;
    D.RE.prototype.K_ = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y), J = Y.PD(), t = J[0], C = J[1], c, M;
        for (var x = 0; x < C.length; x++) {
            var a = t[C[x]]
              , Q = a.add.vmsk
              , A = w.Y.ja(Q.N, K).wt;
            if (A != -1) {
                this.A2 = c = a;
                M = A
            }
            for (var p = 0; p < Q.gZ.length; p++) {
                var v = w.Y.M9(Q.N, Q.gZ[p]);
                if (v == null)
                    continue;
                var W = gv.VN(v, K);
                if (W < 4 * O.M() / Y.a.k) {
                    var n = Y.t[a.wt - 1e6].add.TySh
                      , $ = n.VW.Curve
                      , G = n.g
                      , o = $.Reversed;
                    $.Reversed = !1;
                    var $ = cd.bq(n.VW.Curve);
                    $.Reversed = o;
                    w.H.g($[0], G, $[0]);
                    this.Uu = [$, p, G.o * G.Xa - G.O * G.w8];
                    this.A2 = c = a;
                    M = 0
                }
            }
            if (this.Uu)
                break
        }
        if (c != null) {
            var Q = c.add.vmsk;
            Q.QS = [];
            var B = Q.C.indexOf(M);
            if (E.i(m.Ms)) {
                if (B == -1) {
                    Q.C.push(M);
                    this.z_ = !0
                } else
                    Q.C.splice(B, 1)
            } else {
                if (B == -1)
                    Q.C = [M];
                this.z_ = !0
            }
            this.HB = w.Y.OI(Q.N, Q.C)
        }
        this.Xn = K;
        this.a$ = new bC(K);
        Y.IU = !0;
        Y.eR = !0
    }
    ;
    D.RE.prototype.NZ = function(Y, R, V, E, r) {
        if (this.Xn == null)
            return;
        var K = Y.a.Cf(r.x, r.y);
        if (this.z_) {
            K = this.a$.No(K, E);
            var J = this.A2;
            if (this.mh == null) {
                this.mh = this.Eu = J.add.vmsk.clone();
                this.lX = this.W$ = JSON.stringify(J.add.vogk);
                if (E.i(m.yx)) {
                    var t = this.mh.clone()
                      , C = JSON.parse(this.lX)
                      , c = D.f3.Y2(t, C);
                    D.f3.p0(c, t, C);
                    this.Eu = t;
                    this.W$ = JSON.stringify(C)
                }
            }
            var t = this.Eu.clone()
              , C = JSON.parse(this.W$);
            if (this.Uu) {
                var M = this.Uu
                  , a = M[0][0]
                  , Q = w.H.C6(a, K.x, K.y);
                t.gZ[M[1]] = M[0][1][Q];
                var A = a[Q * 2]
                  , p = a[Q * 2 + 1]
                  , v = (a[Q * 2 + 2] - A) * (K.y - p) - (a[Q * 2 + 3] - p) * (K.x - A);
                if (M[2] < 0)
                    v = -v;
                t.RM = v > 0
            } else {
                var W = this.HB.clone()
                  , n = W.x
                  , $ = W.y;
                W.offset(K.x - this.Xn.x, K.y - this.Xn.y);
                W.x = Math.round(W.x);
                W.y = Math.round(W.y);
                var G = D.RT.CR(Y, W, V)
                  , o = new bF(1,0,0,1,W.x - n + G[0],W.y - $ + G[1]);
                w.Y.DS(t.N, o, t.C);
                w.Wg.g(C, w.J.tu(o), t.C);
                D.RT.cF(Y, W, G)
            }
            this.Um(Y, J.wt, t, C)
        } else {
            var B = this.Xn;
            Y.S.ZW = w.H.se(new gE(B.x,B.y,K.x - B.x,K.y - B.y));
            Y.eR = !0
        }
    }
    ;
    D.RE.prototype.Eb = function(Y, R, V, E, r) {
        if (this.Xn == null)
            return;
        var K = Y.a.Cf(r.x, r.y)
          , J = this.A2
          , t = J ? J.add.vmsk : null;
        if (this.z_) {
            var C = JSON.stringify(J.add.vogk);
            if (!this.Xn.yU(K))
                this.IZ(Y, "Move Paths", J.wt, this.mh, t, null, this.lX, C);
            if (Y != null && Y.S.VE) {
                Y.S.VE = null;
                Y.eR = !0
            }
        } else {
            if (t) {
                var c = this.Xn
                  , M = new gE(c.x,c.y,K.x - c.x,K.y - c.y)
                  , a = w.Y.aee(t.N, M);
                if (E.i(m.Ms)) {
                    for (var x = 0; x < a.length; x++)
                        if (t.C.indexOf(a[x]) == -1)
                            t.C.push(a[x])
                } else
                    t.C = a
            }
            Y.S.ZW = null;
            Y.eR = !0
        }
        this.Xn = null;
        this.mh = null;
        this.Uu = null;
        this.z_ = !1;
        this.a$ = null
    }
    ;
    D.RE.prototype.J$ = function(Y, R, V, E) {
        D.f3.prototype.J$.call(this, Y, R, V, E);
        if (V.BL != this.id)
            return;
        if (Y.C.length == 0)
            return;
        var r = Y.PD()
          , K = r[0]
          , J = r[1];
        if (J.length == 0)
            return;
        var t = K[J[0]]
          , C = t.add.vmsk
          , c = t.add.vstk
          , M = t.add.vogk
          , a = new I(O.E.z,!0);
        a.data = {
            e: O.U.oN,
            m: this.id,
            Qh: "main",
            AA: C ? C : null,
            Wg: M
        };
        R.f(a)
    }
    ;
    D.RE.prototype.c8 = function(Y, R, V, E, r) {
        var K = Y.b3;
        if (K.AA) {
            var J = V.PD()
              , t = J[0]
              , C = J[1];
            if (C.length == 0)
                return;
            var c = t[C[0]]
              , M = c.add.vmsk.clone()
              , a = JSON.stringify(c.add.vogk)
              , Q = K.AA;
            this.Um(V, c.wt, Q, K.Wg);
            var A = [18, 5];
            if (M.N.length == Q.N.length)
                A = M.C[0] == Q.C[0] ? "Fill Rule" : "Path Order";
            this.IZ(V, A, c.wt, M, Q, null, a, JSON.stringify(K.Wg))
        }
    }
    ;
    D.xC = function() {
        D.f3.call(this, [10, 28], D.px, "tools/dselect");
        this.y6 = -1;
        this.ee = -1;
        this.ax = null;
        this.Xn = null;
        this.A2 = null;
        this.mh = null;
        this.lX = null;
        this.tW = null;
        this.c0 = 0;
        this.amM = {
            psnap: !1
        };
        this.a$ = null
    }
    ;
    D.xC.prototype = new D.f3;
    D.xC.prototype.cm = function(Y) {
        return Y.tc
    }
    ;
    D.xC.prototype.c8 = function(Y) {
        this.amM = Y
    }
    ;
    D.xC.prototype.Vl = function(Y, R, V, E, r) {
        if (Y.e == "crnr") {
            if (V == null)
                return;
            var K = V.PD()
              , J = K[0]
              , t = K[1];
            if (t.length == 0) {
                alert("No paths selected");
                return
            }
            var C = J[t[0]]
              , c = C.add.vmsk;
            if (c.QS.length == 0) {
                alert("No corners selected");
                return
            }
            for (var x = 0; x < c.QS.length; x++) {
                var M = c.N[c.QS[x]];
                if (!M.Z.yU(M.Ii) || !M.Z.yU(M.wJ)) {
                    alert("Only sharp corners can be rounded");
                    return
                }
            }
            if (this.mh == null) {
                this.mh = C.add.vmsk.clone();
                this.lX = JSON.stringify(C.add.vogk);
                this.A2 = C;
                this.tW = V
            }
            var a = new I(O.E.z,!0);
            a.data = {
                e: O.U.D0,
                xs: "cornerradius",
                kr: 5,
                NQ: this.a6P.bind(this)
            };
            R.f(a)
        } else
            D.f3.prototype.Vl.call(this, Y, R, V, E, r)
    }
    ;
    D.xC.prototype.a6P = function(Y) {
        if (Y == "confirm") {
            var R = this.tW
              , V = this.A2
              , E = V.add.vmsk
              , r = V.add.vogk;
            this.IZ(R, [12, 94, 0], V.wt, this.mh, E, null, this.lX, JSON.stringify(r));
            this.mc();
            return
        }
        var E = this.mh.clone()
          , r = JSON.parse(this.lX)
          , K = E.QS;
        if (Y == "cancel") {} else {
            var J = [];
            for (var x = 0; x < K.length; x++) {
                var t = K[x]
                  , C = w.Y.HJ(E.N, t, !0)
                  , a = 0;
                if (J.indexOf(C) != -1)
                    continue;
                J.push(C);
                var c = w.Y.En(E.N, C, !0)
                  , M = E.N[c].length
                  , Q = [];
                for (var A = 0; A < M; A++) {
                    var p = E.QS.indexOf(c + A + 1) == -1 ? 0 : Y;
                    Q.push(p);
                    if (p != 0)
                        a++
                }
                w.Y.pa(E.N, c, Q);
                for (var A = 0; A < K.length; A++)
                    if (K[A] > c + M)
                        K[A] += a
            }
            this.cv(E, r);
            E.QS = []
        }
        this.Um(this.tW, this.A2.wt, E, r);
        if (Y == "cancel")
            this.mc()
    }
    ;
    D.xC.prototype.disable = function(Y, R, V, E) {
        this.wr(Y)
    }
    ;
    D.xC.prototype.K_ = function(Y, R, V, E, r) {
        this.wr(Y);
        var K = Y.a.Cf(r.x, r.y), a, Q, A;
        this.ax = K.clone();
        var J = Y.PD()
          , t = J[0]
          , C = J[1];
        if (C.length == 0)
            return;
        var c = 4 * O.M() / Y.a.k
          , M = new gE(K.x - c,K.y - c,c * 2,c * 2);
        for (var p = 0; p < C.length; p++) {
            a = this.A2 = t[C[p]];
            Q = a.add.vmsk;
            A = w.Y.a9(Q.N, M);
            if (A[0].length + A[1].length + A[2].length != 0)
                break
        }
        var v = [!1, !1, !1];
        for (var x = 0; x < 3; x++) {
            for (var W = 0; W < A[x].length; W++)
                if (Q.QS.indexOf(A[x][W]) != -1) {
                    A[x] = [A[x][W]];
                    v[x] = !0;
                    break
                }
        }
        if (A[0].length != 0 && (v[0] || !v[1] && !v[2])) {
            var n = A[0][0]
              , $ = Q.QS.indexOf(n);
            if (E.i(m.Ms)) {
                if ($ == -1)
                    Q.QS.push(n);
                else {
                    Q.QS.splice($, 1);
                    Y.eR = !0;
                    return
                }
            } else if ($ == -1)
                Q.QS = [n];
            this.y6 = n;
            this.ee = 0
        } else if (A[1].length != 0 && (v[1] || !v[2])) {
            this.y6 = A[1][0];
            this.ee = 1
        } else if (A[2].length != 0) {
            this.y6 = A[2][0];
            this.ee = 2
        } else {
            var G = w.Y.ja(Q.N, K, !0, c);
            if (G.wt == -1)
                this.Xn = K;
            else {
                Q.C = [G.wt];
                Q.QS = []
            }
        }
        if (this.mh == null) {
            this.mh = a.add.vmsk.clone();
            this.lX = JSON.stringify(a.add.vogk)
        }
        this.a$ = new bC(K);
        Y.eR = !0
    }
    ;
    D.xC.prototype.NZ = function(Y, R, V, E, r) {
        if (Y == null)
            return;
        var K = Y.a.Cf(r.x, r.y)
          , J = this.A2;
        if (this.y6 != -1) {
            var t = this.mh.clone()
              , C = J.add.vogk
              , c = t.N[this.y6];
            c = [c.Z, c.wJ, c.Ii][this.ee];
            if (E.i(m.Ms)) {
                K = this.a$.No(K, E);
                K.x += c.x - this.ax.x;
                K.y += c.y - this.ax.y
            } else {
                if (this.amM.psnap) {
                    K.x = Math.round(K.x);
                    K.y = Math.round(K.y)
                }
                K = D.RT.wW(Y, K, V)
            }
            if (this.ee == 0) {
                var M = new bF(1,0,0,1,K.x - c.x,K.y - c.y);
                w.Y.DS(t.N, M, null, t.QS)
            } else {
                var a = t.N[this.y6]
                  , Q = a.wJ
                  , A = a.Ii;
                if (this.ee == 2) {
                    Q = a.Ii;
                    A = a.wJ
                }
                Q.Fb(K.x, K.y);
                if (a.type == 1 || a.type == 4) {
                    var p = gv.VN(Q, a.Z)
                      , v = gv.VN(A, a.Z);
                    if (v != 0) {
                        A.x = a.Z.x - (Q.x - a.Z.x) * (v / p);
                        A.y = a.Z.y - (Q.y - a.Z.y) * (v / p)
                    }
                }
            }
            this.cv(t, C);
            this.Um(Y, J.wt, t, C)
        } else if (this.Xn != null) {
            var W = this.Xn;
            Y.S.ZW = w.H.se(new gE(W.x,W.y,K.x - W.x,K.y - W.y));
            Y.eR = !0
        } else {
            var n = Y.PD(), $ = n[0], G = n[1], J, t, L;
            if (G.length == 0)
                return;
            var o = 4 * O.M() / Y.a.k
              , B = new gE(K.x - o,K.y - o,o * 2,o * 2);
            for (var u = 0; u < G.length; u++) {
                J = $[G[u]];
                t = J.add.vmsk;
                L = w.Y.a9(t.N, B);
                if (L[0].length + L[1].length + L[2].length != 0)
                    break
            }
            this.wr(Y);
            for (var x = 0; x < 3; x++) {
                for (var y = 0; y < L[x].length; y++) {
                    var S = L[x][y]
                      , X = t.N[S];
                    X = x == 0 ? X.Z : x == 1 ? X.wJ : X.Ii;
                    Y.S.h_.push(Y.S.Ri.length >>> 1);
                    Y.S.Ri.push(X.x, X.y);
                    Y.eR = !0
                }
            }
        }
    }
    ;
    D.xC.prototype.wr = function(Y) {
        if (Y && Y.S.Ri.length != 0) {
            Y.S.Ri = [];
            Y.S.h_ = [];
            Y.eR = !0
        }
    }
    ;
    D.xC.prototype.Eb = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y)
          , J = this.A2
          , t = J ? J.add.vmsk : null
          , C = J ? J.add.vogk : null;
        if (this.y6 != -1) {
            if (Date.now() - this.c0 < 300) {
                var c = t.N[this.y6]
                  , M = this.ee
                  , a = null;
                if (M == 0) {
                    var Q = c.wJ.yU(c.Z)
                      , A = c.Ii.yU(c.Z);
                    if (!Q && !A) {
                        a = "Anchor Type";
                        if (c.type == 1 || c.type == 4)
                            c.type++;
                        else {
                            c.type--;
                            c.Ii = c.Z.add(c.Z.O2(c.wJ))
                        }
                    } else {
                        a = "Add Handles";
                        if (Q && A) {
                            c.wJ.x -= 30;
                            c.Ii.x += 30
                        } else if (Q)
                            c.wJ = c.Z.add(c.Z.O2(c.Ii));
                        else if (A)
                            c.Ii = c.Z.add(c.Z.O2(c.wJ))
                    }
                } else {
                    a = "Remove Handle";
                    if (M == 1)
                        c.wJ.m3(c.Z);
                    else
                        c.Ii.m3(c.Z)
                }
                this.cv(t, C);
                this.Um(Y, J.wt, t, C);
                this.IZ(Y, a, J.wt, this.mh, t, null, this.lX, JSON.stringify(C))
            } else if (!this.ax.yU(K)) {
                this.IZ(Y, "Drag Anchors", J.wt, this.mh, t, null, this.lX, JSON.stringify(C))
            }
            this.c0 = Date.now()
        } else if (this.Xn != null) {
            var p = this.Xn
              , v = new gE(p.x,p.y,K.x - p.x,K.y - p.y);
            if (v.d < 0)
                v.x += v.d;
            if (v.b < 0)
                v.y += v.b;
            v.d = Math.abs(v.d);
            v.b = Math.abs(v.b);
            var W = w.Y.a9(t.N, v);
            t.QS = W[0].concat(E.i(m.Ms) ? t.QS : []);
            Y.S.ZW = null
        }
        this.mc();
        Y.eR = !0
    }
    ;
    D.xC.prototype.mc = function() {
        this.A2 = null;
        this.mh = null;
        this.Xn = null;
        this.y6 = this.ee = -1;
        this.a$ = null
    }
    ;
    D.xC.prototype.cv = function(Y, R) {
        for (var x = 0; x < Y.QS.length; x++) {
            var V = w.Y.HJ(Y.N, Y.QS[x]);
            w.Wg.yF(R, V)
        }
    }
    ;
    D.xC.prototype.U7 = function(Y, R, V, E) {
        if (Y == null)
            return;
        var r = Y.PD()
          , K = r[0]
          , J = r[1];
        if (J.length == 0)
            return;
        var t = K[J[0]]
          , C = t.add.vmsk;
        if (C == null || C.QS.length == 0)
            return;
        var c = t.add.vogk
          , M = JSON.stringify(c)
          , a = E.ro();
        if (a.x != 0 || a.y != 0) {
            var Q = C.clone()
              , A = C.clone()
              , p = new bF(1,0,0,1,a.x,a.y);
            w.Y.DS(A.N, p, null, A.QS);
            this.cv(A, c);
            this.Um(Y, t.wt, A, c);
            this.IZ(Y, "Move Anchors", Y.C[0], Q, A.clone(), !0, M, JSON.stringify(c))
        }
        if (E.i(m.pl) || E.i(m.dm)) {
            var Q = C.clone()
              , A = C.clone();
            A.N = w.Y.a6T(A.N, A.QS, c);
            var v = w.Y.VH(A.N);
            for (var x = 0; x < A.C.length; x++)
                if (A.C[x] >= v) {
                    A.C.splice(x, 1);
                    x--
                }
            A.QS = [];
            this.Um(Y, t.wt, A, c);
            this.IZ(Y, "Delete Anchors", t.wt, Q, A.clone(), !0, M, JSON.stringify(c))
        }
    }
    ;
    D.xC.prototype.IZ = function(Y, R, V, E, r, K, J, t) {
        var C = Y.Io();
        if (K && C != null && C.m == this && C.data.ams && C.data.gA == V && JSON.stringify(C.data.Vs.QS) == JSON.stringify(E.QS)) {
            C.data.hq = r;
            C.data.dp = t
        } else {
            var C = new il(R,this);
            C.data = {
                gA: V,
                Vs: E,
                hq: r,
                ams: K,
                a8P: J,
                dp: t
            };
            Y.Ug(C)
        }
    }
    ;
    D.Rect = function() {
        D.z0.call(this, [10, 32], D.iO, "tools/rect", !0)
    }
    ;
    D.Rect.prototype = new D.z0;
    D.Rect.prototype.zb = function(Y, R, V) {
        var E = this.$_.crad
          , r = R.x - Y.x
          , K = R.y - Y.y;
        return [w.Y.o3.Rect(Y.x, Y.y, r, K, E), w.Wg.$j("Rctn", [Y.x, Y.y, R.x, R.y], [E, E, E, E])]
    }
    ;
    D.lp = function() {
        D.z0.call(this, [10, 33], D.l_, "tools/ellipse", !0)
    }
    ;
    D.lp.prototype = new D.z0;
    D.lp.prototype.zb = function(Y, R, V) {
        var E = R.x - Y.x
          , r = R.y - Y.y;
        return [w.Y.o3.lp(Y.x, Y.y, E, r), w.Wg.$j("Elps", [Y.x, Y.y, R.x, R.y])]
    }
    ;
    D.vf = function() {
        D.z0.call(this, [10, 34], D._s, "tools/pshape", !1)
    }
    ;
    D.vf.prototype = new D.z0;
    D.vf.prototype.zb = function(Y, R, V) {
        var E = this.$_.pshape, r = this.$_.crad, K = this.$_.irad / 100, J = this.$_.sides, t = this.$_.width, C = this.$_.tsiz, c = this.$_.length, W;
        R = R.clone();
        if (V) {
            if (Math.abs(R.x - Y.x) < Math.abs(R.y - Y.y))
                R.x = Y.x;
            else
                R.y = Y.y
        }
        var M = Y.x
          , a = Y.y
          , Q = R.x
          , A = R.y
          , p = Math.sqrt((Q - M) * (Q - M) + (A - a) * (A - a))
          , v = Math.atan2(-A + a, Q - M);
        if (E == 0)
            W = w.Y.o3.iU(M, a, p, v, J, r);
        if (E == 1)
            W = w.Y.o3.ai3(M, a, p, v, J, r, K);
        if (E == 2)
            W = w.Y.o3.alo(Y.x, Y.y, R.x, R.y, t, C / 100);
        if (E == 3)
            W = w.Y.o3.a6w(M, a, p, v, c);
        return [W, w.Wg.$j("customShape", [Y.x, Y.y, R.x, R.y], null, null, null, "--")]
    }
    ;
    D.vf.prototype.U7 = function(Y, R, V, E) {
        var r = E.ro(), K = this.$_, J, t;
        if (r.y != 0) {
            var C = -r.y
              , c = K.pshape;
            if (c < 2) {
                J = "sides";
                t = Math.max(3, Math.min(100, K.sides + C))
            } else if (c == 2) {
                J = "width";
                t = Math.max(1, Math.min(100, K.width + C))
            } else if (c == 3) {
                J = "length";
                t = Math.max(4, Math.min(40, K.length + C))
            }
        }
        if (r.x != 0) {
            J = "pshape";
            t = Math.max(0, Math.min(3, K.pshape + r.x))
        }
        if (J) {
            var M = new I(O.E.z,!0)
              , a = {};
            a[J] = t;
            K[J] = t;
            M.data = {
                e: O.U.oN,
                m: this.id,
                zN: "vals",
                a7X: a
            };
            R.f(M);
            this.NZ(Y, R, V, E)
        }
    }
    ;
    D.QE = function() {
        D.z0.call(this, [10, 35], D.H0, "tools/line", !1)
    }
    ;
    D.QE.prototype = new D.z0;
    D.QE.prototype.zb = function(Y, R, V) {
        var E = this.$_.width;
        R = R.clone();
        if (V) {
            R = D.AK.JN(Y, R)
        }
        return [w.Y.o3.QE(Y.x, Y.y, R.x, R.y, E), w.Wg.$j("Ln", null, null, [Y.x, Y.y, R.x, R.y], E)]
    }
    ;
    D.KI = function() {
        D.z0.call(this, [10, 31], D._6, "tools/cshape", !0)
    }
    ;
    D.KI.prototype = new D.z0;
    D.KI.prototype.zb = function(Y, R, V) {
        var E = this.$_.shape
          , r = E.WC.d / E.WC.b
          , K = j.Ro.hJ(E.N);
        R = R.clone();
        if (V) {
            R.y = Y.y + (R.x - Y.x) / r
        }
        var J = R.x - Y.x
          , t = R.y - Y.y;
        w.Y.DS(K, new bF(J,0,0,t,Y.x,Y.y));
        return [K, w.Wg.$j("customShape", [Y.x, Y.y, R.x, R.y], null, null, null, E.u1)]
    }
    ;
    D._ = function(Y, R, V) {
        D.R0.call(this, Y, R, V);
        this.fZ = 0;
        this.t = null;
        this.V7 = null;
        this.gL = null;
        this.Y4 = 1;
        this.lE = !1;
        this.cursor = null;
        this.xu = null;
        this.w$ = null;
        this.pS = !1;
        this.tR = null;
        this.a97 = 0;
        this.FI = null;
        this.KY = 0;
        this.jj = null;
        this.Z8 = null;
        this.S1 = null;
        this.Ff = null;
        this.a7Z = null;
        this.BJ = null
    }
    ;
    D._.prototype = new D.R0;
    D._._X = function(Y, R) {
        var V = {
            classID: "null",
            null: cA.Wn("Dcmn", !0)
        };
        if (Y)
            V.Angl = {
                t: "UntF",
                v: {
                    type: "#Ang",
                    val: R
                }
            };
        else
            V.Axis = {
                t: "enum",
                v: {
                    Ornt: R
                }
            };
        return {
            CM: Y ? "rotateEventEnum" : "flip",
            eQ: V
        }
    }
    ;
    D._.prototype.og = function(Y, R, V, E, r) {
        var K = new I(O.E.z,!0);
        K.data = {
            e: O.U.oN,
            m: this.id,
            PN: r,
            HR: Y,
            gL: V
        };
        R.f(K);
        this.jr = !1
    }
    ;
    D._.prototype.cm = function(Y) {
        return this.Z8 && this.Z8.ne()
    }
    ;
    D._.prototype.Vl = function(Y, R, V, E, r) {
        this.gL = r;
        if (Y.e == "again" && this.FI == null)
            return;
        if (Y.e == "doMouseDown") {
            if (this.Z8 == null)
                return;
            this.K_(V, R, r, E, Y.YH);
            return
        }
        if (!this.Tj(V, r))
            return;
        if (this.Z8) {
            this.tS(Y, this.Z8.LC());
            this.x7(V, r, 0, !0);
            this.hm(V);
            return
        }
        this.H1(V, Y.$ == null, Y.$);
        this.Ax(V);
        this.tS(Y);
        this.$d(V, R, Y._O, !1)
    }
    ;
    D._.prototype.tS = function(Y, R) {
        var V = this.jj;
        if (R == null) {
            var E = Y.Zv != null ? Y.Zv : 4;
            R = this.Z8.aff()[E]
        }
        var r = R.x
          , K = R.y;
        if (Y.e == "rot" && Y.G != Math.PI && (V.d + V.b & 1) == 1) {
            r = Math.floor(r);
            K = Math.floor(K)
        }
        var J = new bF;
        J.translate(-r, -K);
        if (Y.e == "rot")
            J.rotate(Y.G);
        if (Y.e == "scl")
            J.scale(Y.G.x, Y.G.y);
        if (Y.e == "mat")
            J.concat(Y.G);
        J.translate(r, K);
        if (Y.e == "again")
            J = this.FI;
        var t = this.Z8.JG();
        w.H.g(t, J, t);
        this.Z8.dT(t)
    }
    ;
    D._.prototype.rT = function() {
        return !0
    }
    ;
    D._.prototype.Tj = function(Y, R) {
        if (Y == null)
            return !1;
        if (this.id == D.wk)
            return Y.v != null;
        var V = Y.ss(!0, null, null, !0);
        if (this.id == D._p && Y.t[V[0]].rect.uD()) {
            alert("Layer is empty.");
            return !1
        }
        for (var x = 0; x < V.length; x++) {
            var E = Y.t[V[x]];
            if (E.kx(2) || E.kx(31)) {
                alert(em.get([6, 57, 0]));
                return !1
            }
            if (E.add.artb) {
                alert("You can not transform the whole artboard");
                return !1
            }
            if (E.add.TySh)
                if (!bp.Ee(E.add.TySh, R.jq))
                    return !1;
            if (E.add.SoLd) {
                if (V.length == 1 && !w.uM.XJ(E.add.SoLd.warp.v) && (E.fp() && E.fp().wh || E.add.vmsk && E.add.vmsk.wh)) {
                    alert("Unlink masks before transforming Smart Object");
                    return !1
                }
                if (!Y.aaX(E.add.SoLd.Idnt.v)) {
                    alert("Unsupported format of the smart object (" + Y.Xf(E.add.SoLd.Idnt.v).Nl + ")");
                    return !1
                }
            }
        }
        if (Y.v == null)
            return !0;
        if (!Y.J3())
            return !1;
        return Y.$Q()
    }
    ;
    D._.prototype.K_ = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y);
        if (this.KY == 1) {
            var J = w.J.tb(w.J.k4(this.Z8.JG(), this.jj));
            K = w.J.BA(J, K)
        }
        var t = this.KY == 0 ? this.Z8 : this.S1;
        this.lE = t.K_(Y, V, E, K);
        if (this.lE && t.mW(K)) {
            if (Date.now() - this.a97 < 250)
                this.$d(Y, R, null, !0);
            this.a97 = Date.now()
        }
    }
    ;
    D._.prototype.P2 = function(Y) {
        var R = new I(O.E.z,!0);
        R.data = {
            e: O.U.u$,
            Cz: this.cursor
        };
        Y.f(R)
    }
    ;
    D._.prototype.NZ = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y);
        if (this.KY == 1) {
            var J = w.J.tb(w.J.k4(this.Z8.JG(), this.jj));
            K = w.J.BA(J, K)
        }
        var t = this.KY == 0 ? this.Z8 : this.S1;
        if (!r.tc) {
            var C = "default";
            if (t) {
                var c = t.L4(K, Y.a.k);
                if (c)
                    C = c
            }
            if (C != this.cursor) {
                this.cursor = C;
                this.P2(R)
            }
        }
        if (!this.lE)
            return;
        t.NZ(Y, V, E, K);
        this.x7(Y, V, 0, !0);
        this.hm(Y);
        this.wQ(R)
    }
    ;
    D._.prototype.Eb = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y);
        this.Z8.Eb(Y, V, E, K);
        this.lE = !1
    }
    ;
    D._.prototype.U7 = function(Y, R, V, E) {
        if (E.i(m.ZI))
            this.$d(Y, R, null, !0);
        else if (E.i(m.TP))
            this.lA(Y, R);
        else {
            var r = this.Z8.U7(Y, V, E);
            if (r) {
                this.x7(Y, V, 0, !0);
                this.wQ(R)
            }
        }
    }
    ;
    D._.prototype.c8 = function(Y, R, V, E) {
        if (Y.Qh == "commit")
            this.$d(V, R, null, !0);
        else if (Y.Qh == "cancel")
            this.lA(V, R);
        else if (Y.Qh == "switchWarp") {
            this.KY = 1 - this.KY;
            this.amH();
            this.hm(V);
            this.wQ(R)
        } else if (Y.Qh == "wrp") {
            this.S1.Go(Y.KC);
            this.hm(V);
            this.x7(V, this.gL, 0, !0)
        } else if (Y.Qh == "ctyp") {
            this.Z8.af0(Y.my);
            this.hm(V);
            this.wQ(R)
        } else if (Y.Qh == "cen") {
            this.Z8.a7r(Y.Uy);
            this.hm(V);
            this.x7(V, this.gL, 0, !0);
            this.wQ(R)
        } else if (Y.Qh == "trn") {
            var r = w.J.tu(Y.Qy)
              , K = this.jj
              , J = w.J.k4(this.Z8.JG(), this.jj);
            r[6] = J[6],
            r[7] = J[7];
            var t = [K.x, K.y, K.x + K.d, K.y, K.x + K.d, K.y + K.b, K.x, K.y + K.b];
            w.J.apply(r, t);
            this.Y4 = Y.Y4;
            this.Z8.dT(t);
            this.hm(V);
            this.x7(V, this.gL, 0, !0)
        }
    }
    ;
    D._.prototype.hm = function(Y) {
        if (this.KY == 0)
            this.Z8.sw(Y, this.gL);
        else {
            this.S1.sw(Y);
            var R = w.J.k4(this.Z8.JG(), this.jj);
            w.J.apply(R, Y.S.ZW.P);
            w.J.apply(R, Y.S.ho)
        }
    }
    ;
    D._.prototype.$d = function(Y, R, V, E) {
        this.x7(Y, this.gL, this.Y4);
        var r = new il(V ? V : this.name,this);
        if (this.fZ == 0)
            r.data = {
                type: this.fZ,
                t: this.t,
                tR: this.V7,
                $N: D._.vF(Y, this.t)
            };
        else if (this.fZ == 1) {
            var K = Y.t[this.t[0]], J;
            if (K.gT.St <= 0) {
                J = w.T(K.gT.sa.X());
                w.vH(K.gT.rB, J, 3)
            } else
                J = Y.v.channel;
            var t = {
                rect: K.gT.sa.clone(),
                channel: J
            };
            r.data = {
                type: this.fZ,
                $: this.t[0],
                w$: this.w$,
                o6: t,
                xu: this.xu,
                pS: this.pS,
                gT: K.gT,
                tR: this.tR,
                $N: {
                    V: K.gT.sa,
                    f4: K.gT.rB
                }
            }
        } else if (this.fZ == 2) {
            r.data = {
                type: this.fZ,
                w$: this.w$,
                o6: {
                    rect: Y.v.rect.clone(),
                    channel: Y.v.channel.slice(0)
                }
            }
        }
        Y.Ug(r);
        var C = this.jj
          , c = new gv(C.x + C.d / 2,C.y + C.b / 2)
          , M = w.J.k4(this.Z8.JG(), C)
          , a = w.J.P4(M)
          , Q = new bF;
        Q.translate(c.x, c.y);
        Q.concat(a);
        Q.translate(-c.x, -c.y);
        a = Q.clone();
        var A = -Math.atan2(-a.O, a.o)
          , p = new bF;
        p.rotate(A);
        a.concat(p);
        function v($, G) {
            return {
                t: "UntF",
                v: {
                    type: ["#Pxl", "#Prc", "#Ang"][G],
                    val: $
                }
            }
        }
        var W = cA.Wn("Lyr", !0);
        if (this.id == D.wk)
            W.v[0] = {
                t: "prop",
                v: {
                    classID: "Chnl",
                    keyID: "fsel"
                }
            };
        var n = {
            classID: "null",
            null: W,
            FTcs: {
                t: "enum",
                v: {
                    QCSt: "Qcsa"
                }
            },
            Intr: {
                t: "enum",
                v: {
                    Intp: "Bcbc"
                }
            },
            Ofst: {
                t: "Objc",
                v: {
                    __name: "Offset",
                    classID: "Ofst",
                    Hrzn: v(Q.Wr, 0),
                    Vrtc: v(Q.W8, 0)
                }
            },
            Skew: {
                t: "Objc",
                v: {
                    classID: "Pnt",
                    Hrzn: v(Math.atan(a.w8) * 180 / Math.PI, 2),
                    Vrtc: v(0, 2)
                }
            },
            Wdth: v(a.o * 100, 1),
            Hght: v(a.Xa * 100, 1),
            Angl: v(A * 180 / Math.PI, 2)
        };
        this.zk = R;
        this.track({
            CM: "transform",
            eQ: n
        });
        this.escape(Y, R, E)
    }
    ;
    D._.prototype.lA = function(Y, R) {
        if (this.fZ == 0)
            D._.YZ(Y, this.t, this.V7);
        else if (this.fZ == 1) {
            var V = Y.t[this.t[0]];
            Y.v = this.w$;
            if (!this.pS) {
                V.gT.sa = this.tR.V;
                V.gT.rB = this.tR.f4;
                V.Cm(Y, 0, 0, Y.v)
            } else {
                V.iz(Y, this.xu)
            }
            Y.D();
            Y.ha = !0
        } else if (this.fZ == 2) {
            Y.v = this.w$;
            Y.ha = !0
        }
        this.escape(Y, R, !0)
    }
    ;
    D._.prototype.escape = function(Y, R, V) {
        this.Z8.clear(Y);
        this.Z8 = null;
        this.S1 = null;
        this.BJ = null;
        this.KY = 0;
        if (V)
            this.$a(R, O.E.z, {
                e: O.U.T_
            })
    }
    ;
    D._.prototype.$E = function(Y, R) {
        if (Y.type == 0)
            D._.YZ(R, Y.t, Y.$N);
        else {
            if (Y.type == 1) {
                var V = R.t[Y.$];
                if (Y.pS) {
                    V.gT = Y.gT
                } else {
                    V.gT.sa = Y.$N.V;
                    V.gT.rB = Y.$N.f4
                }
                V.Cm(R, 0, 0, R.v);
                R.D()
            }
            R.v = {
                rect: Y.o6.rect.clone(),
                channel: Y.o6.channel.slice(0)
            };
            R.ha = !0
        }
    }
    ;
    D._.prototype.Zk = function(Y, R) {
        if (Y.type == 0)
            D._.YZ(R, Y.t, Y.tR);
        else {
            if (Y.type == 1) {
                var V = R.t[Y.$];
                if (Y.pS) {
                    V.iz(R, Y.xu)
                } else {
                    V.gT.sa = Y.tR.V;
                    V.gT.rB = Y.tR.f4;
                    V.Cm(R, 0, 0, R.v)
                }
                R.D()
            }
            R.v = Y.w$;
            R.ha = !0
        }
    }
    ;
    D._.prototype.H1 = function(Y, R, V) {
        Y.PD();
        var E = [];
        if (V == null)
            for (var x = 0; x < Y.JU.length; x++)
                if (Y.Pf[Y.JU[x]].add.vmsk.N.length > 2)
                    E.push(-1 - Y.JU[x]);
        var r = []
          , K = Y.a.r1;
        if (K[0] + K[1] + K[2] == 3)
            if (V != null || E.length == 0 || Y.LX != null && Y.LX.length != 0)
                r = Y.ss(R, V, null, !0);
        r = r.concat(E);
        for (var x = 0; x < Y.dR.length; x++)
            r.push(-1e3 - Y.dR[x]);
        this.t = r
    }
    ;
    D._.prototype.enable = function(Y, R, V, E, r, K, J) {
        if (this.cursor == null)
            this.cursor = "default";
        this.P2(R);
        if (this.Z8)
            return;
        this.gL = V;
        this.H1(Y, !0);
        this.Ax(Y, K && K.vz != null && K.vz != -1 ? K.vz : null, J);
        this.wQ(R);
        this.hm(Y);
        if (K && K.vz == -1)
            this.c8({
                Qh: "switchWarp"
            }, R, Y, E)
    }
    ;
    D._.prototype.wQ = function(Y) {
        var R = {
            e: O.U.oN,
            m: this.id
        };
        if (this.KY == 0) {
            var V = w.J.k4(this.Z8.JG(), this.jj)
              , E = w.J.P4(V);
            R.Qy = {
                NI: E,
                my: this.Z8.adW(),
                Uy: this.Z8.LC(),
                V: this.jj.clone()
            }
        } else {
            R.KC = this.S1.bz()
        }
        R.ahq = this.S1 != null;
        this.$a(Y, O.E.z, R)
    }
    ;
    D._.prototype.Ax = function(Y, R, V) {
        var E = this.id == D.wk
          , r = !0
          , K = this.t[0]
          , J = Y.t[K]
          , C = null;
        if (E) {
            this.fZ = 2;
            this.w$ = Y.v
        } else if (Y.v && this.t.length == 1 && K >= 0 && !J.rect.uD()) {
            this.fZ = 1;
            this.w$ = Y.v;
            this.xu = J.gT;
            this.pS = !1;
            if (!J.Gi(Y, Y.v)) {
                this.pS = !0;
                J.Uv(Y, Y.v, !1)
            }
            this.tR = {
                f4: J.gT.rB,
                V: J.gT.sa
            }
        } else {
            this.fZ = 0;
            this.V7 = D._.vF(Y, this.t, null, V);
            for (var x = 0; x < this.V7.length; x++)
                if (this.V7[x][3] != null)
                    r = !1
        }
        var t = this.fZ == 1;
        if (this.V7 && this.V7.length == 1) {
            var c = this.V7[0];
            if (c[3] == null)
                t = !0;
            if (c[4] != null) {
                C = Y.t[this.t[0]].add.SoLd;
                if (c[1] || c[2])
                    t = !1
            }
        }
        var M = E ? Y.v.rect.clone() : D._.Tf(Y, this.t, V);
        this.jj = M;
        if (!E && C) {
            var a = D._.Sj(C.nonAffineTransform);
            this.jj = w.H.Hh(w.uM.gF(C.warp.v));
            if (t)
                this.S1 = new b7(C.warp.v);
            this.Ff = w.J.k4(a, this.jj);
            this.Z8 = new ge(a,!0,!0,r,!1,!1,R)
        } else {
            if (t || E)
                this.S1 = new b7(w.uM.T(this.jj));
            this.Ff = [1, 0, 0, 0, 1, 0, 0, 0];
            if (this.id == D._p)
                R = 3;
            this.Z8 = new ge([M.x, M.y, M.x + M.d, M.y, M.x + M.d, M.y + M.b, M.x, M.y + M.b],!0,!0,r,!1,!1,R)
        }
        this.a7Z = [1, 0, 0, 0, 1, 0, 0, 0];
        if (this.id == D._p) {
            var Q = this.V7[0][0]
              , A = Q.Cw
              , p = A[1];
            this.BJ = w.jP.ajM(A[0], p.d, p.b)
        }
    }
    ;
    D._.Tf = function(Y, R, V) {
        if (R == null)
            R = Y.ss(!0, null, null, !0);
        var E = new gE;
        if (Y.v && R.length == 1 && R[0] >= 0)
            E = Y.v.rect.clone();
        else
            for (var x = 0; x < R.length; x++) {
                var r = R[x]
                  , K = 0 <= r ? Y.t[r] : -1e3 < r ? Y.Pf[-1 - r] : Y.Rg[-1e3 - r]
                  , J = K.add ? K.add.vmsk : null
                  , t = 0 <= r ? K.OS(Y, R.length == 1, !1, V) : -1e3 < r ? w.Y.OI(J.N, R.length == 1 && J.C.length != 0 ? J.C : null) : K.rect.clone();
                E = E.ov(t)
            }
        return E
    }
    ;
    D._.prototype.$a = function(Y, R, V, E) {
        var r = new I(R,!0);
        r.data = V;
        if (E)
            r.m = E;
        Y.f(r)
    }
    ;
    D._.vF = function(Y, R, V, E) {
        var r = [];
        for (var x = 0; x < R.length; x++) {
            var K = R[x], J, t;
            if (K >= 0) {
                J = Y.t[K];
                t = J.d_(Y, V, E)
            } else if (K > -1e3) {
                J = Y.Pf[-1 - K];
                t = [2]
            } else {
                r.push([null, null, null, null, null, null, null, Y.Rg[-1e3 - K].clone()]);
                continue
            }
            var C = [];
            if (t.indexOf(0) != -1) {
                var c = {
                    Cw: [J.buffer.slice(0), J.rect.clone()]
                };
                C.push(c);
                if (J.i_()) {
                    var M = J.Ka(Y);
                    c.a7c = M.buffer.slice(0);
                    c.a8w = M.rect.clone()
                }
            } else
                C.push(null);
            if (t.indexOf(1) != -1)
                C.push(J.fp().clone());
            else
                C.push(null);
            if (t.indexOf(2) != -1)
                C.push({
                    AA: J.add.vmsk.clone(),
                    vs: J.add.vstk ? JSON.parse(JSON.stringify(J.add.vstk)) : null,
                    Cv: J.add.vstk ? D.f3.Sv(Y, K) : null,
                    Wg: J.add.vogk ? JSON.parse(JSON.stringify(J.add.vogk)) : null
                });
            else
                C.push(null);
            if (J.add.TySh && C[0]) {
                bg.Hj(J.add.TySh);
                C.push(J.add.TySh.g.clone())
            } else
                C.push(null);
            if (J.add.SoLd && C[0])
                C.push(JSON.parse(JSON.stringify(J.add.SoLd)));
            else
                C.push(null);
            if (t.indexOf(3) != -1)
                C.push(J.Ka(Y).r.clone());
            else
                C.push(null);
            if (J.add.lmfx)
                C.push(JSON.stringify(J.add.lmfx));
            else
                C.push(null);
            r.push(C)
        }
        return r
    }
    ;
    D._.YZ = function(Y, R, V) {
        for (var x = 0; x < R.length; x++) {
            var E = R[x]
              , r = 0 <= E ? Y.t[E] : -1e3 < E ? Y.Pf[-1 - E] : Y.Rg[-1e3 - E]
              , K = V[x];
            if (K[0]) {
                r.rect = K[0].Cw[1].clone();
                r.buffer = K[0].Cw[0].slice(0);
                if (r.i_()) {
                    var J = r.Ka(Y);
                    J.buffer = K[0].a7c.slice(0);
                    J.rect = K[0].a8w.clone()
                }
            }
            if (K[1]) {
                r.fp().channel = K[1].channel.slice(0);
                r.fp().rect = K[1].rect.clone();
                r.fp().Dw = !0
            }
            if (K[2]) {
                r.add.vmsk = K[2].AA.clone();
                if (K[2].Cv)
                    D.f3.pn(r, K[2].Cv);
                if (K[2].vs)
                    r.add.vstk = JSON.parse(JSON.stringify(K[2].vs));
                if (K[2].Wg)
                    r.add.vogk = JSON.parse(JSON.stringify(K[2].Wg))
            }
            if (K[3]) {
                r.add.TySh.g = K[3].clone();
                bg.yZ(r.add.TySh)
            }
            if (K[4]) {
                r.add.SoLd = JSON.parse(JSON.stringify(K[4]))
            }
            if (K[5]) {
                var t = r.Ka(Y).r;
                t.channel = K[5].channel.slice(0);
                t.rect = K[5].rect.clone()
            }
            if (K[6]) {
                r.add.lmfx = JSON.parse(K[6])
            }
            if (K[7]) {
                r.channel = K[7].channel.slice(0);
                r.rect = K[7].rect.clone();
                r.Dw = !0
            }
            if (0 <= E) {
                r.Qd(Y);
                r.D()
            }
        }
        Y.D()
    }
    ;
    D._.k9 = function(Y) {
        var R = Y.clone()
          , V = Math.atan2(-R.O, R.o)
          , E = new bF;
        E.rotate(-V);
        R.concat(E);
        return (Math.abs(R.o) + Math.abs(R.Xa)) / 2
    }
    ;
    D._.zE = function(Y, R, V, E, r, K, J, t, C, c) {
        if (typeof K[0] == "number") {
            var M = [];
            for (var x = 0; x < V.length; x++)
                M[x] = K;
            K = M
        }
        for (var x = 0; x < V.length; x++) {
            var a = K[x]
              , Q = w.J.P4(a)
              , A = D._.k9(Q)
              , p = V[x]
              , v = 0 <= p ? Y.t[p] : -1e3 < p ? Y.Pf[-1 - p] : Y.Rg[-1e3 - p]
              , W = E[x];
            if (W[0] && v.add.lmfx && t)
                ft.tH(v.add.lmfx, A);
            if (W[0] && !W[3] && !W[4] && !W[5]) {
                var n = W[0].Cw;
                if (C) {
                    var $ = C.clone()
                      , G = w.T($.X() * 4);
                    w.Vj(n[0], n[1], G, $);
                    n = [G, $]
                }
                var o = D._.be(n, r, a, J, r == 0 ? v.buffer.buffer : null, null, null, c);
                if (o) {
                    v.rect = o.rect;
                    v.buffer = o.buffer
                }
            }
            if (W[1])
                D._.Wy(Y, W[1], v.fp(), r, a, J);
            if (W[2]) {
                var B = J && !w.uM.XJ(J)
                  , L = W[2].AA.clone()
                  , u = V.length == 1 && L.C.length != 0
                  , y = V.length == 1 && L.QS.length > 1;
                if (y)
                    u = !1;
                var S = u ? L.C : null
                  , X = y ? L.QS : null;
                if (B) {
                    var N = w.uM.gF(J);
                    w.J.apply(a, N);
                    w.Y.a8s(L.N, N, S, X)
                } else
                    w.Y.al5(L.N, a, S, X);
                if (v.add.vstk && t) {
                    v.add.vstk.strokeStyleLineWidth.v.val = W[2].vs.strokeStyleLineWidth.v.val * A;
                    var k = W[2].Cv;
                    if (k.JQ == 3) {
                        k = JSON.parse(JSON.stringify(k));
                        var d = k.Cv.phase.v;
                        k.Cv.Scl.v.val = Math.round(k.Cv.Scl.v.val * A);
                        d.Hrzn.v = Math.round(d.Hrzn.v * A);
                        d.Vrtc.v = Math.round(d.Vrtc.v * A);
                        D.f3.pn(v, k)
                    }
                }
                if (v.add.vogk) {
                    v.add.vogk = JSON.parse(JSON.stringify(W[2].Wg));
                    if (B || y)
                        w.Wg.a3w(v.add.vogk);
                    else
                        w.Wg.g(v.add.vogk, a, V.length > 1 ? [] : L.C, t)
                }
                L.Sf *= A;
                v.add.vmsk = L;
                if (v.add.vogk)
                    w.Wg.AG(v.add.vogk, v.add.vmsk)
            }
            if (W[3]) {
                var P = W[3].clone();
                P.concat(Q);
                v.add.TySh.g = P;
                bg.yZ(v.add.TySh);
                var Z = new cd(v.add.TySh.VW,R.jq)
                  , s = bp.o0(Z, v.add.TySh);
                v.rect = s.V;
                v.buffer = s.uG
            }
            if (W[4]) {
                var _ = v.add.SoLd
                  , b = D._.Sj(W[4].nonAffineTransform);
                w.J.apply(a, b);
                var q = w.H.LB(b);
                if (ge.Qr(b)) {
                    if (J) {
                        var e = w.H.Hh(w.uM.gF(W[4].warp.v))
                          , g = w.J.k4(b, e)
                          , F = w.H.Hh(w.uM.gF(J));
                        b = [F.x, F.y, F.x + F.d, F.y, F.x + F.d, F.y + F.b, F.x, F.y + F.b];
                        w.J.apply(g, b);
                        _.warp.v = J
                    }
                    var l = w.J.k4(b)
                      , i = b;
                    if (!w.J.w9(l)) {
                        l[6] = l[7] = 0;
                        i = [0, 0, 1, 0, 1, 1, 0, 1];
                        w.J.apply(l, i)
                    }
                    _.Trnf = D._.zT(i);
                    _.nonAffineTransform = D._.zT(b);
                    v.iA(Y, r == 0)
                }
            }
            if (W[5])
                D._.Wy(Y, W[5], v.Ka(Y).r, r, a, J);
            if (W[7])
                D._.Wy(Y, W[7], v, r, a, J);
            if (0 <= p) {
                if (r != 0)
                    v.O_();
                v.Qd(Y);
                v.D()
            }
        }
        Y.D()
    }
    ;
    D._.Gx = function(Y, R, V, E, r, K) {
        if (V == null)
            V = !1;
        return D._.be(Y, V ? 0 : 1, w.J.tu(R), null, E, r, K, V)
    }
    ;
    D._.be = function(Y, R, V, E, r, K, J, t) {
        if (t == null)
            t = !1;
        if (t && J)
            throw "e";
        var C = {}
          , Q = 0
          , A = .3;
        if (E && !w.uM.XJ(E)) {
            var c = w.uM.gF(E);
            w.J.apply(V, c);
            C.rect = w.H.LB(c);
            C.buffer = w.T(C.rect.X() * 4);
            w.iv.drawImage(c, Y[0], Y[1].d, Y[1].b, C.buffer, C.rect, R == 0);
            return C
        }
        w.A0(Y);
        var M = Y[0]
          , a = Y[1]
          , p = a.X() * D._.k9(w.J.P4(V));
        if (t && p > 4e6)
            A = p > 8e6 ? 2.2 : 1.2;
        while (Q + 3 < Y.length && Y[Q + 3].X() > 16 && w.J.w9(V) && D._.k9(w.J.P4(V)) < A) {
            Q += 2;
            var v = Y[Q]
              , W = Y[Q + 1]
              , n = a.d / W.d
              , $ = a.b / W.b;
            V = w.J.Zq(V, [1, 0, a.x, 0, 1, a.y, 0, 0]);
            V = w.J.Zq(V, [n, 0, 0, 0, $, 0, 0, 0]);
            V = w.J.Zq(V, [1, 0, -a.x, 0, 1, -a.y, 0, 0]);
            a = W;
            M = v
        }
        var G = w.J.Zq(V, w.J.tu(new bF(a.d,0,0,a.b,a.x,a.y)))
          , o = [0, 0, 1, 0, 1, 1, 0, 1];
        w.J.apply(G, o);
        C.rect = w.H.LB(o);
        if (J)
            C.rect = C.rect.Cy(J);
        if (t) {
            while ((C.rect.d & 3) != 0)
                C.rect.d++;
            while ((C.rect.b & 3) != 0)
                C.rect.b++
        }
        if (!ge.Qr(o) || C.rect.d > 1e5 || C.rect.b > 1e5 || C.rect.X() > 3e4 * 3e4)
            return null;
        var B = C.rect.X() * 4;
        if (r && r.byteLength >= B && B >= r.byteLength >> 2) {
            C.buffer = new Uint8Array(r)
        } else {
            C.buffer = w.T(B)
        }
        w.J.drawImage(G, M, a.d, a.b, C.buffer, C.rect, R == 0, K, t);
        if (R == 2 && C.buffer) {
            var L = C.rect.d, u = C.rect.b, y;
            y = [0, -1, 0, -1, 16, -1, 0, -1, 0];
            y = w.RV.Mg(y);
            var S = C.buffer.slice(0);
            w.RV.Ad(S, C.buffer, L, u, y, 255, !1, !0)
        }
        if (C.buffer)
            return C
    }
    ;
    D._.Wy = function(Y, R, V, E, r, K) {
        if (R.color == 255)
            w.tb(R.channel);
        var J = R.rect
          , t = w.T(J.X() * 4);
        w.hL(R.channel, t, 3);
        var C = D._.be([t, J], E, r, K);
        if (C) {
            V.rect = C.rect;
            V.channel = w.T(C.rect.X());
            w.vH(C.buffer, V.channel, 3);
            V.Dw = !0
        }
        if (R.color == 255) {
            w.tb(R.channel);
            if (C)
                w.tb(V.channel)
        }
    }
    ;
    D._.Sj = function(Y) {
        var R = []
          , V = Y.v.length;
        for (var x = 0; x < V; x++)
            R.push(Y.v[x].v);
        return R
    }
    ;
    D._.zT = function(Y) {
        var R = {
            t: "VlLs",
            v: []
        }
          , V = Y.length;
        for (var x = 0; x < V; x++)
            R.v.push({
                t: "doub",
                v: Y[x]
            });
        return R
    }
    ;
    D._.prototype.amH = function() {
        var Y = w.H.Hh(w.uM.gF(this.S1.bz()))
          , R = w.J.k4(this.Z8.JG(), this.jj)
          , V = [Y.x, Y.y, Y.x + Y.d, Y.y, Y.x + Y.d, Y.y + Y.b, Y.x, Y.y + Y.b];
        w.J.apply(R, V);
        this.Z8.dT(V);
        this.jj = Y
    }
    ;
    D._.prototype.x7 = function(Y, R, V, E) {
        var r = w.J.k4(this.Z8.JG(), this.jj);
        r = w.J.Zq(r, w.J.tb(this.Ff));
        var K = this.S1 ? this.S1.bz() : null;
        if (this.fZ == 0) {
            var J = this.FI = w.J.P4(r);
            if (this.id == D._p) {
                var t = this.V7[0][0]
                  , C = t.Cw
                  , c = C[1]
                  , M = ~~(c.d * Math.max(0, J.o))
                  , a = ~~(c.b * Math.max(0, J.Xa))
                  , Q = new gE(Math.round(J.o * c.x + J.Wr),Math.round(J.Xa * c.y + J.W8),M,a)
                  , A = w.jP.g(this.BJ, Q)
                  , p = Y.t[this.t[0]];
                p.buffer = A;
                p.rect = Q;
                p.D();
                Y.D()
            } else
                D._.zE(Y, R, this.t, this.V7, V, r, K, null, null, E)
        } else if (this.fZ == 1) {
            var v = Y.t[this.t[0]]
              , c = this.tR.V;
            if (v.St <= 0) {
                var W = this.tR.f4
                  , n = this.w$;
                if (K && !w.uM.XJ(K) && !n.rect.yU(c)) {
                    var A = w.T(n.rect.X() * 4);
                    w.Vj(W, c, A, n.rect);
                    W = A;
                    c = n.rect
                }
                var $ = D._.be([W, c], V, r, K);
                if ($) {
                    v.gT.rB = $.buffer;
                    v.gT.sa = $.rect;
                    var G = w.T($.rect.X());
                    w.vH(v.gT.rB, G, 3);
                    Y.v = {
                        channel: G,
                        rect: v.gT.sa.clone()
                    }
                }
            } else {
                var o = w.T(c.X() * 4);
                w.hL(this.tR.f4, o, 3);
                var $ = D._.be([o, c], V, r, K);
                if ($) {
                    v.gT.rB = w.T($.rect.X());
                    w.vH($.buffer, v.gT.rB, 3);
                    v.gT.sa = $.rect
                }
                this.ph(Y, V, r, K)
            }
            v.Cm(Y, 0, 0, Y.v);
            if (V != 0) {
                v.O_();
                w.O_(Y.v)
            }
            Y.ha = !0;
            Y.D()
        } else if (this.fZ == 2)
            this.ph(Y, V, r, K)
    }
    ;
    D._.prototype.ph = function(Y, R, V, E) {
        var r = this.w$.rect
          , K = w.T(r.X() * 4);
        w.hL(this.w$.channel, K, 3);
        var J = D._.be([K, r], R, V, E)
          , t = w.T(J.rect.X());
        w.vH(J.buffer, t, 3);
        Y.v = {
            channel: t,
            rect: J.rect
        };
        Y.ha = !0
    }
    ;
    D._.prototype.disable = function(Y, R, V, E) {
        if (this.Z8)
            this.$d(Y, R, null, !0)
    }
    ;
    D.sR = function() {
        D._.call(this, [10, 16], D.vB, "tools/transform")
    }
    ;
    D.sR.prototype = new D._;
    D.NA = function() {
        D._.call(this, [7, 10], D.wk, "tools/transform")
    }
    ;
    D.NA.prototype = new D._;
    D.lr = function() {
        D._.call(this, [10, 48], D._p, "tools/transform")
    }
    ;
    D.lr.prototype = new D._;
    D.jZ = function(Y, R, V) {
        D.R0.call(this, [10, 46], D.hw, "tools/transform");
        this.tn = [1, 1, 2, !0];
        this.fI = "rigidTransform";
        this.rA = null;
        this.akh = null;
        this.MK = null;
        this.Ll = null;
        this.Aq = null;
        this.dr = null;
        this.S$ = []
    }
    ;
    D.jZ.prototype = new D.R0;
    D.jZ.prototype.rT = function() {
        return !0
    }
    ;
    D.jZ.hd = function(Y) {
        if (Y == null)
            return !1;
        if (Y.C.length != 1)
            return !1;
        var R = Y.t[Y.C[0]];
        return R.add.SoLd || Y.J3(!1)
    }
    ;
    D.jZ.prototype.Tj = function(Y, R) {
        return D.jZ.hd(Y)
    }
    ;
    D.jZ.prototype.enable = function(Y, R, V, E, r, K, J) {
        this.akh = K.pC;
        var t = K.pC, C, v = null;
        if (t) {
            var c = Y.t[t.$];
            if (c.add.SoLd.filterFX != null) {
                var M = c.add.SoLd.filterFX.v.filterFXList.v;
                if (M[t.index])
                    C = JSON.parse(JSON.stringify(M[t.index].v.Fltr.v))
            }
        }
        var a = C == null
          , c = Y.t[Y.C[0]]
          , Q = c.buffer
          , A = c.rect
          , p = c.add.SoLd;
        if (p) {
            var W = p.nonAffineTransform.v;
            v = [];
            for (var x = 0; x < 4; x++)
                v.push(W[x * 2].v, W[x * 2 + 1].v);
            if (a)
                this.Bl("edit", R);
            var n = c.Ka(Y);
            Q = n.buffer;
            A = n.rect
        }
        this.rA = {
            buffer: Q.slice(0),
            rect: A.clone(),
            a0Q: v
        };
        if (a)
            C = D.jZ.gi(this.rA, this.tn);
        this.MK = C;
        this.Ll = D.jZ.Nd(this.MK, this.tn);
        this.vd();
        this.h4(Y);
        if (a)
            this.Kw(R);
        var $ = new I(O.E.z,!0);
        $.data = {
            e: O.U.oN,
            m: this.id,
            jR: this.tn
        };
        R.f($);
        $.data = {
            e: O.U.u$,
            Cz: "default"
        };
        R.f($)
    }
    ;
    D.jZ.prototype.disable = function(Y, R, V, E) {
        if (this.Ll)
            this.$d(Y, R, !0)
    }
    ;
    D.jZ.prototype.vd = function(Y) {
        var R = this.Ll;
        this.S$ = [];
        for (var x = 0; x < R.length; x++) {
            var V = R[x];
            for (var E = 0; E < V.C.length; E++)
                this.S$.push([x, V.C[x]]);
            V.Ur = w.sW.nc(V);
            if (Y)
                w.sW.ar(V)
        }
    }
    ;
    D.jZ.prototype.c8 = function(Y, R, V, E) {
        if (Y.Qh == "commit")
            this.$d(V, R, !0);
        else if (Y.Qh == "cancel")
            this.lA(V, R, !0);
        else if (Y.Qh == "prm") {
            var r = !1;
            for (var x = 0; x < 3; x++)
                if (this.tn[x] != Y.jR[x])
                    r = !0;
            this.tn = Y.jR;
            if (r) {
                this.MK = D.jZ.gi(this.rA, this.tn, this.MK);
                this.Ll = D.jZ.Nd(this.MK, this.tn);
                this.vd(!0);
                this.Kw(R)
            }
            this.h4(V)
        } else if (Y.Qh == "moveDepth") {
            var K = this.Ll;
            for (var J = 0; J < K.length; J++) {
                var t = K[J];
                for (var x = 0; x < t.C.length; x++) {
                    var C = t.C[x];
                    t.YT[C] += Y.abu ? 1 : -1
                }
            }
            this.Kw(R)
        }
    }
    ;
    D.jZ.prototype.DP = function(Y, R) {
        return Y == m.pl || Y == m.dm
    }
    ;
    D.jZ.prototype.U7 = function(Y, R, V, E) {
        var r = E.ro();
        if (E.i(m.ZI))
            this.$d(Y, R, !0);
        else if (E.i(m.TP))
            this.lA(Y, R, !0);
        else if (E.i(m.pl) || E.i(m.dm)) {
            var K = this.Ll;
            for (var J = 0; J < K.length; J++) {
                var t = K[J];
                t.C.sort(function(M, a) {
                    return a - M
                });
                for (var x = 0; x < t.C.length; x++) {
                    var C = t.C[x]
                      , c = C * 2;
                    t.YT.splice(C, 1);
                    t.PA.splice(C, 1);
                    t.bv.splice(C, 1);
                    t.xw.splice(C, 1);
                    t.dk.splice(c, 2);
                    t.M3.splice(c, 2)
                }
                t.C = [];
                if (t.xw.length == 0) {
                    t.XP = t.nr.slice(0);
                    t.zJ = t.nr.slice(0)
                }
            }
            this.vd(!0);
            this.Kw(R);
            this.h4(Y)
        } else if (r.x != 0 || r.y != 0) {
            this.MB(Y, r.x, r.y, R);
            this.yw = null
        }
    }
    ;
    D.jZ.prototype.$d = function(Y, R, V) {
        this.Bl("confirm", R);
        this.escape(Y, R, V)
    }
    ;
    D.jZ.prototype.lA = function(Y, R, V) {
        this.Bl("cancel", R);
        this.escape(Y, R, V)
    }
    ;
    D.jZ.prototype.escape = function(Y, R, V) {
        Y.S.ZW = null;
        Y.S.Ri = [];
        Y.eR = !0;
        this.Ll = null;
        var E = new I(O.E.z,!0);
        E.data = {
            e: O.U.T_
        };
        if (V)
            R.f(E)
    }
    ;
    D.jZ.prototype.K_ = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y)
          , J = K.x
          , t = K.y
          , C = this.Ll
          , c = null
          , M = [0, 2, 4, 1.2, 1.2, 1.2]
          , a = -1
          , Q = O.M() * 5 / Y.a.k;
        for (var x = 0; x < C.length; x++) {
            var A = C[x]
              , p = w.H.C6(A.M3, J, t, Q);
            if (p != -1)
                c = [x, p];
            if (a == -1 && w.sW.Ij.a4T(A.zJ, A.WI, J, t))
                a = x
        }
        if (c == null && a != -1) {
            var A = C[a];
            D.jZ.B$(A, J, t, J, t, 0);
            c = [a, A.xw.length - 1];
            A.Ur = w.sW.nc(A)
        }
        this.Aq = K;
        if (c) {
            var v = C[c[0]].C.indexOf(c[1]) != -1;
            if (E.i(m.Ms) && !v) {
                C[c[0]].C.push(c[1]);
                this.S$.push(c)
            } else if (!v) {
                C[c[0]].C = [c[1]];
                this.S$ = [c]
            }
        }
        this.h4(Y)
    }
    ;
    D.jZ.B$ = function(Y, R, V, E, r, K) {
        var J = w.H.C6(Y.zJ, R, V);
        Y.xw.push(J);
        Y.M3.push(E, r);
        Y.dk.push(Y.zJ[J * 2] - R, Y.zJ[J * 2 + 1] - V);
        Y.bv.push(0);
        Y.PA.push(!1);
        Y.YT.push(K)
    }
    ;
    D.jZ.prototype.NZ = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y)
          , J = this.Aq;
        if (J)
            this.MB(Y, K.x - J.x, K.y - J.y, R)
    }
    ;
    D.jZ.prototype.MB = function(Y, R, V, E) {
        var r = {}
          , K = this.S$
          , J = this.Ll;
        if (this.yw == null) {
            this.yw = [];
            for (var x = 0; x < J.length; x++)
                this.yw.push(J[x].M3.slice(0))
        }
        for (var x = 0; x < K.length; x++) {
            var t = this.S$[x]
              , C = t[0]
              , c = J[t[0]]
              , M = t[1] * 2;
            c.M3[M + 0] = this.yw[C][M + 0] + R;
            c.M3[M + 1] = this.yw[C][M + 1] + V;
            r[C] = C
        }
        for (var C in r)
            w.sW.ar(this.Ll[r[C]]);
        this.h4(Y);
        this.Kw(E)
    }
    ;
    D.jZ.prototype.Bl = function(Y, R) {
        var V = new I(O.E.K,!0);
        V.m = D.p4;
        V.data = {
            e: Y,
            pC: this.akh,
            fI: this.fI,
            U9: this.MK
        };
        R.f(V)
    }
    ;
    D.jZ.prototype.Eb = function(Y, R, V, E, r) {
        this.Aq = null;
        this.yw = null
    }
    ;
    D.jZ.prototype.Kw = function(Y) {
        D.jZ.c6(this.Ll, this.tn, this.MK);
        this.Bl("edit", Y)
    }
    ;
    D.jZ.prototype.h4 = function(Y) {
        var R = this.Ll
          , V = this.MK;
        Y.S.ZW = {
            P: [],
            R: []
        };
        Y.S.Ri = [];
        Y.S.h_ = [];
        for (var x = 0; x < R.length; x++) {
            var E = R[x];
            for (var r = 0; r < E.C.length; r++)
                Y.S.h_.push((Y.S.Ri.length >>> 1) + E.C[r]);
            Y.S.Ri = Y.S.Ri.concat(E.M3);
            if (this.tn[3])
                w.H.concat(Y.S.ZW, w.H.a2v(E.zJ, E.WI))
        }
        Y.eR = !0
    }
    ;
    D.jZ.gi = function(Y, R, V) {
        var E = Y.buffer
          , r = Y.rect
          , K = Y.a0Q
          , J = h2.WL("rigidTransform");
        if (K)
            for (var x = 0; x < 4; x++) {
                J["PuX" + x].v = K[x * 2];
                J["PuY" + x].v = K[x * 2 + 1]
            }
        var t = J.puppetShapeList.v
          , C = w.sW.a5O(E, r.d, r.b, R[1], R[2])
          , c = [];
        for (var M = 0; M < C.length; M++) {
            var a = {
                classID: "puppetShape",
                rigidType: {
                    t: "bool",
                    v: !0
                },
                VrsM: {
                    t: "long",
                    v: 1
                },
                VrsN: {
                    t: "long",
                    v: 0
                },
                originalVertexArray: {
                    t: "tdta",
                    v: []
                },
                deformedVertexArray: {
                    t: "tdta",
                    v: []
                },
                indexArray: {
                    t: "tdta",
                    v: []
                },
                pinOffsets: {
                    t: "VlLs",
                    v: []
                },
                posFinalPins: {
                    t: "VlLs",
                    v: []
                },
                pinVertexIndices: {
                    t: "VlLs",
                    v: []
                },
                PinP: {
                    t: "VlLs",
                    v: []
                },
                PnRt: {
                    t: "VlLs",
                    v: []
                },
                PnOv: {
                    t: "VlLs",
                    v: []
                },
                PnDp: {
                    t: "VlLs",
                    v: []
                },
                meshQuality: {
                    t: "long",
                    v: 2
                },
                meshExpansion: {
                    t: "long",
                    v: 2
                },
                meshRigidity: {
                    t: "long",
                    v: 2
                },
                imageResolution: {
                    t: "doub",
                    v: 72
                },
                selectedPin: {
                    t: "VlLs",
                    v: []
                }
            };
            a.meshBoundaryPath = {
                t: "Objc",
                v: {
                    classID: "pathClass",
                    pathComponents: {
                        t: "VlLs",
                        v: [{
                            t: "Objc",
                            v: {
                                classID: "PaCm",
                                shapeOperation: {
                                    t: "enum",
                                    v: {
                                        shapeOperation: "xor"
                                    }
                                },
                                SbpL: {
                                    t: "VlLs",
                                    v: [{
                                        t: "Objc",
                                        v: {
                                            classID: "Sbpl",
                                            Clsp: {
                                                t: "bool",
                                                v: !0
                                            },
                                            Pts: {
                                                t: "VlLs",
                                                v: []
                                            }
                                        }
                                    }]
                                }
                            }
                        }]
                    }
                }
            };
            var Q = C[M];
            t.push({
                t: "Objc",
                v: a
            });
            var A = Q.nr.slice(0);
            w.H.g(A, new bF(1,0,0,1,r.x,r.y), A);
            var p = Q.WI;
            for (var x = 0; x < p.length; x += 3) {
                var v = p[x + 1];
                p[x + 1] = p[x + 2];
                p[x + 2] = v
            }
            c.push({
                WI: p,
                nr: A,
                XP: A,
                zJ: A,
                xw: [],
                dk: [],
                M3: [],
                Ur: null,
                C: [],
                bv: [],
                PA: [],
                YT: []
            })
        }
        if (V) {
            var W = D.jZ.Nd(V, [])
              , n = c[0];
            for (var x = 0; x < W.length; x++) {
                var $ = W[x];
                for (var G = 0; G < $.C.length; G++)
                    n.C.push((n.M3.length >>> 1) + $.C[G]);
                for (var G = 0; G < $.xw.length; G++) {
                    var o = $.xw[G] * 2
                      , B = $.nr[o] - $.dk[G * 2]
                      , L = $.nr[o + 1] - $.dk[G * 2 + 1];
                    D.jZ.B$(n, B, L, $.M3[G * 2], $.M3[G * 2 + 1], $.YT[G])
                }
            }
        }
        D.jZ.c6(c, R, J);
        return J
    }
    ;
    D.jZ.Nd = function(Y, R) {
        function V(L) {
            var u = [];
            for (var x = 0; x < L.length; x++)
                u.push(L[x].v);
            return u
        }
        var E = Y.puppetShapeList.v
          , r = [];
        for (var K = 0; K < E.length; K++) {
            var J = E[K].v;
            R[0] = J.meshRigidity.v - 1;
            R[1] = J.meshQuality.v - 1;
            R[2] = J.meshExpansion.v;
            var t = J.pinVertexIndices.v.length
              , C = J.meshBoundaryPath.v.pathComponents.v[0].v.SbpL.v[0].v.Pts;
            C.v = [];
            var c = new Uint32Array(new Uint8Array(J.indexArray.v).buffer)
              , M = new Float32Array(new Uint8Array(J.originalVertexArray.v).buffer)
              , a = new Float32Array(new Uint8Array(J.deformedVertexArray.v).buffer)
              , Q = []
              , A = []
              , p = [];
            for (var x = 0; x < c.length; x++)
                Q.push(c[x]);
            for (var x = 0; x < M.length; x++) {
                A.push(M[x]);
                p.push(a[x])
            }
            var v = V(J.pinVertexIndices.v)
              , W = V(J.pinOffsets.v)
              , n = V(J.posFinalPins.v)
              , $ = V(J.PnRt.v)
              , G = V(J.PnOv.v)
              , o = V(J.PnDp.v)
              , B = V(J.selectedPin.v);
            r.push({
                WI: Q,
                nr: A,
                XP: p.slice(0),
                zJ: p,
                xw: v,
                dk: W,
                M3: n,
                Ur: null,
                bv: $,
                PA: G,
                YT: o,
                C: B
            })
        }
        return r
    }
    ;
    D.jZ.c6 = function(Y, R, V) {
        function E(Q, A) {
            var p = [];
            for (var x = 0; x < Q.length; x++)
                p.push({
                    t: A,
                    v: Q[x]
                });
            return p
        }
        function r(Q, A, p) {
            var v = new (p ? Uint32Array : Float32Array)(Q)
              , W = new Uint8Array(v.buffer);
            for (var x = 0; x < W.length; x++)
                A[x] = W[x]
        }
        var K = V.puppetShapeList.v;
        for (var J = 0; J < K.length; J++) {
            var t = Y[J]
              , C = K[J].v;
            C.meshRigidity.v = R[0] + 1;
            C.meshQuality.v = R[1] + 1;
            C.meshExpansion.v = R[2];
            r(t.WI, C.indexArray.v, !0);
            r(t.nr, C.originalVertexArray.v);
            r(t.zJ, C.deformedVertexArray.v);
            var c = [];
            for (var x = 0; x < t.xw.length; x++) {
                var M = t.xw[x] * 2
                  , a = x * 2;
                c[a] = t.nr[M] - t.dk[a];
                c[a + 1] = t.nr[M + 1] - t.dk[a + 1]
            }
            C.PinP.v = E(c, "doub");
            C.pinVertexIndices.v = E(t.xw, "long");
            C.pinOffsets.v = E(t.dk, "doub");
            C.posFinalPins.v = E(t.M3, "doub");
            C.PnRt.v = E(t.bv, "long");
            C.PnOv.v = E(t.PA, "bool");
            C.PnDp.v = E(t.YT, "doub");
            C.selectedPin.v = E(t.C, "long")
        }
    }
    ;
    D.QW = function(Y, R, V) {
        D.R0.call(this, Y ? Y : [10, 40], R ? R : D.zH, V ? V : "tools/slice");
        this.oZ = null;
        this.zk = null;
        this.XG = null;
        this.a5w = null;
        this.nw = null;
        this.q8 = null
    }
    ;
    D.QW.prototype = new D.R0;
    D.QW.ja = function(Y, R) {
        var V = -1;
        for (var x = 0; x < Y.length; x++) {
            var E = D.QW._1(Y, x);
            if (E[0] <= R.x && R.x <= E[2] && E[1] <= R.y && R.y <= E[3]) {
                V = x;
                break
            }
        }
        return V
    }
    ;
    D.QW.prototype.Vl = function(Y, R, V, E, r) {
        this.Ut(V);
        V.dO[V.N4[0]].v = Y;
        V.eR = !0;
        this.h0(V)
    }
    ;
    D.QW.prototype.enable = function(Y, R, V, E, r, K) {
        D.R0.prototype.enable.call(this, Y, R, V, E, r, K);
        if (!V.YX.dO) {
            var J = new I(O.E.z,!0);
            J.data = {
                e: O.U.KZ,
                jR: fG.M6
            };
            R.f(J)
        }
    }
    ;
    D.QW.prototype.disable = function() {
        this.oZ = null;
        this.zk = null
    }
    ;
    D.QW.prototype.og = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y)
          , J = D.QW.ja(Y.dO, K);
        if (J == -1)
            return;
        this.oZ = Y;
        this.zk = R;
        Y.N4 = [J];
        Y.eR = !0;
        if (this.q8 == null) {
            this.q8 = new bR([{
                name: [5, 4]
            }, {
                name: [8, 11, 1],
                nZ: !0
            }]);
            this.q8.s("select", this.g8, this)
        }
        var t = this.q8;
        t.parent = R;
        t.B();
        t.update(Y, V);
        var C = new I(O.E.z,!0);
        C.data = {
            e: O.U.nq,
            iF: t,
            x: r.Gt + 2,
            y: r.nV + 1
        };
        R.f(C)
    }
    ;
    D.QW.prototype.g8 = function(Y) {
        var R = this.q8.sU()[0]
          , V = this.oZ;
        if (R == 0) {
            this.Ut(V);
            V.dO.splice(V.N4[0], 1);
            V.N4 = [];
            V.eR = !0;
            this.h0(V)
        }
        if (R == 1) {
            var E = new I(O.E.z,!0);
            E.data = {
                e: O.U.D0,
                xs: "soptions",
                G: V.dO[V.N4[0]].v
            };
            this.zk.f(E)
        }
    }
    ;
    D.QW.prototype.K_ = function(Y, R, V, E, r) {
        if (Y == null)
            return;
        this.Ut(Y);
        var K = Y.a.Cf(r.x, r.y);
        K = D.RT.wW(Y, K, V, [!0, null, !1]);
        K.x = Math.round(K.x);
        K.y = Math.round(K.y);
        this.nw = K;
        Y.dO.unshift(D.QW.MM());
        Y.N4 = [0];
        D.QW.aB(Y.dO, 0, [K.x, K.y, K.x + 20, K.y + 20]);
        Y.eR = !0
    }
    ;
    D.QW.prototype.NZ = function(Y, R, V, E, r) {
        if (this.XG == null)
            return;
        var K = Y.a.Cf(r.x, r.y)
          , J = this.nw;
        K = D.RT.wW(Y, K, V, [!0, null, !1]);
        K.x = Math.round(K.x);
        K.y = Math.round(K.y);
        var t = [J.x, J.y, K.x, K.y];
        D.QW.MV(t);
        D.QW.aB(Y.dO, 0, t);
        Y.eR = !0
    }
    ;
    D.QW.prototype.Eb = function(Y, R, V, E, r) {
        this.h0(Y);
        this.nw = null
    }
    ;
    D.QW.prototype.Ut = function(Y) {
        this.XG = JSON.stringify(Y.dO);
        this.a5w = JSON.stringify(Y.N4)
    }
    ;
    D.QW.prototype.h0 = function(Y) {
        var R = JSON.stringify(Y.dO);
        if (R != this.XG) {
            var V = new il(this.name,this);
            V.data = {
                tR: this.XG,
                $N: R,
                a0d: this.a5w,
                a2d: JSON.stringify(Y.N4)
            };
            Y.Ug(V)
        }
        this.XG = null
    }
    ;
    D.QW.prototype.Zk = function(Y, R) {
        R.dO = JSON.parse(Y.tR);
        R.N4 = JSON.parse(Y.a0d);
        R.eR = !0
    }
    ;
    D.QW.prototype.$E = function(Y, R) {
        R.dO = JSON.parse(Y.$N);
        R.N4 = JSON.parse(Y.a2d);
        R.eR = !0
    }
    ;
    D.QW.prototype.DP = function(Y, R) {
        return R != null && R.N4.length != 0 && (Y == m.pl || Y == m.dm)
    }
    ;
    D.QW.prototype.U7 = function(Y, R, V, E) {
        if (Y == null)
            return;
        this.Ut(Y);
        var r = E.ro();
        if (r.x != 0 || r.y != 0)
            D.QW.I3(Y, r);
        if (E.i(m.pl) || E.i(m.dm)) {
            var K = Y.dO.slice(0);
            for (var x = 0; x < Y.N4.length; x++)
                Y.dO.splice(Y.dO.indexOf(K[Y.N4[x]]), 1);
            Y.N4 = []
        }
        this.h0(Y)
    }
    ;
    D.QW.prototype.c8 = function(Y, R, V, E, r) {
        if (V == null || V.N4.length == 0)
            return;
        this.Ut(V);
        var K = V.dO
          , J = V.N4;
        J.sort(function(A, p) {
            return A - p
        });
        console.log(J);
        var t = K.slice(0)
          , C = []
          , c = [];
        for (var x = 0; x < J.length; x++) {
            var M = J[x]
              , a = K[M];
            c.push(a);
            t.splice(t.indexOf(a), 1)
        }
        var Q = Math.max(0, Math.min(t.length, J[0] - Y.dir));
        for (var x = 0; x < c.length; x++) {
            t.splice(Q + x, 0, c[x]);
            C.push(Q + x)
        }
        V.dO = t;
        V.N4 = C;
        this.h0(V)
    }
    ;
    D.QW.a0t = function(Y, R, V, E) {
        var r = new gv(-R.x,-R.y)
          , K = R.d / V.d
          , J = R.b / V.b
          , t = [0, 0, R.d, R.b];
        for (var x = 0; x < Y.length; x++) {
            var C = D.QW._1(Y, x);
            if (E) {
                C[0] = Math.round(C[0] * K);
                C[1] = Math.round(C[1] * J);
                C[2] = Math.round(C[2] * K);
                C[3] = Math.round(C[3] * J)
            } else {
                D.QW.gk(C, r);
                D.QW.ag3(C, t)
            }
            if (C[0] >= C[2] || C[1] >= C[3]) {
                Y.splice(x, 1);
                x--;
                continue
            }
            D.QW.aB(Y, x, C)
        }
    }
    ;
    D.QW.I3 = function(Y, R) {
        var V = Y.dO;
        for (var x = 0; x < Y.N4.length; x++) {
            var E = D.QW._1(V, Y.N4[x]);
            D.QW.gk(E, R);
            D.QW.aB(V, Y.N4[x], E)
        }
    }
    ;
    D.QW.ag3 = function(Y, R) {
        if (Y[0] < R[0])
            Y[0] = R[0];
        if (Y[1] < R[1])
            Y[1] = R[1];
        if (R[2] < Y[2])
            Y[2] = R[2];
        if (R[3] < Y[3])
            Y[3] = R[3]
    }
    ;
    D.QW.gk = function(Y, R) {
        Y[0] = Math.round(Y[0] + R.x);
        Y[2] = Math.round(Y[2] + R.x);
        Y[1] = Math.round(Y[1] + R.y);
        Y[3] = Math.round(Y[3] + R.y)
    }
    ;
    D.QW.aB = function(Y, x, R) {
        var V = Y[x].v.bounds.v;
        V.Left.v = R[0];
        V.Top.v = R[1];
        V.Rght.v = R[2];
        V.Btom.v = R[3]
    }
    ;
    D.QW._1 = function(Y, x) {
        var R = Y[x].v.bounds.v;
        return [R.Left.v, R.Top.v, R.Rght.v, R.Btom.v, x]
    }
    ;
    D.QW.MV = function(Y) {
        if (Y[2] < Y[0]) {
            var R = Y[0];
            Y[0] = Y[2];
            Y[2] = R
        }
        if (Y[2] == Y[0])
            Y[2]++;
        if (Y[3] < Y[1]) {
            var R = Y[1];
            Y[1] = Y[3];
            Y[3] = R
        }
        if (Y[3] == Y[1])
            Y[3]++
    }
    ;
    D.QW.Hh = function(Y, R) {
        var V = 1e9
          , E = -1e9
          , r = 1e9
          , K = -1e9;
        for (var x = 0; x < R.length; x++) {
            var J = D.QW._1(Y, R[x]);
            V = Math.min(V, J[0]);
            r = Math.min(r, J[1]);
            E = Math.max(E, J[2]);
            K = Math.max(K, J[3])
        }
        return [V, r, E, K]
    }
    ;
    D.QW.MM = function() {
        return {
            t: "Objc",
            v: {
                classID: "slice",
                sliceID: {
                    t: "long",
                    v: 0
                },
                groupID: {
                    t: "long",
                    v: 0
                },
                origin: {
                    t: "enum",
                    v: {
                        ESliceOrigin: "userGenerated"
                    }
                },
                Type: {
                    t: "enum",
                    v: {
                        ESliceType: "Img"
                    }
                },
                bounds: {
                    t: "Objc",
                    v: {
                        classID: "Rct1",
                        Top: {
                            t: "long",
                            v: 0
                        },
                        Left: {
                            t: "long",
                            v: 0
                        },
                        Btom: {
                            t: "long",
                            v: 0
                        },
                        Rght: {
                            t: "long",
                            v: 0
                        }
                    }
                },
                url: {
                    t: "TEXT",
                    v: ""
                },
                null: {
                    t: "TEXT",
                    v: ""
                },
                Msge: {
                    t: "TEXT",
                    v: ""
                },
                altTag: {
                    t: "TEXT",
                    v: ""
                },
                cellTextIsHTML: {
                    t: "bool",
                    v: !0
                },
                cellText: {
                    t: "TEXT",
                    v: ""
                },
                horzAlign: {
                    t: "enum",
                    v: {
                        ESliceHorzAlign: "default"
                    }
                },
                vertAlign: {
                    t: "enum",
                    v: {
                        ESliceVertAlign: "default"
                    }
                },
                bgColorType: {
                    t: "enum",
                    v: {
                        ESliceBGColorType: "None"
                    }
                },
                topOutset: {
                    t: "long",
                    v: 0
                },
                leftOutset: {
                    t: "long",
                    v: 0
                },
                bottomOutset: {
                    t: "long",
                    v: 0
                },
                rightOutset: {
                    t: "long",
                    v: 0
                }
            }
        }
    }
    ;
    D.eF = function() {
        D.QW.call(this, [10, 41], D.uS, "tools/sselect");
        this.nw = null;
        this.eD = null;
        this.qU = null;
        this.dr = null;
        this.Eg = !1
    }
    ;
    D.eF.prototype = new D.QW;
    D.eF.prototype.K_ = function(Y, R, V, E, r) {
        if (Y == null)
            return;
        var K = Y.a.Cf(r.x, r.y)
          , J = D.eF.ff(K, 4 / Y.a.k, Y.dO, Y.N4);
        J.pop();
        if (J.length != 0) {
            this.nw = K;
            this.qU = J;
            this.Ut(Y);
            return
        }
        var t = Y.dO
          , C = D.QW.ja(t, K);
        if (C == -1)
            Y.N4 = [];
        else {
            var c = Y.N4.indexOf(C);
            if (E.i(m.Ms)) {
                if (c == -1)
                    Y.N4.push(C);
                else
                    Y.N4.splice(c, 1)
            } else {
                Y.N4.sort(function(v, W) {
                    return v - W
                });
                if (c == -1)
                    Y.N4 = [C];
                this.nw = K;
                this.Ut(Y);
                this.eD = D.QW.Hh(t, Y.N4);
                this.dr = [];
                for (var x = 0; x < Y.N4.length; x++)
                    this.dr.push(D.QW._1(t, Y.N4[x]));
                if (E.i(m.yx)) {
                    var M = t.slice(0)
                      , a = Y.N4
                      , Q = [];
                    for (var x = 0; x < a.length; x++) {
                        var C = a[x]
                          , A = M[C]
                          , p = t.indexOf(A);
                        Q.push(p);
                        t.splice(p, 0, JSON.parse(JSON.stringify(A)))
                    }
                    Y.N4 = Q
                }
            }
        }
        Y.eR = !0
    }
    ;
    D.eF.prototype.NZ = function(Y, R, V, E, r) {
        var K = Y.a.Cf(r.x, r.y);
        if (this.nw == null) {
            var J = D.eF.ff(K, 4 / Y.a.k, Y.dO, Y.N4)
              , t = J.pop()
              , C = J.length == 0 ? "default" : ["ew", "nwse", "ns", "nesw"][t] + "-resize"
              , c = new I(O.E.z,!0);
            c.data = {
                e: O.U.u$,
                Cz: C
            };
            R.f(c);
            return
        }
        if (!this.Eg && K.yU(this.nw))
            return;
        this.Eg = !0;
        var M = Y.dO
          , J = this.qU;
        if (J) {
            K = D.RT.wW(Y, K, V, [!0, null, !1]);
            var a = Math.round(K.x)
              , Q = Math.round(K.y);
            for (var x = 0; x < J.length; x += 2) {
                var A = D.QW._1(M, J[x])
                  , p = J[x + 1];
                A[p] = (p & 1) == 0 ? a : Q;
                D.QW.MV(A);
                D.QW.aB(M, J[x], A)
            }
        } else {
            var v = K.O2(this.nw)
              , W = this.eD.slice(0);
            D.QW.gk(W, v);
            var n = new gE(W[0],W[1],W[2] - W[0],W[3] - W[1])
              , $ = D.RT.CR(Y, n, V, [!0, null, !1], !0);
            D.RT.cF(Y, n, $);
            v.x += $[0];
            v.y += $[1];
            for (var x = 0; x < Y.N4.length; x++)
                D.QW.aB(M, Y.N4[x], this.dr[x]);
            D.QW.I3(Y, v)
        }
        Y.eR = !0
    }
    ;
    D.eF.prototype.Eb = function(Y, R, V, E, r) {
        if (this.nw == null)
            return;
        this.h0(Y);
        Y.S.VE = null;
        Y.eR = !0;
        this.nw = null;
        this.qU = null;
        this.dr = null;
        this.Eg = !1
    }
    ;
    D.eF.ff = function(Y, R, V, E) {
        var r = Y.x
          , K = Y.y
          , J = []
          , t = -1
          , C = [];
        for (var x = 0; x < E.length; x++) {
            var c = E[x]
              , M = D.QW._1(V, c)
              , a = M[0]
              , Q = M[1]
              , A = M[2]
              , p = M[3];
            if (r < a - R || A + R < r || K < Q - R || p + R < K)
                continue;
            var v = [r < a + R, K < Q + R, A - R < r, p - R < K]
              , W = -1;
            for (var n = 0; n < 4; n++) {
                if (v[n] && v[n + 1 & 3])
                    W = 1 + 2 * (n & 1);
                if (v[n])
                    J.push(c, n)
            }
            if (W == -1) {
                if (v[0] || v[2])
                    W = 0;
                if (v[1] || v[3])
                    W = 2
            }
            if (W != -1) {
                t = W;
                C.push(c)
            }
        }
        var $ = J.length;
        for (var x = 0; x < $; x += 2) {
            var c = J[x]
              , G = J[x + 1]
              , o = D.QW._1(V, c)[G];
            for (var n = 0; n < E.length; n++) {
                var B = E[n];
                if (C.indexOf(B) != -1)
                    continue;
                var M = D.QW._1(V, B);
                if (M[G & 1] == o)
                    J.push(B, G & 1);
                if (M[2 + (G & 1)] == o)
                    J.push(B, 2 + (G & 1))
            }
        }
        J.push(t);
        return J
    }
    ;
    D.$V = function() {
        D.Ls.call(this, [10, 44], D.adH, "tools/oselect");
        this._z = "crosshair";
        this.a1s = 0
    }
    ;
    D.$V.prototype = new D.Ls;
    D.$V.prototype.BB = function(Y, R, V, E) {
        if (Math.random() < 1 / (1 + this.a1s)) {
            alert("The cross should be fully inside the object.", 3500);
            this.a1s++
        }
    }
    ;
    D.$V.prototype.Wz = function(Y, R, V, E) {
        D.Gb.MS(Y, D.Ls.FP, this.zk);
        if (!E.tc || !this.TZ)
            return;
        var r = this.Tf(Y, V, !1)
          , K = r.d
          , J = r.b
          , t = r.x
          , C = r.y
          , c = r.x + K
          , M = r.y + J
          , a = t + K / 2
          , Q = C + J / 2
          , A = D.$V.nh;
        Y.S.ZW = {
            P: [t, C, c, C, c, M, t, M, a - K * A, Q, a + K * A, Q, a, Q - J * A, a, Q + J * A],
            R: "M L L L Z M L M L".split(" ")
        };
        Y.eR = !0
    }
    ;
    D.$V.nh = .12;
    D.$V.prototype.$k = function(Y, R, V, E) {
        Y.S.ZW = null;
        Y.eR = !0;
        this.finish(Y, R, V, E)
    }
    ;
    D.$V.prototype.getSelection = function(Y, R, V, E) {
        if (this.Qn.yU(this.eL) || !this.TZ)
            return null;
        var r = this.Tf(Y, V, !1)
          , K = Y.t[Y.C[0]];
        if (r.uD() || !r.Wo(K.rect))
            return null;
        return D.Ls.IA("ObSl", r)
    }
    ;
    D.Gb = function() {
        D.OJ.call(this, [10, 37], D.oE, "tools/qselect");
        this.vT = "qselect"
    }
    ;
    D.Gb.prototype = new D.OJ;
    D.Gb.prototype.K_ = function(Y, R, V, E, r) {
        this.Fx(Y, V, E, r, 1);
        if (this.WY == null)
            return;
        this.MZ(Y)
    }
    ;
    D.Gb.prototype.NZ = function(Y, R, V, E, r) {
        this.Z1(Y, R, V);
        D.Gb.MS(Y, D.Ls.FP, R);
        if (this.MD)
            this.aZ(Y, V, r);
        if (this.WY == null)
            return;
        if (!r.tc)
            return;
        var K = this.il(Y, V, E, r);
        if (K != 1)
            this.MZ(Y)
    }
    ;
    D.Gb.MS = function(Y, R, V) {
        if (Y && R.key != D.Gb.U1(Y)) {
            R.key = D.Gb.U1(Y);
            var E = Y.t[Y.C[0]].rect.X()
              , K = "Image Analysis ...";
            if (E == 0)
                return;
            var r = E > 1e6
              , J = new I(O.E.z,!0);
            J.data = {
                e: O.U.vA,
                MO: K
            };
            if (r)
                V.f(J);
            setTimeout(function() {
                var t = D.Gb.ku(Y);
                for (var C in t)
                    R[C] = t[C];
                var J = new I(O.E.z,!0);
                J.data = {
                    e: O.U.qC,
                    MO: K
                };
                if (r)
                    V.f(J)
            }, 30)
        }
    }
    ;
    D.Gb.U1 = function(Y) {
        var R = Y.C[0]
          , V = Y.t[R]
          , E = V.rect
          , r = E.d
          , K = E.b
          , J = r * K
          , t = V.buffer;
        return [R, E.x, E.y, r, K, t[0], t[1], t[2], t[3]].join(",")
    }
    ;
    D.Gb.ku = function(Y) {
        var R = Y.C[0]
          , V = Y.t[R]
          , E = V.rect
          , r = E.d
          , K = E.b
          , J = r * K
          , t = V.buffer
          , C = Date.now()
          , c = w.T(J);
        c.fill(128);
        var M = w.qE.NY(t, r, K);
        console.log(Date.now() - C);
        var a = {
            key: D.Gb.U1(Y),
            zB: t,
            rect: E.clone(),
            OO: r,
            ak: K,
            fq: 12,
            acl: !1,
            Ot: c,
            Dn: M,
            v: w.T(J),
            wM: null,
            BK: null,
            Ok: null
        };
        D.Gb.kM(a);
        return a
    }
    ;
    D.Gb.kM = function(Y, R) {
        var V = Y.OO
          , E = Y.ak
          , r = 0
          , K = 0
          , J = Date.now()
          , t = Y.wM != null && w.qE.a9r(Y.Dn.WI, Y.wM.WI, Y.wM.i1, Y.Ot);
        r = Date.now() - J;
        J = Date.now();
        if (!t && !Y.acl) {
            Y.wM = w.qE.UG(Y.Dn, V, E, Y.Ot, Y.fq);
            if (!w.qE.a9r(Y.Dn.WI, Y.wM.WI, Y.wM.i1, Y.Ot)) {
                Y.acl = !0;
                console.log("conflict")
            }
            Y.BK = w.qE.agb(Y.zB, V, E, Y.wM.WI, Y.wM.i1);
            Y.Ok = [Y.BK[0].slice(0), []];
            K = Date.now() - J;
            J = Date.now()
        }
        var J = Date.now();
        if (R) {
            Y.Ok[0].set(Y.BK[0]);
            var C = Y.BK[1]
              , c = Y.Ok[1];
            for (var M = 0; M < C.length; M++)
                c[M] = C[M].slice(0);
            w.qE.a7a(Y.wM.WI, V, E, Y.wM.i1, Y.Ot, Y.v, Y.Ok)
        }
    }
    ;