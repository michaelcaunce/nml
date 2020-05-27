// JavaScript Document
window.onload = function () {
	// Define draggable items and drag's data
	'use strict';
	var draggables = {
		init: function () {
			this.cacheDOM();
			this.bindEvents();

	  },
	  	cacheDOM: function () {
			this.parent_dinoPieces = document.getElementById("dinosafeplace");
	  },
	  	bindEvents: function () {
			this.parent_dinoPieces.addEventListener("mousedown", this.addAttr);

			this.parent_dinoPieces.addEventListener("dragstart", this.dragStart);
	  },
	  	addAttr: function (event) {
			if (event.target && event.target.nodeName === "image") {
				event.target.setAttribute("draggable","true");
			}
	  },
	  	dragStart: function (event) {
			event.dataTransfer.setData("image/png", event.target.id);
			event.dataTransfer.dropEffect = "move";
	  	}
	};

	// Defining the drop zones for the puzzle.
	var dropZone = {
	  	count: 0,
	  	init: function () {
		this.cacheDOM();
		this.bindEvents();
	  },
	  	cacheDOM: function () {
			this.dinoBoard = document.getElementById("dinoboard");
			this.correctAudio = document.getElementById("correct-sound");
			this.wrongAudio = document.getElementById("wrong-sound");
	  	},
	  	bindEvents: function () {
			this.dinoBoard.addEventListener("dragover",this.dragItem);
			this.dinoBoard.addEventListener("drop",this.dropItem);
	  	},
	  	dragItem: function (event) {
			event.preventDefault();
			event.dataTransfer.dropEffect = "move";
	  	},
	  	dropItem: function (event) {
			event.preventDefault();
			var pieceData = event.dataTransfer.getData("image/png");
		// The piece will only drop if the cells match
			if (pieceData === event.target.getAttribute("dino")) {
				event.target.appendChild(document.getElementById(pieceData));
		  		dropZone.correctAudio.play();
		  		dropZone.count++;
				dinoFacts.init();


		}
		  	else {
			  	dropZone.wrongAudio.play();
		  }

			// If all the pieces are in the correct position, call puzzleComplete.

			if (dropZone.count === 32) {
				puzzleComplete.init();
		        }
	  }
	};

	/*PuzzleComplete defines the actions once each piece of the puzze has been placed in it's correct location.
	Here we could add additional cosmetic actions, at the moment once the puzze is complete a dinosaur noise (roar) can be hear.
	This is all customisable and used only to give you an idea. */
	var puzzleComplete = {
		init: function () {
	    this.dinoRoar();
			fadeOut.init(document.getElementById('dinoboard'), 0);
			fadeOut.init(document.getElementById('dinosafeplace'), 0);
			fadeOut.init(document.getElementById('space'), 0);
			fadeOut.init(document.getElementById('factholder'), 0);
			this.dinoAnimate();
	},

		dinoAnimate: function () {
			this.dinoAnimate = document.getElementById("myVideo").style.visibility = "visible";
			this.dinoAnimate = document.getElementsByTagName("VIDEO")[0].setAttribute("src", "video/FinalScene.mp4");

			},

		dinoRoar: function () {
			this.dinoAudio = document.getElementById("complete-roar");
			this.dinoAudio.play();
		},
	};

		var fadeOut = {
			init: function (element, speed) {
			var seconds = speed/1000;
			element.style.transition = "opacity "+seconds+"s ease";
			element.style.opacity = 0;
			setTimeout(function() {
			element.parentNode.removeChild(element);
			}, 	speed);
		}
	};

	var dinoFacts = {
		init:function () {
		var array = ["The word dinosaur comes from the Greek language and means 'terrible lizard'.",
					 "Dinosaurs ruled the Earth for over 160 million years, from the Triassic period around 230 million years ago through the Jurassic period and until the end of the Cretaceous period around 65 million years ago.",
					 "It is believed that dinosaurs lived on Earth until around 65 million years ago when a mass extinction occurred.",
					"Scientists believe that the event leading to the extinction may have been a massive asteroid impact or huge volcanic activity. Events such as these could have blocked out sunlight and significantly changed the Earth's ecology",
					"The first dinosaur to be formally named was the Megalosaurus, back in 1824",
					"A person who studies dinosaurs is known as a paleontologist",
					"Rather than being carnivores (meat eaters), the largest dinosaurs such as the Brachiosaurus and Apatosaurus were actually herbivores (plant eaters).",
					"Birds descended from a type of dinosaurs known as theropods.",
					"Pterodactyls are not dinosaurs, they were flying reptiles that lived during the age of dinosaurs but by definition they do not fall into the same category.",
					"There are currently over 330 described dinosaur species and this number is growing.",
					"The color of all dinosaurs is unknown because no one was alive at that time in history",
					"The biggest dinosaurs were over 100 feet long and 50 feet tall. The sauropod was the largest dinosaur… the smallest dinosaurs were the size of a chicken and were called mussaurus, or mouse lizard",
					"Most palaeontologists, scientists that study dinosaurs, believe that birds are the only surviving dinosaurs. So dinosaurs aren't really extinct because their descendants are still living.",
					"Most dinosaurs hatch from eggs, and they could not fly or live in water.",
					"The oldest known dinosaur is Eoraptor, a meat-eater that lived 228 million years ago.",
					"Dinosaurs have different characteristic features. Carnivores had sharp teeth and claws which stood them in good stead while going for hunting.",
					"The feature that provides the greatest distinction between dinosaurs was the structure of their hips.",
					"Accordingly, dinosaurs can be classified into two groups: saurischians and Ornitrisquios.",
					"To the group saurischians belonged to giant herbivorous dinosaurs like Brachiosaurus, Apatosaurus and Diplodocus, the largest terrestrial vertebrates of all time and bipedal carnivores like Tyrannosaurus Rex and Velociraptor.",
					"Saurischians appeared in about 228 million years ago in the Triassic and diversified during the Jurassic and Cretaceous periods.",
					"Dinosaurs lived in every continent on Earth; more than 700 different species have been discovered worldwide.",
					"The most ferocious of dinosaurs was the Tyrannosaurus Rex. The bite of a T-Rex could easily crush through bone and was eight times more powerful than a lion's bite!",
					"A Tyrannosaurus Rex had a lifespan of 25-28 years; the weight of an adult was approximately 7 tonnes or 15,430 lbs - that's about the weight of 200 ten year old children!",
					"The longest dinosaur was the Amphicoelias. Based on fossils it is estimated that this Sauropod measured over 58 metres (190 ft) long.",
					"When dinosaur bones were first found hundreds of years ago by the Chinese, they thought they were the bones of giant dragons.",
					"The first dinosaur to be formally named was the Megalosaurus, back in 1824",
					"Velociraptor means 'speedy robber'.",
					"Triceratops means 'three-horned head'.",
					"Oviraptor means 'egg-thief' (although it didn't actually steal eggs).",
					"Microdontosaurus means 'tiny-toothed lizard'.",
					"Maiasaurus means 'good mother lizard'.",
					"The oldest known dinosaur so far discovered in Britain is Thecodontosaurus antiquus"];
		var num = Math.floor(Math.random() * array.length);
		document.getElementById('dinofact').innerHTML= (array[num]);
		}
	};

//Calls the created functions in order for the game to work.
draggables.init();
dropZone.init();

};
