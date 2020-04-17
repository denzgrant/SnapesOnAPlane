const time = moment().format("MMM Do YYYY, h:mm a");
const currentHour = moment().format("H");
console.log(currentHour);
//Displays Current TIme
timeAndDate = `<p style="color:blue; padding-top:1em;">It is currently ${time} </p>`;
$("#time").append(timeAndDate);

switch (true) {
  //Customized Message depending on time of day
  case currentHour < 4:
    $("#time").append("The early bird gets the leftovers");
    break;
  case currentHour >= "4" && currentHour < "6":
    $("#time").append("Prebreakfast is underrated");
    break;
  case currentHour >= "6" && currentHour <= "9":
    $("#time").append(
      "Time to break the fast. My friends from the Shire is inquring about second breakfast"
    );
    break;
  case currentHour === "10" && currentHour < "11":
    $("#time").append("Break out the mimosas, I'm ready for brunch");
    break;
  case currentHour >= "11" && currentHour <= "13":
    $("#time").append("It's finally here, time for lunch!");
    break;
  case currentHour > "13" && currentHour < "18":
    $("#time").append("Snackin' is more than a hobby, it's a lifestyle");
    break;
  case currentHour >= "18" && currentHour <= "21":
    $("#time").append('Winner winner, "Insert your favorite food" Dinner');
    break;
  case currentHour >= "22" && currentHour < "24":
    $("#time").append("Time for a late night snack!");
    break;
}

$(document).ready(function () {
  //Displaying Recent Search
  (function previousSearch() {
    let previousFood = localStorage.getItem("PrevFoodSearch");
    let previousZomLon = localStorage.getItem("PrevZomLon");
    let previousZomLat = localStorage.getItem("PrevZomLat");
    recipesCall(previousFood);

    searchFood = $("#foodInput").val(previousFood);
    zomatoRestaurantCall(previousZomLat, previousZomLon, searchFood);
  })();

  $("#searchBtn").on("click", function (zipCode, searchFood) {
    $("#recipesDispaly").empty();
    $("#restaurantDisplay").empty();
    var searchFood = $("#foodInput").val().trim().toLowerCase();
    var zipCode = $("#zipcodeInput").val().trim().toLowerCase();
    if (searchFood === "" || zipCode === "") {
      UIkit.notification({
        message: `<p style="color: #1e87f0;"><strong>Please Enter in search box</strong></p>`,
      });
    } else {
      recipesCall(searchFood);
      getLatLon(zipCode);
    }
  });
  function recipesCall(searchFood) {
    $("#recipesDispaly").empty();
    const apiKey = "&app_key=b625542fdcf8fe77f73a1d01bbcbe005";
    const appId = "&app_id=6ed8e227";
    const queryURLsearch = "https://api.edamam.com/search?q=";

    $.ajax({
      url: queryURLsearch + searchFood + appId + apiKey + "&from=0&to=5",
      method: "GET",
    }).then(function (response) {
      recipesDisplay(response);
    });
  }
  function recipesDisplay(response) {
    response.hits.forEach(function (hit) {
      var recipesResult = hit.recipe;
      var recipesNameDisplay = $("<h3>")
        .text(recipesResult.label)
        .attr("data-aos", "flip-left");

      var modalButton = $("<button>")
        .text("Check here for Details")
        .addClass("uk-button uk-button-primary")
        .attr("type", "button")
        .attr("uk-toggle", "target: #recipes-modal")
        .click(function () {
          $("#recipesModalTitle").text(recipesResult.label);
          $("#recipeModalLink").attr("href", recipesResult.shareAs);
          $("#recipeModalDiet").text(
            "Diet Labels: " + recipesResult.dietLabels
          );
          $("#recipeModalHealth").text(
            "Health Labels: " + recipesResult.healthLabels
          );
          $("#recipeModalImage")
            .attr("src", recipesResult.image)
            .attr("alt", recipesResult.label);
        });

      $("#recipesDispaly").append(recipesNameDisplay, modalButton);
    });
  }
  //Converting Zip Code input into latitude and longitude
  function getLatLon(zipCode) {
    let openWeatherapiKey = "&appid=b52ce1773e76080cb950272fcf749391";

    let queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
    $.ajax({
      url: queryURL + zipCode + openWeatherapiKey,
      method: "GET",
    }).then(function (response) {
      let longitude = response.coord.lon;
      let latitude = response.coord.lat;
      let cityName = response.name;

      zomatoRestaurantCall(latitude, longitude);
    });
  }

  // ----------------------------zomato------------------------------
  function zomatoRestaurantCall(latitude, longitude, searchFood) {
    const zomatoApiKey = "8ed1b92667f3ee82f4a77b02be24cf26";
    const zomatoQueryUrl = "https://developers.zomato.com/api/v2.1/search?q=";
    searchFood = $("#foodInput").val().trim().toLowerCase();
    const zomatoSearchCount = "&count=5";
    const zomatoLat = "&lat=" + latitude;
    const zomatoLon = "&lon=" + longitude;
    localStorage.setItem("PrevFoodSearch", searchFood);
    localStorage.setItem("PrevZomLat", zomatoLat);
    localStorage.setItem("PrevZomLon", zomatoLon);

    $.ajax({
      headers: {
        Accept: "application/json",
        "user-key": zomatoApiKey,
      },

      url:
        zomatoQueryUrl + searchFood + zomatoSearchCount + zomatoLat + zomatoLon,
      method: "GET",
    })
    .then(function (searchResponse) {
      let responseValue = searchResponse.results_found;
      if (responseValue < 5) {
        let zSearchCount = 5 - responseValue;
        zomatoRestaurantCallBakcup(latitude, longitude, zSearchCount);
        restaurantDisplapy(searchResponse);
      } else {
        restaurantDisplapy(searchResponse);
      }
    });
  }

  function zomatoRestaurantCallBakcup(latitude, longitude, zSearchCount = 5) {
    const zomatoApiKey = "8ed1b92667f3ee82f4a77b02be24cf26";
    const zomatoQueryUrl = "https://developers.zomato.com/api/v2.1/search?";
    const zomatoSearchCount = "&count=" + zSearchCount;
    const zomatoLat = "&lat=" + latitude;
    const zomatoLon = "&lon=" + longitude;

    $.ajax({
      headers: {
        Accept: "application/json",
        "user-key": zomatoApiKey,
      },

      url: zomatoQueryUrl + zomatoSearchCount + zomatoLat + zomatoLon,
      method: "GET",
    })
    .then(function (searchResponse) {
      restaurantDisplapy(searchResponse);
    });
  }

  //Displaying Restuarant Information
  function restaurantDisplapy(responseZtom) {
    responseZtom.restaurants.forEach(function (hit) {
      var restaurantResult = hit.restaurant;

      var restaurantNameDisplay = $("<h3>")
        .text(restaurantResult.name)
        .attr("data-aos", "flip-right");
      var modalButton = $("<button>")
        .text("Check here for Details")
        .addClass("uk-button uk-button-secondary")
        .attr("type", "button")
        .attr("uk-toggle", "target: #restaurant-modal")
        .click(function () {
          $("#restaurantModalTitle").text(restaurantResult.name);
          $("#restaurantModalLink").attr("href", restaurantResult.url);
          $("#restaurantModalLocation").text(
            "Location: " + restaurantResult.location.address
          );
          $("#restaurantModalRatingModalRating").text(
            "User rating : " + restaurantResult.user_rating.rating_text
          );
          if (restaurantResult.photos) {
            $("#restaurantModalImage")
              .attr("src", restaurantResult.photos[0].photo.thumb_url)
              .attr("alt", "picture of local food");
          } else {
            $("#restaurantModalImage")
              .attr("src", "http://placekitten.com/g/300/300")
              .attr("alt", "picture of cute cat");
          }
        });

      $("#restaurantDisplay").append(restaurantNameDisplay, modalButton);
    });
  }
});
