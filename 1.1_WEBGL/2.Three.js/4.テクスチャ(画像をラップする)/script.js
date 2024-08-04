import * as THREE from 'three'

// シーン、カメラ、レンダラーの初期化
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ジオメトリ、マテリアル、メッシュの作成
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// *******************************************
const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => { console.log('loading started'); };
loadingManager.onLoad = () => { console.log('loading finished'); };
loadingManager.onProgress = () => { console.log('loading progressing'); };
loadingManager.onError = () => { console.log('loading error'); };

const textureLoader = new THREE.TextureLoader(loadingManager);
const colorTexture = textureLoader.load(
    './assets/image.JPG',
    (texture) => {
        console.log('Texture loaded successfully');
        // テクスチャがロードされたら、マテリアルに適用
        material.map = texture;
        material.needsUpdate = true;
    },
    undefined,
    (error) => {
        console.error('An error happened', error);
    }
);
let direction = true
// アニメーション関数
const animate = () => {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    if(direction){
        mesh.scale.x += 0.001;
        mesh.scale.y += 0.001;
        console.log(mesh.scale.x)
        if(mesh.scale.x >= 3){
            direction = false;
            console.log(direction)
        }
    }else{
        mesh.scale.x -= 0.001;
        mesh.scale.y -= 0.001;
        if(mesh.scale.x <= 0.5){
            direction = true;
        }
    }

    renderer.render(scene, camera);
};

// アニメーション開始
animate();

// カーソル処理
const cursor = { x: 0, y: 0 };
window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / window.innerWidth - 0.5;
    cursor.y = event.clientY / window.innerHeight - 0.5;

    camera.lookAt(mesh.position);
});
