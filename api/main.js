import express from 'express';
import cors from 'cors';
import { register } from './views/auth.js';
import { login } from './views/auth.js';
import { saveRecipe } from './views/recipes.js';
import { jwtMiddleware } from './util.js';
import { generateRecipe, refineRecipe } from './views/ai.js';

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

app.post('/api/v1/auth/register', register)
app.post('/api/v1/auth/login', login);

app.post('/api/v1/recipes', jwtMiddleware, saveRecipe);

app.post('/api/v1/ai/generate-recipe', generateRecipe);
app.post('/api/v1/ai/refine-recipe', refineRecipe);


app.listen(PORT, () => {
    console.log("App is running")
});