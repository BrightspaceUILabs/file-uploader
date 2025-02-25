import { addExtensions, litConfig, setDirectoryConfigs, testingConfig } from 'eslint-config-brightspace';

export default setDirectoryConfigs(
	addExtensions(litConfig, ['.js', '.html']),
	{
		'test':testingConfig
	}
);
