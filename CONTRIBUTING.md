# Contributing to Video Downloader App

Thank you for your interest in contributing! This document explains how to get involved, what we expect from contributors, and how to submit changes.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)
- [Development Setup](#development-setup)
- [Submitting Code](#submitting-code)
- [Code Style](#code-style)
- [Commit Messages](#commit-messages)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Website / Documentation Contributions](#website--documentation-contributions)
- [First-Time Contributors](#first-time-contributors)

---

## Code of Conduct

By participating in this project you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md). Please read it before contributing.

---

## Ways to Contribute

You do not need to write code to contribute. Here are meaningful ways to help:

- **Report a bug** — Open a detailed GitHub Issue
- **Request a feature** — Describe what you need and why
- **Improve documentation** — Fix typos, expand explanations, add examples
- **Write tests** — Increase coverage for existing functionality
- **Review pull requests** — Give constructive feedback on open PRs
- **Translate** — Help make the app accessible in more languages
- **Spread the word** — Star the repo, share the project

---

## Reporting Bugs

Before opening a new issue, search [existing issues](https://github.com/iam-sandipmaity/video-downloader/issues) to avoid duplicates.

When filing a bug report, use the **Bug Report** issue template and include:

- Your **Android version** and **device model**
- The **app version** (find it in Settings → About)
- **Steps to reproduce** — be specific and sequential
- **Expected behavior** vs. **actual behavior**
- **Logcat output** if available (Android Studio → Logcat or `adb logcat`)
- **URL you were downloading** (if applicable and not private)

The more detail you provide, the faster we can investigate.

---

## Requesting Features

Open a GitHub Issue with the label **enhancement**. Include:

- A clear description of the feature
- The problem it solves or the use case it enables
- Mockups, wireframes, or examples if you have them

Features with clear use cases and community interest are prioritised for future releases.

---

## Development Setup

### Android App

**Prerequisites:**
- Android Studio (Hedgehog or newer)
- JDK 17 or higher
- Android SDK (API 26+)
- Git

**Steps:**

```bash
git clone https://github.com/iam-sandipmaity/video-downloader.git
cd video-downloader
```

Open Android Studio, select **File → Open**, navigate to the cloned directory, and wait for Gradle to sync. Build via **Build → Build Bundle(s) / APK(s) → Build APK(s)**.

### Website (this repo)

**Prerequisites:**
- Node.js 18+ and npm

```bash
git clone https://github.com/iam-sandipmaity/video-downloader-site.git
cd video-downloader-site
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

---

## Submitting Code

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally.
3. **Create a branch** with a descriptive name:
   - `feat/playlist-download` for new features
   - `fix/crash-android14` for bug fixes
   - `docs/improve-faq` for documentation changes
4. **Make your changes** — keep each commit small and focused.
5. **Write or update tests** to cover your changes.
6. **Ensure all tests pass** before opening a PR.
7. **Open a pull request** against the `main` branch using the PR template.

---

## Code Style

### Android (Kotlin)

- Follow the official [Kotlin coding conventions](https://kotlinlang.org/docs/coding-conventions.html).
- Run `./gradlew ktlintCheck` before submitting; fix all violations with `./gradlew ktlintFormat`.
- Keep functions short and focused on a single responsibility.
- Use meaningful, descriptive names — avoid abbreviations unless universally understood.
- Add comments only where the logic is non-obvious. Code should be self-documenting.

### Website (React / JavaScript)

- Use functional components with hooks; avoid class components.
- Follow the existing file and folder structure.
- Use Tailwind CSS utility classes; avoid writing custom CSS unless absolutely necessary.
- Keep components focused — one responsibility per component.
- Run `npm run build` and confirm zero errors before submitting.

---

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

**Types:**
- `feat` — a new feature
- `fix` — a bug fix
- `docs` — documentation changes only
- `style` — formatting, whitespace (no logic change)
- `refactor` — code restructuring (no feature or fix)
- `test` — adding or correcting tests
- `chore` — build process or tooling changes

**Examples:**
```
feat(downloader): add playlist download support
fix(android14): resolve crash when storage permission denied
docs(readme): update build instructions for JDK 17
```

---

## Pull Request Guidelines

- Fill in the **pull request template** completely — incomplete PRs may be closed.
- Link the PR to a related issue using `Closes #123` or `Fixes #123` in the description.
- Keep PRs focused — one feature or fix per PR. Large refactors should be discussed in an issue first.
- Add screenshots or screen recordings for any UI changes.
- Ensure CI checks pass. PRs with failing checks will not be reviewed until fixed.
- Be responsive to review comments — PRs with no response for 14 days may be closed.

---

## Website / Documentation Contributions

The documentation content displayed on the Docs page lives in `src/mock/data.js`. Corrections, additions, and improved explanations are very welcome — no Android development knowledge required.

For larger website changes, run `npm run dev` locally and confirm everything looks correct before submitting.

---

## First-Time Contributors

Not sure where to start? Look for issues labelled [**good first issue**](https://github.com/iam-sandipmaity/video-downloader/issues?q=is%3Aopen+label%3A%22good+first+issue%22). These are specifically chosen to be approachable for new contributors.

Feel free to comment on an issue asking for guidance before you start work — we are happy to help.

---

## Questions?

Open a [GitHub Discussion](https://github.com/iam-sandipmaity/video-downloader/discussions) or email **maitysandip@proton.me**.
