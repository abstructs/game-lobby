import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTable, MatSnackBar } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { PlayerDialogComponent, PlayerDialogState } from '../player-dialog/player-dialog.component';
import { UserService } from '../services/user.service';
import { Player, PlayerService } from '../services/player.service';
import { GameService, Game } from '../services/game.service';
import { GameDialogComponent, GameDialogState } from '../game-dialog/game-dialog.component';

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
  playerTableColumns: string[] = ["name", "rank", "score", "time", "gamePlayed", "status", "option"];

  gameTableData: Game[];
  gameTableColumns: string[] = ["title", "platform", "genre", "publisher", "release", "status"];

  LobbyTab = LobbyTab;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,
    private userService: UserService, private playerService: PlayerService,
    private gameService: GameService) { 
    this.tab = LobbyTab.PLAYERS;
    this.playerTableData = [];
    this.gameTableData = [];

    this.getAllData();
  }

  getAllData() {
    this.loading = true;
    this.playerService.findAll().subscribe((players: Player[]) => {
      this.playerTableData = players;

      this.gameService.findAll().subscribe((games: Game[]) => {
        this.loading = false;
        this.gameTableData = games;
      });
    });
  }

  getGameData() {
    this.loading = true;
    this.gameService.findAll().subscribe((games: Game[]) => {
      this.loading = false;
      this.gameTableData = games;
    });
  }

  getPlayerData() {
    this.loading = true;
    this.playerService.findAll().subscribe((players: Player[]) => {
      this.loading = false;
      this.playerTableData = players;
    });
  }

  getTab() {
    return this.tab;
  }

  onGamesClick() {
    this.tab = LobbyTab.GAMES;
    this.getGameData();
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

  onJoinLobbyClick(index: number): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: "70%",
      data: [PlayerDialogState.SHOW, this.playerTableData[index]],
      autoFocus: false
    })
  }

  onAddGameClick(index: number): void {
    const dialogRef = this.dialog.open(GameDialogComponent, {
      width: "70%",
      data: [GameDialogState.ADD, this.gameTableData[index]],
      autoFocus: false
    }).afterClosed().subscribe((game: Game) => {
      if(game) {
        this.getGameData();
      }
    });
  }

  onAddPlayerClick(index: number): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: "70%",
      data: [PlayerDialogState.ADD, this.playerTableData[index], this.gameTableData],
      autoFocus: false
    }).afterClosed().subscribe((player: Player) => {
      if(player) {
        this.getPlayerData();
      }
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
      if(player) {
        this.getPlayerData();
      }
    });
  }

  ngOnInit() { }
}