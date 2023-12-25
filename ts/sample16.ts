// 配列の場合ですが、:指定の型[]でいけます

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // ここでは: 'x' は 'string[]' です
      console.log("Hello, " + x.join(" and "));
    } else {
      // ここでは: 'x' は 'string' です
      console.log("Welcome lone traveler " + x);
    }
  }
var hai = ["aa","ii","uu"]
welcomePeople(hai)
