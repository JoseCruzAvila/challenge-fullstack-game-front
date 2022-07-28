import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  #url: string;
  #playerSubject: BehaviorSubject<Player> = new BehaviorSubject<Player>({} as Player);
  public readonly player: Observable<Player> = this.#playerSubject.asObservable();

  constructor(private http: HttpClient) {
    this.#url = environment.gameUrls.player;
  }

  createPlayer(name: string, email: string): void {
    this.http.post<Player>(this.#url, {name, email}).subscribe({
      next: (value) => {
        this.#playerSubject.next(value);
      },
      error: this.#onError
    });
  }

  getPlayerData(email: string): void {
    this.http.get<Player>(`${this.#url}${email}`).subscribe({
      next: (value) => {
        this.#playerSubject.next(value);
      },
      error: this.#onError
    });
  }

  #onError(error: any) {
    console.error(error);
  }
}
