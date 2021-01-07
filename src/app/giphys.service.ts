import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GiphysService {
  constructor(private http: HttpClient) {}
  getGiphys() {
    return this.http.get(
      'https://hplussport.com/api/products'
      // 'https://api.giphy.com/v1/gifs/random?api_key=EFhi0dLq6QrVRgTsnS65CaiwS20kO6rH&tag=squirrels&rating=g'
    );
  }
}
