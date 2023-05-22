function dropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
	}
	window.onclick = function(event) {
	  if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
		  var openDropdown = dropdowns[i];
		  if (openDropdown.classList.contains('show')) {
	openDropdown.classList.remove('show');
	}
		}
	}
	}
function openFramejett() {
  window.location.href = "framejett.html";
}

function openFramesage() {
  window.location.href = "framesage.html";
}

function openFramebrim() {
  window.location.href = "framebrim.html";
}

function openFramereyna() {
  window.location.href = "framereyna.html";
}

function openFrameraze() {
  window.location.href = "frameraze.html";
}

function openFrameomen() {
  window.location.href = "frameomen.html";
}
function openIndex() {
  window.location.href = "index.html";
}
var facts = [
	'Phoenix Burned His School.',
	'Breach was born without arms. His mechanical arms are made from carbon steel with titanium plating.',
	'Astra loves cooking. Her favorite food is Jollof, a rice dish popular in West Africa.',
	'Each Agent has a different country of origin, except for Brimstone and Viper, who both hail from the United States.',
	'Reyna is Saving Her Little Sister With Viper.',
	'Breach and Raze Have a Criminal Past Together']
var randomNumber = Math.floor(Math.random() * (facts.length));
async function randomfact() {
	document.getElementById('factDisplay').innerHTML = facts[randomNumber];
	var modal = $modal();
	await modal;
}
function settime(){
      alert(facts[randomNumber]);
      setTimeout(randomfact(), 20000);
    }

const express = require("express");
const multer  = require("multer");
  

const app = express(); 
const upload = multer({dest:"Desktop"});
app.use(express.static(__dirname));
app.post("/Desktop", upload.single("filedata"), function (req, res) {
    let filedata = req.file;
    console.log(filedata);
});
