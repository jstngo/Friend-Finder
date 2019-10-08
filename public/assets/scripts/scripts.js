console.log("scripts is connected");

$(document).ready(function () {
    // $("#insertName").submit(function (event){
    //     // event.preventDefault ()
    //     console.log("clicked")
    $("#surveyButton").click(function () {

        alert("YO")
        
        // console.log("it worked");
        
        // location.href = "../../survey.html";
        // $.ajax({
        //     url: "/survey",
        //     method: "get"
        // }).then(function (res){
        
        //     console.log(data)
        
        //     // res.sendFile(path.join(__dirname, "public/survey.html"))
        // })
        });
    // })

    $("#submit").on("click", function (event) {
        event.preventDefault();

        var uI = {
            name: $("#userName")
                .val(),
            photo: $("#userPhoto")
                .val(),
            scores: [
                $("#question1")
                    .val()
                    .trim(),
                $("#question2")
                    .val()
                    .trim(),
                $("#question3")
                    .val()
                    .trim(),
                $("#question4")
                    .val()
                    .trim(),
                $("#question5")
                    .val()
                    .trim(),
                $("#question6")
                    .val()
                    .trim(),
                $("#question7")
                    .val()
                    .trim(),
                $("#question8")
                    .val()
                    .trim(),
                $("#question9")
                    .val()
                    .trim(),
                $("#question10")
                    .val()
                    .trim()
            ]
        };

        // console.log("clicked")
        // var uI = $("#surveyQuestions").val()
        // console.log(uI)
        $.ajax({
            url: "/api/friends",
            method: "POST",
            data: {nam : uI.name}
        }).done(function (data) {
            console.log(data);
        });
    });
});
