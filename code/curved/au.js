function au() {
  this.l1 = {};
  this.$u = {};
  this.DW = 0;
  this.N0 = {};
  this.ur = 0;
  au.lL = this
}

au.prototype.cH = function (Y, R) {
  if (this.l1[Y])
    return this.l1[Y];
  if (this.$u[Y])
    return null;
  var V = null
    , E = this.f9();
  if (E[Y] != null)
    V = E[Y][5];
  if (V == null) {
    var r = au.a3l[Y];
    if (r == null) {
      var K = "DejaVuSans DejaVuSans-Bold DejaVuSans-Oblique DejaVuSans-BoldOblique DejaVuSerif DejaVuSerif-Bold DejaVuSerif-Italic DejaVuSerif-BoldItalic".split(" ")
        , J = Y.toLowerCase()
        , t = 0;
      if (J.indexOf("sans") != -1)
        t = 0;
      else if (J.indexOf("serif") != -1)
        t = 4;
      var C = J.indexOf("bold") != -1 || J.indexOf("-black") != -1
        , c = J.indexOf("italic") != -1 || J.indexOf("oblique") != -1 || J.endsWith("-it");
      if (C && c)
        t += 3;
      else if (c)
        t += 2;
      else if (C)
        t += 1;
      r = K[t]
    }
    if (R != null && R > 128)
      r = this.LG(R, r);
    if (this.N0[Y] == null) {
      this.N0[Y] = 1;
      var M = Date.now() - this.DW > 2e3 ? 2e3 : 0;
      this.DW = Date.now();
      alert(Y + " \u27A1 " + r, M)
    }
    return this.cH(r, R)
  }
  this.$u[Y] = "a";
  var a = new I(O.E.z, !0);
  a.data = {
    e: O.U.$c,
    jR: {
      url: "rsrc/fonts/" + V
    }
  };
  this.f(a)
}

au.prototype.LG = function (Y, R, V) {
  var E = this.l1[R];
  if (E && Typr.U.codeToGlyph(E, Y) != 0)
    return R;
  var r = this.f9()
    , K = au.abt(Y)
    , J = K[0];
  if (r[R] && (r[R][3] & J) == 0) {
    if (V)
      for (var x = 0; x < V.length; x++) {
        var t = V[x].Name
          , C = r[t];
        if (C && (C[3] & J) != 0)
          return t
      }
    var t = au.ey[K[1]][4];
    if (r[t])
      return t
  }
  return R
}

au.abt = function (Y) {
  var R = au.ey
    , V = [0];
  for (var x = 0; x < R.length; x++) {
    var E = R[x][2];
    for (var r = 0; r < E.length; r += 2)
      if (E[r] <= Y && Y <= E[r + 1]) {
        V[0] += 1 << x;
        V.push(x)
      }
  }
  if (V.length == 1)
    V.push(0);
  return V
}

au.ey = [["Latin-1", "Preview", [161, 169, 192, 246, 248, 255], .7, "DejaVuSans"], ["Latin Ext. A", "", [256, 383], .7, "DejaVuSans"], ["Greek", "", [913, 929, 931, 969], .7, "DejaVuSans"], ["Cyrillic", "", [1040, 1119], .7, "DejaVuSans"], ["Hebrew", "", [1473, 1479, 1488, 1514, 1520, 1524], .7, "DejaVuSans"], ["Arabic", "", [1569, 1594, 1600, 1749], .4, "DejaVuSans"], ["Hangul", "\uC608\uACE0\uD3B8", [4352, 4607, 44032, 55203], .7, "NotoSansKR-Regular"], ["Chi-Jap-Kor", "\u9810\u7FD2", [12288, 12351, 12352, 12447, 12448, 12543, 19968, 40895], .05, "DroidSansFallback"], ["Tibetan", "\u0F50\u0F74\u0F42\u0F66\u0F0B\u0F62\u0F97\u0F7A\u0F0B\u0F46\u0F7A\u0F0D", [3840, 3948, 3953, 4044], .7, "NotoSansTibetan"], ["Devanagari", "\u092A\u0942\u0930\u094D\u0935\u093E\u0935\u0932\u094B\u0915\u0928", [2304, 2431], .7, "Hind-Regular"], ["Thai", "\u0E20\u0E32\u0E1E\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07", [3585, 3642, 3647, 3675], .7, "K2D-Regular"], ["Khmer", "\u1798\u17BE\u179B\u1787\u17B6\u1798\u17BB\u1793", [6016, 6109, 6112, 6121, 6128, 6137], .7, "Battambang-Regular"], ["Vietnamese", "Xem tr\u01B0\u1EDBc", [192, 195, 200, 202, 204, 205, 210, 213, 217, 218, 221, 221, 224, 227, 232, 234, 236, 237, 242, 245, 249, 250, 253, 253, 258, 259, 272, 273, 296, 297, 360, 361, 416, 417, 431, 432, 7840, 7929], .95, "DejaVuSans"]];

au.a0C = function (Y, R) {
  Y = Y.split(",");
  if (Y[0] == "")
    Y[0] = R[0];
  if (Y[1] == "")
    Y[1] = R[1];
  if (Y[3] == "")
    Y[3] = R[3];
  else
    Y[3] = parseInt(Y[3]);
  if (Y[4] == "")
    Y[4] = R[4];
  else
    Y[4] = parseInt(Y[4]);
  if (Y[2] == "")
    Y[2] = (Y[0] + "-" + Y[1]).replace(/\s/g, "");
  else if (Y[2] == "a")
    Y[2] = Y[0].replace(/\s/g, "");
  if (Y[5] == "")
    Y[5] = "fs/" + Y[2] + ".otf";
  else if (Y[5] == "a")
    Y[5] = "gf/" + Y[2] + ".otf";
  return Y
}

au.a3l = {
  ArialMT: "LiberationSans",
  "Arial-BoldMT": "LiberationSans-Bold",
  "Arial-ItalicMT": "LiberationSans-Italic",
  "Arial-BoldItalicMT": "LiberationSans-BoldItalic",
  TimesNewRomanPSMT: "LiberationSerif",
  "TimesNewRomanPS-BoldMT": "LiberationSerif-Bold",
  "TimesNewRomanPS-ItalicMT": "LiberationSerif-Italic",
  "TimesNewRomanPS-BoldItalicMT": "LiberationSerif-BoldItalic",
  CourierNewPSMT: "LiberationMono",
  "CourierNewPS-BoldMT": "LiberationMono-Bold",
  "CourierNewPS-ItalicMT": "LiberationMono-Italic",
  "CourierNewPS-BoldItalicMT": "LiberationMono-BoldItalic",
  Courier: "CourierPrime",
  TrebuchetMS: "SourceSansPro-Regular",
  "TrebuchetMS-Bold": "SourceSansPro-Semibold",
  "TrebuchetMS-Italic": "SourceSansPro-It",
  "TrebuchetMS-BoldItalic": "SourceSansPro-SemiboldIt",
  "Times-Roman": "LiberationSerif",
  Impact: "Anton-Regular",
  Calibri: "SourceSansPro-Regular",
  "Calibri-Italic": "SourceSansPro-It",
  "Calibri-Bold": "SourceSansPro-Bold",
  CalibriBold: "SourceSansPro-Bold",
  "Times-Roman": "LiberationSerif",
  "Times-Italic": "LiberationSerif-Italic",
  "Times-Bold": "LiberationSerif-Bold",
  "Helvetica-Bold": "LiberationSans-Bold",
  "HelveticaNeue-Thin": "Roboto-Thin",
  "HelveticaNeue-Light": "Roboto-Light",
  HelveticaNeue: "Roboto-Regular",
  "HelveticaNeue-Roman": "Roboto-Regular",
  "HelveticaNeue-Medium": "Roboto-Medium",
  "HelveticaNeue-Bold": "Roboto-Bold",
  "HelveticaNeue-BoldItalic": "Roboto-BoldItalic",
  "HelveticaNeue-Black": "Roboto-Black",
  "HelveticaNeue-Heavy": "Roboto-Black",
  "SFProText-Light": "Roboto-Light",
  "SFProText-Regular": "Roboto-Regular",
  "SFProText-Roman": "Roboto-Regular",
  "SFProText-Medium": "Roboto-Medium",
  "SFProText-Semibold": "Roboto-Medium",
  "SFProText-Bold": "Roboto-Bold",
  "SFProText-BoldItalic": "SFProText-BoldItalic",
  "SFProText-Black": "Roboto-Black",
  "SFProText-Heavy": "Roboto-Black",
  "SFProDisplay-Light": "Roboto-Light",
  "SFProDisplay-Regular": "Roboto-Regular",
  "SFProDisplay-Roman": "Roboto-Regular",
  "SFProDisplay-Medium": "Roboto-Medium",
  "SFProDisplay-Semibold": "Roboto-Medium",
  "SFProDisplay-Bold": "Roboto-Bold",
  "SFProDisplay-BoldItalic": "SFProDisplay-BoldItalic",
  "SFProDisplay-Black": "Roboto-Black",
  "SFProDisplay-Heavy": "Roboto-Black",
  "SFUIText-Light": "Roboto-Light",
  "SFUIText-Regular": "Roboto-Regular",
  "SFUIText-Roman": "Roboto-Regular",
  "SFUIText-Medium": "Roboto-Medium",
  "SFUIText-Semibold": "Roboto-Medium",
  "SFUIText-Bold": "Roboto-Bold",
  "SFUIText-BoldItalic": "SFUIText-BoldItalic",
  "SFUIText-Black": "Roboto-Black",
  "SFUIText-Heavy": "Roboto-Black",
  Verdana: "DejaVuSans",
  "Verdana-Bold": "DejaVuSans-Bold",
  "Verdana-Italic": "DejaVuSans-Oblique",
  "Verdana-BoldItalic": "DejaVuSans-BoldOblique",
  "MyriadPro-Regular": "PTSans-Regular",
  "MyriadPro-Bold": "PTSans-Bold",
  "MyriadPro-LightIt": "PTSans-Italic",
  "MyriadPro-Semibold": "PTSans-Bold",
  "MyriadPro-BlackCond": "PTSans-NarrowBold",
  Cambria: "Oranienbaum-Regular",
  Georgia: "CharisSIL",
  "Georgia-Bold": "CharisSIL-Bold",
  "Georgia-Italic": "CharisSIL-Italic",
  "Georgia-BoldItalic": "CharisSIL-BoldItalic",
  "AGaramondPro-Regular": "EBGaramond08-Regular",
  "AGaramondPro-Bold": "EBGaramond08-Bold",
  "AGaramondPro-Italic": "EBGaramond08-Italic",
  Garamond: "EBGaramond08-Regular",
  FontAwesome: "FontAwesome5FreeSolid",
  "ProximaNova-Regular": "Metropolis-Regular",
  "ProximaNova-Semibold": "Metropolis-SemiBold",
  "ProximaNova-Light": "Metropolis-Light",
  BellMT: "GalatiaSIL",
  PalatinoLinotype: "TeXGyrePagella-Regular",
  "PalatinoLinotype-Bold": "TeXGyrePagella-Bold",
  "PalatinoLinotype-Italic": "TeXGyrePagella-Italic",
  "PalatinoLinotype-BoldItalic": "TeXGyrePagella-BoldItalic",
  "": ""
}

au.prototype.f9 = function () {
  if (FNTS.map == null) {
    var Y = FNTS.list
      , R = [];
    for (var x = 0; x < Y.length; x++) {
      R[x] = au.a0C(Y[x], R[x - 1]);
      R[x].wt = x;
      this.k1(R[x])
    }
  }
  return FNTS.map
}
