const boards=document.querySelectorAll('img');
let boardType='Default';

chrome.storage.sync.get(['boardType'],result=>{
	if(!result.boardType) {
		handleActiveState();
		return;
	}

	boardType=result.boardType;
	handleActiveState();
})

boards.forEach(board=>{
	board.addEventListener('click',async ()=>{
		boardType=board.nextElementSibling.innerText;
		handleActiveState();

		chrome.storage.sync.set({ boardType });

		tabs=await chrome.tabs.query({ active: true, currentWindow: true });
		if(tabs[0].url.includes('chess.com')) chrome.tabs.sendMessage(tabs[0].id,{ tabInfo: tabs[0] });
	})
})

const handleActiveState=()=>{
	boards.forEach(board=>board.parentElement.className='ind-board');

	boards.forEach(board=>{
		if(board.nextElementSibling.innerText==boardType){
			board.parentElement.className='ind-board active';
		}
	});
}