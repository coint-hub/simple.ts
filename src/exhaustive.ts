/**
 * Error class for exhaustive switch/if-else checking in TypeScript.
 * 
 * This error should be thrown in the default case of a switch statement
 * or the final else branch to ensure all cases of a union type are handled.
 * TypeScript's type system will produce a compile-time error if any case
 * is not handled, as the `never` type can only accept values that are
 * impossible to reach.
 * 
 * @example
 * ```typescript
 * type Status = "pending" | "active" | "completed";
 * 
 * function handleStatus(status: Status): string {
 *   switch (status) {
 *     case "pending":
 *       return "Still waiting...";
 *     case "active":
 *       return "In progress!";
 *     case "completed":
 *       return "All done!";
 *     default:
 *       // TypeScript error if any Status case is missing above
 *       throw new ExhaustiveCaseError(status);
 *   }
 * }
 * ```
 */
export class ExhaustiveCaseError extends Error {
  constructor(value: never) {
    super(
      `Non-exhaustive switch/if-else: unhandled case ${JSON.stringify(value)}`,
    );
    this.name = "ExhaustiveCaseError";
  }
}
