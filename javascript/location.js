window.onload = function () {
    var locations = document.getElementsByClassName("location");
    // locations.Classlist.add('.location2');

    // for (var i = 0; i < locations.length; i++) {
    //     locations[i].style.transform = "translateX(25vw)";
    // }

    setTimeout(function () {
        for (var i = 0; i < locations.length; i++) {
            locations[i].style.transform = "translateX(0vw)";
        }
    }, 500);
}
