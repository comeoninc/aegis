import {
  Component, ElementRef
} from '@angular/core';

@Component({
  selector: 'aegis',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {}


if (typeof Worker !== 'undefined') {
  const worker = new Worker('./app.worker', { type: 'module' });
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('Aegis');

} else {
}

