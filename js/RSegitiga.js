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


// function hitungLuas() {
//   const alas = document.getElementById('alas');
//   const tinggi = document.getElementById('tinggi');
//   const HitungLuasButton = document.getElementById('HitungLuas');
//   const LuasResult = document.getElementById('LuasResult');

//   const sisi1 = document.getElementById('sisi1')
//   const sisi2 = document.getElementById('sisi2')
//   const sisi3 = document.getElementById('sisi3')
//   const HitungKelilingButton = document.getElementById('HitungKeliling')
//   const kelilingResult = document.getElementById('KelilingResult')

//   hitungLuasButton.addEventListener('click', () => {
//     const alasValue = parseFloat(alas.value);
//     const tinggiValue = parseFloat(tinggi.value);

//     if (!isNaN(alasValue) && !isNaN(tinggiValue)) {
//         const luas = (1 / 2) * alasValue * tinggiValue;
//         luasResult.textContent = `Luas Segitiga: ${luas.toFixed(2)}`;
//     } else {
//         luasResult.textContent = "Masukkan angka yang valid!";
//     }
// });

// hitungKelilingButton.addEventListener('click', () => {
//     const sisi1Value = parseFloat(sisi1.value);
//     const sisi2Value = parseFloat(sisi2.value);
//     const sisi3Value = parseFloat(sisi3.value);

//     if (!isNaN(sisi1Value) && !isNaN(sisi2Value) && !isNaN(sisi3Value)) {
//         const keliling = sisi1Value + sisi2Value + sisi3Value;
//         kelilingResult.textContent = `Keliling Segitiga: ${keliling.toFixed(2)}`;
//     } else {
//         kelilingResult.textContent = "Masukkan angka yang valid!";
//     }
// });



  // const alas = parseFloat(document.getElementById('alas').value)
  // const tinggi = parseFloat(document.getElementById('tinggi').value)
  // const luas = 0.5 * alas * tinggi;

  // document.getElementById('luas').value = luas;
  // }

  // function HitungKeliling() {
  //   const sisi1 = parseFloat(document.getElementById('sisi1').value);
  //   const sisi2 = parseFloat(document.getElementById('sisi2').value);
  //   const sisi3 = parseFloat(document.getElementById('sisi3').value);
  //   const keliling = sisi1 + sisi2 + sisi3;
  //   document.getElementById('keliling').value = keliling;
  // }