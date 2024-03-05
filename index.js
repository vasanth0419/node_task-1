import express from "express";
import fs from "fs";
import { format } from "date-fns";

const time = express();

const PORT = 4000;

// time.get("/write", (req, res) => {
//   const current_date_time = format(new Date(), "dd-MM-yyyy-HH-mm-ss");
//   const filePath = `current_Time_stamp/${current_date_time}.txt`;

//   fs.writeFileSync(filePath, `${current_date_time}`, "utf8");
//   res.status(200).json({ message: "Timestamp written successfully" });
// });

time.get("/read", (req, res) => {
  const current_date_time = format(new Date(), "dd-MM-yyyy-HH-mm-ss");
  const filePath = `current_Time_stamp/${current_date_time}.txt`;
  fs.writeFileSync(filePath, `${current_date_time}`, "utf8");
  let data = fs.readFileSync(filePath, "utf8");
  res.status(200).send(data);
});

time.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
