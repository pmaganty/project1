$( document ).ready(function() {
  var correct_gender_animals = [];
  var correct_size = [];
  var correct_age = [];
  var count = 1;
  var fact_type = "";
  var fact_div = $("<div>");


$("#secondPage").hide();
$("#thirdPage").hide();
$("#fourthPage").hide();

$("#findBtn").on("click", function(){
    console.log("FIND BUTTON CLICKED");
    $("#startPage").hide();
    $("#secondPage").show();
    
});

function appendBackButton () {
  var div = $("<div>");
  var innerDiv = $("<div>");
  var button = $("<button>");

  div.addClass("level");
  innerDiv.addClass("level-item has-text-centered");
  div.append(innerDiv);
  button.text("Go Back");
  button.attr("id", "findBtn");
  innerDiv.append(button);
  button.addClass("backButton");

  $("#fourthPage").append(div);
}

function options (results) {

  for (var i = 0; i < results.length; i++) {

    console.log(i); //FOR DEBUG

    var div = $("<div>");
    div.attr("class", "container");
    div.addClass("questons");

    //CREATE NAME
    var nameDiv = $("<div>");
    //nameDiv.text("Name Div Text"); //FOR DEBUG
    nameDiv.attr("class", "level");
    nameDiv.addClass("name");
  
    var nameInnerDiv = $("<div>");
    nameInnerDiv.attr("class", "level-item has-text-centered");

    var name = $("<h2>");
    name.text(results[i].name);
    console.log(results[i].name); //FOR DEBUG

    nameInnerDiv.append(name);
    nameDiv.append(nameInnerDiv);
    div.append(nameDiv);

    //CREATE IMG
    var imgDiv = $("<div>");
    //nameDiv.text("Name Div Text"); //FOR DEBUG
    imgDiv.attr("class", "level");
  
    var imgInnerDiv = $("<div>");
    imgInnerDiv.attr("class", "level-item has-text-centered");

    var img = $("<img>");
    img.attr("src", results[i].photos[0].medium);
    //console.log(results[i].name); //FOR DEBUG

    imgInnerDiv.append(img);
    imgDiv.append(imgInnerDiv);
    div.append(imgDiv);

    //CREATE DESCRIPTION
    var descriptionDiv = $("<div>");
    //nameDiv.text("Name Div Text"); //FOR DEBUG
    descriptionDiv.attr("class", "level");
    descriptionDiv.addClass("animalOptionText");
    descriptionDiv.addClass("descriptionWidth");
  
    var descriptionInnerDiv = $("<div>");
    descriptionInnerDiv.attr("class", "level-item has-text-centered");

    var description = $("<div>");
    description.text(results[i].description);
    description.addClass("has-class-centered");
    console.log(results[i].description); //FOR DEBUG

    descriptionInnerDiv.append(description);
    descriptionDiv.append(descriptionInnerDiv);
    div.append(descriptionDiv);

    //CREATE CONTACT
    var contactDiv = $("<div>");
    //nameDiv.text("Name Div Text"); //FOR DEBUG
    contactDiv.attr("class", "level");
    contactDiv.addClass("animalOptionText");
  
    var contactInnerDiv = $("<div>");
    contactInnerDiv.attr("class", "level-item has-text-centered");

    var email = $("<p>");
    var phone = $("<p>");
    email.text(results[i].contact.email);
    phone.text(results[i].contact.phone);
    var contact = $("<div>");
    contact.append(email);
    contact.append(phone);

    //console.log(results[i].description); //FOR DEBUG

    contactInnerDiv.append(contact);
    contactDiv.append(contactInnerDiv);
    div.append(contactDiv);
    
    $("#fourthPage").append(div);
  }
}



//Creating necessary authorization token based on client ID and secret code (FROM POSTMAN)
var token_settings = {
    "url": "https://api.petfinder.com/v2/oauth2/token",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
      "grant_type": "client_credentials",
      "client_id": "j8hqJaLPYLWu9w68pokouBIGmZ6G2yloKbT9vBp8nYuFafXaqN",
      "client_secret": "BPoBzhkeQ5stysOgET6Z9tneFWrO4hs2icPBw81v"
    }
  };

  //using ajax to grab token necessary to access petfinder API (FROM POSTMAN)
  $.ajax(token_settings).done(function (response) {
    console.log(response); //FOR DEBUG
    var token = response.access_token; //asigning token
    console.log(token); //FOR DEBUG

      $(".animalBtn").on("click", function() {
        /*count++;
        if (count == 1) {
          $("#questionOne").show();
          $("#questionTwo").hide();
          $("#questionThree").hide();
        }*/

        $("#questionOne").show();
        $("#questionTwo").hide();
        $("#questionThree").hide();

        console.log("ANIMAL BUTTON CLICKED");
        $("#thirdPage").show();
        $("#secondPage").hide();
        $("#startPage").hide();
        var animal_type = $(this).attr("id");

        fact_type = animal_type;



        console.log(animal_type);
        
        var settings = {
            "url": "https://api.petfinder.com/v2/animals?type=" + animal_type + "&page=1",
            "method": "GET",
            "timeout": 0,
            "headers": {
             "Authorization": "Bearer " + token
            },
        }
        
        //using ajax to access petfinder api info
        $.ajax(settings).done(function (response) {
        console.log(response);

        var options_arr = response;
        console.log(options_arr); //FOR DEBUG

        $(".questionBtn").on("click", function(){
          console.log("QUESTION BUTTON CLICKED");
          var value = $(this).attr("data-val");
          console.log(value);

          if ($(this).attr("data-q") == "gender") {
            var gender = value;
            
            for(i = 0; i < response.animals.length; i++){
                console.log(response.animals[i].gender); //FOR DEBUG
                if ((response.animals[i].gender.toLowerCase() == gender) && (response.animals[i].photos.length > 0)){
                    console.log("inside if statement");
                    correct_gender_animals.push(response.animals[i]);
                }
            }
            console.log(correct_gender_animals);
          }

          if ($(this).attr("data-q") == "size") {
            // console.log(correct_gender_animals);
            var size = value;
            

            for(i = 0; i < correct_gender_animals.length; i++){
              if (correct_gender_animals[i].size.toLowerCase() == size){
                console.log("inside if statement");
                correct_size.push(correct_gender_animals[i]);
             }
          }
            console.log(correct_size)
          }

          if ($(this).attr("data-q") == "age") {
            var age = value;
            
            for(i = 0; i < correct_size.length; i++) {
                if (correct_size[i].age.toLowerCase() == age){
                    correct_age.push(correct_size[i]);
                }
            }
            console.log(correct_age)
          }

          count++;
        if (count == 1) {
          $("#questionOne").show();
          $("#questionTwo").hide();
          $("#questionThree").hide();
        } else if (count ==2) {
          $("#questionOne").hide();
          $("#questionTwo").show();
          $("#questionThree").hide();
        } else if (count == 3) {
          $("#questionOne").hide();
          $("#questionTwo").hide();
          $("#questionThree").show(); 
        } else if (count == 4) {
          console.log("SHOWING FOURTH PAGE***************************");
          $("#startPage").hide();
          $("#secondPage").hide();
          $("#thirdPage").hide();
          $("#fourthPage").show();
          options(correct_age);
          appendBackButton();
        }

        /*$(".backButton").on("click", function() {
          $("#startPage").show();
          $("#secondPage").hide();
          $("#thirdPage").hide();
          $("#fourthPage").hide();
        });*/

        });
        

        
      });


    }); 
    
    
    });

}); 





/*function test (options) {
  $(".questionBtn").on("click", function(){
    console.log("QUESTION BUTTON CLICKED");
    var value = $(this).attr("data-val");
    console.log(value);

    if ($(this).attr("data-q") == "gender") {
      var gender = value;
      
      for(i = 0; i < response.animals.length; i++){
          console.log(response.animals[i].gender); //FOR DEBUG
          if ((response.animals[i].gender.toLowerCase() == gender) && (response.animals[i].photos.length > 0)){
              console.log("inside if statement");
              correct_gender_animals.push(response.animals[i]);
          }
      }
      console.log(correct_gender_animals);
    }

    if ($(this).attr("data-q") == "size") {
      // console.log(correct_gender_animals);
      var size = value;
      

      for(i = 0; i < correct_gender_animals.length; i++){
        if (correct_gender_animals[i].size.toLowerCase() == size){
          console.log("inside if statement");
          correct_size.push(correct_gender_animals[i]);
       }
    }
      console.log(correct_size)
    }

    if ($(this).attr("data-q") == "age") {
      var age = value;
      
      for(i = 0; i < correct_size.length; i++) {
          if (correct_size[i].age.toLowerCase() == age){
              correct_age.push(correct_size[i]);
          }
      }
      console.log(correct_age)
    }

    count++;
  if (count == 1) {
    $("#questionOne").show();
    $("#questionTwo").hide();
    $("#questionThree").hide();
  } else if (count ==2) {
    $("#questionOne").hide();
    $("#questionTwo").show();
    $("#questionThree").hide();
  } else if (count == 3) {
    $("#questionOne").hide();
    $("#questionTwo").hide();
    $("#questionThree").show(); 
  } else if (count == 4) {
    console.log("SHOWING FOURTH PAGE***************************");
    $("#startPage").hide();
    $("#secondPage").hide();
    $("#thirdPage").hide();
    $("#fourthPage").show();
    options(correct_age);
  }
  });
}*/

