function calculate() {
                
    var length = document.getElementById('length');
    var width = document.getElementById('width');
    var output = document.getElementById('output');
    var output2 = document.getElementById('output2');
    var output3 = document.getElementById('output3');
    var color = document.getElementById('color');
    var option = document.getElementById('option');
    var cnt = document.getElementById('cnt')
    var subtract = document.getElementById('subtract');
    var add = document.getElementById('add');
    var freeship = document.getElementById('freeship');
    var plus = document.getElementById('plus');
    

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
    var int_output = Math.round(eval(output.value.slice(0, -1).replace(/,/g , '')) * (eval(cnt.value) / (eval(cnt.value) - 1)))
    var str_output = int_output.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
    output.value = str_output
    output2.value = output.value
    output3.value = Math.floor(int_output / 1000) + "개"
}

function subtract() {
    var cnt = document.getElementById('cnt');
    if (eval(cnt.value) > 1){
        cnt.value = eval(cnt.value) - 1
        var int_output = Math.round(eval(output.value.slice(0, -1).replace(/,/g , '')) * (eval(cnt.value) / (eval(cnt.value) + 1)))
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
    output3.style.visibility = "hidden"
    subtract.style.visibility = "hidden"
    cnt.style.visibility = "hidden"
    add.style.visibility = "hidden"
    option.style.visibility = "hidden"
    
    freeship.style.visibility = "hidden"
    plus.style.visibility = "hidden"
}


function stringNumberToInt(stringNumber){
    return stringNumber.replace(/,/g , '')
}