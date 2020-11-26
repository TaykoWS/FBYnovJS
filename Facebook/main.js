//import {News} from "./news";
//import {Nav} from "./nav";
//import {Messenger} from "./messenger";

//MODULE 1//-----------------------------------
$("button").click(function(e){
    e.preventDefault();
    const message = $("form").serializeArray();
    $.ajax({
        url: "init.php?function=postMessage",
        method:"POST",
        data:message,
        success:getMessages()
    })
})

function getMessages(){
    $("#affichage").html("");
    
    $.ajax({
        url: "init.php",
        dataType: "JSON",
        data:{
            function:"getMessages"
        },

        success:function(response){
            response.forEach(message => {
                $("#affichage").append(`
                <p>${message.text}</p>
                `)
            });
        }
    })
}

//MODULE 2//-----------------------------------


