function doSomething(event){
	r=event.target;
	//event.target.style.background="0000FF";
	if (r.firstElementChild!==null){
		r.firstElementChild.style.backgroundColor=getRandomColor();
		//console.log(r.firstElementChild);
	}
	else if(r.nextElementSibling!==null){
		r.nextElementSibling.style.backgroundColor=getRandomColor();
		//console.log(r.nextElementSibling);
	}
	else {
		while(r.parentElement.nextElementSibling==null&&r.parentElement!==document.body){
			r=r.parentElement;
		}
		if(r.parentElement.nextElementSibling!==null){
				r.parentElement.nextElementSibling.style.backgroundColor=getRandomColor();
				console.log(r.nextElementSibling);
		}
		else{
				document.body.children[1].style.backgroundColor=getRandomColor();
				console.log(document.body.children[1]);
		}
	}
}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Javascript method for fading back to white
	
