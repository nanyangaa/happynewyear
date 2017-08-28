// console.log(window.screen.height);
var loader = new resLoader({
	resources : ['images/mask.jpg','images/index_tit.png','images/slide_tip1.png','images/slide_tip2.png','images/slide_tip3.png','images/bg_bot.png','images/bg_top.png','images/demoimg/fruit.jpg','images/demoimg/monkey.jpg','images/wrong.png','images/right.png','images/num_line.png','js/food.json','js/index.js','js/resLoader.js','js/zepto.js','media/right.mp3','media/wrong.mp3','images/demoimg/food/kiwi.jpg','images/demoimg/custom/fu.jpg','images/demoimg/food/apple.jpg','images/demoimg/custom/banger.jpg','images/demoimg/food/baiguo.jpg','images/demoimg/custom/fair.jpg','images/demoimg/food/duck.jpg','images/demoimg/custom/goods.jpg','images/demoimg/food/chic.jpg','images/demoimg/custom/dragon.jpg','images/demoimg/food/orange.jpg','images/demoimg/custom/year.jpg','images/demoimg/food/px.jpg','images/demoimg/custom/fes.jpg','images/demoimg/food/fish.jpg','images/demoimg/custom/gu.jpg','images/demoimg/food/ng.jpg','images/demoimg/custom/god.jpg','images/demoimg/food/pig.jpg','images/demoimg/custom/fis.jpg','images/demoimg/food/ganzhe.jpg','images/demoimg/custom/congee.jpg','images/demoimg/food/tomato.jpg','images/demoimg/custom/yasui.jpg','images/demoimg/food/kugua.jpg','images/demoimg/custom/shuijiao.jpg','images/demoimg/food/baicai.jpg','images/demoimg/custom/nianyef.jpg','images/demoimg/food/shengjiang.jpg','images/demoimg/custom/lapa.jpg','images/demoimg/food/tofu.jpg','images/demoimg/custom/fangpao.jpg','images/demoimg/food/wine.jpg','images/demoimg/custom/chunl.jpg','images/demoimg/food/muer.jpg','images/demoimg/custom/yingxin.jpg','images/demoimg/food/shrimp.jpg','images/demoimg/custom/chenxi.jpg','images/demoimg/food/ciba.jpg','images/demoimg/custom/jizu.jpg'
	],
	onProgress : function(current, total) {
		var percent = current / total * 100;
		$('.progressbar').css('width', percent + '%');
		$('.total').html(Math.floor(percent) + '%');
	},
	onComplete : function(total) {
		setTimeout(function() {
			$('#loading').hide();
			$('.index').show(600);
		}, 600);
	}
});
loader.start();
var trueAudio = document.getElementById('trueAudio'),
	falseAudio = document.getElementById('falseAudio');
var home = document.getElementById('home');
var resultArr = [
	"新的一年，希望您与家人团圆聚餐之时也能够注意自己和家人的身体健康祝您：新年快乐，身体健康！",
	"畅饮新年这杯酒，醉了回忆醉拥有，亲朋好友齐庆祝，甜美幸福绕心头，妻贤子孝事业火，开心快乐好生活。祝你新年愉快。",
	"常言道：笑一笑，十年少。一笑烦恼跑，二笑怒憎消，三笑憾事了，四笑病魔逃，五笑永不老，六笑乐逍遥，节到你在笑! 祝你新年开心笑!",
	"你韦编三绝、才高八斗、学富五车、饱读诗书、才华横溢、满腹经纶，简直就是文曲星下凡啊！"
];
window.addEventListener('touchstart', function(e) {
	e.preventDefault();
}, false);
if ($(document).width() >= $(document).height() * 4 / 5) {
	$('#newMask').css({
		'display' : 'block',
		'height' : '100%',
		'padding-top' : $(document).height() / 42 / 2 + 'rem'
	});
} else {
	$('#newMask').hide();
};
window.onresize = function() {
	if ($(document).width() >= $(document).height() * 4 / 5) {
		$('#newMask').css({
			'display' : 'block',
			'height' : '100%',
			'padding-top' : $(document).height() / 42 / 2 + 'rem'
		});
	} else {
		$('#newMask').hide();
	}
};
// window.onorientationchange = function(){
// 	if(window.orientation == 180 || window.orientation == 0){
// 		mask.style.display = 'none';
// 	} else {
// 		mask.style.display = 'block';
// 		mask.style.height = window.screen.height + 'px';
// 	}
// };
var oldY = 0,
	newY = 0;
$('.home-page').on('touchstart', function(e) {
	e.preventDefault();
	oldY = e.changedTouches[0].clientY;
});
$('.home-page').on('touchend', function(e) {
	e.preventDefault();
	newY = e.changedTouches[0].clientY;
	if (newY - oldY < - 100) {
		$('.home-page').animate({
			'margin-top' : - $(document).height() + 'px'
		}, 300, function() {
			$('.home-page').hide();
		});
		$('.list').show(300);
		oldY = 0;
		newY = 0;
	};
});
var data = [];
var titNum;// 列表页标题编号 titNum = 0表示饮食类题目；titNum = 1表示年俗题目；对应的结果页面$('.result-page a')链接恰恰相反
var i = 0,
	count = 0;
var skipT = null;
var tIn = 1,   // 答题页面进入判断
	judNum = 1;
var dataArr = [];
$('.list .content>div').each(function() {
	$(this).on('touchstart', function() {
		if ($(this).index() == 1) {
			titNum = 1;
			$('.result-page a').html('逛逛饮食类题目');
		} else {
			titNum = 0;
			$('.result-page a').html('逛逛年俗类类题目');
		}
		conInit();
		// 提示页面内容、答题页内容初始化结束
		$('.list').hide();
		$('.ans-page').show(600);
	});
});
// 答题页面
$('.ans-page>div div').each(function() {
	var _index = $(this).index() - 1;
	$('.ans-page>div div').eq(_index).on('touchstart', function() {
		if (tIn == 1) {
			tIn = 0;
			$.getJSON('js/food.json', function(data) {
				dataArr = data;
				if (titNum == 0) {
					$('#tit').html(data[i].tit);
					$('#choise1').html(data[i].choises[0].con);
					$('#choise2').html(data[i].choises[1].con);
					$('#choise3').html(data[i].choises[2].con);
					$('.tip-page dd').html(data[i].tit);
					$('.tip-page em').html(data[i].spec);
					$('.tip-page span').html(data[i].tipCon);
					$('.img img').attr('src', data[i].src);
				} else { 
					$('#tit').html(data[i].tit1);
					$('#choise1').html(data[i].choises1[0].con1);
					$('#choise2').html(data[i].choises1[1].con1);
					$('#choise3').html(data[i].choises1[2].con1);
					$('.tip-page dd').html(data[i].tit1);
					$('.tip-page em').html(data[i].spec1);
					$('.tip-page span').html(data[i].tipCon1);
					$('.img img').attr('src', data[i].src1);
				}
				var arr = [];
				for (var j = 0; j < 3; j++) {
					if (titNum == 0) {
						arr.push(data[i].choises[j].judge);
					} else {
						arr.push(data[i].choises1[j].judge1);
					}
				};
				if (arr[_index] == 1) {
					trueAudio.play();
					$('.ans-page>div div').eq(_index).children('.right').show();
					skipTime('.ans-page', '.tip-page', 2000);
					count ++;
				} else {
					falseAudio.play();
					$('.ans-page>div div').eq(_index).children('.wrong').show();
					skipTime('.ans-page', '.tip-page', 2200);
				}
			})
		};
	})
});
$('.tip-page').on('touchstart', function(e) {
	e.preventDefault();
	oldY = e.changedTouches[0].clientY;
});
$('.tip-page').on('touchend', function(e) {
	e.preventDefault();
	newY = e.changedTouches[0].clientY;
	if (newY - oldY < - 100 && judNum == 1) {
		// if (judNum == 1) {
		judNum = 0;
		if (i >= dataArr.length - 1) {
			var finalScore = Math.floor(count * (100 / dataArr.length));
			$('.result-page .score').html(finalScore);
			if (finalScore <= 25) {
				$('.comment').html(resultArr[0]);
			} else if (finalScore > 25 && finalScore <= 50) {
				$('.comment').html(resultArr[1]);
			} else if (finalScore > 50 && finalScore <= 75) {
				$('.comment').html(resultArr[2]);
			} else {
				$('.comment').html(resultArr[3]);
			}
			i = 0;
			count = 0;
			dataArr = [];
			$('.tip-page').hide();
			$('.result-page').show(600);
		} else {
			$('.tip-page').hide();
			$('.ans-page').show(600);
			conInit();
			i ++;
		}
		tIn = 1;
		judNum = 1;
		// };
		oldY = 0;
		newY = 0;
	};
});
// 答题页面结束
// 提示页面内容、答题页内容初始化
function conInit() {
	$.getJSON('js/food.json', function(data) {
		dataArr = data;
		if (titNum == 0) {
			$('#tit').html(data[i].tit);
			$('#choise1').html(data[i].choises[0].con);
			$('#choise2').html(data[i].choises[1].con);
			$('#choise3').html(data[i].choises[2].con);
			$('.tip-page dd').html(data[i].tit);
			$('.tip-page em').html(data[i].spec);
			$('.tip-page span').html(data[i].tipCon);
			$('.img img').attr('src', data[i].src);
		} else {
			$('#tit').html(data[i].tit1);
			$('#choise1').html(data[i].choises1[0].con1);
			$('#choise2').html(data[i].choises1[1].con1);
			$('#choise3').html(data[i].choises1[2].con1);
			$('.tip-page dd').html(data[i].tit1);
			$('.tip-page em').html(data[i].spec1);
			$('.tip-page span').html(data[i].tipCon1);
			$('.img img').attr('src', data[i].src1);
		}
	})
};
// 结果页面
$('.result-page a').on('touchstart', function() {
	$('.result-page').hide();
	$('.list').show(600);
});
// 结果页面结束
// 提示音结束后隔0.2-0.6s跳转
function skipTime(outPage, skipPage, time) {
	skipT = setTimeout(function() {
		$(outPage).hide();
		$(skipPage).show(600);
		$('.right, .wrong').hide();
	}, time);
};