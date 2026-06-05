---
title: Persistent State for StreamPipes Functions
author: Philipp Zehnder
authorURL: "https://github.com/tenthe"
authorImageURL: "/img/zehnder.png"
---

# Persistent State for StreamPipes Functions

With the introduction of **StreamPipes Functions**, Apache StreamPipes provides a lightweight way to attach fixed runtime logic to existing streams — without creating a full pipeline element.

Functions are ideal when:

- A full processor would be overkill  
- You want logic that runs with the extensions service lifecycle  
- You need direct access to incoming events  

Previously, functions could maintain in-memory state during runtime, but any restart of the extensions service resulted in a complete state reset.

We now provide a new functionality in **developer preview** that introduces typed state persistence for Functions, allowing state to survive service restarts.

This allows functions to survive restarts and resume exactly where they stopped.

<!--truncate-->

## Why Stateful Functions?

Many real-world use cases require minimal but persistent runtime state:

- Counting processed events  
- Tracking the last processed timestamp  
- Storing threshold configurations  
- Keeping lightweight usage statistics  

Previously, developers had to implement external persistence manually.  
Now, state management is built directly into the Function lifecycle.

---

## The New State Store API

The `FunctionContext` now provides access to a typed state store:

```java
StateStore<T> getStateStore(Class<T> stateClass)
````

This API allows you to:

* Load persisted state during startup
* Persist state on shutdown

State handling is **fully optional and backward compatible**.
If you don’t request a state store, your function behaves exactly as before.

---

## Lifecycle Integration

Functions still follow the same lifecycle:

* `onServiceStarted(FunctionContext context)`
* `onEvent(Event event, String streamId)`
* `onServiceStopped()`

The only difference is that you can now initialize a `StateStore` during startup.

---

## Example: Threshold Monitoring Function

Let’s implement a simple function that:

* Counts processed events
* Tracks the last processed timestamp
* Logs a message when a threshold is reached

### 1. Define the State Object

State is defined as a typed POJO.

```java
public class ProcessingState {

    private int schemaVersion = 1;
    private long processedEventCount = 0;
    private long lastProcessedEpochMs = 0;
    private long alertThreshold = 1000;
    
   public ProcessingState() {
   }

    // getters/setters omitted for brevity
}
```

---

### 2. Implement the Stateful Function

```java
public class ThresholdMonitoringFunction implements StreamPipesFunction {

    private StateStore<ProcessingState> stateStore;
    private ProcessingState state;

    @Override
    public String getFunctionId() {
        return "threshold-monitoring-function";
    }

    @Override
    public List<String> requiredStreamIds() {
        return List.of("your-stream-resource-id");
    }

    @Override
    public void onServiceStarted(FunctionContext context) {

        // Request typed state store
        this.stateStore = context.getStateStore(ProcessingState.class);

        // Load existing state or use default
        this.state = stateStore.load(new ProcessingState());
    }

    @Override
    public void onEvent(Event event, String streamId) {

        state.setProcessedEventCount(
            state.getProcessedEventCount() + 1
        );

        state.setLastProcessedEpochMs(
            System.currentTimeMillis()
        );

        if (state.getProcessedEventCount() 
                >= state.getAlertThreshold()) {

            // Handle alert once when threshold is reached
        }
    }

    @Override
    public void onServiceStopped() {

        // Persist state before shutdown
        stateStore.persist(state);
    }
}
```

---

## State Persistence Lifecycle

The persistence mechanism follows a simple and predictable pattern:

### Startup

```java
state = stateStore.load(new ProcessingState());
```

* If persisted state exists → it is restored
* If not → the provided default object is used

### Runtime

* State is modified in memory during `onEvent`

### Shutdown

```java
stateStore.persist(state);
```

* The current state is stored before the service stops

After a restart, the function continues with the restored values.

No external database setup.
No manual serialization logic.
No additional infrastructure required.

---

## Backward Compatibility

Stateful behavior is **opt-in**.

Existing functions:

* Continue to work unchanged
* Require no migration
* Remain fully stateless unless `getStateStore(...)` is used

---

## Conclusion & Feedback

Functions and state persistence are currently available in **developer preview**, and the API may evolve.

We are open to feedback from developers, if you try out stateful functions, let us know your thoughts and suggestions.
