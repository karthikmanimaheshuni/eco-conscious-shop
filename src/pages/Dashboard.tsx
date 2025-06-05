
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import EcoPointsSummaryCard from "@/components/rewards/EcoPointsSummaryCard";
import EcoLeaderboard from "@/components/rewards/EcoLeaderboard";
import MilestoneTracker from "@/components/rewards/MilestoneTracker";
import RedeemRewards from "@/components/rewards/RedeemRewards";
import ShareImpact from "@/components/rewards/ShareImpact";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock user data for rewards system - in real app this would come from API
  const [userRewardsData] = useState({
    ecoPoints: 245,
    lifetimeCO2Offset: 72,
    groupBuysParticipated: 4,
    rewardsRedeemed: 1,
  });

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);
    };

    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "You have been signed out",
      });
      navigate("/");
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#007A3D] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Get display name from user metadata or email
  const displayName = user.user_metadata?.full_name || user.email;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {displayName}!
            </h1>
            <p className="text-gray-600">Your sustainable shopping dashboard</p>
          </div>
          <Button 
            onClick={handleSignOut}
            variant="outline"
            className="text-[#007A3D] border-[#007A3D] hover:bg-[#007A3D] hover:text-white"
          >
            Sign Out
          </Button>
        </div>

        {/* Eco Points Summary */}
        <div className="mb-8">
          <EcoPointsSummaryCard
            totalPoints={userRewardsData.ecoPoints}
            lifetimeCO2Offset={userRewardsData.lifetimeCO2Offset}
            groupBuysParticipated={userRewardsData.groupBuysParticipated}
            rewardsRedeemed={userRewardsData.rewardsRedeemed}
          />
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <EcoLeaderboard />
          <MilestoneTracker />
        </div>

        {/* Rewards and Impact Sharing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <RedeemRewards userPoints={userRewardsData.ecoPoints} />
          <ShareImpact
            userPoints={userRewardsData.ecoPoints}
            co2Offset={userRewardsData.lifetimeCO2Offset}
            userName={displayName || "Eco Hero"}
          />
        </div>

        {/* Original Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#007A3D]">Your Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">127</div>
                <p className="text-gray-600">Trees Saved</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#007A3D]">Carbon Footprint</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">-45%</div>
                <p className="text-gray-600">Reduction This Month</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#007A3D]">Sustainable Purchases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">23</div>
                <p className="text-gray-600">Items This Month</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#007A3D]">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button 
                  onClick={() => navigate("/store")}
                  className="bg-[#007A3D] hover:bg-[#005A2D] text-white"
                >
                  Browse Green Store
                </Button>
                <Button 
                  onClick={() => navigate("/grading")}
                  variant="outline"
                  className="text-[#007A3D] border-[#007A3D] hover:bg-[#007A3D] hover:text-white"
                >
                  Check Product Ratings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
