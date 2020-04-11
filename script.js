$(document).ready(function () {


    let zip = "85296";  // gather this from user


    $("#searchBtn").on("click", function () {

        let searchFood = $("#foodInput").val();
        searchEdamam(searchFood);


        searchOpenWeather(zip, function (lat, lon) {
            // console.log("lat :" + lat + " long :" + lon);
            searchZomato(lat,lon, searchFood);

        });

        // searchEdamamFoodDB(searchFood);
        

    });


    // function searchEdamamFoodDB(usersRecipe) {

        // **********************************************************************************
        //  Make FoodDB seach call to Edamam,  locate cuisine lablel
        // *********************************************************************************

        //let edamamAppID = "da43e7e75";
        //let edamamAppKey = "d027a0191dc9b7613941ecea2e2fb5243";
        //let userSubmittedRecipe = recipe;

    //     // let edamamRecipeQueryURL = "https://api.edamam.com/search?q=" + searchFood + "&app_id=6ed8e227&app_key=b625542fdcf8fe77f73a1d01bbcbe005";

    //         $.ajax({

    //             url: "https://api.edamam.com/search?q="+ usersRecipe +"&app_id=6ed8e227&app_key=b625542fdcf8fe77f73a1d01bbcbe005",
    //             method: "GET"
    //         })

    //             .then(function (edamamResponse) {
    //                 console.log(response.hits[0].recipe);
    //                 console.log(response.hits[0].recipe.dietLabels)
    //                 console.log(response.hits[0].recipe.healthLabels)

    //             });
    // };



    function searchEdamam(usersRecipe) {

        //**********************************************************************************
        //  Make Recipe seach call to Edamam,  locate cuisine lablel
        //*********************************************************************************

        let edamamAppID = "d9d2f227";
        let edamamAppKey = "d7ef7e1d47c86463be79d5b8cfe85ceb";
        // let userSubmittedRecipe = recipe;

        let edamamRecipeQueryURL = "https://api.edamam.com/search?q=" + usersRecipe + "&app_id=" + edamamAppID + "&app_key=" + edamamAppKey;

        $.ajax({

            url: edamamRecipeQueryURL,
            method: "GET"
        })

            .then(function (edamamResponse) {

                console.log(edamamResponse);
                // return localcuisine;
            });

            searchZomato();
    };

    function searchOpenWeather(zipCode, callback) {

        //**********************************************************************************
        //Make Zip Code   -->  when user provides zip code
        //*********************************************************************************   
        // user openWetherApp - additional calls vs Smarty Streats?
        // consider using Geolocation API in addition/alternative to this? 
        

        // curl example api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
        let openWeatherapiKey = "b52ce1773e76080cb950272fcf749391";
        // let zipCode = 85295;  //this will be submitted by user
        let queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&units=imperial&APPID=" + openWeatherapiKey;


        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {

                let longitude = response.coord.lon;
                let latitiude = response.coord.lat;
                let cityName = response.name;

                // console.log("long :" + longitude + "lat :" + latitiude + "name :" + cityName);
                callback(longitude, latitiude);

            });

    };

    function searchZomato(lat, lon, searchFood) {
        //**********************************************************************************
        //***USE LATLON & CUISINE
        // zomato API Key a549ce24eb93dc5699075cf1ac33c10e
        //*********************************************************************************

        var zomatoAPIkey = "a549ce24eb93dc5699075cf1ac33c10e";
        // cuisines = "25";

        let zomatoCuisinesQueryURL = "https://developers.zomato.com/api/v2.1/search?lat="+ lat + "&lon=" + lon + "&cuisines=25&category=25";
        let cuisineFromEdamam = 0;
        $.ajax({
            headers: {
                "Accept": "application/json",
                "user-key": zomatoAPIkey
            },
            url: zomatoCuisinesQueryURL,
            method: "GET"
        })

            .then(function (searchResponse) {

                console.log(searchResponse);

            });
    };


});
