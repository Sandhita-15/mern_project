import app from "./app.js";

const PORT = process.env.PORT || 4000;

const HOST = process.env.HOST || "localhost";

app.listen(PORT, HOST,() => {
  console.log(`Server running on port ${PORT} ${HOST}...`);
});
