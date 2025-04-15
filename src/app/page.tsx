import { ProductRow } from "./components/ProductRow";

export default function Home() {
  return (
    <section className="w-full relative  ">
   
<p className="hidden lg:block absolute z-50 -top-16 right-0 rotate-90 origin-left translate-x-[40rem] px-4 py-2 bg-white text-gray-800 text-base font-medium shadow-md rounded-md border border-gray-300">
  Le Marché Numérique de l&apos;Inde - Avez-vous vérifié votre valeur nette 2.0 sur <span className="font-semibold italic">Who Got Who?</span> ?
</p>

<p className=" hidden lg:block  absolute z-50 -top-16 right-0 rotate-90 origin-left translate-x-[28rem] px-4 py-2 bg-white text-gray-800 text-base font-medium shadow-md rounded-md border border-gray-300">
  El Mercado Digital de India - Has revisado tu patrimonio neto 2.0 en <span className="font-semibold italic">Who Got Who?</span>?
</p>


<p className=" hidden lg:block absolute z-50 left-0 rotate-270 origin-left px-4 py-2 translate-x-[16rem] translate-y-[33rem]  bg-white text-gray-800 text-base font-medium shadow-md rounded-md border border-gray-300">
भारताचे डिजिटल मार्केटप्लेस - तुम्ही Who Got Who वर तुमची नेट वर्थ 2.0 तपासली का?
</p>

<p className=" hidden lg:block absolute z-50 left-0 rotate-270 origin-left px-4 py-2 translate-x-[8rem] translate-y-[32rem]  bg-white text-gray-800 text-base font-medium shadow-md rounded-md border border-gray-300">
ભારતનું ડિજિટલ માર્કેટપ્લેસ - તમે Who Got Who પર તમારી નેટ વર્થ 2.0 ચેક કરી??
</p>



      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#f5f7fa] to-[#e2e8f0] py-20 md:py-32 flex justify-center items-center min-h-[600px]">

<div className="text-center max-w-4xl px-4 z-10  ">
  <div className="space-y-4 mb-6">
    <p className="text-lg sm:text-xl font-medium text-muted-foreground">
    &quot;India&apos;s Digital Marketplace - Have You Checked Your Net Worth 2.0 on{" "}
      <span className="text-primary font-semibold">Who Got Who?</span>&quot;
    </p>
    <p className="text-base sm:text-lg text-muted-foreground">
    &quot;भारत का डिजिटल मार्केटप्लेस - क्या आपने{" "}
      <span className="text-primary font-semibold">Who Got Who</span> पर अपनी नेट वर्थ 2.0 चेक की?&quot;
    </p>
  </div>

  <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
    Buy & Sell Digital Products <br />
    <span className="text-primary">with Professional Assistance</span>
  </h1>

  <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
    From Amazon storefronts to SaaS startups, Who Got Who is your trusted platform to safely explore, evaluate, and acquire online assets.
  </p>
</div>




   

        {/* Design elements */}
        <div className="absolute top-[-100px] left-[-100px] h-[300px] w-[300px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] bg-muted/30 rounded-full blur-2xl" />
      </div>

      {/* Product Rows */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-36 space-y-20">
        <ProductRow category="newest" />
        <ProductRow category="amazon" />
        <ProductRow category="instagram" />
        <ProductRow category="saas" />
        <ProductRow category="youtube" />
        <ProductRow category="mobileapps" />
        <ProductRow category="domains" />
        <ProductRow category="others" />
      </div>
    </section>
  );
}