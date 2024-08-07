
import * as THREE from 'three'


// シーンの作成（ないとだめなもの）
const scene = new THREE.Scene();

// カメラの作成
const camera = new THREE.PerspectiveCamera(
    75, // 視野角（FOV）数字が低いとちかいしたかいと遠くなった
    window.innerWidth / window.innerHeight, // アスペクト比
    0.1, // 近クリップ面
    10 // 遠クリップ面
);
camera.position.z = 5;

// レンダラーの作成：範囲とDOMを設定すればOK
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ジオメトリの作成（立方体の例）形＋形以外⇒マッシュしてくっつける⇒シーンに加える
// 後ろ3つの引数を入れると三角形がめっちゃ細かくなる
// 1.ただの四角形を作る方法
let geometry = new THREE.BoxGeometry(2, 1, 1,2,2,2);
// 2.ただの円を作る方法
    geometry = new THREE.SphereGeometry(1, 32, 32)

// 〇自作のジオメトリを作ることもできる
// ★重要：プログラム上図形は配列でできている
// 空のBufferGeometryを作成する
    geometry = new THREE.BufferGeometry();

// 頂点の座標をFloat32Arrayで定義する
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

// BufferAttributeを作成し、'position'という名前でgeometryに追加する
const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);
geometry.setAttribute('position', positionsAttribute);
// 頂点の位置を変更
// const positions = geometry.attributes.position.array;
// console.log(positions)
// for (let i = 0; i < positions.length; i++) {
//   positions[i] += (Math.random() - 0.5) * 0.2; // 頂点をランダムに移動
// }
// geometry.attributes.position.needsUpdate = true; // 更新を反映
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
const cube = new THREE.Mesh(geometry, material);
// //1**ポジションはここで決める**
// cube.position.x = 0
// cube.position.y = - 0.6
// cube.position.z = 1
// console.log(cube.position.normalize())
// console.log(cube.position.length())
// // スケールを使うと露骨に大きさが変わる
// cube.scale.x = 2
// cube.scale.y = 0.25
// cube.scale.z = 0.5
// // スケールを使うと露骨に大きさが変わる
// cube.rotation.x = 2
// cube.rotation.y = 0.25
// cube.rotation.z = 0.5

// cube.rotation.x = Math.PI * 0.25
// cube.rotation.y = Math.PI * 0.25
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

// Clockのインスタンスを作成
const clock = new THREE.Clock();

const tick2 = () => {
    // 経過時間を取得
    const elapsedTime = clock.getElapsedTime();
    console.log(Math.floor(elapsedTime), "秒経過")
    // オブジェクトを更新
    cube.rotation.y = elapsedTime;

    // シーンをレンダリング
    renderer.render(scene, camera);

    // 次のフレームでtickを呼び出す
    window.requestAnimationFrame(tick2);
}

// アニメーションループを開始
tick2()

function tick() {
    // Time
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime
    // Update objects
    cube.rotation.y += 0.001 * deltaTime
    renderer.render(cube,camera)
    window.requestAnimationFrame(tick)
}

tick()
// // アニメーションループ
// function animate() {
//     requestAnimationFrame(animate);

//     // 立方体の移動
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     // 立方体の回転
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
// }
// animate();

const group = new THREE.Group()
group.scale.y = 2
group.rotation.y = 0.2
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube1.position.x = -1.5
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube2.position.x = 0
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube3.position.x = 1.5
group.add(cube3)

