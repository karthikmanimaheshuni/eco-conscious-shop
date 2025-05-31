import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const GreenStore = () => {
  const [carbonScore, setCarbonScore] = useState([50]);
  const [packagingType, setPackagingType] = useState("all");
  const [groupBuy, setGroupBuy] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Organic Cotton T-Shirt",
      brand: "EcoWear",
      price: 29.99,
      carbonScore: 85,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
      packaging: "Biodegradable",
      groupBuyPrice: 24.99,
      groupBuyMinimum: 10,
      currentGroupCount: 7,
      sustainability: "Made from GOTS certified organic cotton with renewable energy manufacturing"
    },
    {
      id: 2,
      name: "Bamboo Water Bottle",
      brand: "HydroGreen", 
      price: 24.99,
      carbonScore: 78,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80",
      packaging: "Recyclable",
      groupBuyPrice: 19.99,
      groupBuyMinimum: 15,
      currentGroupCount: 12,
      sustainability: "Sustainable bamboo construction with stainless steel interior, completely plastic-free"
    },
    {
      id: 3,
      name: "Solar Power Bank",
      brand: "SunCharge",
      price: 49.99,
      carbonScore: 72,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=400&q=80",
      packaging: "Minimal",
      groupBuyPrice: 42.99,
      groupBuyMinimum: 8,
      currentGroupCount: 5,
      sustainability: "Solar-powered charging reduces grid electricity dependency, made with recycled materials"
    },
    {
      id: 4,
      name: "Recycled Notebook Set",
      brand: "PaperCycle",
      price: 18.99,
      carbonScore: 90,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
      packaging: "Biodegradable",
      groupBuyPrice: 15.99,
      groupBuyMinimum: 20,
      currentGroupCount: 18,
      sustainability: "100% post-consumer recycled paper with soy-based inks and compostable covers"
    },
    {
      id: 5,
      name: "Organic Skincare Kit",
      brand: "NaturGlow",
      price: 39.99,
      carbonScore: 82,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=400&q=80",
      packaging: "Glass",
      groupBuyPrice: 34.99,
      groupBuyMinimum: 12,
      currentGroupCount: 9,
      sustainability: "Certified organic ingredients, refillable glass containers, carbon-neutral shipping"
    },
    {
      id: 6,
      name: "Hemp Backpack",
      brand: "EcoCarry",
      price: 68.99,
      carbonScore: 75,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",
      packaging: "Recyclable",
      groupBuyPrice: 59.99,
      groupBuyMinimum: 6,
      currentGroupCount: 4,
      sustainability: "Durable hemp fiber construction, fair trade manufacturing, lifetime repair guarantee"
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  const getScoreGrade = (score) => {
    if (score >= 90) return 'A+';
    if (score >= 80) return 'A';
    if (score >= 70) return 'B+';
    if (score >= 60) return 'B';
    return 'C';
  };

  const filteredProducts = products.filter(product => {
    const meetsCarbon = product.carbonScore >= carbonScore[0];
    const meetsPackaging = packagingType === "all" || product.packaging.toLowerCase().includes(packagingType);
    const meetsGroupBuy = !groupBuy || product.groupBuyPrice < product.price;
    
    return meetsCarbon && meetsPackaging && meetsGroupBuy;
  });

  return (
    <div className="min-h-screen bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Green Store
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover products that align with your values. Every item is scored and verified for sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
                
                <div className="space-y-6">
                  {/* Carbon Score Filter */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">
                      Minimum Carbon Score: {carbonScore[0]}
                    </Label>
                    <Slider
                      value={carbonScore}
                      onValueChange={setCarbonScore}
                      max={100}
                      min={0}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  {/* Packaging Type Filter */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">
                      Packaging Type
                    </Label>
                    <Select value={packagingType} onValueChange={setPackagingType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="biodegradable">Biodegradable</SelectItem>
                        <SelectItem value="recyclable">Recyclable</SelectItem>
                        <SelectItem value="glass">Glass</SelectItem>
                        <SelectItem value="minimal">Minimal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Group Buy Toggle */}
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="group-buy"
                      checked={groupBuy}
                      onCheckedChange={setGroupBuy}
                    />
                    <Label htmlFor="group-buy" className="text-sm font-medium text-gray-700">
                      Group Buy Available
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className={`absolute top-4 right-4 ${getScoreColor(product.carbonScore)} text-white`}>
                      {getScoreGrade(product.carbonScore)}
                    </Badge>
                    {product.currentGroupCount >= product.groupBuyMinimum - 2 && (
                      <Badge className="absolute top-4 left-4 bg-blue-500 text-white">
                        Group Buy Active
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.brand}</p>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">Sustainability Score</span>
                        <span className="font-semibold text-[#007A3D]">{product.carbonScore}/100</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getScoreColor(product.carbonScore)}`}
                          style={{ width: `${product.carbonScore}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-bold text-gray-900">
                          ${product.price}
                        </span>
                        {product.groupBuyPrice < product.price && (
                          <span className="text-sm text-[#007A3D] font-semibold">
                            Group: ${product.groupBuyPrice}
                          </span>
                        )}
                      </div>
                      
                      {product.currentGroupCount < product.groupBuyMinimum && (
                        <p className="text-xs text-gray-500">
                          {product.groupBuyMinimum - product.currentGroupCount} more needed for group price
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => setSelectedProduct(product)}
                          >
                            View Sustainability Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>{product.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">
                                Why this product is sustainable:
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {product.sustainability}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-500">Packaging:</span>
                                <p className="font-medium">{product.packaging}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Score:</span>
                                <p className="font-medium text-[#007A3D]">{product.carbonScore}/100</p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Button className="w-full bg-[#007A3D] hover:bg-[#005A2D] text-white">
                        {product.currentGroupCount >= product.groupBuyMinimum - 2 
                          ? 'Join Group Buy' 
                          : 'Add to Cart'
                        }
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-[#007A3D] to-[#00A854] border-0">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Every Purchase Makes a Difference
              </h2>
              <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
                Our AI analyzes each product's complete lifecycle to ensure your choices 
                contribute to a more sustainable future. Shop with confidence knowing 
                every item meets our rigorous sustainability standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">200+</div>
                  <div className="text-green-100">Verified Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50%</div>
                  <div className="text-green-100">Avg. Carbon Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-green-100">Sustainability Verified</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GreenStore;
