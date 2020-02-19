
//配置背景
window.onload = function(){
    var config = {
        vx: 4,//点x轴速度,正为右，负为左
        vy:  4,//点y轴速度
        height: 3,//点高宽，其实为正方形，所以不宜太大
        width: 3,
        count: 120,//点个数
        color: "33, 148, 217",//点颜色
        stroke: "31,202,255",//线条颜色
        dist: 3000,//点吸附距离
        e_dist: 20000,//鼠标吸附加速距离
        max_conn: 10//点到点最大连接数
    };
    CanvasParticle(config);
};
    
    


