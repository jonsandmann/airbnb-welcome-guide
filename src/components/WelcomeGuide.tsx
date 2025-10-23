import { Wifi, Home, Coffee, MapPin, Phone, Clock, Book } from "lucide-react";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function WelcomeGuide() {
  return (
    <div className="max-w-4xl mx-auto p-8 md:p-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-2">Welcome to Your Stay</h1>
        <p className="text-gray-600">We're happy to have you here</p>
      </div>

      <Separator className="mb-8" />

      {/* Tabs Navigation */}
      <Tabs defaultValue="essentials" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-gray-100">
          <TabsTrigger value="essentials">Essentials</TabsTrigger>
          <TabsTrigger value="house">House</TabsTrigger>
          <TabsTrigger value="local">Local</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        {/* Essentials Tab */}
        <TabsContent value="essentials" className="space-y-8">
          <Section icon={<Wifi size={24} />} title="WiFi">
            <InfoRow label="Network" value="HomeNetwork_5G" />
            <InfoRow label="Password" value="Welcome2024" />
          </Section>

          <Section icon={<Home size={24} />} title="Address">
            <InfoRow label="Street" value="123 Maple Street" />
            <InfoRow label="City" value="Portland, OR 97201" />
            <InfoRow label="Access Code" value="*1234#" />
          </Section>

          <Section icon={<Clock size={24} />} title="Check-in & Check-out">
            <InfoRow label="Check-in" value="After 3:00 PM" />
            <InfoRow label="Check-out" value="Before 11:00 AM" />
            <InfoRow label="Quiet Hours" value="10:00 PM - 8:00 AM" />
          </Section>
        </TabsContent>

        {/* House Tab */}
        <TabsContent value="house" className="space-y-8">
          <Section icon={<Book size={24} />} title="House Rules">
            <ul className="space-y-3 text-gray-700">
              <li>• No smoking inside the property</li>
              <li>• Please remove shoes at the entrance</li>
              <li>• Maximum occupancy: 4 guests</li>
              <li>• No parties or events</li>
              <li>• Keep noise to a minimum after 10 PM</li>
              <li>• Please turn off all lights when leaving</li>
            </ul>
          </Section>

          <Section icon={<Home size={24} />} title="Amenities">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-700">• Washer & Dryer</p>
                <p className="text-gray-700">• Full Kitchen</p>
                <p className="text-gray-700">• Central Heating</p>
                <p className="text-gray-700">• Air Conditioning</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">• Smart TV</p>
                <p className="text-gray-700">• Free Parking</p>
                <p className="text-gray-700">• Iron & Board</p>
                <p className="text-gray-700">• Hair Dryer</p>
              </div>
            </div>
          </Section>

          <Section title="Trash & Recycling">
            <p className="text-gray-700 mb-2">Pickup day: <span className="font-medium">Thursday mornings</span></p>
            <p className="text-gray-700">• Black bin: General waste</p>
            <p className="text-gray-700">• Blue bin: Recycling</p>
            <p className="text-gray-700">• Green bin: Compost</p>
          </Section>
        </TabsContent>

        {/* Local Tab */}
        <TabsContent value="local" className="space-y-8">
          <Section icon={<Coffee size={24} />} title="Coffee & Breakfast">
            <Recommendation 
              name="Blue Star Donuts"
              distance="0.3 miles"
              description="Artisanal donuts and coffee"
            />
            <Recommendation 
              name="Stumptown Coffee"
              distance="0.5 miles"
              description="Local roaster, excellent espresso"
            />
          </Section>

          <Section icon={<MapPin size={24} />} title="Restaurants">
            <Recommendation 
              name="Le Pigeon"
              distance="1.2 miles"
              description="French-inspired fine dining"
            />
            <Recommendation 
              name="Pok Pok"
              distance="0.8 miles"
              description="Thai street food favorites"
            />
            <Recommendation 
              name="Tasty n Alder"
              distance="1.0 miles"
              description="Brunch and American comfort food"
            />
          </Section>

          <Section title="Attractions">
            <Recommendation 
              name="Powell's City of Books"
              distance="1.5 miles"
              description="World's largest independent bookstore"
            />
            <Recommendation 
              name="Portland Saturday Market"
              distance="1.3 miles"
              description="Arts, crafts, and food (Weekends)"
            />
          </Section>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="space-y-8">
          <Section icon={<Phone size={24} />} title="Emergency Contacts">
            <InfoRow label="Emergency Services" value="911" />
            <InfoRow label="Police Non-Emergency" value="(503) 823-3333" />
            <InfoRow label="Nearest Hospital" value="OHSU Hospital" />
            <InfoRow label="Hospital Address" value="3181 SW Sam Jackson Park Rd" />
          </Section>

          <Section title="Property Support">
            <InfoRow label="Host" value="Sarah Johnson" />
            <InfoRow label="Phone" value="(503) 555-0123" />
            <InfoRow label="Email" value="sarah@example.com" />
            <p className="text-gray-600 mt-4 text-sm">
              Available 9 AM - 9 PM for non-emergencies
            </p>
          </Section>

          <Section title="Utilities">
            <InfoRow label="Internet Provider" value="Comcast" />
            <InfoRow label="Support" value="1-800-COMCAST" />
            <InfoRow label="Electricity" value="Pacific Power" />
            <InfoRow label="Support" value="1-888-221-7070" />
          </Section>
        </TabsContent>
      </Tabs>

      <Separator className="my-12" />

      {/* Footer */}
      <div className="text-center text-gray-600 text-sm">
        <p>Thank you for choosing our home.</p>
        <p className="mt-2">We hope you have a wonderful stay!</p>
      </div>
    </div>
  );
}

function Section({ 
  icon, 
  title, 
  children 
}: { 
  icon?: React.ReactNode; 
  title: string; 
  children: React.ReactNode 
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        {icon && <div className="text-black">{icon}</div>}
        <h2>{title}</h2>
      </div>
      <div className="pl-0 md:pl-9">{children}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-gray-100">
      <span className="text-gray-600">{label}</span>
      <span className="text-black">{value}</span>
    </div>
  );
}

function Recommendation({ 
  name, 
  distance, 
  description 
}: { 
  name: string; 
  distance: string; 
  description: string 
}) {
  return (
    <div className="py-3 border-b border-gray-100 last:border-0">
      <div className="flex justify-between items-start mb-1">
        <span className="text-black">{name}</span>
        <span className="text-gray-500 text-sm">{distance}</span>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
