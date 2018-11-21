import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Game, GameService } from '../services/game.service';

// const OPTIONS: string[] = ["Option 1", "Option 2", "Option 3"];

export enum GameDialogState {
  ADD = "ADD",
  EDIT = "EDIT"
}

@Component({
  selector: 'app-game-dialog',
  templateUrl: './game-dialog.component.html',
  styleUrls: ['./game-dialog.component.css'],
  providers: [ GameService ]
})
export class GameDialogComponent implements OnInit {

  // options: string[] = OPTIONS;
  gameData: Game;
  // games: Game[];
  mode: string;

  gameForm: FormGroup;

  ngOnInit() {
  }
  
  get title() {
    return this.gameForm.get('title');
  }

  get platform() {
    return this.gameForm.get('platform');
  }

  get genre() {
    return this.gameForm.get('genre');
  }

  get publisher() {
    return this.gameForm.get('publisher');
  }

  get release() {
    return this.gameForm.get('release');
  }

  get status() {
    return this.gameForm.get('status');
  }

  GameDialogState = GameDialogState;

  constructor(public dialogRef: MatDialogRef<GameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [GameDialogState, Game],
    public snackBar: MatSnackBar,
    private gameService: GameService) {
      dialogRef.disableClose = true;

      this.mode = data[0];
      this.gameData = data[1];
      
      this.gameForm = new FormGroup({
        title: new FormControl(this.gameData ? this.gameData.title : '', [
          Validators.required
        ]),
        platform: new FormControl(this.gameData ? this.gameData.platform : '', [
          Validators.required
        ]),
        genre: new FormControl(this.gameData ? this.gameData.genre: '', [
          Validators.required
        ]),
        publisher: new FormControl(this.gameData ? this.gameData.publisher : '', [
          Validators.required
        ]),
        release: new FormControl(this.gameData ? this.gameData.release : '', [
          Validators.required
        ]),
        status: new FormControl(this.gameData ? this.gameData.status : '', [
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
    if(this.gameForm.valid) {
      this.gameService.addOne(this.gameForm.value).subscribe((playerAdded: boolean) => {
        if(playerAdded) {
          this.dialogRef.close(this.gameForm.value);
          this.snackBar.open("Successfully added player!", "OK");
        } else {
          this.dialogRef.close(null);
          this.snackBar.open("Something went wrong", "CLOSE");
        }
      })
    } else {
      this.setFormTouched(this.gameForm);
      this.snackBar.open("Please check for errors", "CLOSE");
    }
  }

  onUpdateClick(): void {
    if(this.gameForm.valid) {
      this.gameService.updateOne(this.gameForm['_id'], this.gameForm.value)
      .subscribe((gameAdded: boolean) => {
        if(gameAdded) {
          this.dialogRef.close(this.gameForm.value);
          this.snackBar.open("Successfully updated game!", "OK");
        } else {
          this.dialogRef.close(null);
          this.snackBar.open("Something went wrong", "CLOSE");
        }
      });
    } else {

      this.setFormTouched(this.gameForm);
      this.snackBar.open("Please check for errors", "CLOSE");
    }
  }
  
  getMode(): string {
    return this.mode;
  }

  getRanks() {
    return [1, 2, 3, 4, 5];
  }

  // getGames(): Game[] {
  //   return this.games;
  // }

  getStatuses() {
    return ["Availible", "Busy"];
  }

  getGame(): Game {
    return this.gameData;
  }

  // getPlayer(): Player {
  //   return this.playerData;
  // }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
