var View = require('avid-mcux-view'),
    viewProto = require('./impl');

module.exports = {
    config: {
        menuName: 'My Plugin',
        singleton: true,
        icon: "./resources/my_icon.png"        
    },
    factory: function () {
        return View.create(viewProto);
    },
    _proto: viewProto // for unit tests
};
