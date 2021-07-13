    var gandalf = {
      "real name": "Gandalf",
      "age (est)": 11000,
      "race": "Maia",
      "haveRetirementPlan": true,
      "aliases": [
        "Greyhame",
        "Stormcrow",
        "Mithrandir",
        "Gandalf the Grey",
        "Gandalf the White"
      ]
    };

    // Object properties can be accessed with "bracket notation"
    console.log("My name is " + gandalf["real name"]);

    // Or with "dot notation" if the property has no spaces
    if (gandalf.haveRetirementPlan) {

      // Or with a variable that matches the name of the property
      var ageProperty = "age (est)";
      var years = gandalf[ageProperty];
      console.log("My 401k has been gathering interest for " + years + " years!");
    }

    // You can access arrays and their properties from an object
    console.log("I have more than " + gandalf.aliases.length + " aliases");

    // Non-existent properties return undefined
    console.log("My designation is " + gandalf["designation"]);
