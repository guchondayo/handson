// 1.反省点：importは*as
// 2.各パートはThree.jsのメソッドで呼び出されるよ
// 3.perspectの意味は視点なのでカメラ視点と覚えよう
// 75,window.innerWidth / window.innerHeight,0.1,10あすぺくとひ
// レンダリングはWEBGLとDOMとさいず
// サイズはカメラとレンダリング飲み
// ジオメトリは形によってメンバーが変わる
// マテリアルの引数は複数あるのでオブジェクトだよ,あとレンダラーもだよ
// シーンとオブジェクト、カメラ
// レンダラーのセットサイズとアペンドチャイルドは変わらない
import * as THREE from 'three'

const scene = new THREE.Scene();

// カメラの作成
const camera = new THREE.PerspectiveCamera(
    75, // 視野角（FOV）数字が低いとちかいしたかいと遠くなった
    window.innerWidth / window.innerHeight, // アスペクト比
    0.1, // 近クリップ面
    10 // 遠クリップ面
);
camera.position.z = 10;
const renderer = new THREE.WebGLRenderer({ antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(2,1,1)
const material = new THREE.MeshBasicMaterial({scolor: 0x0077ff,opacity:0.5})
const box = new THREE.Mesh(geometry,material)

scene.add(box)

renderer.render(scene,camera)