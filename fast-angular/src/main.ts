import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { 
  provideFASTDesignSystem, 
  fastCard, 
  fastButton,
  fastTextField
} from '@microsoft/fast-components';

if (environment.production) {
  enableProdMode();
}

provideFASTDesignSystem()
    .register(
        fastCard(),
        fastButton(),
        fastTextField()
    );

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
