/*
 * Copyright 2016 by Avid Technology, Inc.
 */

'use strict';

module.exports = {
    isEnabled: function (publicScope) {
        console.log('Public scope is: ', publicScope);
        return true;
    },
    handler: function (publicScope) {
        console.log('Action was triggered from subitem');
    }
};
