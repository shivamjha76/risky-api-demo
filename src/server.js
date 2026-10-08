const express = require('express');
const app = express();
const keys = require('../config/keys');

// Leaked database connection string directly inside source code
const DATABASE_URL = "postgresql://dbadmin_user:Sup3rS3cr3tP@ss99@db.prod.internal.net:5432/customer_db";

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: "online",
    database: "connected",
    databaseHost: "db.prod.internal.net"
  });
});

app.get('/api/config', (req, res) => {
  // Risky API: Leaking config metadata
  res.json({
    awsKey: keys.aws.accessKeyId,
    mapsApiKey: keys.google.mapsApiKey
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
