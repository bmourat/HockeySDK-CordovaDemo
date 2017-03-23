cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-hockeyapp.HockeyApp",
        "file": "plugins/cordova-plugin-hockeyapp/www/hockeyapp.js",
        "pluginId": "cordova-plugin-hockeyapp",
        "clobbers": [
            "hockeyapp",
            "hockeyApp"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-console": "1.0.6",
    "cordova-plugin-hockeyapp": "2.2.3"
};
// BOTTOM OF METADATA
});