$(document).ready(function () {

    // **General ZOMATO info
    // zomato API Key a549ce24eb93dc5699075cf1ac33c10e
    // Uncomment each API ajax call as needed
    var zomatoAPIkey = "a549ce24eb93dc5699075cf1ac33c10e";

    // #1***Categories API - my first test
    // -notice the 'headers object with the accept and user key info

    let zomatoCategoriesQueryURL = "https://developers.zomato.com/api/v2.1/categories";


    //**********************************************************************************
    // Edamam Search - Michelle
    //*********************************************************************************
    $(document).ready(function () {

        const apiKey = "&app_key=7f3dde61a010db79ca5ad499826e8d8";
        const appId = "&app_id= 5c5c0f98&";
        const queryURLsearch = "https://api.edamam.com/search?q="

        $("#searchBtn").on("click", function () {
            var searchFood = $("#foodInput").val();
            $.ajax({
                url: "https://api.edamam.com/search?q=" + searchFood + "&app_id=6ed8e227&app_key=b625542fdcf8fe77f73a1d01bbcbe005",

                // "https://api.edamam.com/search?=chicken&app_id=4a5d81a2&app_key=379308ab9da9a8ee47f63563d2774ac4&from=0&to=9&q=",
                // queryURLsearch + searchTerm +appdId +apiKey +"form=0&to=5&",
                method: "GET"
            }).then(function (response) {
                console.log(response)
                // console.log(response.hits[0].recipe);
                // console.log(response.hits[0].recipe.dietLabels)
                // console.log(response.hits[0].recipe.healthLabels)
            })
            // function recipesCall(){

            // }

        })


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
    });