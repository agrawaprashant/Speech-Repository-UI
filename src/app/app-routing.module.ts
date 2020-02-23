import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateSpeechComponent } from "./components/create-speech/create-speech.component";
import { SpeechContainerComponent } from "./components/speech-container/speech-container.component";

const routes: Routes = [
  {
    path: "create-speech",
    component: CreateSpeechComponent
  },
  {
    path: "show-speech",
    component: SpeechContainerComponent,
    children: [
      {
        path: "others",
        component: SpeechContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
