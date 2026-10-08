# ⚠️ Risky API Demo (Intentional Secret Leakage Testing Repo)

> **FOR TESTING AND BENCHMARKING PURPOSES ONLY**  
> This repository is deliberately created as a mock vulnerable project with synthetic/simulated secret leaks to test and evaluate automated secret scanners, credential leakage monitors (such as **SecretWatch**, GitGuardian, TruffleHog), and GitHub Secret Scanning.

---

## 🔍 Purpose
Developers and students frequently commit secrets by accident into Git repositories, including:
1. Uncommitted `.env` files mistakenly tracked by Git
2. Hardcoded API keys in configuration objects
3. Payment tokens and AI platform credentials embedded directly in application logic
4. Raw database connection strings with embedded plaintext credentials
5. Private RSA/SSH keys stored inside repository directories

This repo simulates these exact real-world student errors with **harmless, simulated demo credentials**.

---

## 📋 Simulated Leaks Included
- 🔑 **AWS Access Key ID**: Stored in `.env` and `config/keys.js`
- 💳 **Stripe Live Secret Key**: Embedded in `src/services/paymentService.js`
- 🤖 **OpenAI API Key**: Stored in `src/services/aiService.js`
- 🗺️ **Google Maps API Key**: Stored in `config/keys.js`
- 🐘 **PostgreSQL Connection String**: Stored in `src/server.js` & `.env`
- 💬 **Slack Bot Token**: In `src/services/notificationService.js`
- 🔔 **Discord Webhook URL**: In `src/services/notificationService.js`
- 🐙 **GitHub Personal Access Token**: In `src/services/notificationService.js`
- 🔐 **RSA Private Key**: Committed in `certs/server.key`

---

## 🛑 Notice
None of these credentials are active production keys. They adhere to standard provider syntax formats to trigger heuristic and regex-based scanning engines.
