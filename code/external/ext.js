var Typr = function() {
    var m = {};
    m.parse = function(X) {
        var R = function(M, E, Y, p) {
            var U = m.B
              , H = m.T
              , e = {
                cmap: H.L,
                head: H.head,
                hhea: H.aa,
                maxp: H.aM,
                hmtx: H.aD,
                name: H.name,
                "OS/2": H.r,
                post: H.ac,
                loca: H.b3,
                kern: H.Q,
                glyf: H.f,
                "CFF ": H._,
                "SVG ": H.aA,
                COLR: H.a1,
                CPAL: H.as
            }
              , _ = {
                _data: M,
                _index: E,
                _offset: Y
            };
            for (var w in e) {
                var h = m.findTable(M, w, Y);
                if (h) {
                    var K = h[0]
                      , j = p[K];
                    if (j == null)
                        j = e[w].K(M, K, h[1], _);
                    _[w] = p[K] = j
                }
            }
            return _
        }
          , U = m.B
          , M = new Uint8Array(X)
          , p = {}
          , s = U.T(M, 0, 4);
        if (s == "ttcf") {
            var Y = 4
              , L = U.$(M, Y);
            Y += 2;
            var z = U.$(M, Y);
            Y += 2;
            var I = U.w(M, Y);
            Y += 4;
            var r = [];
            for (var B = 0; B < I; B++) {
                var l = U.w(M, Y);
                Y += 4;
                r.push(R(M, B, l, p))
            }
            return r
        } else
            return [R(M, 0, 0, p)]
    }
    ;
    m.findTable = function(X, R, U) {
        var M = m.B
          , p = M.$(X, U + 4)
          , s = U + 12;
        for (var Y = 0; Y < p; Y++) {
            var z = M.T(X, s, 4)
              , I = M.w(X, s + 4)
              , r = M.w(X, s + 8)
              , B = M.w(X, s + 12);
            if (z == R)
                return [r, B];
            s += 16
        }
        return null
    }
    ;
    m.T = {};
    m.B = {
        M: function(X, R) {
            return (X[R] << 8 | X[R + 1]) + (X[R + 2] << 8 | X[R + 3]) / (256 * 256 + 4)
        },
        B: function(X, R) {
            var U = m.B.O(X, R);
            return U / 16384
        },
        d: function(X, R) {
            var U = m.B.b.G;
            U[0] = X[R + 3];
            U[1] = X[R + 2];
            U[2] = X[R + 1];
            U[3] = X[R];
            return m.B.b.at[0]
        },
        R: function(X, R) {
            var U = m.B.b.G;
            U[0] = X[R];
            return m.B.b.aO[0]
        },
        O: function(X, R) {
            var U = m.B.b.G;
            U[1] = X[R];
            U[0] = X[R + 1];
            return m.B.b.ag[0]
        },
        $: function(X, R) {
            return X[R] << 8 | X[R + 1]
        },
        ay: function(X, R, U) {
            X[R] = U >> 8 & 255;
            X[R + 1] = U & 255
        },
        ae: function(X, R, U) {
            var M = [];
            for (var p = 0; p < U; p++) {
                var s = m.B.$(X, R + p * 2);
                M.push(s)
            }
            return M
        },
        w: function(X, R) {
            var U = m.B.b.G;
            U[3] = X[R];
            U[2] = X[R + 1];
            U[1] = X[R + 2];
            U[0] = X[R + 3];
            return m.B.b.au[0]
        },
        ak: function(X, R, U) {
            X[R] = U >> 24 & 255;
            X[R + 1] = U >> 16 & 255;
            X[R + 2] = U >> 8 & 255;
            X[R + 3] = U >> 0 & 255
        },
        W: function(X, R) {
            return m.B.w(X, R) * (4294967295 + 1) + m.B.w(X, R + 4)
        },
        T: function(X, R, U) {
            var M = "";
            for (var p = 0; p < U; p++)
                M += String.fromCharCode(X[R + p]);
            return M
        },
        b0: function(X, R, U) {
            for (var M = 0; M < U.length; M++)
                X[R + M] = U.charCodeAt(M)
        },
        e: function(X, R, U) {
            var M = "";
            for (var p = 0; p < U; p++) {
                var s = X[R++] << 8 | X[R++];
                M += String.fromCharCode(s)
            }
            return M
        },
        a7: window.TextDecoder ? new window.TextDecoder : null,
        aJ: function(X, R, U) {
            var M = m.B.a7;
            if (M && R == 0 && U == X.length)
                return M.decode(X);
            return m.B.T(X, R, U)
        },
        o: function(X, R, U) {
            var M = [];
            for (var p = 0; p < U; p++)
                M.push(X[R + p]);
            return M
        },
        aj: function(X, R, U) {
            var M = [];
            for (var p = 0; p < U; p++)
                M.push(String.fromCharCode(X[R + p]));
            return M
        },
        b: function() {
            var X = new ArrayBuffer(8);
            return {
                b4: X,
                aO: new Int8Array(X),
                G: new Uint8Array(X),
                ag: new Int16Array(X),
                ao: new Uint16Array(X),
                at: new Int32Array(X),
                au: new Uint32Array(X)
            }
        }()
    };
    m.T._ = {
        K: function(X, R, U) {
            var M = m.B
              , p = m.T._;
            X = new Uint8Array(X.buffer,R,U);
            R = 0;
            var s = X[R];
            R++;
            var Y = X[R];
            R++;
            var L = X[R];
            R++;
            var z = X[R];
            R++;
            var I = [];
            R = p.V(X, R, I);
            var r = [];
            for (var B = 0; B < I.length - 1; B++)
                r.push(M.T(X, R + I[B], I[B + 1] - I[B]));
            R += I[I.length - 1];
            var l = [];
            R = p.V(X, R, l);
            var E = [];
            for (var B = 0; B < l.length - 1; B++)
                E.push(p.N(X, R + l[B], R + l[B + 1]));
            R += l[l.length - 1];
            var H = E[0]
              , e = [];
            R = p.V(X, R, e);
            var _ = [];
            for (var B = 0; B < e.length - 1; B++)
                _.push(M.T(X, R + e[B], e[B + 1] - e[B]));
            R += e[e.length - 1];
            p.H(X, R, H);
            if (H.CharStrings)
                H.CharStrings = p.o(X, H.CharStrings);
            if (H.ROS) {
                R = H.FDArray;
                var w = [];
                R = p.V(X, R, w);
                H.FDArray = [];
                for (var B = 0; B < w.length - 1; B++) {
                    var $ = p.N(X, R + w[B], R + w[B + 1]);
                    p.Z(X, $, _);
                    H.FDArray.push($)
                }
                R += w[w.length - 1];
                R = H.FDSelect;
                H.FDSelect = [];
                var h = X[R];
                R++;
                if (h == 3) {
                    var K = M.$(X, R);
                    R += 2;
                    for (var B = 0; B < K + 1; B++) {
                        H.FDSelect.push(M.$(X, R), X[R + 2]);
                        R += 3
                    }
                } else
                    throw h
            }
            if (H.charset)
                H.charset = p.aC(X, H.charset, H.CharStrings.length);
            p.Z(X, H, _);
            return H
        },
        Z: function(X, R, U) {
            var M = m.T._, p;
            if (R.Private) {
                p = R.Private[1];
                R.Private = M.N(X, p, p + R.Private[0]);
                if (R.Private.Subrs)
                    M.H(X, p + R.Private.Subrs, R.Private)
            }
            for (var s in R)
                if ("FamilyName FontName FullName Notice version Copyright".split(" ").indexOf(s) != -1)
                    R[s] = U[R[s] - 426 + 35]
        },
        H: function(X, R, U) {
            U.Subrs = m.T._.o(X, R);
            var M, p = U.Subrs.length + 1;
            if (!1)
                M = 0;
            else if (p < 1240)
                M = 107;
            else if (p < 33900)
                M = 1131;
            else
                M = 32768;
            U.Bias = M
        },
        o: function(X, R) {
            var U = m.B
              , M = [];
            R = m.T._.V(X, R, M);
            var p = []
              , s = M.length - 1
              , Y = X.byteOffset + R;
            for (var L = 0; L < s; L++) {
                var z = M[L];
                p.push(new Uint8Array(X.buffer,Y + z,M[L + 1] - z))
            }
            return p
        },
        aH: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0],
        aW: function(X, R) {
            for (var U = 0; U < X.charset.length; U++)
                if (X.charset[U] == R)
                    return U;
            return -1
        },
        q: function(X, R) {
            if (R < 0 || R > 255)
                return -1;
            return m.T._.aW(X, m.T._.aH[R])
        },
        aC: function(X, R, U) {
            var M = m.B
              , p = [".notdef"]
              , s = X[R];
            R++;
            if (s == 0) {
                for (var Y = 0; Y < U; Y++) {
                    var z = M.$(X, R);
                    R += 2;
                    p.push(z)
                }
            } else if (s == 1 || s == 2) {
                while (p.length < U) {
                    var z = M.$(X, R)
                      , I = 0;
                    R += 2;
                    if (s == 1) {
                        I = X[R];
                        R++
                    } else {
                        I = M.$(X, R);
                        R += 2
                    }
                    for (var Y = 0; Y <= I; Y++) {
                        p.push(z);
                        z++
                    }
                }
            } else
                throw "error: format: " + s;
            return p
        },
        V: function(X, R, U) {
            var M = m.B
              , p = M.$(X, R) + 1;
            R += 2;
            var s = X[R];
            R++;
            if (s == 1)
                for (var Y = 0; Y < p; Y++)
                    U.push(X[R + Y]);
            else if (s == 2)
                for (var Y = 0; Y < p; Y++)
                    U.push(M.$(X, R + Y * 2));
            else if (s == 3)
                for (var Y = 0; Y < p; Y++)
                    U.push(M.w(X, R + Y * 3 - 1) & 16777215);
            else if (s == 4)
                for (var Y = 0; Y < p; Y++)
                    U.push(M.w(X, R + Y * 4));
            else if (p != 1)
                throw "unsupported offset size: " + s + ", count: " + p;
            R += p * s;
            return R - 1
        },
        a3: function(X, R, U) {
            var M = m.B
              , p = X[R]
              , s = X[R + 1]
              , Y = X[R + 2]
              , L = X[R + 3]
              , z = X[R + 4]
              , I = 1
              , r = null
              , B = null;
            if (p <= 20) {
                r = p;
                I = 1
            }
            if (p == 12) {
                r = p * 100 + s;
                I = 2
            }
            if (21 <= p && p <= 27) {
                r = p;
                I = 1
            }
            if (p == 28) {
                B = M.O(X, R + 1);
                I = 3
            }
            if (29 <= p && p <= 31) {
                r = p;
                I = 1
            }
            if (32 <= p && p <= 246) {
                B = p - 139;
                I = 1
            }
            if (247 <= p && p <= 250) {
                B = (p - 247) * 256 + s + 108;
                I = 2
            }
            if (251 <= p && p <= 254) {
                B = -(p - 251) * 256 - s - 108;
                I = 2
            }
            if (p == 255) {
                B = M.d(X, R + 1) / 65535;
                I = 5
            }
            U.av = B != null ? B : "o" + r;
            U.size = I
        },
        ap: function(X, R, U) {
            var M = R + U
              , p = m.B
              , s = [];
            while (R < M) {
                var Y = X[R]
                  , L = X[R + 1]
                  , z = X[R + 2]
                  , I = X[R + 3]
                  , r = X[R + 4]
                  , B = 1
                  , l = null
                  , E = null;
                if (Y <= 20) {
                    l = Y;
                    B = 1
                }
                if (Y == 12) {
                    l = Y * 100 + L;
                    B = 2
                }
                if (Y == 19 || Y == 20) {
                    l = Y;
                    B = 2
                }
                if (21 <= Y && Y <= 27) {
                    l = Y;
                    B = 1
                }
                if (Y == 28) {
                    E = p.O(X, R + 1);
                    B = 3
                }
                if (29 <= Y && Y <= 31) {
                    l = Y;
                    B = 1
                }
                if (32 <= Y && Y <= 246) {
                    E = Y - 139;
                    B = 1
                }
                if (247 <= Y && Y <= 250) {
                    E = (Y - 247) * 256 + L + 108;
                    B = 2
                }
                if (251 <= Y && Y <= 254) {
                    E = -(Y - 251) * 256 - L - 108;
                    B = 2
                }
                if (Y == 255) {
                    E = p.d(X, R + 1) / 65535;
                    B = 5
                }
                s.push(E != null ? E : "o" + l);
                R += B
            }
            return s
        },
        N: function(X, R, U) {
            var M = m.B
              , p = {}
              , s = [];
            while (R < U) {
                var Y = X[R]
                  , L = X[R + 1]
                  , z = X[R + 2]
                  , I = X[R + 3]
                  , r = X[R + 4]
                  , B = 1
                  , l = null
                  , E = null;
                if (Y == 28) {
                    E = M.O(X, R + 1);
                    B = 3
                }
                if (Y == 29) {
                    E = M.d(X, R + 1);
                    B = 5
                }
                if (32 <= Y && Y <= 246) {
                    E = Y - 139;
                    B = 1
                }
                if (247 <= Y && Y <= 250) {
                    E = (Y - 247) * 256 + L + 108;
                    B = 2
                }
                if (251 <= Y && Y <= 254) {
                    E = -(Y - 251) * 256 - L - 108;
                    B = 2
                }
                if (Y == 255) {
                    E = M.d(X, R + 1) / 65535;
                    B = 5;
                    throw "unknown number"
                }
                if (Y == 30) {
                    var H = []
                      , $ = "";
                    B = 1;
                    while (!0) {
                        var e = X[R + B];
                        B++;
                        var _ = e >> 4
                          , w = e & 15;
                        if (_ != 15)
                            H.push(_);
                        if (w != 15)
                            H.push(w);
                        if (w == 15)
                            break
                    }
                    var h = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"];
                    for (var K = 0; K < H.length; K++)
                        $ += h[H[K]];
                    E = parseFloat($)
                }
                if (Y <= 21) {
                    var j = "version Notice FullName FamilyName Weight FontBBox BlueValues OtherBlues FamilyBlues FamilyOtherBlues StdHW StdVW escape UniqueID XUID charset Encoding CharStrings Private Subrs defaultWidthX nominalWidthX".split(" ");
                    l = j[Y];
                    B = 1;
                    if (Y == 12) {
                        var j = "Copyright isFixedPitch ItalicAngle UnderlinePosition UnderlineThickness PaintType CharstringType FontMatrix StrokeWidth BlueScale BlueShift BlueFuzz StemSnapH StemSnapV ForceBold   LanguageGroup ExpansionFactor initialRandomSeed SyntheticBase PostScript BaseFontName BaseFontBlend       ROS CIDFontVersion CIDFontRevision CIDFontType CIDCount UIDBase FDArray FDSelect FontName".split(" ");
                        l = j[L];
                        B = 2
                    }
                }
                if (l != null) {
                    p[l] = s.length == 1 ? s[0] : s;
                    s = []
                } else
                    s.push(E);
                R += B
            }
            return p
        }
    };
    m.T.L = {
        K: function(X, R, U) {
            var M = {
                h: [],
                u: {},
                a8: R
            };
            X = new Uint8Array(X.buffer,R,U);
            R = 0;
            var p = R
              , s = m.B
              , Y = s.$
              , L = m.T.L
              , z = Y(X, R);
            R += 2;
            var I = Y(X, R);
            R += 2;
            var r = [];
            for (var B = 0; B < I; B++) {
                var l = Y(X, R);
                R += 2;
                var E = Y(X, R);
                R += 2;
                var H = s.w(X, R);
                R += 4;
                var e = "p" + l + "e" + E
                  , _ = r.indexOf(H);
                if (_ == -1) {
                    _ = M.h.length;
                    var w = {};
                    r.push(H);
                    var $ = w.aF = Y(X, H);
                    if ($ == 0)
                        w = L.aK(X, H, w);
                    else if ($ == 4)
                        w = L.ab(X, H, w);
                    else if ($ == 6)
                        w = L.b7(X, H, w);
                    else if ($ == 12)
                        w = L.ax(X, H, w);
                    M.h.push(w)
                }
                if (M.u[e] != null)
                    throw "multiple tables for one platform+encoding";
                M.u[e] = _
            }
            return M
        },
        aK: function(X, R, U) {
            var M = m.B;
            R += 2;
            var p = M.$(X, R);
            R += 2;
            var s = M.$(X, R);
            R += 2;
            U.map = [];
            for (var Y = 0; Y < p - 6; Y++)
                U.map.push(X[R + Y]);
            return U
        },
        ab: function(X, R, U) {
            var M = m.B
              , p = M.$
              , s = M.ae
              , Y = R;
            R += 2;
            var L = p(X, R);
            R += 2;
            var z = p(X, R);
            R += 2;
            var I = p(X, R);
            R += 2;
            var r = I >>> 1;
            U.a4 = p(X, R);
            R += 2;
            U.a6 = p(X, R);
            R += 2;
            U.az = p(X, R);
            R += 2;
            U.b6 = s(X, R, r);
            R += r * 2;
            R += 2;
            U.aw = s(X, R, r);
            R += r * 2;
            U.aq = [];
            for (var B = 0; B < r; B++) {
                U.aq.push(M.O(X, R));
                R += 2
            }
            U.U = s(X, R, r);
            R += r * 2;
            U.s = s(X, R, Y + L - R >>> 1);
            return U
        },
        b7: function(X, R, U) {
            var M = m.B
              , p = R;
            R += 2;
            var s = M.$(X, R);
            R += 2;
            var Y = M.$(X, R);
            R += 2;
            U.a0 = M.$(X, R);
            R += 2;
            var L = M.$(X, R);
            R += 2;
            U.s = [];
            for (var z = 0; z < L; z++) {
                U.s.push(M.$(X, R));
                R += 2
            }
            return U
        },
        ax: function(X, R, U) {
            var M = m.B
              , p = M.w
              , s = R;
            R += 4;
            var Y = p(X, R);
            R += 4;
            var L = p(X, R);
            R += 4;
            var z = p(X, R) * 3;
            R += 4;
            var I = U.ad = new Uint32Array(z);
            for (var r = 0; r < z; r += 3) {
                I[r] = p(X, R + (r << 2));
                I[r + 1] = p(X, R + (r << 2) + 4);
                I[r + 2] = p(X, R + (r << 2) + 8)
            }
            return U
        }
    };
    m.T.f = {
        K: function(X, R, U, M) {
            var p = []
              , s = M.maxp.numGlyphs;
            for (var Y = 0; Y < s; Y++)
                p.push(null);
            return p
        },
        aE: function(X, R) {
            var U = m.B
              , M = X._data
              , p = X.loca;
            if (p[R] == p[R + 1])
                return null;
            var Y = m.findTable(M, "glyf", X._offset)[0] + p[R]
              , L = {};
            L.C = U.O(M, Y);
            Y += 2;
            L.a2 = U.O(M, Y);
            Y += 2;
            L.aY = U.O(M, Y);
            Y += 2;
            L.aU = U.O(M, Y);
            Y += 2;
            L.am = U.O(M, Y);
            Y += 2;
            if (L.a2 >= L.aU || L.aY >= L.am)
                return null;
            if (L.C > 0) {
                L.X = [];
                for (var z = 0; z < L.C; z++) {
                    L.X.push(U.$(M, Y));
                    Y += 2
                }
                var I = U.$(M, Y)
                  , _ = 0
                  , w = 0;
                Y += 2;
                if (M.length - Y < I)
                    return null;
                L.af = U.o(M, Y, I);
                Y += I;
                var r = L.X[L.C - 1] + 1;
                L.A = [];
                for (var z = 0; z < r; z++) {
                    var B = M[Y];
                    Y++;
                    L.A.push(B);
                    if ((B & 8) != 0) {
                        var l = M[Y];
                        Y++;
                        for (var E = 0; E < l; E++) {
                            L.A.push(B);
                            z++
                        }
                    }
                }
                L.z = [];
                for (var z = 0; z < r; z++) {
                    var H = (L.A[z] & 2) != 0
                      , e = (L.A[z] & 16) != 0;
                    if (H) {
                        L.z.push(e ? M[Y] : -M[Y]);
                        Y++
                    } else {
                        if (e)
                            L.z.push(0);
                        else {
                            L.z.push(U.O(M, Y));
                            Y += 2
                        }
                    }
                }
                L.l = [];
                for (var z = 0; z < r; z++) {
                    var H = (L.A[z] & 4) != 0
                      , e = (L.A[z] & 32) != 0;
                    if (H) {
                        L.l.push(e ? M[Y] : -M[Y]);
                        Y++
                    } else {
                        if (e)
                            L.l.push(0);
                        else {
                            L.l.push(U.O(M, Y));
                            Y += 2
                        }
                    }
                }
                for (var z = 0; z < r; z++) {
                    _ += L.z[z];
                    w += L.l[z];
                    L.z[z] = _;
                    L.l[z] = w
                }
            } else {
                var $ = 1 << 0, h = 1 << 1, K = 1 << 2, j = 1 << 3, f = 1 << 4, V = 1 << 5, x = 1 << 6, F = 1 << 7, N = 1 << 8, J = 1 << 9, O = 1 << 10, T = 1 << 11, o = 1 << 12, n;
                L.D = [];
                do {
                    n = U.$(M, Y);
                    Y += 2;
                    var y = {
                        p: {
                            k: 1,
                            an: 0,
                            a_: 0,
                            c: 1,
                            ah: 0,
                            aV: 0
                        },
                        ar: -1,
                        aT: -1
                    };
                    L.D.push(y);
                    y.aI = U.$(M, Y);
                    Y += 2;
                    if (n & $) {
                        var k = U.O(M, Y);
                        Y += 2;
                        var S = U.O(M, Y);
                        Y += 2
                    } else {
                        var k = U.R(M, Y);
                        Y++;
                        var S = U.R(M, Y);
                        Y++
                    }
                    if (n & h) {
                        y.p.ah = k;
                        y.p.aV = S
                    } else {
                        y.ar = k;
                        y.aT = S
                    }
                    if (n & j) {
                        y.p.k = y.p.c = U.B(M, Y);
                        Y += 2
                    } else if (n & x) {
                        y.p.k = U.B(M, Y);
                        Y += 2;
                        y.p.c = U.B(M, Y);
                        Y += 2
                    } else if (n & F) {
                        y.p.k = U.B(M, Y);
                        Y += 2;
                        y.p.an = U.B(M, Y);
                        Y += 2;
                        y.p.a_ = U.B(M, Y);
                        Y += 2;
                        y.p.c = U.B(M, Y);
                        Y += 2
                    }
                } while (n & V);if (n & N) {
                    var as = U.$(M, Y);
                    Y += 2;
                    L.aL = [];
                    for (var z = 0; z < as; z++) {
                        L.aL.push(M[Y]);
                        Y++
                    }
                }
            }
            return L
        }
    };
    m.T.head = {
        K: function(X, R, U) {
            var M = m.B
              , p = {}
              , s = M.M(X, R);
            R += 4;
            p.fontRevision = M.M(X, R);
            R += 4;
            var Y = M.w(X, R);
            R += 4;
            var L = M.w(X, R);
            R += 4;
            p.flags = M.$(X, R);
            R += 2;
            p.unitsPerEm = M.$(X, R);
            R += 2;
            p.created = M.W(X, R);
            R += 8;
            p.modified = M.W(X, R);
            R += 8;
            p.xMin = M.O(X, R);
            R += 2;
            p.yMin = M.O(X, R);
            R += 2;
            p.xMax = M.O(X, R);
            R += 2;
            p.yMax = M.O(X, R);
            R += 2;
            p.macStyle = M.$(X, R);
            R += 2;
            p.lowestRecPPEM = M.$(X, R);
            R += 2;
            p.fontDirectionHint = M.O(X, R);
            R += 2;
            p.indexToLocFormat = M.O(X, R);
            R += 2;
            p.glyphDataFormat = M.O(X, R);
            R += 2;
            return p
        }
    };
    m.T.aa = {
        K: function(X, R, U) {
            var M = m.B
              , p = {}
              , s = M.M(X, R);
            R += 4;
            var Y = "ascender descender lineGap advanceWidthMax minLeftSideBearing minRightSideBearing xMaxExtent caretSlopeRise caretSlopeRun caretOffset res0 res1 res2 res3 metricDataFormat numberOfHMetrics".split(" ");
            for (var L = 0; L < Y.length; L++) {
                var z = Y[L]
                  , I = z == "advanceWidthMax" || z == "numberOfHMetrics" ? M.$ : M.O;
                p[z] = I(X, R + L * 2)
            }
            return p
        }
    };
    m.T.aD = {
        K: function(X, R, U, M) {
            var p = m.B
              , s = []
              , Y = []
              , L = M.maxp.numGlyphs
              , z = M.hhea.numberOfHMetrics
              , I = 0
              , r = 0
              , B = 0;
            while (B < z) {
                I = p.$(X, R + (B << 2));
                r = p.O(X, R + (B << 2) + 2);
                s.push(I);
                Y.push(r);
                B++
            }
            while (B < L) {
                s.push(I);
                Y.push(r);
                B++
            }
            return {
                aX: s,
                a5: Y
            }
        }
    };
    m.T.Q = {
        K: function(X, R, U, M) {
            var p = m.B
              , s = m.T.Q
              , Y = p.$(X, R);
            if (Y == 1)
                return s.aR(X, R, U, M);
            var L = p.$(X, R + 2);
            R += 4;
            var z = {
                v: [],
                I: []
            };
            for (var I = 0; I < L; I++) {
                R += 2;
                var U = p.$(X, R);
                R += 2;
                var r = p.$(X, R);
                R += 2;
                var B = r >>> 8;
                B &= 15;
                if (B == 0)
                    R = s.j(X, R, z)
            }
            return z
        },
        aR: function(X, R, U, M) {
            var p = m.B
              , s = m.T.Q
              , Y = p.M(X, R)
              , L = p.w(X, R + 4);
            R += 8;
            var z = {
                v: [],
                I: []
            };
            for (var I = 0; I < L; I++) {
                var U = p.w(X, R);
                R += 4;
                var r = p.$(X, R);
                R += 2;
                var B = p.$(X, R);
                R += 2;
                var l = r & 255;
                if (l == 0)
                    R = s.j(X, R, z)
            }
            return z
        },
        j: function(X, R, U) {
            var M = m.B
              , p = M.$
              , s = -1
              , Y = p(X, R)
              , L = p(X, R + 2)
              , z = p(X, R + 4)
              , I = p(X, R + 6);
            R += 8;
            for (var r = 0; r < Y; r++) {
                var B = p(X, R);
                R += 2;
                var l = p(X, R);
                R += 2;
                var E = M.O(X, R);
                R += 2;
                if (B != s) {
                    U.v.push(B);
                    U.I.push({
                        aG: [],
                        al: []
                    })
                }
                var H = U.I[U.I.length - 1];
                H.aG.push(l);
                H.al.push(E);
                s = B
            }
            return R
        }
    };
    m.T.b3 = {
        K: function(X, R, U, M) {
            var p = m.B
              , s = []
              , Y = M.head.indexToLocFormat
              , L = M.maxp.numGlyphs + 1;
            if (Y == 0)
                for (var z = 0; z < L; z++)
                    s.push(p.$(X, R + (z << 1)) << 1);
            if (Y == 1)
                for (var z = 0; z < L; z++)
                    s.push(p.w(X, R + (z << 2)));
            return s
        }
    };
    m.T.aM = {
        K: function(X, R, U) {
            var M = m.B
              , p = M.$
              , s = {}
              , Y = M.w(X, R);
            R += 4;
            s.numGlyphs = p(X, R);
            R += 2;
            return s
        }
    };
    m.T.name = {
        K: function(X, R, U) {
            var M = m.B, p = {}, s = M.$(X, R), j = "postScriptName", q;
            R += 2;
            var Y = M.$(X, R);
            R += 2;
            var L = M.$(X, R);
            R += 2;
            var z = "copyright fontFamily fontSubfamily ID fullName version postScriptName trademark manufacturer designer description urlVendor urlDesigner licence licenceURL --- typoFamilyName typoSubfamilyName compatibleFull sampleText postScriptCID wwsFamilyName wwsSubfamilyName lightPalette darkPalette".split(" ")
              , I = R
              , r = M.$;
            for (var B = 0; B < Y; B++) {
                var l = r(X, R), h;
                R += 2;
                var E = r(X, R);
                R += 2;
                var H = r(X, R);
                R += 2;
                var e = r(X, R);
                R += 2;
                var _ = r(X, R);
                R += 2;
                var w = r(X, R);
                R += 2;
                var $ = I + Y * 12 + w;
                if (!1) {} else if (l == 0)
                    h = M.e(X, $, _ / 2);
                else if (l == 3 && E == 0)
                    h = M.e(X, $, _ / 2);
                else if (E == 0)
                    h = M.T(X, $, _);
                else if (E == 1)
                    h = M.e(X, $, _ / 2);
                else if (E == 3)
                    h = M.e(X, $, _ / 2);
                else if (E == 4)
                    h = M.e(X, $, _ / 2);
                else if (E == 10)
                    h = M.e(X, $, _ / 2);
                else if (l == 1) {
                    h = M.T(X, $, _);
                    console.log("reading unknown MAC encoding " + E + " as ASCII")
                } else {
                    console.log("unknown encoding " + E + ", platformID: " + l);
                    h = M.T(X, $, _)
                }
                var K = "p" + l + "," + H.toString(16);
                if (p[K] == null)
                    p[K] = {};
                p[K][z[e]] = h;
                p[K]._lang = H
            }
            for (var Z in p)
                if (p[Z][j] != null && p[Z]._lang == 1033)
                    return p[Z];
            for (var Z in p)
                if (p[Z][j] != null && p[Z]._lang == 0)
                    return p[Z];
            for (var Z in p)
                if (p[Z][j] != null && p[Z]._lang == 3084)
                    return p[Z];
            for (var Z in p)
                if (p[Z][j] != null)
                    return p[Z];
            for (var Z in p) {
                q = p[Z];
                break
            }
            console.log("returning name table with languageID " + q.aS);
            if (q[j] == null && q.ID != null)
                q[j] = q.ID;
            return q
        }
    };
    m.T.r = {
        K: function(X, R, U) {
            var M = m.B
              , p = M.$(X, R);
            R += 2;
            var s = m.T.r
              , Y = {};
            if (p == 0)
                s.m(X, R, Y);
            else if (p == 1)
                s.Y(X, R, Y);
            else if (p == 2 || p == 3 || p == 4)
                s.aN(X, R, Y);
            else if (p == 5)
                s.aP(X, R, Y);
            else
                throw "unknown OS/2 table version: " + p;
            return Y
        },
        m: function(X, R, U) {
            var M = m.B;
            U.xAvgCharWidth = M.O(X, R);
            R += 2;
            U.usWeightClass = M.$(X, R);
            R += 2;
            U.usWidthClass = M.$(X, R);
            R += 2;
            U.fsType = M.$(X, R);
            R += 2;
            U.ySubscriptXSize = M.O(X, R);
            R += 2;
            U.ySubscriptYSize = M.O(X, R);
            R += 2;
            U.ySubscriptXOffset = M.O(X, R);
            R += 2;
            U.ySubscriptYOffset = M.O(X, R);
            R += 2;
            U.ySuperscriptXSize = M.O(X, R);
            R += 2;
            U.ySuperscriptYSize = M.O(X, R);
            R += 2;
            U.ySuperscriptXOffset = M.O(X, R);
            R += 2;
            U.ySuperscriptYOffset = M.O(X, R);
            R += 2;
            U.yStrikeoutSize = M.O(X, R);
            R += 2;
            U.yStrikeoutPosition = M.O(X, R);
            R += 2;
            U.sFamilyClass = M.O(X, R);
            R += 2;
            U.panose = M.o(X, R, 10);
            R += 10;
            U.ulUnicodeRange1 = M.w(X, R);
            R += 4;
            U.ulUnicodeRange2 = M.w(X, R);
            R += 4;
            U.ulUnicodeRange3 = M.w(X, R);
            R += 4;
            U.ulUnicodeRange4 = M.w(X, R);
            R += 4;
            U.achVendID = M.T(X, R, 4);
            R += 4;
            U.fsSelection = M.$(X, R);
            R += 2;
            U.usFirstCharIndex = M.$(X, R);
            R += 2;
            U.usLastCharIndex = M.$(X, R);
            R += 2;
            U.sTypoAscender = M.O(X, R);
            R += 2;
            U.sTypoDescender = M.O(X, R);
            R += 2;
            U.sTypoLineGap = M.O(X, R);
            R += 2;
            U.usWinAscent = M.$(X, R);
            R += 2;
            U.usWinDescent = M.$(X, R);
            R += 2;
            return R
        },
        Y: function(X, R, U) {
            var M = m.B;
            R = m.T.r.m(X, R, U);
            U.ulCodePageRange1 = M.w(X, R);
            R += 4;
            U.ulCodePageRange2 = M.w(X, R);
            R += 4;
            return R
        },
        aN: function(X, R, U) {
            var M = m.B
              , p = M.$;
            R = m.T.r.Y(X, R, U);
            U.sxHeight = M.O(X, R);
            R += 2;
            U.sCapHeight = M.O(X, R);
            R += 2;
            U.usDefault = p(X, R);
            R += 2;
            U.usBreak = p(X, R);
            R += 2;
            U.usMaxContext = p(X, R);
            R += 2;
            return R
        },
        aP: function(X, R, U) {
            var M = m.B.$;
            R = m.T.r.aN(X, R, U);
            U.usLowerOpticalPointSize = M(X, R);
            R += 2;
            U.usUpperOpticalPointSize = M(X, R);
            R += 2;
            return R
        }
    };
    m.T.ac = {
        K: function(X, R, U) {
            var M = m.B
              , p = {};
            p.version = M.M(X, R);
            R += 4;
            p.italicAngle = M.M(X, R);
            R += 4;
            p.underlinePosition = M.O(X, R);
            R += 2;
            p.underlineThickness = M.O(X, R);
            R += 2;
            return p
        }
    };
    m.T.aA = {
        K: function(X, R, U) {
            var M = m.B
              , p = {
                entries: []
            }
              , s = R
              , Y = M.$(X, R);
            R += 2;
            var L = M.w(X, R);
            R += 4;
            var z = M.w(X, R);
            R += 4;
            R = L + s;
            var I = M.$(X, R);
            R += 2;
            for (var r = 0; r < I; r++) {
                var B = M.$(X, R);
                R += 2;
                var l = M.$(X, R);
                R += 2;
                var E = M.w(X, R);
                R += 4;
                var H = M.w(X, R);
                R += 4;
                var e = new Uint8Array(X.buffer,s + E + L,H)
                  , _ = M.aJ(e, 0, e.length);
                for (var w = B; w <= l; w++) {
                    p.entries[w] = _
                }
            }
            return p
        }
    };
    m.T.a1 = {
        K: function(X, R, U) {
            var M = m.B
              , p = R;
            R += 2;
            var s = M.$(X, R);
            R += 2;
            var Y = M.w(X, R);
            R += 4;
            var L = M.w(X, R);
            R += 4;
            var z = M.$(X, R);
            R += 2;
            var I = {}
              , r = p + Y;
            for (var B = 0; B < s; B++) {
                I["g" + M.$(X, r)] = [M.$(X, r + 2), M.$(X, r + 4)];
                r += 6
            }
            var l = [];
            r = p + L;
            for (var B = 0; B < z; B++) {
                l.push(M.$(X, r), M.$(X, r + 2));
                r += 4
            }
            return [I, l]
        }
    };
    m.T.as = {
        K: function(X, R, U) {
            var M = m.B
              , p = R
              , s = M.$(X, R);
            R += 2;
            if (s == 0) {
                var Y = M.$(X, R);
                R += 2;
                var L = M.$(X, R);
                R += 2;
                var z = M.$(X, R);
                R += 2;
                var I = M.w(X, R);
                R += 4;
                return new Uint8Array(X.buffer,p + I,z * 4)
            } else
                throw s
        }
    };
    m.U = {
        shape: function(X, R, U) {
            var M = function(X, p, H, U) {
                var e = p[H]
                  , _ = p[H + 1]
                  , w = X.kern;
                if (w) {
                    var $ = w.v.indexOf(e);
                    if ($ != -1) {
                        var h = w.I[$].aG.indexOf(_);
                        if (h != -1)
                            return [0, 0, w.I[$].al[h], 0]
                    }
                }
                return [0, 0, 0, 0]
            }
              , p = []
              , I = 0
              , r = 0;
            for (var s = 0; s < R.length; s++) {
                var Y = R.codePointAt(s);
                if (Y > 65535)
                    s++;
                p.push(m.U.codeToGlyph(X, Y))
            }
            var z = [];
            for (var s = 0; s < p.length; s++) {
                var B = M(X, p, s, U)
                  , l = p[s]
                  , E = X.hmtx.aX[l] + B[2];
                z.push({
                    g: l,
                    cl: s,
                    dx: 0,
                    dy: 0,
                    ax: E,
                    ay: 0
                });
                I += E
            }
            return z
        },
        shapeToPath: function(X, R, U) {
            var M = {
                S: [],
                n: []
            }
              , p = 0
              , s = 0;
            for (var Y = 0; Y < R.length; Y++) {
                var z = R[Y]
                  , I = m.U.glyphToPath(X, z.g)
                  , r = I.crds;
                for (var B = 0; B < r.length; B += 2) {
                    M.n.push(r[B] + p + z.dx);
                    M.n.push(r[B + 1] + s + z.dy)
                }
                if (U)
                    M.S.push(U);
                for (var B = 0; B < I.cmds.length; B++)
                    M.S.push(I.cmds[B]);
                var l = M.S.length;
                if (U)
                    if (l != 0 && M.S[l - 1] != "X")
                        M.S.push("X");
                p += z.ax;
                s += z.ay
            }
            return {
                cmds: M.S,
                crds: M.n
            }
        },
        codeToGlyph: function(X, R) {
            var U = X.cmap
              , M = -1
              , p = "p3e10 p0e4 p3e1 p1e0 p0e3 p0e1".split(" ");
            for (var s = 0; s < p.length; s++)
                if (U.u[p[s]] != null) {
                    M = U.u[p[s]];
                    break
                }
            if (M == -1)
                throw "no familiar platform and encoding!";
            var Y = function(e, h, K) {
                var j = 0
                  , Z = Math.floor(e.length / h);
                while (j + 1 != Z) {
                    var q = j + (Z - j >>> 1);
                    if (e[q * h] <= K)
                        j = q;
                    else
                        Z = q
                }
                return j * h
            }
              , z = U.h[M]
              , I = z.aF
              , r = -1;
            if (I == 0) {
                if (R >= z.map.length)
                    r = 0;
                else
                    r = z.map[R]
            } else if (I == 4) {
                var B = -1
                  , l = z.b6;
                if (R > l[l.length - 1])
                    B = -1;
                else {
                    B = Y(l, 1, R);
                    if (l[B] < R)
                        B++
                }
                if (B == -1)
                    r = 0;
                else if (R < z.aw[B])
                    r = 0;
                else {
                    var E = 0;
                    if (z.U[B] != 0)
                        E = z.s[R - z.aw[B] + (z.U[B] >> 1) - (z.U.length - B)];
                    else
                        E = R + z.aq[B];
                    r = E & 65535
                }
            } else if (I == 6) {
                var H = R - z.a0
                  , e = z.s;
                if (H < 0 || H >= e.length)
                    r = 0;
                else
                    r = e[H]
            } else if (I == 12) {
                var _ = z.ad;
                if (R > _[_.length - 2])
                    r = 0;
                else {
                    var s = Y(_, 3, R);
                    if (_[s] <= R && R <= _[s + 1]) {
                        r = _[s + 2] + (R - _[s])
                    }
                    if (r == -1)
                        r = 0
                }
            } else
                throw "unknown cmap table format " + z.aF;
            var w = X["SVG "]
              , $ = X.loca;
            if (r != 0 && X["CFF "] == null && (w == null || w.entries[r] == null) && $[r] == $[r + 1] && [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8232, 8233, 8239, 12288, 6158, 8203, 8204, 8205, 8288, 65279].indexOf(R) == -1 && !(8192 <= R && R <= 8202))
                r = 0;
            return r
        },
        glyphToPath: function(X, R) {
            var U = {
                S: [],
                n: []
            }
              , M = X["SVG "]
              , p = X["CFF "]
              , s = X.COLR
              , Y = m.U;
            if (M && M.entries[R]) {
                var L = M.entries[R];
                if (L != null) {
                    if (typeof L == "string") {
                        L = Y.SVG.ai(L);
                        M.entries[R] = L
                    }
                    U = L
                }
            } else if (s && s[0]["g" + R]) {
                function z(j) {
                    var Z = j.toString(16);
                    return (Z.length == 1 ? "0" : "") + Z
                }
                var I = X.CPAL
                  , r = s[0]["g" + R];
                for (var B = 0; B < r[1]; B++) {
                    var l = r[0] + B
                      , E = s[1][2 * l]
                      , e = s[1][2 * l + 1] * 4
                      , _ = m.U.glyphToPath(X, E)
                      , w = "#" + z(I[e + 2]) + z(I[e + 1]) + z(I[e + 0]);
                    U.S.push(w);
                    U.S = U.S.concat(_.cmds);
                    U.n = U.n.concat(_.crds);
                    U.S.push("X")
                }
            } else if (p) {
                var $ = p.Private
                  , h = {
                    x: 0,
                    y: 0,
                    stack: [],
                    J: 0,
                    i: !1,
                    width: $ ? $.defaultWidthX : 0,
                    open: !1
                };
                if (p.ROS) {
                    var K = 0;
                    while (p.FDSelect[K + 2] <= R)
                        K += 2;
                    $ = p.FDArray[p.FDSelect[K + 1]].Private
                }
                Y._drawCFF(p.CharStrings[R], h, p, $, U)
            } else if (X.glyf) {
                Y._drawGlyf(R, X, U)
            }
            return {
                cmds: U.S,
                crds: U.n
            }
        },
        _drawGlyf: function(X, R, U) {
            var M = R.glyf[X];
            if (M == null)
                M = R.glyf[X] = m.T.f.aE(R, X);
            if (M != null) {
                if (M.C > -1)
                    m.U._simpleGlyph(M, U);
                else
                    m.U._compoGlyph(M, R, U)
            }
        },
        _simpleGlyph: function(X, R) {
            var U = m.U.P;
            for (var M = 0; M < X.C; M++) {
                var p = M == 0 ? 0 : X.X[M - 1] + 1
                  , s = X.X[M];
                for (var Y = p; Y <= s; Y++) {
                    var z = Y == p ? s : Y - 1
                      , I = Y == s ? p : Y + 1
                      , r = X.A[Y] & 1
                      , B = X.A[z] & 1
                      , l = X.A[I] & 1
                      , E = X.z[Y]
                      , e = X.l[Y];
                    if (Y == p) {
                        if (r) {
                            if (B)
                                U.g(R, X.z[z], X.l[z]);
                            else {
                                U.g(R, E, e);
                                continue
                            }
                        } else {
                            if (B)
                                U.g(R, X.z[z], X.l[z]);
                            else
                                U.g(R, Math.floor((X.z[z] + E) * .5), Math.floor((X.l[z] + e) * .5))
                        }
                    }
                    if (r) {
                        if (B)
                            U.P(R, E, e)
                    } else {
                        if (l)
                            U.a9(R, E, e, X.z[I], X.l[I]);
                        else
                            U.a9(R, E, e, Math.floor((E + X.z[I]) * .5), Math.floor((e + X.l[I]) * .5))
                    }
                }
                U.F(R)
            }
        },
        _compoGlyph: function(X, R, U) {
            for (var M = 0; M < X.D.length; M++) {
                var p = {
                    S: [],
                    n: []
                }
                  , s = X.D[M];
                m.U._drawGlyf(s.aI, R, p);
                var Y = s.p;
                for (var L = 0; L < p.n.length; L += 2) {
                    var I = p.n[L]
                      , r = p.n[L + 1];
                    U.n.push(I * Y.k + r * Y.an + Y.ah);
                    U.n.push(I * Y.a_ + r * Y.c + Y.aV)
                }
                for (var L = 0; L < p.S.length; L++)
                    U.S.push(p.S[L])
            }
        },
        pathToSVG: function(X, R) {
            var U = X.cmds
              , M = X.crds
              , s = 0;
            if (R == null)
                R = 5;
            var p = []
              , Y = {
                M: 2,
                L: 2,
                Q: 4,
                C: 6
            };
            for (var L = 0; L < U.length; L++) {
                var z = U[L]
                  , I = s + (Y[z] ? Y[z] : 0);
                p.push(z);
                while (s < I) {
                    var r = M[s++];
                    p.push(parseFloat(r.toFixed(R)) + (s == I ? "" : " "))
                }
            }
            return p.join("")
        },
        SVGToPath: function(X) {
            var R = {
                S: [],
                n: []
            };
            m.U.SVG.b1(X, R);
            return {
                cmds: R.S,
                crds: R.n
            }
        },
        pathToContext: function(X, R) {
            var U = 0
              , M = X.cmds
              , p = X.crds;
            for (var s = 0; s < M.length; s++) {
                var Y = M[s];
                if (Y == "M") {
                    R.moveTo(p[U], p[U + 1]);
                    U += 2
                } else if (Y == "L") {
                    R.lineTo(p[U], p[U + 1]);
                    U += 2
                } else if (Y == "C") {
                    R.bezierCurveTo(p[U], p[U + 1], p[U + 2], p[U + 3], p[U + 4], p[U + 5]);
                    U += 6
                } else if (Y == "Q") {
                    R.quadraticCurveTo(p[U], p[U + 1], p[U + 2], p[U + 3]);
                    U += 4
                } else if (Y.charAt(0) == "#") {
                    R.beginPath();
                    R.fillStyle = Y
                } else if (Y == "Z") {
                    R.closePath()
                } else if (Y == "X") {
                    R.fill()
                }
            }
        },
        P: {
            g: function(X, R, U) {
                X.S.push("M");
                X.n.push(R, U)
            },
            P: function(X, R, U) {
                X.S.push("L");
                X.n.push(R, U)
            },
            a: function(X, R, U, M, p, s, Y) {
                X.S.push("C");
                X.n.push(R, U, M, p, s, Y)
            },
            a9: function(X, R, U, M, p) {
                X.S.push("Q");
                X.n.push(R, U, M, p)
            },
            F: function(X) {
                X.S.push("Z")
            }
        },
        _drawCFF: function(X, R, U, M, p) {
            var s = R.stack
              , Y = R.J
              , L = R.i
              , z = R.width
              , I = R.open
              , r = 0
              , B = R.x
              , l = R.y
              , E = 0
              , e = 0
              , _ = 0
              , w = 0
              , $ = 0
              , h = 0
              , K = 0
              , j = 0
              , f = 0
              , V = 0
              , x = m.T._
              , F = m.U.P
              , N = M.nominalWidthX
              , J = {
                av: 0,
                size: 0
            };
            while (r < X.length) {
                x.a3(X, r, J);
                var O = J.av;
                r += J.size;
                if (!1) {} else if (O == "o1" || O == "o18") {
                    var T;
                    T = s.length % 2 !== 0;
                    if (T && !L) {
                        z = s.shift() + N
                    }
                    Y += s.length >> 1;
                    s.length = 0;
                    L = !0
                } else if (O == "o3" || O == "o23") {
                    var T;
                    T = s.length % 2 !== 0;
                    if (T && !L) {
                        z = s.shift() + N
                    }
                    Y += s.length >> 1;
                    s.length = 0;
                    L = !0
                } else if (O == "o4") {
                    if (s.length > 1 && !L) {
                        z = s.shift() + N;
                        L = !0
                    }
                    if (I)
                        F.F(p);
                    l += s.pop();
                    F.g(p, B, l);
                    I = !0
                } else if (O == "o5") {
                    while (s.length > 0) {
                        B += s.shift();
                        l += s.shift();
                        F.P(p, B, l)
                    }
                } else if (O == "o6" || O == "o7") {
                    var o = s.length
                      , n = O == "o6";
                    for (var y = 0; y < o; y++) {
                        var k = s.shift();
                        if (n)
                            B += k;
                        else
                            l += k;
                        n = !n;
                        F.P(p, B, l)
                    }
                } else if (O == "o8" || O == "o24") {
                    var o = s.length
                      , S = 0;
                    while (S + 6 <= o) {
                        E = B + s.shift();
                        e = l + s.shift();
                        _ = E + s.shift();
                        w = e + s.shift();
                        B = _ + s.shift();
                        l = w + s.shift();
                        F.a(p, E, e, _, w, B, l);
                        S += 6
                    }
                    if (O == "o24") {
                        B += s.shift();
                        l += s.shift();
                        F.P(p, B, l)
                    }
                } else if (O == "o11")
                    break;
                else if (O == "o1234" || O == "o1235" || O == "o1236" || O == "o1237") {
                    if (O == "o1234") {
                        E = B + s.shift();
                        e = l;
                        _ = E + s.shift();
                        w = e + s.shift();
                        f = _ + s.shift();
                        V = w;
                        $ = f + s.shift();
                        h = w;
                        K = $ + s.shift();
                        j = l;
                        B = K + s.shift();
                        F.a(p, E, e, _, w, f, V);
                        F.a(p, $, h, K, j, B, l)
                    }
                    if (O == "o1235") {
                        E = B + s.shift();
                        e = l + s.shift();
                        _ = E + s.shift();
                        w = e + s.shift();
                        f = _ + s.shift();
                        V = w + s.shift();
                        $ = f + s.shift();
                        h = V + s.shift();
                        K = $ + s.shift();
                        j = h + s.shift();
                        B = K + s.shift();
                        l = j + s.shift();
                        s.shift();
                        F.a(p, E, e, _, w, f, V);
                        F.a(p, $, h, K, j, B, l)
                    }
                    if (O == "o1236") {
                        E = B + s.shift();
                        e = l + s.shift();
                        _ = E + s.shift();
                        w = e + s.shift();
                        f = _ + s.shift();
                        V = w;
                        $ = f + s.shift();
                        h = w;
                        K = $ + s.shift();
                        j = h + s.shift();
                        B = K + s.shift();
                        F.a(p, E, e, _, w, f, V);
                        F.a(p, $, h, K, j, B, l)
                    }
                    if (O == "o1237") {
                        E = B + s.shift();
                        e = l + s.shift();
                        _ = E + s.shift();
                        w = e + s.shift();
                        f = _ + s.shift();
                        V = w + s.shift();
                        $ = f + s.shift();
                        h = V + s.shift();
                        K = $ + s.shift();
                        j = h + s.shift();
                        if (Math.abs(K - B) > Math.abs(j - l)) {
                            B = K + s.shift()
                        } else {
                            l = j + s.shift()
                        }
                        F.a(p, E, e, _, w, f, V);
                        F.a(p, $, h, K, j, B, l)
                    }
                } else if (O == "o14") {
                    if (s.length > 0 && !L) {
                        z = s.shift() + U.nominalWidthX;
                        L = !0
                    }
                    if (s.length == 4) {
                        var as = 0
                          , Q = s.shift()
                          , A = s.shift()
                          , at = s.shift()
                          , a5 = s.shift()
                          , al = x.q(U, at)
                          , ad = x.q(U, a5);
                        m.U._drawCFF(U.CharStrings[al], R, U, M, p);
                        R.x = Q;
                        R.y = A;
                        m.U._drawCFF(U.CharStrings[ad], R, U, M, p)
                    }
                    if (I) {
                        F.F(p);
                        I = !1
                    }
                } else if (O == "o19" || O == "o20") {
                    var T;
                    T = s.length % 2 !== 0;
                    if (T && !L) {
                        z = s.shift() + N
                    }
                    Y += s.length >> 1;
                    s.length = 0;
                    L = !0;
                    r += Y + 7 >> 3
                } else if (O == "o21") {
                    if (s.length > 2 && !L) {
                        z = s.shift() + N;
                        L = !0
                    }
                    l += s.pop();
                    B += s.pop();
                    if (I)
                        F.F(p);
                    F.g(p, B, l);
                    I = !0
                } else if (O == "o22") {
                    if (s.length > 1 && !L) {
                        z = s.shift() + N;
                        L = !0
                    }
                    B += s.pop();
                    if (I)
                        F.F(p);
                    F.g(p, B, l);
                    I = !0
                } else if (O == "o25") {
                    while (s.length > 6) {
                        B += s.shift();
                        l += s.shift();
                        F.P(p, B, l)
                    }
                    E = B + s.shift();
                    e = l + s.shift();
                    _ = E + s.shift();
                    w = e + s.shift();
                    B = _ + s.shift();
                    l = w + s.shift();
                    F.a(p, E, e, _, w, B, l)
                } else if (O == "o26") {
                    if (s.length % 2) {
                        B += s.shift()
                    }
                    while (s.length > 0) {
                        E = B;
                        e = l + s.shift();
                        _ = E + s.shift();
                        w = e + s.shift();
                        B = _;
                        l = w + s.shift();
                        F.a(p, E, e, _, w, B, l)
                    }
                } else if (O == "o27") {
                    if (s.length % 2) {
                        l += s.shift()
                    }
                    while (s.length > 0) {
                        E = B + s.shift();
                        e = l;
                        _ = E + s.shift();
                        w = e + s.shift();
                        B = _ + s.shift();
                        l = w;
                        F.a(p, E, e, _, w, B, l)
                    }
                } else if (O == "o10" || O == "o29") {
                    var v = O == "o10" ? M : U;
                    if (s.length == 0) {
                        console.log("error: empty stack")
                    } else {
                        var g = s.pop()
                          , G = v.Subrs[g + v.Bias];
                        R.x = B;
                        R.y = l;
                        R.J = Y;
                        R.i = L;
                        R.width = z;
                        R.open = I;
                        m.U._drawCFF(G, R, U, M, p);
                        B = R.x;
                        l = R.y;
                        Y = R.J;
                        L = R.i;
                        z = R.width;
                        I = R.open
                    }
                } else if (O == "o30" || O == "o31") {
                    var o, b = s.length, S = 0, C = O == "o31";
                    o = b & ~2;
                    S += b - o;
                    while (S < o) {
                        if (C) {
                            E = B + s.shift();
                            e = l;
                            _ = E + s.shift();
                            w = e + s.shift();
                            l = w + s.shift();
                            if (o - S == 5) {
                                B = _ + s.shift();
                                S++
                            } else
                                B = _;
                            C = !1
                        } else {
                            E = B;
                            e = l + s.shift();
                            _ = E + s.shift();
                            w = e + s.shift();
                            B = _ + s.shift();
                            if (o - S == 5) {
                                l = w + s.shift();
                                S++
                            } else
                                l = w;
                            C = !0
                        }
                        F.a(p, E, e, _, w, B, l);
                        S += 4
                    }
                } else if ((O + "").charAt(0) == "o") {
                    console.log("Unknown operation: " + O, X);
                    throw O
                } else
                    s.push(O)
            }
            R.x = B;
            R.y = l;
            R.J = Y;
            R.i = L;
            R.width = z;
            R.open = I
        },
        SVG: function() {
            var X = {
                aQ: function(r) {
                    return Math.sqrt(Math.abs(r[0] * r[3] - r[1] * r[2]))
                },
                translate: function(r, l, E) {
                    X.concat(r, [1, 0, 0, 1, l, E])
                },
                rotate: function(r, l) {
                    X.concat(r, [Math.cos(l), -Math.sin(l), Math.sin(l), Math.cos(l), 0, 0])
                },
                scale: function(r, l, E) {
                    X.concat(r, [l, 0, 0, E, 0, 0])
                },
                concat: function(r, l) {
                    var E = r[0]
                      , H = r[1]
                      , e = r[2]
                      , _ = r[3]
                      , w = r[4]
                      , $ = r[5];
                    r[0] = E * l[0] + H * l[2];
                    r[1] = E * l[1] + H * l[3];
                    r[2] = e * l[0] + _ * l[2];
                    r[3] = e * l[1] + _ * l[3];
                    r[4] = w * l[0] + $ * l[2] + l[4];
                    r[5] = w * l[1] + $ * l[3] + l[5]
                },
                aB: function(r) {
                    var l = r[0]
                      , E = r[1]
                      , H = r[2]
                      , e = r[3]
                      , _ = r[4]
                      , w = r[5]
                      , $ = l * e - E * H;
                    r[0] = e / $;
                    r[1] = -E / $;
                    r[2] = -H / $;
                    r[3] = l / $;
                    r[4] = (H * w - e * _) / $;
                    r[5] = (E * _ - l * w) / $
                },
                b5: function(r, l) {
                    var E = l[0]
                      , e = l[1];
                    return [E * r[0] + e * r[2] + r[4], E * r[1] + e * r[3] + r[5]]
                },
                a$: function(r, l) {
                    for (var E = 0; E < l.length; E += 2) {
                        var H = l[E]
                          , e = l[E + 1];
                        l[E] = H * r[0] + e * r[2] + r[4];
                        l[E + 1] = H * r[1] + e * r[3] + r[5]
                    }
                }
            };
            function R(r, B, l) {
                var E = []
                  , H = 0
                  , e = 0
                  , _ = 0;
                while (!0) {
                    var w = r.indexOf(B, e)
                      , $ = r.indexOf(l, e);
                    if (w == -1 && $ == -1)
                        break;
                    if ($ == -1 || w != -1 && w < $) {
                        if (_ == 0) {
                            E.push(r.slice(H, w).trim());
                            H = w + 1
                        }
                        _++;
                        e = w + 1
                    } else if (w == -1 || $ != -1 && $ < w) {
                        _--;
                        if (_ == 0) {
                            E.push(r.slice(H, $).trim());
                            H = $ + 1
                        }
                        e = $ + 1
                    }
                }
                return E
            }
            function U(r) {
                var B = R(r, "{", "}")
                  , l = {};
                for (var E = 0; E < B.length; E += 2) {
                    var H = B[E].split(",");
                    for (var e = 0; e < H.length; e++) {
                        var _ = H[e].trim();
                        if (l[_] == null)
                            l[_] = "";
                        l[_] += B[E + 1]
                    }
                }
                return l
            }
            function M(r) {
                var B = R(r, "(", ")")
                  , l = [1, 0, 0, 1, 0, 0];
                for (var E = 0; E < B.length; E += 2) {
                    var H = l;
                    l = p(B[E], B[E + 1]);
                    X.concat(l, H)
                }
                return l
            }
            function p(r, B) {
                var l = [1, 0, 0, 1, 0, 0]
                  , E = !0;
                for (var H = 0; H < B.length; H++) {
                    var e = B.charAt(H);
                    if (e == "," || e == " ")
                        E = !0;
                    else if (e == ".") {
                        if (!E) {
                            B = B.slice(0, H) + "," + B.slice(H);
                            H++
                        }
                        E = !1
                    } else if (e == "-" && H > 0 && B[H - 1] != "e") {
                        B = B.slice(0, H) + " " + B.slice(H);
                        H++;
                        E = !0
                    }
                }
                B = B.split(/\s*[\s,]\s*/).map(parseFloat);
                if (!1) {} else if (r == "translate") {
                    if (B.length == 1)
                        X.translate(l, B[0], 0);
                    else
                        X.translate(l, B[0], B[1])
                } else if (r == "scale") {
                    if (B.length == 1)
                        X.scale(l, B[0], B[0]);
                    else
                        X.scale(l, B[0], B[1])
                } else if (r == "rotate") {
                    var _ = 0
                      , w = 0;
                    if (B.length != 1) {
                        _ = B[1];
                        w = B[2]
                    }
                    X.translate(l, -_, -w);
                    X.rotate(l, -Math.PI * B[0] / 180);
                    X.translate(l, _, w)
                } else if (r == "matrix")
                    l = B;
                else
                    console.log("unknown transform: ", r);
                return l
            }
            function s(r) {
                var B = {
                    S: [],
                    n: []
                };
                if (r == null)
                    return B;
                var l = new DOMParser
                  , E = l.parseFromString(r, "image/svg+xml")
                  , H = E.getElementsByTagName("svg")[0]
                  , e = H.getAttribute("viewBox");
                if (e)
                    e = e.trim().split(" ").map(parseFloat);
                else
                    e = [0, 0, 1e3, 1e3];
                Y(H.children, B);
                for (var _ = 0; _ < B.n.length; _ += 2) {
                    var w = B.n[_]
                      , $ = B.n[_ + 1];
                    w -= e[0];
                    $ -= e[1];
                    $ = -$;
                    B.n[_] = w;
                    B.n[_ + 1] = $
                }
                return B
            }
            function Y(r, B, l) {
                for (var E = 0; E < r.length; E++) {
                    var H = r[E]
                      , e = H.tagName
                      , _ = H.getAttribute("fill");
                    if (_ == null)
                        _ = l;
                    if (e == "g") {
                        var w = {
                            n: [],
                            S: []
                        };
                        Y(H.children, w, _);
                        var $ = H.getAttribute("transform");
                        if ($) {
                            var h = M($);
                            X.a$(h, w.n)
                        }
                        B.n = B.n.concat(w.n);
                        B.S = B.S.concat(w.S)
                    } else if (e == "path" || e == "circle" || e == "ellipse") {
                        B.S.push(_ ? _ : "#000000");
                        var K;
                        if (e == "path")
                            K = H.getAttribute("d");
                        if (e == "circle" || e == "ellipse") {
                            var j = [0, 0, 0, 0]
                              , Z = ["cx", "cy", "rx", "ry", "r"];
                            for (var q = 0; q < 5; q++) {
                                var f = H.getAttribute(Z[q]);
                                if (f) {
                                    f = parseFloat(f);
                                    if (q < 4)
                                        j[q] = f;
                                    else
                                        j[2] = j[3] = f
                                }
                            }
                            var V = j[0]
                              , x = j[1]
                              , F = j[2]
                              , N = j[3];
                            K = ["M", V - F, x, "a", F, N, 0, 1, 0, F * 2, 0, "a", F, N, 0, 1, 0, -F * 2, 0].join(" ")
                        }
                        I(K, B);
                        B.S.push("X")
                    } else if (e == "defs") {} else
                        console.log(e, H)
                }
            }
            function L(r) {
                var B = []
                  , l = 0
                  , E = !1
                  , H = ""
                  , e = "";
                while (l < r.length) {
                    var _ = r.charCodeAt(l)
                      , w = r.charAt(l);
                    l++;
                    var $ = 48 <= _ && _ <= 57 || w == "." || w == "-" || w == "e" || w == "E";
                    if (E) {
                        if (w == "-" && e != "e" || w == "." && H.indexOf(".") != -1) {
                            B.push(parseFloat(H));
                            H = w
                        } else if ($)
                            H += w;
                        else {
                            B.push(parseFloat(H));
                            if (w != "," && w != " ")
                                B.push(w);
                            E = !1
                        }
                    } else {
                        if ($) {
                            H = w;
                            E = !0
                        } else if (w != "," && w != " ")
                            B.push(w)
                    }
                    e = w
                }
                if (E)
                    B.push(parseFloat(H));
                return B
            }
            function z(r, B, l) {
                var E = B;
                while (E < r.length) {
                    if (typeof r[E] == "string")
                        break;
                    E += l
                }
                return (E - B) / l
            }
            function I(r, B) {
                var l = L(r)
                  , E = 0
                  , H = 0
                  , e = 0
                  , _ = 0
                  , w = 0
                  , $ = B.n.length
                  , h = {
                    M: 2,
                    L: 2,
                    H: 1,
                    V: 1,
                    T: 2,
                    S: 4,
                    A: 7,
                    Q: 4,
                    C: 6
                }
                  , K = B.S
                  , j = B.n;
                while (E < l.length) {
                    var f = l[E];
                    E++;
                    var V = f.toUpperCase();
                    if (V == "Z") {
                        K.push("Z");
                        H = _;
                        e = w
                    } else {
                        var x = h[V]
                          , F = z(l, E, x);
                        for (var N = 0; N < F; N++) {
                            if (N == 1 && V == "M") {
                                f = f == V ? "L" : "l";
                                V = "L"
                            }
                            var J = 0
                              , O = 0;
                            if (f != V) {
                                J = H;
                                O = e
                            }
                            if (!1) {} else if (V == "M") {
                                H = J + l[E++];
                                e = O + l[E++];
                                K.push("M");
                                j.push(H, e);
                                _ = H;
                                w = e
                            } else if (V == "L") {
                                H = J + l[E++];
                                e = O + l[E++];
                                K.push("L");
                                j.push(H, e)
                            } else if (V == "H") {
                                H = J + l[E++];
                                K.push("L");
                                j.push(H, e)
                            } else if (V == "V") {
                                e = O + l[E++];
                                K.push("L");
                                j.push(H, e)
                            } else if (V == "Q") {
                                var T = J + l[E++]
                                  , o = O + l[E++]
                                  , n = J + l[E++]
                                  , y = O + l[E++];
                                K.push("Q");
                                j.push(T, o, n, y);
                                H = n;
                                e = y
                            } else if (V == "T") {
                                var k = Math.max(j.length - (K[K.length - 1] == "Q" ? 4 : 2), $)
                                  , T = H + H - j[k]
                                  , o = e + e - j[k + 1]
                                  , n = J + l[E++]
                                  , y = O + l[E++];
                                K.push("Q");
                                j.push(T, o, n, y);
                                H = n;
                                e = y
                            } else if (V == "C") {
                                var T = J + l[E++]
                                  , o = O + l[E++]
                                  , n = J + l[E++]
                                  , y = O + l[E++]
                                  , S = J + l[E++]
                                  , Q = O + l[E++];
                                K.push("C");
                                j.push(T, o, n, y, S, Q);
                                H = S;
                                e = Q
                            } else if (V == "S") {
                                var k = Math.max(j.length - (K[K.length - 1] == "C" ? 4 : 2), $)
                                  , T = H + H - j[k]
                                  , o = e + e - j[k + 1]
                                  , n = J + l[E++]
                                  , y = O + l[E++]
                                  , S = J + l[E++]
                                  , Q = O + l[E++];
                                K.push("C");
                                j.push(T, o, n, y, S, Q);
                                H = S;
                                e = Q
                            } else if (V == "A") {
                                var T = H
                                  , o = e
                                  , A = l[E++]
                                  , u = l[E++]
                                  , at = l[E++] * (Math.PI / 180)
                                  , a5 = l[E++]
                                  , al = l[E++]
                                  , n = J + l[E++]
                                  , y = O + l[E++];
                                if (n == H && y == e && A == 0 && u == 0)
                                    continue;
                                var ad = (T - n) / 2
                                  , v = (o - y) / 2
                                  , g = Math.cos(at)
                                  , G = Math.sin(at)
                                  , b = g * ad + G * v
                                  , C = -G * ad + g * v
                                  , a0 = A * A
                                  , ae = u * u
                                  , aq = b * b
                                  , a6 = C * C
                                  , af = (a0 * ae - a0 * a6 - ae * aq) / (a0 * a6 + ae * aq)
                                  , ap = (a5 != al ? 1 : -1) * Math.sqrt(Math.max(af, 0))
                                  , ai = ap * (A * C) / u
                                  , a4 = -ap * (u * b) / A
                                  , a3 = g * ai - G * a4 + (T + n) / 2
                                  , ak = G * ai + g * a4 + (o + y) / 2
                                  , am = function(P, t, D, W) {
                                    var a8 = Math.sqrt(P * P + t * t)
                                      , i = Math.sqrt(D * D + W * W)
                                      , a2 = (P * D + t * W) / (a8 * i);
                                    return (P * W - t * D >= 0 ? 1 : -1) * Math.acos(Math.max(-1, Math.min(1, a2)))
                                }
                                  , a9 = (b - ai) / A
                                  , aj = (C - a4) / u
                                  , ac = am(1, 0, a9, aj)
                                  , ah = am(a9, aj, (-b - ai) / A, (-C - a4) / u);
                                ah = ah % (2 * Math.PI);
                                var ao = function(an, H, e, P, t, D, W) {
                                    var a8 = function(d, c) {
                                        var a1 = Math.sin(c)
                                          , k = Math.cos(c)
                                          , c = d[0]
                                          , ag = d[1]
                                          , aa = d[2]
                                          , r = d[3];
                                        d[0] = c * k + ag * a1;
                                        d[1] = -c * a1 + ag * k;
                                        d[2] = aa * k + r * a1;
                                        d[3] = -aa * a1 + r * k
                                    }
                                      , i = function(d, c) {
                                        for (var N = 0; N < c.length; N += 2) {
                                            var H = c[N]
                                              , e = c[N + 1];
                                            c[N] = d[0] * H + d[2] * e + d[4];
                                            c[N + 1] = d[1] * H + d[3] * e + d[5]
                                        }
                                    }
                                      , a2 = function(d, c) {
                                        for (var N = 0; N < c.length; N++)
                                            d.push(c[N])
                                    }
                                      , ab = function(d, P) {
                                        a2(d.S, P.S);
                                        a2(d.n, P.n)
                                    };
                                    if (W)
                                        while (D > t)
                                            D -= 2 * Math.PI;
                                    else
                                        while (D < t)
                                            D += 2 * Math.PI;
                                    var ar = (D - t) / 4
                                      , au = Math.cos(ar / 2)
                                      , a7 = -Math.sin(ar / 2)
                                      , T = (4 - au) / 3
                                      , o = a7 == 0 ? a7 : (1 - au) * (3 - au) / (3 * a7)
                                      , n = T
                                      , y = -o
                                      , S = au
                                      , Q = -a7
                                      , x = [T, o, n, y, S, Q]
                                      , B = {
                                        S: ["C", "C", "C", "C"],
                                        n: x.slice(0)
                                    }
                                      , a = [1, 0, 0, 1, 0, 0];
                                    a8(a, -ar);
                                    for (var N = 0; N < 3; N++) {
                                        i(a, x);
                                        a2(B.n, x)
                                    }
                                    a8(a, -t + ar / 2);
                                    a[0] *= P;
                                    a[1] *= P;
                                    a[2] *= P;
                                    a[3] *= P;
                                    a[4] = H;
                                    a[5] = e;
                                    i(a, B.n);
                                    i(an.aZ, B.n);
                                    ab(an.b2, B)
                                }
                                  , an = {
                                    b2: B,
                                    aZ: [A * g, A * G, -u * G, u * g, a3, ak]
                                };
                                ao(an, 0, 0, 1, ac, ac + ah, al == 0);
                                H = n;
                                e = y
                            } else
                                console.log("Unknown SVG command " + f)
                        }
                    }
                }
            }
            return {
                cssMap: U,
                readTrnf: M,
                b1: I,
                ai: s
            }
        }(),
        initHB: function(X, R) {
            var U = function(M) {
                var p = 0;
                if ((M & 4294967295 - (1 << 7) + 1) == 0) {
                    p = 1
                } else if ((M & 4294967295 - (1 << 11) + 1) == 0) {
                    p = 2
                } else if ((M & 4294967295 - (1 << 16) + 1) == 0) {
                    p = 3
                } else if ((M & 4294967295 - (1 << 21) + 1) == 0) {
                    p = 4
                }
                return p
            };
            fetch(X).then(function(M) {
                return M.arrayBuffer()
            }).then(function(M) {
                return WebAssembly.instantiate(M)
            }).then(function(M) {
                console.log("HB ready");
                var p = M.instance.exports, s = p.memory, Y, L, z, I, r, B, l, E;
                s.grow(30);
                m.U.shapeHB = function() {
                    var H = function(_) {
                        var w = p.hb_buffer_get_length(_)
                          , $ = []
                          , h = p.hb_buffer_get_glyph_infos(_, 0) >>> 2
                          , K = p.hb_buffer_get_glyph_positions(_, 0) >>> 2;
                        for (var j = 0; j < w; ++j) {
                            var Z = h + j * 5
                              , q = K + j * 5;
                            $.push({
                                g: L[Z + 0],
                                cl: L[Z + 2],
                                ax: z[q + 0],
                                ay: z[q + 1],
                                dx: z[q + 2],
                                dy: z[q + 3]
                            })
                        }
                        return $
                    }, e;
                    return function(_, w, $) {
                        var h = _._data
                          , K = _.name.postScriptName
                          , j = s.buffer.byteLength
                          , Z = 2 * h.length + w.length * 16 + 4e6
                          , J = 0
                          , O = 0;
                        if (j < Z) {
                            s.grow((Z - j >>> 16) + 4)
                        }
                        Y = new Uint8Array(s.buffer);
                        L = new Uint32Array(s.buffer);
                        z = new Int32Array(s.buffer);
                        if (I != K) {
                            if (r != null) {
                                p.hb_blob_destroy(r);
                                p.free(B);
                                p.hb_face_destroy(l);
                                p.hb_font_destroy(E)
                            }
                            B = p.malloc(h.byteLength);
                            Y.set(h, B);
                            r = p.hb_blob_create(B, h.byteLength, 2, 0, 0);
                            l = p.hb_face_create(r, 0);
                            E = p.hb_font_create(l);
                            I = K
                        }
                        if (window.TextEncoder == null) {
                            alert("Your browser is too old. Please, update it.");
                            return
                        }
                        if (e == null)
                            e = new window.TextEncoder("utf8");
                        var q = p.hb_buffer_create()
                          , f = e.encode(w)
                          , V = f.length
                          , x = p.malloc(V);
                        Y.set(f, x);
                        p.hb_buffer_add_utf8(q, x, V, 0, V);
                        p.free(x);
                        p.hb_buffer_set_direction(q, $ ? 4 : 5);
                        p.hb_buffer_guess_segment_properties(q);
                        p.hb_shape(E, q, 0, 0);
                        var F = H(q);
                        p.hb_buffer_destroy(q);
                        var N = F.slice(0);
                        if (!$)
                            N.reverse();
                        for (var T = 1; T < N.length; T++) {
                            var o = N[T]
                              , n = o.cl;
                            while (!0) {
                                var y = w.codePointAt(J)
                                  , k = U(y);
                                if (O + k <= n) {
                                    O += k;
                                    J += y <= 65535 ? 1 : 2
                                } else
                                    break
                            }
                            o.cl = J
                        }
                        return F
                    }
                }();
                R()
            })
        }
    };
    return m
}()
