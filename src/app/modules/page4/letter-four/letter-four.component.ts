import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerificationFourComponent } from '../verification-four/verification-four.component';

@Component({
  selector: 'app-letter-four',
  templateUrl: './letter-four.component.html',
  styleUrls: ['./letter-four.component.css']
})
export class LetterFourComponent implements OnInit {
  sound: Howl;
  translate: boolean = false;

  translateText() {
    this.translate = !this.translate;
  }

  constructor(public dialog: MatDialog) {
    this.sound = new Howl({
      src: ['../../assets/music4.m4a'],
      html5: true
    })
   }
  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(VerificationFourComponent, {restoreFocus: false, disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.translate = !this.translate;
      this.playsound()
    });
  }

  playsound():void {
    if (!this.sound.playing()) {
      this.sound.play();
    }
  }
}
