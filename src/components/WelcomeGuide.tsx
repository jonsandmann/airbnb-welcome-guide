import { Wifi, Home, Coffee, MapPin, Phone, Clock, Book, UtensilsCrossed, Mountain, ShoppingBag } from "lucide-react";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import cactusIcon from "../assets/cactus.svg";

export function WelcomeGuide() {
  return (
    <div className="max-w-4xl mx-auto p-8 md:p-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-4">
          <img src={cactusIcon} alt="Cactus" className="w-16 h-16" style={{ filter: 'invert(27%) sepia(24%) saturate(1265%) hue-rotate(88deg) brightness(95%) contrast(91%)' }} />
        </div>
        <h1 className="mb-2 text-forest font-bold">Welcome to Your Stay</h1>
        <p className="text-sage-dark">We're happy to have you here</p>
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
            <InfoRow label="Network" value="Maricopa" />
            <InfoRow label="Password" value="piestewa" />
          </Section>

          <Section icon={<Home size={24} />} title="Address & Access">
            <InfoRow label="Street" value="4444 N 25th St #17" />
            <InfoRow label="City" value="Phoenix, AZ 85016" />
            <InfoRow label="Pool Gate Code" value="1523" />
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
            <ul className="space-y-3 text-sage-dark">
              <li>• No smoking inside the property</li>
              <li>• Maximum occupancy: 4 guests</li>
              <li>• No parties or events</li>
              <li>• Keep noise to a minimum after 10 PM</li>
              <li>• Please turn off all lights when leaving</li>
              <li>• Don't run AC with doors/windows open</li>
            </ul>
          </Section>

          <Section icon={<Home size={24} />} title="Parking & Garage">
            <InfoRow label="Parking" value="2 Car Garage + Street" />
            <p className="text-sage-dark text-sm mt-3">
              Use the street parking in front of the house and the garage. No overnight parking allowed in guest spaces.
            </p>
          </Section>

          <Section title="Thermostats">
            <p className="text-sage-dark mb-2">
              Google Nest thermostats control heating and cooling. Slide your finger along the right side to adjust temperature, then tap the right side to confirm your selection. Please don't run AC with doors/windows open.
            </p>
          </Section>

          <Section title="Electric Scooters">
            <p className="text-sage-dark mb-2">Two scooters are available for guest use</p>
            <InfoRow label="Lock Code" value="8569" />
          </Section>

          <Section title="TV & Streaming">
            <p className="text-sage-dark mb-2">
              All TVs use Roku. Inputs automatically switch to Roku. You can log into your streaming services, and credentials will be cleared after your checkout date.
            </p>
          </Section>

          <Section title="Linens & Extras">
            <p className="text-sage-dark text-sm mb-1">• Extra blankets available in guest rooms</p>
            <p className="text-sage-dark text-sm">• Extra linens available in both full bathrooms</p>
          </Section>

          <Section title="Amenities">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sage-dark">• Community Pool</p>
                <p className="text-sage-dark">• Hot Tub</p>
                <p className="text-sage-dark">• Dog Area</p>
                <p className="text-sage-dark">• Elevator</p>
              </div>
              <div className="space-y-2">
                <p className="text-sage-dark">• Air Conditioning</p>
                <p className="text-sage-dark">• Full Kitchen</p>
                <p className="text-sage-dark">• Washer & Dryer</p>
                <p className="text-sage-dark">• WiFi</p>
              </div>
            </div>
          </Section>

          <Section title="Trash & Recycling">
            <p className="text-sage-dark">Located to the left of the community area</p>
          </Section>

          <Section title="Checkout">
            <p className="text-sage-dark mb-3 font-medium">Before you leave:</p>
            <ul className="space-y-2 text-sage-dark text-sm">
              <li>• Leave beds unmade</li>
              <li>• Rinse and load the dishwasher</li>
              <li>• Empty fridge and cupboards of perishable food items</li>
              <li>• Turn off all lights</li>
              <li>• Close and lock all windows and doors</li>
              <li>• Return house key and garage door opener to console table</li>
              <li>• Message the host to confirm checkout</li>
            </ul>
            <p className="text-sage-dark text-sm mt-4 font-medium">
              Thank you for leaving the space tidy!
            </p>
          </Section>
        </TabsContent>

        {/* Local Tab */}
        <TabsContent value="local" className="space-y-8">
          <Section icon={<Coffee size={24} />} title="Coffee & Breakfast">
            <Recommendation
              name="Breakfast Club"
              distance="0.5 miles (10 min walk)"
              description="Biltmore Fashion Park - Creative breakfast and brunch spot"
            />
            <Recommendation
              name="Giant Coffee"
              distance="2.3 miles"
              description="Local favorite with great pastries and specialty drinks"
            />
            <Recommendation
              name="Snooze, an A.M. Eatery"
              distance="3.1 miles"
              description="Creative breakfast classics and pancake flights"
            />
            <Recommendation
              name="Press Coffee"
              distance="2.8 miles"
              description="Artisan coffee roaster with multiple locations"
            />
            <Recommendation
              name="Matt's Big Breakfast"
              distance="4.2 miles"
              description="Phoenix institution for classic American breakfast"
            />
          </Section>

          <Section icon={<UtensilsCrossed size={24} />} title="Brunch & Lunch">
            <Recommendation
              name="The Henry"
              distance="3.5 miles"
              description="Modern American cuisine in a stylish setting"
            />
            <Recommendation
              name="Postino Central"
              distance="2.9 miles"
              description="Wine bar with bruschetta boards and great patio"
            />
            <Recommendation
              name="The Gladly"
              distance="3.8 miles"
              description="Seasonal menu and craft cocktails"
            />
            <Recommendation
              name="Windsor"
              distance="3.2 miles"
              description="Farm-to-table brunch in a renovated 1940s home"
            />
          </Section>

          <Section icon={<MapPin size={24} />} title="Dinner">
            <Recommendation
              name="Pizzeria Bianco"
              distance="4.5 miles"
              description="Award-winning wood-fired pizza, reservations recommended"
            />
            <Recommendation
              name="Barrio Cafe"
              distance="3.8 miles"
              description="Authentic Mexican cuisine and vibrant atmosphere"
            />
            <Recommendation
              name="Ocotillo"
              distance="3.6 miles"
              description="Contemporary American with beautiful patio dining"
            />
            <Recommendation
              name="Hula's Modern Tiki"
              distance="2.7 miles"
              description="Island-inspired dishes and tropical cocktails"
            />
          </Section>

          <Section icon={<Mountain size={24} />} title="Hiking & Outdoors">
            <Recommendation
              name="Camelback Mountain"
              distance="5.2 miles"
              description="Challenging hike with stunning city views (Echo Canyon or Cholla Trail)"
            />
            <Recommendation
              name="Papago Park"
              distance="3.8 miles"
              description="Easy trails, Hole-in-the-Rock, and Desert Botanical Garden"
            />
            <Recommendation
              name="Piestewa Peak"
              distance="6.1 miles"
              description="Popular summit trail with 360-degree views"
            />
            <Recommendation
              name="Desert Botanical Garden"
              distance="4.1 miles"
              description="50,000+ desert plants and seasonal events"
            />
          </Section>

          <Section icon={<ShoppingBag size={24} />} title="Shopping">
            <Recommendation
              name="Biltmore Fashion Park"
              distance="0.5 miles (10 min walk, 3 min drive)"
              description="Open-air shopping with designer stores and dining"
            />
            <Recommendation
              name="Scottsdale Fashion Square"
              distance="20 min drive"
              description="Upscale mall with luxury brands and dining"
            />
            <Recommendation
              name="Old Town Scottsdale"
              distance="20 min drive"
              description="Art galleries, boutiques, and Southwest charm"
            />
            <Recommendation
              name="Local Nomad"
              distance="3.3 miles"
              description="Curated gifts, home goods, and local artisan products"
            />
          </Section>

          <Section title="Attractions">
            <Recommendation
              name="Heard Museum"
              distance="3.5 miles"
              description="World-renowned Native American art and culture"
            />
            <Recommendation
              name="Phoenix Art Museum"
              distance="2.1 miles"
              description="Largest art museum in the Southwest"
            />
            <Recommendation
              name="Musical Instrument Museum"
              distance="20 min drive"
              description="5,000+ instruments from around the world"
            />
            <Recommendation
              name="Taliesin West"
              distance="20 min drive"
              description="Frank Lloyd Wright's winter home and architecture school"
            />
          </Section>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="space-y-8">
          <Section icon={<Phone size={24} />} title="Emergency Contacts">
            <InfoRow label="Emergency Services" value="911" />
            <InfoRow label="Police Non-Emergency" value="(602) 262-6151" />
            <InfoRow label="Nearest Hospital" value="Phoenix Children's Hospital" />
            <InfoRow label="Hospital Phone" value="(602) 933-1000" />
          </Section>

          <Section title="Host Contact">
            <InfoRow label="Host" value="Jonathan Sandmann" />
            <InfoRow label="Phone" value="+1 (229) 560-8291" />
            <InfoRow label="Email" value="jonsandmann@protonmail.com" />
            <p className="text-sage-dark mt-4 text-sm">
              Available for questions and support during your stay
            </p>
          </Section>

          <Section title="Building Information">
            <InfoRow label="Elevator" value="Working phone available" />
            <InfoRow label="Last Serviced" value="April 2025" />
            <p className="text-sage-dark mt-4 text-sm">
              The elevator is regularly maintained and equipped with an emergency phone
            </p>
          </Section>
        </TabsContent>
      </Tabs>

      <Separator className="my-12" />

      {/* Footer */}
      <div className="text-center text-sage-dark text-sm">
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
        {icon && <div className="text-forest">{icon}</div>}
        <h2 className="text-forest">{title}</h2>
      </div>
      <div className="pl-0 md:pl-9">{children}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-beige-dark">
      <span className="text-sage-dark">{label}</span>
      <span className="text-forest font-medium">{value}</span>
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
    <div className="py-3 border-b border-beige-dark last:border-0">
      <div className="flex justify-between items-start mb-1">
        <span className="text-forest font-medium">{name}</span>
        <span className="text-sage text-sm">{distance}</span>
      </div>
      <p className="text-sage-dark text-sm">{description}</p>
    </div>
  );
}
