chrome.tabs.onActivated.addListener(activeInfo=> {
	chrome.tabs.get(activeInfo.tabId, async tab=>{
		if(!tab.url.includes('chess.com')) return;

		let tabs=await chrome.tabs.query({ active: true, currentWindow: true });
		chrome.tabs.sendMessage(tabs[0].id,{ tabInfo: tabs[0] });
	})
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab)=>{
	if(!tab.url.includes('chess.com')) return;

	let tabs=await chrome.tabs.query({ active: true, currentWindow: true });
	chrome.tabs.sendMessage(tabs[0].id,{ tabInfo: tabs[0] });
}); 