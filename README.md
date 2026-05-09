# emgovpower.github.io

This repository hosts a simple Trello Power-Up built for GitHub Pages.

## Features

- Adds a `Estimate Size` card button
- Opens a popup to save a size estimate for a Trello card
- Displays a badge on the card when an estimate exists

## Files

- `index.html` — entry point that loads the Trello Power-Up library and `client.js`
- `client.js` — Power-Up capability definitions
- `popup.html` — popup UI for saving estimates

## Deployment

1. Publish this repository as a GitHub Pages site.
2. In Trello Power-Up developer settings, point the Power-Up iframe URL to `https://<your-username>.github.io/popup.html`.
3. Use the Power-Up on a Trello board to open the estimate form and save card data.

## Notes

- The Power-Up uses Trello Storage to keep estimates on each card.
- The `card-badges` capability displays the saved estimate directly on the card.

