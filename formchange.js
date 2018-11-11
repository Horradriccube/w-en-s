function makeSmaller() {
    $(weddingimage)
            .removeClass('col-sm-12')
            .addClass('col-sm-8');
        
};
function makeBigger() {
    $(weddingimage)
            .removeClass('col-md-8')
            .addClass('col-md-12');
        
};

function resize() {

}
function showTiles() {
	$(thumb)
    		.animate({
    			opacity: 1,
    			},
    			2000, function() {
    			/* stuff to do after animation is complete */
    		});
    	};


function hitTop() {
    var elmt = document.getElementById("myBody"); 
    var y = elmt.scrollTop;
    if(y <= 0) {
        return true;
    };
    //document.getElementById ("yValue").innerHTML = "y value: " + y;
};

$(window).scroll(function (event){
    if(hitTop==true){
        makeBigger();
    }
    else {
        makeSmaller();
    }
	setTimeout(showTiles, 1000);
});