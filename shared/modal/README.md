# Modal

Tool for adding modals to a page.

## How to use

1. Add the modal itself. This should live right at the end of your page, before the `</body>` tag. It should look like this:

```
    <div id="ModalExample" class="modal closed">
        <div class="modal-content">
            <div class="pic" id="pic1"></div>
            <div class="description">
                <p>Text goes here</p>
            </div>
            <span class="close" data-modal-close="ModalExample">&times;</span>
        </div>
    </div>

```

1. Change the modal ID to a name of your choice. It has to start with "Modal" and be unique within the page. In other words, replace "Example" with something else.
1. Add your desired content to the `modal-content` element. For instance, a close up of the gallery image, and a description/onward links. Remember to leave in the close button.
1. Figure out which element you want to use as your open trigger. Add `data-modal-open=ModalWhateverIdYouPicked` to its HTML attributes.
1. Test and you're good to go!
