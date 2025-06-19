require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// สร้าง Schema สำหรับพันธุ์แมว
const catSchema = new mongoose.Schema({
  name: String,
  origin: String,
  description: String,
});

const Cat = mongoose.model('Cat', catSchema);

// API Routes

// GET /cats - ดึงข้อมูลพันธุ์แมวทั้งหมด
app.get('/cats', async (req, res) => {
  try {
    const cats = await Cat.find();
    res.json(cats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /cats - เพิ่มพันธุ์แมวใหม่
app.post('/cats', async (req, res) => {
  const cat = new Cat({
    name: req.body.name,
    origin: req.body.origin,
    description: req.body.description,
  });

  try {
    const newCat = await cat.save();
    res.status(201).json(newCat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /cats/:id - แก้ไขข้อมูลพันธุ์แมว
app.put('/cats/:id', async (req, res) => {
  try {
    const updatedCat = await Cat.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        origin: req.body.origin,
        description: req.body.description,
      },
      { new: true }
    );
    if (!updatedCat) {
      return res.status(404).json({ message: 'Cat not found' });
    }
    res.json(updatedCat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /cats/:id - ลบพันธุ์แมว
app.delete('/cats/:id', async (req, res) => {
  try {
    const deletedCat = await Cat.findByIdAndDelete(req.params.id);
    if (!deletedCat) {
      return res.status(404).json({ message: 'Cat not found' });
    }
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
