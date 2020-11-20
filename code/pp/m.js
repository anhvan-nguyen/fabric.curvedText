function m() {
  this.vm = {};
  this.b1 = 0;
  this.Tq();
  window.__kb = this
}
m.uB = null;
m.prototype.Tq = function() {
  var Y = navigator.keyboard;
  if (Y && window.top == window.self)
      Y.getLayoutMap().then(function(R) {
          m.uB = R
      })
}
;
m.prototype.reset = function() {
  this.vm = {};
  this.b1 = 0
}
;
m.prototype.Yy = function(Y) {
  this.b1++;
  this.vm[Y] = !0
}
;
m.prototype.yc = function(Y) {
  this.b1--;
  delete this.vm[Y];
  if (this.b1 <= 0 || m.fz(Y, m.OW))
      this.reset()
}
;
m.prototype.i = function(Y) {
  for (var x = 0; x < Y.ww.length; x++)
      if (this.vm[Y.ww[x]])
          return !0;
  return !1
}
;
m.prototype.ro = function() {
  var Y = this
    , R = Y.i(m.Ms) ? 10 : 1
    , V = 0
    , E = 0;
  if (Y.i(m.uZ))
      V = -R;
  if (Y.i(m.bs))
      V = R;
  if (Y.i(m.Rz))
      E = -R;
  if (Y.i(m.Ap))
      E = R;
  return new gv(V,E)
}
;
m.prototype.K0 = function() {
  var Y = this
    , R = m.B_;
  for (var x = 0; x < 10; x++)
      if (Y.i(R[x]))
          return x;
  return -1
}
;
m.fz = function(Y, R) {
  return R.ww.indexOf(Y) != -1
}
;
m.x0 = function(Y) {
  var R = Y.code
    , r = !1;
  if (R == "")
      return !1;
  var V = m.fz
    , E = m.B_.concat([m.dV, m.Pa, m.OF, m.$G]);
  for (var x = 0; x < E.length; x++)
      if (V(R, E[x]))
          r = !0;
  if (Y.altKey && !Y.shiftKey && !Y.ctrlKey && r)
      return !1;
  return m.Q0.indexOf(R) == -1 || Y.shiftKey && (R == "F5" || R == "F6")
}
;
m.a63 = function(Y) {
  var R = Y.code;
  return R != "" && (m.Q0.indexOf(R) == -1 || Y.shiftKey && (R == "F5" || R == "F6"))
}
;
m.d4 = function(Y) {
  if (typeof Y == "string")
      return Y;
  var R = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  if (Y == null)
      return "";
  var V = [];
  for (var x = 0; x < Y.length; x++) {
      var E = Y[x].hq ? Y[x].hq : Y[x];
      if (R && Y[x].HO)
          E = Y[x].HO;
      V.push(E)
  }
  if (R || V.length == 1)
      return V.join(" + ");
  else {
      var r = V.pop();
      return V.join("+") + " + " + r
  }
}
;
m.Q0 = "ZoomToggle BrightnessDown BrightnessUp AudioVolumeMute AudioVolumeDown AudioVolumeUp LaunchApplication1 F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 Enter Shift Escape KeyV".split(" ");
m.UD = function(Y) {
  var R = Y.code
    , V = m.uB;
  if (V && V.get(R)) {
      var E = {
          "+": "NumpadAdd",
          "-": "NumpadSubtract",
          ".": "Period"
      }
        , r = V.get(R).toLowerCase()
        , K = r.charCodeAt(0);
      if (97 <= K && K <= 122) {
          var J = "Key" + r.toUpperCase();
          R = J
      } else if (E[r])
          R = E[r];
      return R
  }
  var E = {
      "+": "NumpadAdd",
      "-": "NumpadSubtract",
      ".": "Period"
  }
    , r = Y.key.toLowerCase()
    , K = r.charCodeAt(0);
  if (r.length == 1) {
      if (97 <= K && K <= 122) {
          var J = "Key" + r.toUpperCase();
          R = J
      } else if (E[r])
          R = E[r]
  }
  return R
}
;
m.ab0 = {
  nm: "No Touch",
  ww: ["NoTouch"]
};
m.ZI = {
  hq: "Enter",
  ww: ["Enter", "NumpadEnter"]
};
m.Ms = {
  hq: "Shift",
  HO: "\u21E7",
  ww: ["ShiftLeft", "ShiftRight"]
};
m.OW = {
  hq: "Meta",
  ww: ["MetaLeft", "MetaRight", "OSLeft", "OSRight"]
};
m.sV = {
  hq: "Ctrl",
  HO: "\u2318",
  ww: "ControlLeft ControlRight MetaLeft MetaRight OSLeft OSRight".split(" ")
};
m.yx = {
  hq: "Alt",
  HO: "\u2325",
  ww: ["AltLeft", "AltRight"]
};
m.a20 = {
  hq: "CtrlOrAlt",
  ww: m.sV.ww.concat(m.yx.ww)
};
m.TP = {
  hq: "Escape",
  ww: ["Escape"]
};
m.dL = {
  hq: "Space",
  ww: ["Space"]
};
m.SA = {
  hq: "Tab",
  ww: ["Tab"]
};
m.anE = {
  hq: "Home",
  ww: ["Home"]
};
m.aga = {
  hq: "End",
  ww: ["End"]
};
m.uZ = {
  hq: "Left",
  ww: ["ArrowLeft"]
};
m.Rz = {
  hq: "Up",
  ww: ["ArrowUp"]
};
m.bs = {
  hq: "Right",
  ww: ["ArrowRight"]
};
m.Ap = {
  hq: "Down",
  ww: ["ArrowDown"]
};
m.dV = {
  hq: "+",
  ww: ["NumpadAdd", "Equal"]
};
m.Pa = {
  hq: "-",
  ww: ["NumpadSubtract", "Minus", "Slash"]
};
m.Wc = {
  hq: ";",
  ww: ["Semicolon"]
};
m.ajo = {
  hq: "Dead",
  ww: ["Dead"]
};
m.ajD = {
  hq: "=",
  ww: ["Equal"]
};
m.dm = {
  hq: "Backspace",
  ww: ["Backspace"]
};
m.pl = {
  hq: "Delete",
  ww: ["Delete"]
};
m.ajC = {
  hq: "Backslash",
  ww: ["Backslash", "IntlBackslash"]
};
m.akE = {
  hq: "Backquote",
  ww: ["Backquote"]
};
m.OF = {
  hq: "[",
  ww: ["BracketLeft"]
};
m.$G = {
  hq: "]",
  ww: ["BracketRight"]
};
m.Q3 = {
  hq: ".",
  ww: ["Period"]
};
m.aa5 = {
  hq: ",",
  ww: ["Comma"]
};
m.XI = {
  hq: "'",
  ww: ["Quote"]
};
m.U = {
  hq: "A",
  ww: ["KeyA"]
};
m.Np = {
  hq: "B",
  ww: ["KeyB"]
};
m.r2 = {
  hq: "C",
  ww: ["KeyC"]
};
m.cg = {
  hq: "D",
  ww: ["KeyD"]
};
m.E = {
  hq: "E",
  ww: ["KeyE"]
};
m.lx = {
  hq: "F",
  ww: ["KeyF"]
};
m.dx = {
  hq: "G",
  ww: ["KeyG"]
};
m.$m = {
  hq: "H",
  ww: ["KeyH"]
};
m.I9 = {
  hq: "I",
  ww: ["KeyI"]
};
m.El = {
  hq: "J",
  ww: ["KeyJ"]
};
m.i1 = {
  hq: "K",
  ww: ["KeyK"]
};
m.Nz = {
  hq: "L",
  ww: ["KeyL"]
};
m.h$ = {
  hq: "M",
  ww: ["KeyM"]
};
m.rD = {
  hq: "N",
  ww: ["KeyN"]
};
m.tw = {
  hq: "O",
  ww: ["KeyO"]
};
m.c1 = {
  hq: "P",
  ww: ["KeyP"]
};
m.TW = {
  hq: "Q",
  ww: ["KeyQ"]
};
m.yg = {
  hq: "R",
  ww: ["KeyR"]
};
m.xG = {
  hq: "S",
  ww: ["KeyS"]
};
m.A = {
  hq: "T",
  ww: ["KeyT"]
};
m.$F = {
  hq: "U",
  ww: ["KeyU"]
};
m._u = {
  hq: "V",
  ww: ["KeyV"]
};
m.si = {
  hq: "W",
  ww: ["KeyW"]
};
m.bk = {
  hq: "X",
  ww: ["KeyX"]
};
m.aaV = {
  hq: "Y",
  ww: ["KeyY"]
};
m.hs = {
  hq: "Z",
  ww: ["KeyZ"]
};
m.IM = {
  hq: "0",
  ww: ["Numpad0", "Digit0"]
};
m.CJ = {
  hq: "1",
  ww: ["Numpad1", "Digit1"]
};
m.a0M = {
  hq: "2",
  ww: ["Numpad2", "Digit2"]
};
m.al3 = {
  hq: "3",
  ww: ["Numpad3", "Digit3"]
};
m.a7s = {
  hq: "4",
  ww: ["Numpad4", "Digit4"]
};
m.a5Q = {
  hq: "5",
  ww: ["Numpad5", "Digit5"]
};
m.a86 = {
  hq: "6",
  ww: ["Numpad6", "Digit6"]
};
m.af7 = {
  hq: "7",
  ww: ["Numpad7", "Digit7"]
};
m.ado = {
  hq: "8",
  ww: ["Numpad8", "Digit8"]
};
m.agk = {
  hq: "9",
  ww: ["Numpad9", "Digit9"]
};
m.B_ = [m.IM, m.CJ, m.a0M, m.al3, m.a7s, m.a5Q, m.a86, m.af7, m.ado, m.agk];
m.a1O = {
  hq: "F1",
  ww: ["F1"]
};
m.abF = {
  hq: "F2",
  ww: ["F2"]
};
m.am_ = {
  hq: "F3",
  ww: ["F3"]
};
m.a4C = {
  hq: "FF",
  ww: ["F4"]
};
m.eb = {
  hq: "F5",
  ww: ["F5"]
};
m.ag0 = {
  hq: "F6",
  ww: ["F6"]
};
m.ab5 = {
  hq: "F7",
  ww: ["F7"]
};
m.a28 = {
  hq: "F8",
  ww: ["F8"]
};
m.ag1 = {
  hq: "F9",
  ww: ["F9"]
};
m.alP = {
  hq: "F10",
  ww: ["F10"]
};
m.a7I = {
  hq: "F11",
  ww: ["F11"]
};
m.a67 = {
  hq: "F12",
  ww: ["F12"]
};