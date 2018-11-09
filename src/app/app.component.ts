import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div class="form-container">
                    <div>
                        <form-comp [resultLabelValue]="label1" [actionButtonValue]="actionButton1" [form]="compressForm"></form-comp>
                    </div>
                    <div class="form-container__bottom-form">
                        <form-comp [resultLabelValue]="label2" [actionButtonValue]="actionButton2" [form]="decompressForm"></form-comp>
                    </div>
               </div>`,
    styles: [`.form-container__bottom-form {
                margin-top: 30px;
             }`]
})

export class AppComponent {
    actionButton1 = 'Compress';
    actionButton2 = 'Decompress'
    label1:string = 'Compressed String';
    label2:string = 'Decompressed String';
    compressForm:string = 'compressForm';
    decompressForm:string = 'decompressForm';
}