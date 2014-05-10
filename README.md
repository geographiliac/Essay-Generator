# Essay Generator

### Nonsensical essay generator

## About

Essay Generator is a JavaScript utility that lets you input an array of quotes from the literature you are meant to be studying, and generates a nonsensical essay with the Point, Example, Explanation layout.

## How to use it

`essaygen.generate(Array quotes, String litType,Boolean htmlFormat)`

Returns the generated essay
`quotes` - an array of strings that you want to include as quotes from the literature.
`litType` - the type of literature the essay is about.
`htmlFormat` - toggle using html to format the essay. Default `false`.

###### Examples

`essaygen.generate(["To be or not to be, that is the question","How much wood would a woodchuck chuck?"],"short story")`

`essaygen.generate(someQuotes,"play",true)`
