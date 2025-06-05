
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Reward {
  id: string;
  title: string;
  description: string;
  pointsRequired: number;
  icon: string;
  impact: string;
}

interface RedeemRewardsProps {
  userPoints: number;
}

const RedeemRewards = ({ userPoints }: RedeemRewardsProps) => {
  const [isRedeeming, setIsRedeeming] = useState<string | null>(null);
  const { toast } = useToast();

  // Mock data - in real app this would come from an API
  const rewards: Reward[] = [
    {
      id: "1",
      title: "Plant Trees",
      description: "Fund tree planting in reforestation projects",
      pointsRequired: 100,
      icon: "🌳",
      impact: "This will plant 5 trees in India."
    },
    {
      id: "2",
      title: "10% Off Coupon",
      description: "Get discount on your next sustainable purchase",
      pointsRequired: 150,
      icon: "🎫",
      impact: "Save money on eco-friendly products."
    },
    {
      id: "3",
      title: "Gift Points",
      description: "Share eco points with friends and family",
      pointsRequired: 50,
      icon: "🎁",
      impact: "Spread sustainability awareness to others."
    }
  ];

  const handleRedeem = async (reward: Reward) => {
    if (userPoints < reward.pointsRequired) {
      toast({
        title: "Insufficient Points",
        description: `You need ${reward.pointsRequired - userPoints} more points to redeem this reward.`,
        variant: "destructive",
      });
      return;
    }

    setIsRedeeming(reward.id);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Reward Redeemed! 🎉",
        description: `${reward.title} has been successfully redeemed. ${reward.impact}`,
      });
      setIsRedeeming(null);
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#007A3D]">🎁 Redeem Rewards</CardTitle>
        <p className="text-gray-600">Use your Eco Points to make a positive impact!</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rewards.map((reward) => {
            const canRedeem = userPoints >= reward.pointsRequired;
            const isCurrentlyRedeeming = isRedeeming === reward.id;
            
            return (
              <Card key={reward.id} className={`transition-all duration-300 ${canRedeem ? 'hover:shadow-lg' : 'opacity-60'}`}>
                <CardContent className="p-4 text-center space-y-3">
                  <div className="text-4xl">{reward.icon}</div>
                  <h4 className="font-medium text-gray-900">{reward.title}</h4>
                  <p className="text-sm text-gray-600">{reward.description}</p>
                  <Badge className="bg-[#007A3D] text-white">
                    {reward.pointsRequired} points
                  </Badge>
                  <p className="text-xs text-gray-500 italic">{reward.impact}</p>
                  <Button
                    onClick={() => handleRedeem(reward)}
                    disabled={!canRedeem || isCurrentlyRedeeming}
                    className={`w-full ${canRedeem ? 'bg-[#007A3D] hover:bg-[#005A2D]' : 'bg-gray-300'} text-white`}
                  >
                    {isCurrentlyRedeeming ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Redeeming...
                      </div>
                    ) : (
                      `Redeem for ${reward.pointsRequired} pts`
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RedeemRewards;
