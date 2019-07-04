const button = {
  render: () => {
    const button = document.createElement("button");
    button.classList.add("my-4", "bg-teal-500", "hover:bg-teal-700", "border-teal-500", "hover:border-teal-700", "text-sm", "border-4", "text-white", "py-1", "px-2", "rounded")
    button.innerText = "Sign in";
    window.document.body.querySelector("main").appendChild(button);
  }
}

export default button;
