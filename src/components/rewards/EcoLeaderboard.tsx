
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface LeaderboardUser {
  id: string;
  name: string;
  points: number;
  rank: number;
}

const EcoLeaderboard = () => {
  // Mock data - in real app this would come from an API
  const leaderboardData: LeaderboardUser[] = [
    { id: "1", name: "Sarah Chen", points: 1250, rank: 1 },
    { id: "2", name: "Alex Rodriguez", points: 980, rank: 2 },
    { id: "3", name: "Emily Johnson", points: 875, rank: 3 },
    { id: "4", name: "Michael Park", points: 720, rank: 4 },
    { id: "5", name: "Lisa Thompson", points: 680, rank: 5 },
    { id: "6", name: "David Kim", points: 590, rank: 6 },
    { id: "7", name: "Anna Wilson", points: 520, rank: 7 },
    { id: "8", name: "James Brown", points: 480, rank: 8 },
    { id: "9", name: "Maria Garcia", points: 445, rank: 9 },
    { id: "10", name: "Tom Anderson", points: 420, rank: 10 },
  ];

  const getRankBadge = (rank: number) => {
    if (rank === 1) return { label: "Carbon Champion 🌱", color: "bg-yellow-500" };
    if (rank <= 5) return { label: "Eco Hero", color: "bg-[#007A3D]" };
    return { label: "Eco Contributor", color: "bg-gray-500" };
  };

  return (
    <TooltipProvider>
      <Card>
        <CardHeader>
          <CardTitle className="text-[#007A3D] flex items-center gap-2">
            🌍 Top Eco-Contributors This Month
            <Tooltip>
              <TooltipTrigger>
                <span className="text-sm text-gray-500 cursor-help">ℹ️</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Ranked by total points in last 30 days</p>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaderboardData.map((user) => {
              const badge = getRankBadge(user.rank);
              return (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-[#007A3D] text-white rounded-full font-bold text-sm">
                      {user.rank}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <Badge className={`${badge.color} text-white text-xs`}>
                        {badge.label}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#007A3D]">{user.points}</p>
                    <p className="text-xs text-gray-500">points</p>
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

export default EcoLeaderboard;
