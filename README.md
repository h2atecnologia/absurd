# AbsurdJS

[![Build Status](https://travis-ci.org/krasimir/absurd.png?branch=master)](https://travis-ci.org/krasimir/absurd)
[![Dependency Status](https://david-dm.org/krasimir/absurd.png?theme=shields.io)](https://david-dm.org/krasimir/absurd)

## Overview

Javascript based preprocessor. No new language, no new syntax. Write everything in plain JavaScript.

## Installation

### [Server-side](http://absurdjs.com/pages/installation/#node-js)

	npm install -g absurd

### [Client-side](http://absurdjs.com/pages/installation/#client-side-port)

	<script src="absurd.min.js"></script>

## What it does

AbsurdJS was started as CSS preprocessor, but later it was expanded to a HTML preprocessor. So, at the moment you could transform:

  - JavaScript, JSON, YAML, CSS to CSS
  - JavaScript, JSON, YAML to HTML

## How

	var api = Absurd();
	api.add({
		body: {
			marginTop: "20px",
			p: {
				color: "#000"
			}
		}
	});
	api.compile(function(err, css) {
		// use the compiled css
	});

## Official site, documentation and online compilator

[http://absurdjs.com/](http://absurdjs.com/)

## Extended

Middleware
* [Grunt-Absurd](https://github.com/krasimir/grunt-absurd) Compile Absurd with the Grunt Javascript Task Runner
* [Gulp-Absurd](https://github.com/krasimir/gulp-absurd) Compile Absurd with the Gulp Streaming Build System
* [Broccoli-Absurd-Filter](https://github.com/Xulai/broccoli-absurd-filter) Compile 1 to 1 Absurd with the Broccoli Asset Pipeline

Seeds
* None avaliable yet

Generators
* None avaliable yet

Mixins
* [AbsurdHat](https://github.com/carlos22/absurdhat) A proof of concept wrapper for the LessHat set of Mixins

Frameworks
* [DadaJS](https://github.com/stockholmux/dada-js) Go even more absurd with Array Zero Selectors, an inbuilt vocabulary and a grid system utilising PocketGrid

CMSs
* [Techy](https://github.com/krasimir/techy) Super-Simple Flat CMS utilising Markdown as the geeky way of writing articles

## Resources

  - AbsurdJS fundamentals - [link](http://krasimirtsonev.com/blog/article/AbsurdJS-fundamentals)
  - Writing your CSS with JavaScript - [link](http://davidwalsh.name/write-css-javascript)

