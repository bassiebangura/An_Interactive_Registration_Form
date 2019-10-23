$("#name").focus(); //add focus to name input on page load

$("#other-title").hide();
// cornflowerblue;
//cornflowerblue
// script.js:16 darkslategrey
// script.js:16 gold
// script.js:16 tomato
// script.js:16 steelblue
// script.js:16 dimgrey

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

let  totalCostElement = $(document.createElement('div'))


$(".activities").append(totalCostElement.text("total"))
$("input[type=checkbox]").on("click", function() {
  $("input:checked").each(function(index, item) {
    console.log($(item).attr("data-day-and-time"));
    console.log($(item).attr("data-cost"))
  });
});
