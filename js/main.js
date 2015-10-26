/*
// Select element from the DOM
$('selector');

// Assign event
$('selector').on('specify-event', function(){});

// Create HTML element
var li = $('<li>');

// Add to page
$('ol').append(li);

// Or
li.appendTo($('ol'));
*/

$("button").on("click", function() {

    var thisButton = this.id;
    var selectorToModify = $("#selector").val();
    var contentToApply = $("#newContent").val();

    if (thisButton == "change-content") {
        $(selectorToModify).val(contentToApply);
    } else if (thisButton == "add-at-end") {
        $(selectorToModify).append(contentToApply);
    } else if (thisButton == "add-at-start") {
        $(selectorToModify).prepend(contentToApply);
    } else if (thisButton == "insert-before") {
        $(selectorToModify).before(contentToApply);
    } else if (thisButton == "move-after") {
        $(selectorToModify).after(contentToApply);
    } else if (thisButton == "surround-class") {
        $(selectorToModify).wrap("<div class='" + contentToApply + "'></div>");
    } else if (thisButton == "hide-text") {
        if ($(selectorToModify).length() > 12) { 
            $(selectorToModify).wrap("<div class='hidden'></div>");
        }
    } else if (thisButton == "remove-word") {
        if ($(selectorToModify).has(contentToApply)) {
            $(selectorToModify).wrap("<div class='hidden'></div>");
        }
    } else {
        alert("What button did you press??");
    }

});