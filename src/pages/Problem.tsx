
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Problem = () => {
  const stats = [
    { number: "2.01B", label: "Tons of waste generated annually" },
    { number: "8M", label: "Tons of plastic enter oceans yearly" },
    { number: "36%", label: "Of CO₂ emissions from consumption" },
    { number: "91%", label: "Of plastic isn't recycled" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Stats */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                The Hidden Cost of Convenience
              </h1>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 leading-tight">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div>
              <div className="prose prose-lg text-gray-600">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Consumerism is costing the planet.
                </h2>
                <p className="mb-6">
                  Every minute, millions of purchase decisions are made worldwide. 
                  Most consumers want to make sustainable choices, but lack the 
                  information and tools to do so effectively.
                </p>
                <p className="mb-6">
                  The current retail ecosystem makes it nearly impossible for 
                  the average consumer to understand the true environmental impact 
                  of their purchases. Complex supply chains, misleading marketing, 
                  and lack of standardized metrics create confusion and inaction.
                </p>
                <p className="mb-8">
                  We aim to shift the narrative—one purchase at a time. By making 
                  sustainability data accessible and actionable, we empower 
                  consumers to drive market demand toward greener products.
                </p>
              </div>
              
              <Button asChild size="lg" className="bg-[#007A3D] hover:bg-[#005A2D] text-white">
                <Link to="/solution">See How We're Solving This</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Comparison */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Cost of Unconscious Consumption
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Small changes in purchasing behavior can have massive environmental impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">❌</div>
                  <h3 className="text-2xl font-semibold text-red-600 mb-4">
                    Traditional Shopping
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    No visibility into supply chain impact
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Excessive packaging waste
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Individual shipping increases emissions
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Lack of lifecycle consideration
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Greenwashing misleads consumers
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-[#007A3D]">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-2xl font-semibold text-[#007A3D] mb-4">
                    Conscious Commerce
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#007A3D] mr-3">•</span>
                    Full transparency on environmental impact
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#007A3D] mr-3">•</span>
                    Minimal, sustainable packaging
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#007A3D] mr-3">•</span>
                    Group buying reduces carbon footprint
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#007A3D] mr-3">•</span>
                    Cradle-to-grave lifecycle analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#007A3D] mr-3">•</span>
                    Verified sustainability credentials
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-[#007A3D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            The Time for Change is Now
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Every day we wait, the environmental cost grows. But with the right tools 
            and information, consumers can drive the market toward sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-[#007A3D] hover:bg-gray-100">
              <Link to="/solution">Discover Our Solution</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#007A3D]">
              <Link to="/store">Start Shopping Consciously</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Problem;
