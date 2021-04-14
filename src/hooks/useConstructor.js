import { useRef } from 'react';

export default (callBack = () => { }) => { //() => { } --> Default params
    const hasBeenCalled = useRef(false);
    if (hasBeenCalled.current) return;
    callBack();
    hasBeenCalled.current = true;
}