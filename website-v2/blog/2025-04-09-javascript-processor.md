---
title: How to Use the JavaScript Evaluator Processor
author: Philipp Zehnder
authorURL: "https://github.com/tenthe"
authorImageURL: "/img/zehnder.png"
---

# How to Use the JavaScript Evaluator Processor 

**Have a use case where none of the existing processors fit?**  
Don’t worry—we’ve got just the thing for you.

The **JavaScript Evaluator Processor** in Apache StreamPipes allows you to define custom event logic with just a few lines of JavaScript. Whether you want to modify values, filter events, or even add stateful logic, this processor empowers you to do just that—without writing a full processing element in Java.

Let’s take a closer look at how it works, what the configuration options are, and how you can use it in three different ways.


## What is the JavaScript Evaluator?

Sometimes you need to apply custom logic to your data stream. Maybe it's a quick transformation or a complex filter that isn’t supported out of the box. The JavaScript Evaluator Processor is designed exactly for these cases.

With a simple JavaScript function, you can:

- Modify existing fields
- Add new fields
- Filter out unwanted events
- Maintain state across events

All you need is a little coding and a bit of creativity.


## Configuring the JavaScript Processor
When adding the JavaScript Evaluator to your pipeline, you’ll notice two key configuration sections:

<img src="/img/blog/2025-04-09/javascript-processor-pipeline.png" alt="Javascript Processor in Pipeline"/>

1. **The JavaScript Function**  
   This function is triggered once for *each incoming event*.

<img src="/img/blog/2025-04-09/javascript-processor-code.png" alt="Javascript Processor Code Editor"/>

2. **The Output Schema**  
   This defines the structure of your transformed events. It’s important to ensure that the output schema matches what your function returns—otherwise, downstream processors might not be able to validate the events correctly.

<img src="/img/blog/2025-04-09/javascript-processor-event-schema.png" alt="Javascript Processor Event Schema Editor"/>


Let’s explore some examples that show different ways to apply custom logic to your event streams using JavaScript.

## Example 1: Stateless Event Transformation

The simplest use case is when you want to modify values in an event.

**Use case:** You want to halve the `temperature` value of each incoming event.

```javascript
function process(event) {
    event.temperature = event.temperature / 2;
    return event;
}
```

That’s it! Each event passes through this function, gets modified, and is sent on its way. No extra setup needed.


## Example 2: Custom Event Filtering

You don’t always want to forward every event. The JavaScript Evaluator lets you return `null` (or just omit `return`) to drop an event.

**Use case:** Only forward events where the `temperature` is between 50 and 100.

```javascript
function process(event) {
    if (event.temperature > 50 && event.temperature < 100) {
        return event;
    }
}
```

With this setup, only "valid" events get through. All others are silently ignored. Perfect for quick, custom filtering logic.


## Example 3: Stateful Logic

Need to track information across multiple events? You can wrap your function in an **Immediately Invoked Function Expression (IIFE)** to create persistent variables.

**Use case:** Count how many events have passed through the processor and append that number to each event.

```javascript
(() => {
    let count = 0;

    return function process(event) {
        count += 1;
        event.count = count;
        return event;
    };
})()
```

This small trick makes it easy to introduce state without needing any external dependencies or full-blown processor development. You can track counts, store intermediate values, or even implement basic alerting.
Just make sure that any new properties you add to the event, like `count` in the example, are also included in the output event schema during processor configuration, otherwise the pipeline may fail validation.

## Wrap-Up

The JavaScript Evaluator is one of the most flexible processors in StreamPipes. Whether you're a beginner or a power user, it lets you:

✅ Write custom transformations  
✅ Implement simple filters  
✅ Track state between events  
✅ Prototype complex logic—without deploying a new microservice

So, next time you think *"I wish there was a processor that could..."*, just try the JavaScript Evaluator. Chances are, it can.

Got a cool use case using this processor? Let us know or share it with the community—we’d love to see what you’re building with Apache StreamPipes!
