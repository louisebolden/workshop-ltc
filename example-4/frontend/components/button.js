const button = {
  render: () => {
    document.querySelector("button").addEventListener("click", () => {
      fetch("http://localhost:3000/data-please")
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log("data:", data);

          // your work goes here
        })
        .catch(error => {
          console.log('There has been a problem with your fetch operation: ', error.message);
        });
    });
  }
}

export default button;
