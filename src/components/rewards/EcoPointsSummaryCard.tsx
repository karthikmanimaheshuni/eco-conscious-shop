
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface EcoPointsSummaryCardProps {
  totalPoints: number;
  lifetimeCO2Offset: number;
  groupBuysParticipated: number;
  rewardsRedeemed: number;
}

const EcoPointsSummaryCard = ({
  totalPoints,
  lifetimeCO2Offset,
  groupBuysParticipated,
  rewardsRedeemed
}: EcoPointsSummaryCardProps) => {
  return (
    <TooltipProvider>
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-[#007A3D] flex items-center gap-2">
            🎁 Your Eco Points
            <Badge variant="secondary" className="bg-[#007A3D] text-white">
              {totalPoints} Points
            </Badge>
          </CardTitle>
          <p className="text-gray-600">Earn points for every eco-friendly decision you make.</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Tooltip>
              <TooltipTrigger>
                <div className="text-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="text-2xl font-bold text-[#007A3D]">{totalPoints}</div>
                  <p className="text-sm text-gray-600">Total Points</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Points earned from sustainable purchases and actions</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <div className="text-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="text-2xl font-bold text-[#007A3D]">{lifetimeCO2Offset}kg</div>
                  <p className="text-sm text-gray-600">CO₂ Offset</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Total carbon dioxide offset through your eco-friendly choices</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <div className="text-center p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                  <div className="text-2xl font-bold text-[#007A3D]">{groupBuysParticipated}</div>
                  <p className="text-sm text-gray-600">Group Buys</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Number of group purchases you've participated in</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <div className="text-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <div className="text-2xl font-bold text-[#007A3D]">{rewardsRedeemed}</div>
                  <p className="text-sm text-gray-600">Rewards Used</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Number of eco rewards you've redeemed</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default EcoPointsSummaryCard;
