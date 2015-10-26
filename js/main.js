// Handling the buttons.
$("button").on("click", function() {

    // Establishing buttons as variables.
    var thisButton = this.id;
    var selectorToModify = $("#selector").val();
    var contentToApply = $("#newContent").val();

    // Establishing individual actions for each button.
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
        // In the event of pressing a button that isn't specified herein.
        alert("What button did you press??");
    }

});