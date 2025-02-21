const app = require("./src/app");

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server started and listens on http://localhost:${PORT}`);
});
