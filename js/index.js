const cartArry = [];

function display(cartPlayer) {
    // console.log(cartPlayer);

    const tableBody = document.getElementById('cart-Player');
    tableBody.innerHTML = '';

    for (let i = 0; i < cartPlayer.length; i++) {
        const plyerSelect = cartArry[i];
        // console.log(plyerSelect)

        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${i + 1}</td>
         <td>${plyerSelect}</td>
        `;
        tableBody.appendChild(tr);
    }
}

function addToCart(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText;

    cartArry.push(playerName);

    display(cartArry);

    const totalSelectedPlayer = document.getElementById('total-selected-player').innerText = cartArry.length;
    if (cartArry.length > 5) {
        alert('Your Select is over');
        return;

    }
}

document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerElement = document.getElementById('per-player-cost');
    const playerTotalElement = document.getElementById('total-player-cost');
    if (perPlayerElement.value == '') {
        alert('Input Number')
        return;
    }
    else {

        const perPlAmount = parseFloat(perPlayerElement.value)

        playerTotalElement.value = perPlAmount * 5;
    }


})
document.getElementById('calculate-total').addEventListener('click', function () {
    const mangerSaleryElement = document.getElementById('manager-slary');
    const coachSaleryElement = document.getElementById('coach-slary');
    const playerTotalElement = document.getElementById('total-player-cost');
    const Totalelement = document.getElementById('total');
    if (mangerSaleryElement.value == "" || coachSaleryElement.value == "" || playerTotalElement.value == '') {
        alert('Insert Number')
        return;
    }
    else {
        const mangerAmount = parseFloat(mangerSaleryElement.value);
        const coachAmount = parseFloat(coachSaleryElement.value);
        const playerTotalAmount = parseFloat(playerTotalElement.value)
        Totalelement.value = mangerAmount + coachAmount + playerTotalAmount;

    }




})