import { Component, OnInit } from '@angular/core';
import { GiphysService } from '../giphys.service';
@Component({
  selector: 'app-giphys',
  templateUrl: './giphys.component.html',
  styleUrls: ['./giphys.component.css'],
})
export class GiphysComponent implements OnInit {
  // giphy = 'mickey';
  giphys;
  constructor(private giphyService: GiphysService) {}

  ngOnInit() {
    this.giphys = this.giphyService.getGiphys();
    console.info(this.giphys);
  }
}
