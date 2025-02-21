// Create the context menu item
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "li-activity",
    title: "Check user's recent activity",
    contexts: ["link"], // Appears only when clicking on a link
  });
});

// When clicking in the context menu item
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "li-activity" && info.linkUrl) {
    // If not a Linkedin's user, nothing happens
    if (!info.linkUrl.includes("linkedin.com/in/")) return;

    const user = info.linkUrl
      .split("?")[0]
      .replace("https://www.linkedin.com/in/", "");

    const newUrl = `https://www.linkedin.com/in/${user}/recent-activity/all/`;

    chrome.tabs.create({ url: newUrl });
  }
});
