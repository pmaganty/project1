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



function options (results) {

  
  for (var i = 0; i < results.length; i++) {
    var div = $("<div>");
    div.text("Main Div Appended");

    var nameDiv = $("<div>");
    nameDiv.text("Name Div Text");
    /*var imgDiv = $("<div>");
    var descriptionDiv = $("<div>");
    var contactDiv = $("<div>");*/

    var nameInnerDiv = $("<div>");
    /*var imgInnerDiv = $("<div>");
    var descriptionInnerDiv = $("<div>");
    var contactInnerDiv = $("<div>");*/

    /*var img = $("<img>");
    var description = $("<div>");
    var contact = $("<div>");*/
    var name = $("<h2>");
    /*var email = $("<p>");
    var phone = $("<p>");*/
    
    name.text("NAME APPENDED"/*results[i].name*/);
    /*description.text(results[i].description);
    img.attr("src", results[i].photos[0].medium);
    div.attr("class", "container");
    nameDiv.attr("class", "level");
    imgDiv.attr("class", "level");
    descriptionDiv.attr("class", "level");
    contactDiv.attr("class", "level");
    email.text(results[i].contact.email);
    phone.text(results[i].contact.phone);
    contact.append(email);
    contact.append(phone);*/

    nameInnerDiv.append(name);
    /*imgInnerDiv.append(img);
    descriptionInnerDiv.append(description);
    contactInnerDiv.append(contact);*/

    nameDiv.append(nameInnerDiv);
    nameInnerDiv.text("Name Inner Div Text");
    /*imgDiv.append(imgInnerDiv);
    descriptionDiv.append(descriptionInnerDiv);
    contactDiv.append(contactInnerDiv);*/

    div.append(nameDiv);

    /*div.append(imgDiv);
    div.append(descriptionDiv);
    div.append(contactDiv);*/

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

          
        // })
        // fetch(
        //   'https://some-random-api.ml/facts/dog',
        //   {method: 'GET'}
        // )
        // .then(res => res.json())
        // .then(json => console.log(json))
        // .catch(err => console.error('error:' , err))

  //       .then(function() {

  //   console.log(response);
  // });

  // var settings = {
  //   "url": "https://some-random-api.ml/facts/dog",
  //   "method": "GET",
  //   "timeout": 0,
  //   "headers": {
  //     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQzMzE2ZGNiNWM1NzQ0ZWRmODg1MzhkYmJkMzU1MGI3ZGE3YTE5ZTI5ZWIyM2UyMmMxMmM2Nzk4MGJiNWRlYWE5MDhkZDdmMmMwY2M5MjMwIn0.eyJhdWQiOiJVY1ZrUGs1R1paQ3o3ZkppdHFkd2ZVdUIzWHlLdGdmVTlXYXNFMGRxZjFEVWVNZVdDVyIsImp0aSI6ImQzMzE2ZGNiNWM1NzQ0ZWRmODg1MzhkYmJkMzU1MGI3ZGE3YTE5ZTI5ZWIyM2UyMmMxMmM2Nzk4MGJiNWRlYWE5MDhkZDdmMmMwY2M5MjMwIiwiaWF0IjoxNTgwMjYwMjAyLCJuYmYiOjE1ODAyNjAyMDIsImV4cCI6MTU4MDI2MzgwMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.OGifD4ZA-Ekyadj5hfopWixpqsQsTF1rmUrRlB2-cbrt6DjfR0nl7I3uQM3LciMdbry-cLrCb-U_q5dUiUWRywjyNxL60nZ7ndzNDe_7PptqXoFhBdKW0fH-WlujhazEtndiLrLKDN9P8FuhNPmJq9YssiXGLNKGS1_1RxZzONNyaEhwwpyUFkprLMxdH4ZwDhS0eqlbwBE42slVDRSvWjLfmHm8K6ycmwvJiF_cK8CZj6ADP3fMMZbmD8JobPilZJah2rBGXxOD4NOGdwnEYTeecN7aQEkX0XtUIEwr0irlQRqeuuHOzfqi0pad7WiOAzvDWuEYzXuJVydiL31GxA"
  //   },
  // };
  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  // });





        console.log(animal_type);
        
        var settings = {
            "url": "https://api.petfinder.com/v2/animals?type=" + animal_type + "&page=2",
            "method": "GET",
            "timeout": 0,
            "headers": {
             "Authorization": "Bearer " + token
            },
        }
        
        //using ajax to access petfinder api info
        $.ajax(settings).done(function (response) {
        console.log(response);
        $(".questionBtn").on("click", function(){
          console.log("QUESTION BUTTON CLICKED");
          var value = $(this).attr("data-val");
          console.log(value);

        


          if ($(this).attr("data-q") == "gender") {
            var gender = value;
            
            for(i = 0; i < response.animals.length; i++){
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
        

        
      });


    }); 
    
    
    });

}); 

