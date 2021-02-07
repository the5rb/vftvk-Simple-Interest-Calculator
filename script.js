

function compute()
{
    /* principal amount number validation - checks for words also */
    principal = document.getElementById("principal");
    if (isNaN(principal.value) || principal.value == 0 || principal.value < 0){
        alert('Enter a positive number')
        return
    }
    else {
        principal = document.getElementById("principal").value;
    }
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate / 100;
    /* getting the current year adn adding selected number of years */
    yearinfuture = new Date().getFullYear() + parseInt(years);
    result = document.getElementById('result');
    /* output to document with linebreaks and highlit mark tags for js elements */
    result.innerHTML = 'If you deposit ' + '<mark>' + principal + '</mark>' + '<br />' + 'at an interest rate of ' + '<mark>' + rate + '</mark>' + '<br />' + 'You will receive an amount of ' + '<mark>' + interest + '</mark>' + '<br />' + 'in the year ' + '<mark>' + yearinfuture + '</ mark>'
}

/* function to read range and display it in span tag */
function updateSpan(val) {
	rate = document.getElementById("rate").value
    spanupdate = document.getElementById('adjSpan')
    spanupdate.innerHTML = val
    rateval = parseFloat(val)
}
