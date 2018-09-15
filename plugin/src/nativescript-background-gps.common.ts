import {GeoLocation as LocationDef} from "./location";
export class GeoLocation implements LocationDef {
  public latitude: number;
  public longitude: number;

  public altitude: number;

  public horizontalAccuracy: number;
  public verticalAccuracy: number;

  public speed: number; // in m/s ?

  public bearing: number; // in degrees

  public timestamp: Date;

  public android?: any;  // android Location
  public ios?: any;      // iOS native location
}

export var defaultGetLocationTimeout = 5 * 60 * 1000; // 5 minutes

let debug = false;
export function setGPSDebug(value: boolean) {
  debug = value;
}

export enum CLogTypes {
  debug,
  info,
  warning,
  error
}

export const CLog = (type: CLogTypes = 0, ...args) => {
  if (debug) {
    if (type === 0) {
      // Debug
      console.log.apply(this, args);
    } else if (type === 1) {
      // Info
      console.log.apply(this, args);
    } else if (type === 2) {
      // Warning
      console.warn.apply(this, args);
    } else if (type === 3) {
      console.error.apply(this, args);
    }
  }
};