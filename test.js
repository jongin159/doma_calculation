

function calculate() {
    
    var length = document.getElementById('length');
    length.value = "1"
    var width = document.getElementById('width');
    width.value = "1"
    var output = document.getElementById('output');
    output.value = "1"
    var output2 = document.getElementById('output2');
    output2.value = "1"
    var output3 = document.getElementById('output3');
    output3.value = "0"
    var color = document.getElementById('color');
    output3.value = "1"
    var option = document.getElementById('option');
    output3.value = "2"
    var cnt = document.getElementById('cnt')
    output3.value = "3"
    var subtract = document.getElementById('subtract');
    output3.value = "4"
    var add = document.getElementById('add');
    output3.value = "5"
    var freeship = document.getElementById('freeship');
    output3.value = "6"
    var plus = document.getElementById('plus');
    

    output3.value = "8"

    if (eval(length.value) < 100 || eval(length.value) > 2400){
        return
    }
    if (eval(width.value) < 30 || eval(width.value) > 1200){
        return
    }

    if (color.options[color.selectedIndex].text == "백색"){
        option.value = "백색" + "/폭" + width.value + "mmx길이" + length.value + "mm"
        var int_output = Math.round(eval(length.value) * eval(width.value) * 0.1863)
        var comma_output = int_output.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        output.value = comma_output + "원"
        output2.value = output.value
        output3.value = Math.floor(eval(length.value) * eval(width.value) * 0.1863 / 1000) + "개"
        cnt.value = 1
        output.style.visibility = "visible"
        output2.style.visibility = "visible"
        output3.style.visibility = "visible"
        subtract.style.visibility = "visible"
        cnt.style.visibility = "visible"
        add.style.visibility = "visible"
        option.style.visibility = "visible"
        
        freeship.style.visibility = "visible"
        plus.style.visibility = "visible"
    }
    else if (color.options[color.selectedIndex].text == "적색"){
        option.value = "적색" + "/폭" + width.value + "mmx길이" + length.value + "mm"
        var int_output = Math.round(eval(length.value) * eval(width.value) * 0.177606)
        var comma_output = int_output.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        output.value = comma_output + "원"
        output2.value = output.value
        output3.value = Math.floor(eval(length.value) * eval(width.value) * 0.177606 / 1000) + "개"
        cnt.value = 1
        output.style.visibility = "visible"
        output2.style.visibility = "visible"
        output3.style.visibility = "visible"
        subtract.style.visibility = "visible"
        cnt.style.visibility = "visible"
        add.style.visibility = "visible"
        option.style.visibility = "visible"
        
        freeship.style.visibility = "visible"
        plus.style.visibility = "visible"
    }  

    
}

function add() {
    var cnt = document.getElementById('cnt');
    cnt.value = eval(cnt.value) + 1
    var int_output = Math.round(eval(stringNumberToInt(output.value.slice(0, -1))) * (eval(cnt.value) / (eval(cnt.value) - 1)))
    var str_output = int_output.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
    output.value = str_output
    output2.value = output.value
    output3.value = Math.floor(int_output / 1000) + "개"
}

function subtract() {
    var cnt = document.getElementById('cnt');
    if (eval(cnt.value) > 1){
        cnt.value = eval(cnt.value) - 1
        var int_output = Math.round(eval(stringNumberToInt(output.value.slice(0, -1))) * (eval(cnt.value) / (eval(cnt.value) + 1)))
        var str_output = int_output.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
        output.value = str_output
    
        output2.value = output.value
        output3.value = Math.floor(int_output / 1000) + "개"
    }
    
}

function hide() {
    var output = document.getElementById('output');
    var output2 = document.getElementById('output2');
    var output3 = document.getElementById('output3');
    var subtract = document.getElementById('subtract');
    var cnt = document.getElementById('cnt');
    var add = document.getElementById('add');
    var option = document.getElementById('option');

    var freeship = document.getElementById('freeship');
    var plus = document.getElementById('plus');

    output.style.visibility = "hidden"
    output2.style.visibility = "hidden"
    output3.style.visibility = "visible"
    output3.value = "1234"
    subtract.style.visibility = "hidden"
    cnt.style.visibility = "hidden"
    add.style.visibility = "hidden"
    option.style.visibility = "hidden"
    
    freeship.style.visibility = "hidden"
    plus.style.visibility = "hidden"
}

function stringNumberToInt(stringNumber){
    return parseInt(stringNumber.replace(/,/g , ''));
}