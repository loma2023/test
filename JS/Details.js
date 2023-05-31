
fetch('https://script.google.com/macros/s/AKfycbwM2Wj1suXYuw0mz9u_bn20jRWqA-X8n0FkHaWf5foknx4IgiyaF2_ZHKGxbVmvfzAMqw/exec')
    .then((response) => response.json())
    .then((row) => Data(row))

function Data(row) {
    let element = "";
    let id = localStorage.getItem('Details');
    let colum = row[id];
        element += `
            <div class="right">
                <h1>التفاصيل</h1>
                <table>
                    <tr>
                        <td>نوع العقار</td>
                        <td>${colum[0]}</td>
                    </tr>
                    <tr>
                        <td>السعر</td>
                        <td>${colum[1]}</td>
                    </tr>
                    <tr>
                        <td>المساحة</td>
                        <td>${colum[2]} م</td>
                    </tr>
                    <tr>
                        <td>الدور</td>
                        <td>${colum[3]}</td>
                    </tr>
                    <tr>
                        <td>عدد الغرف</td>
                        <td>${colum[4]}</td>
                    </tr>
                    <tr>
                        <td>عدد الحمامات</td>
                        <td>${colum[5]}</td>
                    </tr>
                    <tr>
                        <td>العنوان</td>
                        <td>${colum[6]}</td>
                    </tr>
                    <tr>
                        <td>تفاصيل اخري</td>
                        <td>${colum[7]}</td>
                    </tr>
                </table>
                <div class="contact">
                    <a href="tel:${colum[8]}"><ion-icon name="call-sharp"></ion-icon> اتصل </a>
                    <a href="https://wa.me/${colum[9]}"><ion-icon name="logo-whatsapp"></ion-icon> واتساب </a>
                </div>
            </div>
            <div class="left">
                <img class="main_img" src="${colum[10]}">
                <div class="other_img">
                    <img onclick="chang_img(src)" src="${colum[10]}">
                    <img onclick="chang_img(src)" src="${colum[11]}">
                    <img onclick="chang_img(src)" src="${colum[12]}">
                    <img onclick="chang_img(src)" src="${colum[13]}">
                    <img onclick="chang_img(src)" src="${colum[14]}">
                </div>

            </div>`
    
    document.querySelector(".container").innerHTML = element

}

function chang_img(src) {
        let big_img = document.querySelector(".main_img")
        big_img.src = src
}
