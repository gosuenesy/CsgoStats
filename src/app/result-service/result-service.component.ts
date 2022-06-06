import { Component, OnInit } from '@angular/core';
import { IResult } from '../iresult';
import { CsgoService } from '../csgo.service';

@Component({
  selector: 'app-result-service',
  templateUrl: './result-service.component.html',
  styleUrls: ['./result-service.component.css']
})
export class ResultServiceComponent implements OnInit {

  results: IResult[] = [];

  constructor(service: CsgoService) { service.getResults().subscribe(response => this.results = response); }

  ngOnInit(): void {
  }

}
