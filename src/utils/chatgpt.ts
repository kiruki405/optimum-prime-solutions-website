export async function getChatGPTReply(userText: string, siteData: any) {
  const key = import.meta.env.VITE_OPENAI_KEY;
  if (!key) {
    throw new Error('MISSING_OPENAI_KEY');
  }

  const system = `You are Optimum Prime assistant. Answer concisely and helpfully using the site data when relevant.`;
  const content = `SiteData:\n${JSON.stringify(siteData)}\n\nUser: ${userText}`;

  const body = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: system },
      { role: 'user', content },
    ],
    temperature: 0.4,
    max_tokens: 600,
  };

  // add a reasonable timeout so quicklinks fall back if the API is slow
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(body),
    signal: controller.signal,
  }).finally(() => clearTimeout(timeout));

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenAI error: ${res.status} ${text}`);
  }

  const json = await res.json();
  const msg = json?.choices?.[0]?.message?.content;
  if (!msg) throw new Error('No response from OpenAI');
  return msg as string;
}
