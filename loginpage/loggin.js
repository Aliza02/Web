
			function smalldevice(x)
			{
				if(x.matches)
				{

						document.getElementById('loginarea').style.display="none";
						var btn=document.getElementById('signupbtn');
						btn.addEventListener("click",function()
						{
							document.getElementById('logintext').style.display="none";
							document.getElementById('signup').style.display="block";
							
						})

						var btn1=document.getElementById('signinbtn');
						btn1.addEventListener("click",function()
						{
							document.getElementById('logintext').style.display="none";
							document.getElementById('signin').style.display="block";
							
						})
				}
				
			}
			var x=window.matchMedia("(max-width:767px)");
			smalldevice(x);
			x.addListener(smalldevice);

			
			function signup() {
				 document.getElementById('loginarea').style.display="none"; 
				 document.getElementById('signin').style.display="none"; 
				 document.getElementById('signup').classList.remove("d-none");
				 document.getElementById('signup').style.display="block"; 

			} 
			function signin() {
				 document.getElementById('loginarea').style.display="none"; 
				 document.getElementById('signup').style.display="none"; 
				 document.getElementById('signin').classList.remove("d-none");
				 document.getElementById('signin').style.display="block"; 
			}

		