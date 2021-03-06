import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { CreateSpeechComponent } from "./components/create-speech/create-speech.component";
import { SpeechComponent } from "./components/speech/speech.component";
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { SpeechContainerComponent } from "./components/speech-container/speech-container.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SpeechShortenPipe } from "./pipes/speech-shorten.pipe";
import { FilterPipe } from "./pipes/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateSpeechComponent,
    SpeechComponent,
    FilterPanelComponent,
    SpeechContainerComponent,
    SpeechShortenPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
