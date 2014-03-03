// JavaScript Document
$(function() {
	
	//编辑课程信息页面点击修改弹出select
	$('.J_triggerToggle').click(function() {
		$(this).parent('p').next('.J_toggleP').show();
	});
});