import { Component, OnInit } from '@angular/core';
import { Favs } from '../fav';
import { FavouritesService } from '../favourites.service';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  list: Array<any>;
  fav: Favs;

  constructor(private favser: FavouritesService, private route: RouterService) { }

  ngOnInit(): void {
    this.favser.getData().subscribe(
      res => {
        this.list = res;
      },
      err => console.log(err)
    )
  }

}
