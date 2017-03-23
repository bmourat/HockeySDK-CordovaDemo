cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-hockeyapp/www/hockeyapp.js",
        "id": "cordova-plugin-hockeyapp.HockeyApp",
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
    "cordova-plugin-console": "1.0.6",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-hockeyapp": "2.2.3"
}
// BOTTOM OF METADATA
});