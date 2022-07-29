import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game';
import { Player } from '../models/player';
import { GameSocket } from './socket.service';

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
  public messages!: Subject<any>;
  #socket_url!: string;

  constructor(private http: HttpClient, private router: Router,private socket: GameSocket) {
    this.#url = environment.gameUrls.game;
    this.#socket_url = environment.gameUrls.websocket;
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

  initSocket(gameId : string): void {
    this.messages = <Subject<Message>>(
      this.socket.connect(this.#socket_url + gameId).pipe(map((response: MessageEvent): any => {
        return JSON.parse(response.data);
      }))
    );
  }
}

