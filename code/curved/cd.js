function cd(Y, R) {
  var V = bg.Re(Y), E, r, K = bg.ah(Y), C;
  if (Y.Curve)
      r = cd.bq(Y.Curve);
  if (V != 0) {
      E = new gE(K[0],K[1],K[2],K[3]);
      if (V == 2) {
          E.d = r[5] - r[4];
          E.b = 9999
      }
  }
  this.JT = [];
  this.G$ = [];
  this.ih = V;
  var J = this.agL = bg.mu(Y)
    , t = -1;
  for (var x = 0; x < J.length; x++) {
      var c = C
        , M = bg.Li(Y, x);
      if (M != t) {
          t = M;
          c = C = bg.a1b(Y, x)
      }
      var a = {
          pi: J.charAt(x),
          pT: c,
          Ng: null,
          mn: -1,
          Co: 0,
          scale: new gv(0,0),
          x9: 0,
          lineHeight: 0,
          Od: 0
      }
        , Q = Y.ResourceDict.FontSet[c.Font].Name
        , A = a.Ng = R.cH(Q, J.charCodeAt(x));
      a.scale.x = c.HorizontalScale == null ? 1 : c.HorizontalScale;
      a.scale.y = c.VerticalScale == null ? 1 : c.VerticalScale;
      var p = A["OS/2"]
        , v = A.hhea;
      if (c.FontCaps == 1 && a.pi != a.pi.toUpperCase()) {
          var W = p.sxHeight ? p.sxHeight / p.sTypoAscender : .76;
          a.scale.x *= W;
          a.scale.y *= W
      }
      var n = 1 / A.head.unitsPerEm * c.FontSize;
      if (c.FontBaseline == 1) {
          var W = Y.ResourceDict.SuperscriptSize;
          a.scale.x *= W;
          a.scale.y *= W;
          a.Co -= Y.ResourceDict.SuperscriptPosition * c.FontSize
      }
      if (c.FontBaseline == 2) {
          var W = Y.ResourceDict.SubscriptSize;
          a.scale.x *= W;
          a.scale.y *= W;
          a.Co += Y.ResourceDict.SubscriptPosition * c.FontSize
      }
      var $ = cd.x9(A, Q);
      a.x9 = $ * n;
      a.lineHeight = c.FontSize * 1.2;
      if (c.AutoLeading == !1)
          a.lineHeight = c.Leading;
      if (a.lineHeight == 0)
          a.lineHeight = .001;
      this.G$.push(a)
  }
  var G = this.JT
    , o = [0];
  for (var x = 0; x < Y.EngineDict.ParagraphRun.RunLengthArray.length; x++) {
      var B = new cd.Ws(Y,R,this.G$,x,E,o,V == 1 ? r : null);
      G.push(B)
  }
  if (V == 2) {
      var L = Y.Curve.Points
        , u = r[0]
        , y = r[1]
        , S = r[2]
        , X = r[3]
        , N = r[4]
        , k = r[5];
      for (var x = 0; x < G.length; x++)
          for (var d = 0; d < G[x].ZH.length; d++)
              if (!(x == 0 && d == 0))
                  G[x].ZH[d].Cg = !1;
      var B = G[0]
        , P = B.ZH[0];
      B.Cj.Fb(0, 0);
      P.Cj.Fb(0, 0);
      for (var d = P.start; d < P.end; d++) {
          var Z = B.R3[d]
            , s = Z.Cj.x;
          Z.Cj.x = 0;
          for (var _ = Z.$S; _ <= Z.Ce; _++) {
              var b = B.vE[_]
                , q = b.V.d / 2;
              b.Cj.x += s;
              var e = cd.a6t(u, (N + b.Cj.x + q) % X);
              b.Cj.x = e[0] - q * e[2];
              b.Cj.y = e[1] - q * e[3];
              b.I2 = Math.atan2(e[3], e[2])
          }
      }
  }
}
cd.x9 = function(Y, R) {
  var V = Y["OS/2"]
    , E = Y.hhea
    , r = 0
    , r = 0
    , K = [];
  K.push(V && V.sxHeight && R.toLowerCase().indexOf("capitals") != -1 ? V.sxHeight : 0);
  K.push(V && V.sCapHeight ? V.sCapHeight : 0);
  K.push(V && V.sTypoAscender ? V.sTypoAscender : 0);
  K.push(E.ascender ? E.ascender : 0);
  for (var J = 0; J < K.length; J++)
      if (K[J] != 0) {
          r = K[J];
          break
      }
  return r
}

cd.prototype.aY = function() {
  var Y = Infinity
    , R = Infinity
    , V = -Infinity
    , E = -Infinity;
  for (var x = 0; x < this.JT.length; x++) {
      var r = this.JT[x];
      for (var K = 0; K < r.ZH.length; K++) {
          var J = r.ZH[K];
          if (!J.Cg)
              break;
          for (var t = J.start; t < J.end; t++) {
              var C = r.R3[t];
              for (var c = C.$S; c <= C.Ce; c++) {
                  var M = r.vE[c]
                    , a = M.V
                    , Q = r.Cj.x + J.Cj.x + C.Cj.x + M.Cj.x
                    , A = r.Cj.y + J.Cj.y + C.Cj.y + M.Cj.y;
                  Y = Math.min(Y, Q + a.x);
                  R = Math.min(R, A + a.y);
                  V = Math.max(V, Q + a.x + a.d);
                  E = Math.max(E, A + a.y + a.b)
              }
          }
      }
  }
  return new gE(Y,R,V - Y,E - R)
}

cd.GV = function(Y) {
  return 19968 <= Y && Y <= 40959 || 12288 <= Y && Y <= 12543
}

cd.ajZ = function(Y, R, V, E, r, K, J) {
  var t = [K]
    , C = 0;
  for (var x = K; x < J; x++) {
      if (V[x] == null)
          console.log(x, K, J, V);
      var c = V[x].pi
        , M = c.charCodeAt(0);
      if (M == 32 || M == 9) {
          t.push(C, x, 1, x + 1);
          C = 0
      } else if (M == 3851) {
          t.push(C + 1, x + 1);
          C = 0
      } else if (cd.GV(M)) {
          t.push(C, x);
          C = 1
      } else if (x != K && V[x].Od != V[x - 1].Od) {
          t.push(C, x);
          C = 1
      } else
          C++
  }
  t.push(C);
  var a = [];
  for (var x = 0; x < t.length; x += 2) {
      var Q = t[x]
        , A = t[x + 1];
      if (A == 0)
          continue;
      a.push(new cd.a2m(Y,R,V,E,r,Q,A))
  }
  return a
}
// ;
cd.a5_ = function(Y, R, V, E, r, K, J) {
  var t = [0, R ? R.d : 1e9]
    , C = [];
  if (E) {
      var c = Y[K].x9
        , M = r + (r == 0 ? c : Y[K].lineHeight)
        , a = M - c * .9
        , Q = w.H.kL(E[0], a)
        , A = Q.length
        , p = w.H.kL(E[0], M)
        , v = p.length;
      if (A != 0 && v != 0) {
          var W = 0
            , n = 0;
          t = [];
          while (W < A && n < v) {
              var $ = Math.max(Q[W], p[n])
                , G = Q[W + 1]
                , o = p[n + 1]
                , B = Math.min(G, o);
              if ($ < B)
                  t.push($, B);
              if (G < o)
                  W += 2;
              else
                  n += 2
          }
      }
  }
  for (var L = 0; L < t.length; L += 2) {
      var u = t[L + 1] - t[L]
        , y = 0
        , S = K
        , X = R ? u - V.StartIndent - V.EndIndent - (K == 0 ? V.FirstLineIndent : 0) : Infinity;
      while (K != Y.length) {
          var N = Y[K]
            , k = y == 0 || (N.A1 || N.uI) || y + N.V.d < X;
          if (!k)
              break;
          y += N.V.d;
          K++
      }
      C.push(K - S)
  }
  J[0] = C;
  J[1] = t;
  J[2] = K
}

cd.anM = function(Y, R) {
  var V = Y.length
    , E = new Uint32Array(V)
    , r = new Uint8Array(V)
    , K = 0;
  for (var x = 0; x < V; x++) {
      r[x] = 0;
      var J = Y.charCodeAt(x);
      E[x] = J;
      if (J > K)
          K = J
  }
  if (K > 1424)
      r = cd.aao(E, R);
  return r
}

cd.Ws = function(Y, R, V, E, r, K, J) {
  this.R3 = [];
  this.ZH = [];
  this.Cj = new gv(0,0);
  this.vE = null;
  this.R3 = null;
  this.pT = bg.a60(Y, E);
  var t = this.pT
    , a = 0
    , p = ""
    , G = 0
    , o = 1
    , g = 0;
  if (E != 0) {
      var C = t.SpaceBefore;
      if (C != null)
          K[0] += C
  }
  var c = Y.EngineDict.ParagraphRun.RunLengthArray
    , M = c[E];
  for (var x = 0; x < E; x++)
      a += c[x];
  var Q = t._Direction ? t._Direction : 0;
  this.abj = a;
  var A = bg.mu(Y).slice(a, a + M);
  for (var v = 0; v < A.length; v++) {
      var W = A.charAt(v);
      p += V[a + v].pT.FontCaps == 0 ? W : W.toUpperCase()
  }
  A = p;
  var n = cd.anM(A, Q)
    , $ = []
    , B = n[x] & 1
    , L = V[a].Ng;
  V[a].Od = n[0];
  for (var x = 1; x < A.length; x++) {
      var W = V[a + x]
        , u = n[x];
      W.Od = u;
      if (u != B || W.Ng != L) {
          $.push(G, o);
          G = x;
          o = 1;
          B = u;
          L = W.Ng
      } else
          o++
  }
  $.push(G, o);
  var y = this.vE = [];
  for (var x = 0; x < $.length; x += 2) {
      var S = $[x]
        , X = $[x + 1]
        , N = (V[a + S].Od & 1) == 0
        , k = A.slice(S, S + X)
        , d = Typr.U.shapeHB(V[a + S].Ng, k, N)
        , P = []
        , _ = 0;
      for (var v = 0; v < d.length; v++) {
          var Z = d[v];
          P.push({
              l: Z.g,
              A6: Z.cl,
              Gt: Z.ax,
              nV: Z.ay,
              ws: Z.dx,
              FW: Z.dy
          })
      }
      d = P;
      var s = d.slice(0);
      if (!N)
          s.reverse();
      for (var v = 0; v < k.length; v++) {
          while (_ + 1 < s.length && s[_ + 1].A6 <= v) {
              _++
          }
          while (_ > 0 && s[_ - 1].A6 == v)
              _--;
          V[a + S + v].mn = y.length + (N ? _ : s.length - _ - 1)
      }
      for (var v = 0; v < d.length; v++) {
          y.push(d[v]);
          d[v].A6 += S;
          var W = V[a + d[v].A6];
          if (W.pi == "\n")
              d[v].Gt = 0;
          if (W.pi == "\t")
              d[v].Gt = W.Ng.head.unitsPerEm * 2
      }
  }
  var b = bg.yt(t)
    , q = this.R3 = cd.ajZ(Y, R, V, a, y, a, a + M)
    , e = this.ZH
    , F = -1
    , p = [null, null, 0];
  while (g < q.length) {
      cd.a5_(q, r, t, J, K[0], g, p);
      F++;
      var l = {
          start: g,
          end: 0,
          V: new gE,
          Cj: new gv(0,0),
          Cg: !0
      }
        , hE = 0
        , gN = 0;
      e.push(l);
      l.end = p[2];
      var i = l.end == q.length;
      function H(s, S, aQ) {
          var d3 = aQ - S >>> 1;
          for (var x = 0; x < d3; x++) {
              var b9 = s[S + x];
              s[S + x] = s[aQ - 1 - x];
              s[aQ - 1 - x] = b9
          }
      }
      for (var iP = 1; iP < 5; iP++) {
          var hq = -1;
          for (var x = l.start; x < l.end; x++) {
              var u = V[q[x].start].Od;
              if (hq == -1 && u >= iP)
                  hq = x;
              else if (hq != -1 && u < iP) {
                  H(q, hq, x);
                  hq = -1
              }
          }
          var iG = l.end;
          if (Q == 0 && q[iG - 1].A1)
              iG--;
          if (hq != -1)
              H(q, hq, iG)
      }
      var h = p[0]
        , dw = p[1]
        , hq = g
        , eK = g;
      for (var f9 = 0; f9 < h.length; f9++) {
          var gn = dw[f9 * 2 + 1] - dw[f9 * 2]
            , d$ = 0;
          hq = eK;
          eK += h[f9];
          var dJ = this.a4q(hq, eK, q, Q, r != null);
          if (r) {
              if (b == 1 || i && b == 4)
                  d$ = dJ[1] + (gn - dJ[0]);
              if (b == 2 || i && b == 5)
                  d$ = dJ[1] + (gn - dJ[0]) / 2;
              if (F == 0)
                  d$ += t.FirstLineIndent;
              d$ += t.StartIndent
          } else {
              if (b == 0)
                  d$ = t.StartIndent + t.FirstLineIndent;
              if (b == 1)
                  d$ = -dJ[0] - t.EndIndent;
              if (b == 2)
                  d$ = -dJ[0] / 2
          }
          d$ += dw[f9 * 2];
          if (r && b > 2 && (b == 6 || !i))
              this.a0P(hq, eK, q, gn, Q, d$);
          else {
              var br = d$;
              for (var x = hq; x < eK; x++) {
                  q[x].Cj.x = br;
                  br += q[x].V.d
              }
          }
      }
      g = l.end;
      for (var x = l.start; x < l.end; x++) {
          var aK = q[x].V.clone();
          aK.V8(q[x].Cj);
          l.V = l.V.ov(aK);
          hE = Math.max(hE, q[x].x9);
          gN = Math.max(gN, q[x].lineHeight)
      }
      l.Cj.y = F == 0 ? 0 : e[F - 1].Cj.y + gN;
      if (F == 0) {
          if (E == 0 && r)
              K[0] += hE;
          if (E != 0)
              K[0] += gN;
          this.Cj.y = K[0]
      } else
          K[0] += gN;
      if (r)
          l.Cg = this.Cj.y + l.Cj.y < r.y + r.b
  }
  var dL = t.SpaceAfter;
  if (dL != null)
      K[0] += dL
}

cd.Ws.prototype.a4q = function(Y, R, V, E, r) {
  var K = 0
    , J = 0;
  for (var x = Y; x < R; x++)
      K += V[x].V.d;
  if (r) {
      if (E == 0)
          for (var x = R - 1; x >= Y; x--)
              if (V[x].A1 || V[x].uI)
                  K -= V[x].V.d;
              else
                  break;
      if (E == 1)
          for (var x = Y; x < R; x++)
              if (V[x].A1 || V[x].uI) {
                  var t = V[x].V.d;
                  K -= t;
                  J -= t
              } else
                  break
  }
  return [K, J]
}

cd.a2m = function(Y, R, V, E, r, K, J) {
  this.UL = "";
  for (var x = 0; x < J; x++)
      this.UL += V[K + x].pi;
  this.A1 = J == 1 && (V[K].pi == " " || V[K].pi == "\t");
  this.uI = J == 1 && V[K].pi == "\n";
  this.start = K;
  this.end = K + J;
  this.V = new gE;
  this.Cj = new gv(0,0);
  this.x9 = 0;
  this.lineHeight = 0;
  var t = 0
    , C = 0;
  if (J == 0) {
      this.lineHeight = V[K].lineHeight;
      this.x9 = V[K].x9;
      this.V = new gE(0,-V[K].lineHeight,0,V[K].lineHeight)
  }
  var c = V[K].mn
    , M = V[K + J - 1].mn;
  if (M < c) {
      var a = c;
      c = M;
      M = a
  }
  while (M + 1 < r.length && r[M].A6 == r[M + 1].A6) {
      M++
  }
  this.$S = c;
  this.Ce = M;
  for (var Q = c; Q <= M; Q++) {
      var A = r[Q]
        , p = V[E + A.A6]
        , v = 1 / p.Ng.head.unitsPerEm * p.pT.FontSize
        , G = 0;
      if (!p.pT.AutoKerning)
          t += p.pT.Kerning * 2 * v * p.scale.x;
      var W = A.Gt * v * p.scale.x;
      A.Cj = new gv(t,0);
      A.I2 = 0;
      A.V = new gE(0,-p.lineHeight,W,p.lineHeight);
      var n = Typr.U.glyphToPath(p.Ng, A.l);
      A.path = {
          R: n.cmds,
          P: n.crds
      };
      var $ = A.V.clone();
      $.V8(A.Cj);
      if (p.pT.Tracking != null)
          G = p.pT.Tracking * .001 * p.pT.FontSize;
      if (p.pT.FauxBold == !0)
          G += .027 * p.pT.FontSize;
      t += W + G;
      if (J == 1 && (p.pi == " " || p.pi == "\t"))
          $.d += 2 * G;
      else if (J == 1 && p.pi != null && cd.GV(p.pi.charCodeAt(0)))
          $.d += G;
      this.V = this.V.ov($);
      this.x9 = Math.max(this.x9, p.x9);
      this.lineHeight = Math.max(this.lineHeight, p.lineHeight)
  }
}

cd.B8 = function() {
  if (cd.ua == 2)
      return !0;
  if (cd.ua == 1)
      return !1;
  cd.ua = 1;
  function Y() {
      fetch("code/external/fribidi.wasm").then(function(R) {
          return R.arrayBuffer()
      }).then(function(R) {
          return WebAssembly.instantiate(R)
      }).then(function(R) {
          var V = R.instance.exports
            , E = V.memory
            , J = 16
            , t = 256
            , C = 1;
          E.grow(400);
          var r = new Uint8Array(E.buffer)
            , K = new Uint32Array(E.buffer)
            , c = J | t
            , M = J | t | C;
          cd.aao = function(Q, A) {
              var p = Q.length
                , v = V.calloc(p * 4 + 4 + p * 4 + p * 4 + p, 1)
                , W = v + p * 4
                , n = W + 4
                , $ = n + p * 4
                , G = $ + p * 4;
              K.set(Q, v >>> 2);
              K[W >>> 2] = A == 0 ? c : M;
              V.fribidi_get_bidi_types(v, p, n);
              V.fribidi_get_bracket_types(v, p, n, $);
              V.fribidi_get_par_embedding_levels_ex(n, $, p, W, G);
              var o = r.slice(G, G + p);
              V.free(v);
              return o
          }
          ;
          cd.ua = 2;
          var a = new I(O.E.z,!0);
          a.data = {
              e: O.U.KZ,
              YL: "add",
              jR: fG.xM,
              oW: null
          };
          // au.lL.f(a)
      })
  }
  Typr.U.initHB("code/external/hb.wasm", Y);
  return !1
}
;