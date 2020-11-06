window.onload = () => {
  let botonSorteo = document.getElementById('sortear');
  botonSorteo.addEventListener('click', (e) => {
    let nombre = document.getElementById('nombre').value;
    let celular = document.getElementById('celular').value;
    let cedula = document.getElementById('cedula').value;
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    var url = 'https://api.hsforms.com/submissions/v3/integration/submit/6697637/e23c6c12-0eec-4193-b3f4-637dd6553450'
    var data = {
      "submittedAt": new Date().getTime(),
      "fields": [
        { "name": "firstname", "value": nombre },
        { "name": "celular", "value": celular },
        { "name": "cedula", "value": cedula }
      ]
    }
    let final_data = JSON.stringify(data)
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) { 
          window.location.href = "jackpot"
        }
       }
    xhr.send(final_data)
  })
};
