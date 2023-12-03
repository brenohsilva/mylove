// verification-input.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-verification-input',
  templateUrl: './verification-input.component.html',
  styleUrls: ['./verification-input.component.css'],
})
export class VerificationInputComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private dialogRef: MatDialogRef<VerificationInputComponent>) {}
  codes: string[] = Array(8).fill(''); 


  onKeyDown(event: any, index: number): void {
    const input = event.key.toUpperCase(); // Converte a tecla pressionada para maiúscula

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
    const codigoCorreto = 'ACADEMIA'; 

    if (codigoDigitado === codigoCorreto) {
      console.log('Código correto!');
      this.dialogRef.close();
    } else {
      alert("Ops meu bebê, você errou!")
      
    }
  }
}
