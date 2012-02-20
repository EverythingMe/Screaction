/*
 * Screaction
 */
var Screaction = new function(){
                
    var range, itemArr = [], itemArrLen, onScrollCallback;
    
    this.init = function(cfg) {
        cfg.items.forEach(registerItem);
        itemArrLen = itemArr.length;
        
        range = (cfg.scrollRange || "0-400").split("-");

        window.onscroll = onScroll;
        
        onScroll();
    };
    
    this.onScroll = function(cb) {
        onScrollCallback = cb;
    };
    
    function registerItem(cfg) {
        cfg.props.forEach(function(prop) {
            var item = new Item(cfg.element, prop);
            itemArr.push(item);  
        });
    }
    
    function onScroll() {
        var ratio = calculateRatio();
        
        onScrollCallback && onScrollCallback(ratio);

        for (var i=0; i<itemArrLen; i++) {
            itemArr[i].update(ratio);
        }
    }
    
    function getPageY() {
        return window.pageYOffset || document.body.scrollTop;
    }
    
    function calculateRatio() {
        var pageY = getPageY();
        
        return pageY <= range[0] ? 1 :
                pageY > range[1] ? 0 :
                1-((pageY-range[0])/(range[1]-range[0]));
    }
    
    function renderTemplate(search, replace, str) {
        return str.replace(search, replace);
    }
    
    function Item(el, cfg) {
        var prop = cfg.name,
            startVal = cfg.start,
            endVal = cfg.end,
            valTmpl = cfg.valueTemplate || "{value}px";

        this.update = function(ratio) {
            var newValArr = [];
            if (!(startVal instanceof Array)){
                startVal = [startVal];
                endVal = [endVal];
            }
            for (var i=0,len=startVal.length; i<len; i++){
                newValArr[i] = endVal[i] + ((startVal[i] - endVal[i])*ratio);
            }
            render(newValArr);
        };
        
        function render(valArr) {
            var newVal = valTmpl;
            for (var i=0,len2=valArr.length; i<len2; i++){
                newVal = renderTemplate("{value}", valArr[i], newVal);    
            }
            el.style[prop] = newVal;
        }
    }
}