import { Component, OnInit } from '@angular/core';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-routehepler',
  templateUrl: './routehepler.component.html',
  styleUrls: ['./routehepler.component.css']
})
export class RouteheplerComponent implements OnInit {

  constructor(private route: RouterService) { }

  ngOnInit(): void {
    this.route.tofav();
  }

}
