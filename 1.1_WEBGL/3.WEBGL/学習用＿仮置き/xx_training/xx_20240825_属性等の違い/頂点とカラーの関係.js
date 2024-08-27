// ＊バッファの基準
// 1.最低が:-1.0,-1.0,-1.0
// 2.最高が: 1.0, 1.0, 1.0
// ＊小数点は？
// OK
// 0.0000000000000001などもOK！
const firstVertexArray = new Float32Array([
    1.0,1.0,1.0
]);
const secondVertexArray = new Float32Array([
    -1.0,-1.0,-1.0
]);
const thirdVertexArray = new Float32Array([
    0.000001,0.000001,0.000001
]);

const firstColorArray = new Float32Array([
    1.0,1.0,1.0
]);
const secondColorArray = new Float32Array([
    1.0,1.0,1.0
]);

// 1.まず1番目の頂点を設定して１番目のカラーを設定する
// 2.次に1番目の頂点を変えず設定して2番目のカラーを設定する
// 3.次に２番目の頂点を変更を設定して2番目のカラーをそのまま設定する
// 4.最後に３番目に変更して頂点も３番目に変更する

// ☆最初の頂点を維持しながらカラーバッファを変える場合
// 頂点バッファを設定: 頂点バッファを一度設定し、その後は変更しません。
// カラーバッファを変更: カラーバッファをバインドし、新しいカラー情報を渡します。


// ☆カラーバッファを維持しながら頂点を変更する場合。
// カラーバッファを一度設定: カラーバッファを設定し、その後は変更しません。
// 頂点バッファを変更: 頂点バッファをバインドし、新しい頂点情報を渡します。

// イメージとしては、電光掲示板があって
// ～ただいまの頂点バッファ―はA、カラーバッファはBをつかってます。。～

// つまり頂点もカラーも変更するものだけ変えましょう。
const firstBuffer = gl.createBuffer();
const secondBBuffer = gl.createBuffer();
const thirdBuffer = gl.createBuffer();

const firstColorBuffer = gl.createBuffer();
const secondColorBuffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER,firstBuffer)
gl.bufferData(gl.ARRAY_BUFFER,firstVertexArray, STATIC_DRAW);
gl.bindBuffer(gl.ARRAY_BUFFER,firstColorBuffer)
gl.bufferData(gl.ARRAY_BUFFER,firstColorArray, STATIC_DRAW);


gl.bindBuffer(gl.ARRAY_BUFFER,firstBuffer)
gl.bufferData(gl.ARRAY_BUFFER,firstVertexArray, STATIC_DRAW);
gl.bindBuffer(gl.ARRAY_BUFFER,secondColorBuffer)
gl.bufferData(gl.ARRAY_BUFFER,secondColorArray, STATIC_DRAW);

// ＊＊＊＊＊超重要！！！！＊＊＊＊＊
// 1.頂点座標を変更した場合⇒もう一度属性の設定をし直すこと
    const a_position = gl.getAttribLocation(shaderProgram, 'a_position');
    gl.vertexAttribPointer(a_position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_position);
// 2.カラー座標を変更した場合⇒
    gl.vertexAttribPointer(a_velocity, 3, gl.FLOAT, false, 0, 0);
// 頂点属性の再設定
// ＊＊＊vertexAttribPointerは属性にかかわらずすべて変更するよって覚えればいいか＊＊＊
