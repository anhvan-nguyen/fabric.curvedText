function b3() {}
    b3.xz = function(Y, R, V) {
        var E = f.hy(Y, R);
        R += 2;
        var r = {};
        r.j$ = f.hy(Y, R) == 1;
        R += 2;
        r.l9 = [];
        for (var x = 0; x < 10; x++) {
            var K = [];
            r.l9.push(K);
            for (var J = 0; J < 4; J++)
                K.push(f.Y3(Y, R + J * 2));
            R += 8
        }
        var t = h2.WL("selc");
        t.Mthd.v.CrcM = r.j$ ? "Absl" : "Rltv";
        for (var x = 1; x < 10; x++)
            b3.FZ(t, x - 1, r.l9[x]);
        return t
    }
    ;
    b3.jf = "Rds Ylws Grns Cyns Bls Mgnt Whts Ntrl Blks".split(" ");
    b3.ZN = function(Y, x) {
        var R = ["Cmps", "Rd", "Grn", "Bl"]
          , V = {
            t: "obj ",
            v: [{
                t: "Enmr",
                v: {
                    classID: "Chnl",
                    typeID: "Chnl",
                    enum: R[x]
                }
            }]
        };
        return {
            classID: Y,
            Chnl: V
        }
    }
    ;
    b3.xk = function(Y, R) {
        var V = b3.jf;
        for (var x = 0; x < Y.length; x++) {
            var E = Y[x].v
              , r = V.indexOf(E.Clrs.v.Clrs);
            if (r == R)
                return x
        }
        return -1
    }
    ;
    b3.FZ = function(Y, R, V) {
        var E = ["Cyn", "Mgnt", "Ylw", "Blck"]
          , r = {
            classID: "ClrC",
            Clrs: {
                t: "enum",
                v: {
                    Clrs: b3.jf[R]
                }
            }
        };
        for (var K = 0; K < 4; K++)
            r[E[K]] = {
                t: "UntF",
                v: {
                    type: "#Prc",
                    val: V[K]
                }
            };
        r = {
            t: "Objc",
            v: r
        };
        var J = Y.ClrC.v
          , t = b3.xk(J, R);
        if (t == -1)
            J.push(r);
        else
            J[t] = r
    }
    ;
    b3.k3 = function(Y, R) {
        var V = [0, 0, 0, 0]
          , E = Y.ClrC.v
          , r = b3.xk(E, R);
        if (r == -1)
            return V;
        var K = ["Cyn", "Mgnt", "Ylw", "Blck"];
        for (var x = 0; x < 4; x++)
            if (E[r].v[K[x]])
                V[x] = E[r].v[K[x]].v.val;
        return V
    }
    ;
    b3.U_ = function(Y, R, V) {
        var E = {
            j$: V.Mthd.v.CrcM == "Absl",
            l9: [[0, 0, 0, 0]]
        };
        for (var x = 0; x < 9; x++)
            E.l9.push(b3.k3(V, x));
        Y.ZK(R, 84);
        f.Yk(Y.data, R, 1);
        R += 2;
        f.Yk(Y.data, R, E.j$ ? 1 : 0);
        R += 2;
        for (var x = 0; x < 10; x++) {
            var r = E.l9[x];
            for (var K = 0; K < 4; K++)
                f.l7(Y.data, R + K * 2, r[K]);
            R += 8
        }
        return 84
    }
    ;