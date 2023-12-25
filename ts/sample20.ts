// typeを使って結合してみよう
// -とって覚え方をしよう

type typeUser = {
    name:String
}
type typeAddress = typeUser &{
    address:String
}

function testCall(callNane:typeAddress){
    console.log(callNane.name,callNane.address)
}

type aaaaaa = String;

function saf(katahanani:aaaaaa){
    console.log(typeof katahanani)
}
// 
saf("aaaa")

// interface kl = String;

// 【Continued】
// TypeScriptは、プロジェクトの成長や要件の変化に合わせて、どちらの宣言方法が最適かを判断する際に役立ちます。初めからすべてのケースを予測することは難しいため、最初はインターフェースを使用し、プロジェクトが進行するにつれて型エイリアス（type）に切り替えることが良いアプローチです。