import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LetterTwoComponent } from '../letter-two/letter-two.component';

@Component({
  selector: 'app-greece',
  templateUrl: './greece.component.html',
  styleUrls: ['./greece.component.css']
})
export class GreeceComponent implements OnInit {

 
  constructor(public dialog: MatDialog) { 
    
  }
  ngOnInit(): void {
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(LetterTwoComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      window.location.reload();
    });
  }

}
