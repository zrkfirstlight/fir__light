// 与对应容器建立联系
// 搜索框的互动效果
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
// 初始界面和刷新效果
const loading = document.getElementById("loading");
const loader = document.querySelector(".loader");
// 用于存储用户和 AI 对话历史
let conversationHistory = [];
// 结果展示
const searchResults = document.querySelector(".search-results");
// 点击搜索后的执行效果
function assignAvatar(type) {
  if (type === "user") {
    return "avatar-user";
  } else if (type === "system") {
    return "avatar-system";
  }
}
async function getAi(question) {
  const api_key = "sk-vH2QB0SKcd2043b1757FT3BLBKFJb4f7d7BBd77F46389D36";
  const url = "https://aigptx.top/v1/chat/completions";

  const headers = {
    Authorization: "Bearer " + api_key,
    "Content-Type": "application/json",
  };

  conversationHistory = []; // 清空对话历史
  // question += "至少回复以下标签中的一个：指针、列表、循环";
  // 构建参数，包括历史对话
  const params = {
    messages: [
      ...conversationHistory, // 添加历史对话
      {
        role: "user",
        content: question,
      },
    ],
    model: "gpt-3.5-turbo",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(params),
    });

    if (response.ok) {
      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      // 更新对话历史
      conversationHistory.push({
        role: "user",
        content: question,
      });
      conversationHistory.push({
        role: "ai",
        content: aiResponse,
      });

      return aiResponse;
    } else {
      throw new Error("API request failed");
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
async function performSearch() {
  const inputField = document.getElementById("questionInput");
  const keyword = searchInput.value;
  createResultContainer("user", keyword);
  const aiResponse = await getAi(keyword);
  console.log("AI Response:", aiResponse);
  createResultContainer("system", aiResponse);
  loader.style.display = "none";
  inputField.value = "";
}
function createResultContainer(type, text) {
  const resultShow = document.querySelector(".search-results");
  // 创建新的 result-container
  const resultContainer = document.createElement("div");
  resultContainer.classList.add("result-container");

  // 创建头像元素
  const avatar = document.createElement("div");
  avatar.classList.add(assignAvatar(type)); // 根据类型分配头像
  // avatar.classList.add("avatar"); // 添加共同样式
  avatar.innerHTML = `<img
      src="..\\assets\\srouces\\keqing.jpeg"
      alt="keqing"
      width="35px"
      height="35px"
    />`;
  resultContainer.appendChild(avatar);

  // 创建内容框
  const contentBox = document.createElement("div");
  contentBox.classList.add("content-box");
  contentBox.innerHTML = `内容：${text}`;

  // 创建细线
  const line = document.createElement("div");
  line.classList.add("line");
  contentBox.appendChild(line);

  // 创建内容操作按钮
  const contentActions = document.createElement("div");
  contentActions.classList.add("content-actions");
  contentActions.innerHTML =
    "<button>复制</button><button>点赞</button><button>收藏</button><button>投币</button>";
  contentBox.appendChild(contentActions);

  // 将内容框和细线加入到容器中
  resultContainer.appendChild(contentBox);

  // 将 result-container 加入到 result-show 中
  resultShow.appendChild(resultContainer);
}

// 点击按钮开始事件响应
searchButton.addEventListener("click", function () {
  loading.style.display = "none";
  loader.style.display = "block";
  // 内容搜索
  setTimeout(performSearch, 0);
});
// 另一种触发方式
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    loading.style.display = "none";
    loader.style.display = "block";
    // 内容搜索
    setTimeout(performSearch, 0);
  }
});
