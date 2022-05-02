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
					'en': {
						'file_upload_text': 'Drag and drop or',
						'browse': 'browse',
						'browse_files': 'Browse Files',
						'choose_one_file_to_upload': 'Choose one file to upload'
					},
					'ar': {
						'file_upload_text': 'السحب والإفلات أو',
						'browse': 'استعراض',
						'browse_files': 'استعراض الملفات',
						'choose_one_file_to_upload': 'اختر ملفًا لتحميله'
					},
					'da': {
						'file_upload_text': 'Træk og slip eller',
						'browse': 'gennemse',
						'browse_files': 'Gennemse filer',
						'choose_one_file_to_upload': 'Vælg en fil til upload'
					},
					'de': {
						'file_upload_text': 'Mit Drag-and-Drop verschieben oder',
						'browse': 'durchsuchen',
						'browse_files': 'Dateien durchsuchen',
						'choose_one_file_to_upload': 'Wählen Sie eine Datei zum Hochladen aus'
					},
					'es': {
						'file_upload_text': 'Arrastrar y soltar o',
						'browse': 'examinar',
						'browse_files': 'Examinar archivos',
						'choose_one_file_to_upload': 'Elija un archivo para cargar'
					},
					'fi': {
						'file_upload_text': 'Vedä ja pudota tai',
						'browse': 'selaa',
						'browse_files': 'Selaa tiedostoja',
						'choose_one_file_to_upload': 'Valitse yksi ladattava tiedosto'
					},
					'fr': {
						'file_upload_text': 'Glisser-déposer ou',
						'browse': 'parcourir',
						'browse_files': 'Parcourir les fichiers',
						'choose_one_file_to_upload': 'Choisir un fichier à téléverser'
					},
					'hi': {
						'file_upload_text': 'ड्रैग और ड्रॉप करें या',
						'browse': 'ब्राउज़ करें',
						'browse_files': 'फ़ाइलें ब्राउज़ करें',
						'choose_one_file_to_upload': 'कोई फ़ाइल अपलोड करने के लिए चुनें'
					},
					'ja': {
						'file_upload_text': 'ドラッグ＆ドロップまたは',
						'browse': '参照',
						'browse_files': 'ファイルの参照',
						'choose_one_file_to_upload': 'アップロードするファイルを 1 つ選択'
					},
					'ko': {
						'file_upload_text': '끌어서 놓기 또는',
						'browse': '찾아보기',
						'browse_files': '파일 찾아보기',
						'choose_one_file_to_upload': '업로드할 파일 하나 선택'
					},
					'nl': {
						'file_upload_text': 'Sleep en zet neer of',
						'browse': 'blader',
						'browse_files': 'Door bestanden bladeren',
						'choose_one_file_to_upload': 'Kies een bestand dat u wilt uploaden'
					},
					'pt': {
						'file_upload_text': 'Arrastar e soltar ou',
						'browse': 'procurar',
						'browse_files': 'Procurar arquivos',
						'choose_one_file_to_upload': 'Escolha um arquivo para carregar'
					},
					'sv': {
						'file_upload_text': 'Dra och släpp eller',
						'browse': 'bläddra',
						'browse_files': 'Bläddra bland filer',
						'choose_one_file_to_upload': 'Välj en fil att ladda upp'
					},
					'tr': {
						'file_upload_text': 'Sürükleyip bırakın ya da',
						'browse': 'göz atın',
						'browse_files': 'Dosyalara Göz At',
						'choose_one_file_to_upload': 'Yüklemek için bir dosya seçin'
					},
					'zh': {
						'file_upload_text': '拖放或者',
						'browse': '浏览',
						'browse_files': '浏览文件',
						'choose_one_file_to_upload': '选择一个要上传的文件'
					},
					'zh-cn': {
						'file_upload_text': '拖放或者',
						'browse': '浏览',
						'browse_files': '浏览文件',
						'choose_one_file_to_upload': '选择一个要上传的文件'
					},
					'zh-tw': {
						'file_upload_text': '拖放或',
						'browse': '瀏覽',
						'browse_files': '瀏覽檔案',
						'choose_one_file_to_upload': '選擇要上傳的檔案'
					}
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
