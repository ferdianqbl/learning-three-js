let scene = new THREE.Scene();
scene.background = new THREE.Color("0x0a0a0a");

let camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
camera.position.z = 5;
let renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight); // Membuat ukuran layar

window.addEventListener("resize", function () {
  renderer.setSize(this.window.innerWidth, this.window.innerHeight); // Membuat ukuran layar
  camera.aspect = this.window.innerWidth / this.window.innerHeight;
  camera.updateProjectionMatrix();
});

// Memasukkan renderer ke dalam body
document.body.appendChild(renderer.domElement);

//================================================================================================
// membuat objek
let box = new THREE.BoxGeometry(0.5, 0.5, 0.5);
let boxMat = new THREE.MeshPhongMaterial({ color: 0xff0000 });
let boxMesh = new THREE.Mesh(box, boxMat);
scene.add(boxMesh);

// tanah
const plane = new THREE.PlaneGeometry(1000, 1000, 500, 500);
const planeMat = new THREE.MeshLambertMaterial({ color: 0xaaffaa });
const planeMesh = new THREE.Mesh(plane, planeMat);

planeMesh.position.set(0, -1, 0);
planeMesh.rotation.x = -Math.PI / 2;
scene.add(planeMesh);


// light
// const ambient = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambient);

const pointLight = new THREE.PointLight(0xffffff, 0.5, 50);
pointLight.position.set(1, 1, 1);
scene.add(pointLight);
scene.add(new THREE.PointLightHelper(pointLight, 0.1, 0x000000));

const hemisphere = new THREE.HemisphereLight(0x0000ff, 0x000000, 0.5);
scene.add(hemisphere);
scene.add(new THREE.HemisphereLightHelper(hemisphere, 0.1, 0x000000));

const animate = () => {

  boxMesh.rotation.x += 0.01;
  boxMesh.rotation.y += 0.01;
  boxMesh.rotation.z += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();
