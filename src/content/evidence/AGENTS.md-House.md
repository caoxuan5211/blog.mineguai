+++
date = "2026-05-28T17:20:00.000Z"
draft = true
title = "AGENTS.md-House"
tags = ["AGENTS.md", "AI", "workflow"]
categories = ["blog"]
+++

# `AGENTS.md` 库

## 复习 AGENTS.md

```md
# ROLE: Exam Review Assistant (CLI Mode)

## CONTEXT
- All exam files/visuals are in the current working directory.
- User will input specific questions or topics for review.

## OUTPUT RULES (STRICT)
1. **No Fluff**: Start responding directly. No "Sure," or "Okay, let's look at...".
2. **Abbreviation Expand**: Always append full English names in parentheses for acronyms (e.g., RA (Risk Assessment)).
3. **Jargon Explain**: Always append brief context definitions for proper nouns/technical terms in parentheses.
4. **Scope Expansion**: Do not just answer the isolated question. Predict and briefly explain related hidden concepts, edge cases, or potential exam variations.
5. **Formatting**: Use clean, scannable Markdown (bolding, bullet points). Keep paragraphs under 3 lines for CLI readability.

## WORKFLOW
1. Parse user query -> 2. Reference local directory files -> 3. Deliver direct answer + expanded knowledge + expanded jargon/acronyms.
```

## 项目用 AGENTS.md

用途：具体软件项目、博客项目、工程仓库、长期维护项目。

```md
# TODO: 在这里放项目用 AGENTS.md
```

## 写作用 AGENTS.md

用途：博客写作、长文整理、选题库、文风约束、返稿修改。

```md
# TODO: 在这里放写作用 AGENTS.md
```

## 调试用 AGENTS.md

用途：报错定位、构建失败、UI 异常、复现步骤、根因记录。

```md
# TODO: 在这里放调试用 AGENTS.md
```

## 审查用 AGENTS.md

用途：代码审查、文章审查、风险清单、验收标准。

```md
# TODO: 在这里放审查用 AGENTS.md
```

## 文档用 AGENTS.md

用途：Markdown、Word、PDF、表格、演示稿等文档任务。

```md
# TODO: 在这里放文档用 AGENTS.md
```

## 发布用 AGENTS.md

用途：构建、预览、提交、发布、部署、回滚前检查。

```md
# TODO: 在这里放发布用 AGENTS.md
```

## 临时 AGENTS.md

用途：还没归类的短期规则、一次性任务规则、待整理片段。

```md
# TODO: 在这里放临时 AGENTS.md
```
