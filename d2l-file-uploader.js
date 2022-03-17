/**
`d2l-labs-file-uploader` is a web component for uploading files.

@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import '@brightspace-ui/core/components/colors/colors.js';
import '@brightspace-ui/core/components/offscreen/offscreen.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import './localize-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-labs-file-uploader">
	<template strip-whitespace="">
		<style>
			:host {
				box-sizing: border-box;
				display: block;
				max-width: 27rem;
			}
			:host([feedback-type="warning"]) {
				--d2l-file-uploader-feedback-color: var(--d2l-color-feedback-warning);
			}
			:host([feedback-type="error"]) {
				--d2l-file-uploader-feedback-color: var(--d2l-color-feedback-error);
			}

			.d2l-file-uploader-drop-zone {
				border: 2px dashed var(--d2l-color-ferrite);
				border-radius: 0.3rem;
				padding: 1.5rem;
				text-align: center;
			}

			:host([_file-drag-over]) .d2l-file-uploader-drop-zone {
				border-color: var(--d2l-color-celestine);
				background-color: var(--d2l-color-celestine-plus-2);
			}

			.d2l-file-uploader-icon {
				padding-bottom: 0.5rem;
			}

			:host([_file-drag-over]) svg path {
				fill: var(--d2l-color-celestine);
			}

			.d2l-file-uploader-input {
				display: inline-block;
				height: 100%;
				left: 0;
				opacity: 0;
				position: absolute;
				top: 0;
				width: 100%;
			}

			.d2l-file-uploader-browse-label {
				background: none;
				border: none;
				color: var(--d2l-color-celestine);
				overflow: hidden;
				padding-right: 0;
				position: relative;
			}
			.d2l-file-uploader-browse-label:hover,
			.d2l-file-uploader-browse-label-focus {
				color: var(--d2l-color-celestine-minus-1);
				text-decoration: underline;
			}

			.d2l-file-uploader-browse-files {
				display: none;
			}

			.d2l-file-uploader-feedback {
				-webkit-animation-name: feedbackIn;
				animation-name: feedbackIn;
				-webkit-animation-duration: 0.7s;
				animation-duration: 0.7s;
				border: 1px solid var(--d2l-color-mica);
				border-left-width: 0.5rem;
				border-left-color: var(--d2l-file-uploader-feedback-color);
				border-radius: 0.3rem;
				display: none;
				margin-bottom: 1.5rem;
				padding: 0.7rem 1rem 0.7rem;
			}
			:host(:dir(rtl)) > .d2l-file-uploader-feedback {
				border-left-width: 1px;
				border-left-color: var(--d2l-color-mica);
				border-right-width: 0.5rem;
				border-right-color: var(--d2l-file-uploader-feedback-color);
			}
			:host([feedback]) > .d2l-file-uploader-feedback {
				display: block;
			}

			@keyframes feedbackIn {
				0% {
					max-height: 0.1rem;
					opacity: 0;
				}
				20% {
					opacity: 0;
				}
				80% {
					max-height: 3rem;
				}
				100% {
					opacity: 1;
				}
			}

			@media (max-width: 992px) {

				.d2l-file-uploader-input-container {
					display: block;
					margin-top: 0.8rem;
				}

				.d2l-file-uploader-browse-files {
					display: inline;
				}

				.d2l-file-uploader-browse {
					display: none;
				}

				.d2l-file-uploader-browse-label {
					background-color: var(--d2l-color-celestine);
					border: 1px solid;
					border-radius: 0.3rem;
					border-color: var(--d2l-color-celestine-minus-1);
					color: #ffffff;
					display: inline-block;
					font-size: 0.7rem;
					padding: 0.35rem 1.5rem;
				}

				.d2l-file-uploader-browse-label:hover,
				.d2l-file-uploader-browse-label-focus {
					background-color: var(--d2l-color-celestine-minus-1);
					color: #ffffff;
					text-decoration: none;
				}
				.d2l-file-uploader-browse-label-focus {
					box-shadow: 0 0 0 4px rgba(0, 111, 191, 0.3);
				}

			}
		</style>
		<div class="d2l-file-uploader-feedback" role="alert">[[feedback]]</div>
		<div class="d2l-file-uploader-drop-zone">
			<svg width="78" height="78" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 78" class="d2l-file-uploader-icon">
				<path fill="#565a5c" d="M54.76 36A3.992 3.992 0 0 1 51 38.64h-9v36a3 3 0 0 1-6 0v-36h-9a4 4 0 0 1-2.56-7.07l12-10a3.988 3.988 0 0 1 5.12 0l12 10a4.007 4.007 0 0 1 1.2 4.43zM46 53.55a1.333 1.333 0 0 0 .49.09M46.5 50.64a1.386 1.386 0 0 0-.5.09"></path>
				<path fill="#565a5c" d="M78 36.14a17.52 17.52 0 0 1-17.5 17.5c-.17 0-1.33 0-1.5-.02l-12.51.02a1.333 1.333 0 0 1-.49-.09 1.494 1.494 0 0 1 0-2.82 1.386 1.386 0 0 1 .5-.09h14a14.5 14.5 0 0 0 1.58-28.92c-.52-.05-1.05-.08-1.58-.08h-.35a1.49 1.49 0 0 1-1-.4 2.258 2.258 0 0 1-.542-1.075c-.138-.462-.306-.916-.478-1.365a20.484 20.484 0 0 0-38.26 0q-.21.54-.39 1.08a3.353 3.353 0 0 1-.53 1.26 1.542 1.542 0 0 1-1.12.5h-.33c-.53 0-1.06.03-1.58.08a14.5 14.5 0 0 0 1.58 28.92h13.99a1.5 1.5 0 0 1 .01 3s-13.5 0-13.5-.02a4.176 4.176 0 0 1-.5.02 17.5 17.5 0 0 1-.77-34.98 23.49 23.49 0 0 1 44.54 0A17.52 17.52 0 0 1 78 36.14z"></path>
			</svg>
			<div>
				<span>[[localize('file_upload_text')]]&nbsp;</span>
				<span class="d2l-file-uploader-input-container">
					<d2l-offscreen id="d2l-file-uploader-offscreen">[[label]]</d2l-offscreen>
					<label class="d2l-file-uploader-browse-label">
						<input class="d2l-file-uploader-input d2l-focusable" type="file" aria-describedby="d2l-file-uploader-offscreen" multiple="[[multiple]]" on-change="_fileSelectHandler" on-focus="__onInputFocus" on-blur="__onInputBlur">
						<span class="d2l-file-uploader-browse">[[localize('browse')]]</span>
						<span class="d2l-file-uploader-browse-files">[[localize('browse_files')]]</span>
					</label>
				</span>
			</div>
		</div>
	</template>



</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-labs-file-uploader',

	behaviors: [
		D2L.PolymerBehaviors.FileUploader.LocalizeBehavior,
		D2L.PolymerBehaviors.FocusableBehavior
	],

	properties: {
		/**
		 * Fired when files have been added to the uploaded.
		 *
		 * @event d2l-file-uploader-files-added
		 * @param {Array<File>} files Array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects.
		 */

		/**
		 * When set, displays a feedback message to the user. Used in conjunction with `feedback-type`.
		 */
		feedback: {
			type: String,
			notify: true,
			reflectToAttribute: true
		},
		/**
		 * The type of feedback to display. One of: "error", "warning"
		 */
		feedbackType: {
			type: String,
			reflectToAttribute: true,
			value: 'warning'
		},
		/**
		 * A descriptive label to associate with the file input. Should
		 * be unique enough to distinguish the input from others on the page.
		 */
		label: {
			type: String
		},
		/**
		 * Whether multiple files can be uploaded.
		 */
		multiple: {
			type: Boolean,
			value: false,
			reflectToAttribute: true
		},
		/**
		 * Collection of uploaded files, as [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects.
		 */
		_files: {
			type: Object,
			observer: '_fileChangeHandler'
		},
		/**
		 * Whether a file is currently being dragged over the document.
		 */
		_fileDragOver: {
			type: Boolean,
			value: false,
			reflectToAttribute: true
		}
	},

	attached: function() {
		this.listen(document, 'dragover', '__onDragOver');
		this.listen(document, 'dragleave', '__onDragLeave');
		this.listen(document, 'dragend', '__onDragEnd');
		this.listen(document, 'drop', '__onDrop');
	},

	detached: function() {
		this.unlisten(document, 'dragover', '__onDragOver');
		this.unlisten(document, 'dragleave', '__onDragLeave');
		this.unlisten(document, 'dragend', '__onDragEnd');
		this.unlisten(document, 'drop', '__onDrop');
	},

	_fileSelectHandler: function(event) {
		var files = [];
		for (var i = 0; i < event.target.files.length; i++) {
			files[i] = event.target.files[i];
		}
		this._files = files;
		event.target.value = '';
	},

	__onDragOver: function(event) {
		event.preventDefault();
		this._fileDragOver = true;
	},

	__onDragLeave: function(event) {
		event.preventDefault();
		this._fileDragOver = false;
	},

	__onDragEnd: function(event) {
		this._fileDragOver = false;
		var dataTransfer = event.dataTransfer;
		if (dataTransfer.items) {
			// Use DataTransferItemList interface to remove the drag data
			for (var i = 0; i < dataTransfer.items.length; i++) {
				dataTransfer.items.remove(i);
			}
		} else {
			// Use DataTransfer interface to remove the drag data
			event.dataTransfer.clearData();
		}
	},

	__onDrop: function(event) {
		event.preventDefault();
		this._fileDragOver = false;
		var files = [];
		var dataTransfer = event.dataTransfer;
		if (dataTransfer.items) {
			if (!this.multiple && dataTransfer.items.length > 1) {
				this.feedback = this.localize('choose_one_file_to_upload');
				this.feedbackType = 'warning';
				return;
			}
			this.feedback = null;

			// Use DataTransferItemList interface to access the file(s)
			var count = 0;
			for (var i = 0; i < dataTransfer.items.length; i++) {
				if (dataTransfer.items[ i ].kind === 'file') {
					files[count] = dataTransfer.items[i].getAsFile();
					count++;
				}
			}
		} else {
			if (!this.multiple && dataTransfer.files.length > 1) {
				this.feedback = this.localize('choose_one_file_to_upload');
				this.feedbackType = 'warning';
				return;
			}
			this.feedback = null;

			// Use DataTransfer interface to access the file(s)
			for (var j = 0; j < dataTransfer.files.length; j++) {
				files[j] = dataTransfer.files[j];
			}
		}

		this._files = files;
	},

	__onInputFocus: function() {
		this.$$('.d2l-file-uploader-browse-label').classList.add('d2l-file-uploader-browse-label-focus');
	},

	__onInputBlur: function() {
		this.$$('.d2l-file-uploader-browse-label').classList.remove('d2l-file-uploader-browse-label-focus');
	},

	_fileChangeHandler: function(files) {
		var evt = new CustomEvent(
			'd2l-file-uploader-files-added',
			{ detail: { files: files } }
		);
		this.dispatchEvent(evt);
	}
});
