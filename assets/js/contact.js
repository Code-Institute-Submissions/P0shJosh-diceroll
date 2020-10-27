window.addEventListener("load", () => {
    /* 
    Code all based on examples from emailjs.send
    */
    
        $('.input2').each(function(){
            $(this).on('blur', function(){
                if($(this).val().trim() != "") {
                    $(this).addClass('has-val');
                }
                else {
                    $(this).removeClass('has-val');
                }
            });    
        });
       
        var name = $('.validate-input input[name="name"]');
        var email = $('.validate-input input[name="email"]');
        var message = $('.validate-input textarea[name="message"]');
        
        //Form Validation ensures all sections filled otherwisw form won't send
        $('.validate-form').on('submit',function(){
            var check = true;
    
            if($(name).val().trim() == ''){
                showValidate(name);
                check=false;
            }
    
            if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                showValidate(email);
                check=false;
            }
    
            if($(message).val().trim() == ''){
                showValidate(message);
                check=false;
            }
    
            if(check){
                 emailjs.sendForm('service_z3n0zgh',
                      'template_dxkk6p5', this);
                      document.getElementById('successMessage').innerHTML = "Message Sent!"; //If successful changes title to reflect message sent
                      document.getElementById('contactForm').reset();
            }
            
            return false;
    
        });
        //If the user closes the modal after, revert the title back to original text
        changeTitle = () => {
            document.getElementById('successMessage').innerHTML = "Contact Us";
        }

        //If form isn't filled out correctly, the following ensures pop ups appear
        $('.validate-form .input2').each(function(){
            $(this).focus(function(){
               hideValidate(this);
           });
        });
    
        function showValidate(input) {
            var thisAlert = $(input).parent();
    
            $(thisAlert).addClass('alert-validate');
        }
    
        function hideValidate(input) {
            var thisAlert = $(input).parent();
    
            $(thisAlert).removeClass('alert-validate');
        }
    });