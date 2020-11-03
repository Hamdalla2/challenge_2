let up=(upload)=>{
const reader = new FileReader();
reader.addEventListener('load', (event) => {
    document.getElementById('text1').value=event.target.result;
})
reader.readAsText(upload.value)
}