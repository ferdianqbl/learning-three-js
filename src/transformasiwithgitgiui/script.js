let scene = new THREE.Scene();
scene.background = new THREE.Color("0x0a0a0a");

let camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
camera.position.set(1, 1, 4);
let renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight); // Membuat ukuran layar

window.addEventListener("resize", function () {
  renderer.setSize(this.window.innerWidth, this.window.innerHeight); // Membuat ukuran layar
  camera.aspect = this.window.innerWidth / this.window.innerHeight;
  camera.updateProjectionMatrix();
});

// Memasukkan renderer ke dalam body
document.body.appendChild(renderer.domElement);

const settings = {
  x: 0,
  y: 0,
  z: 0,
}

const gui = new dat.GUI();
gui.add(settings, "x", -4, 4, 0.1);
gui.add(settings, "y", -4, 4, 0.1);
gui.add(settings, "z", -4, 4, 0.1);

//================================================================================================
// membuat objek
let box = new THREE.BoxGeometry(0.5, 0.5, 0.5);
let boxMat = new THREE.MeshLambertMaterial({ color: 0xff0000 });
let boxMesh = new THREE.Mesh(box, boxMat);
boxMesh.position.set(1, 0, 0);
scene.add(boxMesh);
let box2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
let boxMat2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
let boxMesh2 = new THREE.Mesh(box, boxMat);
boxMesh2.position.set(-1, 0, 0);
boxMesh2.scale.set(4, 1, 1);
scene.add(boxMesh2);

const pointLight = new THREE.DirectionalLight(0xffffff, 1);
pointLight.position.set(2, 2, 1);
scene.add(pointLight);
scene.add(new THREE.DirectionalLightHelper(pointLight, 1, 0x000000));

// control
let controls = new THREE.OrbitControls(camera, renderer.domElement);

const grid = new THREE.GridHelper(100, 100, 0xa0a0a0a, 0x000000);
grid.position.set(0, -0.5, 0);
scene.add(grid);

const animate = () => {
  controls.update();
  boxMesh2.rotation.y += 0.01;
  boxMesh2.rotation.x += 0.01;
  boxMesh2.rotation.z += 0.01;

  pointLight.position.set(settings.x, settings.y, settings.z);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();
