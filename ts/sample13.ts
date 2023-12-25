// objectも問題なく型変化できる

var printName = function(obj:{first:string,last:string}){
    return obj.first + obj.last
}
var a = {
    first:"otanmi",
    last:"syohei"
}
printName(a)


