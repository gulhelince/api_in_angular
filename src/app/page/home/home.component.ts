import { Component, OnInit } from '@angular/core';
//call apiservices
import { ApiservicesService } from '../apiservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiservicesService) { }

  // Kategori listesi, kullanıcıların seçim yapabileceği kategoriler
categoryList: any = ['all', 'hosting', 'ecommerce', 'finance', 'course', 'product', 'travel'];

// API'den alınan tüm veriler burada saklanacak
showAllData: any = [];

// Kullanıcının seçtiği kategori
filterName: any;

// Seçilen kategoriye göre filtrelenmiş veriler
filterData: any = [];

// Verilerin ekranda görüntülenip görüntülenmeyeceğini kontrol eden bayrak değişkeni
showData: any;

ngOnInit(): void {
  // Bileşen yüklendiğinde ilk olarak homeData() fonksiyonunu çağırır
  this.homeData();
}

// API'den veri çeken fonksiyon
homeData() {
  // Servis aracılığıyla API çağrısı yapılır
  this.service.homeapi().subscribe((result) => {
    console.log(result, 'result#'); // Gelen veriler konsola yazdırılır
    if (result.length > 0) {
      // API'den gelen veri varsa, tüm veri showAllData'ya atanır
      this.showAllData = result;
      // Verilerin görüntülenmesi için bayrak değişkeni true yapılır
      this.showData = true;
    }
  });
}

// Kategori değiştiğinde çağrılan fonksiyon
onChange(e: any) {
  console.log(e.target.value, 'categoryvalue'); // Seçilen kategori konsola yazdırılır

  // Yeni kategori seçildiği için başlangıçta veriler gizlenir
  this.showData = false;

  // Kullanıcının seçtiği kategori değeri alınır
  this.filterName = e.target.value;

  // Filtreleme yapılacağı için filterData boşaltılır
  this.filterData = [];

  // Tüm verilerde dolaşarak seçilen kategoriye uygun olanları filtreler
  this.showAllData.filter((element: any) => {
    // Eğer "All" seçildiyse tüm veriler filtreye eklenir
    if (this.filterName == 'All') {
      this.filterData.push(element);
    } else {
      // Seçilen kategoriye uygun olan veriler filtreye eklenir
      if (element.category == this.filterName.toLowerCase()) {
        this.filterData.push(element);
      }
    }
  });

  // Filtrelenen veriler konsola yazdırılır
  console.log(this.filterData, 'filterData##');
}
}
