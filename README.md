# Essay Generator

### Nonsensical essay generator

## About

Essay Generator is a JavaScript utility that lets you input an array of quotes from the literature you are meant to be studying, and generates a nonsensical essay with the Point, Example, Explanation layout.

###### Example output

In this short story, the writer tries to emphasize the protagonist's personality. This makes the short story seem more happy and joyous, as shown in the following quote: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?". This suggests that the writer feels very strongly about the situation, as shown in the listing in the above quote. It causes the reader to associate the two things, which adds to the dramatic atmosphere of the short story. Also, the writer effectively uses simile in his short story, to let the reader experience the protagonist's lighthearted feelings.

The writer uses a combination of pathetic fallacy and anthropomorphism to bring out the protagonist's realistic thoughts and feelings to the reader. This makes the short story seem more happy and joyous, as shown in the following quote: "To be or not to be, that isn't the question.". This suggests that the writer feels very strongly about the situation, as shown in the listing in the above quote. It causes the reader to associate the two things, which adds to the dramatic atmosphere of the short story. Also, the writer effectively uses simile in his short story, to let the reader experience the protagonist's lighthearted feelings.

## How to use it

`essaygen.generate(Object options)`

Returns the generated essay

* `options`:
  * `quotes` (*required*) - an array of strings that you want to include as quotes from the literature.
  * `type` - the type of literature you are writing about. *Default* `"short story"`
  * `protagonist` - the name of the protagonist. *Default* `"the protagonist"`
  * `techniques` - an array of techniques you want to mention. *Default* `["alliteration", "simile", "metaphor", "personification"]`
  * `writer` - the name of the writer. *Default* `"the writer"`.
  * `output` - the type of output you want, either `"default"` or `"html"`. `"default"` breaks lines with a newline character while `"html"` breaks lines with `"<br>"`. *Default* `"default"`

###### Examples

```javascript
essaygen.generate({
  quotes:["To be or not to be, that is the question","How much wood would a woodchuck chuck?"]
})
```

```javascript
essaygen.generate({
  quotes:someQuotes,
  type:"play",
  protagonist:"Captain Yeya",
  writer:"Wilfred Claus"
})
```
