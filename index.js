const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json());

// (READ)

app.get("/", (req, res) => {
  res.json({ msg: "all blogs list" });
});

// CREATE
app.post("/", (req, res) => {
  const data = req.body;
  res.json({ msg: `New blog added with data: ${data}` });
});

// UPDATE
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  // logic => send params with this data to database
  res.json({ msg: `Blog Id ${id} put with data ${data}` });
});

// UPDATE
app.patch("/id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  // logic => send params with this data to database

  res.json({ msg: `Blog Id ${id} patched with data ${data}` });
});

// DELETE
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  
  // logic => send params with this data to database
  res.json({ msg: `Blog Id ${id} deleted` });
});

app.listen(PORT),
  () => {
    console.log(
      `app is running on port ${PORT}, Url is http://localhost:${PORT}`
    );
  };
