$(document).ready(function(){
	$('#hide-collapse').bind('click',function(e){
		hideFilters('span12','span3','hide-collapse',4);
	});

	$('#show-collapse').bind('click',function(e){
		showFilters('span9','span4','show-collapse',3,'hide-collapse');
	});
});

function hideFilters(catalogClass,productClass,elementId,perRow){
	$('#' + elementId).parents('[class*="span"]').hide('fast');
	$('#' + elementId).parents('[class*="span"]').next('[class*="span"]').animate({
		opacity: '0',
		speed:'fast',
	},function(){
		$(this).find('[class*="span"]').each(function(index,item){
			if(index % perRow === 0)
				$(this).removeClass().addClass(productClass + ' alpha');
			else
				$(this).removeClass().addClass(productClass);
		});
		$(this).removeClass().addClass(catalogClass + ' alpha');
		$(this).animate({
			opacity: '1',
			speed:'fast'
		},function(){
			$('#show-collapse').parent().show('fast');
		});
	});
}

function showFilters(catalogClass,productClass,elementId,perRow,filterClass){
	
	$('#' + elementId).parent().hide('fast');

	$('#' + filterClass).parents('[class*="span"]').show('fast');
	$('#' + filterClass).parents('[class*="span"]').next('[class*="span"]').animate({
		opacity: '0',
		speed:'fast',
	},function(){
		$(this).find('[class*="span"]').each(function(index,item){
			if(index % perRow === 0)
				$(this).removeClass().addClass(productClass + ' alpha');
			else
				$(this).removeClass().addClass(productClass);
		});
		$(this).removeClass().addClass(catalogClass);
		$(this).animate({
			opacity: '1',
			speed:'fast'
		},function(){
			$('#' + filterClass).parent().show('slow');
		});
	});
}