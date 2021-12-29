# Gallery hang room

## Instructions

To add a new image:

1. Open `index.html`
1. Copy the below code into the `container gallery-container`. Use existing ones as references.
1. Replace all the XX variables one by one.
1. Save the file
1. Test and tweak in the Developer Console
1. Commit and upload!

```
<div class="artwork-hang" style="left: XXpx; top: XXpx;" onclick="onArtworkClicked(event)">
        <div class="artwork-container">
                <img class="artwork" style="width: XXpx; height: XXpx; left: XXpx; top: XXpx;"
                src="../graphics/your-image-here">
                <img class="artwork-frame" style="width: XXpx;"
                src="../graphics/Frames/your-frame-here">
        </div>
        <div class="artwork-text">
                <h2>Title of artwork by Artist Name</h2>
                <p>Description of artwork</p>
        </div>
</div>
```
For example:

```
<div class="artwork-hang" style="left: 500px; top: 50px;" onclick="onArtworkClicked(event)">
        <div class="artwork-container">
                <img class="artwork" style="width: 185px; height: 320px; left: 30px; top: 30px;"
                src="http://placekitten.com/g/185/320">
                <img class="artwork-frame" style="width: 253px;"
                src="../graphics/Frames/Gold_4_Gold_Line.png">
        </div>
        <div class="artwork-text">
                <h2>Artwork #5</h2>
                <p>Artwork #5 is a beautiful work of art by a very complicated artist who is very smart and full of
                brains and creativity.</p>
        </div>
</div>
```
