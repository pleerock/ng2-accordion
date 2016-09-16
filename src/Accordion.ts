import {ContentChildren, Component, QueryList, Input, forwardRef, AfterContentInit, HostBinding} from "@angular/core";
import {AccordionGroup} from "./AccordionGroup";

@Component({
    selector: "accordion",
    styles: [":host{ display: block }"],
    host: {
        class: "panel-group",
        "aria-multiselectable": true,
        role: "tablist"
    },
    template: "<ng-content></ng-content>"
})
export class Accordion implements AfterContentInit {

    @Input()
    closeOthers = true;

    @Input()
    showArrows = false;

    @Input()
    expandAll = false;

    @ContentChildren(forwardRef(() => AccordionGroup))
    groups: QueryList<AccordionGroup>;

    ngAfterContentInit() {
        if (this.expandAll) {
            this.closeOthers = false;
            this.groups.toArray().forEach(group => {
                group.isOpened = true;
            });
        }
    }

    closeAll() {
        this.groups.toArray().forEach(group => {
            group.isOpened = false;
        });
    }

}
