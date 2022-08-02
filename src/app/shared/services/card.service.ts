import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private url: string;

  public messages!: Subject<any>;

  constructor(private http: HttpClient) {
    this.url = `${environment.gameUrls.card}`;    
  }

  createCard(data : Card): Observable<any> {
    return this.http.post(`${this.url}create`, data, { responseType: 'text' });
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.url}`);
  }

  updateCard(data : Card){
    return this.http.post(`${this.url}create`, data, { responseType: 'text' });
  }
}
