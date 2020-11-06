window.onload = () => {
  let botonSorteo = document.getElementById('sortear');
  botonSorteo.addEventListener('click', (e) => {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    var url = 'https://api.hsforms.com/submissions/v3/integration/submit/6697637/e23c6c12-0eec-4193-b3f4-637dd6553450'
    var data = {
      "submittedAt": new Date().getTime(),
      "fields": [
        { "name": "firstname", "value": 'Rodrigo Granco' },
        { "name": "celular", "value": '0983213213' },
        { "name": "cedula", "value": '32132132' }
      ]
    }
  
    let final_data = JSON.stringify(data)
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) { 
          console.log('papu')
        }
       }
    xhr.send(final_data)
  })
};
