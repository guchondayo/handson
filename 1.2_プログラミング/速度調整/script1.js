document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("speed");
    const ctx = canvas.getContext("2d");
    // 速度を決めるのはスピード
    function firstSentence(){
        let speed = 0.1; 
        let x = 0
        function drawScene  (){
            x = x + speed;
            ctx.fillStyle = "rgb(100, 100, 100)";
            ctx.beginPath();
            ctx.arc(x, 100, 50, 0, Math.PI * 2);
            ctx.fill();

            requestAnimationFrame(drawScene)
        }
        drawScene()
    }
    firstSentence()

    function secondSentence(){
        let speed = 0.1; 
        let x = 0
        function drawScene  (){
            if(x >= 10){
             speed = 10
            }
            x = x + speed;
            ctx.fillStyle = "rgb(100, 100, 100)";
            ctx.beginPath();
            ctx.arc(x, 200, 50, 0, Math.PI * 2);
            ctx.fill();

            requestAnimationFrame(drawScene)
        }
        drawScene()
    }
    secondSentence()
});