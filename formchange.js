function abc() {
    $(weddingimage)
            .removeClass('col-md-12')
            .addClass('col-md-8');
        
};
function def() {
	$(thumb)
    		.animate({
    			opacity: 1,
    			},
    			2000, function() {
    			/* stuff to do after animation is complete */
    		});
    	};

function scroll() {
	$(breakhere)
			.scrollTop(0);
};

$(window).scroll(function (event){
	scroll();
	abc();
	setTimeout(def, 1000);
});