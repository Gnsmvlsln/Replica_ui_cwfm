		// <!-- Menu Toggle Script -->
		

		$(document).ready(function(){
			$("#menu-toggle, #menu-toggle2").click(function(e) {
				e.preventDefault();
				$("#wrapper").toggleClass("toggled");
				$(".sidebar-nav").fadeToggle();
			});

			$('.error-msg').hide();

			var error_forall = false;


			$("#empid").focusout(function(){
				check_empid();
			})
			$("#Email").focusout(function(){
				check_email();
			})
			$("#fName").focusout(function(){
				check_fname();
			})
			$("#lName").focusout(function(){
				check_lName();
			})
			$("#sName").focusout(function(){
				check_sName();
			})
			$("#year").focusout(function(){
				check_year();
			})
			$("#month").focusout(function(){
				check_month();
			})
			$("#sbu").focusout(function(){
				check_sbu();
			})
			$("#txtarea1").focusout(function(){
				check_caddr();
			})
			$("#txtarea2").focusout(function(){
				check_paddr();
			})
			$("#ccity").focusout(function(){
				check_ccity();
			})
			$("#cno").focusout(function(){
				check_cno();
			})
			$("#cpin").focusout(function(){
				check_cpin();
			})
			$("#eno").focusout(function(){
				check_eno();
			})
			$("#wloc").focusout(function(){
				check_wloc();
			})
			$("#pemail").focusout(function(){
				check_pemail();
			})
			$("#dob").focusout(function(){
				check_dob();
			})
			$("#pan").focusout(function(){
				check_pan();
			})
			$("#dofjoin").focusout(function(){
				check_dofjoin();
			})
			$("#desig").focusout(function(){
				check_desig();
			})
			$("#lastwork").focusout(function(){
				check_lastwork();
			})
			$("#desg").focusout(function(){
				check_desg();
			})
			$("#gender").focusout(function(){
				check_gender();
			})
			$("#blood").focusout(function(){
				check_blood();
			})
			$("#super").focusout(function(){
				check_super();
			})

			function check_empid()
			{
				var empid_regex = /^\+?[0-9(),.-]+$/;
				var check_empid_length = $("#empid").val().length;
				if(check_empid_length < 5 || check_empid_length > 10)
				{
					// $("#spans1star").show();
					$("#spans1").show();
					error_forall=true;
				}else if(!$("#empid").val().match(empid_regex)){
					$("#spans1").show();
					error_forall=true;
				}
				else{
					// $("#spans1star").hide();
					$("#spans1").hide();
				}
			}


			function check_email(){
				var email_var=$("#Email").val();
				var check_email_length =$("#Email").val().length;
				var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

				if(check_email_length < 10 || check_email_length>20)
				{
					$("#spans2").show()
					error_forall=true;
				}else if(!filter.test(email_var)){
					$("spans2").show()
					error_forall=true;
				}
				else{
					$("#spans2").hide();
				}
			}

			function check_fname(){
				var name_regx=  /^[A-Za-z]+$/;
				var fname_var_len=$("#fName").val().length;
				if(fname_var_len < 3 || fname_var_len > 15){
					$("#spans3").show();
					error_forall = true;
				}else if(!$("#fName").val().match(name_regx)){
					$("#spans3").show();
					error_forall = true;
				}
				else{
					$("#spans3").hide();
				}
			}

			function check_lName(){
				var lname_regx= /^[A-Za-z]+$/;
				var lname_var=$("#lName").val().length;
				if(lname_var < 3 || lname_var > 15){
					$("#spans4").show();
					error_forall = true;
				}else if(!$("#lName").val().match(lname_regx)){
					$("#spans4").show();
					error_forall =true;
				}
				else{
					$("#spans4").hide();
				}
			}
			function check_sName(){
				var sName_regx = /^[A-Za-z]+$/;
				var sName_var=$("#sName").val().length;
				if(sName_var < 3 || sName_var > 15){
					$("#spans5").show();
					error_forall = true;
				}else if(!$("#sName").val().match(sName_regx)){
					$("#spans5").show();
					error_forall = true;
				}
				else{
					$("#spans5").hide();
				}
			}
			function check_year(){
				var year_var=$("#year").val();
				var year_var_len=$("#year").val().length;
				var regex= new RegExp(/^\+?[0-9(),.-]+$/);
				if(!year_var.match(regex)){
					$("#spans6").show();
					error_forall = true;
				}else if(year_var_len <1 || year_var_len > 2){
					$("#spans6").show();
					error_forall = true;
				}else if($("#year").val()> 40){
					$("#spans6").show();
					error_forall = true;
				}
				else{
					$("#spans6").hide();
				}
			}

			function check_month(){
				var month_var=$("#month").val();
				var month_var_len=$("#month").val().length;
				var regex= new RegExp(/^\+?[0-9(),.-]+$/);
					if(!month_var.match(regex)){
						$("#spans6").show();
						error_forall=true
					}else if(month_var_len <1 || month_var_len > 2){
						$("#spans6").show();
						error_forall = true;
					}else if($("#month").val() 	> 11){
						$("#spans6").show();
						error_forall = true;
					}
					else{
						$("#spans6").hide();
					}
			}
			function check_sbu(){
				var sbu_var=$("#sbu").val().length;
				if(sbu_var<10){
					$("#spans7").show();
					error_forall = true;
				}else{
					$("#spans7").hide();
				}
					}
			function check_caddr(){
				var caddr_var=$("#txtarea1").val().length;
				if(caddr_var < 15 || caddr_var > 50){
					$("#spans8").show();
					error_forall = true;
				}else{
					$("#spans8").hide();
				}
			}
			function check_paddr(){
				var paddr_var=$("#txtarea2").val().length;
				if(paddr_var < 15 || paddr_var > 50){
					$("#spans9").show();
					error_forall = true;
				}else{
					$("#spans9").hide();
				}
			}
			function check_ccity(){
				var ccity_regx = /^[A-Za-z]+$/;
				var ccity_var=$("#ccity").val().length;
				if(!$("#ccity").val().match(ccity_regx)){
					$("#spans10").show();
					error_forall = true;
				}else if(ccity_var <3 || ccity_var > 15){
					$("#spans10").show();
					error_forall = true;
				}
				else{
					$("#spans10").hide();
				}
			}
			function check_cno(){
				var cno_regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
				if(!$("#cno").val().match(cno_regex)){
					$("#spans11").show();
					error_forall = true;
				}else if($("#cno").val().length <10 || $("#cno").val().length > 10)
				{
					$("#spans11").show();
					error_forall = true;
				}
				else{
					$("#spans11").hide();
				}
			}
			function check_cpin(){
				var cpin_regex = /^\d{6}$/;
				if(!$("#cpin").val().match(cpin_regex)){
					$("#spans12").show();
					error_forall = true;
				}else{
					$("#spans12").hide();
				}
			}
			function check_eno(){
				var ceno_regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
				if(!$("#eno").val().match(ceno_regex)){
					$("#spans13").show();
					error_forall = true;
				}else if($("#eno").val().length <10 || $("#eno").val().length > 10){
					$("#spans13").show();
					error_forall = true;
				}
				else{
					$("#spans13").hide();
				}

			}
			function check_wloc(){
				var wloc_regex = /^[A-Za-z]+$/;
				var wloc_var = $("#wloc").val().length;
				if(!$("#wloc").val().match(wloc_regex))
				{
					$("#spans14").show();
					error_forall = true;
				}else if(wloc_var <3 || wloc_var >15){
					$("#spans14").show();
					error_forall = true;
				}else{
					$("#spans14").hide();
				}
			}
			function check_pemail(){
				var pemail_var=$("#pemail").val();
				var check_pemail_length =$("#pemail").val().length;
				var filter2 = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

				if(check_pemail_length < 10 || check_pemail_length>20)
				{
					$("#spans15").show()
					error_forall=true;
				}else if(!filter2.test(pemail_var)){
					$("spans15").show()
					error_forall=true;
				}
				else{
					$("#spans15").hide();
				}
			}
		    function check_dob(){
				if($("#dob").val() == "")
				{
					$("#spans16").show();
					error_forall = true;
				}else{
					$("#spans16").hide();
				}
			}
			function check_pan(){
				var pan_regex = /[a-zA-z]{5}\d{4}[a-zA-Z]{1}/;
				var pan_var = $("#pan").val();
				if(!pan_regex.test(pan_var))
				{
					$("#spans17").show();
					error_forall = true;
				}else{
					$("#spans17").hide()
				}
			}
			function check_dofjoin(){
				if($("#dofjoin").val() == "")
				{
					$("#spans18").show();
					error_forall = true;
				}else{
					$("#spans18").hide();
				}
			}
			function check_desig(){
				if($("#desig").val() == ""){
					$("#spans19").show();
					error_forall = true;
				}else{
					$("#spans19").hide();
				}
			}
			function check_lastwork(){
				if($("#lastwork").val() == ""){
					$("#spans20").show();
					error_forall = true;
				}else{
					$("#spans20").hide();
				}
			}
			function check_desg(){
				if($("#desg").val() == ""){
					$("#spandesg").show();
					error_forall = true;
				}else{
					$("#spandesg").hide();
				}
			}
			function check_gender(){
				if($("#gender").val() == ""){
					$("#spansgend").show()
					error_forall = true;
				}else{
					$("#spansgend").hide();
				}
			}
			function check_blood(){
				if($("#blood").val() == ""){
					$("#spansblood").show();
					error_forall = true;
				}else{
					$("#spansblood").hide();
				}
			}
			function check_super(){
				if($("#super").val() == ""){
					$("#spanssuper").show();
					error_forall = true;
				}else{
					$("#spanssuper").hide();
				}
			}

			$("#myForm").submit(function(){

				error_forall = false;

				check_empid();
				check_email();
				check_fname();
				check_lName();
				check_sName();
				check_year();
				check_month();
				check_sbu();
				check_caddr();
				check_paddr();
				check_ccity();
				check_cno();
				check_cpin();
				check_eno();
				check_wloc();
				check_pemail();
				check_dob();
				check_pan();
				check_dofjoin();
				check_desig();
				check_lastwork();
				check_desg();
				check_gender();
				check_blood();
				check_super();


				if( error_forall == false)
				{
					return true;	
				}
				else{
					return false;
				}
			})

		})
		