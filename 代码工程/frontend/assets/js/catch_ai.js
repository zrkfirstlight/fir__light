// 用于存储用户和 AI 对话历史
let conversationHistory = [];

// 异步获取 AI 回复
async function getAiResponse(question) {
  const api_key = "sk-vH2QB0SKcd2043b1757FT3BLBKFJb4f7d7BBd77F46389D36";
  const url = "https://aigptx.top/v1/chat/completions";

  const headers = {
    Authorization: "Bearer " + api_key,
    "Content-Type": "application/json",
  };

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

// 模拟用户提问的函数
async function simulateUserInput(question) {
  console.log("User: ", question);

  // 调用 AI 模型获取回复
  const aiResponse = await getAiResponse(question);
  if (aiResponse) {
    console.log("AI: ", aiResponse);
  } else {
    console.log("AI Response Error");
  }
}

// 测试对话流程
async function testConversation() {
  await simulateUserInput("你好，今天天气怎么样？");
  await simulateUserInput("明天会下雨吗？");

  // 打印对话历史
  console.log("对话历史：");
  conversationHistory.forEach((message) => {
    console.log(`${message.role}: ${message.content}`);
  });
}

// 执行测试对话流程
testConversation();
