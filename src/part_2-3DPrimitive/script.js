let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
camera.position.z = 5;

let renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);

window.addEventListener("resize", function () {
  renderer.setSize(this.window.innerWidth, this.window.innerHeight);
  camera.aspect = this.window.innerWidth / this.window.innerHeight;
  camera.updateProjectionMatrix();
});

document.body.appendChild(renderer.domElement);

// membuat objek
/**
 * di dalam BufferGeometry terdapat 3 buah atribut yaitu position, normal, color, dan uv
 * position adalah posisi dari titik-titik yang akan dibuat
 * normal adalah arah dari titik-titik yang akan dibuat --> lighting
 * color adalah warna dari titik-titik yang akan dibuat
 * uv adalah koordinat dari titik-titik yang akan dibuat --> texture mapping and material mapping
 */

const geo = new THREE.BufferGeometry();
const vertices = new Float32Array([ // pembuatan titik harus searah semua
  -1.0, -1.0, 1.0, // titik 0
  1.0, 1.0, 1.0, // titik 1
  -1.0, 1.0, 1.0, // titik 2
  1.0, -1.0, 1.0,  // titik 3

  -1.0, -1.0, -1.0, // titik 4
  1.0, 1.0, -1.0, // titik 5
  -1.0, 1.0, -1.0, // titik 6
  1.0, -1.0, -1.0,  // titik 7
]);
geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
geo.setIndex([
  // sisi belakang
  0, 3, 1,
  1, 2, 0,

  // sisi depan
  4, 6, 5,
  5, 7, 4,
  // sisi kiri
  4, 0, 2,
  2, 6, 4,

  // sisi kanan
  5, 1, 3,
  3, 7, 5,

  // sisi atas
  1, 5, 6,
  6, 2, 1,

  // sisi bawah
  0, 4, 7,
  7, 3, 0
])
const mat = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  // side: THREE.DoubleSide // untuk membuat objek bisa dilihat dari kedua sisi
});
const geoMesh = new THREE.Mesh(geo, mat);

scene.add(geoMesh);

const animate = () => {
  requestAnimationFrame(animate);

  // geoMesh.rotation.x += 0.01;
  geoMesh.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();