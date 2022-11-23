import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const italiahandpos = new GestureDescription('italiahand')

// thumb:
italiahandpos.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.4);
italiahandpos.addDirection(Finger.Middle, FingerDirection.VerticalUp,1.0);
// middle:
italiahandpos.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.4);
italiahandpos.addDirection(Finger.Middle, FingerDirection.VerticalUp,1.0);
// index:
italiahandpos.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.4);
italiahandpos.addDirection(Finger.Index, FingerDirection.VerticalUp,1.0);
// ring:
italiahandpos.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.4);
italiahandpos.addDirection(Finger.Ring, FingerDirection.VerticalUp,1.0);
// pinky:
italiahandpos.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.4);
italiahandpos.addDirection(Finger.Pinky, FingerDirection.VerticalUp,1.0);