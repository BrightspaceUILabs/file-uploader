# file-uploader
A polymer component for file uploader with drag and drop capability. This component does not perform the actual uploading work, it would just provide you an array of the selected file(s) in JavaScript File interface (https://developer.mozilla.org/en/docs/Web/API/File). 

## Installation
'd2l-file-uploader' can be installed from Bower:

```shell
bower install d2l-file-uploader
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-file-uploader.html`:

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../d2l-file-uploader/d2l-file-uploader.html">
</head>
```

To use it:

```shell
<d2l-file-uploader></d2l-file-uploader>
```

Attributes:
* multiple - to specify whether it allows selecting more than one file

```shell
<d2l-file-uploader multiple></d2l-file-uploader>
```

* language - to specify what language the file uploader is in. Currently it supports: en, ar-SA, de-DE, es-MX, fr-CA, ja-JP, ko-KR, nb-NO, nl-NL, pt-BR, sv-SE, tr-TR, zh-CN, zh-TW. If the language attribute is not present, it will default to english. 

```shell
<d2l-file-uploader language='fr-CA'></d2l-file-uploader>
```

The selected file(s) info is delivered as part of a custom event "file-added-to-upload", so a event listener is required to setup to listen to that event:

```shell
document.querySelector('d2l-file-uploader').addEventListener('file-added-to-upload', this._fileAdded);
```

or 

```shell
// Adding event listener declaratively does not work well when the component is used in React
<d2l-file-uploader on-file-added-to-upload="_fileAdded"></d2l-file-uploader>
```

The JavaScript File inerface of the selected file(s) will be in the "detail" array of the "file-added-to-upload" event:

```shell
_fileAdded( event ) {
	console.log( event.detail[0] );
} 
```

## Tests

For lint stuff, run:

```shell
npm test
```


For unit tests, run:

```shell
wct
```
