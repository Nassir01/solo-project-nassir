$("#b").hide()
$("#r").hide()
$("#j").hide()
$("#bl").hide()
$('#input').hide()
$(".lesson").hide()

$("#basic").click(function(){
    $("#r").hide()
    $("#j").hide()
    $("#bl").hide()
    // $('#input').hide()
    $("#b").toggle(); 
})


$("#rock").click(function(){
    $("#b").hide()
    $("#j").hide()
    $("#bl").hide()
    // $('#input').hide()
    $("#r").toggle();
})



  $("#jazz").click(function(){
    $("#b").hide()
    $("#r").hide()
    $("#bl").hide()
    // $('#input').hide()
    $("#j").toggle();
  })




  $("#blues").click(function(){
    $("#b").hide();
    $("#r").hide();
    $("#j").hide();
    // $('#input').hide();
    $("#bl").toggle();
  })

  $("#login").click(function(){
    $("#b").hide();
    $("#r").hide();
    $("#j").hide();
    $('#input').toggle();
  })




$('#load').on('click', function(){
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        
        $(this).val(value);
        
    }); 
});
var modal = document.getElementById('input');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  function loginaccount(){
    var username=$('#text').val();
  var password=$('#text2').val();
    if(localStorage.getItem(username)===password) {
      alert("Welcome Drummer!!")
      
       $(".lesson").show()
       
      return false 
  }
   else {alert("YOUR PASSWORD IS INCORRECT!!")
     
      return false 
    }
  }


function createaccount(){
  var x= JSON.stringify(localStorage)
  console.log(x)
 
  var username=$('#text').val();
  var password=$('#text2').val();
  for(var key in x ){
  if (key==="#text"){
    alert("the username is already used , try another one")
  }else{

  if (typeof(Storage) !== "undefined") {
  localStorage.setItem(username,password);
    document.getElementById("result").innerHTML = localStorage.getItem(username);
  } 
    }}}
    
$("#create").click(createaccount);
$("#login").click(loginaccount);

function login() {
  console.log("loggin in ...")
  console.log(document.getElementById('input'))
  document.getElementById('input').style.display = "block";
  console.log(document.getElementById('input').style.display)
  console.log(document.getElementById('input'))
}