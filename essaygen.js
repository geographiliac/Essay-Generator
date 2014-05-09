var essaygen = {
    generate: function(quotes,litType) {
        var points = [
            [
                "The writer skilfully uses language and techniques like alliteration and simile to effectively convey his message.",
                "In this " + litType + ", the writer tries to emphasize the protagonist's personality."
            ],[
                "An example of this can be found in this quote:"
            ]
        ];
        var explanations = [
            [
                "This suggests that the writer feels very strongly about the situation, as shown in the alliteration in the above quote. It causes the reader to associate the two things, which adds the atmosphere of the " + litType +"."
            ],[
                "Also, the writer effectively uses metaphor in his " + litType + ", to let the reader experience the protagonist's feelings."
            ]
        ];
        var finalEssay = "";
        var randomInArray = function(array){
            return array[Math.round(Math.random()*(array.length-1))];
        }
        
        for (i=0; i<quotes.length; i++) {
            var point = randomInArray(points[0]) + " " + randomInArray(points[1]);
            var quote = quotes[i];
            var explanation = randomInArray(explanations[0]) + " " + randomInArray(explanations[1]);
            var paragraph = point + " " + "\"" + quote + "\"" + ". " + explanation + "\n";
            finalEssay += paragraph;
        }
        
        return finalEssay;
    }
};