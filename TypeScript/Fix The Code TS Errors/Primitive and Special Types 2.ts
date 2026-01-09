function printLength(value: unknown): number {
  if (typeof value !== "string") {
    throw new Error("Value must be a string");
  }

  return value.length;
}

