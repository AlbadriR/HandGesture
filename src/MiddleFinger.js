import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const midlleFingerGesture = new GestureDescription('midlle_finger')

// thumb:
midlleFingerGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
midlleFingerGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);

// middle:
midlleFingerGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.10);
midlleFingerGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp,1.0);
// index:
midlleFingerGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.3);
midlleFingerGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.5);
midlleFingerGesture.addDirection(Finger.Index, FingerDirection.VerticalDown,1.0);
// ring:
midlleFingerGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.5);
midlleFingerGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.5);

// pinky:
midlleFingerGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.5);
midlleFingerGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.5);