import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AccordionGroup} from "./AccordionGroup";
import {Accordion} from "./Accordion";
import {AccordionToggle} from "./AccordionToggle";
import {AccordionHeading} from "./AccordionHeading";

export * from "./Accordion";
export * from "./AccordionGroup";
export * from "./AccordionToggle";
export * from "./AccordionHeading";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Accordion,
        AccordionGroup,
        AccordionToggle,
        AccordionHeading
    ],
    exports: [
        Accordion,
        AccordionGroup,
        AccordionToggle,
        AccordionHeading
    ]
})
export class AccordionModule {

}