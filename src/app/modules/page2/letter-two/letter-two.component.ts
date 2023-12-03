import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerificationTwoComponent } from '../verification-two/verification-two.component';

@Component({
  selector: 'app-letter-two',
  templateUrl: './letter-two.component.html',
  styleUrls: ['./letter-two.component.css']
})
export class LetterTwoComponent implements OnInit {

  sound: Howl;
  translate: boolean = false;

  translateText() {
    this.translate = !this.translate;
  }

  constructor(public dialog: MatDialog) {
    this.sound = new Howl({
      src: ['../../assets/music1.m4a'],
      html5: true
    })
   }
  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(VerificationTwoComponent, {restoreFocus: false, disableClose: true});

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
