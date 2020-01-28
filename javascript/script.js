function right(){
    if(document.querySelector('.client').classList.contains('right'))
    document.querySelector('.client').classList.remove('right');
    
    document.querySelector('.client').classList.add('left');
    
    if(document.querySelector('.server').classList.contains('left'))
    document.querySelector('.server').classList.remove('left');
    
    document.querySelector('.server').classList.add('right');
    
    if(document.querySelector('.client-overlay').classList.contains('left'))
    document.querySelector('.client-overlay').classList.remove('left')
    
    document.querySelector('.client-overlay').classList.add('right');
    
    if(document.querySelector('.server-overlay').classList.contains('right'))
    document.querySelector('.server-overlay').classList.remove('right')
    
    document.querySelector('.server-overlay').classList.add('left');

    document.querySelector('.server-overlay').style.zIndex = 0;
    document.querySelector('.server').style.zIndex = 0;
    document.querySelector('.client-overlay').style.zIndex = 1;
    document.querySelector('.client').style.zIndex = 1;


}

function left(){
if(document.querySelector('.client').classList.contains('left'))
document.querySelector('.client').classList.remove('left');

document.querySelector('.client').classList.add('right');

if(document.querySelector('.server').classList.contains('right'))
document.querySelector('.server').classList.remove('right');

document.querySelector('.server').classList.add('left');

if(document.querySelector('.client-overlay').classList.contains('right'))
document.querySelector('.client-overlay').classList.remove('right')

document.querySelector('.client-overlay').classList.add('left');

if(document.querySelector('.server-overlay').classList.contains('left'))
document.querySelector('.server-overlay').classList.remove('left')

document.querySelector('.server-overlay').classList.add('right');

document.querySelector('.server-overlay').style.zIndex = 1
document.querySelector('.server').style.zIndex = 1
document.querySelector('.client-overlay').style.zIndex = 0
document.querySelector('.client').style.zIndex = 0





}