
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const timeline = [
    {
      year: "2023",
      title: "The Idea",
      description: "Recognizing the gap between consumer intent and sustainable purchasing behavior."
    },
    {
      year: "2024",
      title: "AI Development",
      description: "Building our proprietary sustainability scoring algorithm and recommendation engine."
    },
    {
      year: "2024",
      title: "Platform Launch",
      description: "Launching the beta version with a curated selection of verified eco-friendly products."
    },
    {
      year: "2025",
      title: "Scale & Impact",
      description: "Expanding globally and integrating with major retailers to maximize environmental impact."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Our mission"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h1>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  We're redefining retail with sustainability-first intelligence. 
                  Our mission is to make conscious commerce the norm, not the exception.
                </p>
                <p className="mb-6">
                  Every day, millions of purchasing decisions are made without considering 
                  their environmental impact. We believe technology can bridge this gap, 
                  making sustainable choices as easy as conventional ones.
                </p>
                <p>
                  Join us in making conscious commerce the norm. Together, we can create 
                  a future where every purchase contributes to a healthier planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From concept to a platform that's changing how the world shops
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#007A3D] hidden md:block"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-[#007A3D] rounded-full border-4 border-white shadow-lg"></div>
                  <Card className="w-full md:ml-16 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-[#007A3D] font-bold text-lg mr-4">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Transparency
                </h3>
                <p className="text-gray-600">
                  Every recommendation comes with clear explanations of environmental impact and sourcing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Accessibility
                </h3>
                <p className="text-gray-600">
                  Sustainable choices shouldn't be a luxury. We make them available to everyone.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Continuously improving our AI to provide better, more accurate sustainability insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
