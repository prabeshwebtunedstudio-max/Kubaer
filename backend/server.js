import app from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT 
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/loanWebsite";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log(err));
