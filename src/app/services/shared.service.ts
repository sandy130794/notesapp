import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject = new Subject<any>();

  constructor() { }
  // sending New Notes Data
  sendNewNotes(notes: string) {
    this.subject.next({ text: notes });
  }

  // Cleaning the Input field
  clearFields() {
      this.subject.next();
  }
  // getting list of Notes
  getNotes(): Observable<any> {
    return this.subject.asObservable();
}
}
