---
title: Bringing LLM Power to Every Pipeline – The Multi-Model Prompt Processor
author: Grainier Perera
authorURL: "https://github.com/grainier"
authorImageURL: "img/about/grainier.png"
---

# The Multi-Model Prompt Processor

<img src="/img/blog/2025-04-28/prompt-processor-pipeline.png" alt="Prompt Processor in Pipeline"/>

Need a quick sentiment check, a rolling summary, or a safety rule that’s just a bit too fuzzy for SQL?  
With the **Multi-Model Prompt Processor** you can drop the full might of OpenAI, Anthropic, or your own Llama into any
Apache StreamPipes pipeline—no extra code required.

Below you’ll find:

* A quick tour of the options
* Five every day use-cases
* A hands-on GIF tutorial
* Tips on writing prompts that return **only** what you need
* A full list of the models that work out of the box

---

## What does the processor do?

| Option                    | What it controls                                                     |
|---------------------------|----------------------------------------------------------------------|
| **Model provider / name** | Choose any OpenAI or Anthropic model, or point to a Llama on Ollama. |
| **Temperature**           | 0 = repeatable answers, 1 = creative answers.                        |
| **History strategy**      | *Stateless*, *Windowed (N turns)*, or *Full* history.                |
| **Window size**           | How many past turns to keep in *Windowed* mode.                      |
| **Multiple input fields** | Combine several event attributes into one user message.              |

The processor sends your prompt + current event data to the model, grabs the reply, and writes it to a new field
`llmResponse`; ideal when the answer must flow straight into the next processor.

---

## Five ways to use it

| # | Scenario                                  | Prompt idea (few-shot style)                                               | History           |
|---|-------------------------------------------|----------------------------------------------------------------------------|-------------------|
| 1 | **Data-quality gate** – flag numbers > 15 | Return WARNING if value > 15 else OK. Example → 12 → OK, 18 → WARNING.     | **Stateless**     |
| 2 | **Rolling minimum** of a sensor           | Pass previousMin + current. “Return the smallest of the two numbers only.” | **Windowed (1)**  |
| 3 | **Five-tweet sentiment**                  | Concatenate last 5 tweets. “Return POSITIVE / NEGATIVE / NEUTRAL only.”    | **Windowed (5)**  |
| 4 | **Chat summariser** for support tickets   | System prompt: “Write one-line summary of the whole conversation.”         | **Full**          |
| 5 | **Dynamic threshold helper**              | Feed last 10 load values. “Return max(values)*1.1 rounded 0 decimals.”     | **Windowed (10)** |

*(Replace the `$placeholders$` with the actual stream attributes in the mapping dialog.)*

---

## Tutorial – from stream to JSON warning

Below is a short clip showing the processor in action in a temperature pipeline.  
The prompt forces the model to output a two-field JSON—perfect for machine parsing.

<img src="/img/blog/2025-04-28/prompt_processor_demo.gif" alt="Animated demo of the prompt processor"/>

**Model:** `claude-3-5-sonnet-20241022`  
**Prompt Used:**

```text
You are an assistant that ALWAYS replies with a single JSON object
containing two string fields: "status" and "message".

Rules
1. If the temperature is strictly greater than 45 °C:
     • "status" must be "WARNING"
     • "message" must explain that the temperature is above the safe limit
2. Otherwise:
     • "status" must be "OK"
     • "message" must note that the temperature is within the safe range
3. Do not output anything except the JSON object.

### Examples

Temperature: 50
{
  "status": "WARNING",
  "message": "Temperature exceeds the 45 °C threshold"
}

Temperature: 30
{
  "status": "OK",
  "message": "Temperature is within the safe range"
}

Temperature: 45
{
  "status": "OK",
  "message": "Temperature is within the safe range"
}

Temperature: 60
{
  "status": "WARNING",
  "message": "Temperature exceeds the 45 °C threshold"
}
```

The model now returns either:

```json
{
  "status": "WARNING",
  "message": "Temperature exceeds the 45 °C threshold"
}
```

or

```json
{
  "status": "OK",
  "message": "Temperature is within the safe range"
}
```

Nothing else—exactly what we want for downstream processors.

---

## Prompt writing tips for event streams

1. **State the output format first**: “Reply with OK or WARNING only.”
2. Give **one or two concrete examples** – LLMs copy patterns.
3. **End with a clear cue**: “Answer:” or “Output:”.
4. Keep *temperature ≤ 0.3* when strict structure matters.
5. Short replies reduce context size in *Windowed* / *Full* modes.

---

## Supported models

<details>
<summary><strong>Anthropic models</strong></summary>

```
claude-3-7-sonnet-20250219
claude-3-5-sonnet-20241022
claude-3-5-haiku-20241022
claude-3-5-sonnet-20240620
claude-3-opus-20240229
claude-3-sonnet-20240229
claude-3-haiku-20240307
claude-2.1
claude-2.0
```

</details>

<details>
<summary><strong>OpenAI models</strong></summary>

```
gpt-3.5-turbo              gpt-3.5-turbo-1106     gpt-3.5-turbo-0125
gpt-3.5-turbo-16k          gpt-4                  gpt-4-0613
gpt-4-turbo-preview        gpt-4-1106-preview     gpt-4-0125-preview
gpt-4-turbo                gpt-4-turbo-2024-04-09 gpt-4-32k
gpt-4-32k-0613             gpt-4o                 gpt-4o-2024-05-13
gpt-4o-2024-08-06          gpt-4o-2024-11-20      gpt-4o-mini
gpt-4o-mini-2024-07-18     o1                     o1-mini
o1-2024-12-17              o1-mini-2024-09-12     o1-preview
o1-preview-2024-09-12      o3-mini-2025-01-31
```

</details>

<details>
<summary><strong>Llama suggestions (Ollama)</strong></summary>

`llama3`, `llama3:8b`, `llama2`, `mistral-7b-instruct`, or any custom model you have pulled.
</details>

---

## Final thoughts

Whether you need a lightweight rule engine, live summaries, or just a smarter filter, the Multi-Model Prompt Processor
drops straight into your pipeline and starts working within minutes.

Give it a try, and let us know what you build!