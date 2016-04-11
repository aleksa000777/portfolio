$(document).ready(function(){
  init();
})

function init(){
  // console.log("mew");
  //   imageWidth = $('.shadow-white img').width();
  //   parentWidth = $('.shadow-white').width();
  //   if (imageWidth > parentWidth) {
  //       $('.shadow-white img').css('width', '100%');
  //   }
}
function gen_mail_to_link(lhs,rhs,subject) {
  $('.mail').prepend("<a class='btn btn-social btn-envelope btn-simple' href=\"mailto:" + lhs + "@"+rhs + "?subject=" + subject + "\">" + "<i class='fa fa-envelope'>"+"<\/i>" + "<\/a>")
    }
// function scroll_nav(){
  // $('a[href^="#"]').on('click', function(event) {
  //   console.log("here");
  //   console.log(this);
  //     var target = $(this).attr('href');
  //     console.log(target);
  //     if( target.length ) {
  //         event.preventDefault();
  //         $('html, body').animate({
  //             scrollTop: target.offset().top
  //         }, 1000);
  //     }
  // });
// }
