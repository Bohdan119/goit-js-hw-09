const mainForm = document.querySelectorAll("input, textarea");

mainForm.forEach(element => {
    element.addEventListener("input", evt => {
        const { name, value } = evt.target;
        localStorage.setItem(name, value);
    })
})



