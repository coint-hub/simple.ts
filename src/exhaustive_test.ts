import { assertEquals } from "@std/assert";
import { ExhaustiveCaseError } from "./exhaustive.ts";

Deno.test("ExhaustiveCaseError - exhaustive switch", () => {
  type Status = "pending" | "active" | "completed";

  function handleStatus(status: Status): string {
    switch (status) {
      case "pending":
        return "wait";
      case "active":
        return "work";
      case "completed":
        return "done";
      default:
        throw new ExhaustiveCaseError(status);
    }
  }

  assertEquals(handleStatus("pending"), "wait");
  assertEquals(handleStatus("active"), "work");
  assertEquals(handleStatus("completed"), "done");
});

Deno.test("ExhaustiveCaseError - error properties", () => {
  const error = new ExhaustiveCaseError("test" as never);
  assertEquals(error.name, "ExhaustiveCaseError");
  assertEquals(error.message, 'Non-exhaustive switch/if-else: unhandled case "test"');
});