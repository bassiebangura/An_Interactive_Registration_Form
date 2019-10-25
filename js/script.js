$("#name").focus(); //add focus to name input on page load

/******************************************************************
                   NAME SECTION 
 * ***************************************************************/
let errorMessageNameElement = $(document.createElement("span"));

$("label[for='name']").append(
  errorMessageNameElement.text(" Please enter your name!").css("color", "red")
);

$("label[for='name'] span").hide();

$(document).on("input", 'input[name="user-name"]', function(e) {
  if (!e.target.value) {
    $("label[for='name'] span").show();
    $("input[name='user-name']").css({
      "border-color": "red",
      "border-weight": "1px",
      "border-style": "solid"
    });
  } else {
    $("label[for='name'] span").hide();
    $("input[name='user-name']").css({
      "border-color": "#6F9DDC",
      "border-weight": "2px",
      "border-style": "solid"
    });
  }
});

/******************************************************************
                   EMAIL SECTION 
 * ***************************************************************/

let errorMessageEmailElement = $(document.createElement("span"));
$("label[for='mail']").append(
  errorMessageEmailElement
    .text(" Please enter a correct email format!")
    .css("color", "red")
);

$("label[for='mail'] span").hide();
// Must be a valid email address
let isValidEmail = email => {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
};

$(document).on("input", 'input[name="user-email"]', function(e) {
  console.log(e.target.value);
  if (!isValidEmail(e.target.value)) {
    $("label[for='mail'] span").show();
    $("input[name='user-email']").css({
      "border-color": "red",
      "border-weight": "1px",
      "border-style": "solid"
    });
  } else {
    $("label[for='mail'] span").hide();
    $("input[name='user-email']").css({
      "border-color": "#6F9DDC",
      "border-weight": "2px",
      "border-style": "solid"
    });
  }
});

/******************************************************************
                   JOB ROLE SECTION 
 * ***************************************************************/
$("#other-title").hide();
$("#title").change(function(e) {
  //capture title selected and
  //if title is "other" show job role textbox
  let selectedJobTitle = e.target.value;

  if (selectedJobTitle === "other") {
    $("#other-title").show();
  } else {
    $("#other-title").hide();
  }
});

/******************************************************************
                   THEME AND COLOR SELECTION SECTION 
 * ***************************************************************/
$("#color option").each(function(index, item) {
  //hide color options by default until a theme
  //selection is made
  $(item).hide();
});

//add change() to Select Theme And perform the appropiate changes on
//color to select for T-shirt based on design option selected
$("#design").change(function(e) {
  let selectedDesign = e.target.value;

  // $("select#design")
  //   .children("option:selected")
  //   .val();

  //   console.log(selectedDesign);
  if (selectedDesign === "js puns") {
    $("#color option:lt(4)").each(function(index, item) {
      $(item).show();
    });

    $("#color option:gt(3)").each(function(index, item) {
      $(item).hide();
    });
    $("#color option[value='']").hide();
    $("#color option[value='tomato']").attr("selected", false);
    $("#color option[value='cornflowerblue']").attr("selected", true);
  } else if (selectedDesign === "heart js") {
    $("#color option:lt(4)").each(function(index, item) {
      $(item).hide();
    });

    $("#color option:gt(3)").each(function(index, item) {
      $(item).show();
    });
    $("#color option[value='']").hide();
    $("#color option[value='cornflowerblue']").attr("selected", false);
    $("#color option[value='tomato']").attr("selected", true);
  } else {
    $("#color option").each(function(index, item) {
      $(item).hide();
    });
    $("#color option[value='cornflowerblue']").attr("selected", false);
    $("#color option[value='tomato']").attr("selected", false);
    $("#color option[value='']").attr("selected", true);
  }
});

/********************************************************************
 *          SELECT WORKSHOPS AND DISPLAY TOTAL COST SECTION
 ********************************************************************/
let totalCostElement = $(document.createElement("div"));
totalCostElement.attr("id", "totalCost");

$(".activities").append(totalCostElement);
$("#totalCost").hide();
let totalCost = 0;

$(".activities input[type=checkbox]").change(function(e) {
  //add listener to checkboxes for workshops
  //ensure user doesn't select two workshops
  //that happen at the same time
  let workshopName = e.target.name;
  let checkboxCheckedValue = e.target.checked;
  let workshopCost = e.target.text;
  console.log(workshopCost);
  if (checkboxCheckedValue) {
    //determine workshop name and disabled
    //workshops that clash with its time
    if (workshopName === "js-frameworks") {
      $(".activities input[name='express']").attr(
        "disabled",
        checkboxCheckedValue
      );
      totalCost += 100;
    } else if (workshopName === "js-libs") {
      $(".activities input[name='node']").attr(
        "disabled",
        checkboxCheckedValue
      );
      totalCost += 100;
    } else if (workshopName === "express") {
      $(".activities input[name='js-frameworks']").attr(
        "disabled",
        checkboxCheckedValue
      );
      totalCost += 100;
    } else if (workshopName === "node") {
      $(".activities input[name='js-libs']").attr(
        "disabled",
        checkboxCheckedValue
      );
      totalCost += 100;
    } else if (workshopName === "build-tools") {
      totalCost += 100;
    } else if (workshopName === "npm") {
      totalCost += 100;
    } else {
      totalCost += 200;
    }
    //console.log(totalCost);
    if (totalCost) {
      //display total cost for customer if its greater than zero
      $("#totalCost").show();
      $("#totalCost").text(`Total: $${totalCost}`);
    } else {
      $("#totalCost").hide();
    }
  } else {
    if (workshopName === "js-frameworks") {
      $(".activities input[name='express']").attr(
        "disabled",
        checkboxCheckedValue
      );
      totalCost -= 100;
    } else if (workshopName === "js-libs") {
      $(".activities input[name='node']").attr(
        "disabled",
        checkboxCheckedValue
      );
      totalCost -= 100;
    } else if (workshopName === "express") {
      $(".activities input[name='js-frameworks']").attr(
        "disabled",
        checkboxCheckedValue
      );
      totalCost -= 100;
    } else if (workshopName === "node") {
      $(".activities input[name='js-libs']").attr(
        "disabled",
        checkboxCheckedValue
      );
      totalCost -= 100;
    } else if (workshopName === "build-tools") {
      totalCost -= 100;
    } else if (workshopName === "npm") {
      totalCost -= 100;
    } else {
      totalCost -= 200;
    }
    //console.log(totalCost);
    if (totalCost) {
      //display total cost for customer if its greater than zero
      $("#totalCost").show();
      $("#totalCost").text(`Total: $${totalCost}`);
    } else {
      $("#totalCost").hide();
    }
  }
});

/****************************************************************
 *                PAYMENT SECTION
 ****************************************************************/
$("#payment option[value='select method']").attr("disabled", "disabled"); //disable default value
$("#payment").change(function(e) {
  let selectedPaymentMethod = $("select#payment")
    .children("option:selected")
    .val();

  if (selectedPaymentMethod === "PayPal") {
    $("#bitcoin").hide();
    $("#credit-card").hide();
    $("#paypal").show();
    // $("#color option[value='']").attr("selected", false);
    //$("#color option[value='cornflowerblue']").attr("selected", true);
  } else if (selectedPaymentMethod === "Bitcoin") {
    $("#credit-card").hide();
    $("#paypal").hide();
    $("#bitcoin").show();
  } else {
    $("#credit-card").show();
    $("#paypal").hide();
    $("#bitcoin").hide();
  }
});

/**********************************************************************
                           CREDIT CARD SECTION
 *******************************************************************/
/****************  CREDIT CARD NUMBER  *********************** */
let isValidCreditNumber = creditCardNumber => {
  return (
    /^[0-9]{13}$/i.test(creditCardNumber) ||
    /^[0-9]{16}$/i.test(creditCardNumber)
  );
};

let errorMessageCreditNumberElement = $(document.createElement("span"));
$("label[for='cc-num']").append(
  errorMessageCreditNumberElement
    .text(" Please enter a correct 13 or 16 digits!")
    .css("color", "red")
);
$("label[for='cc-num'] span").hide();

$(document).on("input", 'input[name="user-cc-num"]', function(e) {
  if (!isValidCreditNumber(e.target.value)) {
    $("label[for='cc-num'] span").show();
    $("input[name='user-cc-num']").css({
      "border-color": "red",
      "border-weight": "1px",
      "border-style": "solid"
    });
  } else {
    $("label[for='cc-num'] span").hide();
    $("input[name='user-cc-num']").css({
      "border-color": "#6F9DDC",
      "border-weight": "2px",
      "border-style": "solid"
    });
  }
});
/****************  ZIPCODE NUMBER  *********************** */

let isValidZipCode = zipcode => {
  return /^[0-9]{5}$/i.test(zipcode);
};

let errorMessageZipCodeElement = $(document.createElement("span"));
$("label[for='zip']").append(
  errorMessageZipCodeElement
    .text("Enter 5 Digits")
    .css("color", "red")
);
$("label[for='zip'] span").hide();

$(document).on("input", 'input[name="user-zip"]', function(e) {
  if (!isValidZipCode(e.target.value)) {
    $("label[for='zip'] span").show();
    $("input[name='user-zip']").css({
      "border-color": "red",
      "border-weight": "1px",
      "border-style": "solid"
    });
  } else {
    $("label[for='zip'] span").hide();
    $("input[name='user-zip']").css({
      "border-color": "#6F9DDC",
      "border-weight": "2px",
      "border-style": "solid"
    });
  }
});
/********************** CVC ELEMENT ********************** */

let isValidCVV = cvv => {
  return /^[0-9]{3}$/i.test(cvv);
};

let errorMessageCVV = $(document.createElement("span"));
$("label[for='cvv']").append(
  errorMessageCVV
    .text("Enter 3 Digits")
    .css("color", "red")
);
$("label[for='cvv'] span").hide();

$(document).on("input", 'input[name="user-cvv"]', function(e) {
  if (!isValidCVV(e.target.value)) {
    $("label[for='cvv'] span").show();
    $("input[name='user-cvv']").css({
      "border-color": "red",
      "border-weight": "1px",
      "border-style": "solid"
    });
  } else {
    $("label[for='cvv'] span").hide();
    $("input[name='user-cvv']").css({
      "border-color": "#6F9DDC",
      "border-weight": "2px",
      "border-style": "solid"
    });
  }
});


/******************************************************************
                         SUBMIT BUTTON
 *******************************************************************/
