let convert=(b)=>{
var x=document.getElementById('text1').value
var arr=Object.keys(x)
var s=""
for(var i=0;i<arr.length;i++){
s+=arr[i]+", "
}
document.getElementById('text2').value=s.slice(0,-11)
}

module.exports.sender=(x)=>{
var arr=Object.keys(x)
var s=""
for(var i=0;i<arr.length;i++){
s+=arr[i]+", "
}
}