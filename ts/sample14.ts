// 例えば、numberとstringは受け入れて、オブジェクト型は受け入れない
// ユニオン型
function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // エラー
  printId({ myID: 22342 });
  // 'myID' の型 '{ myID: number; }' は 'string | number' のパラメータ型に割り当てることはできません。
  