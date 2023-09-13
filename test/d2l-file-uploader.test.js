import '../d2l-file-uploader.js';
import { expect, fixture, html, oneEvent } from '@brightspace-ui/testing';
import sinon from 'sinon';

describe('d2l-file-uploader', () => {

	let elem;

	describe('basic', () => {

		beforeEach(async() => {
			elem = await fixture(html`<d2l-labs-file-uploader></d2l-labs-file-uploader>`);
		});

		it('should instantiate the element', () => {
			expect(elem.is).to.equal('d2l-labs-file-uploader');
		});

		it('should default "language" to "en"', () => {
			expect(elem.language).to.equal('en');
		});

		it('should accept focus', () => {
			expect(document.activeElement).to.not.equal(elem);
			elem.focus();
			expect(document.activeElement).to.equal(elem);
		});

	});

	describe('multiple', () => {

		describe('multiple-false', () => {

			beforeEach(async() => {
				elem = await fixture(html`<d2l-labs-file-uploader></d2l-labs-file-uploader>`);
			});

			it('should default "multiple" to false', () => {
				expect(elem.multiple).to.be.false;
				expect(elem.hasAttribute('multiple')).to.be.false;
				expect(elem.$$('input').multiple).to.be.false;
			});

			it('should reflect "multiple" property change to attribute and input', () => {
				elem.multiple = true;
				expect(elem.hasAttribute('multiple')).to.be.true;
				expect(elem.$$('input').multiple).to.be.true;
			});

			it('should reflect "multiple" attribute change to property and input', () => {
				elem.setAttribute('multiple', 'multiple');
				expect(elem.multiple).to.be.true;
				expect(elem.$$('input').multiple).to.be.true;
			});

		});

		describe('multiple-true', () => {

			beforeEach(async() => {
				elem = await fixture(html`<d2l-labs-file-uploader multiple></d2l-labs-file-uploader>`);
			});

			it('should default "multiple" to true', () => {
				expect(elem.multiple).to.be.true;
				expect(elem.hasAttribute('multiple')).to.be.true;
				expect(elem.$$('input').multiple).to.be.true;
			});

			it('should reflect "multiple" property change to attribute and input', () => {
				elem.multiple = false;
				expect(elem.hasAttribute('multiple')).to.be.false;
				expect(elem.$$('input').multiple).to.be.false;
			});

			it('should reflect "multiple" attribute change to property and input', () => {
				elem.removeAttribute('multiple');
				expect(elem.multiple).to.be.false;
				expect(elem.$$('input').multiple).to.be.false;
			});

		});

	});

	describe('label', () => {

		beforeEach(async() => {
			elem = await fixture(html`<d2l-labs-file-uploader label="file uploader label"></d2l-labs-file-uploader>`);
		});

		it('should have the "label" set', () => {
			expect(elem.label).to.equal('file uploader label');
			expect(elem.getAttribute('label')).to.equal('file uploader label');
		});

		it('should apply label to offscreen text', () => {
			expect(elem.$$('#d2l-file-uploader-offscreen').innerHTML)
				.to.equal('file uploader label');
		});

		it('should associate offscreen text with input', () => {
			expect(elem.$$('input').getAttribute('aria-describedby'))
				.to.equal('d2l-file-uploader-offscreen');
		});

	});

	describe('language', () => {

		beforeEach(async() => {
			elem = await fixture(html`<d2l-labs-file-uploader></d2l-labs-file-uploader>`, { lang: 'fr' });
			await new Promise(resolve => { requestAnimationFrame(resolve); });
		});

		it('should have language of "fr"', () => {
			expect(elem.language).to.equal('fr');
			expect(elem.$$('.d2l-file-uploader-drop-zone > div > span:first-child').innerHTML).to.equal('Glisser-déposer ou&nbsp;');
		});

	});

	describe('feedback', () => {

		describe('no feedback', () => {

			beforeEach(async() => {
				elem = await fixture(html`<d2l-labs-file-uploader></d2l-labs-file-uploader>`);
			});

			it('should default "feedback-type" to "warning"', () => {
				expect(elem.feedbackType).to.equal('warning');
				expect(elem.getAttribute('feedback-type')).to.equal('warning');
			});

			it('should default "feedback" to undefined', () => {
				expect(elem.feedback).to.be.undefined;
				expect(elem.hasAttribute('feedback')).to.be.false;
			});

			it('should reflect "feedback-type" property change to attribute', () => {
				elem.feedbackType = 'error';
				expect(elem.getAttribute('feedback-type')).to.be.equal('error');
			});

			it('should reflect "feedback" property change to attribute', () => {
				elem.feedback = 'oh no';
				expect(elem.getAttribute('feedback')).to.equal('oh no');
			});

			it('should reflect "feedback-type" attribute change to property', () => {
				elem.setAttribute('feedback-type', 'error');
				expect(elem.feedbackType).to.equal('error');
			});

			it('should reflect "feedback" attribute change to property', () => {
				elem.setAttribute('feedback', 'oh no');
				expect(elem.feedback).to.equal('oh no');
			});

			it('should fire "feedback-changed" event when "feedback" property changes', async() => {
				setTimeout(() => elem.feedback = 'oh no');
				const evt = await oneEvent(elem, 'feedback-changed');
				expect(evt.detail.value).to.equal('oh no');
			});

		});

		describe('has feedback', () => {

			beforeEach(async() => {
				elem = await fixture(html`<d2l-labs-file-uploader feedback="terrible error" feedback-type="error"></d2l-labs-file-uploader>`);
			});

			it('should default "feedback-type" to "error"', () => {
				expect(elem.feedbackType).to.be.equal('error');
				expect(elem.getAttribute('feedback-type')).to.equal('error');
			});

			it('should default "feedback" to "terrible error"', () => {
				expect(elem.feedback).to.equal('terrible error');
				expect(elem.getAttribute('feedback')).to.equal('terrible error');
			});

			it('should reflect "feedback-type" property change to attribute', () => {
				elem.feedbackType = 'warning';
				expect(elem.getAttribute('feedback-type')).to.equal('warning');
			});

			it('should reflect "feedback" property change to attribute', () => {
				elem.feedback = 'oh no';
				expect(elem.getAttribute('feedback')).to.equal('oh no');
			});

			it('should reflect "feedback" property removal to attribute', () => {
				elem.feedback = null;
				expect(elem.hasAttribute('feedback')).to.be.false;
			});

			it('should reflect "feedback-type" attribute change to property', () => {
				elem.setAttribute('feedback-type', 'warning');
				expect(elem.feedbackType).to.equal('warning');
			});

			it('should reflect "feedback-type" attribute removal to property', () => {
				elem.removeAttribute('feedback-type');
				expect(elem.feedbackType).to.be.null;
			});

			it('should reflect "feedback" attribute change to property', () => {
				elem.setAttribute('feedback', 'oh no');
				expect(elem.feedback).to.equal('oh no');
			});

			it('should reflect "feedback" attribute removal to property', () => {
				elem.removeAttribute('feedback');
				expect(elem.feedback).to.be.null;
			});

			it('should fire "feedback-changed" event when "feedback" property changes', async() => {
				setTimeout(() => elem.feedback = 'new feedback');
				const evt = await oneEvent(elem, 'feedback-changed');
				expect(evt.detail.value).to.equal('new feedback');
			});

			it('should fire "feedback-changed" event when "feedback" property is removed', async() => {
				setTimeout(() => elem.feedback = null);
				const evt = await oneEvent(elem, 'feedback-changed');
				expect(evt.detail.value).to.be.null;
			});

			it('should fire "feedback-changed" event when "feedback" attribute is removed', async() => {
				setTimeout(() => elem.removeAttribute('feedback'));
				const evt = await oneEvent(elem, 'feedback-changed');
				expect(evt.detail.value).to.be.null;
			});

		});

	});

	describe('file uploading', () => {

		beforeEach(async() => {
			elem = await fixture(html`<d2l-labs-file-uploader multiple></d2l-labs-file-uploader>`);
		});

		describe('drag end', () => {

			it('should remove items from item list on drag-end (DataTransferItemList)', () => {

				const items = [{}, {}];
				items.remove = function() {};
				const removeSpy = sinon.spy(items, 'remove');

				const event = new CustomEvent('dragend');
				event.dataTransfer = { items: items };
				document.dispatchEvent(event);

				expect(removeSpy.calledWith(0)).to.be.true;
				expect(removeSpy.calledWith(1)).to.be.true;

			});

			it('should remove items from file list on drag-end (DataTransfer)', () => {

				const event = new CustomEvent('dragend');
				event.dataTransfer = { clearData: function() {} };
				const removeSpy = sinon.spy(event.dataTransfer, 'clearData');
				document.dispatchEvent(event);

				expect(removeSpy.calledOnce).to.be.true;

			});

		});

		describe('drop', () => {

			describe('DataTransferItemList interface', () => {

				it('should fire "d2l-file-uploader-files-added" event when files are dropped', async() => {

					const file1 = {};
					const file2 = {};
					const item1 = { kind: 'file', getAsFile: function() { return file1; } };
					const item2 = { kind: 'file', getAsFile: function() { return file2; } };

					const event = new CustomEvent('drop');
					event.dataTransfer = { items: [item1, item2] };

					setTimeout(() => document.dispatchEvent(event));
					const evt = await oneEvent(elem, 'd2l-file-uploader-files-added');
					expect(evt.detail.files.length).to.equal(2);
					expect(evt.detail.files[0]).to.equal(file1);
					expect(evt.detail.files[1]).to.equal(file2);

				});

				it('should ignore files that do not have "kind" of "file"', async() => {

					const file1 = {};
					const item1 = { kind: 'file', getAsFile: function() { return file1; } };
					const item2 = { kind: 'imposter' };

					const event = new CustomEvent('drop');
					event.dataTransfer = { items: [item1, item2] };

					setTimeout(() => document.dispatchEvent(event));
					const evt = await oneEvent(elem, 'd2l-file-uploader-files-added');
					expect(evt.detail.files.length).to.equal(1);
					expect(evt.detail.files[0]).to.equal(file1);

				});

				it('should go into error state for single-file uploaders', () => {
					elem.multiple = false;
					const event = new CustomEvent('drop');
					event.dataTransfer = { items: [{}, {}] };
					document.dispatchEvent(event);
					expect(elem.feedback).to.equal('Choose one file to upload');
				});

				it('should not go into error state for multi-file uploaders', () => {
					const event = new CustomEvent('drop');
					event.dataTransfer = { items: [{}, {}] };
					document.dispatchEvent(event);
					expect(elem.feedback).to.be.null;
				});

			});

			describe('DataTransfer interface', () => {

				it('should fire "d2l-file-uploader-files-added" event when files are dropped', async() => {

					const file1 = {};
					const file2 = {};

					const event = new CustomEvent('drop');
					event.dataTransfer = { files: [file1, file2] };

					setTimeout(() => document.dispatchEvent(event));
					const evt = await oneEvent(elem, 'd2l-file-uploader-files-added');
					expect(evt.detail.files.length).to.equal(2);
					expect(evt.detail.files[0]).to.equal(file1);
					expect(evt.detail.files[1]).to.equal(file2);

				});

				it('should go into error state for single-file uploaders', () => {
					elem.multiple = false;
					const event = new CustomEvent('drop');
					event.dataTransfer = { files: [{}, {}] };
					document.dispatchEvent(event);
					expect(elem.feedback).to.equal('Choose one file to upload');
				});

				it('should not go into error state for multi-file uploaders', () => {
					const event = new CustomEvent('drop');
					event.dataTransfer = { files: [{}, {}] };
					document.dispatchEvent(event);
					expect(elem.feedback).to.be.null;
				});

			});

		});

		describe('input change', () => {

			it('should fire "d2l-file-uploader-files-added" event when files are uploaded via input', async() => {

				const file1 = {};
				const file2 = {};

				setTimeout(() => {
					elem._fileSelectHandler({ target: { files: [file1, file2] } });
				});
				const evt = await oneEvent(elem, 'd2l-file-uploader-files-added');
				expect(evt.detail.files.length).to.equal(2);
				expect(evt.detail.files[0]).to.equal(file1);
				expect(evt.detail.files[1]).to.equal(file2);

			});

		});

	});

});
