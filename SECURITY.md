# Security Policy

## Supported Versions

We release security fixes for the latest stable version of the app. Older versions are not actively patched — users are encouraged to update to the latest release.

| Version | Supported |
|---------|-----------|
| Latest (v1.1.x) | ✅ Yes |
| Older versions | ❌ No |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub Issues.**

If you discover a security vulnerability in the Video Downloader App or this website, please report it responsibly by emailing:

**maitysandip@proton.me**

Include as much of the following information as possible to help us understand and reproduce the issue:

- **Type of vulnerability** (e.g. code execution, data exposure, privilege escalation)
- **Affected component** — Android app, website, or both
- **File path(s) or URL(s)** related to the vulnerability
- **Step-by-step instructions to reproduce**
- **Proof-of-concept or exploit code** (if available)
- **Potential impact** — what an attacker could achieve

We will acknowledge your report within **48 hours** and aim to provide a timeline for a fix within **7 days**.

## Responsible Disclosure

We follow a coordinated disclosure process:

1. You report the vulnerability privately to the email above.
2. We confirm receipt and begin investigation.
3. We develop and test a fix.
4. We release the patch and publicly disclose the vulnerability details.
5. We credit you in the release notes (unless you prefer to remain anonymous).

Please give us a reasonable amount of time to address the issue before any public disclosure.

## Scope

### In Scope

- Security vulnerabilities in the Android app (APK)
- Security vulnerabilities in this website
- Vulnerabilities in the APK distribution pipeline (tampered APK, incorrect checksums)
- Insecure dependency usage with a realistic attack vector

### Out of Scope

- Vulnerabilities in third-party dependencies that have already been publicly disclosed and are awaiting an upstream fix
- Social engineering attacks
- Physical device attacks
- Vulnerabilities requiring a rooted or jailbroken device

## APK Integrity

Every official release APK is published with a SHA256 checksum on the download page. Always verify the checksum of any APK before installing. If you find a mismatch between our published checksum and a file hosted anywhere (including our own GitHub Releases), report it immediately.

## Policy Last Updated

March 2026
