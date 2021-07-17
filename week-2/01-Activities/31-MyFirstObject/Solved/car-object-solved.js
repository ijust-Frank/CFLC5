    //Open the console to see the magic!
      // Creating our car object.
      var car = {

        // Properties of our car object.
        make: "Honda",
        model: "Fit",
        color: "Blue Raspberry",
        mileage: 3000,
        isWorking: true,

        // Creating the driveToWork method.
        // A method is a function associated with an object.
        driveToWork: function() {

          // When we say "this" (as in this.mileage) we are referring to the object the method is a part of.
          // In this case, we will alert the mileage of the car object.
          console.log("Old Mileage: " + this.mileage);

          // Adding 8 to the car's mileage.
          this.mileage = this.mileage + 8;

          // Alerting the car's new mileage.
          console.log("New mileage: " + this.mileage);
        },

        // The driveAroundWorld method adds 24,000 miles to our car, sets isWorking to false, and makes some alerts.
        driveAroundWorld: function() {

          console.log("Old Mileage: " + this.mileage);

          this.mileage = this.mileage + 24000;

          console.log("New Mileage: " + this.mileage);
          console.log("Car needs a tuneup!");

          this.isWorking = false;
        },

        // The getTuneUp method sets isWorking to true and alerts a message.
        getTuneUp: function() {
          console.log("Car is ready to go!");
          this.isWorking = true;
        },

        // The honk method alerts a honking message.
        honk: function() {
          console.log("Honk! Honk!");
        }
      };


      // How would we log...

      // The car's make?
      console.log(car.make);

      // The car's model?
      console.log(car.model);

      // The car's mileage?
      console.log(car.mileage);

      // How would we run the car's driveToWork method?
      car.driveToWork();

      // How would we run the car's driveAroundWorld method?
      car.driveAroundWorld();

      // How would we run the getTuneUp method?
      car.getTuneUp();
