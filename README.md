# Imaginary Gallery

## Getting set up

1. Install [node and npm](https://nodejs.org/en/download/) and [Visual Studio Code](https://code.visualstudio.com/)
1. Clone this repository using Git ([quick refresher if you need it](https://guides.github.com/activities/hello-world/))
1. Open VS Code and hit "Open Folder" > select this folder
1. Press Ctrl+' or Terminal > New Terminal to open a terminal window.
1. Run `npm install --global http-server` (or `npm i -g http-server`)
1. Run `http-server`. If you get an error message like "http-server.ps1 cannot be loaded because running scripts is disabled on this system", try opening a Bash terminal window instead of a Powershell one.

## Development

1. Run `http-server`
1. Visit http://localhost:8080/ in your browser. You should see the homepage
1. Make changes to the files, save them, press Refresh to see them in the browser
1. When you're ready, commit your files using Git. Read over your changes as you commit them to check you're not commiting any files you shouldn't be, especially any with passwords or secrets in them.
1. Push to a feature branch or fork and make a Pull Request on Github to get your changes added to the site.

## Adding a new gallery room

1. Create a new folder called the name of the room. It should have dashes `-` instead of spaces or punctuation. This will be the URL the page will appear at.
1. Add an index.html file to the folder, plus any other room-specific CSS , JS, images, other assets.
1. Consider adding a file called README.md to the folder with instructions on how to add content to the room. For instance, how do you add a new painting?

## Other hints and tips

Some specific rooms have guides in their respective folders READMEs.

## Contributing

Thanks for your interest in contributing to the Imaginary Gallery! We're still in active development so watch this space for more soon.
