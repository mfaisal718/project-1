let rateData;

const $rate = $("#rates");

function handleGetRate (event) {
    event.preventDefault();

    $crypto = $("#crypto");
$.ajax({
    url: `https://api.coinbase.com/v2/exchange-rates?currency=${$crypto.val()}`
}).then(
    function(data) {
        rateData = data;
        render();
    }, 
    function(error) {
        console.log("oops something didn't work" , error)
    

        }
    )
};

function render() {
    $curr = $("#curr");


    console.log($(rateData));
    console.log(rateData.data.rates)
    $rate.text(rateData.data.rates);
}
$('form').on('submit', handleGetRate);