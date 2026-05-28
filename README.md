# optimum-prime-solutions-website
website

Quick setup for ChatGPT integration:

- Create a `.env` file at the project root with:

	VITE_OPENAI_KEY=your_openai_api_key_here

- Restart the dev server after adding the key.

- The chat widget will use the key to call OpenAI; if the key is missing or the request fails, the app falls back to its existing rule-based responses.
