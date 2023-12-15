import { Component } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cep',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.scss'
})
export class CepComponent {

}
