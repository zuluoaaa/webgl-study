var matrixTransform = {
    //反转Y轴
    projection:function (w,h) {
        return[
            2/w,0,0,
            0,-2/h,0,
            -1,1,1
        ]
    },
    identity:function () {
        return[
            1,0,0,
            0,1,0,
            0,0,1
        ]
    },
    translation:function (tx,ty) {
        return[
            1,0,0,
            0,1,0,
            tx,ty,1
        ]
    },
    rotation:function (angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        return[
            c,-s,0,
            s,c,0,
            0,0,1
        ]
    },
    scaling:function (sx,sy) {
        return[
            sx,0,0,
            0,sy,0,
            0,0,1
        ]
    },
    //3x3 matrix
    multiply:function (a,b) {
        return[
            a[0]*b[0]+a[1]*b[3]+a[2]*b[6],
            a[0]*b[1]+a[1]*b[4]+a[2]*b[7],
            a[0]*b[2]+a[1]*b[5]+a[2]*b[8],

            a[3]*b[0]+a[4]*b[3]+a[5]*b[6],
            a[3]*b[1]+a[4]*b[4]+a[5]*b[7],
            a[3]*b[2]+a[4]*b[5]+a[5]*b[8],

            a[6]*b[0]+a[7]*b[3]+a[8]*b[6],
            a[6]*b[1]+a[7]*b[4]+a[8]*b[7],
            a[6]*b[2]+a[7]*b[5]+a[8]*b[8],
        ]
    },

    translate:function (m,tx,ty) {
        return this.multiply(this.translation(tx,ty),m);
    },
    rotate:function (m,angleInRadians) {
        return this.multiply(this.rotation(angleInRadians),m);
    },
    scale:function (m,sx,sy) {
        return this.multiply(this.scaling(sx,sy),m);
    }
}

