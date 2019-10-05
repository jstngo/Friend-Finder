console.log('scripts is connected')


$(document).ready(function(){
    // $("#insertName").submit(function (event){
    //     // event.preventDefault ()
    //     console.log("clicked")
    
    // })

    $("#submit").on("click", function(event){
                event.preventDefault ()
                
                var userInput = {
                    name: $('#userName').val().trim(),
                    photo: $('#userPhoto').val().trim(),
                    scores:[
                        $('#question1').val().trim(),
                        $('#question2').val().trim(),
                        $('#question3').val().trim(),
                        $('#question4').val().trim(),
                        $('#question5').val().trim(),
                        $('#question6').val().trim(),
                        $('#question7').val().trim(),
                        $('#question8').val().trim(),
                        $('#question9').val().trim(),
                        $('#question10').val().trim()
                    ]
                };

                // console.log("clicked")
                // var userInput = $("#surveyQuestions").val()
                // console.log(userInput)
                $.ajax({
                    url: "/insert",
                    method: "POST",
                    data: userInput
                }).done(function (data){
                    console.log(data)
                })
    })
})