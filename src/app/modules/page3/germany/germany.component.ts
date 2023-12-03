import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LetterThreeComponent } from '../letter-three/letter-three.component';

@Component({
  selector: 'app-germany',
  templateUrl: './germany.component.html',
  styleUrls: ['./germany.component.css']
})
export class GermanyComponent implements OnInit {
  constructor(public dialog: MatDialog) { 
    
  }
  ngOnInit(): void {
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(LetterThreeComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      window.location.reload();
    });
  }
}
