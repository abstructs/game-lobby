import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Player } from '../lobby/lobby.component';
import { FormControl, FormGroup } from '@angular/forms';

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

  playerForm = new FormGroup({
    playerName: new FormControl(''),
    rank: new FormControl(''),
    score: new FormControl(''),
    time: new FormControl(''),
    gamePlayed: new FormControl(''),
    status: new FormControl('')
  });

  PlayerDialogState = PlayerDialogState;

  constructor(public dialogRef: MatDialogRef<PlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [PlayerDialogState, Player]) {
      this.mode = data[0];
      this.playerData = data[1];
      
      if(this.playerData) {
        this.playerForm = new FormGroup({
          playerName: new FormControl(this.playerData.playerName),
          rank: new FormControl(this.playerData.rank),
          score: new FormControl(this.playerData.score),
          time: new FormControl(this.playerData.time),
          gamePlayed: new FormControl(this.playerData.gamePlayed),
          status: new FormControl(this.playerData.status)
        });
      }
    }

  onAddClick() {
    this.dialogRef.close(this.playerForm.value);
  }

  onUpdateClick() {
    console.log(this.playerForm.value);
  }

  onJoinClick() {
    console.log(this.playerForm.value);
  }
  
  getMode(): string {
    return this.mode;
  }

  getRanks() {
    return [1, 2, 3, 4, 5];
  }

  getGames() {
    return ["League", "CS GO", "Overwatch"];
  }

  getStatuses() {
    return ["Avalible", "Busy"];
  }

  getPlayer(): Player {
    return this.playerData;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
