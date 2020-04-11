$(document).ready(function () {

    // **General ZOMATO info
    // zomato API Key a549ce24eb93dc5699075cf1ac33c10e
    // Uncomment each API ajax call as needed
    

    // #1***Categories API - my first test
    // -notice the 'headers object with the accept and user key info

    // let zomatoCategoriesQueryURL = "https://developers.zomato.com/api/v2.1/categories";

    // $.ajax({
    //     headers: {
    //         "Accept": "application/json",
    //         "user-key": zomatoAPIkey
    //     },
    //     url: zomatoCategoriesQueryURL,
    //     method: "GET"
    // })

    //     .then(function (categoriesResponse) {

    //         // console.log(categoriesResponse);
    //         /* Displays severl categories including:
    //         0:
    //         categories: {id: 1, name: "Delivery"}
    //         __proto__: Object
    //         1:
    //         categories: {id: 2, name: "Dine-out"}
    //         __proto__: Object
    //         2:
    //         categories: {id: 3, name: "Nightlife"}
    //         __proto__: Object
    //         3:
    //         categories: {id: 4, name: "Catching-up"}
    //         __proto__: Object
    //         4:
    //         categories: {id: 5, name: "Takeaway"}
    //         __proto__: Object
    //         5:
    //         categories: {id: 6, name: "Cafes"}
    //         __proto__: Object
    //         6:
    //         categories: {id: 7, name: "Daily Menus"}
    //         __proto__: Object
    //         7:
    //         categories: {id: 8, name: "Breakfast"}
    //         __proto__: Object
    //         8:
    //         categories: {id: 9, name: "Lunch"}
    //         __proto__: Object
    //         9:
    //         categories: {id: 10, name: "Dinner"}
    //         __proto__: Object
    //         10:
    //         categories: {id: 11, name: "Pubs & Bars"}
    //         __proto__: Object
    //         11:
    //         categories: {id: 13, name: "Pocket Friendly Delivery"}
    //         __proto__: Object
    //         12:
    //         categories: {id: 14, name: "Clubs & Lounges"} */


    //     });

    //     #2***City by name
    // we need to perform this search to pull the city ID info -> then call ?? API
    // the response when searching gilbert, an array with 4 diffent towns in different states (drop down menu for state?)
    // ok - looking into search by zip (maybe we make users enter zip)

    // let userSearchTerm = "Seattle";
    // let zomatoCitiesByNameQueryURL = "https://developers.zomato.com/api/v2.1/cities?q=" + userSearchTerm;

    // $.ajax({
    //     headers: {
    //         "Accept": "application/json",
    //         "user-key": zomatoAPIkey
    //     },
    //     url: zomatoCitiesByNameQueryURL,
    //     method: "GET"
    // })

    //     .then(function (response) {

    //         console.log(response);
    //     });

    // #3**Collections using City ID  - mesa 11187
    // looks like we are going to have to determine the city ID - to get any relevant data


    // let cityID = 11187;
    // let zomatoCollectionsQueryURL = "https://developers.zomato.com/api/v2.1/collections?city_id=" + cityID;

    // $.ajax({
    //     headers: {
    //         "Accept": "application/json",
    //         "user-key": zomatoAPIkey
    //     },
    //     url: zomatoCollectionsQueryURL,
    //     method: "GET"
    // })

    //     .then(function (collectionsResponse) {

    //         console.log(collectionsResponse);
    //         //Most Popular Resturants this week
    //         console.log(collectionsResponse.collections[0].collection.description);
    //         console.log(collectionsResponse.collections[1].collection.description);
    //         console.log(collectionsResponse.collections[2].collection.description);
    //         console.log(collectionsResponse.collections[2].collection.title);
    //         console.log(collectionsResponse.collections[2].collection.image_url);
    //     });

    // #2***City by name
    // we need to perform this search to pull the city ID info -> then call ?? API
    // the response when searching gilbert, an array with 4 diffent towns in different states (drop down menu for state?)
    // ok - looking into search by zip (maybe we make users enter zip)

    // let userSearchTerm = "Gilbert";
    // let zomatoCitiesByNameQueryURL ="https://developers.zomato.com/api/v2.1/cities?q="+userSearchTerm;

    //     $.ajax({
    //         headers: {
    //             "Accept": "application/json",
    //             "user-key": zomatoAPIkey
    //         },
    //         url:zomatoCitiesByNameQueryURL,
    //         method: "GET"
    //     })

    //     .then(function (response){

    //         console.log(response);
    //     });


    

    //#3**Collections using City ID  - mesa 11187
    //looks like we are going to have to determine the city ID - to get any relevant data


    // let cityID = 11187;
    // let zomatoCollectionsQueryURL ="https://developers.zomato.com/api/v2.1/collections?city_id=" +cityID;

    //         $.ajax({
    //         headers: {
    //             "Accept": "application/json",
    //             "user-key": zomatoAPIkey
    //         },
    //         url:zomatoCollectionsQueryURL,
    //         method: "GET"
    //     })

    //     .then(function (collectionsResponse){

    //         console.log(collectionsResponse);
    //         console.log(collectionsResponse.collections[0].collection.description);
    //         console.log(collectionsResponse.collections[1].collection.description);
    //         console.log(collectionsResponse.collections[2].collection.description);
    //         console.log(collectionsResponse.collections[2].collection.title);
    //         console.log(collectionsResponse.collections[2].collection.image_url);
    //     });

    // let cityName = "11187";
    // let zomatoCuisinesQueryURL = "https://developers.zomato.com/api/v2.1/search?lat=33.448376&lon=-112.074036&cuisines=25&category=25";

    // $.ajax({
    //     headers: {
    //         "Accept": "application/json",
    //         "user-key": zomatoAPIkey
    //     },
    //     url: zomatoCuisinesQueryURL,
    //     method: "GET"
    // })

    //     .then(function (searchResponse) {

    //         console.log(searchResponse);
          

    //     });

    // ***** Zip code to lat long conversion*****//
    //****Smarty Streets
    //We would have to use SmartyStreets to get the long and lat and then /cuisines


    //SmartyStreets API Key:  NUyt5AzQ2s8Uj3fsc3Gg5aUUpVvulOX8wiBzUBWrRPNt1zlUOMG7XVBe2U79dXkf
    // SmartyStreets auth-id: 79c8e6ad-5580-f54d-a3fd-6b61e3afa1c0; 
    // SmartyStreets auth-token: aeAOvpVM8CGwrrhDkHW7
    //250 LOOK-UPS A MONTH: MAKE SURE TO COMMENT OUT IF YOURE TESTING OTHER ASPECTS OF THE CODE

    // let ssZipCode = "85066";
    // let smartyStreetsQueryURL = "https://us-zipcode.api.smartystreets.com/lookup?auth-id=79c8e6ad-5580-f54d-a3fd-6b61e3afa1c0&auth-token=aeAOvpVM8CGwrrhDkHW7&zipcode=" + ssZipCode;

    // $.ajax({
    //     url: smartyStreetsQueryURL,
    //     method: "GET"

    // }).then(function (zipcodeResponse) {

    //     console.log(zipcodeResponse);
    //     //latitude
    //     console.log(zipcodeResponse[0].zipcodes[0].latitude);
    //     //longitude
    //     console.log(zipcodeResponse[0].zipcodes[0].longitude);

    // });

    function searchEdamam(recipe){

        //**********************************************************************************
        //  Make Recipe seach call to Edamam,  locate cuisine lablel
        //*********************************************************************************
        
        let edamamAppID = "d9d2f227";
        let edamamAppKey = "d7ef7e1d47c86463be79d5b8cfe85ceb";
        let userSubmittedRecipe = "chicken";
        
        let edamamRecipeQueryURL = "https://api.edamam.com/search?q="+userSubmittedRecipe+"&app_id="+edamamAppID+"&app_key="+edamamAppKey;

        $.ajax({

            url: edamamRecipeQueryURL,
            method: "GET"
        })

        .then(function (edamamResponse) {

            console.log(edamamResponse);
            // return localcuisine;
        });    
    };

    function searchOpenWeather(zipCode){


        //**********************************************************************************
        //Make Zip Code   -->  when user provides zip code
        //*********************************************************************************   
        // user openWetherApp - additional calls vs Smarty Streats?
        // consider using Geolocation API in addition/alternative to this? 
        var zomatoAPIkey = "a549ce24eb93dc5699075cf1ac33c10e";


    
    
        // curl example api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
        let openWeatherapiKey = "b52ce1773e76080cb950272fcf749391";
        let zipCode = 85295;
        let queryURL = "http://api.openweathermap.org/data/2.5/weather?zip="+zipCode+"&units=imperial&APPID="+openWeatherapiKey;
    
    
        $.ajax({
            url:queryURL,
            method: "GET"
        })

        .then(function (response){

            let longitude = response.coord.lon;
            let latitiude = response.coord.lat;
            let cityName = response.name;

            console.log("long :"+longitude+"lat :"+latitiude+"name :"+cityName);                  

        });
    };

    function searchZomato(cuisine,latlon){
        //**********************************************************************************
            //***USE LATLON & CUISINE
            // zomato API Key a549ce24eb93dc5699075cf1ac33c10e
            //*********************************************************************************
            
        let zomatoCuisinesQueryURL = "https://developers.zomato.com/api/v2.1/search?lat="+latitiude+"&lon="+longitude+"&cuisines=25&category=25";
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
