const envioFormulario =(event)=> {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    const data = {
        name: name,
        email: email
    };

    fetch("http://localhost:3000/proxy", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => console.error('Erro:', error));
};

document.getElementById('form').addEventListener('submit', envioFormulario);