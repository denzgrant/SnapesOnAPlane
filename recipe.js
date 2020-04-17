$(document).ready(function () {

    // function spoonacularCall(){
    //     var searchFood =$("#foodInput").val();
    //  $.ajax({
    //             url: "https://api.spoonacular.com/recipes/search?&query="+ searchFood +"&number=5&apiKey=8de77782b79a4782b83241f64a78a1d0",
    //             // url: "https://api.spoonacular.com/recipes/search?query=yogurt&apiKey=8de77782b79a4782b83241f64a78a1d0",
    //             // "https://api.spoonacular.com/recipes/search?query=cheese&number=2",

    //             method: "GET",
    //         }).then(function (response) {
    //             console.log(response)
    //         });

    // }
    $("#searchBtn").on("click", function () {
        // spoonacularCall();
        recipesCall()
    })
    function recipesCall() {
        $("#recipesDispaly").empty();
        const apiKey = "&app_key=b625542fdcf8fe77f73a1d01bbcbe005";
        const appId = "&app_id=6ed8e227";
        const queryURLsearch = "https://api.edamam.com/search?q="
        var searchFood = $("#foodInput").val();
        $.ajax({
            url: queryURLsearch + searchFood + appId + apiKey,
            method: "GET"
        }).then(function (response) {

            console.log(response)
            // console.log(response.hits[0].recipe);
            // console.log(response.hits[0].recipe.label);
            // console.log(response.hits[0].recipe.shareAs);
            // console.log(response.hits[0].recipe.image);
            // console.log(response.hits[0].recipe.dietLabels)
            // console.log(response.hits[0].recipe.healthLabels)
            for (var i = 0; i < response.hits.length; i++) {
                var recipesResult = response.hits[i].recipe

                var dropDownRecipesNameDisplay = $("<h2>").text(recipesResult.label)

                var recipesUl = $("<ul>")
                var dropDownRecipesDisplayLinkLi = $("<li>");
                var drowDownRecipesDisplayLink = $("<a>").attr("href", recipesResult.shareAs).text("check out recipe")
                dropDownRecipesDisplayLinkLi.append(drowDownRecipesDisplayLink)

                var dropDownRecipesDisplayDietLabelsLi = $("<li>").text("Diet Labels: " + recipesResult.dietLabels)
                var dropDownRecipesDisplayHealthLabelLi = $("<li>").text("Health Labels: " + recipesResult.healthLabels)

                var dropDownRecipesDisplayimageLi = $("<li>")
                var dropDownRecipesDisplayimage = $("<img>").attr("src", recipesResult.image).attr("alt", recipesResult.label);
                dropDownRecipesDisplayimageLi.append(dropDownRecipesDisplayimage);

                recipesUl.append(dropDownRecipesDisplayLinkLi, dropDownRecipesDisplayDietLabelsLi, dropDownRecipesDisplayHealthLabelLi, dropDownRecipesDisplayimageLi)

                var dropdownButton = $("<button>").text("Check here for Details").addClass("uk-button uk-button-primary").attr("type", "button")
                var dropDownDiv = $("<div>").attr("uk-dropdown", "")

                dropDownDiv.append(recipesUl);

                $("#recipesDispaly").append(dropDownRecipesNameDisplay, dropdownButton, dropDownDiv)
            };

        
            
        })
    };

function coinTossOption() {
    var coinTossOptions = ["Hmm...Eating out sound so good right now", "Cook sound fun today!!", "Lets go out to.....", "Lets make some delicious meal today!!"]
    var randomNum = Math.floor((Math.random() * (coinTossOptions.length)))
    outcomeDisplay = $("<div>").text(coinTossOptions[randomNum]).addClass("uk-text-warning");
    $("#coinTossDisplay").append(outcomeDisplay);

}
$("#coinToss").on("click", function () {
    $("#coinTossDisplay").empty()
    // coinToss();
    coinTossOption()
})

});