function generateSelectCode(rowID) {
    var code = "<select id='locus_" + rowID + "' onclick='saveDataIntoCookie(" + rowID + ", 1)' class='span2'>" +
        "<option value=\"D3S1358\">D3S1358</option>" +
        "<option value=\"D13S317\">D13S317</option>" +
        "<option value=\"D7S820\">D7S820</option>" +
        "<option value=\"D16S539\">D16S539</option>" +
        "<option value=\"PentaE\">Penta E</option>" +
        "<option value=\"D2S441\">D2S441</option>" +
        "<option value=\"TPOX\">TPOX</option>" +
        "<option value=\"TH01\">TH01</option>" +
        "<option value=\"D2S1338\">D2S1338</option>" +
        "<option value=\"CSF1PO\">CSF1PO</option>" +
        "<option value=\"PentaD\">Penta D</option>" +
        "<option value=\"D10S1248\">D10S1248</option>" +
        "<option value=\"D19S433\">D19S433</option>" +
        "<option value=\"vWA\">vWA</option>" +
        "<option value=\"D21S11\">D21S11</option>" +
        "<option value=\"D18S51\">D18S51</option>" +
        "<option value=\"D6S1043\">D6S1043</option>" +
        "<option value=\"D8S1179\">D8S1179</option>" +
        "<option value=\"D5S818\">D5S818</option>" +
        "<option value=\"D12S391\">D12S391</option>" +
        "<option value=\"FGA\">FGA</option>" +
        "</select>";
    return(code);
}

function calculatePi(rowID) {
    var locus = findObject("locus_" + (rowID), document).value;
    var A1 = findObject("A1_" + (rowID), document).value;
    var A2 = findObject("A2_" + (rowID), document).value;
    var B1 = findObject("B1_" + (rowID), document).value;
    var B2 = findObject("B2_" + (rowID), document).value;
    var A1value = getAllete("../../../xml/AGCU_EX22/" + locus + ".xml", "a" + A1);
    var A2value = getAllete("../../../xml/AGCU_EX22/" + locus + ".xml", "a" + A2);
    var B1value = getAllete("../../../xml/AGCU_EX22/" + locus + ".xml", "a" + B1);
    var B2value = getAllete("../../../xml/AGCU_EX22/" + locus + ".xml", "a" + B2);
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