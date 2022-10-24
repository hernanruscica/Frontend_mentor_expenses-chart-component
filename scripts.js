console.log("from js");

/*DOM elements variables */

$d = document;
const $bars = $d.getElementsByClassName("expenses__chart__main__day__bar");
const $monthTotal = $d.getElementById("month-total");
/*console.log($bars);
console.log($monthTotal);*/

fetch('data.json')
    .then((response) => response.json())
    .then((json) => drawChartData(json));

const drawChartData = (dataArray) => {
    /*console.log(dataArray);*/
    let barsQuantity = $bars.length;
    let amountCounter = 0;
    let indexOfGreater = 0, valueOfGreater = 0;
    for (index = 0; index < barsQuantity; index++){        
        
        let $bar = $bars[index];
        let $barName = $bars[index].nextElementSibling ;
        let dataName = dataArray[index]["day"];
        let dataValue = dataArray[index]["amount"];
        let barScale = 3;
        /*console.log($bar, $barName);
        console.log(dataName, dataValue);*/
        $barName.innerHTML = "";
        $barName.innerHTML = dataName;
        $bar.setAttribute("style", `height: ${(dataValue*barScale).toFixed(0)}px`);
        /*$bar.setAttribute("data-value", `${dataValue}`);*/
        $bar.previousElementSibling.innerHTML = "";
        $bar.previousElementSibling.innerHTML = dataValue;
        amountCounter += dataValue;        
        if (dataValue > valueOfGreater){
            valueOfGreater = dataValue;
            indexOfGreater = index;
        }
    }
    /*console.log(amountCounter);   
    console.log(indexOfGreater, valueOfGreater); 
    console.log($bars[indexOfGreater]);*/
    $monthTotal.innerHTML = "";
    $monthTotal.innerHTML = `$${amountCounter.toFixed(2)}`;
    $bars[indexOfGreater].classList.add("larger");
}
$d.addEventListener('mouseover', (e) => {    
    if (e.target.id.includes('bar')){
       /*console.log(e.target.previousElementSibling); */
       const $labelAmount = e.target.previousElementSibling;
       $labelAmount.classList.remove('hide');
    }
})

$d.addEventListener('mouseout', (e) => {    
    if (e.target.id.includes('bar')){
       /*console.log(e.target.previousElementSibling); */
       const $labelAmount = e.target.previousElementSibling;
       $labelAmount.classList.add('hide');
    }
})