export default {

    // 加载js
    loadScript: function (url, callback, id) {

        if (url.indexOf("?") < 0) {
            url += "?t=" + (+new Date());
        }

        var script = document.createElement('script')

        script.type = 'text/javascript'

        if (id) {
            script.id = id
        }

        if (typeof (callback) != 'undefined') {
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState == 'loaded' || script.readyState == 'complete') {
                        script.onreadystatechange = null
                        callback()
                    }
                }
            } else {
                script.onload = function () {
                    callback()
                }
            }
        }

        script.src = url

        document.body.appendChild(script)
    },

    // 加载样式
    loadStyle: function (href) {
        var link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        document.head.appendChild(link)
    },





}