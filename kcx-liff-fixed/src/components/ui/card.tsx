import React from "react";

export function Card({ children, className }: any) {
  return <div className={`rounded-lg ${className}`}>{children}</div>;
}

export function CardContent({ children, className }: any) {
  return <div className={className}>{children}</div>;
}
