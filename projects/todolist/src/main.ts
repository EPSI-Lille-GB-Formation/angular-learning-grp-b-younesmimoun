import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
<<<<<<< HEAD
import '@picocss/pico';
=======
>>>>>>> b0af9fe215b9ffeeb72ba36d1c2e8da39e297360

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
