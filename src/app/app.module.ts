import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { TournamentComponent } from './tournament/tournament.component';
import { MatchComponent } from './match/match.component';
import { MyteamComponent } from './myteam/myteam.component';
import { MytournamentsComponent } from './mytournaments/mytournaments.component';
import { TournamentregComponent } from './tournament/tournamentreg/tournamentreg.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamslistComponent } from './teams/teamslist/teamslist.component';
import { AddteamsComponent } from './teams/addteams/addteams.component';
import { TeamsearchComponent } from './teams/teamsearch/teamsearch.component';
import { PlayersComponent } from './players/players.component';
import { AddplayersComponent } from './players/addplayers/addplayers.component';
import { PlayerlistComponent } from './players/playerlist/playerlist.component';
import { SearchplayerComponent } from './players/searchplayer/searchplayer.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { EdituserComponent } from './edituser/edituser.component';
import { PlayerroleComponent } from './playerrole/playerrole.component';
import { ListroleComponent } from './playerrole/listrole/listrole.component';
import { TournamentcategoryComponent } from './tournamentcategory/tournamentcategory.component';
import { CityComponent } from './city/city.component';
import { ListcatComponent } from './tournamentcategory/listcat/listcat.component';
import { ListcityComponent } from './city/listcity/listcity.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
import {MessageService, ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {SidebarModule} from 'primeng/sidebar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {PanelModule} from 'primeng/panel';
import { ScoreComponent } from './score/score.component';
import {TabViewModule} from 'primeng/tabview';
import {SelectButtonModule} from 'primeng/selectbutton';
import { MymatchComponent } from './mymatch/mymatch.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { ImagedemoComponent } from './imagedemo/imagedemo.component';
import { OrgbyidComponent } from './orgbyid/orgbyid.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TournamentComponent,
    MatchComponent,
    MyteamComponent,
    MytournamentsComponent,
    TournamentregComponent,
    TeamsComponent,
    TeamslistComponent,
    AddteamsComponent,
    TeamsearchComponent,
    PlayersComponent,
    AddplayersComponent,
    PlayerlistComponent,
    SearchplayerComponent,
    TestComponent,
    EdituserComponent,
    PlayerroleComponent,
    ListroleComponent,
    TournamentcategoryComponent,
    CityComponent,
    ListcatComponent,
    ListcityComponent,
    EditplayerComponent,
    ScoreComponent,
    MymatchComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent,
    ImagedemoComponent,
    OrgbyidComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,ConfirmDialogModule,
    BrowserAnimationsModule,ToastModule,MessageModule,MessagesModule,SidebarModule,CarouselModule,
    BreadcrumbModule,PanelModule,TabViewModule,SelectButtonModule
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
