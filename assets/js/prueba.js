//Script de https://pokemondb.net/pokedex/all

$(function () {
	var $table = $('.data-table');
	// set up overlay
	$table.disableBlock();
	// set up table sorting
	$table.stupidtable();
	$('thead th:first-child', $table).click();

	$table.on('beforetablesort', function (event, data) {
		$this = $(this);
		// add overlay while sorting
		$this.disableBlock('on');
		// move blanks to bottom
		$this.stupidTableBlanks(data);
	});

	$table.on('aftertablesort', function (event, data) {
		if (usingLazyLoadFallback)
			lazyLoadImages();
		$(this).disableBlock('off');
	});
});
$(function () {
	// table filtering
	var $table = $('.data-table');
	$table.filtable({ controlPanel: $('.table-filters') });
	$table.on('aftertablefilter', function (event) {
		if (usingLazyLoadFallback)
			lazyLoadImages();
	});
});
