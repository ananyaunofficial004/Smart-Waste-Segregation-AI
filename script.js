let score = 0;
function detectWaste(){

const input = document.getElementById("imageUpload");

if(input.files.length === 0){
document.getElementById("result").innerHTML="Please upload an image";
return;
}

const fileName = input.files[0].name.toLowerCase();

if(fileName.includes("plastic")){
document.getElementById("result").innerHTML =
"Detected Waste: Plastic → Blue Recycling Bin";
}

else if(fileName.includes("banana") || fileName.includes("food")){
document.getElementById("result").innerHTML =
"Detected Waste: Organic → Green Bin";
}

else if(fileName.includes("paper")){
document.getElementById("result").innerHTML =
"Detected Waste: Paper → White Bin";
}

else{
document.getElementById("result").innerHTML =
"Detected Waste: Metal → Yellow Bin";
}

}
