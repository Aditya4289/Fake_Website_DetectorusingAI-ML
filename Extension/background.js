chrome.runtime.onInstalled.addListener(() => {
  console.log('Fake Website Detector Extension Installed');
});

chrome.tabs.onActivated.addListener(({ tabId }) => {
  chrome.tabs.sendMessage(tabId, { action: 'detectFakeWebsite' });
});
