import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { VerificationInputComponent } from '../verification-input/verification-input.component';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  sound: Howl;
  translate: boolean = false;

  translateText() {
    this.translate = !this.translate;
  }

  constructor(public dialog: MatDialog) {
    this.sound = new Howl({
      src: ['../../assets/music2.m4a'],
      html5: true
    })
   }
  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(VerificationInputComponent, {restoreFocus: false, disableClose: true});

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
