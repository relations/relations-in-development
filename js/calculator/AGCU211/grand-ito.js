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
    var A1 = findObject("A1_" + (rowID), document).value;
    var A2 = findObject("A2_" + (rowID), document).value;
    var B1 = findObject("B1_" + (rowID), document).value;
    var B2 = findObject("B2_" + (rowID), document).value;
    var A1value = getAllete("../../../xml/AGCU211/" + locus + ".xml", "a" + A1);
    var A2value = getAllete("../../../xml/AGCU211/" + locus + ".xml", "a" + A2);
    var B1value = getAllete("../../../xml/AGCU211/" + locus + ".xml", "a" + B1);
    var B2value = getAllete("../../../xml/AGCU211/" + locus + ".xml", "a" + B2);
    var pi = 0;

    if (condition_pp_pp(A1, A2, B1, B2)) {
        pi = (Number(A1value) + 1) * (Number(A1value) + 1) / (4 * Number(A1value) * Number(A1value));
    }

    if (condition_pp_pq(A1, A2, B1, B2)) {
        pi = (1 / 4) + 1 / (4 * Number(A1value));
    }

    if (condition_pp_qq(A1, A2, B1, B2)) {
        pi = 1 / 4;
    }

    if (condition_pp_qr(A1, A2, B1, B2)) {
        pi = 1 / 4;
    }

    if (condition_pq_pp_or_qq(A1, A2, B1, B2)) {
        if (A1 == B1) {
            pi = (1 / 4) + 1 / (4 * Number(A1value));
        } else {
            pi = (1 / 4) + 1 / (4 * Number(A2value));
        }
    }

    if (condition_pq_pq(A1, A2, B1, B2)) {
        pi = (1 / 4) + (1 / (8 * Number(A1value))) + (1 / (8 * Number(A2value))) + (1 / (8 * Number(A1value)) * Number(A2value));
    }

    if (condition_pq_pr_or_qr(A1, A2, B1, B2)) {
        if (A1 == B1 || A2 == B2) {
            pi = (1 / 4) + 1 / (8 * Number(A1value));
        } else {
            pi = (1 / 4) + 1 / (8 * Number(A2value));
        }
    }

    if (condition_pq_rr(A1, A2, B1, B2)) {
        pi = 1 / 4;
    }

    if (condition_pq_rs(A2, A2, B1, B2)) {
        pi = 1 / 4;
    }

    var PI = findObject("PI_" + rowID, document);
    PI.innerHTML = pi.toFixed(6);

    addCookie("itoPI_" + rowID, pi.toFixed(6), 1);

    return(pi);
}