import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-listofnotes',
  templateUrl: './listofnotes.component.html',
  styleUrls: ['./listofnotes.component.css']
})
export class ListofnotesComponent implements OnInit {

  noteList = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}
