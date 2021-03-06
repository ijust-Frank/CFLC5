
    // Replace each ??? with what you think its associated
    // function call will log to the console, or return.
    var name = "Peleke";
    var age = 92;
    var languages = ["English", "Norwegian", "Spanish"];

    function firstFunction(message) {
      console.log(message + name + " is " + age + ".");
    }

    // "Oh, my! Peleke is 92."
    firstFunction("Oh my! ");

    function secondFunction(name) {
      console.log(name + " is " + age + ".");
    }

    // "Julius is 92."
    secondFunction("Julius");

    // Write a function that returns: name + " is " + age + ".",
    // It should use the value of name defined above, but
    // shadow the age value.
    function thirdFunction(age) {
      return name + " is " + age + ".";
    }

    // Log the return value of thirdFunction.
    // BONUS: Do this without a variable assignment.
    console.log(thirdFunction(100));

    // CHALLENGE: Write a function that takes a string argument, and prints:
    // name + " likes " + str + "."
    function report(str) {
      console.log(name + " likes " + str + ".");
    }

    // Next, research forEach, and use the report function
    // to print the values in the languages array defined
    // above.
    languages.forEach(report);

    // Or:
    languages.forEach(function report(str) {
      // forEach essentially writes a for loop *for* us!
      console.log(str);
    });

