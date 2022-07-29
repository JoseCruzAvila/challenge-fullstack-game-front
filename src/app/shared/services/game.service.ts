import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
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
  public messages!: Subject<any>;
  private socket_url: string;

  constructor(private http: HttpClient, private socket: GameSocket) {
    this.#url = environment.gameUrls.game;
    this.socket_url = environment.gameUrls.websocket;
  }

  createGame(gameId: string, players: Player[], currentPlayersNumber: number): any {
    return this.http.post<Game>(this.#url, {gameId, players, currentPlayersNumber});
  }

  startGame(gameId: string): any {
    return this.http.put<Game>(`${this.#url}start/${gameId}`, {});
  }

  initSocket(gameId : string): void {
    this.messages = <Subject<Message>>(
      this.socket.connect(this.socket_url + gameId).pipe(map((response: MessageEvent): any => {
        console.log(JSON.parse(response.data));
        return JSON.parse(response.data);
      }))
    );
  }
}

