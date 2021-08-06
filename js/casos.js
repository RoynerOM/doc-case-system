document.addEventListener('DOMContentLoaded', () => {
    var modal = document.getElementById("Modal");
    var modal1 = document.getElementById("Modal1");
    var modal2 = document.getElementById("Modal2");
    var modal3 = document.getElementById("Modal3");

    // Se obtiene la imagen y se agrega dentro del modal
    var img = document.getElementById("image");
    var img1 = document.getElementById("image1");
    var img2 = document.getElementById("image2");
    var img3 = document.getElementById("image3");

    var modalImg = document.getElementById("image-modal");
    var modalImg1 = document.getElementById("image-modal1");
    var modalImg2 = document.getElementById("image-modal2");
    var modalImg3 = document.getElementById("image-modal3");

    // Set obtiene el elemnento span
    var span = document.getElementsByClassName("close")[0];
    var span1 = document.getElementsByClassName("close")[1];
    var span2 = document.getElementsByClassName("close")[2];
    var span3 = document.getElementsByClassName("close")[3];

    function OpenModal() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    img.addEventListener("click", OpenModal)

    function OpenModal1() {
        modal1.style.display = "block";
        modalImg1.src = this.src;
    }

    img1.addEventListener("click", OpenModal1)

    function OpenModal2() {
        modal2.style.display = "block";
        modalImg2.src = this.src;
    }

    img2.addEventListener("click", OpenModal1)

    function OpenModal3() {
        modal3.style.display = "block";
        modalImg3.src = this.src;
    }

    img3.addEventListener("click", OpenModal3)

    // Cuando el usuario da click en el <span> (x),se cierra el moda
    span.onclick = function () {
        modal.style.display = "none";
    }
    span1.onclick = function () {
        modal1.style.display = "none";
    }

    span2.onclick = function () {
        modal2.style.display = "none";
    }

    span3.onclick = function () {
        modal3.style.display = "none";
    }

    console.log(document.getElementById("close"))

    /*Convertir html a PDF*/
    document.getElementById("btn-pdf").addEventListener('click', () => {
        location.href = 'personas.html'

    })
})