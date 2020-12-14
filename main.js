$("#b").hide()
$("#r").hide()
$("#j").hide()
$("#bl").hide()

$("#basic").click(function(){
    $("#r").hide()
    $("#j").hide()
    $("#bl").hide()
    $("#b").toggle();


})


    $("#rock").click(function(){
        $("#b").hide()
$("#j").hide()
$("#bl").hide()
        $("#r").toggle();
    
    })
  


  $("#jazz").click(function(){
    $("#b").hide()
    $("#r").hide()
    $("#bl").hide()
    $("#j").toggle();
  })




  $("#blues").click(function(){
    $("#b").hide()
    $("#r").hide()
    $("#j").hide()
  
    $("#bl").toggle();
  })




$('#load').on('click', function(){
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        
        $(this).val(value);
        
    }); 
});
  
  