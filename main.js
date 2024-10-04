function changeText(){
    var firstName = document.getElementById('input1');
    var lastName = document.getElementById('input2');
    var fullName = document.getElementById('title');
    fullName.innerHTML = firstName.value + ' ' + lastName.value
}
