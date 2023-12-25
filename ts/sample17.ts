
function welcomePeople(x: [String,Number,String] | string) {
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

// 配列で混合の時の型宣言はどうすればいい？
