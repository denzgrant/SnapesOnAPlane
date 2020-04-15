$(document).ready(function () {

    $("#searchBtn").on("click", function () {
        recipesCall();
        getLatLon();
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
            recipesDisplay(response)

        })
    }
    function recipesDisplay(response) {
        for (var i = 0; i < response.hits.length; i++) {
            var recipesResult = response.hits[i].recipe

            var dropDownRecipesNameDisplay = $("<h3>").text(recipesResult.label).attr("data-aos", "flip-left")

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
        }

    }
    function getLatLon() {
        let openWeatherapiKey = "&appid=b52ce1773e76080cb950272fcf749391";
        let zipCode = $("#zipcodeInput").val();
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?zip="
        $.ajax({
            url: queryURL + zipCode + openWeatherapiKey,
            method: "GET"
        })
            .then(function (response) {
                let longitude = response.coord.lon;
                let latitiude = response.coord.lat;
                let cityName = response.name;
                console.log("long :" + longitude + " lat :" + latitiude + " name: " + cityName);
                zomatoRestaurantCall(latitiude, longitude)

            });
    };

    // ----------------------------zomato------------------------------
    function zomatoRestaurantCall(latitiude, longitude) {

        const zomatoApiKey = "8ed1b92667f3ee82f4a77b02be24cf26";
        const zomatoQueryUrl = "https://developers.zomato.com/api/v2.1/search?q="
        var searchFood = $("#foodInput").val();
        const zomatoSearchCount = "&count=10"
        const zomatoLat = "&lat=" + latitiude
        const zomatoLon = "&lon=" + longitude
        $.ajax({
            headers: {
                "Accept": "application/json",
                "user-key": zomatoApiKey
            },
            url: zomatoQueryUrl + searchFood + zomatoSearchCount + zomatoLat + zomatoLon,
            // "https://developers.zomato.com/api/v2.1/search?q=burger&count=10&lat=33.427204&lon=-111.939896",
            method: "GET"
        })

            .then(function (searchResponse) {

                console.log(searchResponse);
                console.log(searchResponse.restaurants)
                console.log(searchResponse.restaurants[0])
                console.log(searchResponse.restaurants[0].restaurant.name)
                console.log(searchResponse.restaurants[0].restaurant.url)
                console.log(searchResponse.restaurants[0].restaurant.location.address)
                console.log(searchResponse.restaurants[0].restaurant.highlights)
            });
    }
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