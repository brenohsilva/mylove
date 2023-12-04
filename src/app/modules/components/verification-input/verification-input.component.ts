// verification-input.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-verification-input',
  templateUrl: './verification-input.component.html',
  styleUrls: ['./verification-input.component.css'],
})
export class VerificationInputComponent implements OnInit {
  ngOnInit(): void {
    document.addEventListener('keydown', (event) => this.onGlobalKeyDown(event));
  }
  
  constructor(private dialogRef: MatDialogRef<VerificationInputComponent>) {}
  codes: string[] = Array(8).fill(''); 

  onGlobalKeyDown(event: KeyboardEvent): void {
    const activeElement = document.activeElement;
  
    if (activeElement && activeElement.tagName === 'INPUT') {
      const inputIndex = Number(activeElement.id.split('-')[1]);
      this.onKeyDown(event, inputIndex);
      event.preventDefault(); // Evita que o evento seja propagado e cause problemas
    }
  }


  @HostListener('input', ['$event'])
  onInput(event: any, index: number): void {
    const inputValue = event.target.value.toUpperCase().charAt(0);
  
    if (/^[A-Z]$/.test(inputValue)) {
      this.codes[index] = inputValue;
      setTimeout(() => this.focusNextInput(index), 10);
    } else if (event.inputType === 'insertText') {
      setTimeout(() => this.focusPreviousInput(index), 10);
    }
  }
  
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
    alert(codigoDigitado)
    const codigoCorreto = 'ACADEMIA'; 

    if (codigoDigitado === codigoCorreto) {
      console.log('Código correto!');
      this.dialogRef.close();
    } else {
      this.codes.fill('')
      alert("Ops meu bebê, você errou!")
      
    }
  }
}
