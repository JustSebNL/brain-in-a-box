import { activeloop, modal, supertokens } from './utils';
import { CommentSchema, WebsiteSchema, VectorSchema } from './schemas';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'addComment',
    title: 'Add Comment',
    contexts: ['selection']
  });

  chrome.contextMenus.create({
    id: 'addWebsite',
    title: 'Add Website',
    contexts: ['page']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'addComment') {
    addComment(info.selectionText);
  } else if (info.menuItemId === 'addWebsite') {
    addWebsite(tab.url);
  }
});

chrome.omnibox.onInputEntered.addListener((text) => {
  searchData(text);
});

function addComment(text) {
  const comment = new CommentSchema({ text });
  saveToActiveloop(comment);
}

function addWebsite(url) {
  chrome.pageCapture.saveAsMHTML({ tabId: chrome.tabs.TAB_ID_NONE }, (mhtmlData) => {
    const website = new WebsiteSchema({ url, mhtmlData });
    saveToActiveloop(website);
  });
}

function searchData(query) {
  const vector = new VectorSchema({ query });
  activeloop.search(vector);
}

function saveToActiveloop(data) {
  activeloop.save(data);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'ADD_COMMENT') {
    addComment(request.data);
  } else if (request.message === 'ADD_WEBSITE') {
    addWebsite(request.data);
  } else if (request.message === 'SEARCH_DATA') {
    searchData(request.data);
  }
});

chrome.runtime.onStartup.addListener(() => {
  loginWithSupertokens();
});

function loginWithSupertokens() {
  supertokens.init();
}