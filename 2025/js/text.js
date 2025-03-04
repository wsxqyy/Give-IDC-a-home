// 更新选择器和动画参数
const dynamicText = document.querySelector('.dynamic-text');
const messages = [
    "AI驱动的资源调度",
    "为实现梦想的草根站长提供",
    "60%的折扣", 
    "全球200+加速节点",
    "99.99%服务可用性保障"
];

let index = 0;

function showNextMessage() {
    dynamicText.style.opacity = 1;
    dynamicText.innerHTML = messages[index];
    index = (index + 1) % messages.length;
    setTimeout(() => {
        dynamicText.style.opacity = 0;
    }, 2500); // 延长显示时间
}

setInterval(showNextMessage, 3000);
showNextMessage();