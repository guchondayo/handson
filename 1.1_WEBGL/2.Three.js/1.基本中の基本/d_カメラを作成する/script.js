
import * as THREE from 'three'


// シーンの作成（ないとだめなもの）
const scene = new THREE.Scene();
// ジオメトリの作成（立方体の例）形＋形以外⇒マッシュしてくっつける⇒シーンに加える
const geometry = new THREE.BoxGeometry(2, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube)
// カメラの作成
const camera = new THREE.PerspectiveCamera(
    75, // 視野角（FOV）数字が低いとちかいしたかいと遠くなった
    window.innerWidth / window.innerHeight, // アスペクト比
    0.1, // 近クリップ面
    10 // 遠クリップ面
);
camera.position.z = 5;
