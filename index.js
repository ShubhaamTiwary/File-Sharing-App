const dropZone=document.querySelector(".drop-zone");
const fileInput=document.querySelector("#fileInput");
const browsebtn=document.querySelector(".browsebtn");


dropZone.addEventListener("dragover",(e)=>{
    // console.log("aaa");
    e.preventDefault();
    if(!dropZone.classList.contains("dragged")){
        dropZone.classList.add("dragged");
    }
});

dropZone.addEventListener("dragleave",()=>{
    dropZone.classList.remove("dragged");
});

dropZone.addEventListener("drop",(e)=>{
    e.preventDefault();
    dropZone.classList.remove("dragged");
    const files=e.dataTransfer.files.length;
    console.log(files);
    if(files.length){
        fileInput.files=files;
    }
});

browsebtn.addEventListener("click",()=>{
    fileInput.click();
})