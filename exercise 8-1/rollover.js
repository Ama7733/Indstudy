"use strict";
$(document).ready(() => {

    // process each img tag
    $("#image_rollovers img").each((index, img) => {
        const oldURL = img.src;      // gets the src attribute
        const newURL = img.id;       // gets the id attribute

        // preload rollover image		
        const rolloverImage = new Image();
        rolloverImage.src = newURL;

        // set up event handlers for mouseover and mouseout
        $(img).on("mouseover", () => img.src = newURL);  // mouse over
        $(img).on("mouseout", () => img.src = oldURL);   // mouse out
    });
    
});