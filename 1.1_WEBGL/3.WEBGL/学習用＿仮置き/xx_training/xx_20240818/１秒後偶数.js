const indices = new Uint16Array([
    // 星1, 星2, 星3, ...
    ]);
    
    // 例えば、1秒ごとに偶数インデックスを非表示にする場合
    function updateStars(time) {
        const evenIndices = indices.filter((_, index) => index % 2 === 0);
        const oddIndices = indices.filter((_, index) => index % 2 !== 0);
        
        if (Math.floor(time / 1000) % 2 === 0) {
            // 偶数インデックスの星を描画
            gl.drawRangeElements(gl.POINTS, 0, evenIndices.length, evenIndices.length, gl.UNSIGNED_SHORT, 0);
        } else {
            // 奇数インデックスの星を描画
            gl.drawRangeElements(gl.POINTS, 0, oddIndices.length, oddIndices.length, gl.UNSIGNED_SHORT, 0);
        }
    }
    
    // アニメーションループ
    function animate(time) {
        updateStars(time);
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    2. 星の動き
    星が画面上で移動する場合、星の位置を変える際に gl.drawRangeElements を使って、動いている星だけを描画することができます。これにより、星の動きや位置を効率的に更新できます。
    
    実装方法: 移動中の星のインデックスだけを描画するようにし、gl.drawRangeElements でそのインデックスの範囲だけを描画します。
    javascript
    コードをコピーする
    const numStars = 100;
    const starPositions = new Float32Array(numStars * 2); // x, y座標の配列
    
    // スターの動きを更新する関数
    function updateStarPositions(time) {
        for (let i = 0; i < numStars; i++) {
            starPositions[i * 2] += Math.sin(time / 1000); // x座標の更新
            starPositions[i * 2 + 1] += Math.cos(time / 1000); // y座標の更新
        }
        gl.bufferData(gl.ARRAY_BUFFER, starPositions, gl.STATIC_DRAW);
    }
    
    // アニメーションループ
    function animate(time) {
        updateStarPositions(time);
        gl.drawRangeElements(gl.POINTS, 0, numStars, numStars, gl.UNSIGNED_SHORT, 0);
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);