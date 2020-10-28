import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentComponent } from './tournament/tournament.component';
import { MyteamComponent } from './myteam/myteam.component';
import { MatchComponent } from './match/match.component';
import { TournamentregComponent } from './tournament/tournamentreg/tournamentreg.component';
import { TeamsComponent } from './teams/teams.component';
import { MytournamentsComponent } from './mytournaments/mytournaments.component';
import { TeamslistComponent } from './teams/teamslist/teamslist.component';
import { AddteamsComponent } from './teams/addteams/addteams.component';
import { TeamsearchComponent } from './teams/teamsearch/teamsearch.component';
import { PlayersComponent } from './players/players.component';
import { AddplayersComponent } from './players/addplayers/addplayers.component';
import { PlayerlistComponent } from './players/playerlist/playerlist.component';
import { SearchplayerComponent } from './players/searchplayer/searchplayer.component';
import { TestComponent } from './test/test.component';
import { EdituserComponent } from './edituser/edituser.component';
import { PlayerroleComponent } from './playerrole/playerrole.component';
import { ListroleComponent } from './playerrole/listrole/listrole.component';
import { TournamentcategoryComponent } from './tournamentcategory/tournamentcategory.component';
import { CityComponent } from './city/city.component';
import { ListcatComponent } from './tournamentcategory/listcat/listcat.component';
import { ListcityComponent } from './city/listcity/listcity.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
import { ScoreComponent } from './score/score.component';
import { MymatchComponent } from './mymatch/mymatch.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { ImagedemoComponent } from './imagedemo/imagedemo.component';
import { OrgbyidComponent } from './orgbyid/orgbyid.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: '',   redirectTo: '/HomeComponent', pathMatch: 'full' },
  {
    path: 'tournament', component: TournamentComponent, children: [
      { path: 'tournamentreg', component: TournamentregComponent }], canActivate: [AuthGuard]
  },
  { path: 'myteam/:id', component: MyteamComponent, canActivate: [AuthGuard] },
  { path: 'addteams/:id', component: AddteamsComponent },
  { path: 'match', component: MatchComponent },
  { path: 'mytournament', component: MytournamentsComponent },
  {
    path: 'teams', component: TeamsComponent, children: [
      { path: 'myteam', component: MyteamComponent },
      { path: 'addteams', component: AddteamsComponent },
      { path: 'teamsearch', component: TeamsearchComponent },
    ], canActivate: [AuthGuard]
  },
  { path: 'teamslist/:id', component: TeamslistComponent },

  { path: 'teamslist', component: TeamslistComponent },
  { path: 'players/:id', component: PlayersComponent, },
  { path: 'playerlist/:id', component: PlayerlistComponent },
  { path: 'searchplayer', component: SearchplayerComponent },
  { path: 'addplayers', component: AddplayersComponent },
  { path: 'editplayer/:id', component: EditplayerComponent },

  { path: 'score/:id', component: ScoreComponent },

  { path: 'test', component: TestComponent, canActivate: [AuthGuard] },
  { path: 'test/edituser/:id', component: EdituserComponent },
  {
    path: 'prole', component: PlayerroleComponent, children: [
      { path: 'listrole', component: ListroleComponent }
    ]
  },
  {
    path: 'addtournamentcat', component: TournamentcategoryComponent, children: [
      { path: 'listcat', component: ListcatComponent }
    ]
  },
  {
    path: 'city', component: CityComponent, children: [
      { path: 'listcity', component: ListcityComponent }
    ]
  },
  {
    path: 'mymatch/:id', component: MymatchComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'imagedemo',component:ImagedemoComponent
  },
  {
    path:'orgbyid/:id',component:OrgbyidComponent,canActivate:[AuthGuard]
  },
{ 
  path:"**",component:PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
