import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTable, MatSnackBar } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { PlayerDialogComponent, PlayerDialogState } from '../player-dialog/player-dialog.component';

export interface Player {
  playerName: string;
  rank: Number;
  score: Number;
  time: string;
  gamePlayed: string;
  status: string;
  option: string;
}

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

const LOBBY_DATA: Player[] = [
  { playerName: "faker", rank: 1, score: 100000, time: "5h", gamePlayed: "League", status: "Busy", option: "" },
  { playerName: "shroud", rank: 2, score: 333, time: "10h", gamePlayed: "CS GO", status: "Available", option: "Join Game" },
  { playerName: "oddone", rank: 3, score: 7777, time: "3d", gamePlayed: "Overwatch", status: "Available", option: "Join Game" }
];

const GAME_DATA: Game[] = [
  { title: "Diablo 3", platform: "PC", genre: "RPG", publisher: "Blizzard", release: 2015, status: "Active" },
  { title: "Call Of Duty", platform: "Xbox", genre: "FPS", publisher: "Activision", release: 2013, status: "Active" },
  { title: "League of Legends", platform: "PC", genre: "MOBA", publisher: "Riot", release: 2011, status: "Active" }
];

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<Player[]>;

  tab: LobbyTab;
  playerTableData: Player[] = LOBBY_DATA;
  playerTableColumns: string[] = ["playerName", "rank", "score", "time", "gamePlayed", "status", "option"];

  gameTableData: Game[] = GAME_DATA;
  gameTableColumns: string[] = ["title", "platform", "genre", "publisher", "release", "status"];

  private admin: boolean;

  LobbyTab = LobbyTab;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { 
    
    this.admin = false;
    this.tab = LobbyTab.PLAYERS;
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

  isAdmin(): boolean {
    return this.admin;
  }

  onLogoutClick(): void {
    this.admin = false;
  }

  onLoginClick(): void {
    this.openLoginDialog();
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: "60%"
    }).afterClosed().subscribe((loggedIn: boolean) => {
      if(loggedIn) {
        this.admin = true;
      }
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
      console.log(player);
      if(player) {
        this.playerTableData.push(player);
        this.table.renderRows();
      }
    });
  }

  onDeletePlayerClick(index: number): void {
    this.playerTableData.splice(index, 1);
    this.snackBar.open("Succesfully deleted player", "OK");
    this.table.renderRows();
    
  }

  onEditPlayerClick(index: number): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: "70%",
      data: [PlayerDialogState.EDIT, this.playerTableData[index]],
      autoFocus: false
    }).afterClosed().subscribe((player: Player) => {
      if(player) {
        this.playerTableData[index] = player;
        this.table.renderRows();
      }
    });
  }

  ngOnInit() { }
}