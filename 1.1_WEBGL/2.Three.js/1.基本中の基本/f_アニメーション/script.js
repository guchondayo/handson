function animationNoNakami(){
    box.position.x +=1
    renderer.render(screen,camera)
    window.requestAnimationFrame(animationNoNakami)
}

animationNoNakami()