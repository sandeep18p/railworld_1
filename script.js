document.getElementById('hamburger').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    } else {
        navLinks.classList.add('show');
    }
});
const arr = ['1.jpg','2.jpg','3.jpg'] 
var i=0;
setInterval(()=>{
    i=i%3;
    var img = document.getElementById('img');
    img.src = arr[i];
    i++;
},2000)


document.getElementById('btn').addEventListener('click', () => {
    const form = document.getElementById('form');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});

document.getElementById('clbtn').addEventListener('click', () => {
    const form = document.getElementById('form');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});