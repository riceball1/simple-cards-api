# Simple Cards API
<img src="https://img.shields.io/badge/wip-work%20in%20progress-orange"/>

A simple consumable API for creating an anki clone

## About

- Built with nest.js and REST endpoint
- [quickstart](https://docs.nestjs.com/)

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Nest CLI

Use nest cli to help setup nestjs projects and create modules, etc

```bash

# install nest cli 
$ npm i -g @nestjs/cli@latest

```

## API Routes

Root URL: localhost:8000 or https://simple-cards-api.vercel.app/
### Decks <img src="https://img.shields.io/badge/wip-work%20in%20progress-orange"/>

`/decks` endpoint will return the user's decks where they can store a limit of 25 cards.

| URL | METHOD| PARAMS| DETAILS | RESPONSES|
|--|--|--|--|--|
|`/decks`|`GET`| |||
|`/decks`|`POST`||||
|`/decks/:id`|`DELETE`||||
|`/decks/:id`|`PUT`||||


## Card <img src="https://img.shields.io/badge/wip-work%20in%20progress-orange"/>
`/card` endpoint will return the user's card where they can store a limit of 25 cards.

| URL | METHOD| PARAMS| DETAILS | RESPONSES|
|--|--|--|--|--|
|`/card/:id`|`GET`| |||
|`/card`|`POST`||||
|`/card/:id`|`DELETE`||||
|`/card/:id`|`PUT`||||



## Resources
- [nest.js crash course 7 episodes](https://www.youtube.com/watch?v=pcX97ZrTE6M&list=PL4cUxeGkcC9g8YFseGdkyj9RH9kVs_cMr)
- [deckofcards api](https://github.com/crobertsbmw/deckofcards)