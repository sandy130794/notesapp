import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';
import { Notes } from '../../models/notes';

@Component({
  selector: 'app-newnotes',
  templateUrl: './newnotes.component.html',
  styleUrls: ['./newnotes.component.css']
})
export class NewnotesComponent implements OnInit {

  title;
  description;
  notesproperties: Notes;

  subscription: Subscription;

  constructor(private sharedService: SharedService) {
    // send New Note Object to subscribers via observable subject
    this.sharedService.sendNewNotes('data');
  }

  ngOnInit() {
  }

  noteDataChange() {
    // this.notesproperties.title = this.title;
    // this.notesproperties.description = this.description;
    // this.notesproperties.timeStamp = new Date();
    console.log(this.title, this.description);
  }

}
