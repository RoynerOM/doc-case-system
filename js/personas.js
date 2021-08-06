document.addEventListener('DOMContentLoaded', () => {
    var modal = document.getElementById("Modal");
    var modal1 = document.getElementById("Modal1");
    //var modal2 = document.getElementById("Modal2");

    // Se obtiene la imagen y se agrega dentro del modal
    var img = document.getElementById("image");
    var img1 = document.getElementById("image1");
    //var img2 = document.getElementById("image2");

    var modalImg = document.getElementById("image-modal");
    var modalImg1 = document.getElementById("image-modal1");
    //var modalImg2 = document.getElementById("image-modal2");

    // Set obtiene el elemnento span
    var span = document.getElementsByClassName("close")[0];
    var span1 = document.getElementsByClassName("close")[1];
    //var span2 = document.getElementsByClassName("close")[2];


    function OpenModal() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    img.addEventListener("click", OpenModal)

    span.onclick = function () {
        modal.style.display = "none";

    }

    function OpenModal1() {
        modal1.style.display = "block";
        modalImg1.src = this.src;
    }

    img1.addEventListener("click", OpenModal1)

    span1.onclick = function () {
        modal1.style.display = "none";

    }
})