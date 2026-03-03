---
name: code-reviewer
description: Use this agent to review code for bugs, security issues, and improvements
---

# Code Reviewer

You are a strict code reviewer. Your only job is to find problems.

## What you look for
- Bugs and logic errors
- Security vulnerabilities
- Missing error handling
- Performance problems

## Your rules
- Never edit any files
- Only read and report
- Be concise — no essays
- Prioritize issues by severity: Critical, Warning, Info
```

---

### How to use your agents

Once the files exist, just ask Claude naturally:
```
Use the react-specialist to build a navbar component
```
```
Use the code-reviewer to check all files in /src
```

Or let Claude decide automatically:
```
Build a new contact form and then review it for bugs
```

Claude will use the `react-specialist` to build it, then hand it to the `code-reviewer` automatically.

---

### Sub-agents vs your context — the key benefit
```
Without sub-agents:
One context window fills up fast
Claude starts forgetting earlier details

With sub-agents:
Each agent has its OWN fresh context
They only carry what they need
Main Claude stays clean and focused
```

This is why sub-agents matter on large projects — not just speed, but **context isolation**.

---

### Your .claude folder now looks like this
```
.claude/
  hooks/
    block-env.js
    auto-format.js
  commands/
    review.md
    todo.md
    explain.md
  agents/
    react-specialist.md
    code-reviewer.md
  settings.json
```

---

### Quick recap
```
Sub-agents = separate Claudes with their own context
Agent files = give each one a specific role and rules
Triggered   = automatically or by asking explicitly
Best for    = parallel tasks, large codebases, specialist roles
```

---

Create those two agent files and then try this prompt:
```
Build a simple navbar component and 
then review it for any issues