function myFunction() {
    document.getElementById("Dropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("Dropdown");
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  