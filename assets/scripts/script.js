    const h1 = document.getElementById('h1');
    const h2 = document.getElementById('h2');
    

    h1.addEventListener("click", function onClick(event) {
        // 👇️ change background color
        document.body.style.backgroundColor = 'salmon';
    })

    h1.addEventListener("mouseout", (event) => {
        document.body.style.backgroundColor = 'white';
    })

    h2.addEventListener("mouseover", (e) => {
        e.target.textContent = "Hello there, You have won a million pounds"
    })

    h2.addEventListener("mouseout", (e) => {
        e.target.textContent = "This is the H2 Tag"
    })





