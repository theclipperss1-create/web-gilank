import type { ScriptHTMLAttributes } from "react";

export interface ScriptProps extends ScriptHTMLAttributes<HTMLScriptElement> {
  children?: string;
  dangerouslySetInnerHTML?: { __html: string };
}

export function Script({ children, dangerouslySetInnerHTML, ...props }: ScriptProps) {
  return (
    <script {...props} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
      {children}
    </script>
  );
}
