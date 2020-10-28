import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Array<any> = [
    { title: 'Tournaments', link: 'tournament' },
    { title: 'StartMatch', link: 'match' },
    { title: 'My Tournaments', link: 'mytournament' },
    { title: 'My Teams', link: 'myteam' },
    // { title: 'Test', link: 'test' },
    // { title: 'Player Role', link: 'prole' },
    // { title: 'Tournament Category', link: 'addtournamentcat' },
    { title: 'Login', link: 'login' },
    // {title:'image',link:'imagedemo'}


  ]
  constructor(private rut: Router,private ms:MessageService) { }

  ngOnInit() {
  }
  logout() {
    this.ms.add({severity:'success', summary:'Logout', detail:'You are Logged Out'});
    sessionStorage.removeItem('islogin');
    this.rut.navigate(['/login'])
  }

}
