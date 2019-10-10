["world", "mars", "bob"].map(n => {
    const d = document.createElement("div");
    d.textContent = `hello ${n}`;
    document.body.appendChild(d);
})
