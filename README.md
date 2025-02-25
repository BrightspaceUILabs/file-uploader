# @brightspace-ui-labs/file-uploader

[![NPM version](https://img.shields.io/npm/v/@brightspace-ui-labs/file-uploader.svg)](https://www.npmjs.org/package/@brightspace-ui-labs/file-uploader)
[![NPM downloads](https://img.shields.io/npm/dt/@brightspace-ui-labs/file-uploader.svg)](https://www.npmjs.com/package/@brightspace-ui-labs/file-uploader)

> Note: this is a ["labs" component](https://github.com/BrightspaceUI/guide/wiki/Component-Tiers). While functional, these tasks are prerequisites to promotion to BrightspaceUI "official" status:
>
> - [ ] [Design organization buy-in](https://github.com/BrightspaceUI/guide/wiki/Before-you-build#working-with-design)
> - [ ] [design.d2l entry](http://design.d2l/)
> - [ ] [Architectural sign-off](https://github.com/BrightspaceUI/guide/wiki/Before-you-build#web-component-architecture)
> - [x] [Continuous integration](https://github.com/BrightspaceUI/guide/wiki/Testing#testing-continuously-with-travis-ci)
> - [x] [Cross-browser testing](https://github.com/BrightspaceUI/guide/wiki/Testing#cross-browser-testing-with-sauce-labs)
> - [x] [Unit tests](https://daylight.d2l.dev/developing/testing/tools/) (if applicable)
> - [ ] [Accessibility tests](https://github.com/BrightspaceUI/guide/wiki/Testing#automated-accessibility-testing-with-axe)
> - [ ] [Visual diff tests](https://github.com/BrightspaceUI/visual-diff)
> - [ ] [Localization](https://github.com/BrightspaceUI/guide/wiki/Localization) with Serge (if applicable)
> - [x] Demo page
> - [x] README documentation

Lit component for uploading files with drag and drop capability. This component does not perform the actual uploading work, it simply provides visual cues and exposes an event when files have been uploaded.

![screenshot of file uploader](/screenshots/file-uploader.gif?raw=true)

## Installation

To install from NPM:

```shell
npm install @brightspace-ui-labs/file-uploader
```

## Usage

```html
<head>
  <script type="module" src="@brightspace-ui-labs/file-uploader/d2l-file-uploader.js"></script>
</head>
```

### Basic Usage with Accessible Label

It's important to always provide an accessible label which describes the purpose of the uploader using the `label` attribute. The label will be hidden visually but associated with the upload input for those using assistive technologies such as a screen reader.

```html
<d2l-labs-file-uploader label="profile picture"></d2l-labs-file-uploader>
```

### Multi-file Uploads

To allow for multiple files to be uploaded, add the `multiple` attribute:

```html
<d2l-labs-file-uploader multiple ...></d2l-labs-file-uploader>
```

### Localization

The file uploader will automatically render using the language found on the HTML element -- i.e. `<html lang="fr">`. If the language attribute is not present or isn't supported, the uploader will render in English.

![screenshot of file uploader localized](/screenshots/localized.png?raw=true)

### Feedback Messages

If you encounter a scenario where you'd like to display feedback about the uploaded file(s) -- like a warning or an error -- use the `feedback` and `feedback-type` attributes.

The `feedback-type` defaults to "warning":
```html
<d2l-labs-file-uploader
	feedback="Sorry, we cannot upload files larger than 1GB.">
</d2l-labs-file-uploader>
```

![screenshot of file uploader in warning state](/screenshots/warning.png?raw=true)

But `feedback-type` can also be set to "error":

```html
<d2l-labs-file-uploader
	feedback="An error occurred occurred processing the upload."
	feedback-type="error"></d2l-labs-file-uploader>
```

![screenshot of file uploader in error state](/screenshots/error.png?raw=true)

#### Feedback Changed Event

To listen for when feedback changes within the uploader, register for the `feedback-changed` event.

Vanilla JavaScript:

```html
<d2l-labs-file-uploader id="my-uploader" ...></d2l-labs-file-uploader>
<script>
document.getElementById('my-uploader')
	.addEventListener('feedback-changed', function(evt) {
		var feedbackMessage = evt.detail.value;
		console.log(feedbackMessage);
	});
</script>
```

### Handling Uploaded Files

When the user uploads one or more files, a `d2l-file-uploader-files-added` event is fired. To listen for this event, wire up an event listener to the `<d2l-labs-file-uploader>` element. The listener will be passed an event with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects from the [File API](https://developer.mozilla.org/en/docs/Web/API/File).

Vanilla JavaScript:

```html
<d2l-labs-file-uploader id="my-uploader" ...></d2l-labs-file-uploader>
<script>
document.getElementById('my-uploader')
	.addEventListener('d2l-file-uploader-files-added', function(evt) {
		var files = evt.detail.files;
		console.log(files);
	});
</script>
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

### Linting

```shell
# eslint
npm run lint
```

### Testing

```shell
# lint & run headless unit tests
npm test

# unit tests only
npm run test:headless
```

### Running the demos

To start a [@web/dev-server](https://modern-web.dev/docs/dev-server/overview/) that hosts the demo page and tests:

```shell
npm start
```

### Versioning and Releasing

This repo is configured to use `semantic-release`. Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`.

To learn how to create major releases and release from maintenance branches, refer to the [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) documentation.
