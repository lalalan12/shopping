window.addEventListener('load', function () {
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var arrowL = focus.querySelector('.arrow-l');
    var arrowR = focus.querySelector('.arrow-r');
    var ol = focus.querySelector('ol');
    var num = 0;
    var circle = 0;
    var focusOffset = focus.offsetWidth;
    focus.addEventListener('mouseover', function () {
        arrowL.style.display = 'block';
        arrowR.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseout', function () {
        arrowL.style.display = 'none';
        arrowR.style.display = 'none';
        timer = setInterval(function () {
            arrowR.click();
        }, 2000)
    })
    //添加小圆圈
    for (var i = 0; i < ul.children.length; i++){
        var li = this.document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index', i);
        li.addEventListener('click', function () {
            for (var j = 0; j < ol.children.length; j++){
                ol.children[j].className = '';
            }
            this.className = 'circle';
            var index = this.getAttribute('index');
            num = index;//与箭头关联
            circle = index;//与小圆圈关联
            animate(ul, -index * focusOffset);
        })
    }
    ol.children[0].className = 'circle';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //右箭头
    var flag = true;//节流阀
    arrowR.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
            animate(ul, -num * focusOffset, function () {
                flag = true;
        });
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        for (var i = 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'circle';
       }
    })
    // 左箭头
    arrowL.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusOffset + 'px';
        }
        num--;
            animate(ul, -num * focusOffset, function (){
                flag = true;
        });
        circle--;
        if (circle < 0) {
            circle = ol.children.length-1;
        }
        for (var i = 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'circle';
        }
    })
    var timer =setInterval(function () {
        arrowR.click();
    }, 2000)

})