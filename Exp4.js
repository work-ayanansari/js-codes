//Compare two Strings

function compareStrings() {
    const str1 = document.getElementById("string1").value;
    const str2 = document.getElementById("string2").value;

    const mathOperatorResult = (str1 == str2) ? "Matched" : "Not Matched";
    document.getElementById("math-operator-result").textContent = mathOperatorResult;
    
    const strictEqualityResult = (str1 === str2) ? "Matched" : "Not Matched";
    document.getElementById("strict-equality-result").textContent = strictEqualityResult;
    
    const matchMethodResult = str1.match(str2) ? "Matched" : "Not Matched";
    document.getElementById("match-method-result").textContent = matchMethodResult;
    
    const matchAllMethodResult = [...str1.matchAll(str2)].length > 0 ? "Matched" : "Not Matched";
    document.getElementById("match-all-method-result").textContent = matchAllMethodResult;
    
    const localeCompareResult = str1.localeCompare(str2) === 0 ? "Matched" : "Not Matched";
    document.getElementById("locale-compare-result").textContent = localeCompareResult;
}

