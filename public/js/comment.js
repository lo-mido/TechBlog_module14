const newFormHandler = async (event) => {
  event.preventDefault();

  const commentBody = document.querySelector("#comment").value;
  const link = document.location.href.split("");
  const postId = link[postId.length - 1]

  if (commentBody) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ commentBody, postId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
    //   document.location.reload();
    } else {
      alert("Failed to create comment");
      console.log(response)
    }
  }
};

document
  .querySelector(".submitBtn")
  .addEventListener("click", newFormHandler);
