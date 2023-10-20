const EventEmitter = require("events");

const emitter = new EventEmitter();

const willRunWithEvent = () => {
  return new Promise((resolve) => {
    emitter.on("moment", (message) => resolve(message));
  });
};

const doWait = async () => {
  const message = await willRunWithEvent();
  console.log("The event message is: ", message);
};

setTimeout(() => {
    emitter.emit("moment", "Are you ready to get breakfast with Jekky today?");
  }, 2000);

doWait();