$('#sidebar').affix({
      offset: {
        top: 100
      }
});

var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 5;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});