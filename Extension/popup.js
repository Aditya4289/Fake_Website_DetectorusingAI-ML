document.getElementById('detectButton').addEventListener('click', async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const response = await chrome.tabs.sendMessage(tab.id, { action: 'detectFakeWebsite' });

    console.log('Content script response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
});
