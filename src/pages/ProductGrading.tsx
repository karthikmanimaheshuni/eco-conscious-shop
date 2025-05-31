
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductGrading = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const sampleProducts = [
    {
      id: 1,
      name: "Organic Cotton T-Shirt",
      brand: "EcoWear",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      grades: {
        overall: "A+",
        eco: "A+",
        material: "A",
        lifecycle: "A+",
        ethics: "A"
      },
      details: {
        carbon: "2.1 kg CO₂",
        source: "Certified Organic",
        packaging: "Biodegradable",
        ethics: "Fair Trade Certified"
      }
    },
    {
      id: 2,
      name: "Recycled Plastic Bottle",
      brand: "HydroGreen",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
      grades: {
        overall: "B+",
        eco: "A",
        material: "B+",
        lifecycle: "B",
        ethics: "A-"
      },
      details: {
        carbon: "0.8 kg CO₂",
        source: "100% Recycled Plastic",
        packaging: "Minimal Paper",
        ethics: "B-Corp Certified"
      }
    }
  ];

  const getGradeColor = (grade) => {
    if (grade.includes('A')) return 'bg-green-500';
    if (grade.includes('B')) return 'bg-yellow-500';
    if (grade.includes('C')) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Product Sustainability Grading
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand exactly how we evaluate products across multiple sustainability dimensions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Cards */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Sample Products
            </h2>
            {sampleProducts.map((product) => (
              <Card 
                key={product.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedProduct?.id === product.id ? 'ring-2 ring-[#007A3D]' : ''
                }`}
                onClick={() => setSelectedProduct(product)}
              >
                <CardContent className="p-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.brand}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Overall Grade</span>
                    <Badge className={`${getGradeColor(product.grades.overall)} text-white`}>
                      {product.grades.overall}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Grading Details */}
          <div className="lg:col-span-2">
            {selectedProduct ? (
              <Tabs defaultValue="eco" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="eco">Eco Score</TabsTrigger>
                  <TabsTrigger value="material">Material</TabsTrigger>
                  <TabsTrigger value="lifecycle">Lifecycle</TabsTrigger>
                  <TabsTrigger value="ethics">Brand Ethics</TabsTrigger>
                </TabsList>

                <TabsContent value="eco" className="mt-6">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-semibold text-gray-900">
                          Environmental Impact Score
                        </h3>
                        <Badge className={`${getGradeColor(selectedProduct.grades.eco)} text-white text-lg px-4 py-2`}>
                          {selectedProduct.grades.eco}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Carbon Footprint</h4>
                          <p className="text-2xl font-bold text-[#007A3D]">{selectedProduct.details.carbon}</p>
                          <p className="text-sm text-gray-600">73% lower than category average</p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Packaging Impact</h4>
                          <p className="text-lg font-semibold text-gray-900">{selectedProduct.details.packaging}</p>
                          <p className="text-sm text-gray-600">Compostable within 90 days</p>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-2">Why this grade?</h4>
                        <p className="text-green-700 text-sm">
                          This product scores highly due to its organic materials, minimal carbon footprint, 
                          and completely biodegradable packaging. The manufacturing process uses renewable 
                          energy and water-efficient techniques.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="material" className="mt-6">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-semibold text-gray-900">
                          Material Sustainability
                        </h3>
                        <Badge className={`${getGradeColor(selectedProduct.grades.material)} text-white text-lg px-4 py-2`}>
                          {selectedProduct.grades.material}
                        </Badge>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-900">Source</span>
                          <span className="text-[#007A3D] font-semibold">{selectedProduct.details.source}</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-900">Recyclability</span>
                          <span className="text-[#007A3D] font-semibold">100% Recyclable</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-900">Durability</span>
                          <span className="text-[#007A3D] font-semibold">High (5+ years)</span>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">Material Analysis</h4>
                        <p className="text-blue-700 text-sm">
                          Made from certified organic cotton grown without harmful pesticides. 
                          The material is GOTS certified and traceable back to the farm level.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="lifecycle" className="mt-6">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-semibold text-gray-900">
                          Product Lifecycle Assessment
                        </h3>
                        <Badge className={`${getGradeColor(selectedProduct.grades.lifecycle)} text-white text-lg px-4 py-2`}>
                          {selectedProduct.grades.lifecycle}
                        </Badge>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Production</span>
                            <span className="text-sm font-medium text-green-600">Excellent</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Transportation</span>
                            <span className="text-sm font-medium text-green-600">Good</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Use Phase</span>
                            <span className="text-sm font-medium text-green-600">Excellent</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">End of Life</span>
                            <span className="text-sm font-medium text-green-600">Excellent</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="ethics" className="mt-6">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-semibold text-gray-900">
                          Brand Ethics & Transparency
                        </h3>
                        <Badge className={`${getGradeColor(selectedProduct.grades.ethics)} text-white text-lg px-4 py-2`}>
                          {selectedProduct.grades.ethics}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Labor Practices</h4>
                          <p className="text-[#007A3D] font-semibold">{selectedProduct.details.ethics}</p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Supply Chain</h4>
                          <p className="text-[#007A3D] font-semibold">Fully Traceable</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Fair Wages</span>
                          <span className="text-green-600 font-semibold">✓ Verified</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Worker Safety</span>
                          <span className="text-green-600 font-semibold">✓ Certified</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Community Impact</span>
                          <span className="text-green-600 font-semibold">✓ Positive</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            ) : (
              <Card className="h-96 flex items-center justify-center">
                <CardContent className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Select a Product to View Grading Details
                  </h3>
                  <p className="text-gray-600">
                    Click on any product card to see its detailed sustainability assessment
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-[#007A3D] to-[#00A854] border-0">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Shop with Confidence?
              </h2>
              <p className="text-xl text-green-100 mb-6">
                Browse our curated selection of sustainably graded products
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-[#007A3D] hover:bg-gray-100">
                Explore Green Store
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductGrading;
