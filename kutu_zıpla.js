var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
	if(character.classList != "animate"){
		character.classList.add("animate");
	}
	setTimeout(function(){
		character.classList.remove("animate");
	},500);
}

var puan = 0;
var puanl = document.getElementById("sayac_yazi").innerHTML= 0;

var checkDead = setInterval(function(){
	
	var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if(blockLeft<20 && blockLeft>0 && characterTop>=130) {
		block.style.animation = "none";
		block.style.display = "none";
		character.style.animation = "none";
		alert("Oyunu Kaybettin!");
	}
	else if(blockLeft<20 && blockLeft>0) {	
		puan = puan + 1;
		if (puan % 3 == 0) {
			puanl = document.getElementById("sayac_yazi").innerHTML= puan / 3;
		}
	}
	
},10);