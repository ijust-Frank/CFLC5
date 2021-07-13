

      var car = {
        make: "Honda",
        model: "Fit",
        color: "Blue Raspberry",
        mileage: 3000,
        isWorking: true,

        driveToWork: function() {

          console.log("Old Mileage: " + this.mileage);

          this.mileage = this.mileage + 8;

          console.log("New mileage: " + this.mileage);
        },

        driveAroundWorld: function() {

          console.log("Old Mileage: " + this.mileage);

          this.mileage = this.mileage + 24000;

          console.log("New Mileage: " + this.mileage);
          console.log("Car needs a tuneup!");

          this.isWorking = false;
        },

        getTuneUp: function() {
          console.log("Car is ready to go!");
          this.isWorking = true;
        },

        honk: function() {
          console.log("Honk! Honk!");
        }
      };


      // How would we log...

      // The car's make?

      // The car's model?

      // The car's mileage?

      // How would we run the car's driveToWork method?

      // How would we run the car's driveAroundWorld method?

      // How would we run the getTuneUp method?
