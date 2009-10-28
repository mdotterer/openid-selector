openidPrototype = {
    doAppend: function(id, html) {
        $(id).insert({bottom: html});
    },
    doShow: function(id) {
        //Demo suggests using "display:none" in CSS, which does not work with Prototypes show() method.
        $(id).setStyle({display: 'block'});
    },
    doEmpty: function(id) {
        $(id).update('');
    }
};

Object.extend(openid, openidPrototype);