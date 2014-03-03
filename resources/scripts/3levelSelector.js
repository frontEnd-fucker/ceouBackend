// JavaScript Document

$(function() {
	var courseLevelArray_1 = [
		['通用', '创业课程'],
		['通用', '管理课程'],
		['通用', '营销课程'],
		['通用', '职场课程'],
		['通用', '生活'],
		['行业', '行业']
	];
	var courseLevelArray_2 = [
		['创业课程', '创业心路'],
		['创业课程', '商业模式'],
		['创业课程', '创业团队'],
		['创业课程', '产品战略'],
		['创业课程', '股权期权'],
		['创业课程', '投资融资'],
		['创业课程', '运营实务'],
		['创业课程', '税务法律'],
		
		['管理课程', '领导力'],
		['管理课程', '运营管理'],
		['管理课程', '战略管理'],
		['管理课程', '人力资源管理'],
		['管理课程', '资本运作管理'],
		['管理课程', '企业文化'],
		['管理课程', '财务管理'],
		['管理课程', '危机管理'],
		['管理课程', '项目管理'],
		['管理课程', '生产制造'],
		['管理课程', '物流管理'],
		
		['营销课程', '营销系列'],
		
		['职场课程', '职业规划'],
		['职场课程', '成功励志'],
		['职场课程', '情商管理'],
		['职场课程', '团队建设'],
		['职场课程', '情绪管理'],
		['职场课程', '求职面试'],
		['职场课程', '销售技巧'],
		['职场课程', '谈判沟通'],
		['职场课程', '高效工作'],
		['职场课程', '升职加薪'],
		['职场课程', '与老板相处'],
		['职场课程', '职场礼仪'],
		['职场课程', '创新思维'],
		['职场课程', '时间管理'],
		['职场课程', '辞职跳槽'],
		['职场课程', '工作汇报'],
		
		['生活', '兴趣爱好'],
		['生活', '人生感悟'],
		['生活', '国学智慧'],
		['生活', '语言技能'],
		['生活', '风水文化'],
		['生活', '情感婚姻'],
		['生活', '教育考试'],
		['生活', '理财投资'],
		['生活', '亲子教育'],
		['生活', '养生保健'],
		
		['行业', '医疗'],
		['行业', '餐饮'],
		['行业', '房地产'],
		['行业', '汽车'],
		['行业', '保险'],
		['行业', '酒店'],
		['行业', '零售'],
		['行业', '银行'],
		['行业', '美容美发'],
		['行业', '制造'],
		['行业', '服装'],
		['行业', '电子商务'],
		['行业', '物业管理'],
		['行业', '家居建材'],
		['行业', '物流']
	];
	
	//按模块分类二级菜单
	var modArray = [
		['倍增学院', '最新课程'],
		['倍增学院', '名师堂（倍增）'],
		['倍增学院', '实战堂'],
		
		['名师堂', '名师堂'],
		
		['商学院', '普通'],
		['商学院', '企业商学院'],
		['商学院', '政企学院'],
		
		['在线学历院', '普通'],
		['在线学历院', '技能学院'],
		['在线学历院', '知名学府'],
	];
	
	//按类别分类的3级菜单
	$('#level_1').change(function() {
		updateOption(this, courseLevelArray_1);
		//给#level_2 option元素增加value值
		$('#level_2 option').each(function(i) {
			this.value = i;
		});
	});
	$('#level_2').change(function() {
		updateOption(this, courseLevelArray_2);	
		
		//给#level_3 option元素增加value值
		var level1Val = $('#level_1').val();
		var level2Val = $('#level_2').val(); 
		$('#level_3 option').each(function(i) {
			var format_4 = (i + 10000).toString().slice(1);
			this.value = level1Val + level2Val + format_4;
		});
	});
	
	//按模块分类的二级菜单
	$('#mLevel_1').change(function() {
			updateOption(this, modArray);
			//给#mLevel_2 option元素增加value值
			$('#mLevel_2 option').each(function(i) {
				this.value = i;
			});
		});
	
	/*
	 * 该方法用来更新下级菜单的option选项
	 * param compareArray 为需要对比的数组
	*/
	function updateOption(el, compareArray) {
		var levelStatus = $(el).find('option').eq(el.selectedIndex).text();
		var len = compareArray.length;
		$(el).nextAll('select').find('option').not('.default-option').remove();		
		for(var i=0; i<len; i++) {
			var levelSta = compareArray[i][0];
			if(levelStatus==levelSta) {
				$('<option>' + compareArray[i][1] + '</option>').appendTo($(el).next());
			}
		}
	}
});	















