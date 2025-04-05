---
title: "Modern CSS Tricks"
pubDate: 2024-01-05
description: "Useful CSS snippets and modern techniques"
category: "CSS"
tags: ["astro", "successes", "CSS"]
---

## Container Queries

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
```

## Custom Properties with Fallbacks


```css
.element {
  background: var(--custom-bg, #ffffff);
  color: var(--custom-color, var(--fallback-color, #000000));
}
``` 