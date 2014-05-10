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
                "The writer skilfully uses language and techniques like " + randomInArray(techniques) + " and " + randomInArray(techniques) + " to effectively convey his message.",
                "In this " + litType + ", " + writerName + " tries to emphasize " + protagonist + "'s personality.",
                "The writer uses a combination of " + randomInArray(techniques) + " and " + randomInArray(techniques) + " to bring out " + protagonist + "'s " + randomInArray(adjectives) + " thoughts and feelings to the reader."
            ],[
                "An example of this can be found in this quote:",
                "This makes the " + litType + " seem more " + randomInArray(adjectives) + " and " + randomInArray(adjectives) + ", as shown in the following quote:"
            ]
        ];
        var explanations = [
            [
                "This suggests that " + writerName + " feels very strongly about the situation, as shown in the " + randomInArray(techniques) + " in the above quote. It causes the reader to associate the two things, which adds to the " + randomInArray(adjectives) + " atmosphere of the " + litType +"."
            ],[
                "Also, the writer effectively uses " + randomInArray(techniques) + " in his " + litType + ", to let the reader experience " + protagonist + "'s " + randomInArray(adjectives) + " feelings."
            ]
        ];
        var finalEssay = [];
        
        while (quotes.length > 0) {
            var point = randomInArray(points[0]) + " " + randomInArray(points[1]);
            var quote = quotes.shift();
            var explanation = randomInArray(explanations[0]) + " " + randomInArray(explanations[1]);
            var paragraph = point + " " + "\"" + quote + "\"" + ". " + explanation;
            finalEssay.push(paragraph);
        }
        
        return finalEssay.join(lineBreaker);
    }
};