import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LetterComponent } from '../letter/letter.component';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit  {
  

  constructor(public dialog: MatDialog) { 
    
  }
  ngOnInit(): void {
    
  }


  openDialog() {
    const dialogRef = this.dialog.open(LetterComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      window.location.reload();
    });
  }

}
