chrome.runtime.onMessage.addListener(async (request,sender,sendResponse)=>{
	let { boardType }=await chrome.storage.sync.get(['boardType']);
	let board,imgURL,coordinateDark,coordinateLight;

	if(!boardType) boardType='Default';

	if(request.tabInfo.url.includes('chess.com/play/online') || request.tabInfo.url.includes('chess.com/play/arena')){
		board=document.querySelector("#board");
	}
	else if(request.tabInfo.url.includes('chess.com/play/computer')){
		board=document.querySelector("#board-vs-personalities");
	}
	else if(request.tabInfo.url.includes('chess.com/puzzles/rush')){
		board=document.querySelector("#board-board");
	}
	else if(request.tabInfo.url.includes('chess.com/analysis')){
		board=document.querySelector("#board-analysis-board");
	}
	else{
		board=document.querySelector("#board-single");
	}

	coordinateLight=document.querySelectorAll('.coordinate-light');
	coordinateDark=document.querySelectorAll('.coordinate-dark');

	switch(boardType){
		case 'Gray & White':
			imgURL=chrome.runtime.getURL('./imgs/graywhite.png');

			coordinateLight.forEach(coordinate=>{
				coordinate.style.fill='#827f7f';
			})
			coordinateDark.forEach(coordinate=>{
				coordinate.style.fill='#eeeed2';
			})
		break;
		case 'Brown & Cream':
			imgURL=chrome.runtime.getURL('./imgs/browncream.png');

			coordinateLight.forEach(coordinate=>{
				coordinate.style.fill='#a95a22';
			})
			coordinateDark.forEach(coordinate=>{
				coordinate.style.fill='#ffdb84';
			})
		break;
		case 'Red & White':
			imgURL=chrome.runtime.getURL('./imgs/redwhite.png');

			coordinateLight.forEach(coordinate=>{
				coordinate.style.fill='#ac302c';
			})
			coordinateDark.forEach(coordinate=>{
				coordinate.style.fill='#eeeed2';
			})
		break;
		case 'Football Chess':
			imgURL=chrome.runtime.getURL('./imgs/footballchess.png');

			coordinateLight.forEach(coordinate=>{
				coordinate.style.fill='#fff';
			})
			coordinateDark.forEach(coordinate=>{
				coordinate.style.fill='#edeed1';
			})
		break;
		case 'Blue & Sky':
			imgURL=chrome.runtime.getURL('./imgs/bluesky.png');

			coordinateLight.forEach(coordinate=>{
				coordinate.style.fill='#3d7ad5';
			})
			coordinateDark.forEach(coordinate=>{
				coordinate.style.fill='#b2ccff';
			})
		break;
		case 'Rainbow GIF':
			imgURL=chrome.runtime.getURL('./imgs/rainbowgif.gif');

			coordinateLight.forEach(coordinate=>{
				coordinate.style.fill='#827f7f';
			})
			coordinateDark.forEach(coordinate=>{
				coordinate.style.fill='#eeeed2';
			})
		break;
		default:
			imgURL=chrome.runtime.getURL('./imgs/default.png');

			coordinateLight.forEach(coordinate=>{
				coordinate.style.fill='#769656';
			})
			coordinateDark.forEach(coordinate=>{
				coordinate.style.fill='#EEEED2';
			})
	}

	board.style.background=`url("${imgURL}")`;
	board.style.backgroundSize='cover';
	board.style.backgroundPosition='center';
	board.style.backgroundRepeat='no-repeat';
})