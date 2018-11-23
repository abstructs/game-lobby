import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatTableModule, 
  MatToolbarModule, MatDialogModule, MatFormFieldModule, MatInputModule, 
  MatListModule, MatDividerModule, MatSelectModule, MatSnackBarModule,
  MatProgressBarModule, MatTabsModule } from '@angular/material';

import { LobbyComponent } from './lobby/lobby.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { PlayerDialogComponent } from './player-dialog/player-dialog.component';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
import { BackendService } from './services/backend.service';
import { HelperService } from './services/helper.service';
import { CookieService } from 'ngx-cookie-service';
import { GameService } from './services/game.service';
import { GameDialogComponent } from './game-dialog/game-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    LoginDialogComponent,
    PlayerDialogComponent,
    GameDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTabsModule
  ],
  providers: [
    BackendService,
    UserService,
    GameService,
    CookieService,
    HelperService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginDialogComponent,
    PlayerDialogComponent,
    GameDialogComponent
  ]
})
export class AppModule { }
