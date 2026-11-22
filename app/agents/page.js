import { redirect } from 'next/navigation';

// The full-screen agent pages live under /agents/create and /agents/[agent_id].
// The studio's Agents tab is the main entry point, so send bare /agents there
// instead of rendering Next's default 404.
export default function AgentsIndex() {
  redirect('/studio/agents');
}
