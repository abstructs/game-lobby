import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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

const LOBBY_DATA: Player[] = [
  { playerName: "faker", rank: 1, score: 100000, time: "5h", gamePlayed: "League", status: "busy", option: "Join Game" },
  { playerName: "shroud", rank: 2, score: 333, time: "10h", gamePlayed: "CS GO", status: "busy", option: "Join Game" },
  { playerName: "oddone", rank: 3, score: 7777, time: "3d", gamePlayed: "Overwatch", status: "avalible", option: "" }
];

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  tableData: Player[] = LOBBY_DATA;
  tableColumns: string[] = ["playerName", "rank", "score", "time", "gamePlayed", "status", "option"];

  isAdmin(): boolean {
    return true;
  }

  onLogoutClick(): void {

  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: "50%"
    });
  }

  onJoinLobbyClick(index: number): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: "70%",
      data: [PlayerDialogState.SHOW, this.tableData[index]],
      autoFocus: false
    })
  }

  onAddPlayerClick(index: number): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: "70%",
      data: [PlayerDialogState.ADD, this.tableData[index]],
      autoFocus: false
    })
  }

  onDeletePlayerClick(index: number): void {

  }

  onEditPlayerClick(index: number): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: "70%",
      data: [PlayerDialogState.EDIT, this.tableData[index]],
      autoFocus: false
    })
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }
}