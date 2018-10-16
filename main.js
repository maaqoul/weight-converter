let lbsInput = document.getElementById('lbsInput');
lbsInput.addEventListener('input', function(event) {
    let pounds = event.target.value;
    document.getElementById('gramsOutputs').innerHTML = (pounds/0.0022046).toFixed(2);
    document.getElementById('kgOutputs').innerHTML = (pounds/2.2046).toFixed(2);
    document.getElementById('ozOutputs').innerHTML = (pounds*16).toFixed(2);
});



