const fakeWebsites = [
  'pilosaleltd.com',
  'piloltd.com',
  'amazonstorepro.com',
  'anhbhau.shop',
  'shoepublic.com',
  'outdoorbest.store',
  'tiffanycoshop.com',
  'omitages.com',
  'moziep.com',
  'morrity.com',
  'myfaceboxer.com',
  'halaboommall.com',
];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'detectFakeWebsite') {
    const isFake = isFakeWebsite(window.location.hostname);
    alert(isFake ? 'This website may be fake!' : 'This website seems legitimate.');
    sendResponse({ result: isFake });
  }
});

function isFakeWebsite(hostname) {
  // for checking the host name
  return fakeWebsites.some(fakeWebsite => new RegExp(fakeWebsite, 'i').test(hostname));
}
