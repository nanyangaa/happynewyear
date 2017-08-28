<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>平安快乐度新春</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta name="apple-touch-fullscreen" content="yes">
	<meta name="telephone=no,email=no" content="format-detection">
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/comm.css">
	 
</head>
<body>
	<div class="load" id="loading">
		<img src="images/mask.jpg" alt="图片加载失败">
		<div class="loading">
			<div class="progress" id="progress">
				<div class="progressbar"></div>
				<div class="progresstext">
					<span class="current"></span>
					<span class="total"></span>
				</div>
			</div>
		</div>
	</div>
	<div class="index" id="orientation">
		<div class="con-box home-page show" id="home">
			<div class="con">
				<img src="images/index_tit.png" alt="图片加载失败">
				<div class="slide-bar">
					<img src="images/slide_tip1.png" alt="图片加载失败">
					<img src="images/slide_tip2.png" alt="图片加载失败">
					<img src="images/slide_tip3.png" alt="图片加载失败">
				</div>
			</div>
		</div>
		<div class="con-box list" id="conBox">
			<div class="content" id="content">
				<div>
					<h1>健康饮食 快乐过节</h1>
					<dl class="clearfix">
						<dt>
							<img src="images/demoimg/fruit.jpg" alt="图片加载失败">
						</dt>
						<dd>临近年底，除了要吃的开心之外，也要吃的健康，更不能吃错食物。食物的特性有哪些？进来瞧瞧~~~</dd>
					</dl>
				</div>
				<div>
					<h1>过年的事情知多少</h1>
					<dl class="clearfix">
						<dt>
							<img src="images/demoimg/monkey.jpg" alt="图片加载失败">
						</dt>
						<dd>过年有哪些习俗？<br/>进来挑战一下，看看自己对全国各地的风俗习惯了解多少吧~~~</dd>
					</dl>
				</div>
			</div>
		</div>
		<div class="con-box ans-page">
			<div>
				<dl>
					<dt class="img"><img src="images/demoimg/food/kiwi.jpg" alt="图片加载失败"></dt>
					<dd id="tit">猕猴桃</dd>
				</dl>
				<div id="con1"><img class="right" id="right1" src="images/right.png" alt="图片加载失败"><img class="wrong" id="wrong1" src="images/wrong.png" alt="图片加载失败"><p id="choise1">行气活血，滋养眼睛</p></div>
				<div id="con2"><img class="right" id="right2" src="images/right.png" alt="图片加载失败"><img class="wrong" id="wrong2" src="images/wrong.png" alt="图片加载失败"><p id="choise2">防止动脉硬化</p></div>
				<div id="con3"><img class="right" id="right3" src="images/right.png" alt="图片加载失败"><img class="wrong" id="wrong3" src="images/wrong.png" alt="图片加载失败"><p id="choise3">预防心血管疾病</p></div>
			</div>
		</div>
		<div class="con-box tip-page">
			<div class="con-con">
				<dl>
					<dt class="img clearfix"><img src="images/demoimg/food/kiwi.jpg" alt="图片加载失败"></dt>
					<dd>猕猴桃</dd>
				</dl>
				<p class="con">
					<em>小孩子不宜多吃</em><span>猕猴桃含有过敏物质及透明质酸，过量食用时，易引发溶血性肠炎易引发溶血性肠炎易引发溶血性肠炎。</span>
				</p>
				<div class="slide-bar">
					<img src="images/slide_tip1.png" alt="图片加载失败">
					<img src="images/slide_tip2.png" alt="图片加载失败">
					<img  src="images/slide_tip3.png" alt="图片加载失败">
				</div>
			</div>
		</div>
		<div class="con-box result-page">
			<div>
				<h1>博学指数</h1>
				<p class="score">90</p>
				<img src="images/num_line.png" alt="图片加载失败">
				<p class="comment">你韦编三绝、才高八斗、学富五车、饱读诗书、才华横溢、满腹经纶，简直就是文曲星下凡啊！</p>
				<a href="javascript:;">逛逛饮食类题目</a>
			</div>
		</div>
	</div>
	<div class="newMask" id="newMask">
		<p>
			请使用移动设备打开游戏！<br>而且不要使用横屏哦！
		</p>
	</div>
	<audio id="trueAudio" src="media/right.mp3" preload="auto"></audio>
	<audio id="falseAudio" src="media/wrong.mp3" preload="auto"></audio>
	<script src="js/zepto.js"></script>
	<script src="js/touch.js"></script>
	<script src="js/fx.js"></script>
	<script src="js/fx_methods.js"></script>
	<script src="js/common.js"></script>
	<script src="js/resLoader.js"></script>
	<script src="js/index.js"></script>
</body>
</html>