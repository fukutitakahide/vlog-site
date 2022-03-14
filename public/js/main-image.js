function showimg1(){
     document.getElementById("area1").setAttribute("src","../img/fast/login.jpg");
}
function showimg2(){
     document.getElementById("area1").setAttribute("src","../img/fast/news-page.jpg");
}
function showimg3(){
     document.getElementById("area1").setAttribute("src","../img/fast/top-touroku.jpg");
}
function showimg4(){
     document.getElementById("area1").setAttribute("src","../img/fast/top.jpg");
}
function showimg5(){
     document.getElementById("area1").setAttribute("src","../img/fast/touroku.jpg");
}
function showimg6(){
     document.getElementById("area1").setAttribute("src","../img/fast/user-edit.jpg");
}
function showimg7(){
     document.getElementById("area2").setAttribute("src","../img/qanda/answer.jpg");
}
function showimg8(){
     document.getElementById("area2").setAttribute("src","../img/qanda/new.jpg");
}
function showimg9(){
     document.getElementById("area2").setAttribute("src","../img/qanda/question.jpg");
}
function showimg11(){
     document.getElementById("area3").setAttribute("src","../img/fukulog/vlog-about-me.png");
}
function showimg12(){
     document.getElementById("area3").setAttribute("src","../img/fukulog/vlog-contact.png");
}
function showimg13(){
     document.getElementById("area3").setAttribute("src","../img/fukulog/vlog-top.png");
}
function showimg14(){
     document.getElementById("area3").setAttribute("src","../img/fukulog/vlog-profile.png");
}
(function() {
    ('.hamburger').click(function() {
        (this).toggleClass('active');
 
        if ((this).hasClass('active')) {
            ('.globalMenuSp').addClass('active');
        } else {
            ('.globalMenuSp').removeClass('active');
        }
    });
});