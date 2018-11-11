images = ["test1.png", "test2.png", "test3.png"];
captions = ["هذا وصف تجريبي لصورة تجريبية.", "هذا وصف تجريبي لصورة تجريبية. لماذا؟", "هذا وصف تجريبي لصورة تجريبية. حقا؟!"];

imageIndex = 0;
showImage(imageIndex);

var timeout;

function showImage(n){
    document.getElementById("slide-image").src = images[n];
    document.getElementById("slide-caption").textContent = captions[n];
    active = document.getElementsByClassName("active")[0]; 
    active.className = active.className.replace(" active", "");
    document.getElementsByClassName("circle")[n].className += " active";
    imageIndex = n;

    clearTimeout(timeout);
    timeout = setTimeout(function(){plusImage(1)}, 5000);
}

function plusImage(n){
    imageIndex += n;
    if(imageIndex > 2){imageIndex = 0}
    if(imageIndex < 0){imageIndex = 2}
    showImage(imageIndex);
}