import { Player } from "./player";

export interface Game {
    gameId: string;
    playing: boolean;
    winner: Player;
    players: Player[];
    maxCardsByPlayer: number;
    maxPlayers: number;
    minPlayers: number;
    currentPlayersNumber: number;
}