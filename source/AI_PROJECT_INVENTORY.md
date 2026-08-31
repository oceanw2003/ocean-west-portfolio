# Summer 2026 AI Engineering Project Inventory

This inventory is based on local project documentation, source code, tests, and generated artifacts. It separates implemented systems from specification or learning work so application materials stay accurate.

## Resume Priorities

### AI Document Intelligence System (RAG V1)

- Status: Implemented full-stack application.
- Stack: Python, FastAPI, Streamlit, OpenAI API, ChromaDB, semantic retrieval, BM25.
- Evidence: File ingestion for PDF, DOCX, and TXT; chunking, embedding generation, hybrid retrieval, source-aware answers, API endpoints, CLI workflows, tests, and evaluation runner.
- Resume angle: Document intelligence, retrieval quality, application architecture, evaluation.

### Door Guard: Local AI Vision and Response Prototype

- Status: Working local-first prototype with documented limitations.
- Stack: Python, OpenCV, YOLO, Ollama, RTSP/IP camera input, local TTS, microphone input.
- Evidence: Person detection, configurable door zone, loiter tracking, structured event summaries, risk snapshots, JSONL logging, and optional local LLM dialogue.
- Resume angle: Computer vision, real-time event pipelines, edge/local AI, reliability tradeoffs.

### AI-Assisted Market Research and Paper-Trading Platform

- Status: Implemented paper-first system; explicitly not live-ready.
- Stack: Python, Streamlit, Azure OpenAI review, technical indicators, backtesting, paper brokerage, risk and compliance modules.
- Evidence: Market-data ingestion, feature engineering, ensemble signals, position sizing, trade limits, first-hour scheduling, persistent audit artifacts, tests, and real-data backtest reports.
- Resume angle: Safe AI-assisted decision systems, modular architecture, testing, guardrails, observability.

### AI Brand Consistency Checker

- Status: Product and system design with structured contracts, fixtures, and evaluation materials.
- Stack: Retrieval-augmented generation concepts, prompt and evaluation design, JSON Schema, OpenAPI.
- Evidence: Input/output contracts, audit-log schema, adversarial prompt-injection fixture, golden-answer set, evaluation rubric, deployment/runbook documentation, and structured review examples.
- Resume angle: LLM evaluation, structured outputs, safety-aware prompt handling, product requirements.

## Supporting Projects

### CrewAI Research Agent and Reusable Web Scraper

- Status: Working learning/rebuild project.
- Stack: Python, CrewAI, DuckDuckGo search, Pydantic, custom tool interfaces.
- Evidence: Sequential researcher and writer agents, typed search input schema, configurable source filtering, reusable scraper package.
- Best use: Interview discussion or portfolio supporting project; omit from the one-page resume if space is limited.

### Early Document Q&A Prototype

- Status: Predecessor to RAG V1.
- Stack: Python, Azure OpenAI, LangChain, ChromaDB, Streamlit.
- Evidence: PDF loading, chunking, embeddings, vector search, and document Q&A interface.
- Best use: Describe as the initial prototype that evolved into RAG V1, not as a separate resume project.

## Not Selected for an AI Resume

- CarSaver: technically strong graphics and geometry software, but not an AI project.
- Minecraft/CLU work: not verified as AI-engineering work from the files reviewed.

## Resume Rules

- Describe the trading system as paper-first and safety-gated. Do not claim live trading, profitable deployment, or investment performance.
- Describe the Brand Checker as a designed/specified evaluation system unless implementation evidence is added.
- Use project architecture, tests, evaluation, and safety controls as proof of engineering rigor.
