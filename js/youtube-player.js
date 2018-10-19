// Gets all divs with "youtube" class and:
// 1. Gets the corresponding thumbnail image through "embed" property, to show on the div without requesting the video itself to youtube servers.
// 2. Assynchronously appends the image to the div.
// 3. Adds click event to load the video iframe, making the request for full video only once user clicks.
//
// Div Properties:
// - embed: youtube video URL 
// - thumbnailquality: thumbnail quality (standard, medium, high, maximum)
//
// Atenttion for thumbnail-quality, be aware that not all youtube videos have thumbnails for all qualities available.

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
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + vid + "?rel=0&autoplay=1");

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