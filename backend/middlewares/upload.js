import multer from "multer";

const storage = multer.memoryStorage(); // store temporarily in memory
const upload = multer({ storage });

export default upload;
