function loadTableFromCookie() {
    var linesCount = getCookie("itoLinesCount");
    for (var i = 1; i <= Number(linesCount); i++) {
        var locus = getCookie("itoLocus_" + i);
        var A1 = getCookie("itoA1_" + i);
        var A2 = getCookie("itoA2_" + i);
        var B1 = getCookie("itoB1_" + i);
        var B2 = getCookie("itoB2_" + i);
        if (!(A1 == null && A2 == null && B1 == null && B2 == null)) {
            itoLoadRow(i, locus, A1, A2, B1, B2);
        }
    }
}

function itoLoadRow(rowID, locus, A1, A2, B1, B2) {
    var regularExpression = "^[0-9]+(\\.[0-9]+)?$";
    var itoTrLastIndex = findObject("itoTrLastIndex", document);
    var itoCurrentCount = findObject("itoCurrentCount", document);
    var itoTable = findObject("itoTable", document);
    var newTR = itoTable.insertRow(itoTable.rows.length);

    newTR.id = "row" + rowID;
    var newAllele = newTR.insertCell(0);
    newAllele.innerHTML = generateSelectCode(rowID);
    var newA1 = newTR.insertCell(1);
    newA1.innerHTML = "<div class='control-group input-append'><input class='input-small' id='A1_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)'  value='" + A1 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newA2 = newTR.insertCell(2);
    newA2.innerHTML = "<div class='control-group input-append'><input class='input-small' id='A2_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)' value='" + A2 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newB1 = newTR.insertCell(3);
    newB1.innerHTML = "<div class='control-group input-append'><input class='input-small' id='B1_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)' value='" + B1 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newB2 = newTR.insertCell(4);
    newB2.innerHTML = "<div class='control-group input-append'><input class='input-small' id='B2_" + rowID + "'  type='text' onBlur='saveDataIntoCookie(" + rowID + ", 1)' value='" + B2 + "' data-required data-pattern='" + regularExpression + "'/></div>";
    var newPi = newTR.insertCell(5);
    newPi.innerHTML = "<span class='input-small uneditable-input' id='PI_" + rowID + "'></span>";
    var newDeleteTD = newTR.insertCell(6);
    newDeleteTD.innerHTML = "<button type='button' class='btn  btn-small  btn-danger' onclick=\"itoDeleteRow('row" + rowID + "','" + rowID + "')\"><i class='icon-remove icon-white'></i> 删除</button>";

    var selectLocus = findObject("locus_" + rowID);
    selectLocus.selectedIndex = locus;

    itoTrLastIndex.value = (rowID + 1).toString();
    itoCurrentCount.value = (rowID).toString();

    var linesCount = document.getElementById("itoRowCount");
    linesCount.innerHTML = (itoTable.rows.length - 1);

    reloadValidate();
}

function itoAddRow() {
    var regularExpression = "^[0-9]+(\\.[0-9]+)?$";
    var itoTrLastIndex = findObject("itoTrLastIndex", document);
    var itoCurrentCount = findObject("itoCurrentCount", document);
    var rowID = parseInt(itoTrLastIndex.value);
    var itoTable = findObject("itoTable", document);
    var newTR = itoTable.insertRow(itoTable.rows.length);

    newTR.id = "row" + rowID;
    var newAllele = newTR.insertCell(0);
    newAllele.innerHTML = generateSelectCode(rowID);
    var newA1 = newTR.insertCell(1);
    newA1.innerHTML = "<div class='control-group input-append'><input class='input-small' onBlur='saveDataIntoCookie(" + rowID + ", 1)'  id='A1_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newA2 = newTR.insertCell(2);
    newA2.innerHTML = "<div class='control-group input-append'><input class='input-small' onBlur='saveDataIntoCookie(" + rowID + ", 1)' id='A2_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newB1 = newTR.insertCell(3);
    newB1.innerHTML = "<div class='control-group input-append'><input class='input-small' onBlur='saveDataIntoCookie(" + rowID + ", 1)' id='B1_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newB2 = newTR.insertCell(4);
    newB2.innerHTML = "<div class='control-group input-append'><input class='input-small' onBlur='saveDataIntoCookie(" + rowID + ", 1)' id='B2_" + rowID + "'  type='text' data-required data-pattern='" + regularExpression + "'/></div>";
    var newPi = newTR.insertCell(5);
    newPi.innerHTML = "<span class='input-small uneditable-input' id='PI_" + rowID + "'></span>";
    var newDeleteTD = newTR.insertCell(6);
    newDeleteTD.innerHTML = "<button type='button' class='btn  btn-small  btn-danger' onclick=\"itoDeleteRow('row" + rowID + "','" + rowID + "')\"><i class='icon-remove icon-white'></i> 删除</button>";

    itoTrLastIndex.value = (rowID + 1).toString();
    itoCurrentCount.value = (rowID).toString();

    var linesCount = document.getElementById("itoRowCount");
    linesCount.innerHTML = (itoTable.rows.length - 1);

    reloadValidate();

    addCookie("itoLinesCount", Number(itoCurrentCount.value), 1);
}


function condition_pp_pp(A1, A2, B1, B2) {
    return A1 == A2 && B1 == B2 && A1 == B1;
}

function condition_pp_pq(A1, A2, B1, B2) {
    if (A1 == A2) {
        if (B1 == A1 && B1 != B2) {
            return true;
        } else if (B2 == A1 && B1 != B2) {
            return true;
        }
    }
    return false;
}

function condition_pp_qq(A1, A2, B1, B2) {
    return A1 == A2 && B1 == B2 && A1 != B1;
}

function condition_pp_qr(A1, ont_2, B1, B2) {
    return A1 == ont_2 && B1 != B2 && A1 != B1 && A1 != B2;
}

function condition_pq_pp_or_qq(A1, A2, B1, B2) {
    if (B1 == B2) {
        if (A1 == B1 && A1 != A2) {
            return true;
        } else if (A2 == B1 && A1 != A2) {
            return true;
        }
    }
    return false;
}

function condition_pq_pq(A1, A2, B1, B2) {
    return A1 != A2 && B1 != B2 && (A1 == B1 || A1 == B2) && (A2 == B1 || A2 == B2);
}

function condition_pq_pr_or_qr(A1, A2, B1, B2) {
    return (A1 != A2 && B1 != B2) && (((B1 == A1 || B1 == A2) && (B2 != A1 && B2 != A2)) || ((B2 == A1 || B2 == A2) && (B1 != A1 && B1 != A2)));
}

function condition_pq_rr(A1, A2, B1, B2) {
    return A1 != A2 && B1 == B2 && A1 != B1 && A2 != B1;
}

function condition_pq_rs(A1, A2, B1, B2) {
    return A1 != A2 && A1 != B1 && A1 != B2 && A2 != B1 && A2 != B2 && B1 != B2;
}

function calculate() {
    var cpi = 1;
    var rcp;
    var linesCount = getCookie("itoLinesCount");

    for (var i = 1; i <= Number(linesCount); i++) {
        var A1 = getCookie("itoA1_" + i);
        var A2 = getCookie("itoA2_" + i);
        var B1 = getCookie("itoB1_" + i);
        var B2 = getCookie("itoB2_" + i);
        if (!(A1 == null && A2 == null && B1 == null && B2 == null)) {
            cpi = cpi * Number(calculatePi(i));
        }
    }

    rcp = cpi / (1 + cpi);

    var CPI = document.getElementById("CPI");
    CPI.innerHTML = cpi.toFixed(6);
    var RCP = document.getElementById("RCP");
    RCP.innerHTML = rcp.toFixed(6);

    var itoRowCount = document.getElementById("itoRowCount");

    addCookie("itoCPI", cpi.toFixed(6), 1);
    addCookie("itoRCP", rcp.toFixed(6), 1);
    addCookie("itoRowCount", itoRowCount.innerHTML, 1);
}

function saveDataIntoCookie(rowID, hours) {
    var locus = findObject("locus_" + rowID, document).selectedIndex;
    var locusValue = findObject("locus_" + rowID, document).value;
    var A1 = findObject("A1_" + rowID, document).value;
    var A2 = findObject("A2_" + rowID, document).value;
    var B1 = findObject("B1_" + rowID, document).value;
    var B2 = findObject("B2_" + rowID, document).value;

    addCookie("itoLocus_" + rowID, locus, hours);
    addCookie("itoLocusValue_" + rowID, locusValue, hours);
    addCookie("itoA1_" + rowID, A1, hours);
    addCookie("itoA2_" + rowID, A2, hours);
    addCookie("itoB1_" + rowID, B1, hours);
    addCookie("itoB2_" + rowID, B2, hours);
}

function itoDeleteRow(rowID, id) {
    var itoTable = findObject("itoTable", document);
    var row = findObject(rowID, document);
    var rowIndex = row.rowIndex;
    itoTable.deleteRow(rowIndex);
    var linesCount = document.getElementById("itoRowCount");
    linesCount.innerHTML = (itoTable.rows.length - 1);
    deleteRowCookie(Number(id));
}

function deleteRowCookie(rowID) {
    delCookie("itoLocus_" + rowID);
    delCookie("itoA1_" + rowID);
    delCookie("itoA2_" + rowID);
    delCookie("itoB1_" + rowID);
    delCookie("itoB2_" + rowID);
    delCookie("itoCPI");
    delCookie("itoRCP");
    delCookie("itoRowCount");
}

function itoClearAllRows() {
    var itoTable = findObject("itoTable", document);
    var itoRowCount = itoTable.rows.length;
    for (var i = itoRowCount - 1; i > 0; i--) {
        itoTable.deleteRow(i);
    }
    var itoTrLastIndex = findObject("itoTrLastIndex", document);
    itoTrLastIndex.value = "1";
    var linesCount = document.getElementById("itoRowCount");
    linesCount.innerHTML = (itoTable.rows.length - 1);
    clearAllCookies();
    var CPI = document.getElementById("CPI");
    CPI.innerHTML = "0";
    var RCP = document.getElementById("RCP");
    RCP.innerHTML = "0";
}

function clearAllCookies() {
    var linesCount = getCookie("itoLinesCount");
    for (var i = 1; i <= Number(linesCount); i++) {
        deleteRowCookie(i);
    }
    delCookie("itoLinesCount");
}