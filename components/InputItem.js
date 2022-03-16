export default function inputItem(props) {
  const { blogId, postId, packageName } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const { blogId, postId, packageName, updateBTN } = e.target;
    updateBTN.innerText = "Processing...";

    try {
      fetch(`./api/store/${blogId.value}/${postId.value}/${packageName.value}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            updateBTN.innerText = "Success";
            updateBTN.classList.add("bg-green-500");
          } else {
            updateBTN.innerText = "error";
            updateBTN.classList.add("bg-red-500");
          }
        });
    } catch (err) {
      updateBTN.innerText = "error";
      updateBTN.classList.add("bg-red-500");
    }
  };
  return (
    <form className="m-4 ml-0 flex" onSubmit={handleSubmit}>
      <input
        className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        defaultValue={blogId}
        name="blogId"
        placeholder="Blog ID"
        required
      />
      <input
        className="p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        defaultValue={postId}
        name="postId"
        placeholder="Blog ID"
        required
      />
      <input
        className="p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        defaultValue={packageName}
        name="packageName"
        placeholder="Blog ID"
        required
      />
      <button
        type="submit"
        name="updateBTN"
        className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
      >
        Update
      </button>
    </form>
  );
}
