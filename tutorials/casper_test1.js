/* casper_test1.js This function will open a site and take a screenshot. */


casper.options.viewportSize = {width: 800, height: 600};  
casper.start("https://www.google.com", function() {  
    console.log('Testing Site:\"' + this.getTitle() + '"');
    casper.capture(this.getTitle() + ".png");
}).run();