import { confirm, multiselect, spinner } from "@clack/prompts";
import categories from "./data/categories.json";

export async function createReleaseName() {
  const values = await multiselect({
    message:
      "Select the categories you'd like to use in the order you would like them to appear",
    options: Object.keys(categories).map((k) => ({
      value: k,
      label: categories[k as keyof typeof categories].name,
    })),
  });
  const lowerCase = await confirm({
    message: "should the result be lowercase only",
  });
  const res: string[] = [];
  if (typeof values === "symbol") return;
  const s = spinner();
  s.start("generating random release name");
  Array.from(values).forEach((e) => {
    const v = categories[e as keyof typeof categories].values;
    const index = Math.floor(Math.random() * v.length);
    res.push(v[index]);
  });
  s.stop("done generating random release name");
  let final = res.join(" ");
  return lowerCase ? final.toLowerCase() : final;
}
