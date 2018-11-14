import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Player } from '../lobby/lobby.component';

const OPTIONS: string[] = ["Option 1", "Option 2", "Option 3"];

export enum PlayerDialogState {
  ADD = "ADD",
  EDIT = "EDIT",
  SHOW = "SHOW"
}

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.css']
})
export class PlayerDialogComponent implements OnInit {

  options: string[] = OPTIONS;

  playerData: Player;
  mode: string;

  PlayerDialogState = PlayerDialogState;

  constructor(public dialogRef: MatDialogRef<PlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [PlayerDialogState, Player]) {
      this.mode = data[0];
      this.playerData = data[1];
    }

  getMode(): string {
    return this.mode;
  }

  getPlayer() {
    return this.playerData;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
