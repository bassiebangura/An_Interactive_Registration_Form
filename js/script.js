$("#name").focus(); //add focus to name input on page load

$("#color option").each(function(index, item) {
  $(item).hide();
});

//add change() to Select Theme And perform the appropiate changes on
//color to select for T-shirt based on design option selected
$("#design").change(function() {
  let selectedDesign = $("select#design")
    .children("option:selected")
    .val();

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

//add listener to checkboxes for workshops
//ensure user doesn't select two workshops
//that happen at the same time

let totalCostElement = $(document.createElement("div"));
totalCostElement.attr("id", "totalCost");

$(".activities").append(totalCostElement);
$("#totalCost").hide();
let totalCost = 0;
$(".activities input[type=checkbox]").change(function(e) {
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
  // $(".activities input:checked").each(function(index, item) {
  //   let workshopCost = parseInt(
  //     $(item)
  //       .attr("data-cost")
  //       .substring(1)
  //   );

  //   totalCost += workshopCost;

  // });
});
