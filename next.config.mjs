import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep Next's file tracing rooted at this project instead of an inferred
  // workspace root. Without this, a stray package-lock.json in a parent
  // directory makes Next pick the wrong root and emit a warning on every run.
  outputFileTracingRoot: projectRoot,
  transpilePackages: ['studio', 'ai-agent', 'workflow-builder', 'design-agent'],
};

export default nextConfig;
