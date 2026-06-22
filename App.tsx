import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import FAQ from "@/pages/FAQ";
import Blog, { BlogPostPage } from "@/pages/Blog";
import ContactInfo from "@/pages/ContactInfo";
import Submit from "@/pages/Contact";
import Admin from "@/pages/Admin";

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🏠</div>
        <h1 style={{ fontSize: 28, color: "#1B3A6B", marginBottom: 8 }}>Page not found</h1>
        <a href="/" style={{ color: "#C9A84C", fontWeight: 600 }}>← Go Home</a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      />
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route>
          <>
            <Navbar />
            <main>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/faq" component={FAQ} />
                <Route path="/blog" component={Blog} />
                <Route path="/blog/:slug">
                  {(params) => <BlogPostPage slug={params.slug} />}
                </Route>
                <Route path="/contact" component={ContactInfo} />
                <Route path="/submit" component={Submit} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
            <WhatsAppButton />
          </>
        </Route>
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
