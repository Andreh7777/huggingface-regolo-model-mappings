import process from "node:process";

export async function getModelId(modelName) {
  const apiKey = process.env.REGOLO_API_KEY;
  if (!apiKey) throw new Error("Set REGOLO_API_KEY env-var with your Regolo key");

  const res = await fetch("https://api.regolo.ai/model/info", {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Regolo responded ${res.status}: ${await res.text()}`);
  }

  const { data = [] } = await res.json();            // LiteLLM returns { data: [...] } :contentReference[oaicite:2]{index=2}
  const match = data.find((m) => m.model_name === modelName);

  if (!match) {
    throw new Error(`Model “${modelName}” not found on this proxy`);
  }

  return match.model_info.id;                        // every item carries model_info.id :contentReference[oaicite:3]{index=3}
}

