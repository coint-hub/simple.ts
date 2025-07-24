# simple.ts

Simple, but concrete library collections.

## Result.ts

A type-safe Result type for explicit error handling without exceptions. Provides `ok()` and `err()` helper functions to create success and failure results, enabling functional error handling patterns similar to Elm's Result type.

This implementation is not a monad - monadic features don't quite fit TypeScript's type system and ergonomics. Instead, it's designed to work with TypeScript's control flow analysis and early return patterns for clean, readable error handling.
