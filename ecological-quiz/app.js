const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // 引入 cors
const app = express();
const PORT = 3000;

app.use(cors()); // 启用 CORS

// 连接到 SQLite 数据库
let db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

// 创建 API 路由获取问题
app.get('/api/questions', (req, res) => {
    db.all('SELECT * FROM questions', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

