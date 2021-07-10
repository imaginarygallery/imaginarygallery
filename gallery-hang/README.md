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
<div class="artwork-container"
        style="left: XX1px; top: XX2px;
               width: XX3px; height: XX4px;">
    <img class="artwork" style="margin: XX5px XX6px;
            width: XX7px; height: XX8px;"
            src="http://XX9">
    <img class="artwork-frame"
            src="./XX10">
</div>
```
For example:

```
<div class="artwork-container"
        style="left: 500px; top: 50px;
            width: 319px; height: 406px;">
    <img class="artwork" style="margin: 60px 70px;
            width: 185px; height: 320px;"
            src="http://placekitten.com/g/185/320">
    <img class="artwork-frame"
            src="../styles/graphics/Frames/Gold_4_Gold_Line.png">
</div>
```
