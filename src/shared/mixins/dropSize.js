

let DropSize = {

    methods: {

        dragWindowSize(ev, el) {

            let $el = $(el),
                initW = $el.width(),
                initH = $el.height(),
                initClientX = ev.clientX,
                initclientY = ev.clientY,
                $body = $("body"),
                minH = 30,
                minW = 180;

            //鼠标移动计算位置
            $body.on('mousemove.dropSize', function (event) {

                let width = event.clientX - initClientX + initW,
                    height = event.clientY - initclientY + initH;


                height = height < minH && minH || height;
                width = width < minW && minW || width; 

                $el.css({
                    width,
                    height

                });

                return false;

            });

            //鼠标释放清除数据
            $body.on('mouseup.dropSize', function () {
                $body.off('mousemove.dropSize');
                $body.off('mouseup.dropSize');
            });



        }

    }
}

export default DropSize