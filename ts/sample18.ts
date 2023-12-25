// Type Aliases
// 毎回毎回型宣言を記述するのはめんどくさい
//typeを使って宣言を代入する
type mendoiArray = {
    name:string,
    age:Number
}
function maikai(mendoiArray):String{
    return mendoiArray.name
}

const mk = {
 name:"taniguchi",
 age:35
}
maikai(mk)

// つまり、オリジナルの型を作るようなもんじゃないってこと？
// type UserInputSanitizedString = string;
 
// ChatGPT
// その通りです。型エイリアスはオリジナルの型を作成するものではなく、既存の型に別名をつけるためのものです。例えば、UserInputSanitizedString という型エイリアスが string 型と同じ性質を持つので、このエイリアスを使っている場面で実際に行われる操作や制約は、元の string 型と同じものになります。

// あなたの挙げた例のように、以下のコードはエイリアスを使用していますが、UserInputSanitizedString は実際には string 型と同じものです。

// typescript
// Copy code
// type UserInputSanitizedString = string;

// // ...

// let userInput: UserInputSanitizedString = sanitizeInput(getInput());
// userInput = "new input";  // これは依然として string 型の値です
// したがって、型エイリアスを使用することで新しい型を作成するわけではなく、元の型をより分かりやすくするために名前をつけたり、コード内で一貫性を保つために使用します。






