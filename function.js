function ogrenciler(kullaniciAdi,kullaniciSoyadi,locationName,phoneNumber,zipCode) {
    this.kullaniciAdi=kullaniciAdi;
    this.kullaniciSoyadi=kullaniciSoyadi;
    this.locationName=locationName;
    this.phoneNumber=phoneNumber;
    this.zipCode=zipCode;
}

function kullaniciEkle(e){
    const kullaniciAdi=document.querySelector("#validationCustom01").value;
    const kullaniciSoyAdi=document.querySelector("#validationCustom02").value;
    const locationName=document.querySelector("#validationCustom03").value;
    const phoneNumber=document.querySelector("#validationCustom04").value;
    const zipCode=document.querySelector("#validationCustom05").value;
    const checkApply=document.querySelector("#invalidCheck").checked;
   const lists= new ogrenciler(kullaniciAdi,kullaniciSoyAdi,locationName,phoneNumber,zipCode);
    const ui=new UI();  
    count++;
    if(kullaniciAdi==""||kullaniciSoyAdi==""||locationName==""||phoneNumber==""||zipCode==""||checkApply===false){
        ui.stopPropagation();
        ui.preventDefault();
    }
    ui.ogrenciEkle(lists);
    toplamOgrenci();
    ui.formTemizleme();     
    e.preventDefault();
   }

  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  function UI() {}

  function ogrenciSil(e) {
    const ui=new UI();
    ui.ogrenciListesiSil(e.target);
    count=count-1;
    toplamOgrenci();
   e.preventDefault();
   }

   function toplamOgrenci(){
    let topOgrenci=document.querySelector(".deger");
    topOgrenci.innerHTML=count;
   }
