var one=""
let convert=(e)=>{
    e.preventDefault();
let t=""
let x=document.getElementById('text1').value
let arr1=Object.keys(JSON.parse(x))
let s=""
for(let i=0;i<arr1.length-1;i++){
s+=arr1[i]+", "
}
t+=s.slice(0,-2)
let loop=(o)=>{
let arr2=Object.values(o)
let r=""
for(let i=0;i<arr2.length-1;i++){
r+=arr2[i]+", "
}
t+="\n"+r.slice(0,-2)
if(arr2[arr2.length-1].length>0){
    for(let e=0;e<arr2[arr2.length-1].length;e++){
    loop(arr2[arr2.length-1][e])}
}
}
loop(JSON.parse(x))

document.getElementById('text2').value=t

one=t

save(t)
}

function save(t){
$.ajax({
url: 'http://127.0.0.1:3000/csv',
method: 'POST',
data: {data:t}
})}

let up=(upload)=>{
let reader = new FileReader()
reader.addEventListener('load', (event) => {
    document.getElementById('text1').value=event.target.result;
})
reader.readAsText(upload.files[0])
}

function down(){
$.ajax({
url: 'http://127.0.0.1:3000/csv',
method: 'get',
data: {data:one}
})}