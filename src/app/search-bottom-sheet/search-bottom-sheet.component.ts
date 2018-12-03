import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MatSnackBar, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Player, PlayerService } from '../services/player.service';
import { GameService, Game } from '../services/game.service';
import { LobbyTab, SearchQuery } from '../services/helper.service';

@Component({
  selector: 'app-search-bottom-sheet',
  templateUrl: './search-bottom-sheet.component.html',
  styleUrls: ['./search-bottom-sheet.component.scss'],
  providers:  [ PlayerService, GameService ]
})
export class SearchBottomSheetComponent {    

  searchForm: FormGroup;
  tab: LobbyTab;
  searchQuery: SearchQuery;

  get query() {
    return this.searchForm.get('query');
  }

  get field() {
    return this.searchForm.get('field');
  }

  LobbyTab = LobbyTab;

  private capitalize(word: string) { 
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  private formatField(field: string): string {
    if(field == "gamePlayed") {
      return "Game Played"
    } else {
      return this.capitalize(field);
    }
  }

  private getDefaultField(): string {
    const prevQuerySameAsCurrentQuery = this.searchQuery.TAB == this.getTab() && this.searchQuery.FIELD != "";
    const isPlayerQuery = this.getTab() == LobbyTab.PLAYERS;

    if(prevQuerySameAsCurrentQuery) {
      return this.formatField(this.searchQuery.FIELD);
    } else if(isPlayerQuery) {
      return this.getFirstPlayerField();
    }
    else {
      return this.getFirstGameField();
    }
  } 

  setSearchData: (searchQuery: SearchQuery) => void;
  refreshTable: (refreshAll: boolean) => void;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: [SearchQuery, LobbyTab, 
        (searchQuery) => void, (refreshAll: boolean) => void],
      private bottomSheetRef: MatBottomSheetRef<SearchBottomSheetComponent>, 
      public snackBar: MatSnackBar, private playerService: PlayerService,
      private gameService: GameService) { 
    
    this.searchQuery = data[0];
    this.tab = data[1];
    this.setSearchData = this.data[2];
    this.refreshTable = this.data[3];

    this.searchForm = new FormGroup({
      field: new FormControl(this.getDefaultField(), [
        Validators.required
      ]),
      query: new FormControl(this.searchQuery.QUERY, [
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

  // gets filtered data and refreshes table
  onSearch() {
    if(this.searchForm.valid) {
      let field = this.field.value.toLowerCase();
      const query = this.query.value.toLowerCase();

      if(field == "game played") {
        field = "gamePlayed";
      }

      this.searchQuery = {
        FIELD: field,
        QUERY: query,
        TAB: this.getTab()
      }

      this.setSearchData(this.searchQuery);
      this.refreshTable(false);
    } else {
      this.setFormTouched(this.searchForm);
    }
  }
}
