import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Mail, 
  Eye, 
  MousePointer, 
  FileText,
  Download,
  RefreshCw
} from "lucide-react";

export const MonitorSection = () => {
  const kpiCards = [
    {
      title: "Total Reach",
      value: "24,567",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      description: "HCPs reached this month"
    },
    {
      title: "Engagement Rate",
      value: "18.4%",
      change: "+3.2%",
      trend: "up",
      icon: MousePointer,
      description: "Average engagement across channels"
    },
    {
      title: "Content Views",
      value: "89,234",
      change: "+24.8%",
      trend: "up",
      icon: Eye,
      description: "Total content interactions"
    },
    {
      title: "Email Opens",
      value: "15,678",
      change: "-2.1%",
      trend: "down",
      icon: Mail,
      description: "Email campaign performance"
    },
  ];

  const campaignPerformance = [
    { campaign: "Diabetes Care Initiative", status: "Active", reach: "8,234", engagement: "22.1%", budget: "$15,400" },
    { campaign: "Cardiology Awareness", status: "Active", reach: "6,789", engagement: "19.7%", budget: "$12,300" },
    { campaign: "Oncology Research Update", status: "Paused", reach: "4,567", engagement: "16.2%", budget: "$8,900" },
  ];

  const engagementFunnel = [
    { stage: "Impression", count: "45,678", rate: "100%" },
    { stage: "Click", count: "8,234", rate: "18.0%" },
    { stage: "Engagement", count: "3,456", rate: "42.0%" },
    { stage: "Conversion", count: "1,234", rate: "35.7%" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Campaign Monitor</h1>
          <p className="text-muted-foreground text-lg">
            Track performance and engagement metrics
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi, index) => (
          <Card key={index} className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <kpi.icon className="h-8 w-8 text-primary" />
                <Badge 
                  variant={kpi.trend === "up" ? "outline" : "secondary"}
                  className={kpi.trend === "up" ? "text-success border-success" : "text-destructive"}
                >
                  {kpi.change}
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                <p className="text-sm font-medium text-foreground">{kpi.title}</p>
                <p className="text-xs text-muted-foreground">{kpi.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Engagement Funnel */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Engagement Funnel</span>
            </CardTitle>
            <CardDescription>Conversion rates at each stage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {engagementFunnel.map((stage, index) => (
                <div key={stage.stage} className="relative">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-card border border-border">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="font-medium text-foreground">{stage.stage}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">{stage.count}</p>
                      <p className="text-sm text-muted-foreground">{stage.rate}</p>
                    </div>
                  </div>
                  {index < engagementFunnel.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-4 bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Campaign Performance */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Active Campaigns</span>
            </CardTitle>
            <CardDescription>Current campaign performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaignPerformance.map((campaign, index) => (
                <div key={index} className="p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-foreground">{campaign.campaign}</h3>
                    <Badge 
                      variant={campaign.status === "Active" ? "outline" : "secondary"}
                      className={campaign.status === "Active" ? "text-success border-success" : ""}
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Reach</p>
                      <p className="font-medium text-foreground">{campaign.reach}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Engagement</p>
                      <p className="font-medium text-foreground">{campaign.engagement}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Budget</p>
                      <p className="font-medium text-foreground">{campaign.budget}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-primary" />
            <span>Performance Reports</span>
          </CardTitle>
          <CardDescription>Detailed analytics and insights</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-24 flex-col space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span>Engagement Report</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span>Audience Analysis</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col space-y-2">
              <TrendingUp className="h-6 w-6" />
              <span>ROI Dashboard</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};