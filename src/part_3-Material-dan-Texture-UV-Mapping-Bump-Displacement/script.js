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
geoMesh.position.x = -2;
scene.add(geoMesh);


// box2
let light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(0, 3, 3);
scene.add(light);

light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(0, -3, 3);
scene.add(light);

const mat2 = new THREE.MeshLambertMaterial({
  map: texture,
});
const geoMesh2 = new THREE.Mesh(geo, mat2);
geoMesh2.position.set(0, 0, 0);
scene.add(geoMesh2);

// box 3
const stone_texture = new THREE.TextureLoader().load('./stone.png');
const mat3 = new THREE.MeshPhongMaterial({
  map: stone_texture,
  shininess: 50,
  bumpMap: texture,
});
const geoMesh3 = new THREE.Mesh(geo, mat3);
geoMesh3.position.set(2, 0, 0);
scene.add(geoMesh3);

const animate = () => {
  requestAnimationFrame(animate);

  geoMesh.rotation.x += 0.01;
  geoMesh.rotation.y += 0.01;

  geoMesh2.rotation.x += 0.01;
  geoMesh2.rotation.y += 0.01;

  geoMesh3.rotation.x += 0.01;
  geoMesh3.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();