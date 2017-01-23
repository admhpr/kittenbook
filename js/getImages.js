
function getImages() {
var images = document.querySelectorAll('div.userContentWrapper img');

for ( var i = 0; i < images.length; i++ ) {
	console.log(images[i].src);

	}

	return images;
}

var images = getImages();