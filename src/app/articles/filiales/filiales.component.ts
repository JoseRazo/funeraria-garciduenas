import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-filiales',
  templateUrl: './filiales.component.html',
  styleUrls: ['./filiales.component.css']
})
export class FilialesComponent implements OnInit {

  title = 'Funeraria Garcidueñas - Filiales';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
