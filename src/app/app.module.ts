import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LetterComponent } from './modules/components/letter/letter.component';
import { VerificationInputComponent } from './modules/components/verification-input/verification-input.component';
import { GreeceComponent } from './modules/page2/greece/greece.component';
import { GermanyComponent } from './modules/page3/germany/germany.component';
import { LetterTwoComponent } from './modules/page2/letter-two/letter-two.component';
import { VerificationTwoComponent } from './modules/page2/verification-two/verification-two.component';
import { CoreaComponent } from './modules/page4/corea/corea.component';
import { LetterThreeComponent } from './modules/page3/letter-three/letter-three.component';
import { VerificationThreeComponent } from './modules/page3/verification-three/verification-three.component';
import { LetterFourComponent } from './modules/page4/letter-four/letter-four.component';
import { VerificationFourComponent } from './modules/page4/verification-four/verification-four.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LetterComponent,
    VerificationInputComponent,
    GreeceComponent,
    GermanyComponent,
    LetterTwoComponent,
    VerificationTwoComponent,
    CoreaComponent,
    LetterThreeComponent,
    VerificationThreeComponent,
    LetterFourComponent,
    VerificationFourComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
