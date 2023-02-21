import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;
const pki_url = environment.pki_url;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(){
    // alt +96 : backtick ``
    const endpoint = `${base_url}/categories`;
    const pki_endpoint = pki_url;
    return this.http.get(endpoint);
    //return this.http.get(pki_endpoint);

  }

}
