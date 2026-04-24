# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Estado atual

Repositório em estágio de scaffold. Cada subpasta (`landing-pages/`, `laravel/`, `react/`) contém apenas um `.gitkeep` — ainda não há templates, build, testes, lint ou dependências configuradas. Ao adicionar o primeiro template numa subpasta, remova o `.gitkeep` e registre aqui os comandos de build/teste/lint do stack escolhido.

## Escopo

Coleção de **templates reutilizáveis** para iniciar projetos. Cada subpasta agrupa templates de um stack:

- `landing-pages/` — landing pages
- `laravel/` — projetos Laravel (PHP)
- `react/` — projetos React

Cada template dentro de uma subpasta deve ser autocontido (dependências, scripts e instruções próprios). Não introduza ferramentas monorepo (workspaces, Turborepo, etc.) sem necessidade explícita.

## Convenções

- Mensagens de commit e documentação em **português**.
- Autor/contexto: Anderson Muller — DICON Contabilidade.
