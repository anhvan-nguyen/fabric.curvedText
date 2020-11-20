var em = {};
    em.qO = 0;
    em.eU = {};
    em.bZ = function(Y) {
        var R = LNG.tables
          , V = R[Y];
        if (typeof V == "string") {
            V = R[Y] = em.Sx(V)
        }
        return V
    }
    ;
    em.Sx = function(Y) {
        var R = []
          , V = 0
          , E = 0
          , r = []
          , K = Y.length;
        while (E != K) {
            var J = Y[E];
            if (J == "[") {
                R.push(r);
                r = [];
                E = V = E + 1
            } else if (J == "]") {
                r.push(V == E ? null : Y.substring(V, E));
                var t = r;
                r = R.pop();
                r.push(t);
                E = V = E + 1
            } else if (J == ";") {
                if (Y[E - 1] != "]")
                    r.push(V == E ? null : Y.substring(V, E));
                E = V = E + 1
            } else
                E++
        }
        return r
    }
    ;
    em.get = function(Y) {
        if (typeof Y == "string")
            return Y;
        var R = typeof Y[0];
        if (R == "number") {
            for (var x = 1; x < Y.length; x++)
                if (typeof Y[x] != "number") {
                    console.log(Y);
                    throw "e"
                }
            return em.a7J(Y)
        }
        var V = em.get(Y[0]);
        for (var x = 1; x < Y.length; x++) {
            var E = em.get(Y[x])
              , r = V.indexOf("VAR" + (x - 1));
            V = V.slice(0, r) + E + V.slice(r + 4)
        }
        return V
    }
    ;
    em.a7J = function(Y) {
        var R = JSON.stringify(Y);
        if (em.eU[R] != null)
            return em.eU[R];
        var V = em.bZ(0)
          , E = em.bZ(em.qO)
          , r = em.sI(Y, E);
        if (r == null)
            r = em.sI(Y, V);
        return r
    }
    ;
    em.sI = function(Y, R) {
        for (var x = 0; x < Y.length; x++) {
            R = R[Y[x]];
            if (R == null)
                return null;
            else if (typeof R == "string")
                break
        }
        return R.split("::")[0]
    }
    ;
    em.alZ = function() {
        var Y = function(V, E) {
            var r = V.code
              , K = E.code;
            if (r == "en")
                return -1;
            if (K == "en")
                return 1;
            var J = navigator.languages
              , t = J.indexOf(r) != -1
              , C = J.indexOf(K) != -1;
            if (t && C)
                return r > K ? 1 : -1;
            if (t)
                return -1;
            if (C)
                return 1;
            return r > K ? 1 : -1
        }
          , R = LNG.langs.slice(0);
        R.sort(Y);
        return R
    }
    ;
    em.abi = function(Y) {
        em.qO = Y
    }
    ;
    em.DD = function(Y) {
        for (var x = 0; x < LNG.langs.length; x++)
            if (LNG.langs[x].code == Y)
                em.qO = x
    }
    ;
    em.XF = function() {
        return LNG.langs[em.qO].code
    }
    ;
    em.ajc = function(Y) {
        for (var x = 0; x < Y.length; x += 2)
            if (Y[x + 1].indexOf(">") == -1)
                em.eU[JSON.stringify(Y[x])] = Y[x + 1]
    }
    ;
    em.Ud = function(Y) {
        var R = -1
          , V = LNG.langs;
        for (var x = 0; x < V.length; x++)
            if (V[x].code == Y)
                R = x;
        return R
    }
    ;