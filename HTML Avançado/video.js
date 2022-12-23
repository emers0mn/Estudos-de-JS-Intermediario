let maglore = document.getElementsByClassName("video")[0];
let bt = document.getElementsByClassName("bt")[0];
let bt1 = document.getElementsByClassName("bt")[1];
let bt2 = document.getElementsByClassName("bt")[2];

bt.addEventListener('click', function() {
    maglore.setAttribute('controls',"");

})

bt1.addEventListener('click', function() {
    maglore.play();
    bt2.innerHTML = 'Pausar então';

})

bt2.addEventListener('click', function() {
    maglore.pause()
    bt2.innerHTML = 'Mantra';

})
