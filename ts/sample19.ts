// インターフェース（Interfaces）
// インターフェース（Interface）の宣言は、別の方法でオブジェクト型に名前を付ける手段です。
// エイリアスと何が違うのか、、」
// 拡張のしかたがちがう
interface user{
    name:string,
    age:Number
}
interface player extends user{
    backnum:Number

}

function findBaseballPlayer(pro:player){
    console.log(`${pro.name}+${pro.age}+${pro.backnum}`)
}

findBaseballPlayer({name:"taniguchi",age:35,backnum:17})

// `type` と `interface` の違いについて説明します。

// `type` と `interface` は、TypeScriptで型を定義するための2つの方法ですが、いくつかの違いがあります。主な違いは以下の通りです。

// 1. 拡張（Extending）の振る舞い:

// `interface` は、他の`interface`を拡張するために使用されることができます。これにより、既存の`interface`に新しいプロパティやメソッドを追加することができます。

// 一方、`type` は既存の型を結合して新しい型を作成するために使用されます。`type` は交差型（Intersection Types）や合併型（Union Types）などを定義する際に使われますが、他の`type`を拡張することはできません。

// 2. デクラレーションマージング（Declaration Merging）:

// `interface` はデクラレーションマージングをサポートしており、同じ名前の`interface`を複数回宣言することで、型を拡張することができます。これにより、既存の`interface`に新しいプロパティやメソッドを追加することができます。

// `type` はデクラレーションマージングをサポートしていません。同じ名前の`type`を複数回宣言すると、エラーが発生します。

// 3. プリミティブ型のリネーム:

// `interface` はプリミティブ型をリネームするためには使用できません。一方で、`type` はプリミティブ型をリネームすることができます。

// 4. オブジェクト以外の型定義:

// `type` はオブジェクト型だけでなく、合併型や交差型、プリミティブ型、関数型、タプル型など、さまざまな型を定義する際に使用できます。`interface` は主にオブジェクト型の定義に使用されます。

// 総合すると、`interface`は主にオブジェクト型の定義と拡張に、`type`はより広範な型の定義と結合に使用されます。どちらを使用するかは、使用するコンテキストや個人の好みによるものです。


// interface は宣言マージ（Declaration Merging）に参加できますが、type はできません。これは、同じ名前の interface 定義を複数回行っても自動的に結合されることを意味します。
// interface は既存の型を拡張することができますが、type は交差型を使用して同じことができます。
// type はユニオン型や交差型と組み合わせて柔軟な型を作成するのに役立ちます。
// type はプリミティブ型、オブジェクト型、ユニオン型、交差型など、さまざまな型を定義できますが、interface は主にオブジェクト型の定義に使用されます。