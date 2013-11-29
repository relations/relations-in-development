function loadTableFromCookie() {
    var linesCount = getCookie("piParentsLinesCount");
    for (var i = 1; i <= Number(linesCount); i++) {
        var locus = getCookie("piParentsLocus_" + i);
        var AF1 = getCookie("piParentsAF1_" + i);
        var AF2 = getCookie("piParentsAF2_" + i);
        var M1 = getCookie("piParentsM1_" + i);
        var M2 = getCookie("piParentsM2_" + i);
        var C1 = getCookie("piParentsC1_" + i);
        var C2 = getCookie("piParentsC2_" + i);
        if (!(AF1 == null && AF2 == null && M1 == null && M2 == null && C1 == null && C2 == null)) {
            piParentsLoadRow(i, locus, AF1, AF2, M1, M2, C1, C2);
        }
    }
}

function piParentsLoadRow(rowID, locus, AF1, AF2, M1, M2, C1, C2) {
    var regularExpression = "^[0-9]+(\\.[0-9]+)?$";
    var piParentsTrLastIndex = findObject("piParentsTrLastIndex", document);
    var piParentsCurrentCount = findObject("piParentsCurrentCount", document);
    var piParentsTable = findObject("piParentsTable", document);

    var newTR = piParentsTable.insertRow(piParentsTable.rows.length);
    newTR.id = "row" + rowID;
    var newAllele = newTR.insertCell(0);
    newAllele.innerHTML = generateSelectCode(rowID);
    var newAF1 = newTR.insertCell(1);
    newAF1.innerHTML = "<div class='control-group input-append'><input class='input-mini'  id='AF1_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)'  value='" + AF1 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newAF2 = newTR.insertCell(2);
    newAF2.innerHTML = "<div class='control-group input-append'><input class='input-mini'  id='AF2_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)' value='" + AF2 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newM1 = newTR.insertCell(3);
    newM1.innerHTML = "<div class='control-group input-append'><input class='input-mini'  id='M1_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)' value='" + M1 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newM2 = newTR.insertCell(4);
    newM2.innerHTML = "<div class='control-group input-append'><input class='input-mini'  id='M2_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)' value='" + M2 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newC1 = newTR.insertCell(5);
    newC1.innerHTML = "<div class='control-group input-append'><input class='input-mini'  id='C1_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)' value='" + C1 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newC2 = newTR.insertCell(6);
    newC2.innerHTML = "<div class='control-group input-append'><input class='input-mini'  id='C2_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)' value='" + C2 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newPi = newTR.insertCell(7);
    newPi.innerHTML = "<span class='input-mini uneditable-input' id='PI_" + rowID + "'></span>";
    var newDeleteTD = newTR.insertCell(8);
    newDeleteTD.innerHTML = "<button type='button' class='btn  btn-small  btn-danger' onclick=\"piParentsDeleteRow('row" + rowID + "','" + rowID + "')\"><i class='icon-remove icon-white'></i> 删除</button>";

    var selectLocas = findObject("locus_" + rowID);
    selectLocas.selectedIndex = locus;
    piParentsTrLastIndex.value = (rowID + 1).toString();
    piParentsCurrentCount.value = (rowID).toString();
    var linesCount = document.getElementById("piParentsRowCount");
    linesCount.innerHTML = (piParentsTable.rows.length - 1);
    reloadValidate();
}


function piParentsAddRow() {
    var regularExpression = "^[0-9]+(\\.[0-9]+)?$";
    var piParentsTrLastIndex = findObject("piParentsTrLastIndex", document);
    var piParentsCurrentCount = findObject("piParentsCurrentCount", document);
    var rowID = parseInt(piParentsTrLastIndex.value);
    var piParentsTable = findObject("piParentsTable", document);

    var newTR = piParentsTable.insertRow(piParentsTable.rows.length);
    newTR.id = "row" + rowID;
    var newAllele = newTR.insertCell(0);
    newAllele.innerHTML = generateSelectCode(rowID);
    var newAF1 = newTR.insertCell(1);
    newAF1.innerHTML = "<div class='control-group input-append'><input class='input-mini' onBlur='saveDataIntoCookie(" + rowID + ", 1)'  id='AF1_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newAF2 = newTR.insertCell(2);
    newAF2.innerHTML = "<div class='control-group input-append'><input class='input-mini' onBlur='saveDataIntoCookie(" + rowID + ", 1)' id='AF2_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newM1 = newTR.insertCell(3);
    newM1.innerHTML = "<div class='control-group input-append'><input class='input-mini' onBlur='saveDataIntoCookie(" + rowID + ", 1)' id='M1_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newM2 = newTR.insertCell(4);
    newM2.innerHTML = "<div class='control-group input-append'><input class='input-mini' onBlur='saveDataIntoCookie(" + rowID + ", 1)' id='M2_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newC1 = newTR.insertCell(5);
    newC1.innerHTML = "<div class='control-group input-append'><input class='input-mini' onBlur='saveDataIntoCookie(" + rowID + ", 1)' id='C1_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newC2 = newTR.insertCell(6);
    newC2.innerHTML = "<div class='control-group input-append'><input class='input-mini' onBlur='saveDataIntoCookie(" + rowID + ", 1)' id='C2_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newPi = newTR.insertCell(7);
    newPi.innerHTML = "<span class='input-mini uneditable-input' id='PI_" + rowID + "'></span>";
    var newDeleteTD = newTR.insertCell(8);
    newDeleteTD.innerHTML = "<button type='button' class='btn  btn-small  btn-danger' onclick=\"piParentsDeleteRow('row" + rowID + "','" + rowID + "')\"><i class='icon-remove icon-white'></i> 删除</button>";

    piParentsTrLastIndex.value = (rowID + 1).toString();
    piParentsCurrentCount.value = (rowID).toString();
    var linesCount = document.getElementById("piParentsRowCount");
    linesCount.innerHTML = (piParentsTable.rows.length - 1);

    reloadValidate();

    addCookie("piParentsLinesCount", Number(piParentsCurrentCount.value), 1);
}

function condition_qq_qq_qq(C1, C2, M1, M2, AF1, AF2) {
    return C1 == C2 && M1 == M2 && AF1 == AF2 && C1 == M1 && M1 == AF1;
}

function condition_qq_qq_qr(C1, C2, M1, M2, AF1, AF2) {
    return C1 == C2 && M1 == M2 && AF1 != AF2 && C1 == M1 && ((M1 == AF1 && M1 != AF2) || (M1 != AF1 && M1 == AF2));
}

function condition_qq_pq_qq(C1, C2, M1, M2, AF1, AF2) {
    return C1 == C2 && AF1 == AF2 && C1 == AF1 && M1 != M2 && (M1 == C1 || M2 == C1);
}

function condition_qq_pq_qr(C1, C2, M1, M2, AF1, AF2) {
    return C1 == C2 && M1 != M2 && AF1 != AF2 &&
        ((C1 == M1 && C1 != M2) || (C1 != M1 && C1 == M2)) &&
        ((C1 == AF1 && C1 != AF2) || (C1 != AF1 && C1 == AF2));
}

function condition_pq_pp_qq(C1, C2, M1, M2, AF1, AF2) {
    return C1 != C2 && M1 == M2 && AF1 == AF2 && M1 != AF1 &&
        ((M1 == C1 && M1 != C2) || (M1 != C1 && M1 == C2)) &&
        ((AF1 == C1 && AF1 != C2) || (AF1 != C1 && AF2 == C2));
}

function condition_pq_pr_qq(C1, C2, M1, M2, AF1, AF2) {
    return C1 != C2 && M1 != M2 && AF1 == AF2 &&
        (((M1 == C1 || M1 == C2) && (M2 != C1 && M2 != C2)) ||
            ((M2 == C1 || M2 == C2) && (M1 != C1 && M1 != C2))) &&
        (AF1 == C1 || AF1 == C2);
}

function condition_pq_pp_pq(C1, C2, M1, M2, AF1, AF2) {
    return C1 != C2 && M1 == M2 && AF1 != AF2 && (M1 == C1 || M1 == C2) && (C1 == AF1 || C1 == AF2) && (C2 == AF1 || C2 == AF2);
}

function condition_pq_pr_or_ps_pq(C1, C2, M1, M2, AF1, AF2) {
    return C1 != C2 && M1 != M2 && AF1 != AF2 &&
        (((M1 == C1 || M1 == C2) && (M2 != C1 && M2 != C2)) || ((M2 == C1 || M2 == C2) && (M1 != C1 && M1 != C2))) &&
        (C1 == AF1 || C1 == AF2) && (C2 == AF1 || C2 == AF2);
}

function condition_pq_pp_qr(C1, C2, M1, M2, AF1, AF2) {
    return C1 != C2 && M1 == M2 && AF1 != AF2 && (M1 == C1 || M1 == C2) &&
        (((AF1 == C1 || AF1 == C2) && (AF2 != C1 && AF2 != C2)) || ((AF2 == C1 || AF2 == C2) && (AF1 != C1 && AF1 != C2)));
}

function condition_pq_pr_or_ps_qr(C1, C2, M1, M2, AF1, AF2) {
    return C1 != C2 && M1 != M2 && AF1 != AF2 &&
        (((M1 == C1 || M1 == C2) && (M2 != C1 && M2 != C2)) || ((M2 == C1 || M2 == C2) && (M1 != C1 && M1 != C2))) &&
        (((AF1 == C1 || AF1 == C2) && (AF2 != C1 && AF2 != C2)) || ((AF2 == C1 || AF2 == C2) && (AF1 != C1 && AF1 != C2)));
}
function condition_pq_pq_pq(C1, C2, M1, M2, AF1, AF2) {
    return C1 != C2 && M1 != M2 && AF1 != AF2 &&
        (C1 == AF1 || C1 == AF2) && (C2 == AF1 || C2 == AF2) &&
        (C1 == M1 || C1 == M2) && (C2 == M1 || C2 == M2) &&
        (M1 == AF1 || M1 == AF2) && (M2 == AF1 || M2 == AF2);
}
function condition_pq_pq_qq(C1, C2, M1, M2, AF1, AF2) {
    return C1 != C2 && M1 != M2 && AF1 == AF2 &&
        (C1 == M1 || C1 == M2) && (C2 == M1 || C2 == M2) &&
        (AF1 == C1 || AF1 == C2);
}
function condition_pq_pq_qr(C1, C2, M1, M2, AF1, AF2) {
    return C1 != C2 && M1 != M2 && AF1 != AF2 &&
        (C1 == M1 || C1 == M2) && (C2 == M1 || C2 == M2) &&
        (((AF1 == C1 || AF1 == C2) && (AF2 != C1 && AF2 != C2)) || ((AF2 == C1 || AF2 == C2) && (AF1 != C1 && AF1 != C2)));
}

function calculate() {
    var cpi = 1;
    var rcp;
    var linesCount = getCookie("piParentsLinesCount");
    for (var i = 1; i <= Number(linesCount); i++) {
        var AF1 = getCookie("piParentsAF1_" + i);
        var AF2 = getCookie("piParentsAF2_" + i);
        var M1 = getCookie("piParentsM1_" + i);
        var M2 = getCookie("piParentsM2_" + i);
        var C1 = getCookie("piParentsC1_" + i);
        var C2 = getCookie("piParentsC2_" + i);
        if (!(AF1 == null && AF2 == null && M1 == null && M2 == null && C1 == null && C2 == null)) {
            cpi = cpi * Number(calculatePi(i));
        }
    }
    rcp = cpi / (1 + cpi);
    var CPI = document.getElementById("CPI");
    CPI.innerHTML = cpi.toFixed(6);
    var RCP = document.getElementById("RCP");
    RCP.innerHTML = rcp.toFixed(6);
    addCookie("piParentsCPI", cpi.toFixed(6), 1);
    addCookie("piParentsRCP", rcp.toFixed(6), 1);
    var piParentsRowCount = document.getElementById("piParentsRowCount");
    addCookie("piParentsRowCount", piParentsRowCount.innerHTML, 1);
}

function saveDataIntoCookie(rowID, hours) {
    var locus = findObject("locus_" + rowID, document).selectedIndex;
    var locusValue = findObject("locus_" + rowID, document).value;
    var AF1 = findObject("AF1_" + rowID, document).value;
    var AF2 = findObject("AF2_" + rowID, document).value;
    var M1 = findObject("M1_" + rowID, document).value;
    var M2 = findObject("M2_" + rowID, document).value;
    var C1 = findObject("C1_" + rowID, document).value;
    var C2 = findObject("C2_" + rowID, document).value;

    addCookie("piParentsLocus_" + rowID, locus, hours);
    addCookie("piParentsLocusValue_" + rowID, locusValue, hours);
    addCookie("piParentsAF1_" + rowID, AF1, hours);
    addCookie("piParentsAF2_" + rowID, AF2, hours);
    addCookie("piParentsM1_" + rowID, M1, hours);
    addCookie("piParentsM2_" + rowID, M2, hours);
    addCookie("piParentsC1_" + rowID, C1, hours);
    addCookie("piParentsC2_" + rowID, C2, hours);
}

function piParentsDeleteRow(rowID, id) {
    var piParentsTable = findObject("piParentsTable", document);
    var row = findObject(rowID, document);
    var rowIndex = row.rowIndex;
    piParentsTable.deleteRow(rowIndex);
    var linesCount = document.getElementById("piParentsRowCount");
    linesCount.innerHTML = (piParentsTable.rows.length - 1);
    deleteRowCookie(Number(id));
}

function deleteRowCookie(rowID) {
    delCookie("piParentsLocus_" + rowID);
    delCookie("piParentsAF1_" + rowID);
    delCookie("piParentsAF2_" + rowID);
    delCookie("piParentsM1_" + rowID);
    delCookie("piParentsM2_" + rowID);
    delCookie("piParentsC1_" + rowID);
    delCookie("piParentsC2_" + rowID);
    delCookie("piParentsCPI");
    delCookie("piParentsRCP");
    delCookie("piParentsRowCount");
}

function piParentsClearAllRows() {
    var piParentsTable = findObject("piParentsTable", document);
    var piParentsRowCount = piParentsTable.rows.length;
    for (var i = piParentsRowCount - 1; i > 0; i--) {
        piParentsTable.deleteRow(i);
    }
    var piParentsTrLastIndex = findObject("piParentsTrLastIndex", document);
    piParentsTrLastIndex.value = "1";
    var linesCount = document.getElementById("piParentsRowCount");
    linesCount.innerHTML = (piParentsTable.rows.length - 1);
    clearAllCookies();
    var CPI = document.getElementById("CPI");
    CPI.innerHTML = "0";
    var RCP = document.getElementById("RCP");
    RCP.innerHTML = "0";
}

function clearAllCookies() {
    var linesCount = getCookie("piParentsLinesCount");
    for (var i = 1; i <= Number(linesCount); i++) {
        deleteRowCookie(i);
    }
    delCookie("piParentsLinesCount");
}
