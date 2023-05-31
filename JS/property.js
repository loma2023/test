fetch('https://script.google.com/macros/s/AKfycbwM2Wj1suXYuw0mz9u_bn20jRWqA-X8n0FkHaWf5foknx4IgiyaF2_ZHKGxbVmvfzAMqw/exec')
    .then((response) => response.json())
    .then((row) => Data(row))

function Data(row) {
    let element = "";
    let colum = "";
    for (let i = 1; i < row.length; i++) {
        colum = row[i];
        element += `
        <div class="card">
        <img src="${colum[10]}">

        <div class="details">
        <h1> ${colum[1]} <ion-icon name="cash-outline"></ion-icon></h1>
        <h2><ion-icon name="flag"></ion-icon> ${colum[7]} </h2>
        <h2><ion-icon name="location-sharp"></ion-icon><span> ${colum[6]} </span></h3>
        <div>
            <h2><ion-icon name="expand-outline"></ion-icon> المساحه : <span> ${colum[2]} م </span></h2>
            <h2><ion-icon name="bed"></ion-icon> الغرف : <span> ${colum[4]} </span></h2>
        </div>
        </div>

        <div class="contact">
        <a href="tel:${colum[8]}"><ion-icon name="call-sharp"></ion-icon> اتصل </a>
        <a href="https://wa.me/${colum[9]}"><ion-icon name="logo-whatsapp"></ion-icon> واتساب </a>
        <a onclick="Details(id)" id="${i}" class="btn_details"><ion-icon name="ellipsis-vertical"></ion-icon> تفاصيل </a>
        </div>
        </div>`
    }
    document.querySelector(".container").innerHTML = element

}
function Details(id) {
    localStorage.setItem('Details', JSON.stringify(parseFloat(id)))
    location.href = "details.html"
}
