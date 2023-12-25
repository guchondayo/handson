// 匿名関数やアロー関数は型が勝手に文字列として入る

var tokumei = function(kotae){
    return kotae
}

console.log(tokumei(23))

var arow = (arow)=>{
    return arow
}

arow(arow)