import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MatSnackBar, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Player, PlayerService } from '../services/player.service';
import { GameService, Game } from '../services/game.service';
import { LobbyTab } from '../services/helper.service';

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

  setSearchData: (searchField: string, searchQuery: string) => void;
  refreshTable: (refreshAll: boolean) => void;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: [LobbyTab, 
        (searchField: string, searchQuery: string) => void, (refreshAll: boolean) => void],
      private bottomSheetRef: MatBottomSheetRef<SearchBottomSheetComponent>, 
      public snackBar: MatSnackBar, private playerService: PlayerService,
      private gameService: GameService) { 

    this.tab = data[0];
    this.setSearchData = this.data[1];
    this.refreshTable = this.data[2];

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
    return this.getPlayerFields()[0];
  }

  private getPlayerFields() {
    return ["Name", "Rank", "Score", "Time", "Game Played", "Status"];
  }

  getFirstGameField() {
    return this.getGameFields()[0];
  }

  private getGameFields() {
    return ["Title", "Platform", "Genre", "Publisher", "Release", "Status"];
  }

  getFields() {
    return this.getTab() == LobbyTab.PLAYERS ? this.getPlayerFields() : this.getGameFields();
  }

  setFormTouched(formGroup: FormGroup): void {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if(control.controls) {
        this.setFormTouched(control);
      }
    });
  }

  onSearchKeyUp() {
    if(this.searchForm.valid) {
      let field = this.field.value.toLowerCase();
      const query = this.query.value.toLowerCase();

      if(field == "game played") {
        field = "gamePlayed";
      }

      this.setSearchData(field, query);
      this.refreshTable(false);

      // this.playerService.findByField(field, query).subscribe((players: Player[]) => {
      //   this.playerSearchCallback(players);
      // })
    } else {
      this.setFormTouched(this.searchForm);
    }
  }
    
  // onGameSearchKeyUp() {
  //   if(this.searchForm.valid) {
  //     const field = this.field.value.toLowerCase();
  //     const query = this.query.value.toLowerCase();

  //     this.gameService.findByField(field, query).subscribe((games: Game[]) => {
  //       console.log(games);
  //     })
  //   } else {
  //     this.setFormTouched(this.searchForm);
  //   }
  // }
}
