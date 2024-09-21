const envioFormulario =(event)=> {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    const data = {
        name: name,
        email: email
    };

    fetch("https://script.google.com/macros/s/AKfycbwONzykXdPcXeUmWkFpz-_QEc1yGdcG0wgK9p2jmc3natEAb6m__iynEkjrjQCIefrH/exec", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'no-cors'
    })
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => console.error('Erro:', error));
};

document.getElementById('form').addEventListener('submit', envioFormulario);