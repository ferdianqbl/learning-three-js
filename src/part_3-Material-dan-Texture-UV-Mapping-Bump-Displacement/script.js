let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
camera.position.z = 5;

let renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(innerWidth, innerHeight);

window.addEventListener("resize", function () {
  renderer.setSize(this.window.innerWidth, this.window.innerHeight);
  camera.aspect = this.window.innerWidth / this.window.innerHeight;
  camera.updateProjectionMatrix();
});

document.body.appendChild(renderer.domElement);

const geo = new THREE.BoxGeometry(1, 1, 1);

const texture = new THREE.TextureLoader().load('./mat1.png');
const mat = new THREE.MeshBasicMaterial({
  // color: 0x00ff00,
  map: texture,
  // vertexColors: true,
  // wireframe: true,
});
const geoMesh = new THREE.Mesh(geo, mat);

scene.add(geoMesh);

const animate = () => {
  requestAnimationFrame(animate);

  geoMesh.rotation.x += 0.01;
  geoMesh.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();