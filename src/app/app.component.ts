import { Component } from '@angular/core';
import { data, fields, filter, names } from './messengermatrix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  step = 0;
  messengers = data;
  fields: { [key: string]: string[] } = fields;
  keys = Object.keys(fields);
  filter: { [key: string]: string } = filter;
  texte = names;

  setFilter(key: string, val: string) {
    this.filter[key] = val;
    this.step++;
    this.doesItMatch(this.messengers[0]);
  }
  allowDrop(ev: Event) {
    ev.preventDefault();
  }
  doesItMatch(value: { [key: string]: string }): boolean {
    let match = true;
    for (let key of this.keys) {
      if (this.filter[key] !== '') {
        console.log(
          key,
          '|',
          this.filter[key],
          '|',
          value[key],
          '|',
          this.filter[key].includes(value[key])
        );
        if (!this.filter[key].includes(value[key])) {
          return false;
        }
      }
    }
    return match;
  }
}
