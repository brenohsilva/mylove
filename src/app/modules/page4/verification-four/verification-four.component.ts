import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-verification-four',
  templateUrl: './verification-four.component.html',
  styleUrls: ['./verification-four.component.css']
})
export class VerificationFourComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private dialogRef: MatDialogRef<VerificationFourComponent>) {}
  codes: string[] = Array(6).fill(''); 


  onKeyDown(event: any, index: number): void {
    const input = event.key.toUpperCase(); 

    if (/^[A-Z]$/.test(input)) {
      this.codes[index] = input;
      setTimeout(() => this.focusNextInput(index), 10);
    } else if (event.key === 'Backspace') {
      setTimeout(() => this.focusPreviousInput(index), 10);
    }
  }

  focusNextInput(index: number): void {
    if (index < this.codes.length - 1) {
      document.getElementById(`code-${index + 1}`)?.focus();
    }
  }

  focusPreviousInput(index: number): void {
    if (index > 0) {
      document.getElementById(`code-${index - 1}`)?.focus();
    }
  }

  verificar(): void {
    const codigoDigitado = this.codes.join('');
    const codigoCorreto = 'CAMYLA'; 

    if (codigoDigitado === codigoCorreto) {
      console.log('Código correto!');
      this.dialogRef.close();
    } else {
      alert("Ops meu bebê, você errou!")
      
    }
  }

}