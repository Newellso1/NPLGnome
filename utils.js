import { supabase } from "./lib/supabase";

export default async function FetchProducts() {
  const data = await supabase.from("products").select("*");
  return data;
}
