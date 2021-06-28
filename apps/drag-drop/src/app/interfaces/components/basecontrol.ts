import { Constraints } from './constraints';
import { Command, Trigger } from "../specialTypes";

export interface BaseControl {
    triggers?: Trigger[];
    commands?: Command[];
    DDMPath?: string;
    constraint?: Constraints;
    type?: string;
    alias?: string;
}
