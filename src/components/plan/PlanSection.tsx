import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, FileText, Plus } from "lucide-react";

export const PlanSection = () => {
  const audienceSegments = [
    { id: 1, name: "Primary Care Physicians", count: "12,458", specialty: "General Practice" },
    { id: 2, name: "Cardiologists", count: "3,247", specialty: "Cardiology" },
    { id: 3, name: "Endocrinologists", count: "1,892", specialty: "Endocrinology" },
  ];

  const channels = [
    { id: 1, name: "Email", type: "Digital", engagement: "High" },
    { id: 2, name: "Medical Journals", type: "Print", engagement: "Medium" },
    { id: 3, name: "Webinars", type: "Virtual", engagement: "High" },
    { id: 4, name: "Medical Conferences", type: "In-Person", engagement: "Very High" },
  ];

  const contentAssets = [
    { id: 1, name: "Drug Efficacy Study Results", type: "Clinical Data", status: "Ready" },
    { id: 2, name: "Patient Case Studies", type: "Educational", status: "Review" },
    { id: 3, name: "Dosage Guidelines", type: "Reference", status: "Ready" },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Campaign Planning</h1>
        <p className="text-muted-foreground text-lg">
          Define your target audience, channels, and content strategy
        </p>
      </div>

      {/* Audience Segments */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Target Audience Segments</span>
              </CardTitle>
              <CardDescription>
                Healthcare Professional segments for your campaign
              </CardDescription>
            </div>
            <Button size="sm" className="bg-gradient-primary border-0">
              <Plus className="h-4 w-4 mr-2" />
              Add Segment
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {audienceSegments.map((segment) => (
              <div
                key={segment.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="space-y-1">
                  <h3 className="font-medium text-foreground">{segment.name}</h3>
                  <p className="text-sm text-muted-foreground">{segment.specialty}</p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">
                    {segment.count} HCPs
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Channels */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>Engagement Channels</span>
              </CardTitle>
              <CardDescription>
                Select channels to reach your target audience
              </CardDescription>
            </div>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Channel
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {channels.map((channel) => (
              <div
                key={channel.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="space-y-1">
                  <h3 className="font-medium text-foreground">{channel.name}</h3>
                  <p className="text-sm text-muted-foreground">{channel.type}</p>
                </div>
                <Badge 
                  variant={channel.engagement === "Very High" ? "default" : "secondary"}
                  className={channel.engagement === "Very High" ? "bg-success text-white" : ""}
                >
                  {channel.engagement}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content Assets */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>Content Assets</span>
              </CardTitle>
              <CardDescription>
                Marketing materials and content for your campaign
              </CardDescription>
            </div>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Upload Content
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {contentAssets.map((asset) => (
              <div
                key={asset.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="space-y-1">
                  <h3 className="font-medium text-foreground">{asset.name}</h3>
                  <p className="text-sm text-muted-foreground">{asset.type}</p>
                </div>
                <Badge 
                  variant={asset.status === "Ready" ? "outline" : "secondary"}
                  className={asset.status === "Ready" ? "border-success text-success" : ""}
                >
                  {asset.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button size="lg" className="bg-gradient-primary border-0 px-8">
          Continue to Build
        </Button>
      </div>
    </div>
  );
};