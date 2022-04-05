/* Documentation

fetchFromGoogle will get json from google server
-> blogid, postid will be taken from query for searching with the google api
-> packageName will be taken for writing the .json file in the data directory

*/
import fs from "fs";

export default async function handler(req, res) {
  const { slug } = req.query;
  const [blogId, postId, packageName] = slug;
  if (!blogId || !postId || !packageName) {
    res.json({
      status: 500,
      message: "Please provide appropriate query",
      description: "_DOMAIN_/api/store/blogID/postID/packageName",
    });
  }
  let blogspostData = await fetchFromGoogle(blogId, postId);
  const output = convertingToJson(blogspostData, packageName);
  res.send(output);
}

async function fetchFromGoogle(_blogId, _postId) {
  const fetchedData = await fetch(
    `https://www.googleapis.com/blogger/v2/blogs/${_blogId}/posts/${_postId}?key=AIzaSyBMTPxl1wRSKohdug8F3xRfwLiv96h1s50`
  );
  const response = await fetchedData.json();
  return response.content;
}

function convertingToJson(data, packageName) {
  let structuredObject = [];
  let arrayOfLinks = data.match(/https:\/\/1.bp.blogspot.com\S+s2048\S+webp/gim);
  // let arrayOfLinks = data.match(/https:\/\/((1\.bp\.blogspot\.com)|(blogger\.googleusercontent\.com))\S+s2048\S+webp/gim);
  arrayOfLinks.forEach((link) => {
    structuredObject.push({ imageURL: link, favOrNot: false });
  });
  writeDataFile(structuredObject, packageName);
  return { status: 200, message: "Operation Successful" };
}

function writeDataFile(structuredObject, packageName) {
  fs.writeFile(`./data/${packageName}.json`, JSON.stringify(structuredObject), function (err) {
    if (err) throw err;
  });
}
