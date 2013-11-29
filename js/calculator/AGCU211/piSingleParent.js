function generateSelectCode(rowID) {
    var code = "<select id='locus_" + rowID + "' onclick='saveDataIntoCookie(" + rowID + ", 1)' class='span2'>" +
        "<option value=\"D6S474\">D6S474</option>" +
        "<option value=\"D12ATA63\">D12ATA63</option>" +
        "<option value=\"D22S1045\">D22S1045</option>" +
        "<option value=\"D10S1248\">D10S1248</option>" +
        "<option value=\"D1S1677\">D1S1677</option>" +
        "<option value=\"D11S4463\">D11S4463</option>" +
        "<option value=\"D1S1627\">D1S1627</option>" +
        "<option value=\"D3S4529\">D3S4529</option>" +
        "<option value=\"D2S441\">D2S441</option>" +
        "<option value=\"D6S1017\">D6S1017</option>" +
        "<option value=\"D4S2408\">D4S2408</option>" +
        "<option value=\"D19S433\">D19S433</option>" +
        "<option value=\"D17S1301\">D17S1301</option>" +
        "<option value=\"D1GATA113\">D1GATA113</option>" +
        "<option value=\"D18S853\">D18S853</option>" +
        "<option value=\"D20S482\">D20S482</option>" +
        "<option value=\"D14S1434\">D14S1434</option>" +
        "<option value=\"D9S1122\">D9S1122</option>" +
        "<option value=\"D2S1776\">D2S1776</option>" +
        "<option value=\"D10S1435\">D10S1435</option>" +
        "<option value=\"D5S2500\">D5S2500</option>" +
        "</select>";
    return(code);
}

function calculatePi(rowID) {
    var locus = findObject("locus_" + (rowID), document).value;
    var AF1 = findObject("AF1_" + (rowID), document).value;
    var AF2 = findObject("AF2_" + (rowID), document).value;
    var C1 = findObject("C1_" + (rowID), document).value;
    var C2 = findObject("C2_" + (rowID), document).value;
    var AF1value = getAllete("../../../xml/AGCU211/" + locus + ".xml", "a" + AF1);
    var AF2value = getAllete("../../../xml/AGCU211/" + locus + ".xml", "a" + AF2);
    var C1value = getAllete("../../../xml/AGCU211/" + locus + ".xml", "a" + C1);
    var C2value = getAllete("../../../xml/AGCU211/" + locus + ".xml", "a" + C2);
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