function createShader(gl,type,source){
    var shader = gl.createShader(type);
    gl.shaderSource(shader,source);
    gl.compileShader(shader);

    var success = gl.getShaderParameter(shader,gl.COMPILE_STATUS);
    if(success){
        return shader;
    }

    gl.deleteShader(shader);
}

function createProgram(gl,vertexShader,fragmentShader) {
    var program = gl.createProgram();
    gl.attachShader(program,vertexShader);
    gl.attachShader(program,fragmentShader);
    gl.linkProgram(program);

    var success = gl.getProgramParameter(program,gl.LINK_STATUS);
    if(success){
        console.log("编译成功",vertexShader,fragmentShader)
        return program;
    }
    new Error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

function resizeCanvasToDisplaySize(canvas,multiplier) {
    multiplier = multiplier || 1;
    var width = canvas.clientWidth * multiplier | 0;
    var height = canvas.clientHeight * multiplier | 0;
    if(canvas.width !== width || canvas.height !== height){
        canvas.width = width;
        canvas.height = height;
        return true;
    }
    return false;
}