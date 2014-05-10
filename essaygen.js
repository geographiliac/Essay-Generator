var essaygen = {
    generate: function(quotes,options) {
        // set option defaults
        var litType = "short story";
        var protagonist = "the protagonist";
        var techniques = ["alliteration", "simile", "metaphor", "personification", "listing", "anthropomorphism", "assonance", "euphemism", "pathetic fallacy"];
        var writerName = "the writer";
        var outputType = "default";
        var adjectives = ["lively", "realistic", "cheerful", "dramatic", "happy", "joyous", "carefree", "radiant", "lighthearted"];
        
        var lineBreaker = "\n";
        
        if (options) {
            if ("type" in options) {
                litType = options.type;
            }
            if ("protagonist" in options) {
                protagonist = options.protagonist;
            }
            if ("techniques" in options) {
                techniques = options.techniques;
            }
            if ("writer" in options) {
                writerName = options.writer;
            }
            if ("output" in options) {
                outputType = options.output;
            }
            if ("adjectives" in options) {
                adjectives = options.adjectives;
            }
        }
        
        if (outputType == "html") {
            lineBreaker = "<br>";
        }
        
        var randomInArray = function(array){
            return array[Math.round(Math.random()*(array.length-1))];
        }

        var points = [
            [
                "The writer skilfully uses language and techniques like %t% and %t% to effectively convey his message.",
                "In this %l%, %w% tries to emphasize %p%'s personality.",
                "The writer uses a combination of %t% and %t% to bring out %p%'s %a% thoughts and feelings to the reader."
            ],[
                "An example of this can be found in this quote: '%q%'",
                "This makes the %l% seem more %a% and %a%, as shown in the following quote: '%q%'"
            ]
        ];
        var explanations = [
            [
                "This suggests that %w% feels very strongly about the situation, as shown in the %t% in the above quote. It causes the reader to associate the two things, which adds to the %a% atmosphere of the %l%."
            ],[
                "Also, the writer effectively uses %t% in his %l%, to let the reader experience %p%'s %a% feelings."
            ]
        ];
        var finalEssay = [];
        
        for (i=0;i<quotes.length;i++) {
            var point = randomInArray(points[0]) + " " + randomInArray(points[1]);
            while (point.indexOf("%t%") != -1 || point.indexOf("%l%") != -1 || point.indexOf("%w%") != -1 || point.indexOf("%p%") != -1 || point.indexOf("%a%") != -1 || point.indexOf("%q%") != -1) {
                point = point.replace("%t%",randomInArray(techniques)).replace("%l%",litType).replace("%w%",writerName).replace("%p%",protagonist).replace("%a%",randomInArray(adjectives)).replace("%q%",quotes[i]);
            }
            
            var explanation = randomInArray(explanations[0]) + " " + randomInArray(explanations[1]);
            while (explanation.indexOf("%t%") != -1 || explanation.indexOf("%l%") != -1 || explanation.indexOf("%w%") != -1 || explanation.indexOf("%p%") != -1 || explanation.indexOf("%a%") != -1 || explanation.indexOf("%q%") != -1) {
                explanation = explanation.replace("%t%",randomInArray(techniques)).replace("%l%",litType).replace("%w%",writerName).replace("%p%",protagonist).replace("%a%",randomInArray(adjectives)).replace("%q%",quotes[i]);
            }
            
            var paragraph = point + ". " + explanation;
            finalEssay.push(paragraph);
        }
        
        return finalEssay.join(lineBreaker);
    }
};