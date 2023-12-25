// 配列は、キーバリューごとに型を指定して作られている
//NUMなのにSTRING
var array: { hignschool: string; kyusoku: Number } = {
    hignschool: "はなまきひがし",
    kyusoku: "165"
};
console.log(array);
// 正解
var array: { hignschool: string; kyusoku: Number } = {
    hignschool: "はなまきひがし",
    kyusoku: 165
};
console.log(array);
