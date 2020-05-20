import { Component, OnInit } from '@angular/core';
import { Find } from '../find';
import { CricapiService } from '../cricapi.service';
import { RouterService } from '../router.service';
import { FavouritesService } from '../favourites.service';
import { Favs } from '../fav';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  config: any;
  val: string;
  list: Array<Find> = [];
  fav: Favs;

  constructor(private cricapi: CricapiService, private route: RouterService, private favser: FavouritesService) {
    //pagination
    this.val = "";
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.list.length
    };

  }

  // note if the page is changed
  pageChanged(event) {
    this.config.currentPage = event;
  }
  ngOnInit() {

  }

  // this method will search player by his name as privided in val
  getData(val) {
    this.cricapi.searchPlayer(val).subscribe(
      res => {
        this.list = res.data;
        for (let obj of this.list) {
          obj.status = true;
        }
      },
      err => {
        console.log(err)
      })
  }

  // this method will redirect to stat Opener component by taking player id (pid) with it
  viewStats(data){
    this.route.tostatOpener(data.pid);
  }

  addToFav(data) {
    data.status = false;
    this.cricapi.statsPlayer(data.pid).subscribe(
      res => {
        this.fav = res;
        this.favser.addData(this.fav).subscribe(
          res => console.log("fav increased"),
          err => console.log(err)
          )
      },
      err => console.log(err)
    )
  }

  // it will remove a player from the favourites by calling there respective services
  removeFromFav(data) {
    data.status = true;
    this.favser.deleteData(data.pid).subscribe(
      res => console.log("fav decreased"),
      err => console.log(err)
    )
  }


}
