
function right (){

    var p1 = document.getElementById('post1');
    var p2 = document.getElementById('post2');
    var p3 = document.getElementById('post3');
    var p4 = document.getElementById('post4');
    var p5 = document.getElementById('post5');
    var p6 = document.getElementById('post6');
    var aR = document.getElementById('arrowRight');
    var aL = document.getElementById('arrowLeft');


    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    aR.style.display = 'none';

    p4.style.display = 'block';
    p5.style.display = 'block';
    p6.style.display = 'block';
    aL.style.display = 'block';

}

function left (){
    var p1 = document.getElementById('post1');
    var p2 = document.getElementById('post2');
    var p3 = document.getElementById('post3');
    var p4 = document.getElementById('post4');
    var p5 = document.getElementById('post5');
    var p6 = document.getElementById('post6');
    var aR = document.getElementById('arrowRight');
    var aL = document.getElementById('arrowLeft');

    p1.style.display = 'block';
    p2.style.display = 'block';
    p3.style.display = 'block';
    aR.style.display = 'block';

    p4.style.display = 'none';
    p5.style.display = 'none';
    p6.style.display = 'none';
    aL.style.display = 'none';
}

document.getElementById('arrowRight').addEventListener('click', right);
document.getElementById('arrowLeft').addEventListener('click', left);