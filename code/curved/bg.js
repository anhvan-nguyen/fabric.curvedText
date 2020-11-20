function bg() { }
bg.R5 = function (Y) {
    return JSON.parse(JSON.stringify(Y))
}

bg.DJ = function (Y, R) {
    for (var V in R)
        Y[V] = R[V]
}

bg.BW = function (Y, R, V) {
    var E = bg.a30();
    if (V)
        bg.wR(E, 0, 0, V);
    var r = {
        g: new bF(1, 0, 0, 1, Math.round(Y), Math.round(R)),
        VW: E
    };
    r.Cp = bg._G();
    r.P5 = w.uM.T();
    r.Bk = new gE;
    return r
}

bg.yt = function (Y, R) {
    if (R == null)
        R = Y.Justification;
    var V = Y._Direction ? Y._Direction : 0;
    if (V == 1) {
        if (R == 0 || R == 3)
            R++;
        else if (R == 1 || R == 4)
            R--
    }
    return R
}

bg.VJ = function (Y) {
    var R = {
        h: 0,
        l: 0,
        O: 0
    };
    if (Y.FillColor) {
        var V = Y.FillColor
            , E = V.Values;
        if (V.Type == 1)
            R = {
                h: E[1] * 255,
                l: E[2] * 255,
                O: E[3] * 255
            };
        else if (V.Type == 2) {
            var r = {
                classID: "CMYC",
                Cyn: {
                    t: "doub",
                    v: E[1] * 100
                },
                Mgnt: {
                    t: "doub",
                    v: E[2] * 100
                },
                Ylw: {
                    t: "doub",
                    v: E[3] * 100
                },
                Blck: {
                    t: "doub",
                    v: E[4] * 100
                }
            };
            R = w.W.VJ(r)
        } else
            console.log("Unknown color type")
    }
    return R
}

bg.Tf = function (Y, R) {
    var V;
    if (bg.Re(Y.VW) == 1) {
        var E = bg.ah(Y.VW);
        V = new gE(0, 0, E[2] - E[0], E[3] - E[1])
    } else
        V = R.aY();
    return V
}

bg.mu = function (Y) {
    return Y.EngineDict.Editor.Text.replace(/\r/g, "\n").replace(/\u0003/g, "\n")
}

bg.wU = function (Y, R) {
    Y.EngineDict.Editor.Text = R.replace(/\n/g, "\r")
}

bg.Re = function (Y) {
    return Y.Curve && Y.Curve.TextOnPathTRange[0] >= 0 ? 2 : Y.EngineDict.Rendered.Shapes.Children[0].ShapeType
}

bg.ah = function (Y) {
    return Y.EngineDict.Rendered.Shapes.Children[0].Cookie.Photoshop.BoxBounds
}

bg.a1b = function (Y, R) {
    return bg.agQ(Y, bg.Li(Y, R))
}

bg.Li = function (Y, R) {
    var V = Y.EngineDict.StyleRun.RunLengthArray;
    return bg.wv(V, R).de
}

bg.agQ = function (Y, R) {
    var V = Y.ResourceDict.StyleSheetSet[0].StyleSheetData
        , E = {};
    for (var r in V)
        E[r] = V[r];
    var K = Y.EngineDict.StyleRun.RunArray[R].StyleSheet.StyleSheetData;
    bg.DJ(E, K);
    return E
}

bg.a60 = function (Y, R) {
    var V = Y.ResourceDict.ParagraphSheetSet[0].Properties
        , E = {};
    for (var r in V)
        E[r] = V[r];
    var K = Y.EngineDict.ParagraphRun.RunArray[R].ParagraphSheet.Properties;
    bg.DJ(E, K);
    var J = ["StartIndent", "EndIndent", "FirstLineIndent"];
    for (var x = 0; x < 3; x++)
        if (E[J[x]] == null)
            E[J[x]] = 0;
    return E
}

bg.ys = function (Y, R, V) {
    if (V == "")
        return;
    var E = bg.mu(Y);
    bg.wU(Y, E.substring(0, R) + V + E.substring(R, E.length));
    var r = Y.EngineDict.StyleRun
        , K = r.RunLengthArray
        , J = bg.wv(K, R - 1);
    K[J.de] += V.length;
    var t = Y.EngineDict.ParagraphRun
        , K = t.RunLengthArray
        , C = bg.wv(K, R)
        , c = V.split("\n");
    if (c.length == 1) {
        K[C.de] += V.length;
        return
    }
    K.splice(C.de + 1, 0, K[C.de] - (R - C.eW));
    t.RunArray.splice(C.de + 1, 0, bg.R5(t.RunArray[C.de]));
    K[C.de] -= K[C.de + 1];
    K[C.de] += c[0].length + 1;
    for (var x = 1; x < c.length - 1; x++) {
        t.RunArray.splice(C.de + x, 0, bg.R5(t.RunArray[C.de + x - 1]));
        t.RunLengthArray.splice(C.de + x, 0, c[x].length + 1)
    }
    K[C.de + c.length - 1] += c[c.length - 1].length
}

bg.to = function (Y, R, V) {
    var E = bg.mu(Y);
    bg.wU(Y, E.substring(0, R) + E.substring(V, E.length));
    bg.Yv(Y.EngineDict.ParagraphRun, R, V, !0);
    bg.Yv(Y.EngineDict.StyleRun, R, V, !1)
}

bg.Yv = function (Y, R, V, E) {
    var r = Y.RunLengthArray
        , K = bg.wv(r, R)
        , J = bg.wv(r, V)
        , t = [];
    for (var x = 0; x < r.length; x++)
        for (var C = 0; C < r[x]; C++)
            t.push(x);
    t.splice(R, V - R);
    var c = [];
    for (var x = 0; x < r.length; x++)
        c.push(0);
    for (var x = 0; x < t.length; x++)
        c[t[x]]++;
    for (var x = 0; x < r.length; x++) {
        if (c[x] == 0) {
            c.splice(x, 1);
            r.splice(x, 1);
            Y.RunArray.splice(x, 1);
            x--
        } else if (c[x] < r[x])
            r[x] = c[x]
    }
    if (E && K.de != J.de && K.eW != R) {
        r[K.de] += r[K.de + 1];
        r.splice(K.de + 1, 1);
        Y.RunArray.splice(K.de + 1, 1)
    }
}

bg.wR = function (Y, R, V, E) {
    var r = Y.EngineDict.Editor.Text.length;
    if (V == r - 2)
        V++;
    if (E.G$.Font != null)
        Y.ResourceDict.FontSet = E.rQ.slice(0);
    if (R <= V)
        bg.Oa(Y.EngineDict.StyleRun, E.G$, R, V, !0);
    bg.Oa(Y.EngineDict.ParagraphRun, E.JT, R, V, !1)
}

bg.Oa = function (Y, R, V, E, r) {
    var K = Y.RunLengthArray;
    if (r) {
        var J = bg.wv(K, V);
        if (J.eW != V) {
            var t = K[J.de];
            K.splice(J.de, 0, V - J.eW);
            K[J.de + 1] = t - K[J.de];
            Y.RunArray.splice(J.de + 1, 0, bg.R5(Y.RunArray[J.de]))
        }
        var C = bg.wv(K, E);
        if (C.eW + K[C.de] - 1 != E) {
            var t = K[C.de];
            K.splice(C.de, 0, E - C.eW + 1);
            K[C.de + 1] = t - K[C.de];
            Y.RunArray.splice(C.de + 1, 0, bg.R5(Y.RunArray[C.de]))
        }
    }
    var J = bg.wv(K, V)
        , C = bg.wv(K, E);
    if (r)
        for (var x = J.de; x <= C.de; x++)
            bg.DJ(Y.RunArray[x].StyleSheet.StyleSheetData, R);
    else
        for (var x = J.de; x <= C.de; x++)
            bg.DJ(Y.RunArray[x].ParagraphSheet.Properties, R)
}

bg.SV = function (Y) {
    var R = Y.Cp.AntA.v.Annt;
    R = ["Anno", "antiAliasSharp", "AnCr", "AnSt", "AnSm"].indexOf(R);
    if (R == -1)
        R = 1;
    return R
}

bg.aH = function (Y, R) {
    var V, E;
    V = ["FontSize", "Leading", "BaselineShift"];
    E = Y.G$;
    for (var x = 0; x < V.length; x++)
        if (E[V[x]] != null)
            E[V[x]] *= R;
    V = ["StartIndent", "EndIndent", "FirstLineIndent", "SpaceBefore", "SpaceAfter"];
    E = Y.JT;
    for (var x = 0; x < V.length; x++)
        if (E[V[x]] != null)
            E[V[x]] *= R
}

bg._G = function () {
    return {
        classID: "TxLr",
        Txt: {
            t: "TEXT",
            v: "\0"
        },
        textGridding: {
            t: "enum",
            v: {
                textGridding: "None"
            }
        },
        Ornt: {
            t: "enum",
            v: {
                Ornt: "Hrzn"
            }
        },
        AntA: {
            t: "enum",
            v: {
                Annt: "antiAliasSharp"
            }
        },
        TextIndex: {
            t: "long",
            v: 0
        }
    }
}

bg.wv = function (Y, R) {
    var V = 0
        , x = 0;
    while (V + Y[x] <= R) {
        V += Y[x];
        x++
    }
    return {
        de: x,
        eW: V
    }
}

bg.a30 = function () {
    var Y = bg.R5(this.u7);
    return Y
}

bg.aK = {
    Justification: 0,
    FirstLineIndent: 0,
    StartIndent: 0,
    EndIndent: 0,
    SpaceBefore: 0,
    SpaceAfter: 0,
    AutoHyphenate: !1,
    HyphenatedWordSize: 6,
    PreHyphen: 2,
    PostHyphen: 2,
    ConsecutiveHyphens: 8,
    Zone: 36,
    WordSpacing: [.8, 1, 1.33],
    LetterSpacing: [0, 0, 0],
    GlyphSpacing: [1, 1, 1],
    AutoLeading: 1.2,
    LeadingType: 0,
    Hanging: !1,
    Burasagari: !1,
    KinsokuOrder: 0,
    EveryLineComposer: !1,
    _Direction: 0
};
bg.a9c = {
    Font: 0,
    FontSize: 12,
    FauxBold: !1,
    FauxItalic: !1,
    AutoLeading: !0,
    Leading: 0,
    HorizontalScale: 1,
    VerticalScale: 1,
    Tracking: 0,
    AutoKerning: !0,
    Kerning: 0,
    BaselineShift: 0,
    FontCaps: 0,
    FontBaseline: 0,
    Underline: !1,
    Strikethrough: !1,
    Ligatures: !0,
    DLigatures: !1,
    BaselineDirection: 2,
    Tsume: 0,
    StyleRunAlignment: 2,
    Language: 0,
    NoBreak: !1,
    FillColor: {
        Type: 1,
        Values: [1, 0, 0, 0]
    },
    StrokeColor: {
        Type: 1,
        Values: [1, 0, 0, 0]
    },
    FillFlag: !0,
    StrokeFlag: !1,
    FillFirst: !0,
    YUnderline: 1,
    OutlineWidth: 1,
    CharacterDirection: 0,
    HindiNumbers: !1,
    Kashida: 1,
    DiacriticPos: 2
};
bg.u7 = {
    EngineDict: {
        Editor: {
            Text: "\n"
        },
        ParagraphRun: {
            DefaultRunData: {
                ParagraphSheet: {
                    DefaultStyleSheet: 0,
                    Properties: {}
                },
                Adjustments: {
                    Axis: [1, 0, 1],
                    XY: [0, 0]
                }
            },
            RunArray: [{
                ParagraphSheet: {
                    DefaultStyleSheet: 0,
                    Properties: JSON.parse(JSON.stringify(bg.aK))
                },
                Adjustments: {
                    Axis: [1, 0, 1],
                    XY: [0, 0]
                }
            }],
            RunLengthArray: [1],
            IsJoinable: 1
        },
        StyleRun: {
            DefaultRunData: {
                StyleSheet: {
                    StyleSheetData: {}
                }
            },
            RunArray: [{
                StyleSheet: {
                    StyleSheetData: {
                        Font: 0,
                        FontSize: 24,
                        AutoKerning: !0,
                        Kerning: 0
                    }
                }
            }],
            RunLengthArray: [1],
            IsJoinable: 2
        },
        GridInfo: {
            GridIsOn: !1,
            ShowGrid: !1,
            GridSize: 18,
            GridLeading: 22,
            GridColor: {
                Type: 1,
                Values: [0, 0, 0, 1]
            },
            GridLeadingFillColor: {
                Type: 1,
                Values: [0, 0, 0, 1]
            },
            AlignLineHeightToGridFlags: !1
        },
        AntiAlias: 4,
        UseFractionalGlyphWidths: !0,
        Rendered: {
            Version: 1,
            Shapes: {
                WritingDirection: 0,
                Children: [{
                    ShapeType: 0,
                    Procession: 0,
                    Lines: {
                        WritingDirection: 0,
                        Children: []
                    },
                    Cookie: {
                        Photoshop: {
                            ShapeType: 0,
                            PointBase: [0, 0],
                            Base: {
                                ShapeType: 0,
                                TransformPoint0: [1, 0],
                                TransformPoint1: [0, 1],
                                TransformPoint2: [0, 0]
                            }
                        }
                    }
                }]
            }
        }
    },
    ResourceDict: {
        KinsokuSet: [{
            Name: "PhotoshopKinsokuHard",
            NoStart: "\u3001\u3002\uFF0C\uFF0E\u30FB\uFF1A\uFF1B\uFF1F\uFF01\u30FC\u2015\u2019\u201D\uFF09\u3015\uFF3D\uFF5D\u3009\u300B\u300D\u300F\u3011\u30FD\u30FE\u309D\u309E\u3005\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308E\u30A1\u30A3\u30A5\u30A7\u30A9\u30C3\u30E3\u30E5\u30E7\u30EE\u30F5\u30F6\u309B\u309C?!)]},.:;\u2103\u2109\xA2\uFF05\u2030",
            NoEnd: "\u2018\u201C\uFF08\u3014\uFF3B\uFF5B\u3008\u300A\u300C\u300E\u3010([{\uFFE5\uFF04\xA3\uFF20\xA7\u3012\uFF03",
            Keep: "\u2015\u2025",
            Hanging: "\u3001\u3002.,"
        }, {
            Name: "PhotoshopKinsokuSoft",
            NoStart: "\u3001\u3002\uFF0C\uFF0E\u30FB\uFF1A\uFF1B\uFF1F\uFF01\u2019\u201D\uFF09\u3015\uFF3D\uFF5D\u3009\u300B\u300D\u300F\u3011\u30FD\u30FE\u309D\u309E\u3005",
            NoEnd: "\u2018\u201C\uFF08\u3014\uFF3B\uFF5B\u3008\u300A\u300C\u300E\u3010",
            Keep: "\u2015\u2025",
            Hanging: "\u3001\u3002.,"
        }],
        MojiKumiSet: [{
            InternalName: "Photoshop6MojiKumiSet1"
        }, {
            InternalName: "Photoshop6MojiKumiSet2"
        }, {
            InternalName: "Photoshop6MojiKumiSet3"
        }, {
            InternalName: "Photoshop6MojiKumiSet4"
        }],
        TheNormalStyleSheet: 0,
        TheNormalParagraphSheet: 0,
        ParagraphSheetSet: [{
            Name: "Normal RGB",
            DefaultStyleSheet: 0,
            Properties: JSON.parse(JSON.stringify(bg.aK))
        }],
        StyleSheetSet: [{
            Name: "Normal RGB",
            StyleSheetData: JSON.parse(JSON.stringify(bg.a9c))
        }],
        FontSet: [{
            Name: "DejaVuSans",
            Script: 0,
            FontType: 1,
            Synthetic: 0
        }, {
            Name: "AdobeInvisFont",
            Script: 0,
            FontType: 0,
            Synthetic: 0
        }, {
            Name: "MyriadHebrew-Regular",
            Script: 6,
            FontType: 0,
            Synthetic: 0
        }],
        SuperscriptSize: .583,
        SuperscriptPosition: .333,
        SubscriptSize: .583,
        SubscriptPosition: .333,
        SmallCapSize: .7
    }
};