export default function handler(req, res) {
  const { id } = req.query;
  console.log(req.query);
  res.status(200).json([
    {
      imageURL:
        "https://images.pexels.com/photos/9049269/pexels-photo-9049269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      favOrNot: false,
    },
    {
      imageURL:
        "https://images.pexels.com/photos/2737333/pexels-photo-2737333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favOrNot: false,
    },
    {
      imageURL:
        "https://images.pexels.com/photos/10171227/pexels-photo-10171227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favOrNot: false,
    },
    {
      imageURL:
        "https://images.pexels.com/photos/9359330/pexels-photo-9359330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favOrNot: false,
    },
  ]);
}
