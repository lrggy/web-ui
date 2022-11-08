let date = new Date();
let Week = ['日','一','二','三','四','五','六'];  
let str =date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日"+"&nbsp&nbsp"+"星期"+Week[date.getDay()];
document.getElementById("topleft").innerHTML=str;