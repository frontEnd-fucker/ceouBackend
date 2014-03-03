// JavaScript Document
$(function() {
	$('.J_triggerToggle').toggle(function() {
		$(this).parent('p').next('.J_toggleP').show();
	}, function() {
		$(this).parent('p').next('.J_toggleP').hide();
	});
});