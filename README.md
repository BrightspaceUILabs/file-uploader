# file-uploader
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/file-uploader)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

[Polymer](https://www.polymer-project.org) component for uploading files with drag and drop capability. This component does not perform the actual uploading work, it simply provides visual cues and exposes an event when files have been uploaded.

![screenshot of file uploader](/screenshots/file-uploader.gif?raw=true)

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com).

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

### Localization

The file uploader will automatically render using the language found on the HTML element -- i.e. `<html lang="fr">`. If the language attribute is not present or isn't supported, the uploader will render in English.

![screenshot of file uploader localized](/screenshots/localized.png?raw=true)

### Feedback Messages

If you encounter a scenario where you'd like to display feedback about the uploaded file(s) -- like a warning or an error -- use the `feedback` and `feedback-type` attributes.

The `feedback-type` defaults to "warning":
```html
<d2l-file-uploader
	feedback="Sorry, we cannot upload files larger than 1GB.">
</d2l-file-uploader>
```

![screenshot of file uploader in warning state](/screenshots/warning.png?raw=true)

But `feedback-type` can also be set to "error":

```html
<d2l-file-uploader
	feedback="An error occurred occurred processing the upload."
	feedback-type="error"></d2l-file-uploader>
```

![screenshot of file uploader in error state](/screenshots/error.png?raw=true)

#### Feedback Changed Event

To listen for when feedback changes within the uploader, register for the `feedback-changed` event.

Vanilla JavaScript:

```html
<d2l-file-uploader id="my-uploader" ...></d2l-file-uploader>
<script>
document.getElementById('my-uploader')
	.addEventListener('feedback-changed', function(evt) {
		var feedbackMessage = evt.detail.value;
		console.log(feedbackMessage);
	});
</script>
```

From within another Polymer element you can use [Polymer's annotated event listeners](https://www.polymer-project.org/2.0/docs/devguide/events#annotated-listeners):

```html
<dom-module id="my-element">
	<template>
		<d2l-file-uploader on-feedback-changed="handleFeedback"></d2l-file-uploader>
	</template>
</dom-module>
```

### Handling Uploaded Files

When the user uploads one or more files, a `d2l-file-uploader-files-added` event is fired. To listen for this event, wire up an event listener to the `<d2l-file-uploader>` element. The listener will be passed an event with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects from the [File API](https://developer.mozilla.org/en/docs/Web/API/File).

Vanilla JavaScript:

```html
<d2l-file-uploader id="my-uploader" ...></d2l-file-uploader>
<script>
document.getElementById('my-uploader')
	.addEventListener('d2l-file-uploader-files-added', function(evt) {
		var files = evt.detail.files;
		console.log(files);
	});
</script>
```

From within another Polymer element you can use [Polymer's annotated event listeners](https://www.polymer-project.org/2.0/docs/devguide/events#annotated-listeners):

```html
<dom-module id="my-element">
	<template>
		<d2l-file-uploader on-d2l-file-uploader-files-added="handleFileAdded"></d2l-file-uploader>
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
[bower-image]: https://badge.fury.io/bo/d2l-file-uploader.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/file-uploader
[ci-image]: https://travis-ci.org/BrightspaceUI/file-uploader.svg
