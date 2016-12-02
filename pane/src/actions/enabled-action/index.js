/*
 * Copyright 2016 by Avid Technology, Inc.
 */

'use strict';

var binder = require('avid-mcux-actions-binder');

binder.bind({
    places: [ binder.place.CONTEXT_MENU, binder.place.VIEW_MENU ],
	filter: [ 'my-plugin', 'static-plugin-example.example-view', 'av-ext4-example' ],
    defaults: {
        index: 900
    },
    menuModelProvider: function (viewPublic) {
        var text = (viewPublic && viewPublic.name) ? viewPublic.name() + ' [Example Action]': undefined;
        return [
            binder.model.SEPARATOR,
            {
                text: text || 'Interplay Selection Only',
                actionId: 'com.avid.example.example-action-enabled',
            },
            /*{
               type: 'menu',
               text: 'Interplay Selection Only Submenu',
               items: [
                   {
                       text: 'Interplay Selection Only Child',
                       actionId: 'com.avid.example.example-action-enabled.subitem'
                   }
               ]
           },*/
            binder.model.SEPARATOR
        ];
    }
});

module.exports = {
    isEnabled: function (publicScope) { // basic implementation of pub ???
        console.log('publicScope is: ', publicScope);
        return true;
    },
    handler: function (publicScope) {
        console.log('Example Action was triggered');
        console.log('publicScope is: ', publicScope);
    }
};
