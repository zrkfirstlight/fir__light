// 动态背景的样式
particlesJS("particles-js", {
  particles: {
    number: {
      value: 20, // 粒子数量
      density: {
        enable: true,
        value_area: 800, // 粒子密度
      },
    },
    color: {
      value: "#FFD700", // 粒子颜色
    },
    shape: {
      type: "circle", // 粒子形状（圆形）
      stroke: {
        width: 0,
        color: "#000000", // 描边颜色
      },
    },
    opacity: {
      value: 0.6, // 不透明度
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4, // 粒子大小
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150, // 连线距离
      color: "#FFA07A", // 连线颜色
      opacity: 0.4, // 连线不透明度
      width: 1.5, // 连线宽度
    },
    move: {
      enable: true,
      speed: 5, // 粒子移动速度
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true, // 启用鼠标悬停效果
        mode: "grab", // 悬停模式
      },
    },
  },
});
