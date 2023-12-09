//console.log(handTrack);

const video = document.getElementById("myvideo");
const canvas = document.getElementById("mycanvas");

let model;

const options = {
    flipHorizontal: false,
    maxNumBoxes: 3,
    scoreThreshold: 0.7,
}

handTrack.load(options).then(function(modelData){
    model = modelData;
    console.log(model);
});