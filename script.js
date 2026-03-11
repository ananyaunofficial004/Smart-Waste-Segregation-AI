let score = 0;
let detectedAlready = false;

function detectWaste(){

const input = document.getElementById("imageUpload");

if(input.files.length === 0){
document.getElementById("result").innerHTML="Please upload an image";
return;
}

const fileName = input.files[0].name.toLowerCase();

let detected = "";

if(fileName.includes("plastic")){
detected = "Plastic → Blue Recycling Bin";
score += 10;
}

else if(fileName.includes("banana") || fileName.includes("food")){
detected = "Organic → Green Bin";
score += 10;
}

else if(fileName.includes("paper")){
detected = "Paper → White Bin";
score += 10;
}

else{
detected = "Metal → Yellow Bin";
score += 10;
}

document.getElementById("score").innerHTML = score;

document.getElementById("result").innerHTML =
"Detected Waste: " + detected;

input.value = "";   // ⭐ important fix

}
