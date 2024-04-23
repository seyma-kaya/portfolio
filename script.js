document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("seniorFit").onclick = function () {
        changePage("seniorFit");
    }

    document.getElementById("mediaMarkt").onclick = function () {
        changePage("mediaMarkt");
    }

    function changePage(id) {
        var url = id + ".html";
        window.location.href = url;
    }

});
