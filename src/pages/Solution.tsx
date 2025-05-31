
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Solution = () => {
  const aiFeatures = [
    "Product lifecycle assessment",
    "Supply chain transparency scoring",
    "Carbon footprint calculation",
    "Material sustainability analysis",
    "Brand ethics evaluation",
    "Packaging impact assessment"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Sustainability Intelligence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our advanced AI analyzes thousands of data points to provide you with 
              clear, actionable sustainability insights for every product.
            </p>
          </div>
        </div>
      </section>

      {/* Side-by-Side Explanation */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual/Illustration */}
            <div className="order-2 lg:order-1">
              <Card className="p-8 bg-gradient-to-br from-[#007A3D]/5 to-[#007A3D]/10 border-0">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Our Recommendation Engine
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-[#007A3D] rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Data Collection</h4>
                        <p className="text-sm text-gray-600">Gathering product information from multiple sources</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-[#007A3D] rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">AI Analysis</h4>
                        <p className="text-sm text-gray-600">Processing sustainability metrics with machine learning</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-[#007A3D] rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Score Generation</h4>
                        <p className="text-sm text-gray-600">Creating comprehensive sustainability ratings</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Explanation */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How Our AI Scores Products
              </h2>
              <div className="space-y-4">
                {aiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#007A3D] rounded-full mr-4"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-gray-600 mb-6">
                  Our proprietary algorithm analyzes over 200 sustainability factors, 
                  from raw material sourcing to end-of-life disposal, giving you 
                  confidence in every purchase decision.
                </p>
                <Button asChild className="bg-[#007A3D] hover:bg-[#005A2D] text-white">
                  <Link to="/grading">See Product Grading</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Callout */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#007A3D] to-[#00A854] rounded-2xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Your Impact Scales with Every Eco-Conscious Decision
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              When you choose sustainable products, you're not just reducing your footprint—
              you're sending a market signal that drives innovation and change across entire industries.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-[#007A3D] hover:bg-gray-100">
              <Link to="/store">Try Recommendation Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Built on Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines multiple data sources and AI technologies to deliver 
              the most accurate sustainability insights available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Machine Learning
                </h3>
                <p className="text-gray-600">
                  Advanced algorithms that continuously learn and improve sustainability predictions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Blockchain Verification
                </h3>
                <p className="text-gray-600">
                  Immutable supply chain tracking for transparent and trustworthy data.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Real-time Analytics
                </h3>
                <p className="text-gray-600">
                  Live data processing from global sustainability databases and certifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
