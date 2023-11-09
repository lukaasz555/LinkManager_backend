import { difference } from "lodash";

export interface ValidationResult {
  isValid: boolean;
  text?: string;
}

export function isObjectValid<T>(
  schema: T,
  value: Record<string, unknown>
): ValidationResult {
  const valueKeys = Object.keys(value);
  let schemaKeys: string[] = [];
  let isValid = true;
  let text: string | undefined = undefined;

  if (typeof schema === "function") {
    const classInstance = new (schema as { new (): T })() as object;
    schemaKeys = Object.keys(classInstance);
  }
  if (typeof schema === "object") {
    schemaKeys = Object.keys(schema as object);
  }

  if (schemaKeys.length > valueKeys.length) {
    return {
      isValid: false,
      text: `Missing: ${difference(schemaKeys, valueKeys).join(", ")}`,
    };
  }

  schemaKeys.forEach((key) => {
    if (!valueKeys.includes(key)) isValid = false;
  });

  if (!isValid) {
    text = `Missing: ${difference(schemaKeys, valueKeys).join(", ")}`;
  }

  return {
    isValid,
    text,
  };
}
