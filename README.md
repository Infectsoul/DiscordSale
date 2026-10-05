**Language:** [<img width="25" alt="EN" src="https://github.com/user-attachments/assets/d70b720f-0cee-4cf7-b6ca-9446f352f6ea" English/>](README.md) <img width="11" alt="Image" src="https://github.com/user-attachments/assets/e4d334ba-8693-48b4-9f9c-47c423b5e9c9" /> [<img width="25" alt="BR" src="https://github.com/user-attachments/assets/c13fc723-432f-4815-82b8-59f9e9baf37d" />](README-pt-BR.md)

---
## About the extension:
This is a browser extension for the `sale-suggestions` channel on the Transformice server on Discord Web. It displays items separated by category, allows you to view the most-voted items and sort them by votes, name, or ID. It also includes a search bar to find items by name and a button to go directly to the corresponding message.

The extension also indicates whether you have already voted for an item and allows you to vote or remove your vote directly from the interface. Items that appear in the Weekly Sale Vote Results are highlighted.

Additionally, you can switch between EN, BR, and ES and choose between dark, light, or automatic themes. The automatic theme follows the current Discord theme.

https://github.com/user-attachments/assets/df8eb0ca-0118-4cc2-b325-cb1c51a77c05

---
## About permissions:
**webRequest:** allows `background.js` to monitor requests made by Discord and capture specific header fields. This data is required to make requests via `fetch`, such as retrieving messages and adding or removing reactions from messages.

**storage:** provides local storage for the extension on the user's computer. It is used to save the extension's preferences and settings, as well as to share the header fields captured by `background.js` with `content.js`.

---
## How to add the extension to Chrome and Edge:
https://github.com/user-attachments/assets/3e18e7c2-61eb-4549-b2fb-e130e48f69e3

---
## How to add the extension to Firefox:
https://github.com/user-attachments/assets/8f9860be-b86c-48ba-af2d-f4ae6c619158

Since the extension is not signed by Mozilla, it cannot be installed normally in Firefox. Without a valid signature, installation is limited to temporary debug mode.

### Firefox Developer Edition

An alternative is to use [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/). It allows you to disable the signature requirement and install the extension manually.

1. Open Firefox Developer Edition.
2. In the address bar, go to `about:config`.
3. Search for the following preference and change its value to `false`:

```text
xpinstall.signatures.required = false
```

4. Restart the browser.

After that, you will be able to install the extension normally without using debug mode.

https://github.com/user-attachments/assets/2ca08de9-2bcb-4c64-a13d-dbbeef33bd25
