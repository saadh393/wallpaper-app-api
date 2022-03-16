import fs from "fs";
export default function handler(req, res) {
  const { packageName } = req.query;

  fs.readFile(`./data/${packageName}.json`, "utf-8", (err, data) => {
    if (err) res.send(err);
    else res.send(data);
  });
}
