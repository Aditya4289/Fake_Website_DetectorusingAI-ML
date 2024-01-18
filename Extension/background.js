// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log('Fake Website Detector Extension Installed');
});

chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.sendMessage(tab.tabId, { action: 'detectFakeWebsite' });
});
