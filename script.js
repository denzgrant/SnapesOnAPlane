$(document).ready(function () {

  // // **General ZOMATO info
  // // zomato API Key a549ce24eb93dc5699075cf1ac33c10e
  // // Uncomment each API ajax call as needed
  // var zomatoAPIkey = "a549ce24eb93dc5699075cf1ac33c10e";

  // // #1***Categories API - my first test
  // // -notice the 'headers object with the accept and user key info

  // let zomatoCategoriesQueryURL = "https://developers.zomato.com/api/v2.1/categories";


  //**********************************************************************************
  // Edamam Search - Michelle
  // //*********************************************************************************
  // $(document).ready(function () {

  //     const apiKey = "e549d6e9b38545a3a604db06b9006011";
  //     const queryURLsearch = " https://api.spoonacular.com/recipes/search?query=cheese&apiKey=" + apiKey; 

  //     $("#searchBtn").on("click", function () {
  //         // var searchFood = $("#foodInput").val();

  //         $.ajax({
  //             url: queryURLsearch,
  //             method: "GET"
  //         }).then(function (response) {
  //             console.log(response)
  //             // console.log(response.hits[0].recipe);
  //             // console.log(response.hits[0].recipe.dietLabels)
  //             // console.log(response.hits[0].recipe.healthLabels)
  //         })
          // function recipesCall(){

          // }

      })

      //     $.ajax({
      //         url:queryURL,
      //         method: "GET"
      //     })

      // function searchEdamam(recipe){

      //     //**********************************************************************************
      //     //  Make Recipe seach call to Edamam,  locate cuisine lablel
      //     //*********************************************************************************
          
      //     let edamamAppID = "d9d2f227";
      //     let edamamAppKey = "d7ef7e1d47c86463be79d5b8cfe85ceb";
      //     let userSubmittedRecipe = "chicken";
          
      //     let edamamRecipeQueryURL = "https://api.edamam.com/search?q="+userSubmittedRecipe+"&app_id="+edamamAppID+"&app_key="+edamamAppKey;
  
      //     $.ajax({
  
      //         url: edamamRecipeQueryURL,
      //         method: "GET"
      //     })
  
      //     .then(function (edamamResponse) {
  
      //         console.log(edamamResponse);
      //         // return localcuisine;
      //     });    
      // };
      
  
      // function searchOpenWeather(zipCode){
  
  
      //     //**********************************************************************************
      //     //Make Zip Code   -->  when user provides zip code
      //     //*********************************************************************************   
      //     // user openWetherApp - additional calls vs Smarty Streats?
      //     // consider using Geolocation API in addition/alternative to this? 
      //     var zomatoAPIkey = "a549ce24eb93dc5699075cf1ac33c10e";
  
  
      
      
      //     // curl example api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
      //     let openWeatherapiKey = "b52ce1773e76080cb950272fcf749391";
      //     // let zipCode = 85295;
      //     let queryURL = "http://api.openweathermap.org/data/2.5/weather?zip="+zipCode+"&units=imperial&APPID="+openWeatherapiKey;
      
      
      //     $.ajax({
      //         url:queryURL,
      //         method: "GET"
      //     })
  
      //     .then(function (response){
  
      //         let longitude = response.coord.lon;
      //         let latitiude = response.coord.lat;
      //         let cityName = response.name;
  
      //         console.log("long :"+longitude+"lat :"+latitiude+"name :"+cityName);                  
  
      //     });
      // };
  
      // function searchZomato(cuisine,latlon){
      //     //**********************************************************************************
      //         //***USE LATLON & CUISINE
      //         // zomato API Key a549ce24eb93dc5699075cf1ac33c10e
      //         //*********************************************************************************
              
      //     let zomatoCuisinesQueryURL = "https://developers.zomato.com/api/v2.1/search?lat="+latitiude+"&lon="+longitude+"&cuisines=25&category=25";
      //     let cuisineFromEdamam = 0;
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
  
      //         });
      // };   
  




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
//   });
// });