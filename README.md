# Chrome Extension - LinkedIn User's Recent Activity

This Chrome extension adds a context menu option when you right-click on a link. If the link is a LinkedIn profile URL, it will open a new tab showing the user's recent activity.

The target user won't be notified of your visit, as this is not their profile view.

## Features

- **Context menu option** available only when clicking on a LinkedIn profile URL (e.g., `linkedin.com/in/...`).
- Opens the user's **recent activity** page on LinkedIn, based on the profile link.
- The new tab will show the recent activity feed of the user (e.g., `https://www.linkedin.com/in/{user}/recent-activity/all/`).

## Installation

Install the extension from the store:

- Brave Store:
- Chrome Store:

## Installation in Dev Mode

1. Download the extension files or clone them from the repository.
2. Open **Chrome** and go to **Extensions** (`chrome://extensions/`).
3. Enable **Developer Mode** in the top right corner.
4. Click on **Load unpacked** and select the folder containing the extension files.
5. The extension should now be installed and active.

## Usage

1. Go to linkedin.com.
2. Right-click on a user link.
3. You will see an option in the context menu that says **"Check user's recent activity"**.
4. If this is a valid link (i.e. it starts with `linkedin.com/in/...`), a new tab will open showing the recent activity from that user.
5. If not, the context menu hides.

## Project Structure

The extension consists of the following files:

- `manifest.json`: Extension configuration, permissions, and details.
- `background.js`: Extension logic that handles the context menu creation and new tab opening.
- `icon.png`: An icon for the extension store, the browser nav bar and the context menu.
- `README.md`: This documentation file.
- `LICENSE`: The license file.

## Contributing

If you would like to contribute to improving this extension, you can follow these steps:

1. Fork this repository.
2. Create a branch for your new feature (`git checkout -b new-feature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push your changes (`git push origin new-feature`).
5. Create a pull request.

## License

This extension is licensed under the **GNU General Public License (GPL) Version 3**.

You can freely redistribute and modify the code under the terms of this license. For more details, see the [LICENSE](LICENSE) file.

## Contact

Sorry, no **issue** will be checked. But you can contribute if you want.
