import { Component, OnInit } from "@angular/core";
import { SpeechService } from "src/app/service/speech.service";
import { Speech } from "src/app/model/speech-model";

@Component({
  selector: "app-speech-container",
  templateUrl: "./speech-container.component.html",
  styleUrls: ["./speech-container.component.css"]
})
export class SpeechContainerComponent implements OnInit {
  constructor(private speech: SpeechService) {}
  speeches: Speech[] = [
    {
      title: "Test Title",
      author: "Prashant Agrawal",
      text: "Test Text",
      date: new Date()
    },
    {
      title: "Test Title",
      author: "Prashant Agrawal",
      text: "Test Text",
      date: new Date()
    }
  ];

  ngOnInit() {
    this.speech.getSpeech().subscribe(speechData => {
      this.speeches = speechData;
    });
  }
 
}
