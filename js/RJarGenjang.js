function HitungLuas(){
    event.preventDefault();
  
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
   
    if(isNaN(alas) || isNaN(tinggi)) {
      alert("Please Input The Valid Numbers For Alas And Tinggi")
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
  
  
