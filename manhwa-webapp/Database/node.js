const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'manhwa-db.c3k0yy6c0t38.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'admin123',
  database: 'manhwa-db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Example: Fetching manhwa data from the database
app.get('/manhwa', (req, res) => {
  pool.query('SELECT * FROM manhwa', (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Database error');
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});
