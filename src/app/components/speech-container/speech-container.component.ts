import { Component, OnInit, DoCheck } from "@angular/core";
import { SpeechService } from "src/app/service/speech.service";
import { Speech } from "src/app/model/speech-model";
import { map } from "rxjs/operators";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-speech-container",
  templateUrl: "./speech-container.component.html",
  styleUrls: ["./speech-container.component.css"]
})
export class SpeechContainerComponent implements OnInit, DoCheck {
  constructor(private speech: SpeechService) {}
  // searchForm: FormGroup;
  searchString: string = "";
  speeches: Speech[] = [
    {
      title: "Test Title1",
      author: "Prashant Agrawal",
      text: "Testa asdf asassf as asas ssafssd",
      date: new Date()
    },
    {
      title: "Test Title2",
      author: "Prashant Agrawal",
      text: "Test Text",
      date: new Date()
    }
  ];

  collpase: string = "collapse";

  ngOnInit() {
    // this.searchForm = new FormGroup({
    //   searchkeyword: new FormControl(null)
    // });

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

  ngDoCheck() {}

  onSearch(searchKeyword: string) {
    this.searchString = searchKeyword;
  }
}
