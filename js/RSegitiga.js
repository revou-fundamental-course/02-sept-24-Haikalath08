function HitungLuas(){
  event.preventDefault();

  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
 
  if(isNaN(alas) || isNaN(tinggi)) {
    alert("Please Input The Valid Numbers")
    return;
  }
 
  const luas = 0.5 * alas * tinggi;
  document.getElementById('Luas').textContent = luas.toFixed(2);
}

function HitungKeliling() {
  event.preventDefault();

  const sisi1 = parseFloat(document.getElementById('sisi1').value);
  const sisi2 = parseFloat(document.getElementById('sisi2').value);
  const sisi3 = parseFloat(document.getElementById('sisi3').value);
  
  if(isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
    alert("Please Input Valid Numbers All Sides")
    return;
  }
  
  const keliling = sisi1 + sisi2 + sisi3;
  document.getElementById('Keliling').textContent = keliling.toFixed(2);
}

