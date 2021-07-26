// packages we are including in our project 
var axios = require("axios");
var inquirer = require("inquirer");

//ask user what they want to do
inquirer
  .prompt([

    {
      type: "list",
      choices: ["Search for game","See best games for specific platform?"],
      message: "What action would you like to perform?",
      name: "userChoice"
    }
  ])
//   do something based on users response 
  .then(function(inquirerResponse){

      var userChoice = inquirerResponse.userChoice;

      if(userChoice === "Search for game"){
        inquirer
        .prompt([
      
          {
            type: "input",
            message: "What game would you like to search for?",
            name: "userGame"
          }
        ])
        .then(function(inquirerResponse){
            //console.log(inquirerResponse.userGame)
            var game = inquirerResponse.userGame

            var options = {
                method: 'GET',
                url: 'https://whatoplay.p.rapidapi.com/search',
                params: {game: game},
                headers: {
                'x-rapidapi-key': 'ae4b26c3f6mshb01d9125b770409p1be504jsn058032000930',
                'x-rapidapi-host': 'whatoplay.p.rapidapi.com'
                }
            };
            
            axios.request(options).then(function (response) {
                console.log(response.data);
                inquirer
                .prompt([
            
                {
                    type: "confirm",
                    message: "Would you like to see some game details?",
                    name: "userConfirm"
                }
                ])
                .then(function(inquirerResponse){
                    var confirm = inquirerResponse.userConfirm;
                    if(confirm){
                        inquirer
                            .prompt([
                            {
                                type: "input",
                                message: "What game id would you like to see?",
                                name: "userInput"
                            }
                            ])
                            .then(function(inquirerResponse){
                                var gameId = inquirerResponse.userInput
                                var options = {
                                    method: 'GET',
                                    url: 'https://whatoplay.p.rapidapi.com/game',
                                    params: {game_id: gameId},
                                    headers: {
                                      'x-rapidapi-key': 'ae4b26c3f6mshb01d9125b770409p1be504jsn058032000930',
                                      'x-rapidapi-host': 'whatoplay.p.rapidapi.com'
                                    }
                                  };
                                  
                                  axios.request(options).then(function (response) {
                                      console.log(response.data);
                                  }).catch(function (error) {
                                      console.error(error);
                                  });
                            })
                    }
                    else{console.log("That's cool")}
                })
            }).catch(function (error) {
                console.error(error);
            });
                })
      }
      else if(userChoice === "See best games for specific platform?"){
        inquirer
        .prompt([
      
          {
            type: "list",
            choices: ["3ds", "pc","ps3", "ps4", "ps5", "xbox-360", "xbox-one", "xbox-series-x", "switch", "android", "ios"],
            message: "What platform would you like?",
            name: "userPlatform"
          },
          {
            type: "input",
            message: "How many results would you like to see?(Max:100)",
            name: "count"
          }
        ])
        .then(function(inquirerResponse){
            var platform = inquirerResponse.userPlatform;
            var count = inquirerResponse.count;

            var options = {
                method: 'GET',
                url: 'https://whatoplay.p.rapidapi.com/platform',
                params: {platform: platform, count: count},
                headers: {
                  'x-rapidapi-key': 'ae4b26c3f6mshb01d9125b770409p1be504jsn058032000930',
                  'x-rapidapi-host': 'whatoplay.p.rapidapi.com'
                }
              };
              
              axios.request(options).then(function (response) {
                  //console.log(response.data[platform].data);
                var gameArr = response.data[platform].data;

                for(var i = 0;i < gameArr.length ;i++){
                      console.log(gameArr[i])
                  }
                  inquirer
                .prompt([
            
                {
                    type: "confirm",
                    message: "Would you like to see some game details?",
                    name: "userConfirm"
                }
                ])
                .then(function(inquirerResponse){
                    var confirm = inquirerResponse.userConfirm;
                    if(confirm){
                        inquirer
                            .prompt([
                            {
                                type: "input",
                                message: "What game id would you like to see?",
                                name: "userInput"
                            }
                            ])
                            .then(function(inquirerResponse){
                                var gameId = inquirerResponse.userInput
                                var options = {
                                    method: 'GET',
                                    url: 'https://whatoplay.p.rapidapi.com/game',
                                    params: {game_id: gameId},
                                    headers: {
                                      'x-rapidapi-key': 'ae4b26c3f6mshb01d9125b770409p1be504jsn058032000930',
                                      'x-rapidapi-host': 'whatoplay.p.rapidapi.com'
                                    }
                                  };
                                  
                                  axios.request(options).then(function (response) {
                                      console.log(response.data);
                                  }).catch(function (error) {
                                      console.error(error);
                                  });
                            })
                    }
                    else{console.log("That's cool")}
                })

              }).catch(function (error) {
                  console.error(error);
              });


        })
      }

    
  })
