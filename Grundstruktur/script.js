let names = ['Yannick Vaterlaus', 'Alessandro Falzone'];
let phoneNumbers = ['0763418870', '0763418870'];
load()

function render(){
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `<h1> My Contacts </h1>`;
    content.innerHTML += ` 
    <div>
        <input placeholder="Name" id="name">
        <input placeholder="Telefon" id="phone"></input>
        <button onclick="addContact()">Hinzufügen</button>
    </div>
    `;

    for(let i = 0; i < names.length; i++){
        const name = names[i];
        const phoneNumber = phoneNumbers[i];

        content.innerHTML += `
            <div class="card">
                <b>Name: </b>${name}<br>
                <b>Telefon: </b>${phoneNumber}<br>
                <button onclick="deleteContact(${i})">Löschen</button>
            </div> 
        `;

    }
}
function addContact(){
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');

    names.push(name.value);
    phoneNumbers.push(phone.value);

    render();
    save();

    console.log('Läuft');
}
function deleteContact(i) {
    names.splice(i,1);
    phoneNumbers.splice(i,1);
    render();
    save();
}
function save(){
    let namesAsText = JSON.stringify(names); /* erster Schritt für Localstorage*/
    let phoneNumbersAsText = JSON.stringify(phoneNumbers); 

    localStorage.setItem('names', namesAsText); /* names ist Key und namesAsText Value*/
    localStorage.setItem('phoneNumbers', phoneNumbersAsText); 
}
function load(){
    let namesAsText = localStorage.getItem('names');
    let phoneNumbersAsText = localStorage.getItem('phoneNumbers');
    if(namesAsText && phoneNumbersAsText){
        names = JSON.parse(namesAsText); 
        phoneNumbers = JSON.parse(phoneNumbersAsText);
    } 
}