# Youtube Performatic Player
This is a strategy that basically deceives the user into thinking it is a youtube player when it actually isn't, although you get basically the same behaviour, but reducing load time drastically. 

![Alt Text](https://github.com/danielmundim/performatic-youtube-player/blob/master/load-time.gif)

(Traditional youtube Iframe on the left and "fake" iframe on the right)

# How it Works
 Gets all divs with "youtube" class and:
 1. Gets the corresponding thumbnail image through "embed" property, to show on the div without requesting the video itself to youtube servers.
 2. Assynchronously appends the image to the div.
 3. Adds click event to load the video iframe, making the request for full video only once user clicks.

 div properties:
 - embed: youtube video URL 
 - thumbnailquality: thumbnail quality (standard, medium, high, maximum)
 
 Sample usage is in index.html file

 Atenttion for thumbnail-quality, be aware that not all youtube videos have thumbnails for all qualities available.

Improvements are welcome! :)
