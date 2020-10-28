import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {
  tid = 0;

  position: string;
  playerlist: {};
  constructor(private service: DataService, private router: ActivatedRoute,
    private confirmationService: ConfirmationService, private messageService: MessageService) { }

  async ngOnInit() {
    this.tid = this.router.snapshot.params.id;  
    console.log("teamid" + this.tid)


    await this.service.getplayerbyid(this.tid).then(res => {
      this.playerlist = res;
      console.log("playerlist" + res);
    });
  }
  confirm(value) {
    this.confirmationService.confirm({
      message: 'Do u want to remove Player...?',
      accept: () => {
         [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];

        this.service.deleteplayer(value).subscribe(res => {
        });
                this.service.getplayerbyid(this.tid).then(res => {
          this.playerlist = res;
          console.log("playerlist" + res);
        });
      },
      reject: () => {
        [{ severity: 'success', summary: 'Delete', detail: '' }];
      }
    });
  }
}

