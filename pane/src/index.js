module.exports = {
    'avid': {
        views: {
            'my-plugin': require('./views/my-plugin/index.js')
        },
        actions: {
            'com.avid.example.example-action-enabled.subitem': require('./actions/enabled-action/subitem'),
            'com.avid.example.example-action-enabled': require('./actions/enabled-action/index'),
            'example-action-disabled': require('./actions/disabled-action/index')
        }
    }
};