var that;
class Tab {
    constructor(id) {
        //获取元素
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector(".tabadd span");
        //获取li的父元素
        this.ul = this.main.querySelector(".fisrstnav ul");
        this.fsection = this.main.querySelector(".tabscon");
        this.init();
    }

    //init 初始化操作让相关的元素绑定事件
    init() {
        this.updateNode();
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            //给每个小li添加index属性 里面存着索引号
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            //给每个删除按钮都要绑定事件
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.section[i].ondblclick = this.editTab;
        }
    }

    //因为我们动态添加元素，需要从新获取对应的元素
    updateNode() {
            this.lis = this.main.querySelectorAll("li");
            this.section = this.main.querySelectorAll("section");
            this.remove = this.main.querySelectorAll(".icon-guanbi");
            this.spans = this.main.querySelectorAll(".fisrstnav li span:first-child");
        }
        //1.切换功能
    toggleTab() {
            // console.log(this.index);
            // console.log(this);
            that.clearClass();
            this.className = 'liactive';
            // console.log(that.section[this.index]);
            that.section[this.index].className = 'conactive';
        }
        //清除所有li 和 section 的类
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = "";
            this.section[i].className = "";
        }

    }

    //2.新增功能
    addTab() {
        var random = Math.random();
        that.clearClass();
        //(1) 创建li元素和section元素
        var li = '<li class="liactive"><span>新的tab</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试1' + random + '</section>';
        //(2) 把这两个元素追加到对应的父元素里面
        //这里的this指向的是add按钮  所以用that
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }

    //3.删除功能
    removeTab(e) {
        //阻止冒泡 防止触发li 的切换点击事件
        e.stopPropagation();
        // alert(111);
        var index = this.parentNode.index;
        console.log(index);
        // 根据索引号删除对应的li 和section remove()方法可以直接删除指定的元素
        that.lis[index].remove();
        that.section[index].remove();
        that.init();
        //当我们删除的不是选中状态的li 的时候，原来的选中状态li保持不变
        if (document.querySelector(".liactive")) return;
        //当我们删除了选中状态的这个li 的时候，让它前一个li 处于选中状态
        index--;
        // 手动调用我们的点击事件 不需要鼠标触发
        that.lis[index] && that.lis[index].click();
    }

    //4.修改功能
    editTab() {
        var str = this.innerHTML;
        // alert(111)
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text">';
        console.log(str);
        var input = this.children[0];
        input.value = str;
        input.select(); // 文本框里面的文字处于选中状态
        //当我们离开文本框就把文本框里面的值给span
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                // 手动调用表单失去焦点事件 不需要鼠标离开操作
                this.blur();
            }
        }
    }
}

new Tab("#tab");