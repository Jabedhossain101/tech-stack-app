import BannerSlider from '@/components/BannerSlider';
import ProductsPage from './products/page';


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8 sm:p-20 gap-16 bg-gray-50">
      <BannerSlider></BannerSlider>
      <h1 className="text-4xl font-bold text-black mb-8">Our Products</h1>
      <ProductsPage />
    </main>
  );
}
