; var tjs = tjs || {};

(function app(ns, jquery) {	
	console.log("jquery = " + jquery);
	var width = 400.0;
	var height = 300.0;

	var view_angle = 45.0,
		aspect = width/height;
		near = 0.1;
		far = 10000;

	var $container = $('div');
	console.log($container.length);
	//The 3 things needed for a threeJS scene
	
	// 1. Renderer - does the drawing
	var renderer = new THREE.WebGLRenderer();
	//setup the renderer  and...
	renderer.setSize(width,height);

	// 2. Camera - does the seeing..what we look through
	var camera =
		new THREE.PerspectiveCamera(view_angle, aspect, near, far);

	// 3. Scene - has the content
	var scene = new THREE.Scene();


	// Place the camera 
	camera.position.z = 20;



	//...add it to the HTML container
	$container.append(renderer.domElement);

	//Make something to show on the canvas	
	// var radius = 50,
	// 	segments = 16,
	// 	rings = 16;

	// var sphereMaterial = new THREE.MeshBasicMaterial(
	// {
	// 	color: 0x00ff00
	// });

	// var sphere = new THREE.Mesh(
	// 	new THREE.SphereGeometry(
	// 		radius,
	// 		segments,
	// 		rings),
	// 		sphereMaterial);

	// scene.add(sphere);


	var geometry = new THREE.SphereGeometry( 5, 32, 32 );
	// var material = new THREE.MeshBasicMaterial( {
	// 	color: 0xff4400
	// } );

	var material = new THREE.MeshLambertMaterial( {
		color: 0xff4400,
		wireframe: false
	} );
	var sphere = new THREE.Mesh( geometry, material );
	scene.add( sphere );


	// create a point light
	var pointLight =
	  new THREE.PointLight(0xFFFFFF);

	// set its position
	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;

	// add to the scene
	scene.add(pointLight);



	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			// scene.add( cube );


	var render = function() {
		// requestAnimationFrame(render);
		renderer.render(scene,camera);

	}
	
	render();

})(tjs, $);

console.log(tjs.hello);
