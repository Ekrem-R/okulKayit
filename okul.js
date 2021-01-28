/**Okul kayit ekraninda ogrenci kaydetme ve silme 
 * Diger islemler (ogrenci sayisi ,inputlarin bos kalmamasi)
 * Form islemleri bootstrap dan alinmistir.
 * Bu programda UI prototype kullanilmistir.
 */
document.querySelector("#kullaniciForm").addEventListener("submit",kullaniciEkle);
document.querySelector("#ogrenciListesi").addEventListener("click",ogrenciSil);
let count=0;

UI.prototype.ogrenciEkle=function(lists){
    const list=document.querySelector("#ogrenciListesi");

    const ulLists=document.createElement("tr");
    ulLists.innerHTML=`<td>${lists.kullaniciAdi}</td>
    <td>${lists.kullaniciSoyadi}</td>
    <td>${lists.locationName}</td>
    <td>${lists.phoneNumber}</td>
    <td>${lists.zipCode}</td>
    <td class="fas fa-trash"></td>`;
    list.appendChild(ulLists);
}

UI.prototype.formTemizleme=function(){
document.querySelector("#validationCustom01").value="";
document.querySelector("#validationCustom02").value="";
document.querySelector("#validationCustom03").value="";
document.querySelector("#validationCustom04").value="";
document.querySelector("#validationCustom05").value="";

}
UI.prototype.ogrenciListesiSil=function (hedef) {
   if( hedef.className =="fas fa-trash"){
       hedef.parentElement.remove();
   }


}






