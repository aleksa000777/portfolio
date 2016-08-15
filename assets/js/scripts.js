$(document).ready(function(){
  init();
})

function init(){
}
function gen_mail_to_link(lhs,rhs,subject) {
  $('.mail').prepend("<a class='btn btn-social btn-envelope btn-simple' href=\"mailto:" + lhs + "@"+rhs + "?subject=" + subject + "\">" + "<i class='fa fa-envelope'>"+"<\/i>" + "<\/a>")
}

function gen_mail_to_link_text(lhs,rhs,subject) {
  $('.mail').prepend("<a href=\"mailto:" + lhs + "@"+rhs + "?subject=" + subject + "\">" + lhs + "@"+rhs + "<\/a>")
}
