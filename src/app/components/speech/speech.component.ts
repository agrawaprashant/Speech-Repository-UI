import { Component, OnInit, Input } from "@angular/core";
import { Speech } from "src/app/model/speech-model";

@Component({
  selector: "app-speech",
  templateUrl: "./speech.component.html",
  styleUrls: ["./speech.component.css"]
})
export class SpeechComponent implements OnInit {
  constructor() {}
  @Input() speech: Speech;
  @Input() dataTarget: string;
  ngOnInit() {}

  onClickModal(element) {
    console.log(this.dataTarget);
    console.log(element);
  }
}
