# 项目开发规范文档

# 项目文件结构

- project-folder
  - frontend
    - assets
      - css
        - styles.css
      - js
        - app.js
    - pages
      - account.html
      - chat.html
      - learning.html
      - history.html
      - profile.html

  - backend
    - app.py
    - models.py
    - routes
      - account_routes.py
      - chat_routes.py
      - learning_routes.py
      - history_routes.py
      - profile_routes.py

  - database
    - mongodb.js
    - schema
      - account.js
      - chat.js
      - learning.js
      - history.js
      - profile.js

## 前端

### 技术栈
- HTML5
- CSS3
- JavaScript
- React.js

### 前端开发规范
1. 使用语义化的HTML标签
2. 遵循CSS命名规范，如BEM命名法
3. 组件化开发，提高组件的重用性
4. 使用ESLint等工具保持代码风格统一

## 后端

### 技术栈
- Node.js
- Express.js
- MongoDB

### 后端开发规范
1. 遵循RESTful API设计规范
2. 使用MVC（Model-View-Controller）架构
3. 数据库操作使用ORM（Object-Relational Mapping）工具
4. 统一错误处理和日志记录

## 数据库

### 数据库类型
- MongoDB

### 数据库规范
1. 数据库设计遵循规范化范式
2. 使用适当的索引提高查询性能

## API接口

### 接口设计
1. 使用Swagger等API文档工具进行接口设计与文档编写
2. 统一的接口返回格式，包括成功和错误信息

## 代码规范

1. 遵循统一的代码风格，如ESLint规范
2. 注释清晰明了，解释代码功能和逻辑
3. 使用版本控制工具（如Git）进行代码管理

## 变量命名规范

1. 使用有意义且符合业务逻辑的变量命名
2. 遵循驼峰命名法或下划线命名法
3. 避免使用无意义的缩写或简写

以上是项目开发规范文档的简要内容，开发过程中请严格遵守规范，保持代码质量和项目可维护性。