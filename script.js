$(document).ready(function () {

    // **General ZOMATO info
    // zomato API Key a549ce24eb93dc5699075cf1ac33c10e
    // Uncomment each API ajax call as needed
    var zomatoAPIkey = "a549ce24eb93dc5699075cf1ac33c10e";

    // #1***Categories API - my first test
    // -notice the 'headers object with the accept and user key info

    let zomatoCategoriesQueryURL = "https://developers.zomato.com/api/v2.1/categories";

    $.ajax({
        headers: {
            "Accept": "application/json",
            "user-key": zomatoAPIkey
        },
        url: zomatoCategoriesQueryURL,
        method: "GET"
    })

        .then(function (categoriesResponse) {

            // console.log(categoriesResponse);
            /* Displays severl categories including:
            0:
            categories: {id: 1, name: "Delivery"}
            __proto__: Object
            1:
            categories: {id: 2, name: "Dine-out"}
            __proto__: Object
            2:
            categories: {id: 3, name: "Nightlife"}
            __proto__: Object
            3:
            categories: {id: 4, name: "Catching-up"}
            __proto__: Object
            4:
            categories: {id: 5, name: "Takeaway"}
            __proto__: Object
            5:
            categories: {id: 6, name: "Cafes"}
            __proto__: Object
            6:
            categories: {id: 7, name: "Daily Menus"}
            __proto__: Object
            7:
            categories: {id: 8, name: "Breakfast"}
            __proto__: Object
            8:
            categories: {id: 9, name: "Lunch"}
            __proto__: Object
            9:
            categories: {id: 10, name: "Dinner"}
            __proto__: Object
            10:
            categories: {id: 11, name: "Pubs & Bars"}
            __proto__: Object
            11:
            categories: {id: 13, name: "Pocket Friendly Delivery"}
            __proto__: Object
            12:
            categories: {id: 14, name: "Clubs & Lounges"} */


        });

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


    let cityID = 11187;
    let zomatoCollectionsQueryURL = "https://developers.zomato.com/api/v2.1/collections?city_id=" + cityID;

    $.ajax({
        headers: {
            "Accept": "application/json",
            "user-key": zomatoAPIkey
        },
        url: zomatoCollectionsQueryURL,
        method: "GET"
    })

        .then(function (collectionsResponse) {

            console.log(collectionsResponse);
            //Most Popular Resturants this week
            console.log(collectionsResponse.collections[0].collection.description);
            console.log(collectionsResponse.collections[1].collection.description);
            console.log(collectionsResponse.collections[2].collection.description);
            console.log(collectionsResponse.collections[2].collection.title);
            console.log(collectionsResponse.collections[2].collection.image_url);
        });


    // let cityName = "11187";
    let zomatoCuisinesQueryURL = "https://developers.zomato.com/api/v2.1/search?lat=33.448376&lon=-112.074036&cuisines=25&category=25";

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

        let zomatoSearchQueryURL = "https://developers.zomato.com/api/v2.1/search?lat=33.448376&lon=-112.074036&cuisines=25&category=25";

        $.ajax({
            headers: {
                "Accept": "application/json",
                "user-key": zomatoAPIkey
            },
            url: zomatoSearchQueryURL,
            method: "GET"
        })
    
            .then(function (searchResponse) {
    
                console.log(searchResponse);
              
    
            });
            
            $(document ).ready(function() {
                ​
                    const apiKey = "&app_key=7f3dde61a010db79ca5ad499826e8d8";
                    const appId = "&app_id= 5c5c0f98&";
                    const queryURLsearch = "https://api.edamam.com/search?q="
                ​
                    $("#searchBtn").on("click", function(){ 
                    var searchFood = $("#foodInput").val();
                    $.ajax({
                        url: "https://api.edamam.com/search?q="+ searchFood +"&app_id=6ed8e227&app_key=b625542fdcf8fe77f73a1d01bbcbe005",
                ​
                        // "https://api.edamam.com/search?=chicken&app_id=4a5d81a2&app_key=379308ab9da9a8ee47f63563d2774ac4&from=0&to=9&q=",
                        // queryURLsearch + searchTerm +appdId +apiKey +"form=0&to=5&",
                        method:"GET"
                    }).then( function(response){
                        console.log(response)
                        // console.log(response.hits[0].recipe);
                        // console.log(response.hits[0].recipe.dietLabels)
                        // console.log(response.hits[0].recipe.healthLabels)
                    })  
                    // function recipesCall(){
                      
                    // }
                         
                    })
                   
                



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