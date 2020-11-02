import fetch from "node-fetch";

export = function wakeUp(
  url: string,
  interval?: number,
  callback?: Function
) {
  const _interval = interval ? interval : 25;
  const milliseconds = _interval * 60000;
  setTimeout(() => {
    try {
      fetch(url);
    } catch (err) {
    } finally {
      try {
        if (callback) {
          callback();
        }
      } catch (e) {
        callback ? console.log("Callback failed: ", e.message) : null;
      } finally {
        return wakeUp(url, _interval, callback);
      }
    }
  }, milliseconds);
}
