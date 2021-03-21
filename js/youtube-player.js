document.addEventListener("DOMContentLoaded", function(event) { 
    var youtube = document.querySelectorAll(".youtube");

    // Iterates all divs found with class "youtube"
    for (var i = 0; i < youtube.length; i++) {
        var vid = getVideoId(youtube[i].dataset.embed);
        var quality = youtube[i].dataset.thumbnailquality;
        var source = getThumbnail(vid, quality);

        // Appends image thumbnail on div
        var image = new Image();
        image.src = source;;
        image.className += getImageClassName(youtube[i].dataset.thumbnailquality);
        image.addEventListener("load", function () {
            youtube[i].appendChild(image);
        }(i));
        
        // Appends play button fake on div
        var playbutton = document.createElement("div");
        playbutton.className += 'play-button';
        youtube[i].appendChild(playbutton);

        // Adds event to load iframe with full video once user clicks on the div
        youtube[i].addEventListener("click", function (event) {

            event.preventDefault();

            var iframe = document.createElement("iframe");

            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + getVideoId(this.dataset.embed) + "?rel=0&autoplay=1");
            iframe.setAttribute("allow", "autoplay");

            this.innerHTML = "";
            this.appendChild(iframe);
        });
    }
});

function getThumbnail(embed, quality) {
    return "https://img.youtube.com/vi/" + embed + "/" + quality + ".jpg";
}

function getImageClassName(tq) {
    return (tq == "medium") ? "small" : "";
}

function getVideoId(url) {
    // youtube videos often come in various possible url combinations, this regex makes sure that the url will be correctly interpreted on it's various possible formats.
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}
