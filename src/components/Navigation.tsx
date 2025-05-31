
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, loading } = useAuth();
  const { toast } = useToast();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/problem", label: "The Problem" },
    { href: "/solution", label: "The Solution" },
    { href: "/grading", label: "Product Grading" },
    { href: "/store", label: "Green Store" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "You have been signed out",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-[#007A3D]">
            EcoShop
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#007A3D] ${
                  isActive(link.href) ? "text-[#007A3D]" : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {loading ? (
              <div className="w-8 h-8 animate-spin rounded-full border-2 border-[#007A3D] border-t-transparent"></div>
            ) : user ? (
              <>
                <Button asChild variant="ghost" className="text-[#007A3D]">
                  <Link to="/dashboard">
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Link>
                </Button>
                <Button 
                  onClick={handleSignOut}
                  variant="outline"
                  className="text-[#007A3D] border-[#007A3D] hover:bg-[#007A3D] hover:text-white"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Button asChild className="bg-[#007A3D] hover:bg-[#005A2D] text-white">
                <Link to="/auth">Get Started</Link>
              </Button>
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-[#007A3D] ${
                      isActive(link.href) ? "text-[#007A3D]" : "text-gray-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {loading ? (
                  <div className="w-8 h-8 animate-spin rounded-full border-2 border-[#007A3D] border-t-transparent mx-auto mt-4"></div>
                ) : user ? (
                  <>
                    <Button 
                      asChild 
                      variant="ghost" 
                      className="text-[#007A3D] mt-4"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to="/dashboard">
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Link>
                    </Button>
                    <Button 
                      onClick={() => {
                        handleSignOut();
                        setIsOpen(false);
                      }}
                      variant="outline"
                      className="text-[#007A3D] border-[#007A3D] hover:bg-[#007A3D] hover:text-white"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Button 
                    asChild 
                    className="bg-[#007A3D] hover:bg-[#005A2D] text-white mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/auth">Get Started</Link>
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
