import { ButtonActionParams } from './buttonActionParams';

export interface Action {
  /**
   * specify action to take for button
   */
  actionType: string;
  /**
   * action params for the button
   */
  params: ButtonActionParams;
}
