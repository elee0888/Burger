$(function(){
    $(".create-form").on("submit", function(event) {
        Event.preventDefault()

        var newBurger = {
            burger_name: $("#newburger")
            .val()
            .trim(),
         devoured:0
        };
        
        $.ajax("/api/burgers", {
            type:"POST",
            data:newBurger
        }).then(function(){
            console.log("Added new burger");
            location.reload();
        });
    });

    $(".eatBurger").on("click", function(event){
        Event.preventDefault();

        var id = $(this).data("id");
        var devouredState={
            devoured: 1
        };

        $ajax("/apiburgers/" + id,{
            type: "PUT",
            data: devouredState
        }).then(function(){
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".trashburger").on("click", function(event){
        Event.preventDefault();

        var id= $(this).data("id");

        //sends the delete request//
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});