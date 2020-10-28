import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  addtournament(model: any): Observable<any> {
    return this.http.post(`${environment.Base_URL}addtournament`, model);
  }
  addUser(model: any): Observable<any> {
    return this.http.post(`${environment.Base_URL}users`, model);
  }
  addcat(model: any): Observable<any> {
    return this.http.post(`${environment.Base_URL}addtournamentcat`, model);
  }
  addplayerrole(model: any): Observable<any> {
    return this.http.post(`${environment.Base_URL}addplayerrole`, model);
  }
  addplayer(model: any): Observable<any> {
    return this.http.post(`${environment.Base_URL}addplayer`, model);
  }
  addmatch(model: any): Observable<any> {
    return this.http.post(`${environment.Base_URL}addmatch`, model);
  }
  addcity(model: any): Observable<any> {
    return this.http.post(`${environment.Base_URL}addcity`, model);
  }
  addteams(model: any): Observable<any> {
    return this.http.post(`${environment.Base_URL}addteams`, model);
  }
  getalluser(): Promise<any> {
    return this.http.get(`${environment.Base_URL}getUser`).toPromise();
  }
  getplayers(): Promise<any> {
    return this.http.get(`${environment.Base_URL}getplayer`).toPromise();
  }
  getallcity(): Promise<any> {
    return this.http.get(`${environment.Base_URL}listcity`).toPromise();
  }
  getallmatch(): Promise<any> {
    return this.http.get(`${environment.Base_URL}getallmatch`).toPromise();
  }
  getrole(): Promise<any> {
    return this.http.get(`${environment.Base_URL}getplayerrole`).toPromise();
  }
  getuserbyid(id: number): Promise<any> {
    return this.http.get(`${environment.Base_URL}user/${id}`).toPromise();
  }
  getmatchById(match_id: number): Promise<any> {
    return this.http.get(`${environment.Base_URL}getmatchById/${match_id}`).toPromise();
  }
  getplayerBymatch(match_id: number): Promise<any> {
    return this.http.get(`${environment.Base_URL}getplayerBymatch/${match_id}`).toPromise();
  }
  getplayerBymatch1(match_id: number): Promise<any> {
    return this.http.get(`${environment.Base_URL}getplayerBymatch1/${match_id}`).toPromise();
  }
  getplayerbyid(id: number): Promise<any> {
    return this.http.get(`${environment.Base_URL}getplayerbyid/${id}`).toPromise();
  }
  getplayerUpdate(id: number): Promise<any> {
    return this.http.get(`${environment.Base_URL}getplayerUpdate/${id}`).toPromise();
  }
  getturnamentbyid(id: number): Promise<any> {
    return this.http.get(`${environment.Base_URL}getturbyid/${id}`).toPromise();
  }
  getteambyid(id: number): Promise<any> {
    return this.http.get(`${environment.Base_URL}getteambyid/${id}`).toPromise();
  }
  updateUser(model: any): Observable<any> {
    console.log(model)
    return this.http.put(`${environment.Base_URL}updateuser`, model);
    // return this.http.post(`${environment.Base_URL}updateuser`,model);   
  }
  updateplayer(model: any): Observable<any> {
    return this.http.put(`${environment.Base_URL}updateplayer`, model);
  }
  deleteuser(id: number): Observable<any> {
    return this.http.delete(`${environment.Base_URL}deleteuser/${id}`);
  }
    deleteplayer(id: number): Observable<any> {
    return this.http.delete(`${environment.Base_URL}deleteplayer/${id}`);
  }
  getcategory(): Promise<any> {
    return this.http.get(`${environment.Base_URL}getcat`).toPromise();
  }
  gettournament(): Promise<any> {
    return this.http.get(`${environment.Base_URL}gettournaments`).toPromise();
  }
  loginservice(model: any): Observable<any> {
    return this.http.post(`${environment.Base_URL}getlogin`, model);
  }
  addimageservice(model: any): Observable<any> {
    return this.http.post(`${environment.Base_URL}uploadImage `, model);
  }
  getorgbyidservice(id: number): Promise<any> {
    return this.http.get(`${environment.Base_URL}getorgbyid/${id}`).toPromise();
  }
}
