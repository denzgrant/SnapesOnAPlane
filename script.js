$(document).ready(function () {


    let zip = "85296";  // gather this from user


    $("#searchBtn").on("click", function () {

        let searchFood = $("#foodInput").val();
        searchSpoonacular(searchFood);


        searchOpenWeather(zip, function (lat, lon) {
            // console.log("lat :" + lat + " long :" + lon);
            // searchZomato(lat,lon, searchFood);

        })

        searchZomato(searchFood);


    });



    //**********************************************************************************
    //  Spoonacular - Michelle
    //********************************************************************************



    function searchSpoonacular(searchFood) {
        const spoonAPIKey = "e549d6e9b38545a3a604db06b9006011";
        const spoonQueryURL =
            "https://api.spoonacular.com/recipes/random" +
            // searchfood +
            "?apiKey=" +
            spoonAPIKey;

        $.ajax({
            url: spoonQueryURL,
            method: "GET"
        })

            .then(function (spoonResponse) {

                console.log(spoonResponse);


            });

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

    function searchZomato(searchFood) {

        //**********************************************************************************
        //***USE LATLON & CUISINE
        // zomato API Key a549ce24eb93dc5699075cf1ac33c10e
        //*********************************************************************************

        var zomatoAPIkey = "a549ce24eb93dc5699075cf1ac33c10e";
        // cuisines = "25";

        let zomatoCuisinesQueryURL = "https://developers.zomato.com/api/v2.1/search?q=" + searchFood;

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
                // console.log(searchFood);

                for(let i = 0; i < 5; i++){
                    console.log("Result #"+[i]+" :");
                    console.log(searchResponse.restaurants[i].restaurant.name);
                    console.log(searchResponse.restaurants[i].restaurant.location.address);
                    console.log("Rating :"+searchResponse.restaurants[i].restaurant.user_rating.aggregate_rating);
                    console.log("Cuisine type :" + searchResponse.restaurants[i].restaurant.cuisines);
                    console.log("Hours :"+ searchResponse.restaurants[i].restaurant.timings);

                };

            });
    };


    //**********************************************************************************
    // serch Zomato w/o zip
    //*********************************************************************************

    // function searchZomato(searchFood) {
    //     //**********************************************************************************
    //     //***USE LATLON & CUISINE
    //     // zomato API Key a549ce24eb93dc5699075cf1ac33c10e
    //     //*********************************************************************************

    //     var zomatoAPIkey = "a549ce24eb93dc5699075cf1ac33c10e";
    //     // cuisines = "25";

    //     let zomatoCuisinesQueryURL = "https://developers.zomato.com/api/v2.1/search?q=" + searchFood;

    //     $.ajax({
    //         headers: {
    //             "Accept": "application/json",
    //             "user-key": zomatoAPIkey
    //         },
    //         url: zomatoCuisinesQueryURL,
    //         method: "GET"
    //     })

    //         .then(function (searchResponse) {

    //             console.log(searchResponse);
    //             console.log(searchFood);

    //         });
    // };


});


//**********************************************************************************
//   OLD CODE - NOT USING
//*********************************************************************************

    //**********************************************************************************
    //  Make Recipe seach call to Edamam,  locate cuisine lablel
    //********************************************************************************

//     function searchEdamam(usersRecipe) {

// *

//         let edamamAppID = "d9d2f227";
//         let edamamAppKey = "d7ef7e1d47c86463be79d5b8cfe85ceb";
//         // let userSubmittedRecipe = recipe;

//         let edamamRecipeQueryURL = "https://api.edamam.com/search?q=" + usersRecipe + "&app_id=" + edamamAppID + "&app_key=" + edamamAppKey;

//         $.ajax({

//             url: edamamRecipeQueryURL,
//             method: "GET"
//         })

//             .then(function (edamamResponse) {

//                 console.log(edamamResponse);
//                 // return localcuisine;
//             });

//             searchZomato();
//     };

