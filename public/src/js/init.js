
$(document).ready(function(){
	
	 var spinners = Array("spinner1","spinner2","spinner3","spinner4","spinner5","spinner6","spinner7");
	 function rand(arg) {
	 	var ins = Math.floor((Math.random() * 6) + 0)
	    return arg[ins];
	 };

	 $(".fakeloader").fakeLoader({
        timeToHide:1000,
        bgColor:"#34495e",
        spinner: rand(spinners)
     });



 	new WOW().init();
	$('#navi').addClass('animated slideInDown');

	$(function() {
	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 800, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});


     $(function(){
        $(".typo").typed({
            	strings: [" ^1000 <i></i>Hello( )<br> ^1000 {  <br> <strong style='margin-left: 3em'>Ciao! Im Jaypee.</strong> ^500 <br> <strong style='margin-left: 3em'>A Web Developer,</strong> ^1000 <br> <strong style='margin-left: 3em'>I like writing clean and readable code. </strong>  <br>  } <br> "],
                typeSpeed: 20,
                backDelay: 500,
                cursorChar: " _",
        });
     });

     $('#send').click(function() {
         event.preventDefault();
         var name = $('#rcpt').val();
         var numb = $('#numb').val();
         var txtmsg = $('#txtmsg').val();

         if ((name=="") && (numb=="") && (txtmsg=="")) {
             $('#smsstat').html("<p class='text-warning'>Please complete input field! <span class='glyphicon glyphicon-exclamation-sign'>  </span></p>");
         }
         else
         {
         $.ajax({
                type: "POST",
                url:"http://localhost:1000/sms",
                data: {rcpt: name, numb: numb, txtmsg: txtmsg},
                success:function(result){
                    console.log(result);
                    $('#rcpt').val('');
                    $('#numb').val('');
                    $('#txtmsg').val('');
                    $('#smsstat').html(result);
                }, 
                error: function(data){
                    $('#rcpt').val('');
                    $('#numb').val('');
                    $('#txtmsg').val('');
                    $('#smsstat').html("<p class='text-danger'>" + data + "</p>");
                }
            });
         }
     });

        $(document).on('closed', '.remodal', function (e) {
            $('#rcpt').val('');
            $('#numb').val('');
            $('#txtmsg').val('');
            $('#smsstat').html('');
            $('.form-group').removeClass('has-error');
            $('.with-errors').html('');
        });


     $('#i1')
     	  .mouseenter(function() {
		    $('#i1').addClass("fa-spin");
		  })
		  .mouseleave(function() {
		  $('#i1').removeClass("fa-spin");
     });

	  $('#i2')
     	  .mouseenter(function() {
		    $('#i1').addClass("fa-spin");
		  })
		  .mouseleave(function() {
		  $('#i1').removeClass("fa-spin");
     });

     $('#sub').click(function(){

     	event.preventDefault();
     	var name = $('#client').val();
     	var email = $('#eadd').val();
     	var mess = $('#message').val();

     	if ((mess == "") || (name == "") || (mess == "")) {
     		var alerts = "<p class='text-warning'>Please Complete the fields</p>";
     		$('#notif').html(alerts);
     	}else{
     		$('#notif').html('');
     		$.ajax({
     			type: "POST",
     			url:"http://localhost:1000/email",
     			data: {named: name, email: email, mess: mess},
     			success:function(result){
     				console.log(result);
			   		$('#client').val('');
			     	$('#eadd').val('');
			     	$('#message').val('');
					$('#notif').html("<p class='text-success'>Message Sent  <sapn class='glyphicon glyphicon-ok'></span></p>");
                  
				}, 
				error: function(data){
					$('#notif').html("<p class='text-danger'>" + data + "</p>");

				}
			});
     	

     	};

     });





});
