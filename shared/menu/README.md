# Menu

## Instructions

1. Copy the below code into your web page at the very top, right below `<body>`:
```
<link rel="stylesheet" type="text/css" href="/shared/menu/menu.css">
<div id="menu" class="closed">
    <button id="open-menu-button" onclick="toggleMenu(event);">
        <img id="open-menu-button-image" src="/shared/menu/Logo.gif" height=90>
        <img id="close-menu-button-image" src="/shared/menu/Logo-to-Cross-onetime.gif" height=90 hidden>
        <span id="open-menu-button-text" class="visually-hidden">Open Menu</span>
    </button>
    <div class="menu-content">
        <ul class="menu-list">
            <li><a href="/cave.html">Explore</a></li>
            <li><a href="/map.html">Map</a></li>
            <li><a href="#">What's on</a></li>
            <li><a href="/about.html">About</a></li>
        </ul>	
    </div>
</div>
<script type="text/javascript" src="/shared/menu/menu.js"></script>

```
2. That's it!

## Making changes to menu

Add new `<li>` items as you want. Go through all the existing rooms which have menus in them and replace the code there with your new code.

Be sure to make all the hrefs relative to the root folder. That means they should all start with a "/". This will mean the menu works in all rooms, regardless of where the room is (in a subfolder, or a subfolder of a subfolder, or whatever).

## Gotchas

Don't put multiple menus in the same page, they'll all break.
