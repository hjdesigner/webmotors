# Webmotors - React Study

## About the Project

Responsive project that displays search reports to find a vehicle. The data is filtered by API as you select the filter. The design follows specification of 933x312 passed according to the documentation and with the current visual identity of the webmotors website.

Screenshot

![GitHub Dashboard](http://henriquemelanda.com.br/assests/img/webmotors.jpg)

## What's inside it?
* ReactJs, for component construction and state control
* Webpack 3+, to package the code
* Babel, to compile ES6
* eslint, code quality
* Json-Server, API Rest 

## Dependencies:
* Node.js >= v6

## Up and running
* Clone this repository git@github.com:hjdesigner/webmotors.git
* Install dependencies: yarn install
* Run `yarn server:json` to upload the API server
* Run `yarn start` (or npm start) to develop on http://localhost:3000
* Run `yarn build` for production build (files will be generated on dist directory)


##### Note

I used json-server to create the local api because the last api was not configured to access outside the webmotors domino
