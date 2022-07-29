import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game';
import { Player } from '../models/player';

export interface Message {
  user: string;
  messageContent: string;
}

@Injectable({
  providedIn: 'root'
})

export class GameService {
  #url!: string;
  #gameSubject: BehaviorSubject<Game> = new BehaviorSubject<Game>({} as Game);
  public readonly game: Observable<Game> = this.#gameSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.#url = environment.gameUrls.game;
  }

  createGame(gameToCreate: any): any {
    return this.http.post<Game>(this.#url, gameToCreate);
  }

  startGame(gameId: string): any {
    return this.http.put<Game>(`${this.#url}start/${gameId}`, {});
  }

  joinToGame(gameId: string, player: Player): any {
    return this.http.put<Game>(`${this.#url}join/${gameId}`, player);
  }

  public setGameSubject(game: Game) {
    this.#gameSubject.next(game);
  }
}

