
      // Here we create our prompt and confirm variables which will store user input.
      var confirmSushi = true;
      var confirmGingerTea = false;
      var sushiType = "california roll";

      // If the user likes sushi (confirmSushi === true), we run the following block of code.
      if (confirmSushi) {
        console.log("You like " + sushiType + "!");
      }
      // If the user likes ginger tea (confirmGingerTea === true), we run the following block of code.
      else if (confirmGingerTea) {
        console.log("You like ginger tea!!");
      }
      // If neither of the previous condition were true, we run the following block of code.
      else {
        console.log("You don't like sushi or ginger tea.");
      }
