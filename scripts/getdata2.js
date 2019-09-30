function dl(val)
{
	setTimeout(function()
	{		
		var uri = "https://p.eagate.573.jp/game/dan/1st/json/pdata_getdata.html?service_kind=" + val + "&pdata_kind=" + val;
		console.log(uri);
		var name = val + ".dat"; // json
		var L = document.createElement("a");
		L.download = name;
		L.href = uri;
		document.body.appendChild(L);
		L.click();
		document.body.removeChild(L);
		delete L;
	},
	500);
}

if (window.location.hostname != "p.eagate.573.jp")
{
	alert("e-amusement 웹사이트에서 스크립트를 다시 실행하세요.\ne-amusementサイトでスクリプトを再実行してください。\nPlease retry running this script at e-amusement website.\n請在e-amusement網站上重新運行此腳本。\n请在e-amusement网站上重新运行此脚本。");
	window.location.href = "https://p.eagate.573.jp";
}	
else
	for (val of ["dancer_info", "music_data", "play_hist"])	
		dl(val);
	// window.location.href = "https://dancerush-info.herokuapp.com/update"; // 커스텀 도메인 달면 바꿔야지