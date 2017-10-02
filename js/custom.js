$(function(){
	$('.my_edu_tab li:first').addClass('active');
	$('.my_detail_education article:not(:first)').hide();
	$('.my_edu_tab li').on('click',function(){
		$('.my_edu_tab li').removeClass('active');
		$(this).addClass('active');
	});
	$('.my_edu_tab li a').on('click',function(e){
		var get_attr_value = $(this).data('attr');
		$('.my_detail_education article').hide();
		$('.my_detail_education article#'+get_attr_value).show();
	})
	var currentYear = (new Date).getFullYear();
	$('#current_year').html(currentYear);
	var body = $('#main_content');
	var backgrounds = ['#ECECEC url(images/bg1.jpg) no-repeat center center fixed','#ECECEC url(images/bg2.jpg) no-repeat center center fixed','#ECECEC url(images/one.jpg) no-repeat center center fixed','#ECECEC url(images/two.jpg) no-repeat center center fixed'];
	var current = 0;
	function nextBackground() {
		body.css('background',backgrounds[current = ++current % backgrounds.length]);
		setTimeout(nextBackground, 15000);
	}
	setTimeout(nextBackground, 15000);
	body.css('background', backgrounds[0]);

	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},2000);
	});
})