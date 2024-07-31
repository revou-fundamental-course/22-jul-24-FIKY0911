// Ini Javascript function

function formValidation() {
    let name = document.getElementById('name').value;
    console.log(name);

    // Pengkondisian dimana nama tidak boleh ''
    if (name === '') {
        // Code ini akan dieksekusi ketika nama = ''
        alert('Nama harus diisi!');
    } else {
        // Code ini akan dieksekusi ketika nama tidak ''
        alert('Sukses mengimput');
    }
}