function findObject(theObj, theDoc) {
    var p, i, foundObj;
    if (!theDoc) theDoc = document;
    if ((p = theObj.indexOf("?")) > 0 && parent.frames.length) {
        theDoc = parent.frames[theObj.substring(p + 1)].document;
        theObj = theObj.substring(0, p);
    }
    if (!(foundObj = theDoc[theObj]) && theDoc.all) foundObj = theDoc.all[theObj];
    for (i = 0; !foundObj && i < theDoc.forms.length; i++) foundObj = theDoc.forms[i][theObj];
    for (i = 0; !foundObj && theDoc.layers && i < theDoc.layers.length; i++) foundObj = findObject(theObj, theDoc.layers[i].document);
    if (!foundObj && document.getElementById) foundObj = document.getElementById(theObj);
    return foundObj;
}

function reloadValidate() {
    $('form').validate({
        onBlur: true,
        eachValidField: function () {
            $(this).closest('div').removeClass('error').addClass('success');
        },
        eachInvalidField: function () {
            $(this).closest('div').removeClass('success').addClass('error');
        }
    });
}
