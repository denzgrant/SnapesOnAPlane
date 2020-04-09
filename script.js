$(document).ready(function () {

    // **General ZOMATO info
    // zomato API Key 8d659a6edd709375bb68be74193240f9
    // Uncomment each API ajax call as needed
    var zomatoAPIkey = "8d659a6edd709375bb68be74193240f9";

    // #1***Categories API - my first test
    // -notice the 'headers object with the accept and user key info

    // let zomatoCategoriesQueryURL = "https://developers.zomato.com/api/v2.1/categories";
 
    // $.ajax({
    //     headers: {
    //         "Accept": "application/json",
    //         "user-key": zomatoAPIkey
    //     },
    //     url:zomatoCategoriesQueryURL,
    //     method: "GET"
    // })

    // .then(function (categoriesResponse){

    //     console.log(categoriesResponse);
    // });
        



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


});
