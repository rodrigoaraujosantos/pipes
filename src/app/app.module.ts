import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComprimentoPipe } from './comprimento.pipe';
import { FormataCpfPipe } from './formata-cpf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComprimentoPipe,
    FormataCpfPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
