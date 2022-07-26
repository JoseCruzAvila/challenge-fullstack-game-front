import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    this.url = 'http://localhost:8080/api/';
  }

  createCard(data : Card): Observable<any> {
    return this.http.post(`${this.url}card/create`, data, { responseType: 'text' });
  }

  getCards(): Observable<any> {
    return this.http.get(`${this.url}card`);
  }

  updateCard(data : Card){
    return this.http.post(`${this.url}card/create`, data, { responseType: 'text' });
  }
}

interface Card {
  id ?: string,
  image : string,
  power : number,
  description : string
}
