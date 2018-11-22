import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTable, MatSnackBar } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { PlayerDialogComponent, PlayerDialogState } from '../player-dialog/player-dialog.component';
import { UserService } from '../services/user.service';
import { Player, PlayerService } from '../services/player.service';
import { GameService, Game } from '../services/game.service';
import { GameDialogComponent, GameDialogState } from '../game-dialog/game-dialog.component';
import { forkJoin, Observable } from 'rxjs';

export enum LobbyTab {
  PLAYERS = "PLAYERS",
  GAMES = "GAMES"
}

// const LOBBY_DATA: Player[] = [
//   { name: "faker", rank: 1, score: 100000, time: "5h", gamePlayed: "League", status: "Busy", option: "" },
//   { name: "shroud", rank: 2, score: 333, time: "10h", gamePlayed: "CS GO", status: "Available", option: "Join Game" },
//   { name: "oddone", rank: 3, score: 7777, time: "3d", gamePlayed: "Overwatch", status: "Available", option: "Join Game" }
// ];

const GAME_DATA: Game[] = [
  { title: "Diablo 3", platform: "PC", genre: "RPG", publisher: "Blizzard", release: 2015, status: "Active" },
  { title: "Call Of Duty", platform: "Xbox", genre: "FPS", publisher: "Activision", release: 2013, status: "Active" },
  { title: "League of Legends", platform: "PC", genre: "MOBA", publisher: "Riot", release: 2011, status: "Active" }
];

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
  providers:  [ UserService, GameService ]
})
export class LobbyComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<Player[]>;

  tab: LobbyTab;
  loading: boolean;
  playerTableData: Player[];
  playerTableColumns: string[] = ["name", "rank", "score", "time", "gamePlayed", "status", "options"];

  gameTableData: Game[];
  gameTableColumns: string[] = ["title", "platform", "genre", "publisher", "release", "status", "options"];

  LobbyTab = LobbyTab;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,
    private userService: UserService, private playerService: PlayerService,
    private gameService: GameService) { 
    this.tab = LobbyTab.PLAYERS;
    this.playerTableData = [];
    this.gameTableData = [];

    this.getTableData();
  }

  getTableData() {
    this.loading = true;

    forkJoin(this.getPlayerData(), this.getGameData()).subscribe(_ => {
      this.loading = false;
    });
  }

  getGameData(): Observable<Game[]> {
    const getGamesObserver = this.gameService.findAll();

    getGamesObserver.subscribe((games: Game[]) => this.gameTableData = games);

    return getGamesObserver;
  }

  getPlayerData(): Observable<Player[]> {
    const getPlayersObserver = this.playerService.findAll();

    getPlayersObserver.subscribe((players: Player[]) => this.playerTableData = players);    

    return getPlayersObserver;
  }

  getTab() {
    return this.tab;
  }

  onGamesClick() {
    this.tab = LobbyTab.GAMES;
  }

  onPlayersClick() {
    this.tab = LobbyTab.PLAYERS;
    this.getPlayerData();
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  onLogoutClick(): void {
    this.userService.logout();
  }

  onLoginClick(): void {
    this.openLoginDialog();
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: "60%"
    });
  }

  onJoinGameClick(index: number): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: "70%",
      data: [PlayerDialogState.SHOW, this.playerTableData[index], this.gameTableData],
      autoFocus: false
    }).afterClosed().subscribe(joinedGame => {
      if(joinedGame) this.getPlayerData();
    });
  }

  onAddGameClick(index: number): void {
    const dialogRef = this.dialog.open(GameDialogComponent, {
      width: "70%",
      data: [GameDialogState.ADD, this.gameTableData[index]],
      autoFocus: false
    }).afterClosed().subscribe((game: Game) => {
      if(game) this.getGameData();
    });
  }

  onEditGameClick(index: number): void {
    const dialogRef = this.dialog.open(GameDialogComponent, {
      width: "70%",
      data: [GameDialogState.EDIT, this.gameTableData[index]],
      autoFocus: false
    }).afterClosed().subscribe((game: Game) => {
      if(game) this.getGameData();
    });
  }

  onDeleteGameClick(index: number): void {
    const game = this.gameTableData[index];
    this.gameService.removeOne(game['_id']).subscribe(removed => {
      if(removed) {
        this.snackBar.open("Succesfully deleted game", "OK");
        this.getGameData();
      } else {
        this.snackBar.open("Something went wrong", "CLOSE");
      }
    });
  }

  onAddPlayerClick(index: number): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: "70%",
      data: [PlayerDialogState.ADD, this.playerTableData[index], this.gameTableData],
      autoFocus: false
    }).afterClosed().subscribe((player: Player) => {
      if(player) this.getPlayerData();
    });
  }

  onDeletePlayerClick(index: number): void {
    const player = this.playerTableData[index];
    this.playerService.removeOne(player['_id']).subscribe(removed => {
      if(removed) {
        this.snackBar.open("Succesfully deleted player", "OK");
        this.getPlayerData();
      } else {
        this.snackBar.open("Something went wrong", "CLOSE");
      }
    });
  }

  onEditPlayerClick(index: number): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: "70%",
      data: [PlayerDialogState.EDIT, this.playerTableData[index], this.gameTableData],
      autoFocus: false
    }).afterClosed().subscribe((player: Player) => {
      if(player) this.getTableData();      
    });
  }

  ngOnInit() { }
}