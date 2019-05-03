##Deployment##

- delete package lock
- delete node modules

- yarn
- yarn serve
- add  "build": "webpack -p” under scripts in package json
- yarn build

this will create a bundle.js in dist

touch index.js
<!-- You have to call it index.js -->
yarn add express dotenv

make an .env file
add Port = 4000

In index.js:
*build the easiest server*
require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 8080
const app = express()

app.listen(port, () => console.log(`App is listening on port ${port}`))

In package.json under scripts, add "start": "node index.js"
As Heroku will expect it

Try it with yarn start now

In index.js:
app.use(express.statis(`${__dirname}/dist`))


app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))*

//Any request that comes from any url, we're just going to send file. and it contains a script tag to the javascript and its going to find that

Now its not on webpack's server, its on our own server

*Heroku*
install homebrew into terminal
brew tap heroku/brew && brew install heroku

heroku login in terminal
should open browser

Logged in as firegalru@hotmail.com

git init
