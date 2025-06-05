
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Milestone {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  reward: number;
  badgeIcon: string;
}

const MilestoneTracker = () => {
  // Mock data - in real app this would come from an API
  const milestones: Milestone[] = [
    {
      id: "1",
      title: "Offset 100kg CO₂",
      description: "Help save the planet by offsetting carbon emissions",
      target: 100,
      current: 72,
      reward: 50,
      badgeIcon: "🌱"
    },
    {
      id: "2",
      title: "Join 5 group buys",
      description: "Participate in community group purchases",
      target: 5,
      current: 4,
      reward: 30,
      badgeIcon: "🤝"
    },
    {
      id: "3",
      title: "Buy 10 A+ products",
      description: "Purchase top-rated sustainable products",
      target: 10,
      current: 6,
      reward: 70,
      badgeIcon: "⭐"
    }
  ];

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <TooltipProvider>
      <Card>
        <CardHeader>
          <CardTitle className="text-[#007A3D]">🎯 Milestone Tracker</CardTitle>
          <p className="text-gray-600">Complete challenges to earn badges and bonus points!</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {milestones.map((milestone) => {
              const progress = getProgressPercentage(milestone.current, milestone.target);
              const isCompleted = milestone.current >= milestone.target;
              
              return (
                <div key={milestone.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{milestone.badgeIcon}</span>
                      <div>
                        <h4 className="font-medium text-gray-900">{milestone.title}</h4>
                        <p className="text-sm text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge className={isCompleted ? "bg-[#007A3D] text-white" : "bg-gray-200 text-gray-700"}>
                          +{milestone.reward} pts
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>You'll earn {milestone.reward} Eco Points when you hit this goal.</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {milestone.current} / {milestone.target} {milestone.title.includes("CO₂") ? "kg" : ""}
                      </span>
                      <span className="text-[#007A3D] font-medium">
                        {Math.round(progress)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${
                          isCompleted ? "bg-[#007A3D]" : "bg-green-400"
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default MilestoneTracker;
