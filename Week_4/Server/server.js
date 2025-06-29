
import express from 'express';
const app = express();
const PORT = 3000;


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
  res.send('Welcome to the Express Server!');
});

app.get('/about', (req, res) => {
  res.send('This is the About page!');
});


app.post('/echo', (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
