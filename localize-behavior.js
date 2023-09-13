import '@brightspace-ui/localize-behavior/d2l-localize-behavior.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.FileUploader = window.D2L.PolymerBehaviors.FileUploader || {};

/** @polymerBehavior D2L.PolymerBehaviors.FileUploader.LocalizeBehavior */
D2L.PolymerBehaviors.FileUploader.LocalizeBehaviorImpl = {
	localizeConfig: {
		importFunc: async lang => (await import(`./lang/${lang}.js`)).default
	}
};

/** @polymerBehavior D2L.PolymerBehaviors.FileUploader.LocalizeBehavior */
D2L.PolymerBehaviors.FileUploader.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.FileUploader.LocalizeBehaviorImpl
];
