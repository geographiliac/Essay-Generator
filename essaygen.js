var essaygen = {
    generate: function(quotes,options) {
        // set option defaults
        var litType = "short story";
        var protagonist = "the protagonist";
        var techniques = ["alliteration", "simile", "metaphor", "personification"];
        var writerName = "the writer";
        var outputType = "default";
        
        var lineBreaker = "\n";
        
        if (options) {
            if ("type" in options) {
                litType = options.type;
            }
            if ("protagonist" in options) {
                protagonist = options.protagonist;
            }
            if ("protagonist" in options) {
                techniques = options.techniques;
            }
            if ("writer" in options) {
                writerName = options.writer;
            }
            if ("output" in options) {
                outputType = options.output;
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
                "The writer skilfully uses language and techniques like " + randomInArray(techniques) + " and " + randomInArray(techniques) + " to effectively convey his message.",
                "In this " + litType + ", " + writerName + " tries to emphasize " + protagonist + "'s personality."
            ],[
                "An example of this can be found in this quote:"
            ]
        ];
        var explanations = [
            [
                "This suggests that " + writerName + " feels very strongly about the situation, as shown in the " + randomInArray(techniques) + " in the above quote. It causes the reader to associate the two things, which adds the atmosphere of the " + litType +"."
            ],[
                "Also, the writer effectively uses " + randomInArray(techniques) + " in his " + litType + ", to let the reader experience " + protagonist + "'s feelings."
            ]
        ];
        var finalEssay = [];
        
        for (i=0; i<quotes.length; i++) {
            var point = randomInArray(points[0]) + " " + randomInArray(points[1]);
            var quote = quotes[i];
            var explanation = randomInArray(explanations[0]) + " " + randomInArray(explanations[1]);
            var paragraph = point + " " + "\"" + quote + "\"" + ". " + explanation;
            finalEssay.push(paragraph);
        }
        
        return finalEssay.join(lineBreaker);
    }
};