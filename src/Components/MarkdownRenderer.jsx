import React from "react";

const MarkdownRenderer = ({ text }) => {
  const lines = text.split("\n");

  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        const formattedLine = parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong
                key={j}
                className="text-orange-900 font-bold"
              >
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        });

        if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
          return (
            <div key={i} className="flex items-start gap-2 ml-2">
              <span className="text-orange-500 mt-1.5 text-[6px]">•</span>
              <span>{formattedLine.slice(1)}</span>
            </div>
          );
        }

        return (
          <p key={i} className="min-h-[6px]">
            {formattedLine}
          </p>
        );
      })}
    </div>
  );
};

export default MarkdownRenderer;
