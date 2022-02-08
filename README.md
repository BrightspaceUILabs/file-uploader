# file-uploader

[![NPM version](https://img.shields.io/npm/v/@brightspace-ui-labs/file-uploader.svg)](https://www.npmjs.org/package/@brightspace-ui-labs/file-uploader)
[![NPM downloads](https://img.shields.io/npm/dt/@brightspace-ui-labs/file-uploader.svg)](https://www.npmjs.com/package/@brightspace-ui-labs/file-uploader)

> Note: this is a ["labs" component](https://github.com/BrightspaceUI/guide/wiki/Component-Tiers). While functional, these tasks are prerequisites to promotion to BrightspaceUI "official" status:
>
> - [ ] [Design organization buy-in](https://github.com/BrightspaceUI/guide/wiki/Before-you-build#working-with-design)
> - [ ] [design.d2l entry](http://design.d2l/)
> - [ ] [Architectural sign-off](https://github.com/BrightspaceUI/guide/wiki/Before-you-build#web-component-architecture)
> - [x] [Continuous integration](https://github.com/BrightspaceUI/guide/wiki/Testing#testing-continuously-with-travis-ci)
> - [x] [Cross-browser testing](https://github.com/BrightspaceUI/guide/wiki/Testing#cross-browser-testing-with-sauce-labs)
> - [x] [Unit tests](https://github.com/BrightspaceUI/guide/wiki/Testing#testing-with-polymer-test) (if applicable)
> - [ ] [Accessibility tests](https://github.com/BrightspaceUI/guide/wiki/Testing#automated-accessibility-testing-with-axe)
> - [ ] [Visual diff tests](https://github.com/BrightspaceUI/visual-diff)
> - [ ] [Localization](https://github.com/BrightspaceUI/guide/wiki/Localization) with Serge (if applicable)
> - [x] Demo page
> - [x] README documentation

[Polymer](https://www.polymer-project.org) component for uploading files with drag and drop capability. This component does not perform the actual uploading work, it simply provides visual cues and exposes an event when files have been uploaded.

![screenshot of file uploader](/screenshots/file-uploader.gif?raw=true)

For further information on this and other components, refer to [The Brightspace UI Guide](https://github.com/BrightspaceUI/guide/wiki).

## Installation

To install from NPM:


```shell
npm install @brightspace-ui-labs/file-uploader
```

## Usage

```html
<head>
  <script type="module" src="node_modules/@brightspace-ui-labs/file-uploader/d2l-file-uploader.js"></script>
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

From within another Polymer element you can use [Polymer's annotated event listeners](https://www.polymer-project.org/2.0/docs/devguide/events#annotated-listeners):

```html
<dom-module id="my-element">
	<template>
		<d2l-labs-file-uploader on-feedback-changed="handleFeedback"></d2l-labs-file-uploader>
	</template>
</dom-module>
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

From within another Polymer element you can use [Polymer's annotated event listeners](https://www.polymer-project.org/2.0/docs/devguide/events#annotated-listeners):

```html
<dom-module id="my-element">
	<template>
		<d2l-labs-file-uploader on-d2l-file-uploader-files-added="handleFileAdded"></d2l-labs-file-uploader>
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

## Versioning & Releasing

> TL;DR: Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`. Read on for more details...

The [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) is called from the `release.yml` GitHub Action workflow to handle version changes and releasing.

### Version Changes

All version changes should obey [semantic versioning](https://semver.org/) rules:
1. **MAJOR** version when you make incompatible API changes,
2. **MINOR** version when you add functionality in a backwards compatible manner, and
3. **PATCH** version when you make backwards compatible bug fixes.

The next version number will be determined from the commit messages since the previous release. Our semantic-release configuration uses the [Angular convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) when analyzing commits:
* Commits which are prefixed with `fix:` or `perf:` will trigger a `patch` release. Example: `fix: validate input before using`
* Commits which are prefixed with `feat:` will trigger a `minor` release. Example: `feat: add toggle() method`
* To trigger a MAJOR release, include `BREAKING CHANGE:` with a space or two newlines in the footer of the commit message
* Other suggested prefixes which will **NOT** trigger a release: `build:`, `ci:`, `docs:`, `style:`, `refactor:` and `test:`. Example: `docs: adding README for new component`

To revert a change, add the `revert:` prefix to the original commit message. This will cause the reverted change to be omitted from the release notes. Example: `revert: fix: validate input before using`.

### Releases

When a release is triggered, it will:
* Update the version in `package.json`
* Tag the commit
* Create a GitHub release (including release notes)
* Deploy a new package to NPM

### Releasing from Maintenance Branches

Occasionally you'll want to backport a feature or bug fix to an older release. `semantic-release` refers to these as [maintenance branches](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#maintenance-branches).

Maintenance branch names should be of the form: `+([0-9])?(.{+([0-9]),x}).x`.

Regular expressions are complicated, but this essentially means branch names should look like:
* `1.15.x` for patch releases on top of the `1.15` release (after version `1.16` exists)
* `2.x` for feature releases on top of the `2` release (after version `3` exists)
