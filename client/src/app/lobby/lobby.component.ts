import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable, MatSnackBar, MatTabChangeEvent, MatBottomSheet, MatTabGroup } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { PlayerDialogComponent, PlayerDialogState } from '../player-dialog/player-dialog.component';
import { UserService } from '../services/user.service';
import { Player, PlayerService } from '../services/player.service';
import { GameService, Game } from '../services/game.service';
import { GameDialogComponent, GameDialogState } from '../game-dialog/game-dialog.component';
import { forkJoin, Observable } from 'rxjs';
import { SearchBottomSheetComponent } from '../search-bottom-sheet/search-bottom-sheet.component';
import { LobbyTab, SearchQuery } from '../services/helper.service';

const playerColumns: string[] = ["name", "rank", "score", "time", "gamePlayed", "status", "options"];
const gameColumns: string[] = ["title", "platform", "genre", "publisher", "release", "status", "options"];

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  providers:  [ UserService, GameService ]
})
export class LobbyComponent implements OnInit {

  tab: LobbyTab;
  loading: boolean;
  playerTableData: Player[];
  playerTableColumns: string[];

  gameTableData: Game[];
  gameTitles: Object[];
  gameTableColumns: string[];

  searchQuery: SearchQuery;



  LobbyTab = LobbyTab;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,
      private userService: UserService, private playerService: PlayerService,
      private gameService: GameService,
      private bottomSheet: MatBottomSheet) {

    this.playerTableColumns = playerColumns;
    this.gameTableColumns = gameColumns;
    
    this.tab = LobbyTab.PLAYERS;
    this.playerTableData = [];
    this.gameTableData = [];

    this.setSearchData({
      FIELD: "",
      QUERY: "",
      TAB: this.getTab()
    });

    this.getAllTableData();
  }

  private requestGameTitles(): Observable<Object[]> {
    return this.gameService.findAllTitles();
  }

  private setGameTitles(gameTitles: Object[]) {
    this.gameTitles = gameTitles;
  }

  // makes a get request for all the data in the table
  // NOTE: game is a protected entity which is why we have the redundant call to games
  getAllTableData() {
    this.loading = true;

    forkJoin(this.requestPlayerData(), this.requestGameData(), this.requestGameTitles())
      .subscribe(([players, games, gameTitles]: [Player[], Game[], Object[]]) => {
        this.setPlayerData(players);
        this.setGameData(games);
        this.setGameTitles(gameTitles);
        this.loading = false;
    });
  }

  // requests and sets the data for the given entity, data is 
  // filtered based on searchField and searchQuery instance variables
  private requestAndSetFilteredTableData() {
    this.loading = true;

    if(!this.validSearchQuery()) {
      this.getAllTableData();
      return;
    }

    switch(this.searchQuery.TAB) {
      case LobbyTab.PLAYERS:
        this.playerService.findByField(this.searchQuery).subscribe((players: Player[]) => {
          this.setPlayerData(players);
          this.loading = false;
        });
        break;
      case LobbyTab.GAMES:
        this.gameService.findByField(this.searchQuery).subscribe((games: Game[]) => {
          const allGameTitles = games.map(game => ({ title: game.title }));
          this.setGameTitles(allGameTitles);
          this.setGameData(games);
          this.loading = false;
        });
        break;
      default:
        this.getAllTableData();
        break;
    }
  }

  requestGameData(): Observable<Game[]> {
    return this.gameService.findAll();
  }

  getGameData() {
    this.loading = true;
    this.requestGameData().subscribe((games: Game[]) => {
      this.setGameData(games);
      this.loading = false;
    });
  }

  setGameData(games: Game[]): void {
    this.gameTableData = games;
  }

  requestPlayerData(): Observable<Player[]> {
    return this.playerService.findAll();
  }

  getPlayerData() {
    this.loading = true;
    this.requestPlayerData().subscribe((players: Player[]) => {
      this.setPlayerData(players);
      this.loading = false;
    });
  }

  setPlayerData(players: Player[]): void {
    this.playerTableData = players;
  }

  getTab(): LobbyTab {
    return this.tab;
  }

  onTabChange(event: MatTabChangeEvent) {
    const tabIntent = event.index;
    if(tabIntent == this.LobbyTab.GAMES && !this.isLoggedIn()) {
      this.snackBar.open("Please login to do that!", "CLOSE");
    } else {
      this.tab = event.index;
    }
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  onLogoutClick(): void {
    this.userService.logout();
  }

  onLoginClick(): void {
    this.openLoginDialog();
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: "60%"
    });
  }

  onJoinGameClick(index: number): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: "70%",
      data: [PlayerDialogState.SHOW, this.playerTableData[index], this.gameTableData],
      autoFocus: false
    }).afterClosed().subscribe(joinedGame => {
      if(joinedGame) this.refreshTable(true);
    });
  }

  onAddGameClick(index: number): void {
    const dialogRef = this.dialog.open(GameDialogComponent, {
      width: "70%",
      data: [GameDialogState.ADD, this.gameTableData[index]],
      autoFocus: false
    }).afterClosed().subscribe((game: Game) => {
      if(game) this.requestAndSetFilteredTableData();
    });
  }

  onEditGameClick(index: number): void {
    const dialogRef = this.dialog.open(GameDialogComponent, {
      width: "70%",
      data: [GameDialogState.EDIT, this.gameTableData[index]],
      autoFocus: false
    }).afterClosed().subscribe((game: Game) => {
      if(game) this.refreshTable(false);
    });
  }

  onDeleteGameClick(index: number): void {
    const game = this.gameTableData[index];
    this.gameService.removeOne(game['_id']).subscribe(removed => {
      if(removed) {
        this.snackBar.open("Succesfully deleted game", "OK");
        this.refreshTable(false);
      } else {
        this.snackBar.open("Something went wrong", "CLOSE");
      }
    });
  }

  onAddPlayerClick(index: number): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: "70%",
      data: [PlayerDialogState.ADD, this.playerTableData[index], this.gameTitles],
      autoFocus: false
    }).afterClosed().subscribe((player: Player) => {
      if(player) this.refreshTable(false);
    });
  }

  onDeletePlayerClick(index: number): void {
    const player = this.playerTableData[index];
    this.playerService.removeOne(player['_id']).subscribe(removed => {
      if(removed) {
        this.snackBar.open("Succesfully deleted player", "OK");
        this.refreshTable(false);
      } else {
        this.snackBar.open("Something went wrong", "CLOSE");
      }
    });
  }

  onEditPlayerClick(index: number): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: "70%",
      data: [PlayerDialogState.EDIT, this.playerTableData[index], this.gameTitles],
      autoFocus: false
    }).afterClosed().subscribe((player: Player) => {
      if(player) this.refreshTable(false);
    });
  }

  setSearchData(searchQuery: SearchQuery) {
    this.searchQuery = searchQuery;
  }

  refreshTable(refreshAll: boolean): void {
    if(refreshAll) {
      this.setSearchData({ QUERY: "", FIELD: "", TAB: this.getTab() });
      this.getAllTableData();
    } else {
      this.requestAndSetFilteredTableData();
    }
  }

  validSearchQuery(): boolean {
    return this.searchQuery.FIELD != "" && this.searchQuery.QUERY != "";
  }

  onSearchClick() {
    this.bottomSheet.open(SearchBottomSheetComponent, {
      panelClass: 'min-width-65vw',
      data: [
        this.searchQuery,
        this.getTab(), 
        (searchQuery: SearchQuery) => this.setSearchData(searchQuery), 
        (refreshAll: boolean) => this.refreshTable(refreshAll)]
    });
  }

  ngOnInit() { }
}