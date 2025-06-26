const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./config/connection');
process.loadEnvFile();
const frutasRoutes = require('./routes/frutas.routes');
const authRoutes = require('./routes/auth.routes');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});
app.use('/api/auth', authRoutes);
app.use('/api/frutas', frutasRoutes);   

const start = async () => {
  try {
    connectDB()
    app.listen(port, () => console.log(`http://localhost:${port}`))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()