window.onload = function(){
    var $ = function ( selector ) {
        return document.querySelector( selector );  
    };

    var update = function() {
        var pcLicenses = $(".pcLicenses-range").value;
        var consoleLicenses = $(".consoleLicenses-range").value;
        var savingsCost = "";
        if (pcLicenses < 35) {
            var savingsCost = 6;
        } else if ((pcLicenses < 70) && (pcLicenses > 34)) {
            var savingsCost = 5;
        } else if ((pcLicenses < 201) && (pcLicenses > 69)) {
            var savingsCost = 4.8;
        }
        var consoleCost = 3;
        var normalCost = 6;
        var consoleTotal = (consoleCost * consoleLicenses);
        var total = ((savingsCost * pcLicenses) + consoleTotal);
        var savingsTotal = ((normalCost * pcLicenses) - total + consoleTotal);
        $pcLicenses.innerHTML = pcLicenses + ' PC licenses';
        $consoleLicenses.innerHTML = consoleLicenses + ' console licenses';
        $total.innerHTML = '<div class="totalPriceLabel">Price per month</div><div class="totalPrice">$' + total.toFixed(2) + '</div>';
        $savingsTotal.innerHTML = '<div class="savingsTotalLabel">Savings per month</div><div class="savingsTotal">$' + savingsTotal.toFixed(2) + '</div>';

    };

    var $range = $('.pcLicenses-range');
    var $pcLicenses = $('.calculator-pcLicenses');
    var $consoleLicenses = $('.calculator-consoleLicenses');
    var $total = $('.calculator-total');
    var $savingsTotal = $('.savings-total');
    update();
    $('input.pcLicenses-range[type=range]').addEventListener('input', update);
    $('input.pcLicenses-range[type=range]').addEventListener('change', update);
    $('input.consoleLicenses-range[type=range]').addEventListener('input', update);
    $('input.consoleLicenses-range[type=range]').addEventListener('change', update);
};