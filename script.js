document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("seniorFit").onclick = function () {
        changePage("seniorFit");
    }

    document.getElementById("mediaMarkt").onclick = function () {
        changePage("mediaMarkt");
    }

    document.getElementById("CV").onclick = function () {
        changePage("CV");
    }

    function changePage(id) {
        var url = id + ".html";
        window.location.href = url;
    }

});
