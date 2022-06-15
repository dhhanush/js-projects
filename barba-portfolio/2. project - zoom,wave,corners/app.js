import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import fragment from './shaders/fragment.glsl'
import vertex from './shaders/vertex.glsl'
import testTexture from './texture.jpg';
import * as dat from 'dat.gui'
import gsap from 'gsap'


export default class Sketch{
    constructor(options){
        this.container = options.domElement;
        this.width=this.container.offsetWidth;
        this.height=this.container.offsetHeight;

        this.camera = new THREE.PerspectiveCamera( 30, this.width/this.height, 10, 1000 );
        this.camera.position.z = 600;

        this.camera.fov = 2*Math.atan( (this.height/2)/600 ) * 180/Math.PI;

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer( { 
            antialias: true,
            alpha: true
         } );
        this.renderer.setPixelRatio(window.devicePixelRatio);
        // this.renderer.setPixelRatio(2);
        this.container.appendChild(this.renderer.domElement);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        
        
        this.time = 0;
        this.setupSettings()
        this.resize()
        this.addObjects()
        this.render();
        
        this.setupResize()
        
    }

    setupSettings(){
        this.settings = {
            progress: 0
        }
        this.gui = new dat.GUI();
        this.gui.add(this.settings,"progress",0,1,0.001);
    }

    resize(){
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize( this.width, this.height );
        this.camera.aspect = this.width/this.height;
        this.camera.updateProjectionMatrix();

    }

    setupResize(){
        window.addEventListener('resize',this.resize.bind(this));
    }

    addObjects(){
        this.geometry = new THREE.PlaneBufferGeometry( 300, 300,100,100);
        console.log(this.geometry)
        this.material = new THREE.ShaderMaterial({
            // wireframe: true,
            uniforms: {
                time: { value: 1.0 },
                uProgress: { value: 0 },
                uTexture: {value: new THREE.TextureLoader().load(testTexture)},
                uTextureSize: {value: new THREE.Vector2(100,100)},
                uCorners: {value: new THREE.Vector4(0,0,0,0)},
                uResolution: { value: new THREE.Vector2(this.width,this.height) },
                uQuadSize: { value: new THREE.Vector2(300,300) }
            },
            vertexShader: vertex,
            fragmentShader: fragment,
        })

        this.tl = gsap.timeline()
            .to(this.material.uniforms.uCorners.value,{
                x:1,
                duration: 1
            })
            .to(this.material.uniforms.uCorners.value,{
                y:1,
                duration: 1
            },0.1)
            .to(this.material.uniforms.uCorners.value,{
                z:1,
                duration: 1
            },0.2)
            .to(this.material.uniforms.uCorners.value,{
                w:1,
                duration: 1
            },0.3)

        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.scene.add( this.mesh );
        this.mesh.position.x = 300
        // this.mesh.rotation.z = 0.5
    }

    render(){
        this.time += 0.05;
        this.material.uniforms.time.value = this.time;
        this.material.uniforms.uProgress.value = this.settings.progress;
        // this.tl.progress(this.settings.progress)
        this.mesh.rotation.x = this.time / 2000;
        this.mesh.rotation.y = this.time / 1000;

        this.renderer.render( this.scene, this.camera );
        // console.log(this.time);
        requestAnimationFrame(this.render.bind(this))
    }

}

new Sketch({
    domElement: document.getElementById('container')
});

