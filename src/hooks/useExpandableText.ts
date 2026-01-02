import { useState, useCallback, useMemo } from "react";

interface UseExpandableTextOptions {
  text: string;
  maxLength?: number;
}

export function useExpandableText({
  text,
  maxLength = 150,
}: UseExpandableTextOptions) {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  const shouldTruncate = text.length > maxLength;

  const displayText = useMemo(() => {
    if (!shouldTruncate || expanded) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  }, [text, maxLength, expanded, shouldTruncate]);

  return {
    expanded,
    toggle,
    displayText,
    shouldTruncate,
  };
}
