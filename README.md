# Middleware 實作練習
伺服器收到任何來自瀏覽器的 request 時，都會自動把資訊紀錄到 server log 裡

## Features
- 紀錄時間戳記 (time-stamps) - 以當地時間 (台北) 顯示
- 紀錄請求的 HTTP 方法
- 紀錄URL


## Environment SetUp
1. [Node.js](https://nodejs.org/en/) 10.22.0
2. [Express](https://expressjs.com/en/starter/installing.html) 4.17.1
3. [nodemon](https://nodemon.io/) 2.0.4

### 啟動專案
1. 複製git到本地端
```
[~] $ git clone https://github.com/lee001001/middleware01.git
```

2. Get into the directory
```
[~] $ cd middle_ware
```

3. Install packages
```
[~/middle_ware] $ npm install
```

4. Run the project
```
[~/middle_ware] $ npm run start
```