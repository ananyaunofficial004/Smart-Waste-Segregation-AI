let score = 0;
function detectWaste(){

const input = document.getElementById("imageUpload");

if(input.files.length === 0){
document.getElementById("result").innerHTML="Please upload an image";
return;
}

const fileName = input.files[0].name.toLowerCase();

let detected = "";
let correct = false;

if(fileName.includes("plastic")){
detected = "Plastic → Blue Recycling Bin";
correct = true;
}

else if(fileName.includes("banana") || fileName.includes("food")){
detected = "Organic → Green Bin";
correct = true;
}

else if(fileName.includes("paper")){
detected = "Paper → White Bin";
correct = true;
}

else{
detected = "Metal → Yellow Bin";
correct = true;
}

if(correct){
score += 10;
}

document.getElementById("score").innerHTML = score;

document.getElementById("result").innerHTML =
"Detected Waste: " + detected;

}


