//console.log(handTrack);

const video = document.getElementById("myvideo");
const canvas = document.getElementById("mycanvas");

let model;

const options = {
    
}

handTrack.load(options).then(function(modelData){
    model = modelData;
    console.log(model);
});