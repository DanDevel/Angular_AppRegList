import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent {
  selectedValue: number | null = null;
  data: any[] | null = null;

  constructor(private apiService: ApiService) {}

  getData() {
    if (this.selectedValue !== null) {
      this.apiService.getById(this.selectedValue).subscribe(
        (response: any) => {
          console.log('Dados recebidos do endpoint:', response);
          this.data = Object.entries(response).map(([key, value]) => ({ key, value }));
        },
        (error: any) => {
          console.error('Atenção! ocorreu um erro:', error);
          this.data = null;
        }
      );
    }
  }


}
