document.addEventListener('scroll', function(e) {
if(window.scrollY>=30){
    document.getElementById('header').classList.add('fixed')
}    else {
     document.getElementById("header").classList.remove("fixed");
}
})