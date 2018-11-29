import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerService, Player } from '../services/player.service';
import { Game } from '../services/game.service';

export enum PlayerDialogState {
  ADD = "ADD",
  EDIT = "EDIT",
  SHOW = "SHOW"
}

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss'],
  providers: [ PlayerService ]
})
export class PlayerDialogComponent implements OnInit {
  playerData: Player;
  games: Object[];
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
    @Inject(MAT_DIALOG_DATA) public data: [PlayerDialogState, Player, Object[]],
    public snackBar: MatSnackBar,
    private playerService: PlayerService) {
      dialogRef.disableClose = true;

      this.mode = data[0];
      this.playerData = data[1];
      this.games = data[2];

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

      if(control.controls) {
        this.setFormTouched(control);
      }
    });
  }

  onAddClick(): void {
    if(this.playerForm.valid) {
      this.playerService.addOne(this.playerForm.value).subscribe((playerAdded: boolean) => {
        if(playerAdded) {
          this.dialogRef.close(this.playerForm.value);
          this.snackBar.open("Successfully added player!", "OK");
        } else {
          this.dialogRef.close(null);
          this.snackBar.open("Something went wrong", "CLOSE");
        }
      })
    } else {
      this.setFormTouched(this.playerForm);
      this.snackBar.open("Please check for errors", "CLOSE");
    }
  }

  onUpdateClick(): void {
    if(this.playerForm.valid) {
      this.playerService.updateOne(this.playerData['_id'], this.playerForm.value)
      .subscribe((playerAdded: boolean) => {
        if(playerAdded) {
          this.dialogRef.close(this.playerForm.value);
          this.snackBar.open("Successfully updated player!", "OK");
        } else {
          this.dialogRef.close(null);
          this.snackBar.open("Something went wrong", "CLOSE");
        }
      });
    } else {

      this.setFormTouched(this.playerForm);
      this.snackBar.open("Please check for errors", "CLOSE");
    }
  }

  onJoinClick(): void {
    if(this.playerForm.controls.gamePlayed.valid) {
      const playerId = this.playerData['_id'];
      const gameId = this.playerForm.controls.gamePlayed.value['_id']

      this.playerService.joinGame(playerId, gameId).subscribe(joinedGame => {
        if(joinedGame) {
          this.dialogRef.close(true);
          this.snackBar.open("Successfully joined game!", "OK");
        } else {
          this.dialogRef.close(false);
          this.snackBar.open("Something went wrong", "CLOSE");
        }
      })
    }
    console.log(this.playerForm.value);
  }
  
  getMode(): string {
    return this.mode;
  }

  getRanks() {
    return ["1", "2", "3", "4", "5"];
  }

  getGames(): Object[] {
    return this.games;
  }

  getStatuses() {
    return ["Availible", "Busy"];
  }

  getPlayer(): Player {
    return this.playerData;
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
