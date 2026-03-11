let score = 0;
let detectedAlready = false;

document.getElementById("imageUpload").addEventListener("change", function(e){

const file = e.target.files[0];

detectedAlready = false;
document.getElementById("result").innerHTML = "";

// image preview
if(file){
document.getElementById("preview").src = URL.createObjectURL(file);
}

});

function detectWaste(){

const input = document.getElementById("imageUpload");

if(input.files.length === 0){
document.getElementById("result").innerHTML="Please upload an image";
return;
}

if(detectedAlready){
document.getElementById("result").innerHTML="Upload a new image to score again";
return;
}

const fileName = input.files[0].name.toLowerCase();

let detected = "";

if(fileName.includes("plastic")){
detected = "Plastic → Blue Recycling Bin";
}

else if(fileName.includes("banana") || fileName.includes("food")){
detected = "Organic → Green Bin";
}

else if(fileName.includes("paper")){
detected = "Paper → White Bin";
}

else{
detected = "Metal → Yellow Bin";
}

score += 10;

document.getElementById("score").innerHTML = score;

document.getElementById("result").innerHTML =
"Detected Waste: " + detected +
"<br>♻ Tip: Clean recyclable items before disposal.";
  
  document.getElementById("result").innerHTML +=
"<br>🌍 Proper waste segregation helps improve recycling efficiency.";

detectedAlready = true;

}

function resetGame(){

score = 0;
detectedAlready = false;

document.getElementById("score").innerHTML = score;
document.getElementById("result").innerHTML = "";

}
