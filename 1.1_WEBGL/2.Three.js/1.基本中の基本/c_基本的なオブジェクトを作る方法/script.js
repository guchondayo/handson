
import * as THREE from 'three'


// シーンの作成（ないとだめなもの）
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1,2,5)
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    opacity: 0.5
})
const box = new THREE.Mesh(geometry,material)
box.position.x = 2;
box.scale.x = 2
box.rotation.x = 2
box.quaternion.x = 2
scene.add(box)
console.log(box)