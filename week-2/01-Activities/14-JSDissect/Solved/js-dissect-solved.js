
      // Here we create our variables which will take in user input.
      var userName = "player1"
      var confirmCats = true;

      // Here we declare variables about our cat.
      var petName = "Meeses";
      var petType = "Tuxedo Cat";
      var petAge = 5;
      var petIsCat = true;

      // If the user likes cats (confirmCats === true), run the following block of code.
      if (confirmCats) {
        // Alert information about our pet. Note how the strings are combined (concatenated) with "+" symbols.
        console.log(petName + " " + petType + " " + petAge);
      }
      // If the above condition has not been satisfied (confirmCats !== true), run the following block of code.
      else {
        // Alert our message to the user.
        console.log("You don't get my cat's information");
      }

      // If petIsCat is true, run the following block of code.
      if (petIsCat) {
        // Alert this message.
        console.log("My pet is a cat");
      }
      // If the above condition has not been satisfied (petIsCat !== true), run the following block of code.
      else {
        // Alert this message.
        console.log("My pet is not a cat");
      }

      // If petAge is not equal to 7, run the following block of code.
      if (petAge !== 7) {
        // Alert this message.
        console.log("My pet is not 7 years old");
      }

      // If petAge equals 5 exactly (in value and data type), run the following block of code.
      if (petAge === 5) {
        // Alert this message.
        console.log("My pet is 5 years old");
      }
      // Else if petAge is less than 5, run the following block of code.
      else if (petAge < 5) {
        // Alert this message.
        console.log("My pet is less than 5 years old");
      }
      // If none of the above conditions have been satisfied (petAge is greater than 5), run the following code.
      else {
        // Alert this message.
        console.log("My pet is older than 5 years old");
      }

      // document.write() overwrites the entire page. We don't normally use this, but we will today for simplicity!
      console.log("Welcome to our page " + userName);

      // Here we ask the user how old their cat is and store it in the catAge variable.
      var catAge = 1;

      // Since catAge is a string, the numbers will not be added together mathematically as you would expect.
      // Instead, 2 is added onto the end of the catAge string.
      console.log(catAge + 2);

      // The parseInt function parses a string and returns an integer.
      // Now that catAge is a proper number, the two numbers will be added together mathematically as expected.
      console.log(parseInt(catAge) + 2);

