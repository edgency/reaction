$('#sidebar').affix({
      offset: {
        top: 100
      }
});

var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) - 50;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});