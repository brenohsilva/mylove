import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerificationThreeComponent } from '../verification-three/verification-three.component';

@Component({
  selector: 'app-letter-three',
  templateUrl: './letter-three.component.html',
  styleUrls: ['./letter-three.component.css']
})
export class LetterThreeComponent implements OnInit {

  sound: Howl;
  translate: boolean = false;

  translateText() {
    this.translate = !this.translate;
  }

  constructor(public dialog: MatDialog) {
    this.sound = new Howl({
      src: ['../../assets/music3.m4a'],
      html5: true
    })
   }
  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(VerificationThreeComponent, {restoreFocus: false, disableClose: true});

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
