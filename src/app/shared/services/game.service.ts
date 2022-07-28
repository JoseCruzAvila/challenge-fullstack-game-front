import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';

export interface Message {
  user: string;
  messageContent: string;
}

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private url: string;

  public messages!: Subject<any>;

  constructor(private http: HttpClient) {
    this.url = `${environment.gameUrls.card}api/`;    
  }

  createCard(data : Card): Observable<any> {
    return this.http.post(`${this.url}card/create`, data, { responseType: 'text' });
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.url}card`);
  }

  updateCard(data : Card){
    return this.http.post(`${this.url}card/create`, data, { responseType: 'text' });
  }
}

