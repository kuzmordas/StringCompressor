import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { AppComponent }     from './app.component';
import { FormComponent }    from './form/form.component'

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ AppComponent, FormComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }