import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Speech } from "src/app/model/speech-model";
import { SpeechService } from "src/app/service/speech.service";

@Component({
  selector: "app-create-speech",
  templateUrl: "./create-speech.component.html",
  styleUrls: ["./create-speech.component.css"]
})
export class CreateSpeechComponent implements OnInit {
  constructor(private speechService: SpeechService) {}
  speechForm: FormGroup;
  ngOnInit() {
    this.speechForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required)
    });
  }

  onCreateSpeech() {
    const speech: Speech = {
      title: this.speechForm.get("title").value,
      text: this.speechForm.get("text").value,
      author: this.speechForm.get("author").value,
      date: new Date()
    };

    this.speechService.postSpeech(speech).subscribe(data => {
      console.log(data);
    });
  }
}
