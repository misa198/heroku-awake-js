import fetch from "node-fetch";

const wakeUp = (url: string, interval: number = 25, callback: Function) => {
  const milliseconds = interval * 60000;
  setTimeout(() => {
    try {
      fetch(url);
    } catch (err) {
    } finally {
      try {
        callback();
      } catch (e) {
        callback ? console.log("Callback failed: ", e.message) : null;
      } finally {
        return wakeUp(url, interval, callback);
      }
    }
  }, milliseconds);
};

export default wakeUp;
