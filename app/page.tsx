import Hero from "./components/Hero";
import Overview from "./components/Overview";
import MainServices from "./components/MainServices";
import Features from "./components/Features";
import BlogSection from "./components/BlogSection";
import CallToAction from "./components/CAllToAction";

export default function Home() {
  return (
    <main className="space-y-8">
      <Hero />
      <Overview />
      <MainServices />
      <Features />
      <BlogSection />
      <CallToAction />
    </main>
  );
}
