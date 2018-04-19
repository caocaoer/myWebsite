module.exports = {
    verbose: true,
    testMatch: ['**/test/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
    testPathIgnorePatterns: ['setup.js', '/bin/', '/build/', '/dist/', '/lib/', '/node_modules/'],
    setupTestFrameworkScriptFile: './jest.setup.js',
    // mock assets
    moduleNameMapper: {
        '\\.(css|scss|less)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy'
    }
};