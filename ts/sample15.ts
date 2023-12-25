//問題点　id: number | stringの時にstringだけに使う標準オブジェクトが使えない問題
// →ifで分岐しよう


function printId(id: Number | String) {
    console.log(id.toUpperCase());
    // プロパティ 'toUpperCase' は型 'string | number' に存在しません。
    // プロパティ 'toUpperCase' は型 'number' に存在しません。
  }

function newPrintId(id: Number | String){
    if (typeof id === "string"){
        return id.toUpperCase()
    }
    return id
}

console.log(newPrintId(11))