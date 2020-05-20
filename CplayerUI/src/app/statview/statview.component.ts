import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StatOpenerComponent } from '../stat-opener/stat-opener.component';
import { CricapiService } from '../cricapi.service';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-statview',
  templateUrl: './statview.component.html',
  styleUrls: ['./statview.component.css']
})
export class StatviewComponent implements OnInit {

  stat :any;
  bool: Boolean;

  // dependency injection of cricapi service and also using @Inject to specify that some the value is injected
  constructor(private diaRef: MatDialogRef<StatOpenerComponent>, @Inject(MAT_DIALOG_DATA) private data: any,
   private cric: CricapiService, private route :RouterService) { }

  ngOnInit(): void {

    // call api to get all the stats of a particular player by his pid
    this.cric.statsPlayer(this.data.pid).subscribe(
      res => {
        this.stat = res;
        if(this.stat.imageURL == null){
          this.stat.imageURL = "../../assets/image.png"
        }
      },
      err => console.log(err)
    )
  }

}
