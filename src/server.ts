import express from 'express';
import { TextService } from './services/textServices';
import cors from 'cors'
const app = express();
const textService = new TextService();

app.use(express.json());
app.use(cors());

app.post('/text', async (req, res) => {
  const text = req.body.text;
  const newText = await textService.create(text);
  console.log(newText)
  res.json({newText});
});

app.get('/text', async (req, res) => {
  const texts = await textService.findAll();
  console.log(texts);
  res.json({texts});
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });