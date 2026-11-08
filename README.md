# Nguyen Hung Thinh ([@nhth1nh](https://github.com/nhth1nh))

**Software Engineer** — Enterprise Java, Jakarta EE, Spring Boot & AI Engineering (LangChain4j, RAG, Guardrails)

<sub>Formerly active on Enterprise Open Source as **@nhthinh-axonivy**</sub>

[Website / CV](https://nhth1nh.github.io/my-cv/) · [LinkedIn](https://www.linkedin.com/in/nhth1nh/) · [Email](mailto:nht.8299@gmail.com)

### Tech Stack & Core Tools

[![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Jakarta EE](https://img.shields.io/badge/Jakarta_EE-00739C?style=flat-square&logo=eclipse&logoColor=white)](https://jakarta.ee/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![LangChain4j](https://img.shields.io/badge/LangChain4j-1C3C3C?style=flat-square&logo=chainlink&logoColor=white)](https://github.com/langchain4j/langchain4j)
[![OpenTelemetry](https://img.shields.io/badge/OpenTelemetry-425CC7?style=flat-square&logo=opentelemetry&logoColor=white)](https://opentelemetry.io/)
[![Arize Phoenix](https://img.shields.io/badge/Arize_Phoenix-F37021?style=flat-square&logo=phoenixframework&logoColor=white)](https://phoenix.arize.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

<!-- ACTIVITY:START -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="activity-dark.svg">
  <img alt="Engineering activity for Thinh Nguyen (@nhth1nh, formerly @nhthinh-axonivy): 412 PRs merged, 194 Code reviews, 8 Public repos." src="activity-light.svg" width="100%">
</picture>
<!-- ACTIVITY:END -->

## What I Build

> *I bridge enterprise software engineering with modern AI — turning complex platforms and LLMs into secure, observable, production-grade systems.*

#### 🛡️ Safe & Trustworthy AI Applications
- **Focus:** Architecting enterprise AI assistants and LLM pipelines that protect sensitive company data, defend against prompt-injection/jailbreaks, and emit full execution traces for production auditability.
- **Key capabilities:** PII redaction & input/output guardrails, RAG (document retrieval), and real-time LLM observability.
- **Technologies:** `LangChain4j` · `Azure OpenAI` · `Ollama` · `OpenTelemetry` · `Arize Phoenix`

#### 🏛️ Mission-Critical Enterprise Platforms
- **Focus:** Engineering and modernizing core backend systems and enterprise web portals that handle complex workflows, cross-version backward compatibility, and large-scale platform migrations.
- **Key capabilities:** Legacy-to-modern migrations (Jakarta EE / PrimeFaces), cross-version URL link resolution, role-based access control, and REST APIs.
- **Technologies:** `Java` · `Spring Boot` · `Jakarta EE` · `PrimeFaces` · `PostgreSQL` · `REST APIs`

#### ⚡ Workflow Automation & Delivery Infrastructure
- **Focus:** Stabilizing CI/CD release pipelines, eliminating flaky UI/integration tests, and building developer tooling that accelerates continuous delivery across teams.
- **Key capabilities:** Automated regression testing, containerized CI/CD pipelines, and developer productivity tools.
- **Technologies:** `Docker` · `GitHub Actions` · `Jenkins` · `Selenide` · `Maven`

## Open-Source Highlights

### Community Upstream ([LangChain4j](https://github.com/langchain4j/langchain4j))
- **Observability API**: Added [`guardrailName()` on `GuardrailExecutedEvent`](https://github.com/langchain4j/langchain4j/pull/4940) to enable granular tracing, logging, and evaluation in LLM guardrail pipelines.
- **Azure OpenAI Resilience**: Fixed `NoClassDefFoundError` via lazy `ServiceLoader` discovery ([PR #5355](https://github.com/langchain4j/langchain4j/pull/5355)), allowing custom HTTP client providers without forcing Netty onto the classpath.
- **LLM & Ollama Provider Integrations**: Local inference workflows, structured JSON extraction, and local LLM runtime support for Java applications.

### Commercial & Enterprise Open Source ([Axon Ivy Market](https://github.com/axonivy-market))
- **[axonivy-market/portal](https://github.com/axonivy-market/portal)**: Over 330+ merged PRs spanning enterprise dashboard modernization, cross-version URL link resolution, security hardening (XSS, access control, file upload filters), Jackson 3 migration, and PrimeFaces 15 / Jakarta EE 11 platform upgrades.
- **[axonivy-market/smart-workflow](https://github.com/axonivy-market/smart-workflow)**: Architected the AI guardrail framework (PII masking, prompt-injection defense, collector/adapter architecture), observability tracing, and agentic workflow orchestration.

## Repository Breakdown

<!-- OSS:START -->
| Repository | Merged | Reviewed |
| :--- | ---: | ---: |
| [portal](https://github.com/axonivy-market/portal) | 361 | 166 |
| [mobileapp](https://github.com/axonivy-market/mobileapp) | 25 | 17 |
| [smart-workflow](https://github.com/axonivy-market/smart-workflow) | 11 | 9 |
| **[langchain4j](https://github.com/langchain4j/langchain4j)** ★13.4k | 2 | 1 |
| [vscode-designer](https://github.com/axonivy/vscode-designer) | 1 | 1 |
| [ai-assistant](https://github.com/axonivy-market/ai-assistant) | 1 | 0 |
| [axonivy-express](https://github.com/axonivy-market/axonivy-express) | 1 | 0 |

<sub>402 merged · 194 reviewed across 7 public repos outside my own account. Plain rows are axonivy-market, axonivy products (contributed as @nhthinh-axonivy); **bold** rows are community open source.</sub>
<!-- OSS:END -->

## Activity Over Time

<!-- HISTORY:START -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="history-dark.svg">
  <img alt="Contributions per year for Thinh Nguyen (@nhth1nh, formerly @nhthinh-axonivy), public repositories only. 2022: 5 merged, 0 reviewed; 2023: 44 merged, 19 reviewed; 2024: 97 merged, 41 reviewed; 2025: 143 merged, 36 reviewed; 2026 (to date): 123 merged, 98 reviewed." src="history-light.svg" width="100%">
</picture>
<!-- HISTORY:END -->

**Now** — building AI developer tooling, resilient LLM applications in Java, and contributing upstream to enterprise open source.

---

> Building things, breaking things, and learning how they work under the hood.