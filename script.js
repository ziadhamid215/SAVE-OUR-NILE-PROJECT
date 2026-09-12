function showImpact() {

    let count = 0;

    if (document.getElementById("action1").checked) {
        count++;
    }

    if (document.getElementById("action2").checked) {
        count++;
    }

    if (document.getElementById("action3").checked) {
        count++;
    }

    if (document.getElementById("action4").checked) {
        count++;
    }

    const resultElement = document.getElementById("result");

    if (count > 0) {
        resultElement.innerHTML = "You selected " + count + " actions to help protect the Nile and thank you for taking action to protect the Nile. Every small step can make a big difference for its future";
        resultElement.style.display = "block"; 
    } else {
        resultElement.innerHTML = ""; 
        resultElement.style.display = "none"; 
    }

    document.getElementById("result").innerHTML =
        "You selected " + count + " actions to help protect the Nile" +
        " and thank you for taking action to protect the Nile. Every small step can make a big difference for its future";
}