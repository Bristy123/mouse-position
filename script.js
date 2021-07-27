window.addEventListener('mousemove', function(e){
    document.getElementById('x-value').textContent = e.x;
    document.getElementById('y-value').textContent = e.y;
});

document.addEventListener("click", function(event){

        var x = event.clientX;
        var y = event.clientY;

        document.getElementById('position').innerHTML = " [ X = " + x + " ] [ Y =" +y +" ]";
})