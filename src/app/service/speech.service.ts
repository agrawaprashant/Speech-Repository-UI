import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Speech } from "../model/speech-model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpeechService {
  constructor(private http: HttpClient) {}

  getSpeech() {
    return this.http.get<any[]>(
      "http://localhost:5000/api/speech/fetch-speech"
    );
  }

  postSpeech(speechData: Speech) {
    return this.http.post(
      "http://localhost:5000/api/speech/add-speech",
      speechData
    );
  }
}
