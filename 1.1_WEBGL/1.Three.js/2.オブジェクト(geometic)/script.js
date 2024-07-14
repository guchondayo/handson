
import * as THREE from 'three'


// シーンの作成（ないとだめなもの）
const scene = new THREE.Scene();

// ★型が決まっているものを描画する場合
function objectHasDicided (){
    // 1.ジオメトリを記述する
    // ＊コツとしては『形』＋『Geometry』なのでGeometryと先に険悪したほうがいいかも
    const geometry = new THREE.BoxGeometry(2,1,1);
    const geometry = new THREE.SphereGeometry(1,32,32) 
    // 2.色付けなど、形に対して加工をしたいときはMaterialで、
    // ＊コツとしては『メッシュする時のマテリアル』だよいうこと
    // ＊加工する項目って、複数あることからオブジェクトにしちゃっていいと思うよ
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
    // 3.1と2を合わせる（メッシュする）：メッシュポテト
    const cube = new THREE.Mesh(geometry, material);
}

function objectByMyself (){
    let bufferGeometry = new THREE.BufferGeometry();
    const positionsArray = new Float32Array([
        // 前面
        -1, -1,  1,  // 頂点1
         1, -1,  1,  // 頂点2
        -1,  1,  1,  // 頂点3
         1, -1,  1,  // 頂点2
         1,  1,  1,  // 頂点4
        -1,  1,  1,  // 頂点3
    
        // 背面
        -1, -1, -1,  // 頂点5
        -1,  1, -1,  // 頂点6
         1, -1, -1,  // 頂点7
         1, -1, -1,  // 頂点7
        -1,  1, -1,  // 頂点6
         1,  1, -1,  // 頂点8
    
        // 上面
        -1,  1,  1,  // 頂点3
         1,  1,  1,  // 頂点4
        -1,  1, -1,  // 頂点6
         1,  1,  1,  // 頂点4
         1,  1, -1,  // 頂点8
        -1,  1, -1,  // 頂点6
    
        // 下面
        -1, -1,  1,  // 頂点1
        -1, -1, -1,  // 頂点5
         1, -1,  1,  // 頂点2
         1, -1,  1,  // 頂点2
        -1, -1, -1,  // 頂点5
         1, -1, -1,  // 頂点7
    
        // 左面
        -1, -1,  1,  // 頂点1
        -1,  1,  1,  // 頂点3
        -1, -1, -1,  // 頂点5
        -1, -1, -1,  // 頂点5
        -1,  1,  1,  // 頂点3
        -1,  1, -1,  // 頂点6
    
        // 右面
         1, -1,  1,  // 頂点2
         1, -1, -1,  // 頂点7
         1,  1,  1,  // 頂点4
         1, -1, -1,  // 頂点7
         1,  1, -1,  // 頂点8
         1,  1,  1,  // 頂点4
    ]);

    const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);

    geometry.setAttribute('position', positionsAttribute);

}

let geometry = new THREE.BoxGeometry(2, 1, 1);
// ボックスを書きたい
    geometry = new THREE.SphereGeometry(1, 32, 32)
const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
const cube = new THREE.Mesh(geometry, material);
//1**ポジションはここで決める**
cube.position.x = 0
cube.position.y = - 0.6
cube.position.z = 1
console.log(cube.position.normalize())
console.log(cube.position.length())
// スケールを使うと露骨に大きさが変わる
cube.scale.x = 2
cube.scale.y = 0.25
cube.scale.z = 0.5
// スケールを使うと露骨に大きさが変わる
cube.rotation.x = 2
cube.rotation.y = 0.25
cube.rotation.z = 0.5

cube.rotation.x = Math.PI * 0.25
cube.rotation.y = Math.PI * 0.25
scene.add(cube);

// LookATでカメラの位置を動かしてみる、カメラをX方向に動かす、Y方向に動かす、Z方向に動かす
camera.lookAt(new THREE.Vector3(0, 0, 5));

const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

// ウィンドウのリサイズ対応
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
// ★型が決まっているものを描画する場合
function objecthasDicided (){
    // 1.ジオメトリを記述する
    // ＊コツとしては『形』＋『Geometry』なのでGeometryと先に険悪したほうがいいかも
    const geometry = new THREE.BoxGeometry(2,1,1);
    const geometry = new THREE.SphereGeometry(1,32,32) 
    // 2.色付けなど、形に対して加工をしたいときはMaterialで、
    // ＊コツとしては『メッシュする時のマテリアル』だよいうこと
    // ＊加工する項目って、複数あることからオブジェクトにしちゃっていいと思うよ
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
    // 3.1と2を合わせる（メッシュする）：メッシュポテト
    const cube = new THREE.Mesh(geometry, material);
}
