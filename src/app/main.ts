import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {NotSoGreyComponent} from './not-so-grey/not-so-grey.component';
import {ColorService} from './shared/services/color.service';

bootstrap(NotSoGreyComponent, [HTTP_PROVIDERS, ColorService]);