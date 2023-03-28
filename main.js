import * as THREE from 'three'; 
import "./style.css";
import $ from "jquery";
import gsap from "gsap";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

//Scene---------------------------------------------------
const scene = new THREE.Scene();

//Import Model -------------------------------------------
const gltfLoader = new GLTFLoader();
var worldModel;
var group;
gltfLoader.load('assets/globe/globe1.gltf', function (glft) {
  worldModel = glft.scene.children.find((child) => child.name === "Globe");
  group = new THREE.Group();
  group.rotation.z = 11;
  group.add(worldModel)
  scene.add(group)
})



//Set Viewport Sizes -------------------------------------
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

//Camera -----------------------------------------------
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 1.5;
camera.position.x = -0.5;
camera.position.y = 1;

scene.add(camera);

//GSAP declaration -------------------------------------



//Renderer -----------------------------------------------
const canvas = document.querySelector('.webgl'); //chooses the class from the html
const renderer = new THREE.WebGL1Renderer({canvas, alpha:true});
renderer.setSize(sizes.width,sizes.height); //Sets size for the renderer.
renderer.setPixelRatio(3); //Makes the model less pixelated.
renderer.render(scene, camera); //Creates the render in the canvas.
renderer.setClearColor(0x000000, 0);

// window.addEventListener('mouseup', function(){
//   console.log(camera.position)
//   console.log(camera.rotation)
// })

//Resize---------------------------------------------------
//Updates the size of the renderer when the window is resized.
window.addEventListener('resize', () => {
  //Update Sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  //Update Camera and renderer
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
})

//Light---------------------------------------------------
const light = new THREE.PointLight(0xf59842, 1.2);
const light2 = new THREE.PointLight(0x93b0ed, 1)
const light3 = new THREE.PointLight(0x93b0ed, 1)
const light4 = new THREE.PointLight(0x77d7f7, 1)
light.position.set(-10,100,0); //Position Light (x,y,z)
light2.position.set(-50, 0, 0)
light3.position.set(100, 0, 0)
light3.position.set(0, 0, 50)
scene.add(light); //Add light to scene
scene.add(light2);
scene.add(light3)
scene.add(light4)


//Rerenders the scene without weird squishing issues. Also lets us play animations.
const loop = () => {
  //!!!! ---- Animation!! Rotates on X
  window.requestAnimationFrame(loop);
  // group.rotation.z += 0.001;
  // controls.update(0.5); //Updates the controls, so that there's smooth movement after letting go.
  renderer.render(scene,camera);
  
}
loop();

//---------------- Scroller


// ################################## JQUERY ########################################

$(document).ready(function() {
					
	// VARIABLES

	
	// EVENT HANDLERS
	
	
	// FUNCTIONS
	
	
	// INITIALIZATION

  //----------SCROLLER
	var sectionArray = $("body").find(".aboutSect");
	var currentSection = 0;
	var windowScroll;
	var pageScrollInProgress = false;



  $("nav a").on("click", function(event){
    event.preventDefault();

    var destination = $(this).attr('href');
    pageScrollInProgress = true;
    $('html, body').stop().animate({
      scrollTop: $(destination).offset().top+1
    }, 2000,'easeInOutExpo', function(){
      pageScrollInProgress = false;
      setMainNav();
    });
  })
  var lastScroll = 0;
  $(window).scroll(function(){
    windowScroll = $(window).scrollTop();
      if(windowScroll > lastScroll){
        group.rotation.z +=0.003;
      }else{
        group.rotation.z -=0.003;
      }
      lastScroll = windowScroll;
      

      if (windowScroll >= $(sectionArray[0]).offset().top && windowScroll < $(sectionArray[1]).offset().top && currentSection!=0){
        currentSection = 0;

        if(pageScrollInProgress == false){
          setMainNav();
        }
        console.log(currentSection);
      }else if (windowScroll >= $(sectionArray[1]).offset().top && windowScroll < $(sectionArray[2]).offset().top && currentSection!=1){
        currentSection = 1;

        if(pageScrollInProgress == false){
          setMainNav();
        }

        console.log(currentSection);
      } else if (windowScroll >= $(sectionArray[2]).offset().top && windowScroll < $(sectionArray[3]).offset().top && currentSection!=2){
        currentSection = 2;

        if(pageScrollInProgress == false){
          setMainNav();
        }

        console.log(currentSection);
      } else if (windowScroll >= $(sectionArray[3]).offset().top && windowScroll < $(sectionArray[4]).offset().top && currentSection!=3){
        currentSection = 3;

        if(pageScrollInProgress == false){
          setMainNav();
        }

        console.log(currentSection);
      } else if (windowScroll >= $(sectionArray[4]).offset().top && windowScroll < $(sectionArray[5]).offset().top && currentSection!=4){
        currentSection = 4;

        if(pageScrollInProgress == false){
          setMainNav();
        }

        console.log(currentSection);
      } else if (windowScroll >= $(sectionArray[5]).offset().top && windowScroll < $(sectionArray[6]).offset().top && currentSection!=5){
        currentSection = 5;

        if(pageScrollInProgress == false){
          setMainNav();
        }

        console.log(currentSection);
      }

  });

  function setMainNav(){
    if(currentSection == 0){
      gsap.to(camera.position, {
        z: 1.5,
        x: -0.5,
        y:  1,
        duration: 1
      })

      // gsap.to(group.rotation, {
      //   z: 100,
      //   duration: 100
      // })
    }

    if(currentSection == 1){
      gsap.to(camera.position, {
        x:-1.2,
        y:0,
        duration: 1
      })

      $(".one").animate({
        "opacity" : 1
      }, 1000)

      $('body').animate({
        "background-color" : "red"
      }, 1000)
    }

    if(currentSection == 2){
      $(".two").animate({
        "opacity" : 1
      }, 1000)
    }

    if(currentSection == 3){
      $(".three").animate({
        "opacity" : 1
      }, 1000)
    }

    if(currentSection == 4){
      gsap.to(camera.position, {
        x:-1.2,
        y:0,
        duration: 1
      })
      $(".four").animate({
        "opacity" : 1
      }, 1000)
    }

    if(currentSection == 5){
      console.log("hit")
      gsap.to(camera.position, {
        z: 1.5,
        x: 0,
        y:  1.3,
        duration: 1
      })
      $(".five").animate({
        "opacity" : 1
      }, 1000)
    }
  }


	
});
