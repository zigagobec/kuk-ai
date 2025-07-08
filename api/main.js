import express from 'express';
import cors from 'cors';
import { register } from './views/auth';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/v1/health", (req, res) => {
  res.json({
    message: "ooook",
    sok: "grozdni"
  });
});

app.post('api/v1/auth/register', register)

app.listen(PORT, () => {
    console.log("App is running")
});