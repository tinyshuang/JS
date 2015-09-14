<script type="text/javascript">
	 /**
     * 获取字符串长度，全角字符算两个
     * @param  {String} str 
     * @return {Number}   
     */
    function inputLength(str) {
        var i, len, code;
        if (!str) {
            return 0;
        }
        len = str.length;
        for (i = 0; i < len; i++) {
            code = str.charCodeAt(i);
            if (code > 0xff) {
                len++;
            }
        }
        return len;
    }
	
	 /**
     * 一个用来控制input文本框字数的限制..而且是针对标准字符的..
     	比如50个字符..就是数字和字母都是可以50个...而中文是25个
     */
	$(function() {
		var keyvalue = [8,9,37,38,39,40];//方向键和后退键和tab键的键值
		$("#realName").on("contextmenu",function(){
				return false;
			 })
			.on("keydown propertychange",function(e){
				var key = e.keyCode;
				if(keyvalue.indexOf(key)  != -1){
					return true;
				}
				var value = $(this).val();
				if(inputLength(value) >= 12){
					return false;
				}
				return true;	
			});
	
	});
</script>