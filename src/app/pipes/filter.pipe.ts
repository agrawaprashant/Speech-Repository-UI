import { PipeTransform, Pipe } from "@angular/core";
import { Speech } from "../model/speech-model";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(speeches: Speech[], searchString: string): Speech[] {
    if (speeches.length === 0 || searchString == "") {
      return speeches;
    }
    const filteredSpeeches: Speech[] = [];
    for (const speech of speeches) {
      if (
        speech.title.toLowerCase().includes(searchString.toLowerCase()) ||
        speech.author.toLowerCase().includes(searchString.toLowerCase())
      ) {
        filteredSpeeches.push(speech);
      }
    }
    return filteredSpeeches;
  }
}
