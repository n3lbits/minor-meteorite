const is = document.getElementById("is");
if (is)
    is.onclick = async (e) =>
        ((e.target as HTMLElement).textContent = await fetch("/api/is").then(
            (r) => r.text(),
        ));