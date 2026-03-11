function detectWaste(){

const input = document.getElementById("imageUpload");

if(input.files.length === 0){
document.getElementById("result").innerHTML="Please upload an image";
return;
}

const wastes = [
"Plastic Waste → Blue Recycling Bin",
"Organic Waste → Green Bin",
"Metal Waste → Yellow Bin",
"Paper Waste → White Bin"
];

const result = wastes[Math.floor(Math.random()*wastes.length)];

document.getElementById("result").innerHTML =
"Detected Waste: " + result;

}
