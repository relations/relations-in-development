function loadTableFromCookie() {
    var linesCount = getCookie("piSingleParentLinesCount");
    for (var i = 1; i <= Number(linesCount); i++) {
        var locus = getCookie("piSingleParentLocus_" + i);
        var AF1 = getCookie("piSingleParentAF1_" + i);
        var AF2 = getCookie("piSingleParentAF2_" + i);
        var C1 = getCookie("piSingleParentC1_" + i);
        var C2 = getCookie("piSingleParentC2_" + i);
        if (!(AF1 == null && AF2 == null && C1 == null && C2 == null)) {
            piSingleParentLoadRow(i, locus, AF1, AF2, C1, C2);
        }
    }
}

function piSingleParentLoadRow(rowID, locus, AF1, AF2, C1, C2) {
    var regularExpression = "^[0-9]+(\\.[0-9]+)?$";
    var piSingleParentTrLastIndex = findObject("piSingleParentTrLastIndex", document);
    var piSingleParentCurrentCount = findObject("piSingleParentCurrentCount", document);
    var piSingleParentTable = findObject("piSingleParentTable", document);
    var newTR = piSingleParentTable.insertRow(piSingleParentTable.rows.length);

    newTR.id = "row" + rowID;
    var newAllele = newTR.insertCell(0);
    newAllele.innerHTML = generateSelectCode(rowID);
    var newAF1 = newTR.insertCell(1);
    newAF1.innerHTML = "<div class='control-group input-append'><input class='input-small' id='AF1_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)'  value='" + AF1 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newAF2 = newTR.insertCell(2);
    newAF2.innerHTML = "<div class='control-group input-append'><input class='input-small' id='AF2_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)' value='" + AF2 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newC1 = newTR.insertCell(3);
    newC1.innerHTML = "<div class='control-group input-append'><input class='input-small' id='C1_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)' value='" + C1 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newC2 = newTR.insertCell(4);
    newC2.innerHTML = "<div class='control-group input-append'><input class='input-small' id='C2_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)' value='" + C2 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newPi = newTR.insertCell(5);
    newPi.innerHTML = "<span class='input-small uneditable-input' id='PI_" + rowID + "'></span>";
    var newDeleteTD = newTR.insertCell(6);
    newDeleteTD.innerHTML = "<button type='button' class='btn  btn-small  btn-danger' onclick=\"piSingleParentDeleteRow('row" + rowID + "','" + rowID + "')\"><i class='icon-remove icon-white'></i> 删除</button>";

    var selectLocus = findObject("locus_" + rowID);
    selectLocus.selectedIndex = locus;

    piSingleParentTrLastIndex.value = (rowID + 1).toString();
    piSingleParentCurrentCount.value = (rowID).toString();

    var linesCount = document.getElementById("piSingleParentRowCount");
    linesCount.innerHTML = (piSingleParentTable.rows.length - 1);

    reloadValidate();
}

function piSingleParentAddRow() {
    var regularExpression = "^[0-9]+(\\.[0-9]+)?$";
    var piSingleParentTrLastIndex = findObject("piSingleParentTrLastIndex", document);
    var piSingleParentCurrentCount = findObject("piSingleParentCurrentCount", document);
    var rowID = parseInt(piSingleParentTrLastIndex.value);
    var piSingleParentTable = findObject("piSingleParentTable", document);
    var newTR = piSingleParentTable.insertRow(piSingleParentTable.rows.length);

    newTR.id = "row" + rowID;
    var newAllele = newTR.insertCell(0);
    newAllele.innerHTML = generateSelectCode(rowID);
    var newAF1 = newTR.insertCell(1);
    newAF1.innerHTML = "<div class='control-group input-append'><input class='input-small' onBlur='saveDataIntoCookie(" + rowID + ", 1)'  id='AF1_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newAF2 = newTR.insertCell(2);
    newAF2.innerHTML = "<div class='control-group input-append'><input class='input-small' onBlur='saveDataIntoCookie(" + rowID + ", 1)' id='AF2_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newC1 = newTR.insertCell(3);
    newC1.innerHTML = "<div class='control-group input-append'><input class='input-small' onBlur='saveDataIntoCookie(" + rowID + ", 1)' id='C1_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newC2 = newTR.insertCell(4);
    newC2.innerHTML = "<div class='control-group input-append'><input class='input-small' onBlur='saveDataIntoCookie(" + rowID + ", 1)' id='C2_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newPi = newTR.insertCell(5);
    newPi.innerHTML = "<span class='input-small uneditable-input' id='PI_" + rowID + "'></span>";
    var newDeleteTD = newTR.insertCell(6);
    newDeleteTD.innerHTML = "<button type='button' class='btn  btn-small  btn-danger' onclick=\"piSingleParentDeleteRow('row" + rowID + "','" + rowID + "')\"><i class='icon-remove icon-white'></i> 删除</button>";

    piSingleParentTrLastIndex.value = (rowID + 1).toString();
    piSingleParentCurrentCount.value = (rowID).toString();

    var linesCount = document.getElementById("piSingleParentRowCount");
    linesCount.innerHTML = (piSingleParentTable.rows.length - 1);

    reloadValidate();

    addCookie("piSingleParentLinesCount", Number(piSingleParentCurrentCount.value), 1);
}

function condition_qq_qq(C1, C2, AF1, AF2) {
    return AF1 == AF2 && C1 == C2 && AF1 == C1;
}

function condition_pq_qq(C1, C2, AF1, AF2) {
    return C1 != C2 && AF1 == AF2 && (AF1 == C1 || AF1 == C2);
}

function condition_qq_qr(C1, C2, AF1, AF2) {
    return AF1 != AF2 && C1 == C2 && (C1 == AF1 || C1 == AF2);
}

function condition_pq_pq(C1, C2, AF1, AF2) {
    return C1 != C2 && AF1 != AF2 && (C1 == AF1 || C1 == AF2) && (C2 == AF1 || C2 == AF2);
}

function condition_pq_qr(C1, C2, AF1, AF2) {
    return (C1 != C2 && AF1 != AF2) && (((AF1 == C1 || AF1 == C2) && (AF2 != C1 && AF2 != C2)) || ((AF2 == C1 || AF2 == C2) && (AF1 != C1 && AF1 != C2)));
}

function calculate() {
    var cpi = 1;
    var rcp;
    var linesCount = getCookie("piSingleParentLinesCount");

    for (var i = 1; i <= Number(linesCount); i++) {
        var AF1 = getCookie("piSingleParentAF1_" + i);
        var AF2 = getCookie("piSingleParentAF2_" + i);
        var C1 = getCookie("piSingleParentC1_" + i);
        var C2 = getCookie("piSingleParentC2_" + i);
        if (!(AF1 == null && AF2 == null && C1 == null && C2 == null)) {
            cpi = cpi * Number(calculatePi(i));
        }
    }

    rcp = cpi / (1 + cpi);

    var CPI = document.getElementById("CPI");
    CPI.innerHTML = cpi.toFixed(6);
    var RCP = document.getElementById("RCP");
    RCP.innerHTML = rcp.toFixed(6);

    var piSingleParentRowCount = document.getElementById("piSingleParentRowCount");

    addCookie("piSingleParentCPI", cpi.toFixed(6), 1);
    addCookie("piSingleParentRCP", rcp.toFixed(6), 1);
    addCookie("piSingleParentRowCount", piSingleParentRowCount.innerHTML, 1);
}

function saveDataIntoCookie(rowID, hours) {
    var locus = findObject("locus_" + rowID, document).selectedIndex;
    var locusValue = findObject("locus_" + rowID, document).value;
    var AF1 = findObject("AF1_" + rowID, document).value;
    var AF2 = findObject("AF2_" + rowID, document).value;
    var C1 = findObject("C1_" + rowID, document).value;
    var C2 = findObject("C2_" + rowID, document).value;

    addCookie("piSingleParentLocus_" + rowID, locus, hours);
    addCookie("piSingleParentLocusValue_" + rowID, locusValue, hours);
    addCookie("piSingleParentAF1_" + rowID, AF1, hours);
    addCookie("piSingleParentAF2_" + rowID, AF2, hours);
    addCookie("piSingleParentC1_" + rowID, C1, hours);
    addCookie("piSingleParentC2_" + rowID, C2, hours);
}

function piSingleParentDeleteRow(rowID, id) {
    var piSingleParentTable = findObject("piSingleParentTable", document);
    var row = findObject(rowID, document);
    var rowIndex = row.rowIndex;
    piSingleParentTable.deleteRow(rowIndex);
    var linesCount = document.getElementById("piSingleParentRowCount");
    linesCount.innerHTML = (piSingleParentTable.rows.length - 1);
    deleteRowCookie(Number(id));
}

function deleteRowCookie(rowID) {
    delCookie("piSingleParentLocus_" + rowID);
    delCookie("piSingleParentAF1_" + rowID);
    delCookie("piSingleParentAF2_" + rowID);
    delCookie("piSingleParentC1_" + rowID);
    delCookie("piSingleParentC2_" + rowID);
    delCookie("piSingleParentCPI");
    delCookie("piSingleParentRCP");
    delCookie("piSingleParentRowCount");
}

function piSingleParentClearAllRows() {
    var piSingleParentTable = findObject("piSingleParentTable", document);
    var piSingleParentRowCount = piSingleParentTable.rows.length;
    for (var i = piSingleParentRowCount - 1; i > 0; i--) {
        piSingleParentTable.deleteRow(i);
    }
    var piSingleParentTrLastIndex = findObject("piSingleParentTrLastIndex", document);
    piSingleParentTrLastIndex.value = "1";
    var linesCount = document.getElementById("piSingleParentRowCount");
    linesCount.innerHTML = (piSingleParentTable.rows.length - 1);
    clearAllCookies();
    var CPI = document.getElementById("CPI");
    CPI.innerHTML = "0";
    var RCP = document.getElementById("RCP");
    RCP.innerHTML = "0";
}

function clearAllCookies() {
    var linesCount = getCookie("piSingleParentLinesCount");
    for (var i = 1; i <= Number(linesCount); i++) {
        deleteRowCookie(i);
    }
    delCookie("piSingleParentLinesCount");
}