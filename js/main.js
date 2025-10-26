

function showSideBar() {
    $(".sidebar").css("display", "flex");
}

function hideSideBar() {
    $(".sidebar").css("display", "none");
}


if ($(".sidebar").css() === "display: none") {
    document.reload();
}



