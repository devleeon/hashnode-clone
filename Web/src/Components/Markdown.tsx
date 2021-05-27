import React, { ReactChild, ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from "remark-gfm";

interface Props {
  children: string;
}

function Markdown({ children }: Props): ReactElement {
  return (
    <ReactMarkdown
      className="line-break"
      remarkPlugins={[gfm]}
      components={{
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          return !inline ? (
            <SyntaxHighlighter
              style={materialOceanic}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              {...props}
              {...(match ? { language: match[1] } : { className: className })}
            />
          ) : (
            <code
              className={className}
              {...props}
              children={String(children).replace(/\n$/, "")}
            />
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

export default Markdown;
