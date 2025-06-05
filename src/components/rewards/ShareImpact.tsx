
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface ShareImpactProps {
  userPoints: number;
  co2Offset: number;
  userName: string;
}

const ShareImpact = ({ userPoints, co2Offset, userName }: ShareImpactProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateShareCard = () => {
    setIsGenerating(true);
    
    // Simulate card generation
    setTimeout(() => {
      const shareText = `I saved ${co2Offset}kg CO₂ with EcoShop! 🌍 Join me in making sustainable choices. #EcoShop #Sustainability`;
      
      // Try to use Web Share API if available
      if (navigator.share) {
        navigator.share({
          title: 'My Eco Impact',
          text: shareText,
          url: window.location.origin
        });
      } else {
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(shareText);
        toast({
          title: "Share Text Copied!",
          description: "Your impact message has been copied to clipboard. Share it on your favorite social platform!",
        });
      }
      
      setIsGenerating(false);
    }, 1000);
  };

  const shareOnTwitter = () => {
    const text = `I saved ${co2Offset}kg CO₂ with EcoShop! 🌍 Join me in making sustainable choices.`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.origin)}`;
    window.open(url, '_blank');
  };

  const shareOnLinkedIn = () => {
    const text = `I saved ${co2Offset}kg CO₂ with EcoShop! 🌍 Join me in making sustainable choices.`;
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}&summary=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#007A3D]">📢 Share Your Impact</CardTitle>
        <p className="text-gray-600">Show the world your sustainable impact and inspire others!</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Preview Card */}
          <div className="border-2 border-dashed border-[#007A3D] rounded-lg p-6 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="text-center space-y-3">
              <div className="text-3xl">🌍</div>
              <h3 className="text-xl font-bold text-gray-900">
                I saved {co2Offset}kg CO₂ with EcoShop!
              </h3>
              <div className="flex justify-center gap-6 text-sm text-gray-600">
                <div>
                  <div className="font-bold text-[#007A3D]">{userPoints}</div>
                  <div>Eco Points</div>
                </div>
                <div>
                  <div className="font-bold text-[#007A3D]">{co2Offset}kg</div>
                  <div>CO₂ Saved</div>
                </div>
              </div>
              <div className="flex justify-center">
                <Badge className="bg-[#007A3D] text-white">Eco Champion 🌱</Badge>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={generateShareCard}
              disabled={isGenerating}
              className="w-full bg-[#007A3D] hover:bg-[#005A2D] text-white"
            >
              {isGenerating ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Generating Share Card...
                </div>
              ) : (
                "📱 Generate Share Card"
              )}
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={shareOnTwitter}
                variant="outline"
                className="text-[#007A3D] border-[#007A3D] hover:bg-[#007A3D] hover:text-white"
              >
                Share on X
              </Button>
              <Button
                onClick={shareOnLinkedIn}
                variant="outline"
                className="text-[#007A3D] border-[#007A3D] hover:bg-[#007A3D] hover:text-white"
              >
                Share on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShareImpact;
