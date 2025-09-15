import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Workflow, Play, Clock, Mail, Users, FileText, ArrowRight, Plus } from "lucide-react";

export const BuildSection = () => {
  const workflowSteps = [
    {
      id: 1,
      type: "trigger",
      title: "Campaign Start",
      description: "Trigger when campaign goes live",
      icon: Play,
      color: "text-success",
    },
    {
      id: 2,
      type: "action",
      title: "Send Welcome Email",
      description: "Initial outreach to HCP segment",
      icon: Mail,
      color: "text-primary",
    },
    {
      id: 3,
      type: "condition",
      title: "Wait 3 Days",
      description: "Allow time for initial engagement",
      icon: Clock,
      color: "text-warning",
    },
    {
      id: 4,
      type: "action",
      title: "Follow-up Content",
      description: "Send clinical study materials",
      icon: FileText,
      color: "text-primary",
    },
  ];

  const availableWidgets = [
    { name: "Email Sequence", icon: Mail, category: "Communication" },
    { name: "Audience Filter", icon: Users, category: "Targeting" },
    { name: "Content Delivery", icon: FileText, category: "Content" },
    { name: "Wait Timer", icon: Clock, category: "Logic" },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Campaign Builder</h1>
        <p className="text-muted-foreground text-lg">
          Create automated workflows with triggers and actions
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Widget Library */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Widget Library</CardTitle>
            <CardDescription>Drag widgets to build your workflow</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {availableWidgets.map((widget, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:shadow-md transition-shadow cursor-pointer bg-gradient-card"
              >
                <widget.icon className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">{widget.name}</p>
                  <p className="text-xs text-muted-foreground">{widget.category}</p>
                </div>
              </div>
            ))}
            <Button size="sm" variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              More Widgets
            </Button>
          </CardContent>
        </Card>

        {/* Workflow Canvas */}
        <div className="lg:col-span-3">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Workflow className="h-5 w-5 text-primary" />
                    <span>Campaign Workflow</span>
                  </CardTitle>
                  <CardDescription>Visual workflow builder</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">Save Draft</Button>
                  <Button size="sm" className="bg-gradient-primary border-0">
                    <Play className="h-4 w-4 mr-2" />
                    Test Run
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {workflowSteps.map((step, index) => (
                  <div key={step.id} className="relative">
                    <div className="flex items-center space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg border-2 border-border bg-card flex items-center justify-center ${step.color}`}>
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium text-foreground">{step.title}</h3>
                            <Badge variant="outline" className="text-xs">
                              {step.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-6 bg-border"></div>
                    )}
                  </div>
                ))}
                
                {/* Add Step Button */}
                <div className="flex items-center justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-dashed border-2 hover:border-primary hover:text-primary"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Next Step
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" size="lg">
          Back to Plan
        </Button>
        <Button size="lg" className="bg-gradient-primary border-0 px-8">
          Continue to Monitor
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};