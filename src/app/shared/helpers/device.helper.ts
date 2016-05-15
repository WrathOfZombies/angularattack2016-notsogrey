import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class DeviceHelper {
    resolution: any = {};
    windowUpdated$: EventEmitter<any>

    constructor() {
        this.resolution = {
            devicePixelRatio: window.devicePixelRatio,
            types: {
                mobile: 'xs',
                tablet: 'sm',
                laptop: 'md',
                desktop: 'lg'
            }
        };

        this.resolution.size = this.getWindowSize();
        this.resolution.type = this.updateType();

        var lazyUpdate = _.throttle((event) => {
            this.resolution.size = this.getWindowSize();
            this.resolution.type = this.updateType();
            this.windowUpdated$.emit(this.resolution);
        }, 250);

        window.onresize = lazyUpdate;
        this.windowUpdated$ = new EventEmitter();
    }

    getWindowSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    };

    updateType() {
        if (this.resolution.size.width < 480) {
            return this.resolution.types.mobile;
        }
        else if (this.resolution.size.width < 768) {
            return this.resolution.types.tablet;
        }
        else if (this.resolution.size.width < 992) {
            return this.resolution.types.laptop;
        }
        else {
            return this.resolution.types.desktop;
        }
    };

    isSmallScreen() {
        return this.resolution.type === this.resolution.types.mobile
            || this.resolution.type === this.resolution.types.tablet;
    };

    isMobile() {
        return this.resolution.type === this.resolution.types.mobile;
    };

    isTablet() {
        return this.resolution.type === this.resolution.types.tablet;
    };

    isLaptop() {
        return this.resolution.type === this.resolution.types.laptop;
    };

    isDesktop() {
        return this.resolution.type === this.resolution.types.desktop;
    };
}