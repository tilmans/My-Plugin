/*
 * Copyright 2016 by Avid Technology, Inc.
 */

'use strict';

require('./binder');

module.exports = {
    isEnabled: function (publicScope) {
        var co = publicScope.getCommonObject && publicScope.getCommonObject();
        console.log('Disabled if is commonObject exists', co);
        return !co;
    },
    handler: function (publicScope) {
        console.log('Action triggered from menu', publicScope);
    }
};
