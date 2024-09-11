function HitungLuas(){
    event.preventDefault();
  
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
   
    if(isNaN(alas) || isNaN(tinggi)) {
      alert("Please Input The Valid Numbers For Hitung Luas Jajar Genjang")
      return;
    }

    const luas = alas * tinggi;
    document.getElementById('Luas').textContent = luas.toFixed(2);
  }
  
  function HitungKeliling() {
    event.preventDefault();
  
    const panjang = parseFloat(document.getElementById('panjang').value);
    const lebar = parseFloat(document.getElementById('lebar').value);
    
    if(isNaN(panjang) || isNaN(lebar)) {
      alert("Please Input Valid Numbers On Panjang And Lebar")
      return;
    }
    
    const keliling = 2 * (panjang + lebar);
    document.getElementById('Keliling').textContent = keliling.toFixed(2);
  }
  
  
  // Luas Jajar Genjang
// const formLuas = document.getElementById('luas-jajargenjang');
// formLuas.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const alas = parseFloat(document.getElementById('alas').value);
//     const tinggi = parseFloat(document.getElementById('tinggi').value);
//     const luas = alas * tinggi;
//     document.getElementById('result-luas').innerHTML = `Hasil Perhitungan Luas: ${luas}`;
// });

// // Keliling Jajar Genjang
// const formKeliling = document.getElementById('keliling-jajargenjang');
// formKeliling.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const alas = parseFloat(document.getElementById('alas-keliling').value);
//     const sisi = parseFloat(document.getElementById)
// });