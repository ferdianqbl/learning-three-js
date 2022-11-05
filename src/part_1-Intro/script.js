/**
 * Scene ==> Lingkungan 3D
 * Camera ==> Kamera
 * Renderer ==> Membuat gambar / menampilkan gambar
 */
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
camera.position.z = 5;

/**
 * 1. Field of View (FOV) ==> Sudut pandang kamera
 * 2. Aspect Ratio ==> Rasio lebar dan tinggi
 * 3. Near ==> Jarak depan
 * 4. Far ==> Jarak belakang
 */

let renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight); // Membuat ukuran layar

window.addEventListener("resize", function () {
  renderer.setSize(this.window.innerWidth, this.window.innerHeight); // Membuat ukuran layar
  camera.aspect = this.window.innerWidth / this.window.innerHeight;
  camera.updateProjectionMatrix();
});

// membuat objek
let box = new THREE.BoxGeometry(1, 1, 1);
let boxMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let boxMesh = new THREE.Mesh(box, boxMat);

scene.add(boxMesh);

// Memasukkan renderer ke dalam body
document.body.appendChild(renderer.domElement);

const animate = () => {
  requestAnimationFrame(animate);

  // boxMesh.rotation.x += 0.01;
  boxMesh.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
