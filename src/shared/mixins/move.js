

var Move = {

	methods: {

		drag(el, ev) {

			var $body = $("body"),
				$el = $(el),
				gapX = 0,
				gapY = 0,
				left = parseInt($el.css("left")),
				top = parseInt($el.css("top"));

			if (!isNaN(left)) {
				gapX = ev.pageX - left;
			}

			if (!isNaN(top)) {
				gapY = ev.pageY - top;
			}

			//鼠标移动计算位置
			$body.on('mousemove.move', function (event) {

				$el.css({
					left: event.clientX - gapX,
					top: event.clientY - gapY,
					right: 'auto',
					botton: 'auto'
				});

				return false;

			});

			//鼠标释放清除数据
			$body.on('mouseup.move', function () {
				$body.off('mousemove.move');
				$body.off('mouseup.move');
			});



		}

	}
}

export default Move