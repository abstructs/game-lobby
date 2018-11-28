import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MatSnackBar, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Player, PlayerService } from '../services/player.service';
import { GameService } from '../services/game.service';
import { LobbyTab } from '../lobby/lobby.component';

@Component({
  selector: 'app-search-bottom-sheet',
  templateUrl: './search-bottom-sheet.component.html',
  styleUrls: ['./search-bottom-sheet.component.scss'],
  providers:  [ PlayerService, GameService ]
})
export class SearchBottomSheetComponent {    

  searchForm: FormGroup;
  tab: LobbyTab;

  get query() {
    return this.searchForm.get('query');
  }

  get field() {
    return this.searchForm.get('field');
  }

  LobbyTab = LobbyTab;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: [LobbyTab], 
      private bottomSheetRef: MatBottomSheetRef<SearchBottomSheetComponent>, 
      public snackBar: MatSnackBar, private playerService: PlayerService,
      private gameService: GameService) { 

    this.tab = data[0];

    this.searchForm = new FormGroup({
      field: new FormControl( 
        this.getTab() == LobbyTab.PLAYERS ? 
        this.getFirstPlayerField() :
        this.getFirstGameField(), [
        Validators.required
      ]),
      query: new FormControl('', [
        Validators.maxLength(30)
      ])
    });
  }

  getTab() {
    return this.tab;
  }

  getFirstPlayerField() {
    return "Name";
  }

  getPlayerFields() {
    return ["Name", "Rank", "Score", "Time", "Game Played", "Status"];
  }

  getFirstGameField() {
    return "Title";
  }

  getGameFields() {
    return ["Title", "Platform", "Genre", "Publisher", "Release", "Status"];
  }

  setFormTouched(formGroup: FormGroup): void {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if(control.controls) {
        this.setFormTouched(control);
      }
    });
  }
  
  onSearchKeyPress() {
    if(this.searchForm.valid) {
      let field = this.field.value.toLowerCase();
      const query = this.query.value.toLowerCase();

      if(field == "game played") {
        field = "gamePlayed";
      }

      this.playerService.findByField(field, query).subscribe((players: Player[]) => {
        console.log(players);
      })
    } else {
      this.setFormTouched(this.searchForm);
      // this.snackBar.open("Please check for errors", "CLOSE");
    }
  }
}
