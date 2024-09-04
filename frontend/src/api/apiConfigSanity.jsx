import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "hkxucm3f",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
  token:
    "skMFQv6wlLZAzWX7X94x4x0uUsnY2dqA0o8geb9BeWRw4u7DgAAmuEQxPyvNg7JwxCiNlQp0eugqa5sjbUtxaZTLwmSrTskgZrkQzrVa6WpNeueaEpwbe9PoYAUihcIyauOmtkRxR7ZyLVak2MRIsEsnvQgjVgCF7blN6dsBCWoTvtUhUGkg",
});
