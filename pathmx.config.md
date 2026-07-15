---
ai:
  defaults:
    image: openai-image
  connections:
    openai-image:
      type: ai-sdk
      model: openai/gpt-image-2
      apiKeyEnv: OPENAI_API_KEY
plugins:
  image:
    enabled: true
    generate:
      quality: auto
      background: auto
---

# PathMX Build Week

## Paths

- [Build Week hub](./paths/index.path.md)
