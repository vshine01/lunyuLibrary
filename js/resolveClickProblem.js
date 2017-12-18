// 解决MUI里面a标签点击跳转问题
mui('body').on('tap','a',function(){
    window.top.location.href=this.href;
});