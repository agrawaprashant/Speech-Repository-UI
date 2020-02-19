import { Component, OnInit } from "@angular/core";
import { SpeechService } from "src/app/service/speech.service";
import { Speech } from "src/app/model/speech-model";
import { map } from "rxjs/operators";

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
    this.speech
      .getSpeech()
      .pipe(
        map(speechData => {
          return speechData.map(speech => {
            return {
              title: speech.speechTitle,
              text: speech.speechText,
              author: speech.speechAuthor,
              date: speech.speechDate
            };
          });
        })
      )
      .subscribe((transformedSpeech: Speech[]) => {
        this.speeches = transformedSpeech;
      });
  }
}
