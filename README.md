# Essay Generator

#### Nonsensical essay generator

Essay Generator is a JavaScript utility that lets you input an array of quotes from the literature you are meant to be studying, and generates a nonsensical essay with the Point, Example, Explanation layout.

Check it out live at http://2shrt.co.nf/?essaygen

###### Example output

> The writer skilfully uses language and techniques like euphemism and assonance to effectively convey his message. This makes the short story seem more dramatic and cheerful, as shown in the following quote: 'How much wood would a woodchuck chuck?'. This suggests that the writer feels very strongly about the situation, as shown by the simile in the above quote. It causes the reader to associate the two things, which adds to the cheerful atmosphere of the short story. However, 'woodchuck' suggests that the protagonist also felt lighthearted and carefree, which builds up the reader's interest and makes the short story more exciting.

## Usage

`essaygen.generate(Object options)`

Returns the generated essay

* `options`:
  * `quotes` (*required*) - an array of strings that you want to include as quotes from the literature.
  * `type` - the type of literature you are writing about.
    * Default `"short story"`
  * `protagonist` - the name of the protagonist.
    * Default `"the protagonist"`
  * `techniques` - an array of techniques you want to mention.
    * Default `["alliteration", "simile", "metaphor", "personification"]`
  * `adjectives` - an array of adjectives you want the essay to use.
    * Default `["lively", "realistic", "cheerful", "dramatic", "happy", "joyous", "carefree", "radiant", "lighthearted"]`
  * `writer` - the name of the writer.
    * Default `"the writer"`.
  * `output` - the type of output you want, either `"default"` or `"html"`. `"default"` breaks lines with a newline character while `"html"` breaks lines with `"<br>"`.
    * Default `"default"`

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
