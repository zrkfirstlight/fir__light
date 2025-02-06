// 计算网站运行时间
const startDate = new Date("2024-08-27"); // 设置网站启动日期
const runtimeElement = document.getElementById("website-runtime");

setInterval(() => {
  const currentTime = new Date();
  const elapsedTime = currentTime - startDate;

  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  runtimeElement.textContent = `${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
}, 1000); // 每秒更新一次
