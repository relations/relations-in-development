function getAllete(xmlfile, allete) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", xmlfile, false);
    xmlhttp.send();
    var xmlDoc = xmlhttp.responseXML;
    allete = allete.replace(".", "_");
    if (allete == "a999") {
        alleteValue = Number(1 / 611);
    } else {
        try {
            alleteValue = xmlDoc.getElementsByTagName(allete)[0].childNodes[0].nodeValue;
        } catch (e) {
            alert("等位基因 [" + allete.replace("a", "") + "] 不存在");
        }
    }
    return alleteValue;
}