import { NavLink } from "react-router-dom";
import { Building2, Settings, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const navItems = [
    { to: "/", label: "Plan", icon: Settings },
    { to: "/build", label: "Build", icon: Building2 },
    { to: "/monitor", label: "Monitor", icon: BarChart3 },
  ];

  return (
    <nav className="border-b border-border bg-card shadow-card">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-foreground">PharmaFlow</h1>
            </div>
            
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`
                  }
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Settings
            </Button>
            <Button size="sm" className="bg-gradient-primary border-0 hover:opacity-90">
              Upgrade
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};