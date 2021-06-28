import { TabHeader } from "./tabheader";

export interface Tab {

  header: TabHeader;

  /**
   * Add other elements here
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Sections: any;
}
