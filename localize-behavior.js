import ar from './lang/ar.js';
import cy from './lang/cy.js';
import da from './lang/da.js';
import de from './lang/de.js';
import en from './lang/en.js';
import eses from './lang/es-es.js';
import es from './lang/es.js';
import frfr from './lang/fr-fr.js';
import fr from './lang/fr.js';
import hi from './lang/hi.js';
import ja from './lang/ja.js';
import ko from './lang/ko.js';
import nl from './lang/nl.js';
import pt from './lang/pt.js';
import sv from './lang/sv.js';
import tr from './lang/tr.js';
import zhcn from './lang/zh-cn.js';
import zhtw from './lang/zh-tw.js';
import 'd2l-localize-behavior/d2l-localize-behavior.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.FileUploader = window.D2L.PolymerBehaviors.FileUploader || {};

/** @polymerBehavior D2L.PolymerBehaviors.FileUploader.LocalizeBehavior */
D2L.PolymerBehaviors.FileUploader.LocalizeBehaviorImpl = {
	properties: {
		resources: {
			value: function() {
				return {
					'ar': ar,
					'cy': cy,
					'da': da,
					'de': de,
					'en': en,
					'es': es,
					'es-es': eses,
					'fr': fr,
					'fr-fr': frfr,
					'hi': hi,
					'ja': ja,
					'ko': ko,
					'nl': nl,
					'pt': pt,
					'sv': sv,
					'tr': tr,
					'zh-cn': zhcn,
					'zh-tw': zhtw
				};
			}
		}
	}
};

/** @polymerBehavior D2L.PolymerBehaviors.FileUploader.LocalizeBehavior */
D2L.PolymerBehaviors.FileUploader.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.FileUploader.LocalizeBehaviorImpl
];
