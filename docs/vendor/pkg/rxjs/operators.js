import { o as operate, c as innerFrom, a as OperatorSubscriber, t as timer, h as asyncScheduler } from '../common/timer-36a59fd3.js';

var defaultThrottleConfig = {
    leading: true,
    trailing: false,
};
function throttle(durationSelector, _a) {
    var _b = _a === void 0 ? defaultThrottleConfig : _a, leading = _b.leading, trailing = _b.trailing;
    return operate(function (source, subscriber) {
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function () {
            throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
            throttled = null;
            if (trailing) {
                send();
                isComplete && subscriber.complete();
            }
        };
        var cleanupThrottling = function () {
            throttled = null;
            isComplete && subscriber.complete();
        };
        var startThrottle = function (value) {
            return (throttled = innerFrom(durationSelector(value)).subscribe(new OperatorSubscriber(subscriber, endThrottling, cleanupThrottling)));
        };
        var send = function () {
            if (hasValue) {
                hasValue = false;
                var value = sendValue;
                sendValue = null;
                subscriber.next(value);
                !isComplete && startThrottle(value);
            }
        };
        source.subscribe(new OperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            sendValue = value;
            !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function () {
            isComplete = true;
            !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
    });
}

function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = asyncScheduler; }
    if (config === void 0) { config = defaultThrottleConfig; }
    var duration$ = timer(duration, scheduler);
    return throttle(function () { return duration$; }, config);
}

export { throttleTime };
