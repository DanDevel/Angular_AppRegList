import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './../registration/registration.component.html',
  styleUrls: ['./../registration/registration.component.css']
})

export class RegistrationComponent {
  integerValue: number | null = null;
  decimalValue: number | null = null;
  responseMessage: string | null = null;

  constructor(private apiService: ApiService) { }

  submitForm() {
    if (this.integerValue !== null && this.decimalValue !== null) {
      const payload = {
        integerField: this.integerValue,
        decimalField: this.decimalValue
      };

      this.apiService.post(payload).subscribe(
        response => {
          console.log('Parcelas enviadas com sucesso! Valor retornado do servidor: ', response);
          // Reset form values
          this.integerValue = null;
          this.decimalValue = null;
          this.responseMessage = 'Parcelas enviadas com sucesso! Valor retornado do servidor: ' + response;
        },
        error => {
          console.error('Ocorreu um erro:', error);
          this.responseMessage = 'Ocorreu um erro: ' + error;
        }
      );
    }
  }
}
