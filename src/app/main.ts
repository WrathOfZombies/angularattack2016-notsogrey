import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {NotSoGreyComponent} from './not-so-grey/not-so-grey.component';
import {ImageHelper} from './shared/helpers/image.helper';
import {DeviceHelper} from './shared/helpers/device.helper';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(NotSoGreyComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, ImageHelper, DeviceHelper, provide(LocationStrategy, { useClass: HashLocationStrategy })]);