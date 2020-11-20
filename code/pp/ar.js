var ar = {
  ms: 0,
  m$: {
      expires_at: 0
  },
  PC: []
};
ar.eY = function(Y) {
  if (Y)
      ar.PC.splice(0, 0, Y);
  if (ar.ms == 1)
      return;
  if (ar.m$.expires_at > Date.now() * .001 + 30) {
      while (ar.PC.length > 0)
          ar.PC.pop()()
  } else {
      if (ar.ms == 0)
          ar.ms = 1;
      gapi.auth.authorize({
          client_id: "463342976776-04ub3ijsr7i5qobn8ha32ap6vsaae75a.apps.googleusercontent.com",
          scope: ["https://www.googleapis.com/auth/drive.install", "https://www.googleapis.com/auth/drive.file"].join(" "),
          immediate: ar.ms == 2 ? !1 : !0
      }, ar.a6C)
  }
}
;
ar.a6C = function(Y) {
  if (Y && !Y.error) {
      ar.m$ = Y;
      ar.ms = !1;
      ar.eY()
  } else if (ar.ms == 1) {
      ar.ms = 2;
      ar.eY()
  } else
      alert("Error: " + Y.error)
}
;
ar.Jn = function() {
  return "access_token=" + ar.m$.access_token + "&token_type=" + ar.m$.token_type
}
;
ar.o2 = function() {
  return ar.m$.token_type + " " + ar.m$.access_token
}
;