
function selectPlayer(element) {
    const getNameElement = element.parentNode.parentNode.children[0].innerHTML;
    console.log(getNameElement);
    const listElement = document.getElementById('ol')
    const name = listElement.children
    if (name.length <= 4) {
        const li = document.createElement('li');
        li.innerHTML = `
        ${getNameElement}
        `;
        listElement.appendChild(li);
        // const disableButton = element.parentNode.children[1];
        element.disabled = true


    }
    else {
        alert("You have selected maximum  players")
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