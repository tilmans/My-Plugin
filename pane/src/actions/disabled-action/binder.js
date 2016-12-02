/*
 * Copyright 2016 by Avid Technology, Inc.
 */

'use strict';

var binder = require('avid-mcux-actions-binder');

binder.bind({
    places: [ binder.place.CONTEXT_MENU, binder.place.VIEW_MENU ],
    filter: 'static-plugin-example.example-view',
    defaults: {
        index: 900
    },
    menuModelProvider: function () {
        return [
            binder.model.SEPARATOR,
            {
                text: 'Example disabled Action',
                actionId: 'example-action-disabled'
            },
            binder.model.SEPARATOR
        ];
    }
});
