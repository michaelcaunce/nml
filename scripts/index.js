// JavaScript Document

//* Code below is specific to Index.html and controls
//		the message appearing once the user clicks submit.
//		The Javascript is inside index.html which displays the users name inside the message.
//		The code below makes the message show, and the form hide.*/
		function display_welcome_message(event) {
			'use strict';
			event.preventDefault();
			$('#form').hide();
			$('.title1').hide();
			$('#instructions').show();

		  }
		/* The above function is called below */
		$(document).on('ready', function() {
			'use strict';
				$('#index-form-enter').on('click', display_welcome_message);	
});

//	       <!-- Below contains the Javascript called by the submit button in the form. -->
//	       <!-- showInput links to the input section further up. -->
//	       <!--Once the input class index-form-id is clicked, the value of input inside id first is displayed inside id display, and id display2. -->
//	       <script>


		function showInput() 
		{
		 document.getElementById('display').innerHTML = document.getElementById("first").value; 
		 document.getElementById('landing-welcome');
		 document.getElementById('display2').innerHTML = document.getElementById("first").value;
		 document.getElementById('landing-welcome');
		}

