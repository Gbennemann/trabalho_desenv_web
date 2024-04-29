const filenames = {

	/**
	 * Blog REST.
	 */
	'blog/api/v1/rest': [
		'post-resource',
		'reply-resource',
	],

	/**
	 * Blog RPC.
	 */
	// 'blog/api/v1/rpc': [
	// ],

};

function toFilesList(imports, folder) {
	return [...imports, ...filenames[folder].map(toRelativePaths(folder))];
}

function toRelativePaths(folder) {
	return filename => {
		return `../src/module/${folder}/${filename}`;
	};
}

module.exports = Object.keys(filenames).reduce(toFilesList, []);
