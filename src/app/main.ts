import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {NotSoGreyComponent} from './not-so-grey/not-so-grey.component';
import {ColorService} from './shared/services/color.service';
import {DribbbleService} from './shared/services/dribbble.service';
import {ImageHelper} from './shared/helpers/image.helper';
import {DeviceHelper} from './shared/helpers/device.helper';

bootstrap(NotSoGreyComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, ColorService, DribbbleService, ImageHelper, DeviceHelper]);