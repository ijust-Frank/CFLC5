
    var exposed = "This string is visible everywhere!";

    function firstFunction(message) {
      // Inside of firstFunction, I can see both exposed and
      // message.
      console.log(message + exposed);
    }

    firstFunction("Oh my! ");

    // This will throw an error--the message variable
    // is only visible *inside* of firstFunction.
    // console.log(message);

    function secondFunction(exposed) {
      // secondFunction *should* be able to see the exposed
      //  variable we declared above, but we've "shadowed" it!
      console.log(exposed);
    }

    secondFunction("This isn't what I thought I wrote...");

    // Finally, keep in mind that using "return" lets us
    // give something back to whomever called the function.
    function thirdFunction(message) {
      return message + exposed;
    }


    // Try to do things this way, instead of using console.log
    // inside of your functions.
    var message = thirdFunction("Oh my! ");
    console.log(message);
