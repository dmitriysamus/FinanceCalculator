function onButtonClicked() {

    let money = document.getElementById("sum").value
    let rate = document.getElementById("rate").value
    let years = document.getElementById("years").value

    if (parseInt(money) < 50000) {
        alert("Внимание!\n\nМинимальная сумма на момент открытия 50 000 рублей")
    }

    let sum = parseInt(money) + parseInt(money) * (parseFloat(rate) / 100) * parseInt(years)

    if (!sum || parseInt(rate) <= 0 || parseInt(years) <= 0) {
        sum = ''
        alert("Внимание!\n\nНеверный формат данных.\nВведите положительное число")
    }

    return sum
}