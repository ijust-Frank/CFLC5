

      // Creating an empty array for our favorite TV shows.
      var favTVshows = [];
      var tvShow;

      // For-Loop that will repeat three times.
      for (var i = 1; i < 4; i++) {

        // Each time it loops we create this variable.
        tvShow = "Rick & Morty"

        // It then takes the user's response and "pushes" (or adds) the variable to the end of the favTVshows array.
        favTVshows.push(tvShow);
      }


      // We then loop through the favTVshows array...
      for (var j = 0; j < favTVshows.length; j++) {

        // ...and log messages listing out each 1 show 4 times in our array.
        console.log(favTVshows[j]);
      }