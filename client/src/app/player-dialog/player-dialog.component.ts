import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Player } from '../lobby/lobby.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  playerForm: FormGroup;

  ngOnInit() {
  }
  
  get name() {
    return this.playerForm.get('name');
  }

  get rank() {
    return this.playerForm.get('rank');
  }

  get time() {
    return this.playerForm.get('time');
  }

  get score() {
    return this.playerForm.get('score');
  }

  get gamePlayed() {
    return this.playerForm.get('gamePlayed');
  }

  get status() {
    return this.playerForm.get('status');
  }

  PlayerDialogState = PlayerDialogState;

  constructor(public dialogRef: MatDialogRef<PlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [PlayerDialogState, Player],
    public snackBar: MatSnackBar) {
      dialogRef.disableClose = true;

      this.mode = data[0];
      this.playerData = data[1];
      
      // if(this.playerData) {
      this.playerForm = new FormGroup({
        name: new FormControl(this.playerData ? this.playerData.name : '', [
          Validators.required
        ]),
        rank: new FormControl(this.playerData ? this.playerData.rank : '', [
          Validators.required
        ]),
        score: new FormControl(this.playerData ? this.playerData.score: '', [
          Validators.required
        ]),
        time: new FormControl(this.playerData ? this.playerData.time : '', [
          Validators.required
        ]),
        gamePlayed: new FormControl(this.playerData ? this.playerData.gamePlayed : '', [
          Validators.required
        ]),
        status: new FormControl(this.playerData ? this.playerData.status : '', [
          Validators.required
        ])
      });
    }
  
  setFormTouched(formGroup: FormGroup): void {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.setFormTouched(control);
      }
    });
  }

  onAddClick(): void {
    if(this.playerForm.invalid) {
      this.setFormTouched(this.playerForm);
      this.snackBar.open("Please check for errors.", "CLOSE");
    } else {
      this.dialogRef.close(this.playerForm.value);
      this.snackBar.open("Successfully added player!", "OK");
    }
  }

  onUpdateClick(): void {
    if(this.playerForm.invalid) {
      this.setFormTouched(this.playerForm);
      this.snackBar.open("Please check for errors", "CLOSE");
    } else {
      this.dialogRef.close(this.playerForm.value);
      this.snackBar.open("Successfully updated player!", "OK");
    }
  }

  onJoinClick(): void {
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
    return ["Available", "Busy"];
  }

  getPlayer(): Player {
    return this.playerData;
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
