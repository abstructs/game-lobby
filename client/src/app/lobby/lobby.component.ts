import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTable, MatSnackBar } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { PlayerDialogComponent, PlayerDialogState } from '../player-dialog/player-dialog.component';
import { UserService } from '../services/user.service';
import { Player, PlayerService } from '../services/player.service';

export interface Game {
  title: string;
  platform: string;
  genre: string;
  publisher: string;
  release: Number;
  status: string;
}

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
  providers:  [ UserService ]
})
export class LobbyComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<Player[]>;

  tab: LobbyTab;
  loading: boolean;
  playerTableData: Player[];
  playerTableColumns: string[] = ["name", "rank", "score", "time", "gamePlayed", "status", "option"];

  gameTableData: Game[] = GAME_DATA;
  gameTableColumns: string[] = ["title", "platform", "genre", "publisher", "release", "status"];

  LobbyTab = LobbyTab;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,
    private userService: UserService, private playerService: PlayerService) { 
    this.tab = LobbyTab.PLAYERS;
    this.playerTableData = [];
    // this.playerTableData = this.playerService.findAll().sub
    this.getPlayerData();
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
  }

  onPlayersClick() {
    this.tab = LobbyTab.PLAYERS;
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

  onAddPlayerClick(index: number): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: "70%",
      data: [PlayerDialogState.ADD, this.playerTableData[index]],
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
      data: [PlayerDialogState.EDIT, this.playerTableData[index]],
      autoFocus: false
    }).afterClosed().subscribe((player: Player) => {
      if(player) {
        this.getPlayerData();
      }
    });
  }

  ngOnInit() { }
}