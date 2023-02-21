import { Tab } from "@headlessui/react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/home/Landing";
import Product from "../components/Product";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";
import Benefits from "../components/home/Benefits";
import Banner from "../components/home/Banner";
import News from "../components/home/News";
import BannerSale from "../components/home/BannerSale";

interface Props {
  categories: Category[];
  products: Product[];
  session: Session | null;
}

const Home = ({ categories, products }: Props) => {
  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <Product product={product} key={product._id} />); //filter products by category
  };

  return (
    <div className="">
      <Head>
        <title>Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Landing />
      <Benefits />

      <section className="">
        <div className="space-y-10 py-16">
          <h1 className="text-center font-cardo text-4xl font-medium tracking-wide text-[#35383C] md:text-5xl">
            NEW ARRIVALS
          </h1>

          <Tab.Group>
            <Tab.List className="flex justify-center">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap  py-3 px-5 font-montserrat text-2xl  font-semibold outline-none md:py-4 md:px-6 md:text-base ${
                      selected
                        ? "borderGradient bg-[#d14031] text-white"
                        : " text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(4)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
      <Banner />
      <News />
      <BannerSale />
    </div>
  );
};

export default Home;

// Backend Code
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  const session = await getSession(context);

  return {
    props: {
      categories,
      products,
      session,
    },
  };
};
