import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiservicesService {
  constructor(private http: HttpClient) {}

  // API URL'ini tanımlıyoruz, burada JSON veri sağlayan bir API kullanılıyor.
  apiurl = 'https://api.npoint.io/49f69b6608800aec2b2e';

  // homeapi() fonksiyonu, HTTP GET isteği gönderir ve API'den veri alır.
  // Observable kullanarak veri akışı sağlanır, bu sayede veri alındığında dinleyiciye bildirilir.
  homeapi(): Observable<any> {
    // HttpClient servisi ile belirtilen API URL'sine GET isteği gönderiyoruz.
    // `${this.apiurl}` ifadesi, tanımladığımız apiurl değişkenini URL'ye ekler.
    // Bu fonksiyon, API'den dönen yanıtı (response) almak için bir Observable döndürür.
    return this.http.get(`${this.apiurl}`);
  }
}
