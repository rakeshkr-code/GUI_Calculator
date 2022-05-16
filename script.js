
function addlog(msg) {
    var ul = document.getElementById("log")
    var li = document.createElement("li")
    var msg_text_node = document.createTextNode(msg)
    li.appendChild(msg_text_node)
    ul.appendChild(li)
}

function calculate() {
    expression = document.getElementById("expression").value
    console.log(expression)
    if (expression) {
        try {
            answer = eval(expression)
            document.getElementById("expression").value = answer
            addlog(expression + " = " + answer)
        } catch(e) {
            console.log("Bad Expression")
            addlog("Expression '" + expression + "' is a Bad Expression. Please Fix it.")
        }
    }
}

function math_calculate() {
    expression = document.getElementById("expression").value
    console.log(expression)
    if (expression) {
        try {
            answer = math.evaluate(expression)
            document.getElementById("expression").value = answer
            addlog(expression + " = " + answer)
        } catch(e) {
            console.log("Bad Expression")
            addlog("Expression '" + expression + "' is a Bad Expression. Please Fix it.")
        }
    }
}

function initialize_app() {
    calculate_btn = document.getElementById("calculate")
    calculate_btn.addEventListener("click", math_calculate)
}

function input_number(v) {
    expression = document.getElementById("expression").value
    expression = expression + v
    document.getElementById("expression").value = expression
}

function input_operator(op) {
    expression = document.getElementById("expression").value
    expression = expression + op
    document.getElementById("expression").value = expression
}

function bcsp() {
    expression = document.getElementById("expression").value
    expression = expression.slice(0, -1)
    document.getElementById("expression").value = expression
}

function allclr() {
    expression = document.getElementById("expression").value
    expression = ""
    document.getElementById("expression").value = expression
}

function togglefn() {
    var x = document.getElementById("togglediv")
    if (x.style.display==="block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}
