# Essay Generator

### Nonsensical essay generator

## About

Essay Generator is a JavaScript utility that lets you input an array of quotes from the literature you are meant to be studying, and generates a nonsensical essay with the Point, Example, Explanation layout.

## How to use it

`essaygen.generate(Object options)`

Returns the generated essay

##### `options`:
+ `quotes` (*required*) - an array of strings that you want to include as quotes from the literature.
+ `type` - the type of literature you are writing about. Default `"short story"`
+ `protagonist` - the name of the protagonist. Default `"the protagonist"`
+ `techniques` - an array of techniques you want to mention. Default `["alliteration", "simile", "metaphor", "personification"]`
+ `writer` - the name of the writer. Default `"the writer"`.
+ `output` - the type of output you want, either `"default"` or `"html"`. `"default"` breaks lines with a newline character while `"html"` breaks lines with `"<br>"`. Default `"default"`

###### Examples

`essaygen.generate({quotes:["To be or not to be, that is the question","How much wood would a woodchuck chuck?"]})`

`essaygen.generate({quotes:someQuotes,type:"play",protagonist:"Captain Yeya",writer:"Wilfred Claus"})`
