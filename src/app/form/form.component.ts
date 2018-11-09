import { Input, Component } from '@angular/core';
import { HttpService} from '../../services/http.service';
import { Response } from '../response';
import { environment } from '../../enviroments/enviroment';

@Component({
    selector: 'form-comp',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    providers: [HttpService]
})

export class FormComponent {

    constructor(private httpService: HttpService){ }

    @Input() actionButtonValue: string;
    @Input() resultLabelValue: string;
    @Input() form: string;
    stringForServer: string;
    responseString: string;

    send() {
        if (environment[this.form].regex.test(this.stringForServer)) {
            this.httpService.postData(this.stringForServer, environment[this.form].url)
            .subscribe(
                (data: Response)  => { this.responseString = data.value; },
                error => console.log(error)
            );
        } else {
            alert('Wrong input string!');
        }
    }

    clear() {
        this.stringForServer = '';
        this.responseString = '';
    }
}