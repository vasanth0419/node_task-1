import express from "express";
import fs from "fs";
import { format } from "date-fns";
import path from "path";

const time = express();

const PORT = 4000;

time.get("/write", (req, res) => {
  const current_date_time = format(new Date(), "dd-MM-yyyy-HH-mm-ss");
  const filePath = `current_Time_stamp/${current_date_time}.txt`;

  fs.writeFileSync(filePath, `${current_date_time}`, "utf8");
  res.status(200).json({ message: "Timestamp written successfully" });
});

time.get("/getTextFiles", (req, res) => {
  const filepath = "current_Time_stamp";
  fs.readdir(filepath, (err, files) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(" error ");
    } else {
      const textFiles = files.filter((file) => path.extname(file) === ".txt");
      res.status(200).json(textFiles);
    }
  });
});





time.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
