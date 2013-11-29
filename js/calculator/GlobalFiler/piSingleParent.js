function generateSelectCode(rowID) {
    var code = "<select id='locus_" + rowID + "' onclick='saveDataIntoCookie(" + rowID + ", 1)' class='span2'>" +
        "<option value=\"D3S1358\">D3S1358</option>" +
        "<option value=\"vWA\">vWA</option>" +
        "<option value=\"D16S539\">D16S539</option>" +
        "<option value=\"CSF1PO\">CSF1PO</option>" +
        "<option value=\"TPOX\">TPOX</option>" +
        "<option value=\"D8S1179\">D8S1179</option>" +
        "<option value=\"D21S11\">D21S11</option>" +
        "<option value=\"D18S51\">D18S51</option>" +
        "<option value=\"D2S441\">D2S441</option>" +
        "<option value=\"D19S433\">D19S433</option>" +
        "<option value=\"TH01\">TH01</option>" +
        "<option value=\"FGA\">FGA</option>" +
        "<option value=\"D22S1045\">D22S1045</option>" +
        "<option value=\"D5S818\">D5S818</option>" +
        "<option value=\"D13S317\">D13S317</option>" +
        "<option value=\"D7S820\">D7S820</option>" +
        "<option value=\"SE33\">SE33</option>" +
        "<option value=\"D10S1248\">D10S1248</option>" +
        "<option value=\"D1S1656\">D1S1656</option>" +
        "<option value=\"D12S391\">D12S391</option>" +
        "<option value=\"D2S1338\">D2S1338</option>" +
        "</select>";
    return(code);
}

function calculatePi(rowID) {
    var locus = findObject("locus_" + (rowID), document).value;
    var AF1 = findObject("AF1_" + (rowID), document).value;
    var AF2 = findObject("AF2_" + (rowID), document).value;
    var C1 = findObject("C1_" + (rowID), document).value;
    var C2 = findObject("C2_" + (rowID), document).value;
    var AF1value = getAllete("../../../xml/GlobalFiler/" + locus + ".xml", "a" + AF1);
    var AF2value = getAllete("../../../xml/GlobalFiler/" + locus + ".xml", "a" + AF2);
    var C1value = getAllete("../../../xml/GlobalFiler/" + locus + ".xml", "a" + C1);
    var C2value = getAllete("../../../xml/GlobalFiler/" + locus + ".xml", "a" + C2);
    var pi = 0;

    if (condition_qq_qq(C1, C2, AF1, AF2)) {
        pi = 1 / Number(C1value);
    } else if (condition_pq_qq(C1, C2, AF1, AF2)) {
        pi = 1 / (Number(AF1value) * 2);
    } else if (condition_qq_qr(C1, C2, AF1, AF2)) {
        pi = 1 / (Number(C1value) * 2);
    } else if (condition_pq_pq(C1, C2, AF1, AF2)) {
        pi = (Number(C1value) + Number(C2value)) / (4 * Number(C1value) * Number(C2value));
    } else if (condition_pq_qr(C1, C2, AF1, AF2)) {
        if (C1 == AF1 || C1 == AF2) {
            pi = 1 / (4 * Number(C1value));
        } else if (C2 == AF1 || C2 == AF2) {
            pi = 1 / (4 * Number(C2value));
        }
    }

    var PI = findObject("PI_" + rowID, document);
    PI.innerHTML = pi.toFixed(6);

    addCookie("piSingleParentPI_" + rowID, pi.toFixed(6), 1);

    return(pi);
}