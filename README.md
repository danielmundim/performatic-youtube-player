# Youtube Performatic Player
Seeking for creative ways to reduce page loading time, specifically for loading youtube videos, I found parts of codes throughout the internet and this is what I managed to put together to give the same experience as putting an youtube video on an iframe, but reducing the cost to almost 500% less than what would take for the browser to get information from youtube servers and render it to the calling page.

# How it Works
 Gets all divs with "youtube" class and:
 1. Gets the corresponding thumbnail image through "embed" property, to show on the div without requesting the video itself to youtube servers.
 2. Assynchronously appends the image to the div.
 3. Adds click event to load the video iframe, making the request for full video only once user clicks.

 Div Properties:
 - embed: youtube video URL 
 - thumbnailquality: thumbnail quality (standard, medium, high, maximum)

 Atenttion for thumbnail-quality, be aware that not all youtube videos have thumbnails for all qualities available.

Improvements are welcome! :)
