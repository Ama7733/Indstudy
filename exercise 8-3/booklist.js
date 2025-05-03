$(document).ready(function() {
    // Preload images
    $("main a").each(function() {
        var img = new Image();
        img.src = $(this).attr("href");
    });
    
    // Hide book lists initially
    $("main div").hide();
    
    // Toggle book lists and hide image on header click
    $("main h2").click(function() {
        $(this).next("div").slideToggle();
        $("#image").attr("src", ""); // Remove the image
    });
    
    // Display selected book image
    $("main a").click(function(event) {
        event.preventDefault(); // Prevent default link action
        var imageURL = $(this).attr("href");
        $("#image").attr("src", imageURL);
    });
});