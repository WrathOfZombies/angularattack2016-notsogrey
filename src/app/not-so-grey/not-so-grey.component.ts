import {Component, ElementRef} from '@angular/core';
import {PathResolver} from '../shared/helpers/utilities';
import {ColorService} from '../shared/services/color.service';

let view = 'not-so-grey';
@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)]
})

export class NotSoGreyComponent {


    private container;
    constructor(
        private _elementRef: ElementRef,
        private _colorService: ColorService) {
        /*_colorService.getThemesFromColor('FF4444')
            .then((collection) => {
                console.log(collection.totalCount);
                console.log(_.first(collection.themes).swatches);
            })
            .catch(exception => { console.error(exception); });*/



        this.container = _elementRef.nativeElement as HTMLElement;
        this.container.querySelector('.color-list');

    }

    ngOnInit() {
        var $colorList = this.container.querySelector('.color-list');
        var noOfVisibleItems = this.getNumberOfVisibleItems($colorList);
        /*$colorList.on("scroll", function () {
            var nItem = 0;
            $colorList.find('li').each(function (iIndex, $listItem) {
                var $this = $(this);
                var positionTop = $this.position().top;
                var height = $this.height();
                if (positionTop + $this.height() > 0 && positionTop < $colorList.height()) {
                    nItem++;
                    var fScaleValue = (nItem / noOfVisibleItems) * 9 * 16;
                    $this.height(height + fScaleValue);
                }
            });
        });*/
        // click events
        /*document.body.addEventListener('click', copy, true);
        // event handler
        function copy(e) {
            // find target element
            var t = e.target,
                c = t.dataset.copytarget,
                inp = (c ? document.querySelector(c) : null);
            // is element selectable?
            if (inp && inp.select) {
                // select text
                inp.select();
                try {
                    // copy text
                    document.execCommand('copy');
                    inp.blur();
                }
                catch (err) {
                    alert('please press Ctrl/Cmd+C to copy');
                }
            }
        }*/
    }

    getNumberOfVisibleItems($list): number {
        var noOfVisibleItems = 0;
        $list.find('li').each(function (n) {
            var $this = $(this);
            console.log(n);
            if ($this.position().top + $this.height() > 0 && $this.position().top < $list.height()) {
                noOfVisibleItems++;
            }
        });
        return noOfVisibleItems;
    }
}