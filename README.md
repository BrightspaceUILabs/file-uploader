# file-uploader
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A [Polymer](https://www.polymer-project.org) component for uploading files with drag and drop capability. This component does not perform the actual uploading work, it simply provides visual cues and exposes an event when files have been uploaded.

![screenshot of file uploader](/screenshots/file-uploader.gif?raw=true)

## Installation
`d2l-file-uploader` can be installed from [Bower][bower-url]:

```shell
bower install d2l-file-uploader
```

## Usage

Include the [webcomponents.js](https://www.webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-file-uploader.html`:

```html
<head>
	<script src="../webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="../d2l-file-uploader/d2l-file-uploader.html">
</head>
```

### Basic Usage with Accessible Label

It's important to always provide an accessible label which describes the purpose of the uploader using the `label` attribute. The label will be hidden visually but associated with the upload input for those using assistive technologies such as a screen reader.

```html
<d2l-file-uploader label="profile picture"></d2l-file-uploader>
```

### Multi-file Uploads

To allow for multiple files to be uploaded, add the `multiple` attribute:

```html
<d2l-file-uploader multiple ...></d2l-file-uploader>
```

### Setting the Language

The `language` attribute sets the language the file uploader should use. Currently supported values are: `en`, `ar-SA`, `de-DE`, `es-MX`, `fr-CA`, `ja-JP`, `ko-KR`, `nb-NO`, `nl-NL`, `pt-BR`, `sv-SE`, `tr-TR`, `zh-CN`, `zh-TW`.

If the language attribute is not present, it will default to English.

```html
<d2l-file-uploader language="fr-CA" ...></d2l-file-uploader>
```

![screenshot of file uploader localized](/screenshots/localized.png?raw=true)

### Displaying Errors

If you encounter an error scenario, an error message can be shown to the user. Add the `error` attribute (boolean) and set the `error-message` attribute to a custom error message to display in the message box.

```html
<d2l-file-uploader error error-message="An error has occurred with your upload."></d2l-file-uploader>
```

![screenshot of file uploader in error state](/screenshots/error.png?raw=true)

### Handling Uploaded Files

When the user uploads one or more files, a `file-added-to-upload` event is fired. To listen for this event, wire up an event listener to the `<d2l-file-uploader>` element. The listener will be passed an event with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects from the [File API](https://developer.mozilla.org/en/docs/Web/API/File).

Vanilla JavaScript:

```html
<d2l-file-uploader id="my-uploader" ...></d2l-file-uploader>
<script>
document.getElementById('my-uploader')
	.addEventListener('file-added-to-upload', function(evt) {
		var files = evt.detail;
		console.log(files);
	});
</script>
```

From within another Polymer element you can use [Polymer's annotated event listeners](https://www.polymer-project.org/2.0/docs/devguide/events#annotated-listeners):

```html
<dom-module id="my-element">
	<template>
		<d2l-file-uploader on-file-added-to-upload="handleFileAdded"></d2l-file-uploader>
	</template>
</dom-module>
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
polymer test --skip-plugin sauce
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-file-uploader
[bower-image]: https://img.shields.io/bower/v/d2l-file-uploader.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/file-uploader
[ci-image]: https://travis-ci.org/BrightspaceUI/file-uploader.svg
