import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) {
    this.#url = environment.gameUrls.game;
  }

  createGame(gameId: string, players: Player[], currentPlayersNumber: number): any {
    return this.http.post<Game>(this.#url, {gameId, players, currentPlayersNumber});
  }

  startGame(gameId: string): any {
    return this.http.put<Game>(`${this.#url}start/${gameId}`, {});
  }
}

