import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Topic from "@/components/Topic";
import { timelineData } from "@/data/timeline";

export default function Timeline() {
  return (
    <div id="experiences">
      <Topic title="Experiences" />
      <div className="flex flex-col gap-6 relative pl-6 border-l-2 border-muted-foreground/20">
        {timelineData.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-3.5 top-4 w-3 h-3 rounded-full bg-primary" />
            <Card className="ml-2">
              <CardContent className="py-6">
                <h3 className="text-lg font-bold">{item.company}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">{item.role}</p>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                </div>
                {item.badge && <Badge className="mt-2">{item.badge}</Badge>}

                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="mt-4 text-sm list-disc list-inside space-y-1">
                    {item.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                )}

                {item.keyProjects && item.keyProjects.length > 0 && (
                  <div className="mt-4">
                    <p className="font-medium text-sm">Key Projects:</p>
                    <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                      {item.keyProjects.map((proj, i) => (
                        <li key={i}>{proj}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
