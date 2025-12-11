// ==========================================================
// 1. 交互脚本 (script.js)
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. 获取关键按钮元素
    const connectBtn = document.querySelector('.btn-connect');
    const calculateBtn = document.querySelector('.btn-calculate');
    const buyBtns = document.querySelectorAll('.btn-buy');

    // 2. 实现 Steam 连接按钮的点击提示
    connectBtn.addEventListener('click', () => {
        alert('正在跳转到 Steam 认证页面... (原型演示)');
    });

    // 3. 实现战利品计算器按钮的点击提示
    calculateBtn.addEventListener('click', () => {
        // 在真实网站中，此处将触发 API 调用
        alert('正在估算您的战利品价值。 (数据已刷新)');

        // 演示：模拟数据刷新
        const valueNumber = document.querySelector('.value-number');
        const simulatedValue = (Math.random() * 5000 + 1000).toFixed(2); // 生成 $1000 到 $6000 间的随机数
        valueNumber.textContent = `$${simulatedValue}`;
    });

    // 4. 实现“立即购买”按钮的点击提示
    buyBtns.forEach(button => {
        button.addEventListener('click', (event) => {
            const itemName = event.target.closest('.item-card').querySelector('h3').textContent;
            alert(`您已点击购买 ${itemName}。资金将被托管锁定，等待卖家发送 Steam 交易报价。`);
        });
    });

    console.log('BlueTrade 脚本加载成功。');
});