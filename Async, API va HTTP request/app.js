

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "POST", // So'rov turi
    headers: {
      "Content-Type": "application/json", // JSON formatini aniqlaydi
    },
    body: JSON.stringify({
      title: "Yangi post",
      body: "Bu postning mazmuni",
      userId: 1,
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP xatosi: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Yangi post:", data);
    })
    .catch(error => {
      console.error("Xatolik yuz berdi:", error);
    });