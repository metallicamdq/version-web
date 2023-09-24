

// Contact Form Handler

$(document).ready(function (){
    
    $(".contact-form").submit(function(e){
        e.preventDefault();
    
    var response = grecaptcha.getResponse();
      
    if(response.length == 0){
      alert("Captcha no verificado")
    }
    else {
      $.ajax({
                type: $(this).attr("method"),
                url: $(this).attr("action"),
                data: $(this).serialize(),
                success: function(){
                    $(".contact-form").addClass("display-none");
                    $(".message-sent").removeClass("display-none");
                },
                error: function(){
                    alert("Lo sentimos, ha ocurrido un error.\nPor favor contáctenos por otra vía.\nMuchas gracias");
                }
          });
    }

        return false;

    });

});




// Flights Form Handler

$(document).ready(function (){
    
    $(".flights-form").submit(function(e){
        e.preventDefault();
    
    var response = grecaptcha.getResponse();
      
    if(response.length == 0){
      alert("Captcha no verificado")
    }
    else {
      $.ajax({
                type: $(this).attr("method"),
                url: $(this).attr("action"),
                data: $(this).serialize(),
                success: function(){
                    $(".flights-form").addClass("display-none");
                    $(".message-sent").removeClass("display-none");
                },
                error: function(){
                    alert("Lo sentimos, ha ocurrido un error.\nPor favor contáctenos por otra vía.\nMuchas gracias");
                }
          });
    }

        return false;

    });

});




//Form Leg Handler

let inputs = document.getElementsByClassName('flights-form-radio');

for(let i=0; i<inputs.length;i++){
    inputs[i].addEventListener('click',function(){
        let valor = this.value;
        if(valor === "Sólo Ida"){
            document.getElementById("form-input-return").style.display = "none"
        }
        else if(valor === "Ida y Vuelta"){
            document.getElementById("form-input-return").style.display = "flex"
        }
    });
}




//Form Page Handler

function formPageHandler(){
    const formPages = document.querySelectorAll('.flights-form-page');

    var formInput1 = $('#form-input-1').val();
    var formInput2 = $('#form-input-2').val();
    var formInput3 = $('#form-input-3').val();
    var formInput4 = $('#form-input-4').val();
    
    if(formInput1 && formInput2 && formInput3 && formInput4 !== ""){
        for(let e=0; e<formPages.length; e++){
            formPages[e].classList.toggle('display-none');
            formPages[e].classList.toggle('display-flex');
        }
    }
}

