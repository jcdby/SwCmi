var path = require('path');
var rootDir = require('../util/get-root-dir')();
var Server = require('karma').Server;

module.exports = function () {
    return function () {
        var configFilePath = path.join(rootDir, 'test','karma.conf.js');
        new Server({
            configFile: configFilePath
        }).start();
    }
};
