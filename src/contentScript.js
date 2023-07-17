import { activeloop, modal, supertokens } from '../utils';
import { CommentSchema, WebsiteSchema } from '../schemas';

const contextMenuId = 'saveToBrainInABox';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: contextMenuId,
    title: 'Save to Brain in a Box',
    contexts: ['selection', 'page'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === contextMenuId) {
    if (info.selectionText) {
      addComment(info.selectionText, tab);
    } else {
      addWebsite(tab);
    }
  }
});

function addComment(text, tab) {
  const comment = new CommentSchema({ text, url: tab.url });
  saveToActiveloop(comment);
}

function addWebsite(tab) {
  chrome.pageCapture.saveAsMHTML({ tabId: tab.id }, (mhtmlData) => {
    const website = new WebsiteSchema({ url: tab.url, mhtml: mhtmlData });
    saveToActiveloop(website);
  });
}

function saveToActiveloop(data) {
  activeloop.save(data)
    .then(() => {
      chrome.runtime.sendMessage({ message: 'Data saved successfully' });
    })
    .catch((error) => {
      console.error('Error saving data to Activeloop:', error);
    });
}

chrome.omnibox.onInputEntered.addListener((text) => {
  searchData(text);
});

function searchData(query) {
  activeloop.search(query)
    .then((results) => {
      chrome.runtime.sendMessage({ message: 'SEARCH_DATA', data: results });
    })
    .catch((error) => {
      console.error('Error searching data in Activeloop:', error);
    });
}