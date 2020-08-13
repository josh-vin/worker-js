let loadingState = {state: 'init'};

// wait for a connection
onconnect = (e) => {
  // we take the caller port
  const port = e.ports[0];

  // on message we expect a json that will tell the worker what to do
  port.onmessage = ({data}) => {
      const {action, state} = data;

      if (action === 'getState') {
          port.postMessage(loadingState);
      } else if (action === 'setState') {
        loadingState = state;
          port.postMessage(loadingState);
      }
  };
};