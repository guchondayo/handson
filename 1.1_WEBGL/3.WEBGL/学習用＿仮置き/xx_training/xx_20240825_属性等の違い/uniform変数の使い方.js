// ☆uniform変数を使って共通の計算を行うことができます。とは何なのか？
    // ⇒頂点1にも頂点2にも頂点3にも共通の掛け算ができますよ。
    // ユニホームが１００だったら
    // const vertexData = new Float32Array([
    //     // x, y, z, r, g, b
    //     -1.0, -1.0, 0.0, 1.0, 0.0, 0.0, // 頂点1: 赤　X100
    //      1.0, -1.0, 0.0, 0.0, 1.0, 0.0, // 頂点2: 緑　X100
    //      0.0,  1.0, 0.0, 0.0, 0.0, 1.0  // 頂点3: 青　X100
    // ]);
    // ☆書き方
//    1.シェーダから変数を取得してみる
        const matrix = gl.getUniformLocation(program, 'matrix')
//    2.値を作る（変数か配列になります）
        const array = new Float32Array([
            1.0,0.0,0.0,0.0,
            0.0,1.0,0.0,0.0,
            0.0,0.0,1.0,0.0,
            0.0,0.0,0.0,1.0,
        ])
        // または glMatrix ライブラリを使って単位行列を作成
        const mat = mat4.create();  // mat4.create() は単位行列を作成する
//    3.値と変数をマージする
        gl.uniformMatrix4fv(matrixLocation, false, matrix);


☆ここがいちばんおぼえなくちゃいけない場所になります
1. スカラー値（単一の値）
    gl.uniform1f(location, value): float 型のスカラー値を設定
    gl.uniform1i(location, value): int 型のスカラー値を設定
    gl.uniform1ui(location, value): unsigned int 型のスカラー値を設定
2. ベクトル（複数の値からなる）
    gl.uniform2f(location, x, y): vec2 型の2つの float 値を設定
    gl.uniform3f(location, x, y, z): vec3 型の3つの float 値を設定
    gl.uniform4f(location, x, y, z, w): vec4 型の4つの float 値を設定
3. 行列（2次元以上の配列）
    gl.uniformMatrix2fv(location, transpose, value): mat2 型の2x2行列を設定
    gl.uniformMatrix3fv(location, transpose, value): mat3 型の3x3行列を設定
    gl.uniformMatrix4fv(location, transpose, value): mat4 型の4x4行列を設定
transpose: 行列を転置するかどうか（通常は false）
4. サンプラー（テクスチャのサンプラー）
gl.uniform1i(location, value): テクスチャユニットのインデックスを設定（サンプラーは通常 int 型として扱います）
