var eM = {
  RS: 0,
  js: null,
  bC: null,
  ea: null,
  Gr: null,
  cu: null,
  Qb: !0,
  Dv: 0,
  uR: !1
}
, cL = 0;
eM.Lv = function() {
  var Y = O.Wf(24) ? " " : ""
    , R = O._2[O.SJ("Uu," + Y)];
  R = R[O.SJ(Y + "$/")];
  return eM.wn() != null && eM.wn()[O.MA("!&|'&50")] * 50 > R() / 20
}
;
eM.Td = function() {
  return eM.ajy() != null
}
;
eM.wn = function() {
  return eM.cu
}
;
eM.ed = function(Y) {
  window.addEventListener("message", eM.aj6, !1);
  setInterval(eM.oC, 5e3);
  if (eM.Td()) {
      eM.js = Y;
      eM.$P()
  } else
      setTimeout(Y, 1)
}
;
eM.oC = function() {
  if (eM.Td() && eM.uR) {
      eM.fn(eM.vU());
      eM.uR = !1
  }
}
;
eM.OU = function(Y) {
  eM.js = Y;
  var R = "https://www.photopea.com/papi/login.php?redirect=" + encodeURIComponent(window.location.href);
  eM.ea = window.open(R, "_blank")
}
;
eM.a2u = function() {
  localStorage.removeItem(eM.RS + "_uid");
  localStorage.removeItem(eM.RS + "_provider");
  localStorage.removeItem(eM.RS + "_token");
  eM.cu = null
}
;
eM.aj6 = function(Y) {
  if (Y.data instanceof ArrayBuffer || Y.data instanceof Object)
      return;
  if (Y.data.charAt(0) != "{")
      return;
  var R = JSON.parse(Y.data);
  if (R.prms == null)
      return;
  var V = R.prms.split(",");
  if (V[0] == "papi_logged_in") {
      localStorage[eM.RS + "_uid"] = V[1];
      eM.Rr(V[2]);
      localStorage[eM.RS + "_provider"] = V[3];
      eM.ea.close();
      eM.$P()
  }
  if (V[0] == "payment_complete") {
      eM.Gr.close();
      eM.$P()
  }
}
;
eM.ajy = function() {
  var Y = localStorage[eM.RS + "_token"];
  if (Y != null && Date.now() * .001 + 10 < parseInt(Y.split("-")[0]))
      return Y;
  return null
}
;
eM.Rr = function(Y) {
  var R = localStorage[eM.RS + "_token"];
  if (R != null && parseInt(Y.split("-")[0]) < parseInt(R.split("-")[0]))
      return;
  localStorage[eM.RS + "_token"] = Y;
  clearTimeout(eM.Dv);
  eM.Dv = setTimeout(eM.anq, Math.min(1e9, parseInt(Y.split("-")[0]) * 1e3 - Date.now() - 20 * 1e3))
}
;
eM.anq = function() {
  var Y = new XMLHttpRequest;
  Y.open("POST", "https://www.photopea.com/papi/record_new.php", !0);
  Y.onload = eM.akx;
  var R = eM.TO(0) + "&read=2";
  Y.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  Y.send(R)
}
;
eM.$P = function() {
  var Y = new XMLHttpRequest;
  Y.open("POST", "https://www.photopea.com/papi/record_new.php", !0);
  Y.onload = eM.ajV;
  var R = eM.TO(0) + "&read=1";
  Y.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  Y.send(R)
}
;
eM.fn = function(Y) {
  var R = new XMLHttpRequest;
  R.open("POST", "https://www.photopea.com/papi/record_new.php", !0);
  R.onload = eM.afm;
  var V = eM.TO(0) + "&read=0&score=" + (Y.tpl ? 1 : 0) + "&spublic=" + eM.Qb + "&record=" + encodeURIComponent(JSON.stringify(Y));
  R.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  R.send(V)
}
;
eM.ajV = function(Y) {
  var R = JSON.parse(Y.target.response);
  if (R.error) {} else {
      eM.cu = R.user;
      var V = eM.vU()
        , E = R.record;
      if (R.record) {
          eM.Qb = R.spublic;
          eM.lJ(E)
      } else if (V)
          eM.fn(V)
  }
  eM.Rr(R.token);
  if (eM.js) {
      eM.js();
      eM.js = null
  }
  if (eM.bC) {
      eM.bC();
      eM.bC = null
  }
}
;
eM.akx = function(Y) {
  var R = JSON.parse(Y.target.response);
  eM.Rr(R.token)
}
;
eM.afm = function(Y) {
  var R = JSON.parse(Y.target.response);
  eM.Rr(R.token);
  if (eM.bC)
      eM.$P()
}
;
eM.TO = function(Y) {
  return "app=" + Y + "&uid=" + localStorage[eM.RS + "_uid"] + "&token=" + localStorage[eM.RS + "_token"]
}
;
eM.nb = function() {
  return eM.vU()
}
;
eM.Fy = function(Y, R) {
  eM.lJ(Y);
  eM.uR = !0;
  if (R) {
      eM.bC = R;
      eM.oC()
  }
}
;
eM.vU = function() {
  var Y = localStorage[eM.RS + "_stateLocal"], R;
  if (Y == null)
      return null;
  try {
      R = JSON.parse(Y)
  } catch (em) {
      return null
  }
  return R
}
;
eM.lJ = function(Y) {
  var R = JSON.stringify(Y);
  localStorage[eM.RS + "_stateLocal"] = R
}
;
eM.order = function(Y, R, V) {
  eM.js = V;
  var E = "https://www.photopea.com/papi/order.php?ptype=" + R + "&param=" + Y + "&uid=" + localStorage[eM.RS + "_uid"] + "&token=" + localStorage[eM.RS + "_token"];
  eM.Gr = window.open(E, "_blank")
}
;
eM.amc = function(Y, R) {
  eM.js = R;
  var V = "https://www.photopea.com/papi/insertKey.php?key=" + Y + "&uid=" + localStorage[eM.RS + "_uid"] + "&token=" + localStorage[eM.RS + "_token"];
  eM.Gr = window.open(V, "_blank")
}
;