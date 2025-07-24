# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Testing and Verification
- **Run all checks**: `deno task verify` - Runs linting, tests, and documentation tests
- **Run tests only**: `deno test`
- **Run specific test**: `deno test src/result_test.ts`
- **Run documentation tests**: `deno test --doc`
- **Run linting only**: `deno lint`

### Development Environment
- If using Nix: `nix-shell` to enter development environment with Deno 2.4.0

## Architecture

This is a TypeScript utility library for Deno that provides simple, concrete implementations of common patterns. The library emphasizes:

- **Type Safety First**: All utilities are designed with TypeScript's type system in mind
- **Non-Monadic Design**: Unlike traditional functional programming libraries, this avoids monadic patterns in favor of TypeScript's control flow analysis and early return patterns
- **Minimal Dependencies**: Only uses `@std/assert` for testing

### Module Structure
- `mod.ts`: Main entry point that re-exports the public API
- `src/`: Implementation files
- `src/*_test.ts`: Test files colocated with implementations

### Current Modules

**Result.ts**: A discriminated union type for explicit error handling, inspired by Elm's Result type. Uses `success` boolean discriminator with `value` (for success) or `error` (for failure) properties.

## Key Patterns

1. **Public API Pattern**: All public exports go through `mod.ts`. Never import directly from `src/` in external code.

2. **Testing Pattern**: Each module has a corresponding `*_test.ts` file. Tests should be simple and focused, using `assertEquals` from `@std/assert`.

3. **Documentation Pattern**: All public APIs must have JSDoc comments with `@example` blocks. These examples are tested via `deno test --doc`.

4. **Error Handling Pattern**: Use Result types for operations that can fail, not exceptions. This enables explicit error handling at compile time.