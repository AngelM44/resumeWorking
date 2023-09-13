import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//render the page first
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//render the scene next
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//load your objects into the scene
const loader = new GLTFLoader();

loader.load( './Miata/scene.gltf', function ( gltf ) {
  gltf.scene.position.set( -200, -50, 500);
  gltf.scene.rotation.y = Math.PI;
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );

// loader.load( './MQ/scene.gltf', function ( gltf ) {
//   gltf.scene.position.set( 20, -50, 200);
//   //gltf.scene.rotation.y = 180;
// 	scene.add( gltf.scene );
// }, undefined, function ( error ) {
// 	console.error( error );
// } );

// loader.load( './NabooStar/scene.gltf', function ( gltf ) {
//   gltf.scene.position.set( 0, 500, 0);
//   gltf.scene.scale.set(20, 20, 20)
//   gltf.scene.rotation.y = 180;
//   //gltf.scene.rotation.x =
// 	scene.add( gltf.scene );
// }, undefined, function ( error ) {
// 	console.error( error );
// } );

loader.load( './Xwing/scene.gltf', function ( gltf ) {
  gltf.scene.position.set( 20, -50, 200);
  //gltf.scene.rotation.y = 180;
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );


const light = new THREE.AmbientLight( 0x404040, 40 ); // soft white light
scene.add( light );

const plight = new THREE.PointLight( 0x404040, 40 ); // soft white light
plight.position.set( 20, -50, 300)
scene.add(plight)

camera.position.z = 1000;
// camera.position.z = 200
camera.position.x = 50
camera.position.y = 300

function animate() {
  requestAnimationFrame(animate);
  //scene.rotation.y += .005
  //scene.rotation.x += .005
  renderer.render(scene, camera);

}
animate();
