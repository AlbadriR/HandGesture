import {Finger, FingerCurl, fingerDirection, GestureDescription} from 'fingerpose';

export const midlleFingerGesture = new GestureDescription('midlle_finger')

// thumb:
midlleFingerGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
midlleFingerGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);

// index:
midlleFingerGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.20);

// middle:
midlleFingerGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
midlleFingerGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

// ring:
midlleFingerGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
midlleFingerGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
midlleFingerGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
midlleFingerGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);