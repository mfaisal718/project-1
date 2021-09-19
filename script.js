let rateData;

const $rate = $("#rates");
const $fireworks = $('#fireworks');
const $mainContent = $('main'); 

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

    $curr = $("#curr").val();
    console.log(rateData.data.rates.USD);
    console.log(rateData.data.rates)
    console.log(rateData.data.rates[$curr]);
    $rate.text(rateData.data.rates[$curr]);

}
$('form').on('submit', handleGetRate);