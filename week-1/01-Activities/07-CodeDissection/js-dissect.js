

      var userName = "player 1";
      var confirmPlayerReady = true;

      var petName = "Meeses";
      var petType = "Tuxedo Cat";
      var petAge = 5;
      var petIsCat = true;

      if (confirmPlayerReady) {
        console.log(petName + " " + petType + " " + petAge);
      }
      else {
        console.log("You don't get my cat's information");
      }

      if (petIsCat) {
        console.log("My pet is a cat");
      }
      else {
        console.log("My pet is not a cat");
      }

      if (petAge !== 7) {
        console.log("My pet is not 7 years old");
      }

      if (petAge === 5) {
        console.log("My pet is 5 years old");
      }
      else if (petAge < 5) {
        console.log("My pet is less than 5 years old");
      }
      else if (petAge > 5) {
        console.log("My pet is older than 5 years old");
      }

      // document.write() overwrites the entire page. We don't normally use this, but we will today for simplicity
      console.log("Welcome to our page " + userName);

      var catAge = "1";

      // Won't work as expected
      console.log(catAge + 2);

      // Works as expected
      console.log(parseInt(catAge) + 2);


