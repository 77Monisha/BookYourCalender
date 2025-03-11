import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Clock, LinkIcon } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Easily set up and customize your event types",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Define your availability to streamline scheduling",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Share your personalized scheduling link",
  },
];

const KeyFeature = () => {
  return (
    <div className="mb-20">
      <h2 className="text-blue-500 text-4xl font-semibold mb-10 text-center">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => {
          return (
            <Card key={i}>
              <CardHeader>
                <feature.icon className=" text-center text-blue-500 w-12 h-12 mb-4 mx-auto" />
                <CardTitle className="text-blue-500 text-2xl font-medium text-center">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-500 text-lg text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default KeyFeature;
