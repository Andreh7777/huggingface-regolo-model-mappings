export interface InferenceModel {
    task?: string;
    hfModel: string;
    providerModel: string;

    // You can set this to force the value, e.g. to keep a model as 'staging' even if it's
    // warm/live on RegoloAI. If not set, the status will be inferred from the provider model
    status?: 'live' | 'staging';
}

export const inferenceModels: InferenceModel[] = [
    {
        task: "conversational",
        hfModel: "meta-llama/Llama-3.1-8B-Instruct",
        providerModel: "Llama-3.1-8B-Instruct",
        status: "live"
    },

    {
        task: "conversational",
        hfModel: "meta-llama/Llama-3.3-70B-Instruct",
        providerModel: "Llama-3.3-70B-Instruct",
        status: "live"
    },

    {
        task: "conversational",
        hfModel: "microsoft/phi-4",
        providerModel: "Phi-4",
        status: "live"
    },

    {
        task: "conversational",
        hfModel: "Qwen/Qwen3-8B",
        providerModel: "Qwen3-8B",
        status: "live"
    },

    {
        task: "conversational",
        hfModel: "mii-llm/maestrale-chat-v0.4-beta",
        providerModel: "maestrale-chat-v0.4-beta",
        status: "live"
    },
];
