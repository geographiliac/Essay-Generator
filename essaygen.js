var essaygen = {
    generate: function(options) {
        var quotes = options.quotes;
        // set option defaults
        var litType = "short story";
        var protagonist = "the protagonist";
        var techniques = ["alliteration", "simile", "metaphor", "personification", "listing", "anthropomorphism", "assonance", "euphemism", "pathetic fallacy"];
        var writerName = "the writer";
        var outputType = "default";
        var adjectives = ["lively", "realistic", "cheerful", "dramatic", "happy", "joyous", "carefree", "radiant", "lighthearted", "selfish", "selfless","vain", "greedy"];
        var nouns = ["sorrow", "kindness", "happiness", "joy", "vanity", "lightheartedness", "greediness", "radiance", "personality", "kindheartedness", "charity", "selflessness", "selfishness"];
        
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
            if ("nouns" in options) {
                nouns = options.nouns;
            }
        }
        
        var paragraphBefore = "";
        var paragraphAfter = "";
        var joinChar = "\n";
        
        if (outputType == "html") {
            paragraphBefore = "<p>";
            joinChar = "";
            paragraphAfter = "</p>";
        }
        
        var randomInArray = function(array){
            return array[Math.round(Math.random()*(array.length-1))];
        }
        
        var randomWord = function(string){
            var regex = new RegExp("\\.|,|;|:|-","g");
            string = string.replace(regex,""); // remove punctuation
            var array = string.split(" ");
            return array[Math.round(Math.random()*(array.length-1))];
        }
        
        var replaceVariables = function(string) {
            while (string.indexOf("%t%") != -1 || string.indexOf("%l%") != -1 ||
                   string.indexOf("%w%") != -1 || string.indexOf("%p%") != -1 ||
                   string.indexOf("%a%") != -1 || string.indexOf("%q%") != -1 ||
                   string.indexOf("%qw%") != -1 || string.indexOf("%n%") != -1) {
                    string = string.replace("%t%",randomInArray(techniques))
                                   .replace("%l%",litType).replace("%w%",writerName)
                                   .replace("%p%",protagonist)
                                   .replace("%a%",randomInArray(adjectives))
                                   .replace("%q%",quotes[i]).replace("%qw%",randomWord(quotes[i]))
                                   .replace("%n%",randomInArray(nouns));
            }
            return string;
        }

        var points = [
            [
                "The writer skilfully uses language and techniques like %t% and %t% to effectively convey his message.",
                "In this %l%, %w% tries to emphasize %p%'s personality.",
                "The writer uses a combination of %t% and %t% to bring out %p%'s %a% thoughts and feelings to the reader.",
                "One of the ways that %w% makes the %l% more exciting is by focusing on %p%'s %n%. This makes the reader feel more familiar with them and lets the reader feel their %n% and %n%."
            ],[
                "An example of this can be found in this quote: '%q%'.",
                "This makes the %l% seem more %a% and %a%, as shown in the following quote: '%q%'.",
                "He does this in the following quote: '%q%', which brings out the %a% nature of the situation in the %l%.",
                "This is demonstrated in this quote: '%q%'."
            ]
        ];
        var explanations = [
            [
                "This suggests that %w% feels very strongly about the situation, as shown by the %t% in the above quote. It causes the reader to associate the %n% and %n%, which adds to the %a% atmosphere of the %l%.",
                "'%qw%' suggests that %p% felt extremely %a% about the events in the %l%."
            ],[
                "Also, the writer effectively uses %t% in his %l%, to let the reader experience %p%'s %a% feelings.",
                "However, '%qw%' suggests that %p% also felt %a% and %a%, which builds up the reader's interest and makes the %l% more exciting.",
                "Furthermore, '%qw%' suggests to the reader the central concept in the %l%, which is %w%'s main intention. He accentuates %p%'s %n%, and puts less emphasis on his %n% to create this effect."
            ]
        ];
        var finalEssay = [];
        
        for (i=0;i<quotes.length;i++) {
            var point = randomInArray(points[0]) + " " + randomInArray(points[1]);
            point = replaceVariables(point);
            
            var explanation = randomInArray(explanations[0]) + " " + randomInArray(explanations[1]);
            explanation = replaceVariables(explanation);
            
            var paragraph = paragraphBefore + point + " " + explanation + paragraphAfter;
            finalEssay.push(paragraph);
        }
        
        return finalEssay.join(joinChar);
    }
};