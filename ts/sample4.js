var value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
    // ...
}
else if (value === "b") {
    // この比較は意図的でないようです
    // "a" と "b" の型には重複がありません
    // オップス、到達不可能なコードです
}
