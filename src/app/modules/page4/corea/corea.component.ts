import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LetterFourComponent } from '../letter-four/letter-four.component';

@Component({
  selector: 'app-corea',
  templateUrl: './corea.component.html',
  styleUrls: ['./corea.component.css']
})
export class CoreaComponent implements OnInit {
  constructor(public dialog: MatDialog) { 
    
  }
  ngOnInit(): void {
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(LetterFourComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      window.location.reload();
    });
  }
}
