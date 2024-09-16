データ作成(toMakeBufferArray)
const numParticles = 1000;
const vertexBuffer = [];
const colorBuffer = [];
let x = 2.0;
let y = 2.0;
let x = 2.0;
for (let i = 0; i < numParticles; i++) {
    vertexBuffer.push(2.0 - 0.01 * i);
    vertexBuffer.push(2.0 - 0.01 * i);
    vertexBuffer.push(0.5);
    colorBuffer.push(1.0);
    colorBuffer.push(0.5);
    colorBuffer.push(0.0);
    colorBuffer.push(1.0);
}

// 空の配列を頂点と色用にとっておく。
// 初期のXYZの位置を決めとく
// const vertexBuffer = [1,0,1.0,0.4];にして、最初はフレームアウトしておこうかな
// 同時に複数の粒子を表示させるんだったらFORは絶対必要になっていきます。
// 流れとしては
// 1．１回転でXYZをプッシュする（これで1粒子分のいちが決まる）⇒おすすめ
    // XYZを一気にプッシュできるので、回転数は粒子の数。＋＋は1おき
// 2. １回転ごとにXの位置、Yの位置、、とまわしておく
    // 回転数は粒子の数X3。＋＋は3おき
// ＊pushでも[]追加でも大丈夫だが、RGBAのカラーバッファも同じFORで回せるので、以下のやり方がおすすめ