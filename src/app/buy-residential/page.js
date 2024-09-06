import BuyResidentialsPage from "@/template/BuyResidentialsPage";

async function BuyResidentials({ searchParams }) {
  // بهتر است در کامپوننت های سرورساید از ای پی آی روت استفاده نکنیم(این مورد حالت تمرینی دارد)
  // در فرانت که اینکارو بکنیم مشکلی نداره ولی در سرور باید آدرس کامل رو بنویسیم
  const res = await fetch("http://localhost:3000/api/profile", { 
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error) return <h3>مشکلی پیش آمده است</h3>;

  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialsPage data={finalData} />;
}

export default BuyResidentials;
